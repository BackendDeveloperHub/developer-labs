import Layout from "@/components/Layout";
import PricingCard from "@/components/PricingCard";

const Pricing = () => (
  <Layout>
    <section className="container py-20 md:py-28 text-center bg-gradient-hero">
      <h1 className="text-4xl md:text-5xl font-bold">Simple, <span className="text-gradient">transparent pricing</span></h1>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Pick a package or contact us for a custom quote. No surprises, no hidden fees.</p>
    </section>

    <section className="container py-16 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
      <PricingCard
        name="Starter"
        price="4,999"
        description="Get online with a polished 5-page website."
        features={[
          "5-page static website",
          "Mobile responsive design",
          "Basic on-page SEO",
          "Contact form",
          "Free domain setup help",
          "1 round of revisions",
        ]}
      />
      <PricingCard
        highlighted
        name="Growth"
        price="12,999"
        description="A web app with the essentials to grow your business."
        features={[
          "Web app + admin dashboard",
          "User authentication",
          "Database integration",
          "Email notifications",
          "1 month free support",
          "2 rounds of revisions",
        ]}
      />
      <PricingCard
        name="Pro"
        price="24,999"
        description="A full-stack product with custom APIs and integrations."
        features={[
          "Full-stack web application",
          "Custom REST/GraphQL API",
          "Payments integration",
          "Third-party integrations",
          "3 months priority support",
          "Unlimited revisions",
        ]}
      />
    </section>

    <section className="container py-12 text-center">
      <p className="text-sm text-muted-foreground">All prices in INR. GST extra where applicable.</p>
    </section>
  </Layout>
);

export default Pricing;
