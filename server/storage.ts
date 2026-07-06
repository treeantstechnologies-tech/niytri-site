import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";
import { type Enquiry, type InsertEnquiry } from "@shared/schema";

// One .txt file per enquiry. Override the folder with ENQUIRIES_DIR if needed.
const ENQUIRIES_DIR =
  process.env.ENQUIRIES_DIR || path.resolve(process.cwd(), "data", "enquiries");

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getAllEnquiries(): Promise<{ file: string; content: string }[]>;
}

export class FileStorage implements IStorage {
  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    await fs.mkdir(ENQUIRIES_DIR, { recursive: true });

    const now = new Date();
    const createdAt = now.toISOString();
    // Filename sorts chronologically: 2026-07-06T12-30-45_ab12cd34.txt
    const id = `${createdAt.slice(0, 19).replace(/:/g, "-")}_${randomUUID().slice(0, 8)}`;

    const enquiry: Enquiry = { id, createdAt, ...insertEnquiry };

    const content = [
      `Enquiry ID: ${id}`,
      `Submitted: ${now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`,
      ``,
      `Name: ${insertEnquiry.firstName} ${insertEnquiry.lastName}`,
      `Email: ${insertEnquiry.email}`,
      `Phone: ${insertEnquiry.phone}`,
      `Company: ${insertEnquiry.company}`,
      `Job Title: ${insertEnquiry.jobTitle}`,
      `Industry: ${insertEnquiry.industry}`,
      `Company Size: ${insertEnquiry.companySize}`,
      `Message: ${insertEnquiry.message ?? "-"}`,
      ``,
    ].join("\n");

    await fs.writeFile(path.join(ENQUIRIES_DIR, `${id}.txt`), content, "utf8");

    return enquiry;
  }

  async getAllEnquiries(): Promise<{ file: string; content: string }[]> {
    let files: string[];
    try {
      files = await fs.readdir(ENQUIRIES_DIR);
    } catch {
      return []; // folder doesn't exist yet -> no enquiries
    }

    const result: { file: string; content: string }[] = [];
    for (const file of files.filter((f) => f.endsWith(".txt")).sort()) {
      const content = await fs.readFile(path.join(ENQUIRIES_DIR, file), "utf8");
      result.push({ file, content });
    }
    return result;
  }
}

export const storage = new FileStorage();
