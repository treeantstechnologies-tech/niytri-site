import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Globe, Lock, Network, Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import heroBg from "@assets/generated_images/abstract_dark_neural_network_background_with_glowing_nodes.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">Niytri AI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Platform</a>
            <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
            <a href="#research" className="text-sm font-medium hover:text-primary transition-colors">Research</a>
            <Button variant="secondary" className="font-medium rounded-full px-6">
              Get Access
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4"
          >
            <a href="#features" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Platform</a>
            <a href="#solutions" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#research" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Research</a>
            <Button className="w-full rounded-full">Get Access</Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Neural Network Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                v2.0 Neural Engine Live
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
              Intelligence, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Evolved.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Niytri AI is the autonomous neural backbone for the next generation of enterprise systems. 
              Self-learning, adaptive, and infinitely scalable.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base px-8 h-12 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                Start Building <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-12 border-white/10 hover:bg-white/5 hover:text-white backdrop-blur-sm">
                View Documentation
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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

      {/* Features Grid */}
      <section id="features" className="py-24 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for the complexity of tomorrow</h2>
            <p className="text-muted-foreground">
              Our proprietary architecture transcends traditional transformer models, offering unprecedented efficiency and context retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-6 h-6 text-primary" />,
                title: "Neural Adaptation",
                desc: "Models that learn and adapt in real-time without full retraining cycles."
              },
              {
                icon: <Network className="w-6 h-6 text-secondary" />,
                title: "Infinite Context",
                desc: "Process entire codebases or legal archives with zero loss in fidelity."
              },
              {
                icon: <Zap className="w-6 h-6 text-amber-400" />,
                title: "Micro-Latency",
                desc: "Sub-10ms inference times designed for high-frequency trading and robotics."
              },
              {
                icon: <Lock className="w-6 h-6 text-emerald-400" />,
                title: "Sovereign Privacy",
                desc: "Deploy on-premise or in air-gapped environments with full data sovereignty."
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-400" />,
                title: "Global Linguistics",
                desc: "Native understanding of 100+ languages including code and technical dialects."
              },
              {
                icon: <Cpu className="w-6 h-6 text-purple-400" />,
                title: "Edge Optimized",
                desc: "Run powerful 7B+ parameter models directly on consumer hardware."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 hover:to-secondary/50 transition-all duration-500"
              >
                <div className="relative h-full bg-card/80 backdrop-blur-xl border border-white/5 p-8 rounded-xl overflow-hidden group-hover:bg-card/90 transition-colors">
                  <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500" />
                  
                  <div className="relative z-10 mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-primary/30 transition-colors">
                    {feature.icon}
                  </div>
                  
                  <h3 className="relative z-10 text-xl font-bold mb-3 font-display">{feature.title}</h3>
                  <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to evolve your stack?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join leading enterprises using Niytri AI to automate complex decision-making pipelines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-gray-200">
                Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-white/20 hover:bg-white/5">
                Contact Sales
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required for developer sandbox.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-lg font-display font-bold">Niytri AI</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
            <div className="text-xs text-muted-foreground">
              © 2026 Niytri AI Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
