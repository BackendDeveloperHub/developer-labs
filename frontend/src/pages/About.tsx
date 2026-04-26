import Layout from "@/components/Layout";
import { Heart, Target, Zap } from "lucide-react";

const values = [
  { icon: Zap, title: "Ship fast", description: "We move quickly without cutting corners. Most projects ship in 2–6 weeks." },
  { icon: Heart, title: "Care deeply", description: "Your project is treated like our own. We sweat the details." },
  { icon: Target, title: "Stay focused", description: "We don't take on every project — only ones we're confident we can knock out of the park." },
];

const About = () => (
  <Layout>
    <section className="container py-20 md:py-28 text-center bg-gradient-hero">
      <h1 className="text-4xl md:text-5xl font-bold">About <span className="text-gradient">Developer Labs</span></h1>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A small, focused team of developers helping small businesses do more on the web.</p>
    </section>

    <section className="container py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</p>
        <h2 className="mt-2 text-3xl font-bold">Built by developers who care</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Developer Labs started in 2022 with a simple idea: small businesses deserve the same quality of software that big companies enjoy. We're a tight team of full-stack developers, designers and product thinkers shipping work we're proud of.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We've shipped 50+ projects across India and beyond — from local studios to funded SaaS startups.
        </p>
      </div>
      <div className="rounded-3xl border border-border bg-gradient-card p-10 shadow-card">
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-gradient">50+</div>
            <div className="mt-1 text-sm text-muted-foreground">Projects shipped</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient">3 yrs</div>
            <div className="mt-1 text-sm text-muted-foreground">In business</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient">12</div>
            <div className="mt-1 text-sm text-muted-foreground">Team members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient">98%</div>
            <div className="mt-1 text-sm text-muted-foreground">Happy clients</div>
          </div>
        </div>
      </div>
    </section>

    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center">Our values</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow mb-5">
              <v.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
