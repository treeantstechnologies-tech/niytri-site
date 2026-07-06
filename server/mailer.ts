/**
 * Microsoft 365 mailer via Microsoft Graph API (client-credentials flow).
 *
 * Required env vars:
 *   M365_TENANT_ID     - Entra ID (Azure AD) tenant ID
 *   M365_CLIENT_ID     - App registration client ID
 *   M365_CLIENT_SECRET - App registration client secret
 *   M365_SENDER        - Mailbox to send from, e.g. admin@niytri.com
 *                        (app needs Mail.Send application permission,
 *                        admin-consented; optionally restricted to this
 *                        mailbox via an ApplicationAccessPolicy)
 */

interface TokenCache {
  accessToken: string;
  expiresAt: number; // epoch ms
}

let tokenCache: TokenCache | null = null;

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

async function getAccessToken(): Promise<string> {
  // Reuse cached token if it has >60s of life left
  if (tokenCache && tokenCache.expiresAt - Date.now() > 60_000) {
    return tokenCache.accessToken;
  }

  const tenantId = requiredEnv("M365_TENANT_ID");
  const clientId = requiredEnv("M365_CLIENT_ID");
  const clientSecret = requiredEnv("M365_CLIENT_SECRET");

  const res = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    },
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Failed to get Graph token (${res.status}): ${body}`);
  }

  const data = (await res.json()) as {
    access_token: string;
    expires_in: number;
  };

  tokenCache = {
    accessToken: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };

  return tokenCache.accessToken;
}

export interface SendMailOptions {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail(options: SendMailOptions): Promise<void> {
  const sender = requiredEnv("M365_SENDER");
  const token = await getAccessToken();

  const message = {
    message: {
      subject: options.subject,
      body: { contentType: "HTML", content: options.html },
      toRecipients: options.to.map((address) => ({
        emailAddress: { address },
      })),
      ...(options.replyTo
        ? { replyTo: [{ emailAddress: { address: options.replyTo } }] }
        : {}),
    },
    saveToSentItems: true,
  };

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    },
  );

  // Graph returns 202 Accepted on success
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Graph sendMail failed (${res.status}): ${body}`);
  }
}
