import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Privacy policy for SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:title", content: "Privacy Policy — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Privacy policy for SUNGREEN CONSTRUCTIONS PTE LTD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="bg-background section-padding">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          This is a placeholder privacy policy. Replace this content with your company’s actual privacy policy before publishing the site.
        </p>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            SUNGREEN CONSTRUCTIONS PTE LTD respects your privacy and is committed to protecting any personal information you provide through this website.
          </p>
          <p>
            This policy outlines how we collect, use, store and disclose personal data in accordance with the Singapore Personal Data Protection Act (PDPA) and other applicable regulations.
          </p>
          <p>
            Please update this page with accurate information about your data practices, contact details, cookie usage and user rights.
          </p>
        </div>
      </div>
    </section>
  );
}
