import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="container py-20 md:py-28 text-center bg-gradient-hero">
      <h1 className="text-4xl md:text-5xl font-bold">Get in <span className="text-gradient">touch</span></h1>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Tell us about your project — we'll reply within 24 hours with a free quote.</p>
    </section>

    <section className="container py-16 grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-2 space-y-5">
        {[
          { icon: Mail, title: "Email", value: "contact@developerlabs.online" },
          { icon: Phone, title: "Phone", value: "+91 6381931912" },
          { icon: MapPin, title: "Office", value: "Chennai, India" },
        ].map((c) => (
          <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary shadow-glow shrink-0">
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
              <p className="mt-1 font-medium">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:col-span-3">
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Contact;
