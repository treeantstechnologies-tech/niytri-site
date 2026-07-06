import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-muted/60 border-t border-border dark:bg-card/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Logo className="h-12 w-auto text-foreground mb-6" idSuffix="footer" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Enterprise AI Platform and IT Services for Indian businesses. Transforming BFSI and Manufacturing sectors with intelligent automation.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-6">NIYTRI AI</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors">AI Platform</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors">DataLens Analytics</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors">Astra Global Search</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors">RAG Integration</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors">Security & Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-6">IT Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Software Testing</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Resource Outsourcing</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">IT Consultation</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Custom Software Dev</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li className="flex items-center gap-2 text-muted-foreground pt-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:admin@niytri.com" className="hover:text-primary transition-colors">admin@niytri.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NIYTRI Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
