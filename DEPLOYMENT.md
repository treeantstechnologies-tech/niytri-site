# NIYTRI Site — AWS EC2 Deployment Guide

The site is a Node/Express app that serves the built React frontend and the enquiry API on one port (5000), behind nginx with SSL. Enquiries are saved as .txt files in `data/enquiries/` and emailed via Microsoft 365 (Graph API). No database required.

## 1. Get the code onto the server

```bash
ssh ubuntu@15.207.97.16
git clone https://github.com/treeantstechnologies-tech/niytri-site.git niytri-site
cd niytri-site
```

(EC2: public IP 15.207.97.16, private IP 172.31.14.191. Attach an Elastic IP so the public IP survives instance stops.)

## 2. One-time server setup

```bash
bash deploy/setup-ec2.sh
```

This installs Node 20, nginx, certbot, and PM2, and installs the nginx config from `deploy/nginx.conf`.

AWS side: in the EC2 Security Group, allow inbound TCP 80 and 443 (and 22 for SSH). Port 5000 should NOT be open publicly.

## 3. DNS + SSL

Point `www.niytri.com` and `niytri.com` A records at `15.207.97.16` (or your Elastic IP). Then:

```bash
sudo certbot --nginx -d www.niytri.com -d niytri.com
```

## 4. Microsoft 365 (Graph API) for enquiry emails

In the Microsoft Entra admin center (entra.microsoft.com), signed in as an M365 admin:

1. **App registrations → New registration.** Name it "NIYTRI Site Mailer", single tenant. Note the **Application (client) ID** and **Directory (tenant) ID**.
2. **Certificates & secrets → New client secret.** Copy the secret **Value** immediately (shown once). Note its expiry — you'll need to rotate it.
3. **API permissions → Add a permission → Microsoft Graph → Application permissions → `Mail.Send`**, then click **Grant admin consent**.
4. Recommended: restrict the app to the sending mailbox only, so the secret can't send as anyone else. In Exchange Online PowerShell:
   ```powershell
   New-ApplicationAccessPolicy -AppId <CLIENT_ID> -PolicyScopeGroupId admin@niytri.com -AccessRight RestrictAccess -Description "NIYTRI site mailer"
   ```
5. Make sure `admin@niytri.com` is a real licensed mailbox (not just an alias).

Until these values are filled in, enquiries are still saved to txt files — only the emails are skipped.

## 5. Configure environment

```bash
cp .env.example .env
nano .env    # set ADMIN_API_KEY (e.g. openssl rand -hex 32); M365_* when ready
```

## 6. Deploy

```bash
bash deploy/deploy.sh
pm2 startup   # run the command it prints, so the app survives reboots
```

Every future update: `git pull && bash deploy/deploy.sh`.

## 7. Verify

- https://www.niytri.com loads; all 8 pages navigate correctly
- Submit a test enquiry on /enquiry — a .txt file appears in `data/enquiries/`, and (with M365 configured) the confirmation + notification emails arrive at amit@niytri.com and ashish@niytri.com
- `curl -H "X-Api-Key: YOUR_ADMIN_API_KEY" https://www.niytri.com/api/enquiries` returns stored enquiries; without the key it returns 401
- https://www.niytri.com/sitemap.xml and /robots.txt return 200

## Reading enquiries

```bash
ls ~/niytri-site/data/enquiries/          # one .txt per enquiry, sorted by time
cat ~/niytri-site/data/enquiries/<file>
```

Back this folder up periodically (it's gitignored and not in the repo).

## Troubleshooting

- App logs: `pm2 logs niytri-site`
- Email failures are logged but don't block enquiry submission (the txt file is still written). Common causes: admin consent not granted, secret expired, sender isn't a licensed mailbox.
- After changing `.env`, run `pm2 restart niytri-site`.
