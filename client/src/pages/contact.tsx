import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "For general inquiries and support",
    value: "support@niytri.com",
    action: "mailto:support@niytri.com",
  },
];

// Registered offices. Add new locations here as they open.
const offices = [
  {
    country: "India",
    address: "Mumbai, Maharashtra, India",
  },
  {
    country: "Australia",
    address: "Quakers Hill, NSW, Australia",
  },
];

export default function Contact() {
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about NIYTRI AI or our IT Services? We're here to help. Reach out for
              sales inquiries, support, or partnership opportunities — from our offices in India and Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                <p className="text-primary font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-center mb-10">Our Offices</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {offices.map((office) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 text-center min-w-[260px]"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-1">{office.country}</h3>
                <p className="text-muted-foreground text-sm">{office.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-border rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to See NIYTRI AI in Action?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Submit an enquiry and our team will schedule a personalized demo for your organization.
            </p>
            <Link href="/enquiry">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-8 h-14">
                Request a Demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-right text-muted-foreground">Monday - Friday</div>
              <div className="text-left">9:00 AM - 6:00 PM IST</div>
              <div className="text-right text-muted-foreground">Saturday</div>
              <div className="text-left">10:00 AM - 2:00 PM IST</div>
              <div className="text-right text-muted-foreground">Sunday</div>
              <div className="text-left">Closed</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
