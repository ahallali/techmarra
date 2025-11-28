import type { Metadata } from "next"
import { Portfolio } from "@/components/portfolio"
import { PortfolioHero } from "@/components/portfolio-hero"

export const metadata: Metadata = {
  title: "Portfolio - TechMarra",
  description: "Explore our diverse portfolio of E-commerce, Corporate, and Hospitality projects.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioHero />
      <Portfolio full={true} />
    </main>
  )
}
