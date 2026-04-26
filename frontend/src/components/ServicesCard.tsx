import { LucideIcon } from "lucide-react";

interface ServicesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServicesCard = ({ icon: Icon, title, description }: ServicesCardProps) => {
  return (
    <div className="group relative rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:border-primary/50 hover:-translate-y-1 hover:shadow-elegant">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow mb-5">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServicesCard;
