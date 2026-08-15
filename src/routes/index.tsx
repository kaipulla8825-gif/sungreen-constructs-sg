import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/hero-construction.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import renovationImg from "@/assets/project-renovation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUNGREEN CONSTRUCTIONS PTE LTD — Building Singapore" },
      { name: "description", content: "SUNGREEN CONSTRUCTIONS PTE LTD delivers quality residential, commercial, industrial and civil construction projects across Singapore." },
      { property: "og:title", content: "SUNGREEN CONSTRUCTIONS PTE LTD — Building Singapore" },
      { property: "og:description", content: "Quality residential, commercial, industrial and civil construction across Singapore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "X+", label: "Happy Clients" },
  { value: "100%", label: "Safety Commitment" },
];

const services = [
  { icon: Building2, title: "Residential Construction", description: "Landed homes, condominiums and bespoke housing developments." },
  { icon: HardHat, title: "Commercial Construction", description: "Offices, retail spaces and mixed-use developments built to specification." },
  { icon: Shield, title: "Industrial & Civil Works", description: "Warehouses, factories and civil & structural infrastructure." },
  { icon: Clock, title: "Renovation & Restoration", description: "Heritage restorations, upgrades and fit-out works." },
];

const featuredProjects = [
  { title: "Landed Residence", location: "Singapore", image: residentialImg, category: "Residential" },
  { title: "Commercial Office", location: "Singapore CBD", image: commercialImg, category: "Commercial" },
  { title: "Industrial Warehouse", location: "Singapore", image: industrialImg, category: "Industrial" },
  { title: "Heritage Shophouse", location: "Singapore", image: renovationImg, category: "Renovation" },
];

function HomePage() {
  return (
    <>
      {/* Hero — Split Screen */}
      <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-5rem)]">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
          {/* Image half */}
          <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
            <img
              src={heroImg}
              alt="Modern construction project in Singapore by SUNGREEN CONSTRUCTIONS"
              width={1440}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent lg:bg-gradient-to-l lg:from-background lg:via-background/30 lg:to-transparent" />
          </div>

          {/* Content half */}
          <div className="flex items-center order-2 lg:order-1">
            <div className="container-tight py-16 lg:py-24">
              <div className="max-w-xl">
                <span className="mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wider text-gold uppercase">
                  Singapore Construction Specialists
                </span>
                <h1 className="text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                  Building Excellence, <span className="text-primary">Delivering Trust</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  SUNGREEN CONSTRUCTIONS PTE LTD is a trusted Singapore construction partner delivering quality residential, commercial, industrial and civil projects with precision, safety and on-time performance.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-primary-foreground">
                    <Link to="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-gold/40 text-foreground hover:bg-gold/10">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-l-2 border-gold pl-4">
                      <div className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
                      <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl gold-underline mx-auto w-fit">
              Your Vision, Our Commitment
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From concept to completion, we combine experienced project management, skilled workmanship and rigorous quality control to deliver buildings that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">What We Do</span>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
              <Link to="/services">
                All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Portfolio</span>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Featured Projects</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link key={project.title} to="/projects" className="group overflow-hidden rounded-xl bg-card border border-border/50 shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-brand/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    {project.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-dark text-ivory section-padding">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold tracking-wider text-gold uppercase">Why Sun Green</span>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built on Quality, Safety & Reliability</h2>
              <p className="mt-6 leading-relaxed text-ivory/80">
                Every project we undertake is guided by a commitment to excellence, transparent communication, and strict safety standards. We don’t just build structures — we build lasting relationships.
              </p>
              <Button asChild size="lg" className="mt-8 bg-gold hover:bg-gold/90 text-gold-foreground">
                <Link to="/expertise">
                  Discover Our Expertise
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Quality Workmanship", desc: "Skilled trades and rigorous inspections at every stage." },
                { title: "Experienced Team", desc: "Decades of combined local construction expertise." },
                { title: "Safety First", desc: "Strict safety protocols and compliance with Singapore standards." },
                { title: "On-Time Delivery", desc: "Proven project management that respects your schedule." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-ivory/10 bg-ivory/5 p-6">
                  <h3 className="mb-2 font-semibold text-gold">{item.title}</h3>
                  <p className="text-sm text-ivory/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold/10 section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Ready to Start Your Next Project?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s discuss how SUNGREEN CONSTRUCTIONS can bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-primary-foreground">
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gold/40 text-foreground hover:bg-gold/10">
                <a href="tel:+6560000000">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
