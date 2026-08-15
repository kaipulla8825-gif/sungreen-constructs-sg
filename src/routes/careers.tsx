import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Join SUNGREEN CONSTRUCTIONS PTE LTD. Explore current job openings and career opportunities." },
      { property: "og:title", content: "Careers — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Join SUNGREEN CONSTRUCTIONS PTE LTD. Explore current job openings and career opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

const jobCategories = [
  "Site Supervisors",
  "Project Managers",
  "Quantity Surveyors",
  "Safety Officers",
  "Skilled Trades",
  "Administrative Support",
];

const openings = [
  { title: "Site Supervisor", type: "Full-time", location: "Singapore" },
  { title: "Project Manager", type: "Full-time", location: "Singapore" },
  { title: "Safety Officer", type: "Full-time", location: "Singapore" },
  { title: "Quantity Surveyor", type: "Full-time", location: "Singapore" },
];

function CareersPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Join Us</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Careers</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            Be part of a team that builds Singapore with integrity, quality and care.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl gold-underline mx-auto w-fit">Why Work With Us?</h2>
            <p className="mt-6 text-muted-foreground">
              We invest in our people through training, safety awareness and clear career paths. If you are passionate about construction and committed to excellence, we’d love to hear from you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobCategories.map((category) => (
              <div key={category} className="rounded-xl border border-border/50 bg-card p-6 text-center">
                <h3 className="font-semibold text-card-foreground">{category}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Opportunities available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-tight">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl gold-underline w-fit">Current Openings</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="flex flex-col justify-between gap-4 rounded-xl border border-border/50 bg-card p-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-semibold text-card-foreground">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.type} · {job.location}</p>
                </div>
                <a
                  href="mailto:careers@sungreen.com.sg"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand/90"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gold/30 bg-gold/5 p-6">
            <p className="text-sm text-muted-foreground">
              These are placeholder openings. Replace them with actual positions before publishing. Applications can be sent to the careers email address below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl rounded-2xl bg-brand-dark p-8 text-ivory sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Send Your Application</h2>
            <p className="mt-4 text-ivory/80">
              Email your CV and cover letter to{" "}
              <a href="mailto:careers@sungreen.com.sg" className="text-gold hover:underline">careers@sungreen.com.sg</a>
              . We review every application and contact suitable candidates directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
