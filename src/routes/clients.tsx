import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Clients and partners of SUNGREEN CONSTRUCTIONS PTE LTD in Singapore." },
      { property: "og:title", content: "Our Clients — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Clients and partners of SUNGREEN CONSTRUCTIONS PTE LTD in Singapore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Partnerships</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Our Clients</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            We are proud to work with property developers, homeowners, corporate tenants and public-sector partners across Singapore.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl gold-underline mx-auto w-fit">Trusted By</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Client logos are intentionally not displayed here. Only add logos you have written permission to use. This section is ready to showcase your real client partners once approvals are obtained.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="border-border/50 bg-card">
                <CardContent className="flex aspect-[3/2] items-center justify-center p-6">
                  <span className="text-sm font-medium text-muted-foreground">Client Logo {i + 1}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Replace these placeholders with approved client logos. We recommend using monochrome or neutral versions to maintain a clean, professional look.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-dark p-8 text-ivory sm:flex-row sm:p-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Join our growing client list</h2>
              <p className="mt-2 text-ivory/80">Let’s discuss your next construction project.</p>
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
