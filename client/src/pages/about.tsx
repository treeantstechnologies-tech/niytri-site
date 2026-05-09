import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  MapPin,
  Rocket,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "We push boundaries with cutting-edge AI to solve real business problems.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security & Trust",
    description: "Enterprise-grade security is not an afterthought — it's our foundation.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer Obsession",
    description: "Your success drives our product roadmap and support philosophy.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "India-First Approach",
    description: "Built for Indian enterprises with local context and compliance in mind.",
  },
];

const milestones = [
  { year: "2024", event: "NIYTRI AI founded by BH2S Learning and Technologies" },
  { year: "2024", event: "First enterprise deployment with 7 AI assistants" },
  { year: "2025", event: "Compliance Bot launched for BFSI sector" },
  { year: "2025", event: "DataLens and Astra modules released" },
  { year: "2025", event: "Manufacturing vertical onboarded as second key industry" },
  { year: "2026", event: "Expanded to support 500+ concurrent users with 99.9% SLA" },
];

const team = [
  { role: "Founders", count: "2", desc: "Serial entrepreneurs with enterprise AI experience" },
  { role: "Engineering", count: "15+", desc: "Full-stack, AI/ML, and infrastructure experts" },
  { role: "Customer Success", count: "8+", desc: "Dedicated support and implementation team" },
  { role: "Advisory", count: "5+", desc: "Industry veterans from banking, IT, and healthcare" },
];

export default function About() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Building the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Enterprise AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NIYTRI is on a mission to empower Indian enterprises with AI and technology services — 
              making powerful, secure, and customizable AI accessible to organizations of all sizes, 
              with a special focus on the BFSI sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NIYTRI AI was born from a simple observation: Indian enterprises — particularly in banking, 
                  insurance, and finance — were struggling to adopt AI effectively. Generic chatbots couldn't 
                  handle specialized queries, security was an afterthought, and compliance with Indian 
                  regulations was non-existent.
                </p>
                <p>
                  Founded by BH2S Learning and Technologies, we set out to build an enterprise AI platform 
                  that truly understands Indian business needs — from RBI compliance for banks to IRDAI 
                  guidelines for insurance companies, and GST context for finance teams.
                </p>
                <p>
                  Today, NIYTRI offers both the flagship AI platform and a full suite of IT services — 
                  giving enterprises a single trusted partner for their entire digital journey, from cloud 
                  infrastructure to AI-powered automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" /> Our Journey
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-16 shrink-0 text-sm font-bold text-primary">{milestone.year}</div>
                    <div className="text-sm text-muted-foreground">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse team of engineers, AI researchers, and industry experts building the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                  {item.count}
                </div>
                <h3 className="font-bold mb-2">{item.role}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Based in India</h2>
            <p className="text-muted-foreground mb-6">
              Headquartered in Bengaluru, the Silicon Valley of India, with a fully remote-friendly culture 
              that attracts talent from across the country.
            </p>
            <p className="text-lg font-medium text-primary">
              Proudly building for India, scaling for the world 🇮🇳
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Partner with us to transform your enterprise operations with AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/enquiry">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 h-14">
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
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
