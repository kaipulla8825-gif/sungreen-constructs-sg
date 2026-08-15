import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Client testimonials for SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:title", content: "Testimonials — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Client testimonials for SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    quote: "Add a genuine testimonial here. Replace this placeholder with real feedback from a client, including their name and designation where permitted.",
    name: "Client Name",
    role: "Role / Company",
  },
  {
    quote: "Add a genuine testimonial here. Replace this placeholder with real feedback from a client, including their name and designation where permitted.",
    name: "Client Name",
    role: "Role / Company",
  },
  {
    quote: "Add a genuine testimonial here. Replace this placeholder with real feedback from a client, including their name and designation where permitted.",
    name: "Client Name",
    role: "Role / Company",
  },
];

function TestimonialsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Client Feedback</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Testimonials</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            What our clients say about working with SUNGREEN CONSTRUCTIONS PTE LTD.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl gold-underline mx-auto w-fit">Voices From Our Clients</h2>
            <p className="mt-6 text-muted-foreground">
              The placeholders below are ready to be replaced with real testimonials. Please do not invent client quotes — use only genuine, approved feedback.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <Quote className="mb-4 h-8 w-8 text-gold/60" />
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                  <div className="mt-6 border-t border-border/50 pt-4">
                    <p className="font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-gold">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              To add a testimonial, replace the quote, name and role with real client details. We recommend obtaining written permission before publishing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-dark p-8 text-ivory sm:flex-row sm:p-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Experience the Sun Green difference</h2>
              <p className="mt-2 text-ivory/80">We’d love to add your success story to this page.</p>
            </div>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
