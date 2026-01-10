import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Bot,
  Brain,
  ChartBar,
  ChevronRight,
  Database,
  Eye,
  FileText,
  Globe,
  HeadphonesIcon,
  IndianRupee,
  Layers,
  Lock,
  MessageSquare,
  Scale,
  Search,
  Settings,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const bots = [
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    name: "Technology Support Bot",
    description: "Your 24/7 IT helpdesk assistant that resolves technical queries, troubleshoots issues, manages IT tickets, and guides users through common problems.",
    features: ["Ticket Management", "Knowledge Base Search", "Troubleshooting Guides", "Asset Tracking"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <IndianRupee className="w-8 h-8" />,
    name: "Sales Assistant",
    description: "Accelerate your sales cycles with intelligent lead qualification, proposal generation, competitor analysis, and CRM integration.",
    features: ["Lead Scoring", "Proposal Templates", "Competitor Intel", "Pipeline Analytics"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <ChartBar className="w-8 h-8" />,
    name: "Operations & Finance Bot",
    description: "Streamline financial operations with expense tracking, budget analysis, operational reporting, and vendor management assistance.",
    features: ["Expense Tracking", "Budget Forecasting", "Invoice Processing", "Vendor Queries"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: "HR Partner",
    description: "Handle employee queries, leave management, policy assistance, onboarding support, and performance review scheduling.",
    features: ["Leave Management", "Policy FAQ", "Onboarding", "Benefits Info"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    name: "RBI Compliance Bot",
    description: "Navigate Reserve Bank of India regulations with AI-powered compliance guidance, circular search, and regulatory updates for banks and NBFCs.",
    features: ["RBI Circulars", "KYC Guidelines", "AML Compliance", "Regulatory Updates"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Database className="w-8 h-8" />,
    name: "DataLens Analytics",
    description: "Query your databases using natural language. Execute complex SQL queries with JOINs through simple conversational questions.",
    features: ["Natural Language SQL", "Multi-table JOINs", "Read-only Access", "Visual Results"],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    name: "Astra Global Search",
    description: "Search across your entire knowledge base with optional web-augmented responses. Toggle between internal-only and web-enhanced modes.",
    features: ["Knowledge Base", "Web Search", "Document RAG", "Source Citations"],
    color: "from-teal-500 to-cyan-500",
  },
];

const capabilities = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "RAG Document Intelligence",
    description: "Upload PDFs, Word documents, and presentations. Our RAG system indexes content and enables context-aware AI responses grounded in your knowledge base.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Vision API Integration",
    description: "Analyze charts, graphs, images, and diagrams within documents. Extract insights from visual data using GPT-4 Vision capabilities.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Role-based access control, MFA via email OTP, audit logging, and data encryption. Compliant with enterprise security standards.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Full Customization",
    description: "White-label branding, custom themes, configurable system prompts, and flexible deployment options (cloud or on-premise).",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-LLM Architecture",
    description: "Choose from OpenAI GPT-4, Anthropic Claude, or other models. Switch models per bot based on cost and capability requirements.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Usage Analytics",
    description: "Track LLM token usage, API calls, user sessions, and bot performance. Monitor costs and optimize AI spend.",
  },
];

const roles = [
  { name: "Superadmin", desc: "Full system access including audit logs and security settings", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { name: "Admin", desc: "User management, settings configuration, document management", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { name: "Manager", desc: "Department-level access with team oversight capabilities", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { name: "Employee", desc: "Standard user access to assigned bots based on role", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "Finance Lead", desc: "Finance bot access with reporting and compliance features", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Document Uploader", desc: "Knowledge base document management and upload permissions", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
];

export default function Platform() {
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
              Platform Overview
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              The Complete Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                AI Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seven specialized AI assistants, advanced document intelligence, and enterprise-grade security — 
              all in one unified platform built for Indian businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Bots Detail */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">AI Assistants</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each bot is purpose-built for specific business functions with customizable prompts and knowledge bases.
            </p>
          </motion.div>

          <div className="space-y-8">
            {bots.map((bot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
                data-testid={`card-platform-bot-${idx}`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bot.color} flex items-center justify-center text-white shrink-0`}>
                    {bot.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold mb-3">{bot.name}</h3>
                    <p className="text-muted-foreground mb-6">{bot.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {bot.features.map((feature, fidx) => (
                        <span
                          key={fidx}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced features that power enterprise AI deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Role-Based Access Control</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pre-defined roles with granular permissions. Admins can create custom roles as needed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border rounded-xl p-6 ${role.color}`}
              >
                <h3 className="text-lg font-bold mb-2">{role.name}</h3>
                <p className="text-sm opacity-80">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              See the Platform in Action
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Request a personalized demo to see how NIYTRI AI can transform your enterprise operations.
            </p>
            <Link href="/enquiry">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100 px-8 h-14">
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
