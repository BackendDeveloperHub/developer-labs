import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel?: string;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  ctaLabel = "Get Started",
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-smooth flex flex-col ${
        highlighted
          ? "bg-gradient-card border-2 border-primary shadow-elegant scale-[1.02]"
          : "bg-gradient-card border border-border shadow-card hover:border-primary/40"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold">₹{price}</span>
        <span className="text-sm text-muted-foreground">/ project</span>
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 mt-0.5 shrink-0">
              <Check className="h-3 w-3 text-primary" />
            </span>
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        variant={highlighted ? "hero" : "outline"}
        className="mt-8 w-full"
      >
        <Link to="/contact">{ctaLabel}</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
