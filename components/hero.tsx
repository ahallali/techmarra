"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Launch Promo Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-xs font-semibold text-foreground">{t.hero.promoLabel}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance text-foreground">
                {t.hero.title} <span className="text-primary block md:inline">{t.hero.titleHighlight1}</span>{" "}
                <span className="text-accent block md:inline">{t.hero.titleHighlight2}</span> {t.hero.titleForRiads}
              </h1>
              <p className="text-xl text-foreground/70 text-balance leading-relaxed">{t.hero.subtitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-center"
              >
                {t.hero.claimDiscount}
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary/5 transition-colors text-center"
              >
                {t.hero.learnMore}
              </Link>
            </div>

            <div className="pt-8 space-y-3 border-t border-border">
              <p className="text-sm font-medium text-foreground/60">{t.hero.trustedBy}</p>
              <div className="flex gap-6 text-sm text-foreground/70">
                {t.hero.stats.map((stat, idx) => (
                  <span key={idx}>✓ {stat}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual - Image placeholder */}
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
            <img
              src="/riad_elfassia.jpg"
              alt="Modern website preview"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
