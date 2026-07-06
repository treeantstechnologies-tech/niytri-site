import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Bot,
  Brain,
  Briefcase,
  ChartBar,
  CheckCircle,
  Database,
  Globe,
  HeadphonesIcon,
  IndianRupee,
  Layers,
  Pill,
  Scale,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const products = [
  {
    id: "investment-intelligence",
    icon: <TrendingUp className="w-10 h-10" />,
    name: "NIYTRI Investment Intelligence",
    tagline: "AI-Powered Market Intelligence for Traders and Brokers",
    badge: "Key Product",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    description:
      "NIYTRI Investment Intelligence is an AI-powered research and analytics platform built for traders, brokers, and investment firms. It turns market data, filings, and news into actionable intelligence — helping desks research faster, spot opportunities earlier, and serve clients with confidence.",
    highlights: [
      "AI-driven market and stock analysis",
      "Real-time market data and alerts",
      "AI research assistant for equities",
      "Portfolio tracking and insights",
      "Technical and fundamental signals",
      "Watchlists and smart screeners",
      "News and sentiment analysis",
      "Broker and trading-desk workflows",
      "SEBI-aware compliance context",
      "Web-based, secure access",
    ],
    color: "from-amber-500 to-orange-600",
    ctaLink: "/enquiry",
    ctaLabel: "Request Demo",
    industries: ["Broking", "Wealth Management", "BFSI"],
  },
  {
    id: "niytri-ai",
    icon: <Bot className="w-10 h-10" />,
    name: "NIYTRI AI",
    tagline: "Enterprise AI Platform for Indian Businesses",
    badge: "Flagship Product",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    description:
      "NIYTRI AI is a unified, multi-bot enterprise platform purpose-built for BFSI and Manufacturing sectors. It brings together seven specialized AI assistants, RAG-powered document intelligence, and deep Indian regulatory context — covering RBI, SEBI, and IRDAI — all deployable on-premise or in the cloud.",
    highlights: [
      "7 specialized AI assistants",
      "RAG-powered document intelligence",
      "Role-based access control (RBAC)",
      "Multi-LLM support (GPT-4, Claude)",
      "Vision API for image/chart analysis",
      "RBI, SEBI, IRDAI compliance context",
      "MFA via email OTP",
      "99.9% uptime SLA",
      "On-premise or cloud deployment",
      "IST timezone & INR built-in",
    ],
    color: "from-violet-600 to-purple-700",
    ctaLink: "/platform",
    ctaLabel: "Explore Platform",
    industries: ["BFSI", "Manufacturing", "IT & Tech"],
  },
  {
    id: "enterprise-crm",
    icon: <Briefcase className="w-10 h-10" />,
    name: "Enterprise CRM",
    tagline: "Customised CRM for Enterprise Operations",
    badge: "Customised Solution",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description:
      "A fully customised Customer Relationship Management platform tailored to the operational workflows of Indian enterprises. Built on proven CRM foundations and adapted with industry-specific modules, automation, and integrations to match how your teams actually work.",
    highlights: [
      "Custom workflow automation",
      "Industry-specific modules",
      "360° customer view",
      "Sales pipeline management",
      "Service request tracking",
      "Native Indian language support",
      "Third-party integrations (ERP, GST)",
      "Role-based access and audit trails",
      "Mobile-first interface",
      "On-premise or SaaS deployment",
    ],
    color: "from-blue-600 to-cyan-600",
    ctaLink: "/enquiry",
    ctaLabel: "Request Demo",
    industries: ["BFSI", "Manufacturing", "Retail"],
  },
  {
    id: "it-transformation-hub",
    icon: <Wrench className="w-10 h-10" />,
    name: "IT Transformation HUB",
    tagline: "A Unified Platform for IT Modernization",
    badge: "Platform Product",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    description:
      "IT Transformation HUB is a centralized platform that brings together your cloud migration, infrastructure monitoring, DevOps pipelines, and IT service management in one place. Designed to help enterprises accelerate digital transformation with visibility, control, and speed.",
    highlights: [
      "Cloud migration planning tools",
      "Infrastructure monitoring dashboard",
      "CI/CD pipeline management",
      "ITSM ticketing and workflows",
      "Cost optimization insights",
      "Multi-cloud support (AWS, Azure, GCP)",
      "Compliance and security auditing",
      "Team collaboration workspace",
      "Vendor and contract management",
      "Executive reporting and analytics",
    ],
    color: "from-green-600 to-teal-600",
    ctaLink: "/enquiry",
    ctaLabel: "Request Demo",
    industries: ["IT & Tech", "BFSI", "Manufacturing"],
  },
  {
    id: "pharma-b2b-connect",
    icon: <Pill className="w-10 h-10" />,
    name: "Pharma B2B Connect",
    tagline: "B2B Commerce Platform for the Pharma Sector",
    badge: "Industry Product",
    badgeColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    description:
      "Pharma B2B Connect is a purpose-built digital commerce and supply chain platform for pharmaceutical manufacturers, distributors, and stockists. It streamlines ordering, inventory management, regulatory documentation, and trade relationships across the pharma supply chain.",
    highlights: [
      "B2B ordering and procurement portal",
      "Distributor and stockist management",
      "Drug inventory and batch tracking",
      "Expiry and compliance alerts",
      "GST-compliant invoicing",
      "CDSCO regulatory documentation",
      "Sales rep performance tracking",
      "Real-time supply chain visibility",
      "Credit and payment management",
      "Mobile app for field teams",
    ],
    color: "from-pink-600 to-rose-600",
    ctaLink: "/enquiry",
    ctaLabel: "Request Demo",
    industries: ["Pharma", "Healthcare", "Distribution"],
  },
];

