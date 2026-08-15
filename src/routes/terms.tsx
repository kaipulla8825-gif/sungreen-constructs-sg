import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Terms of use for SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:title", content: "Terms of Use — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Terms of use for SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="bg-background section-padding">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Terms of Use</h1>
        <p className="mt-4 text-muted-foreground">
          This is a placeholder terms of use page. Replace this content with your company’s actual terms before publishing the site.
        </p>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            By using this website, you agree to these terms and conditions. These terms govern your access to and use of the SUNGREEN CONSTRUCTIONS PTE LTD website.
          </p>
          <p>
            All content on this site is for informational purposes only. Project details, images and descriptions are subject to change and should be confirmed directly with the company.
          </p>
          <p>
            Please update this page with accurate legal terms, disclaimers, intellectual property notices and governing law appropriate to your business.
          </p>
        </div>
      </div>
    </section>
  );
}
