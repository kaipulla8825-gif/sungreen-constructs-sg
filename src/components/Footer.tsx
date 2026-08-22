import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import logoAsset from "@/assets/sungreen-logo-t.png.asset.json";
const logo = logoAsset.url;

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Expertise", to: "/expertise" },
  { label: "Safety & Quality", to: "/safety" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-ivory">
      <div className="container-tight section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="SUNGREEN CONSTRUCTIONS PTE LTD" width={48} height={48} className="h-12 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold tracking-wide">SUNGREEN</span>
                <span className="text-[10px] font-medium tracking-wider text-ivory/70">CONSTRUCTIONS PTE LTD</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/80">
              Building Singapore’s future with integrity, quality, and sustainable construction practices.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-ivory/80 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-ivory/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Singapore<br />(Add your office address here)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ivory/80">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+6560000000" className="hover:text-gold transition-colors">+65 6000 0000</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ivory/80">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:info@sungreen.com.sg" className="hover:text-gold transition-colors">info@sungreen.com.sg</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gold uppercase">Connect</h3>
            <p className="mb-4 text-sm text-ivory/80">Follow our latest projects and updates.</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-gold"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 md:flex-row">
          <p className="text-xs text-ivory/60">
            © {new Date().getFullYear()} SUNGREEN CONSTRUCTIONS PTE LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-xs text-ivory/60 transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
