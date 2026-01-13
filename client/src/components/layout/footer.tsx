import { Link } from "wouter";
import { Mail } from "lucide-react";
import logo from "@assets/NIYTRI-LOGO_1767820640016.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="NIYTRI AI" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Enterprise AI Platform designed for Indian businesses. Create unified AI Agents tailored to your needs.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/platform" className="text-muted-foreground hover:text-white transition-colors">AI Bots</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-white transition-colors">DataLens Analytics</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-white transition-colors">Astra Search</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-white transition-colors">RAG Integration</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-white transition-colors">Security & Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="text-muted-foreground hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</a></li>
              <li className="flex items-center gap-2 text-muted-foreground pt-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@niytri.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 NIYTRI AI . All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
