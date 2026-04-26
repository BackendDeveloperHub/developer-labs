import { Link } from "react-router-dom";
import { Code2, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </span>
            <span>Developer<span className="text-gradient">Labs</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            We build fast, beautiful websites and web apps for small businesses ready to grow online.
          </p>
          <div className="flex gap-3 mt-5">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-smooth">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground transition-smooth">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground transition-smooth">Business Websites</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-smooth">Web Apps</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-smooth">API Development</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground transition-smooth">Pricing</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Developer Labs. All rights reserved.</p>
          <p>Crafted with care in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
