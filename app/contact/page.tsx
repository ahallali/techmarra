import type { Metadata } from "next"
import { Contact } from "@/components/contact"
import { ContactHero } from "@/components/contact-hero"
import ContactSchedule from "@/components/contact-schedule"

export const metadata: Metadata = {
  title: "Contact Us - TechMarra",
  description: "Get in touch with our team to discuss your project and transform your online presence.",
   icons: {
      icon: "/logo.png",
      apple: "/logo.png",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
        {/* Calendly embed — replace the url prop with your Calendly link */}
        <ContactSchedule url="https://calendly.com/rageman-1-aa/30min" height={640} />
      <Contact full={true} />
    </main>
  )
}
