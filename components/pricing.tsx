"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Pricing() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{t.pricing.sectionTitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.pricing.heading}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.pricing.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border ${index === 1 ? "border-primary bg-primary/5 shadow-xl scale-105 z-10" : "border-border bg-card"
                }`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
              </div>
              <p className="text-foreground/70 mb-8">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${index === 1
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {t.pricing.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
