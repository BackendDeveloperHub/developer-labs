import Layout from "@/components/Layout";
import ServicesCard from "@/components/ServicesCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Layout as LayoutIcon, Cpu, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Fast, mobile-first marketing websites built with SEO and conversion in mind. Ideal for studios, agencies and local businesses.",
  },
  {
    icon: LayoutIcon,
    title: "Web Applications",
    description: "Custom dashboards, internal tools and SaaS products built with modern stacks like React, Next.js, and Supabase.",
  },
  {
    icon: Cpu,
    title: "API Development",
    description: "Production-grade REST and GraphQL APIs with authentication, rate limiting and clean documentation.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Monthly retainers for updates, security patches, performance audits and content changes.",
  },
];

const Services = () => (
  <Layout>
    <section className="container py-20 md:py-28 text-center bg-gradient-hero">
      <h1 className="text-4xl md:text-5xl font-bold">Our <span className="text-gradient">Services</span></h1>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Full-stack web development for small businesses ready to grow.</p>
    </section>

    <section className="container py-16 grid gap-6 md:grid-cols-2">
      {services.map((s) => <ServicesCard key={s.title} {...s} />)}
    </section>

    <section className="container py-16">
      <div className="rounded-3xl border border-border bg-gradient-card p-10 md:p-14 shadow-card text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Not sure what you need?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a free 20-minute discovery call and we'll help you scope the right solution.</p>
        <Button asChild variant="hero" size="lg" className="mt-6">
          <Link to="/contact">Book a Free Call <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
