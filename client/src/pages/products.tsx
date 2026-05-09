import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Bot,
  Brain,
  ChartBar,
  Database,
  ExternalLink,
  Globe,
  HeadphonesIcon,
  IndianRupee,
  Layers,
  Scale,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const coreProduct = {
  name: "NIYTRI AI Platform",
  tagline: "Enterprise AI Platform for Indian Businesses",
  description:
    "The flagship NIYTRI AI platform is a unified, multi-bot enterprise solution designed for Indian enterprises. It brings together seven specialized AI assistants, advanced document intelligence, role-based access control, and deep BFSI regulatory context — all in a single deployable platform.",
  highlights: [
    "7 specialized AI assistants",
    "RAG-powered document intelligence",
    "Role-based access control (RBAC)",
    "Multi-LLM support (GPT-4, Claude)",
    "Vision API for image/chart analysis",
    "RBI, SEBI, IRDAI compliance context",
    "IST timezone & INR currency built-in",
    "MFA via email OTP",
    "99.9% uptime SLA",
    "On-premise or cloud deployment",
  ],
  badge: "Core Product",
  badgeColor: "bg-primary/10 text-primary border-primary/30",
  color: "from-violet-600 to-purple-700",
};

const aiModules = [
  {
    icon: <HeadphonesIcon className="w-7 h-7" />,
    name: "IT Support Bot",
    category: "AI Assistant",
    description:
      "24/7 AI-powered IT helpdesk. Resolves technical queries, manages tickets, and guides users through troubleshooting workflows — reducing IT support load significantly.",
    tags: ["Ticket Management", "Knowledge Base", "Auto-escalation"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <IndianRupee className="w-7 h-7" />,
    name: "Sales Assistant",
    category: "AI Assistant",
    description:
      "Intelligent sales acceleration bot for lead qualification, proposal generation, competitor research, and pipeline analytics. Integrates with CRM systems.",
    tags: ["Lead Scoring", "Proposal Gen", "Pipeline Analytics"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <ChartBar className="w-7 h-7" />,
    name: "Operations & Finance Bot",
    category: "AI Assistant",
    description:
      "Streamlines financial operations with expense tracking, budget forecasting, invoice processing, and operational reporting assistance.",
    tags: ["Expense Tracking", "Budget Forecast", "Invoice Processing"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Users className="w-7 h-7" />,
    name: "HR Partner",
    category: "AI Assistant",
    description:
      "Handles employee queries, leave management, HR policy FAQs, onboarding assistance, and benefits information — freeing up HR teams for strategic work.",
    tags: ["Leave Management", "Policy FAQ", "Onboarding"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Scale className="w-7 h-7" />,
    name: "Compliance Bot",
    category: "AI Assistant",
    description:
      "Purpose-built for BFSI enterprises. Searches RBI circulars, SEBI guidelines, IRDAI regulations, and internal compliance documents with AI precision.",
    tags: ["RBI Compliance", "SEBI Search", "Audit Support"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Database className="w-7 h-7" />,
    name: "DataLens Analytics",
    category: "Analytics Module",
    description:
      "Natural language to SQL. Ask business questions in plain English and get instant database query results — including complex multi-table JOINs — without writing any code.",
    tags: ["Natural Language SQL", "Multi-table JOINs", "Read-only Access"],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    name: "Astra Global Search",
    category: "Search Module",
    description:
      "Enterprise-wide knowledge search with optional real-time web augmentation. Toggle between internal-only and web-enhanced response modes. Full source citations included.",
    tags: ["Knowledge Base", "Web Search", "Source Citations"],
    color: "from-teal-500 to-cyan-500",
  },
];

const platformFeatures = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Enterprise Security",
    desc: "RBAC, MFA, audit logging, and data encryption at rest and in transit.",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Multi-LLM Architecture",
    desc: "Switch between GPT-4, Claude, and other models per bot based on requirements.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Vision API",
    desc: "Analyze charts, diagrams, and images within uploaded PDF documents.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "White-label Ready",
    desc: "Custom branding, themes, and domains for seamless enterprise deployment.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Usage Analytics",
    desc: "Token usage, API call tracking, cost monitoring, and bot performance insights.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Custom Bot Builder",
    desc: "Configure custom bots with tailored system prompts and knowledge bases.",
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
              Products
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              AI Products Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Indian Enterprises
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the NIYTRI AI product suite — from the core enterprise platform to specialized 
              AI modules for analytics, search, and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Product Spotlight */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm"
          >
            <div className={`bg-gradient-to-r ${coreProduct.color} p-8 md:p-12 text-white`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Bot className="w-9 h-9 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-3xl font-display font-bold">{coreProduct.name}</h2>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold border border-white/30">
                      {coreProduct.badge}
                    </span>
                  </div>
                  <p className="text-white/80 text-lg">{coreProduct.tagline}</p>
                </div>
              </div>
              <p className="text-white/90 text-base leading-relaxed max-w-3xl">
                {coreProduct.description}
              </p>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="font-bold text-lg mb-6">Platform Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
                {coreProduct.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm bg-muted/50 border border-border rounded-lg px-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/platform">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8">
                    Explore Platform <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/enquiry">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Modules */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              AI Assistants & Modules
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each module is independently configurable and can be deployed as part of the full 
              NIYTRI AI Platform or as a standalone solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                data-testid={`card-product-${idx}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shrink-0`}>
                    {mod.icon}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {mod.category}
                    </span>
                    <h3 className="text-lg font-display font-bold">{mod.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{mod.description}</p>
                <div className="flex flex-wrap gap-2">
                  {mod.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="px-2.5 py-1 rounded-full bg-muted/80 border border-border text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Platform-Wide Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capabilities that span every product in the NIYTRI AI suite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
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
              See the Products in Action
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Request a tailored demo to see exactly how NIYTRI AI products fit your enterprise workflows.
            </p>
            <Link href="/enquiry">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 h-14">
                Request Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
