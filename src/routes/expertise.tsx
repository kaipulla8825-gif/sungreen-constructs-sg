import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ShieldCheck, Users, Clock, Truck, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Our Expertise — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Discover why clients choose SUNGREEN CONSTRUCTIONS PTE LTD for quality, safety, delivery and project management." },
      { property: "og:title", content: "Our Expertise — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Discover why clients choose SUNGREEN CONSTRUCTIONS PTE LTD for quality, safety, delivery and project management." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExpertisePage,
});

const strengths = [
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "We use reliable materials, skilled trades and rigorous inspections to ensure every build meets or exceeds expectations.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our project managers, engineers and site supervisors bring deep local knowledge and proven track records across Singapore.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Standards",
    description: "Site safety is central to our operations. We comply with Singapore workplace safety regulations and conduct regular training.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Realistic planning, clear milestones and proactive problem-solving help us keep projects on schedule and within budget.",
  },
  {
    icon: Truck,
    title: "Quality Materials",
    description: "We source materials from trusted suppliers and verify conformance before installation to protect long-term durability.",
  },
  {
    icon: ClipboardCheck,
    title: "Professional Project Management",
    description: "From tender to handover, we provide transparent reporting, cost control and disciplined coordination across all trades.",
  },
];

function ExpertisePage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Why Sun Green</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Our Expertise</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            Clients choose us because we deliver consistent quality, transparent communication and reliable outcomes on every project.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => (
              <Card key={strength.title} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3">
                    <strength.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{strength.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{strength.description}</p>
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
              <h2 className="text-2xl font-bold sm:text-3xl">Our Process</h2>
              <ol className="mt-6 space-y-6">
                {[
                  "Initial consultation and project understanding",
                  "Feasibility review, budgeting and proposal",
                  "Design coordination and regulatory approvals",
                  "Construction with regular site supervision",
                  "Quality inspections and handover support",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-gold-foreground">
                      {i + 1}
                    </span>
                    <span className="text-ivory/90">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl gold-underline w-fit">Built to Last</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every structure we build reflects our commitment to durability, safety and client satisfaction. We believe the best projects are the ones that continue to serve their owners reliably for decades.
              </p>
              <Button asChild className="mt-8 w-fit bg-brand hover:bg-brand/90 text-primary-foreground">
                <Link to="/projects">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
