import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Code2,
  MessageSquare,
  Server,
  Settings,
  Shield,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const services = [
  {
    icon: <Cloud className="w-10 h-10" />,
    name: "Cloud Infrastructure",
    tagline: "Migrate, scale, and optimize on the cloud",
    description:
      "End-to-end cloud services across AWS, Azure, and Google Cloud Platform. From architecture design to managed operations, we ensure your infrastructure is secure, cost-efficient, and highly available.",
    highlights: [
      "Cloud migration & modernization",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Multi-cloud & hybrid cloud architecture",
      "Cost optimization and FinOps",
      "24/7 managed cloud operations",
      "DevOps & CI/CD pipeline setup",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    name: "Software Testing",
    tagline: "Quality assurance for mission-critical systems",
    description:
      "Comprehensive QA services to ensure your software is reliable, secure, and performant before it reaches production. Our expert testers specialize in BFSI and enterprise applications.",
    highlights: [
      "Manual & automated testing",
      "Performance & load testing",
      "Security & penetration testing",
      "API & integration testing",
      "Mobile app testing",
      "Regression & smoke testing",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Users className="w-10 h-10" />,
    name: "Resource Outsourcing",
    tagline: "Skilled talent on demand",
    description:
      "Access a pool of vetted technology professionals across development, testing, DevOps, and AI/ML. Scale your team up or down as needed without the overhead of permanent hiring.",
    highlights: [
      "Full-stack developers (React, Node, Python, Java)",
      "AI/ML engineers and data scientists",
      "DevOps and cloud engineers",
      "QA engineers and automation specialists",
      "Project managers and business analysts",
      "Flexible engagement models (contract, T&M, dedicated)",
    ],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    name: "IT Consultation",
    tagline: "Strategic guidance for digital transformation",
    description:
      "Our technology consultants work alongside your leadership team to define IT strategy, architect scalable solutions, and ensure your digital investments deliver measurable business outcomes.",
    highlights: [
      "Digital transformation roadmaps",
      "Enterprise architecture reviews",
      "Technology stack assessment",
      "AI & automation strategy",
      "IT governance & risk advisory",
      "Vendor evaluation & selection",
    ],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Code2 className="w-10 h-10" />,
    name: "Custom Software Development",
    tagline: "Bespoke applications built for your business",
    description:
      "We design and build enterprise-grade custom software — from internal tools and workflow automation to complex multi-tier platforms — using modern technology stacks tailored to your requirements.",
    highlights: [
      "Web & mobile application development",
      "Enterprise portal & dashboard development",
      "Legacy system modernization",
      "API development & third-party integrations",
      "Workflow automation platforms",
      "SaaS product development",
    ],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    textColor: "text-pink-600 dark:text-pink-400",
  },
];

const whyNiytri = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "BFSI Expertise",
    desc: "Deep domain knowledge in banking, insurance, and financial services applications.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Fast Onboarding",
    desc: "Dedicated resources can be onboarded within 1–2 weeks for critical projects.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Flexible Engagement",
    desc: "Fixed price, time & material, or dedicated team models to suit your project.",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "India-Based Delivery",
    desc: "Competitive pricing with IST-aligned teams and no timezone friction.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-6 inline-block">
              IT Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Technology Services that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Power Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cloud infrastructure and custom software to skilled resource outsourcing — 
              NIYTRI delivers comprehensive IT services that help enterprises modernize and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why NIYTRI */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyNiytri.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-1 text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                data-testid={`card-service-${idx}`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-2xl font-display font-bold">{service.name}</h3>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${service.bgColor} ${service.textColor} self-start sm:self-auto`}>
                        {service.tagline}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {service.highlights.map((item, hidx) => (
                        <div key={hidx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span>{item}</span>
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
              Let's Discuss Your Requirements
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Share your project needs and our team will recommend the right service mix and engagement model.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/enquiry">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 h-14">
                  Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14">
                  Contact Us
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
