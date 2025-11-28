"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function PortfolioHero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.portfolioHero.title}</h1>
        <p className="text-xl text-muted-foreground">{t.portfolioHero.subtitle}</p>
      </div>
    </section>
  )
}
