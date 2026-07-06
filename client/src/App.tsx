import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/theme-context";
import { usePageMeta } from "@/lib/seo";
import Home from "@/pages/home";

const Platform = lazy(() => import("@/pages/platform"));
const Solutions = lazy(() => import("@/pages/solutions"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Enquiry = lazy(() => import("@/pages/enquiry"));
const Services = lazy(() => import("@/pages/services"));
const Products = lazy(() => import("@/pages/products"));
const NotFound = lazy(() => import("@/pages/not-found"));

function RouteFallback() {
  return <div className="min-h-screen bg-background" />;
}

function Router() {
  usePageMeta();

  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/platform" component={Platform} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/enquiry" component={Enquiry} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

