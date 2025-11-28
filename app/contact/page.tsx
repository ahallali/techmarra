import type { Metadata } from "next"
import { Contact } from "@/components/contact"
import { ContactHero } from "@/components/contact-hero"

export const metadata: Metadata = {
  title: "Contact Us - TechMarra",
  description: "Get in touch with our team to discuss your project and transform your online presence.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
      <Contact full={true} />
    </main>
  )
}
