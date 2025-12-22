import type { Metadata } from "next"
import { Pricing } from "@/components/pricing"
import { PricingHero } from "@/components/pricing-hero"

export const metadata: Metadata = {
  title: "Pricing - TechMarra",
  description:
    "Simple, transparent pricing for websites built for Riads and Hotels. With launch promo for first 3 clients.",
   icons: {
      icon: "/logo.png",
      apple: "/logo.png",
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PricingHero />
      <Pricing full={true} />
    </main>
  )
}
