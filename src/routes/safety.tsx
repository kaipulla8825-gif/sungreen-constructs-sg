import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HardHat, ClipboardCheck, Leaf, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Quality — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Safety standards, quality control and certifications at SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:title", content: "Safety & Quality — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Safety standards, quality control and certifications at SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SafetyPage,
});

const safetyItems = [
  {
    icon: HardHat,
    title: "Construction Safety Standards",
    description: "We comply with Singapore’s Workplace Safety and Health Act. Our sites maintain clear protocols, proper signage, PPE requirements and regular safety briefings.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control Process",
    description: "Every stage of work is inspected against agreed specifications and industry standards. From material receipt to final handover, we document checks and corrective actions.",
  },
  {
    icon: FileCheck,
    title: "Certifications & Accreditations",
    description: "Update this section with your actual certifications (e.g., BCA registration, bizSAFE, ISO certifications). Placeholders are used until real credentials are provided.",
  },
  {
    icon: Leaf,
    title: "Environmental & Sustainability",
    description: "Where applicable, we minimise waste, manage disposal responsibly and adopt practices that reduce environmental impact on site and in material choices.",
  },
];

const certifications = [
  "BCA Registered Contractor (Update)",
  "bizSAFE Level (Update)",
  "ISO 9001:2015 Quality Management (Update)",
  "ISO 14001:2015 Environmental Management (Update)",
  "OHSAS 18001 / ISO 45001 (Update)",
];

function SafetyPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Our Standards</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Safety & Quality</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            Safety and quality are not checkboxes — they are the foundation of every project we deliver.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2">
            {safetyItems.map((item) => (
              <Card key={item.title} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3">
                    <item.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-brand-dark p-8 text-ivory sm:p-12">
              <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3">
                <ShieldCheck className="h-7 w-7 text-gold" />
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">Safety First, Always</h2>
              <p className="mt-4 text-ivory/80">
                We invest in training, equipment and site discipline to protect our workers, partners and the public. Every team member is empowered to stop work if safety is compromised.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Daily toolbox meetings and hazard identification",
                  "Mandatory PPE and emergency response plans",
                  "Regular internal and external safety audits",
                  "Incident reporting and continuous improvement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ivory/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl gold-underline w-fit">Certifications</h2>
              <p className="mt-6 text-muted-foreground">
                Please replace the placeholders below with your company’s actual certifications and accreditations.
              </p>
              <div className="mt-6 grid gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4">
                    <FileCheck className="h-5 w-5 text-gold" />
                    <span className="text-sm font-medium text-card-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-dark p-8 text-ivory sm:flex-row sm:p-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Have questions about our standards?</h2>
              <p className="mt-2 text-ivory/80">We’re happy to share our safety and quality documentation.</p>
            </div>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
