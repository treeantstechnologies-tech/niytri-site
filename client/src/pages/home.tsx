import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Brain,
  Building2,
  ChartBar,
  CheckCircle,
  Cloud,
  Code2,
  Database,
  FileSearch,
  Globe,
  HeadphonesIcon,
  IndianRupee,
  Lock,
  MessageSquare,
  Scale,
  Shield,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const bfsiUseCases = [
  {
    icon: <Scale className="w-5 h-5" />,
    title: "RBI & SEBI Compliance",
    desc: "AI-powered search through regulatory circulars, guidelines, and compliance requirements.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "KYC & AML Support",
    desc: "Streamline customer onboarding with intelligent document verification assistance.",
  },
  {
    icon: <IndianRupee className="w-5 h-5" />,
    title: "Loan & Credit Intelligence",
    desc: "Speed up credit decisions with AI-assisted eligibility assessment and documentation.",
  },
  {
    icon: <ChartBar className="w-5 h-5" />,
    title: "Treasury & Operations",
    desc: "Real-time analytics and reporting bots for treasury and back-office operations.",
  },
  {
    icon: <HeadphonesIcon className="w-5 h-5" />,
    title: "Customer Service Automation",
    desc: "24/7 AI resolution of banking queries, reducing call center load by up to 60%.",
  },
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: "Audit & Risk Management",
    desc: "AI-assisted audit trails, risk documentation, and regulatory reporting.",
  },
];

const bots = [
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    name: "IT Support Bot",
    desc: "Resolve technical queries, troubleshoot issues, and manage IT tickets with AI precision.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    name: "Sales Assistant",
    desc: "Accelerate sales cycles with intelligent lead qualification and proposal generation.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <ChartBar className="w-6 h-6" />,
    name: "Finance & Ops Bot",
    desc: "Streamline financial operations, expense tracking, and operational reporting.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: "HR Partner",
    desc: "Handle employee queries, leave management, and HR policy assistance.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    name: "Compliance Bot",
    desc: "Navigate RBI, SEBI, IRDAI regulatory requirements with AI-powered compliance guidance.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Database className="w-6 h-6" />,
    name: "DataLens Analytics",
    desc: "Query databases naturally. Execute complex SQL joins with simple questions.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Astra Global Search",
    desc: "Search across your entire knowledge base with web-augmented responses.",
    color: "from-teal-500 to-cyan-500",
  },
];

const features = [
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Role-Based Access Control",
    desc: "Granular permissions at page and bot level with custom role creation.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "MFA via Email OTP",
    desc: "Enterprise-grade security with multi-factor authentication.",
  },
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: "RAG Document Intelligence",
    desc: "Upload documents and get context-aware AI responses.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Vision API Integration",
    desc: "Analyze charts, images, and diagrams within PDF documents.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Indian Localization",
    desc: "IST timezone, INR currency, and GST compliance context built-in.",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Multi-LLM Support",
    desc: "Choose from GPT-4, Claude, and other leading AI models.",
  },
];

const itServices = [
  {
    icon: <Cloud className="w-6 h-6" />,
    name: "Cloud Infrastructure",
    desc: "AWS, Azure, and GCP deployment, migration, and managed services for enterprise workloads.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    name: "Software Testing",
    desc: "End-to-end QA, automation testing, performance testing, and security assessments.",
    color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: "Resource Outsourcing",
    desc: "Dedicated teams of skilled engineers and specialists for your projects.",
    color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    name: "IT Consultation",
    desc: "Strategic technology advisory, architecture reviews, and digital transformation roadmaps.",
    color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    name: "Custom Software Dev",
    desc: "Full-stack development of enterprise applications, APIs, and integrations.",
    color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
  },
];

const stats = [
  { value: "7+", label: "AI Assistants" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500+", label: "Concurrent Users" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                Enterprise AI Platform
              </span>
              <span className="px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold">
                Made in India 🇮🇳
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              AI-Powered Intelligence for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                BFSI Enterprises
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              NIYTRI AI is India's enterprise platform for Banking, Financial Services, and Insurance. 
              Deploy specialized AI assistants for compliance, operations, and customer service — 
              built with RBI, SEBI, and IRDAI regulatory context.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/enquiry">
                <Button
                  size="lg"
                  className="rounded-full text-base px-8 h-14 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg shadow-primary/20"
                  data-testid="button-request-demo"
                >
                  Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base px-8 h-14"
                  data-testid="button-explore-platform"
                >
                  Explore Platform
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto mb-2" />
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BFSI Focus Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4 inline-block">
              BFSI Industry Focus
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Built for India's Financial Sector
            </h2>
            <p className="text-muted-foreground text-lg">
              From nationalized banks to NBFCs and insurance companies — NIYTRI AI is pre-trained 
              on Indian financial regulations, compliance frameworks, and operational workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bfsiUseCases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-card border border-border p-6 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300"
                data-testid={`card-bfsi-${idx}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/solutions">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View All Industry Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Bots Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              7 Specialized AI Assistants
            </h2>
            <p className="text-muted-foreground text-lg">
              Purpose-built bots for every department. Each AI assistant is pre-trained for specific 
              business functions and can be customized to your organization's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bots.map((bot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
                data-testid={`card-bot-${idx}`}
              >
                <div className="h-full bg-card border border-border p-6 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bot.color} flex items-center justify-center text-white mb-4`}
                  >
                    {bot.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">{bot.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{bot.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-4 inline-block">
              IT Services
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              End-to-End Technology Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Beyond AI, NIYTRI delivers comprehensive IT services to power your digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-card border border-border p-6 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300"
                data-testid={`card-service-${idx}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Explore All IT Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Built with security, compliance, and scalability at its core.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-card border border-border p-12 md:p-16 rounded-3xl shadow-sm">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join leading Indian BFSI and Manufacturing enterprises using NIYTRI AI to automate 
              operations, ensure compliance, and deliver exceptional experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/enquiry">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 h-14">
                  Schedule a Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14">
                  Contact Sales
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
