import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "BlueRoom Studio", category: "Booking Platform", description: "End-to-end booking and scheduling app for a creative studio.", color: "from-blue-500/30 to-violet-500/30" },
  { title: "Kettle & Co.", category: "E-commerce", description: "Premium tea brand storefront with custom product pages.", color: "from-emerald-500/30 to-cyan-500/30" },
  { title: "Finlytics", category: "SaaS Dashboard", description: "Analytics dashboard for a fintech startup with real-time charts.", color: "from-violet-500/30 to-pink-500/30" },
  { title: "ClinicCare", category: "Web App", description: "Patient management portal for a chain of dental clinics.", color: "from-cyan-500/30 to-blue-500/30" },
  { title: "Routely", category: "API Platform", description: "Logistics API powering 200+ daily delivery routes.", color: "from-orange-500/30 to-rose-500/30" },
  { title: "Greenleaf Realty", category: "Marketing Website", description: "Lead-generating real estate website with property search.", color: "from-emerald-500/30 to-lime-500/30" },
];

const Portfolio = () => (
  <Layout>
    <section className="container py-20 md:py-28 text-center bg-gradient-hero">
      <h1 className="text-4xl md:text-5xl font-bold">Our <span className="text-gradient">Portfolio</span></h1>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A selection of recent websites and web apps built for small businesses across India.</p>
    </section>

    <section className="container py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <div key={p.title} className="group rounded-2xl border border-border bg-gradient-card overflow-hidden shadow-card transition-smooth hover:border-primary/50 hover:-translate-y-1">
          <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative`}>
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-2xl font-bold opacity-40">{p.title}</span>
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</p>
            <h3 className="mt-2 text-lg font-semibold flex items-center gap-2">
              {p.title}
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
          </div>
        </div>
      ))}
    </section>
  </Layout>
);

export default Portfolio;
