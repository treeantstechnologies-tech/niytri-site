import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { getUncachableResendClient } from "./resend-client";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/enquiries", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);
      
      const enquiry = await storage.createEnquiry(validatedData);
      
      try {
        const { client, fromEmail } = await getUncachableResendClient();
        
        await client.emails.send({
          from: fromEmail,
          to: validatedData.email,
          subject: "Thank you for your interest in NIYTRI AI",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed;">Thank You for Contacting NIYTRI AI!</h2>
              <p>Dear ${validatedData.firstName} ${validatedData.lastName},</p>
              <p>We've received your demo request and our team will get back to you within 24 business hours.</p>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Your Submission Details:</h3>
                <p><strong>Company:</strong> ${validatedData.company}</p>
                <p><strong>Job Title:</strong> ${validatedData.jobTitle}</p>
                <p><strong>Industry:</strong> ${validatedData.industry}</p>
                <p><strong>Company Size:</strong> ${validatedData.companySize}</p>
                ${validatedData.message ? `<p><strong>Message:</strong> ${validatedData.message}</p>` : ''}
              </div>
              
              <p>In the meantime, feel free to explore our platform documentation or reach out to us at <a href="mailto:hello@niytri.com">hello@niytri.com</a></p>
              
              <p style="margin-top: 30px; color: #666;">Best regards,<br/>The NIYTRI AI Team</p>
            </div>
          `,
        });

        await client.emails.send({
          from: fromEmail,
          to: "support@niytri.com",
          subject: `New Demo Request from ${validatedData.company}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed;">New Demo Request Received</h2>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
                <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Phone:</strong> ${validatedData.phone}</p>
                <p><strong>Company:</strong> ${validatedData.company}</p>
                <p><strong>Job Title:</strong> ${validatedData.jobTitle}</p>
                <p><strong>Industry:</strong> ${validatedData.industry}</p>
                <p><strong>Company Size:</strong> ${validatedData.companySize}</p>
                ${validatedData.message ? `<p><strong>Message:</strong> ${validatedData.message}</p>` : ''}
              </div>
              
              <p style="color: #666; font-size: 12px;">Enquiry ID: #${enquiry.id} | Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }
      
      res.json({ 
        success: true, 
        message: "Enquiry submitted successfully",
        enquiryId: enquiry.id 
      });
    } catch (error) {
      console.error("Error creating enquiry:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit enquiry" 
      });
    }
  });

  app.get("/api/enquiries", async (req, res) => {
    try {
      const enquiries = await storage.getAllEnquiries();
      res.json(enquiries);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch enquiries" 
      });
    }
  });

  return httpServer;
}