const niytriAIModules = [
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    name: "IT Support Bot",
    desc: "24/7 IT helpdesk automation with ticket management and knowledge base.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    name: "Sales Assistant",
    desc: "Lead qualification, proposal generation, and pipeline analytics.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <ChartBar className="w-6 h-6" />,
    name: "Finance & Ops Bot",
    desc: "Expense tracking, budget forecasting, and invoice processing.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: "HR Partner",
    desc: "Leave management, policy FAQs, and employee onboarding.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    name: "Compliance Bot",
    desc: "RBI, SEBI, IRDAI regulatory search and compliance guidance.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Database className="w-6 h-6" />,
    name: "DataLens Analytics",
    desc: "Natural language to SQL — query databases conversationally.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Astra Global Search",
    desc: "Knowledge base search with optional real-time web augmentation.",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Products() {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Indian Enterprises
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four purpose-built products spanning AI, CRM, IT transformation, and pharma commerce —
              each designed to solve real business challenges for Indian industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {products.slice(0, 2).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                data-testid={`card-product-${product.id}`}
              >
                <div className={`bg-gradient-to-br ${product.color} p-8 text-white`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                      {product.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-white shrink-0`}>
                      {product.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-1">{product.name}</h2>
                  <p className="text-white/75 text-sm">{product.tagline}</p>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.industries.map((ind) => (
                      <span key={ind} className="px-2.5 py-1 rounded-full bg-muted border border-border text-xs font-medium">
                        {ind}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {product.highlights.slice(0, 6).map((item, hidx) => (
                      <div key={hidx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3">
                    <Link href={product.ctaLink}>
                      <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-5">
                        {product.ctaLabel} <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/enquiry">
                      <Button variant="outline" size="sm" className="rounded-full px-5">
                        Enquire
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.slice(2).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                data-testid={`card-product-${product.id}`}
              >
                <div className={`bg-gradient-to-br ${product.color} p-8 text-white`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                      {product.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-white shrink-0">
                      {product.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-1">{product.name}</h2>
                  <p className="text-white/75 text-sm">{product.tagline}</p>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.industries.map((ind) => (
                      <span key={ind} className="px-2.5 py-1 rounded-full bg-muted border border-border text-xs font-medium">
                        {ind}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {product.highlights.slice(0, 6).map((item, hidx) => (
                      <div key={hidx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3">
                    <Link href={product.ctaLink}>
                      <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-5">
                        {product.ctaLabel} <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/enquiry">
                      <Button variant="outline" size="sm" className="rounded-full px-5">
                        Enquire
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NIYTRI AI Modules */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4 inline-block">
              Inside NIYTRI AI
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              7 Built-In AI Assistants
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each assistant within the NIYTRI AI platform is purpose-built for a specific business function.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {niytriAIModules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white mb-4`}>
                  {mod.icon}
                </div>
                <h3 className="font-bold mb-1.5">{mod.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/platform">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                See Full Platform Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Find the Right Product for Your Business
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Our team will help you identify the right product and tailor it to your specific industry and workflow needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/enquiry">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 h-14">
                  Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
