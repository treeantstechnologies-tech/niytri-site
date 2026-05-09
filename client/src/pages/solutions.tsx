import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Building,
  Factory,
  GraduationCap,
  Landmark,
  Pill,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const industries = [
  {
    icon: <Landmark className="w-10 h-10" />,
    name: "Banking & Finance",
    badge: "Primary Focus",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "RBI and SEBI compliance assistance, customer service automation, fraud detection support, KYC intelligence, and loan processing for banks and NBFCs.",
    useCases: [
      "RBI & SEBI circular search and compliance guidance",
      "Customer query resolution — 24/7 automation",
      "KYC document verification assistance",
      "Loan eligibility assessment and documentation",
      "Treasury operations and reporting",
      "Audit trail and risk documentation",
    ],
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    name: "Insurance",
    badge: "Primary Focus",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    description: "IRDAI compliance, policy query automation, claims processing support, and agent productivity tools for life, general, and health insurance companies.",
    useCases: [
      "IRDAI regulation search and compliance",
      "Policy and premium query resolution",
      "Claims status and documentation assistance",
      "Agent onboarding and training support",
      "Underwriting query assistance",
      "Customer grievance management",
    ],
    color: "from-indigo-600 to-purple-600",
  },
  {
    icon: <Factory className="w-10 h-10" />,
    name: "Manufacturing",
    badge: "Active Clients",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    description: "Operational queries, maintenance scheduling, inventory management, and compliance documentation for manufacturing enterprises.",
    useCases: [
      "Equipment maintenance queries",
      "Safety protocol assistance",
      "Inventory and procurement queries",
      "Quality compliance documentation",
      "Supplier management support",
      "Production analytics and reporting",
    ],
    color: "from-amber-600 to-orange-600",
  },
  {
    icon: <Building className="w-10 h-10" />,
    name: "IT & Technology",
    description: "IT helpdesk automation, code documentation search, DevOps assistance, and internal knowledge base management for tech companies.",
    useCases: [
      "24/7 IT support automation",
      "Code and documentation search",
      "Onboarding assistance for new hires",
      "Internal policy FAQ",
      "Incident management support",
      "DevOps runbook assistance",
    ],
    color: "from-cyan-600 to-teal-600",
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    name: "Retail & E-commerce",
    description: "Customer service automation, inventory queries, vendor management, and sales analytics for retail businesses.",
    useCases: [
      "Customer support automation",
      "Product information queries",
      "Vendor onboarding assistance",
      "Sales performance analytics",
      "Return and refund process guidance",
      "Category management support",
    ],
    color: "from-pink-600 to-rose-600",
  },
  {
    icon: <Pill className="w-10 h-10" />,
    name: "Healthcare & Pharma",
    description: "Medical information retrieval, compliance assistance, patient query management, and drug interaction checks.",
    useCases: [
      "Medical literature search",
      "CDSCO compliance guidance",
      "Patient education materials",
      "Clinical trial documentation",
      "Formulary and drug information",
      "Provider credentialing assistance",
    ],
    color: "from-emerald-600 to-green-600",
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    name: "Education",
    description: "Student support, faculty assistance, administrative queries, and learning resource management for educational institutions.",
    useCases: [
      "Student admission queries",
      "Course information assistance",
      "Faculty research support",
      "Administrative FAQ",
      "Scholarship information",
      "Exam schedule and results assistance",
    ],
    color: "from-violet-600 to-purple-600",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    name: "Logistics & Supply Chain",
    description: "Shipment tracking, vendor queries, route optimization guidance, and compliance documentation for logistics companies.",
    useCases: [
      "Shipment status queries",
      "Vendor communication assistance",
      "Customs documentation support",
      "Driver assistance and support",
      "Warehouse operations queries",
      "Last-mile delivery coordination",
    ],
    color: "from-slate-600 to-gray-600",
  },
];

const benefits = [
  {
    title: "Reduce Support Costs",
    value: "60%",
    description: "Lower operational costs by automating routine queries",
  },
  {
    title: "Faster Resolution",
    value: "5x",
    description: "Accelerate issue resolution with instant AI responses",
  },
  {
    title: "Employee Productivity",
    value: "40%",
    description: "Free up employees to focus on high-value tasks",
  },
  {
    title: "24/7 Availability",
    value: "100%",
    description: "Round-the-clock support without additional staffing",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6 inline-block">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              AI Solutions for Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NIYTRI AI is purpose-built for BFSI enterprises, with deep regulatory context for RBI, 
              SEBI, and IRDAI. We also serve Manufacturing, IT, and other sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                  {benefit.value}
                </div>
                <div className="font-bold mb-1">{benefit.title}</div>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Tailored for Your Industry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pre-configured solutions with industry-specific knowledge and compliance awareness.
            </p>
          </motion.div>

          <div className="space-y-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                data-testid={`card-industry-${idx}`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shrink-0`}>
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-display font-bold">{industry.name}</h3>
                      {industry.badge && (
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${industry.badgeColor}`}>
                          {industry.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {industry.useCases.map((useCase, uidx) => (
                        <div key={uidx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Find the Right Solution for Your Business
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Our team will help you identify the best AI configuration for your industry and use cases.
            </p>
            <Link href="/enquiry">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 h-14">
                Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
