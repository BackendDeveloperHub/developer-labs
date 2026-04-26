import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesCard from "@/components/ServicesCard";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Layout as LayoutIcon, Cpu, Wrench, ArrowRight, Star } from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", description: "Fast, SEO-ready marketing sites that convert visitors into customers." },
  { icon: LayoutIcon, title: "Web Applications", description: "Custom dashboards, portals and SaaS products built for scale." },
  { icon: Cpu, title: "API Development", description: "Robust REST and GraphQL APIs that power your products and integrations." },
  { icon: Wrench, title: "Website Maintenance", description: "Ongoing updates, monitoring and performance care so you can focus on growth." },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection
        headline={<>Websites & web apps that <span className="text-gradient">grow your business</span></>}
        subtext="Developer Labs partners with small businesses to ship premium websites, web apps and APIs — designed beautifully and built to last."
      />

      {/* Stats */}
      <section className="container -mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { k: "50+", v: "Projects Shipped" },
          { k: "98%", v: "Client Satisfaction" },
          { k: "24h", v: "Avg Response" },
          { k: "5★", v: "Average Rating" },
        ].map((s) => (
          <div key={s.v} className="rounded-xl border border-border bg-gradient-card p-5 text-center shadow-card">
            <div className="text-2xl md:text-3xl font-bold text-gradient">{s.k}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="container py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">What we do</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Everything you need to launch & scale</h2>
          <p className="mt-3 text-muted-foreground">From a clean five-page site to a full-stack SaaS — we cover the full development stack.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <ServicesCard key={s.title} {...s} />)}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="container py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Simple packages, transparent pricing</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <PricingCard name="Starter" price="4,999" description="Perfect for small businesses going online." features={["5-page static site", "Mobile responsive", "Basic SEO setup", "Contact form"]} />
          <PricingCard highlighted name="Growth" price="12,999" description="Web app with the essentials to grow." features={["Web app + dashboard", "User authentication", "Database integration", "1 month support"]} />
          <PricingCard name="Pro" price="24,999" description="Full-stack product with custom APIs." features={["Full-stack web app", "Custom REST API", "Payments integration", "3 months support"]} />
        </div>
      </section>

      {/* Testimonial */}
      <section className="container py-24">
        <div className="rounded-3xl border border-border bg-gradient-card p-10 md:p-14 text-center shadow-card">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
          </div>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            "Developer Labs delivered our entire booking platform in 4 weeks. Clean code, thoughtful design, and they actually picked up the phone."
          </p>
          <p className="mt-6 text-sm text-muted-foreground">— Priya Sharma, Founder at BlueRoom Studio</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="rounded-3xl bg-gradient-primary p-10 md:p-16 text-center shadow-elegant">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to build something great?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Tell us about your project — we'll send back a free quote within 24 hours.</p>
          <Button asChild size="lg" variant="secondary" className="mt-7">
            <Link to="/contact">Get a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
