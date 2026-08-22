import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sungreen-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/expertise", label: "Expertise" },
  { to: "/safety", label: "Safety & Quality" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-tight flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SUNGREEN CONSTRUCTIONS PTE LTD" width={48} height={48} className="h-12 w-auto" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-wide text-foreground">SUNGREEN</span>
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground">CONSTRUCTIONS PTE LTD</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden bg-brand hover:bg-brand/90 text-primary-foreground md:inline-flex"
          >
            <a href="tel:+6560000000">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-gold/30">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background border-l border-gold/30">
              <div className="flex flex-col gap-8 pt-8">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <img src={logo} alt="SUNGREEN" width={40} height={40} className="h-10 w-auto" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-bold tracking-wide text-foreground">SUNGREEN</span>
                    <span className="text-[10px] font-medium tracking-wider text-muted-foreground">CONSTRUCTIONS</span>
                  </div>
                </Link>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.to;
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                          isActive ? "bg-gold/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                <Button
                  asChild
                  className="w-full bg-brand hover:bg-brand/90 text-primary-foreground"
                >
                  <a href="tel:+6560000000">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
