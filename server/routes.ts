import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { sendMail } from "./mailer";

const NOTIFY_TO = (process.env.ENQUIRY_NOTIFY_TO || "admin@niytri.com,amit@niytri.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/** Escape user-supplied strings before embedding in HTML emails */
function esc(value: string | null | undefined): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/enquiries", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);

      const enquiry = await storage.createEnquiry(validatedData);

      try {
        // Confirmation to the enquirer
        await sendMail({
          to: [validatedData.email],
          subject: "Thank you for your interest in NIYTRI AI",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed;">Thank You for Contacting NIYTRI AI!</h2>
              <p>Dear ${esc(validatedData.firstName)} ${esc(validatedData.lastName)},</p>
              <p>We've received your demo request and our team will get back to you within 24 business hours.</p>

              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Your Submission Details:</h3>
                <p><strong>Company:</strong> ${esc(validatedData.company)}</p>
                <p><strong>Job Title:</strong> ${esc(validatedData.jobTitle)}</p>
                <p><strong>Industry:</strong> ${esc(validatedData.industry)}</p>
                <p><strong>Company Size:</strong> ${esc(validatedData.companySize)}</p>
                ${validatedData.message ? `<p><strong>Message:</strong> ${esc(validatedData.message)}</p>` : ""}
              </div>

              <p>In the meantime, feel free to explore our platform documentation or reach out to us at <a href="mailto:admin@niytri.com">admin@niytri.com</a></p>

              <p style="margin-top: 30px; color: #666;">Best regards,<br/>The NIYTRI AI Team</p>
            </div>
          `,
        });

        // Notification to the NIYTRI team
        await sendMail({
          to: NOTIFY_TO,
          replyTo: validatedData.email,
          subject: `New Demo Request from ${validatedData.company}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed;">New Demo Request Received</h2>

              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
                <p><strong>Name:</strong> ${esc(validatedData.firstName)} ${esc(validatedData.lastName)}</p>
                <p><strong>Email:</strong> ${esc(validatedData.email)}</p>
                <p><strong>Phone:</strong> ${esc(validatedData.phone)}</p>
                <p><strong>Company:</strong> ${esc(validatedData.company)}</p>
                <p><strong>Job Title:</strong> ${esc(validatedData.jobTitle)}</p>
                <p><strong>Industry:</strong> ${esc(validatedData.industry)}</p>
                <p><strong>Company Size:</strong> ${esc(validatedData.companySize)}</p>
                ${validatedData.message ? `<p><strong>Message:</strong> ${esc(validatedData.message)}</p>` : ""}
              </div>

              <p style="color: #666; font-size: 12px;">Enquiry ID: #${enquiry.id} | Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }

      res.json({
        success: true,
        message: "Enquiry submitted successfully",
        enquiryId: enquiry.id,
      });
    } catch (error) {
      console.error("Error creating enquiry:", error);
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : "Failed to submit enquiry",
      });
    }
  });

  // Protected: requires ADMIN_API_KEY (sent as X-Api-Key header)
  app.get("/api/enquiries", async (req, res) => {
    const adminKey = process.env.ADMIN_API_KEY;
    if (!adminKey || req.header("x-api-key") !== adminKey) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    try {
      const enquiries = await storage.getAllEnquiries();
      res.json(enquiries);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch enquiries",
      });
    }
  });

  return httpServer;
}
