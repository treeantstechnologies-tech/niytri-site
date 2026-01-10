import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "For general inquiries and support",
    value: "hello@niytri.com",
    action: "mailto:hello@niytri.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Speak with our sales team",
    value: "+91 80 1234 5678",
    action: "tel:+918012345678",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Live Chat",
    description: "Get instant support",
    value: "Available 9 AM - 6 PM IST",
    action: "#",
  },
];

const offices = [
  {
    city: "Bengaluru",
    type: "Headquarters",
    address: "123 Tech Park, Whitefield\nBengaluru, Karnataka 560066",
    phone: "+91 80 1234 5678",
  },
  {
    city: "Mumbai",
    type: "Regional Office",
    address: "456 Business Tower, BKC\nMumbai, Maharashtra 400051",
    phone: "+91 22 9876 5432",
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
              Have questions about NIYTRI AI? We're here to help. Reach out to our team for 
              sales inquiries, support, or partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 border border-white/10 rounded-xl p-8 text-center hover:border-primary/30 transition-all group"
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

      {/* Demo CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-white/10 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to See NIYTRI AI in Action?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Submit an enquiry and our team will schedule a personalized demo for your organization.
            </p>
            <Link href="/enquiry">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100 px-8 h-14">
                Request a Demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Our Offices</h2>
            <p className="text-muted-foreground">Visit us at our locations across India</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 border border-white/10 rounded-xl p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {office.type}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{office.city}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line mb-4">
                  {office.address}
                </p>
                <p className="text-sm">
                  <Phone className="w-4 h-4 inline mr-2 text-primary" />
                  {office.phone}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-card/30">
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
