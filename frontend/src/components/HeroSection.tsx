import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  eyebrow?: string;
  headline: React.ReactNode;
  subtext: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

const HeroSection = ({
  eyebrow = "Premium Web Development",
  headline,
  subtext,
  primaryCta = { label: "Get a Quote", to: "/contact" },
  secondaryCta = { label: "View Our Work", to: "/portfolio" },
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container py-24 md:py-36 text-center relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          {eyebrow}
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.05]">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{subtext}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to={primaryCta.to}>
              {primaryCta.label} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
