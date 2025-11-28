import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { CTASection } from "@/components/cta-section"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { TechStack } from "@/components/tech-stack"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* <TechStack /> */}
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  )
}
