import type { Metadata } from "next"
import { AboutContent } from "@/components/about-content"
import { AboutHero } from "@/components/about-hero"
import { Team } from "@/components/team"
import { TechStack } from "@/components/tech-stack"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us - TechMarra",
  description: "Learn about TechMarra and our mission to empower Moroccan businesses with digital excellence.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <AboutContent />
      {/* <TechStack /> */}
      <Team />
      <CTASection />
    </main>
  )
}
