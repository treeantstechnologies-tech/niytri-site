import { z } from "zod";

export const insertEnquirySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  company: z.string().min(1, "Company is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  companySize: z.string().min(1, "Company size is required"),
  industry: z.string().min(1, "Industry is required"),
  message: z.string().optional().nullable(),
});

export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;

export type Enquiry = InsertEnquiry & {
  id: string;
  createdAt: string;
};
