import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import s1 from "@/assets/site-1.jpg.asset.json";
import s2 from "@/assets/site-2.jpg.asset.json";
import s3 from "@/assets/site-3.jpg.asset.json";
import s4 from "@/assets/site-4.jpg.asset.json";
import s5 from "@/assets/site-5.jpg.asset.json";
import s6 from "@/assets/site-6.jpg.asset.json";
import s7 from "@/assets/site-7.jpg.asset.json";
import s8 from "@/assets/site-8.jpg.asset.json";
const heroImg = s4.url;
const residentialImg = s8.url;
const commercialImg = s6.url;
const industrialImg = s7.url;
const renovationImg = s2.url;
const civilImg = s3.url;
const rebarImg = s1.url;
const drainImg = s5.url;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Explore completed and ongoing construction projects by SUNGREEN CONSTRUCTIONS PTE LTD across Singapore." },
      { property: "og:title", content: "Projects & Portfolio — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Explore completed and ongoing construction projects by SUNGREEN CONSTRUCTIONS PTE LTD across Singapore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Tuas Nexus Infrastructure Works",
    category: "Civil & Structural",
    location: "Tuas Nexus Drive, Singapore",
    client: "Main Contractor",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Ongoing",
    description: "Reinforced concrete foundations, pits and cast-in-situ structures executed with crane-and-skip concreting on an active industrial site.",
    image: heroImg,
  },
  {
    title: "Port Yard Canopy Structures",
    category: "Industrial",
    location: "Tuas, Singapore",
    client: "Industrial Client",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Completed",
    description: "Steel canopy framing, column bases and hardstanding works across a large operational yard, coordinated around live traffic movements.",
    image: commercialImg,
  },
  {
    title: "Yard Column & Deck Works",
    category: "Industrial",
    location: "Tuas, Singapore",
    client: "Industrial Client",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Ongoing",
    description: "Column formwork, base construction and deck finishing carried out in phased sequences to keep the yard operational throughout.",
    image: industrialImg,
  },
  {
    title: "School Perimeter Fencing & Kerb Works",
    category: "Civil Works",
    location: "Singapore",
    client: "Institutional Client",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Completed",
    description: "Galvanised mesh fencing on cast-in-situ concrete plinths along a school boundary, including alignment to existing footpaths and drainage.",
    image: residentialImg,
  },
  {
    title: "Hoarding & Boundary Works",
    category: "Civil Works",
    location: "Singapore",
    client: "Main Contractor",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Completed",
    description: "Site boundary hoarding and screened fencing installed adjacent to public housing, maintaining safety and privacy for residents.",
    image: renovationImg,
  },
  {
    title: "Drainage & Concrete Pavement Works",
    category: "Civil & Structural",
    location: "Tuas Nexus Drive, Singapore",
    client: "Main Contractor",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Ongoing",
    description: "Cast-in-situ drains, gratings and concrete pavement laid and finished to level, including formwork, rebar and surface treatment.",
    image: civilImg,
  },
  {
    title: "Reinforcement & Formwork Detailing",
    category: "Civil & Structural",
    location: "Tuas Nexus Drive, Singapore",
    client: "Main Contractor",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Ongoing",
    description: "Wall reinforcement, embedded openings and galvanised grille installation prepared and inspected prior to concrete pour.",
    image: rebarImg,
  },
  {
    title: "Trench Drain Construction",
    category: "Civil Works",
    location: "Tuas, Singapore",
    client: "Industrial Client",
    contractor: "SUNGREEN CONSTRUCTIONS PTE LTD",
    value: "Upon request",
    status: "Completed",
    description: "Reinforced trench drains with grating frames constructed alongside plant facilities, finished by hand for accurate falls.",
    image: drainImg,
  },
];


function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Portfolio</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Projects</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            A selection of residential, commercial, industrial and heritage projects delivered with precision and care.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden border-border/50 bg-card transition-shadow hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-brand/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{project.title}</h3>
                  <dl className="mb-4 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Location</dt>
                      <dd className="font-medium text-card-foreground">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Client</dt>
                      <dd className="font-medium text-card-foreground">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Contractor</dt>
                      <dd className="font-medium text-card-foreground">{project.contractor}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="font-medium text-gold">{project.status}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-muted-foreground">Contract Value</dt>
                      <dd className="font-medium text-card-foreground">{project.value}</dd>
                    </div>
                  </dl>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-dark p-8 text-ivory sm:flex-row sm:p-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
              <p className="mt-2 text-ivory/80">Let’s discuss how we can bring it to life.</p>
            </div>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
