import { useEffect } from "react";
import { useLocation } from "wouter";

const BASE_URL = "https://www.niytri.com";

interface PageMeta {
  title: string;
  description: string;
}

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "NIYTRI AI | Enterprise AI Platform for Indian Businesses",
    description:
      "NIYTRI AI is India's enterprise AI platform for BFSI. 7 specialized AI assistants for IT support, sales, HR, finance, and compliance — with RBI, SEBI, and IRDAI regulatory context.",
  },
  "/platform": {
    title: "AI Platform — RAG, Multi-LLM, RBAC & DataLens | NIYTRI AI",
    description:
      "Explore the NIYTRI AI platform: RAG document intelligence, multi-LLM support, role-based access control, MFA, DataLens analytics, and Astra global search.",
  },
  "/solutions": {
    title: "AI Solutions for BFSI & Manufacturing | NIYTRI AI",
    description:
      "Industry AI solutions for banking, financial services, insurance, and manufacturing — compliance, KYC/AML, customer service automation, and operations intelligence.",
  },
  "/services": {
    title: "IT Services — Cloud, Testing, Consulting & Development | NIYTRI AI",
    description:
      "Enterprise IT services: cloud infrastructure on AWS/Azure/GCP, software testing and QA, resource outsourcing, IT consultation, and custom software development.",
  },
  "/products": {
    title: "AI Products — 7 Specialized Enterprise Assistants | NIYTRI AI",
    description:
      "Meet NIYTRI's AI assistants: IT Support Bot, Sales Assistant, Finance & Ops Bot, HR Partner, Compliance Bot, DataLens Analytics, and Astra Global Search.",
  },
  "/about": {
    title: "About Us — Enterprise AI Built in India | NIYTRI AI",
    description:
      "NIYTRI Solutions builds enterprise AI for Indian businesses. Learn about our mission, team, and why leading BFSI and manufacturing companies choose NIYTRI AI.",
  },
  "/contact": {
    title: "Contact Us | NIYTRI AI",
    description:
      "Get in touch with the NIYTRI AI team. Questions about the platform, IT services, or partnerships — we respond within 24 business hours.",
  },
  "/enquiry": {
    title: "Request a Demo | NIYTRI AI",
    description:
      "Request a personalized demo of NIYTRI AI's enterprise platform. See how specialized AI assistants can transform your compliance, operations, and customer service.",
  },
};

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/** Updates title, meta description, canonical, and OG tags on route change. */
export function usePageMeta() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = pageMeta[location] ?? {
      title: "Page Not Found | NIYTRI AI",
      description: "The page you are looking for does not exist.",
    };

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", `${BASE_URL}${location === "/" ? "/" : location}`);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = `${BASE_URL}${location === "/" ? "/" : location}`;

    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [location]);
}

export const seoRoutes = Object.keys(pageMeta);
