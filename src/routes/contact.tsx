import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { name: "description", content: "Contact SUNGREEN CONSTRUCTIONS PTE LTD for enquiries, quotes and project consultations in Singapore." },
      { property: "og:title", content: "Contact Us — SUNGREEN CONSTRUCTIONS PTE LTD" },
      { property: "og:description", content: "Contact SUNGREEN CONSTRUCTIONS PTE LTD for enquiries, quotes and project consultations in Singapore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 text-ivory">
        <div className="container-tight">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Get In Touch</span>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory/80">
            Reach out for project enquiries, quotations or partnership opportunities. We’ll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-card-foreground">Send Us a Message</h2>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+65 0000 0000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Project enquiry" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your project..." rows={6} />
                    </div>
                    <Button type="submit" className="bg-brand hover:bg-brand/90 text-primary-foreground">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-card-foreground">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>
                        <strong className="block text-card-foreground">Office Address</strong>
                        Singapore<br />(Add your full address)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>
                        <strong className="block text-card-foreground">Phone</strong>
                        <a href="tel:+6560000000" className="hover:text-primary transition-colors">+65 6000 0000</a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>
                        <strong className="block text-card-foreground">Email</strong>
                        <a href="mailto:info@sungreen.com.sg" className="hover:text-primary transition-colors">info@sungreen.com.sg</a>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-card-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer messaging? Contact us on WhatsApp for quick project enquiries.
                  </p>
                  <Button asChild variant="outline" className="mt-4 w-full border-gold/40 text-foreground hover:bg-gold/10">
                    <a href="https://wa.me/6560000000" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps placeholder */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border/50 bg-muted aspect-[16/6] flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Google Maps embed — add your office location here</p>
          </div>
        </div>
      </section>
    </>
  );
}
