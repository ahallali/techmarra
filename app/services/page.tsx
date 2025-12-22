import type { Metadata } from "next"
import { Services } from "@/components/services"
import { ServicesHero } from "@/components/services-hero"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Services - TechMarra",
  description: "Web development, E-commerce solutions, Corporate websites, and Digital Marketing in Morocco.",
   icons: {
      icon: "/logo.png",
      apple: "/logo.png",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesHero />
      <Services full={true} />
      <Process />
      {/* <Pricing /> */}
      <FAQ />
      <CTASection />
    </main>
  )
}
