import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Learn about SUNGREEN CONSTRUCTIONS PTE LTD, our story, vision, mission and core values." },
      { property: "og:title", content: "About Us — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Learn about SUNGREEN CONSTRUCTIONS PTE LTD, our story, vision, mission and core values." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Integrity", desc: "We operate transparently, honouring commitments to clients, partners and regulators." },
  { title: "Quality", desc: "Every detail matters. We hold ourselves to the highest standards of workmanship and materials." },
  { title: "Safety", desc: "The wellbeing of our people and sites is non-negotiable on every project." },
  { title: "Sustainability", desc: "We adopt responsible practices to minimise environmental impact where possible." },
  { title: "Collaboration", desc: "We work closely with clients, architects and engineers to deliver shared success." },
  { title: "Innovation", desc: "We embrace modern methods and technologies to improve efficiency and outcomes." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Who We Are</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">About Sun Green</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            A Singapore-based construction company committed to building structures that are safe, enduring and thoughtfully delivered.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl gold-underline w-fit">Our Story</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                SUNGREEN CONSTRUCTIONS PTE LTD was founded with a clear purpose: to deliver construction projects in Singapore that combine quality workmanship with honest project management. Over the years, we have grown from small-scale works to a trusted partner for residential, commercial and industrial developments across the island.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Today, our team brings together experienced site supervisors, engineers, project managers and tradespeople who share a common commitment — to build well, deliver safely and finish on time.
              </p>
            </div>
            <div className="rounded-2xl bg-muted p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Vision & Mission</h3>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-gold">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-semibold">Vision</span>
                  </div>
                  <p className="text-muted-foreground">To be a leading Singapore construction company recognised for reliability, quality and sustainable building practices.</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-gold">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-semibold">Mission</span>
                  </div>
                  <p className="text-muted-foreground">To deliver every project with integrity, precision and a relentless focus on safety, client satisfaction and long-term value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">Core Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-md">
                <div className="mb-3 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl gold-underline w-fit">Leadership</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Add Name", role: "Managing Director", note: "Replace with real leadership details" },
              { name: "Add Name", role: "Operations Director", note: "Replace with real leadership details" },
              { name: "Add Name", role: "Project Director", note: "Replace with real leadership details" },
            ].map((person) => (
              <div key={person.role} className="rounded-xl border border-border/50 bg-card p-6">
                <div className="mb-4 h-20 w-20 rounded-full bg-muted" />
                <h3 className="font-semibold text-card-foreground">{person.name}</h3>
                <p className="text-sm font-medium text-gold">{person.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-ivory section-padding">
        <div className="container-tight">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Want to learn more about us?</h2>
              <p className="mt-2 text-ivory/80">Explore our services, projects or get in touch.</p>
            </div>
            <div className="flex gap-4">
              <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="border-ivory/30 text-ivory hover:bg-ivory/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
