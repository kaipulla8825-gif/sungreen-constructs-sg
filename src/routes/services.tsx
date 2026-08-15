import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, Building, Factory, Wrench, HardHat, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Residential, commercial, industrial, civil, renovation and project management services by SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:title", content: "Our Services — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Residential, commercial, industrial, civil, renovation and project management services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    summary: "Landed homes, condominiums, apartments and bespoke housing projects.",
    description: "We build homes that families grow into. From landed properties and terrace houses to condominium blocks and apartment developments, we manage every stage from groundwork to handover with careful attention to quality, safety and timeline.",
  },
  {
    icon: Building,
    title: "Commercial Construction",
    summary: "Offices, retail units, mixed-use developments and tenant improvements.",
    description: "Our commercial team delivers offices, retail spaces, showrooms and mixed-use buildings designed for functionality and longevity. We coordinate closely with architects, M&E consultants and tenants to minimise disruption and deliver fit-for-purpose spaces.",
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    summary: "Factories, warehouses, logistics hubs and industrial facilities.",
    description: "We construct industrial facilities that meet operational demands, including warehouses, production plants, logistics centres and supporting infrastructure. Our work emphasises durability, clear spans and efficient workflow integration.",
  },
  {
    icon: HardHat,
    title: "Civil & Structural Works",
    summary: "Foundations, structural frames, earthworks and external works.",
    description: "From piling and foundations to structural steel and reinforced concrete frames, our civil and structural capabilities support the backbone of every building we deliver. We follow strict engineering standards and Singapore regulatory requirements.",
  },
  {
    icon: Wrench,
    title: "Renovation / Restoration",
    summary: "Heritage restorations, building upgrades, A&A works and fit-outs.",
    description: "We preserve character while modernising performance. Our renovation services include heritage shophouse restoration, commercial fit-outs, residential additions & alterations (A&A) and building upgrades that respect the original structure.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    summary: "End-to-end planning, cost control, scheduling and site coordination.",
    description: "Professional project management ensures every trade, delivery and milestone aligns with your goals. We provide transparent reporting, cost control, risk management and site coordination to keep projects on track and within budget.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">What We Do</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            Comprehensive construction and project management services tailored to residential, commercial, industrial and heritage projects across Singapore.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3">
                    <service.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{service.title}</h3>
                  <p className="mb-4 text-sm font-medium text-gold">{service.summary}</p>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl rounded-2xl bg-brand-dark p-8 text-center text-ivory sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Not sure which service fits your project?</h2>
            <p className="mt-4 text-ivory/80">Contact us for a free consultation and we’ll recommend the right approach for your needs.</p>
            <Button asChild size="lg" className="mt-6 bg-gold hover:bg-gold/90 text-gold-foreground">
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
