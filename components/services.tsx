"use client"

import { ShoppingBag, Building2, Hotel, Search, Wrench, Palette } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Services({ full }: { full?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language]

  const services = t.services.items.map((item, index) => {
    const icons = [ShoppingBag, Building2, Hotel, Search, Wrench, Palette]
    return {
      icon: icons[index],
      title: item.title,
      description: item.description,
    }
  })

  return (
    <section className={`relative ${full ? "py-20 md:py-32" : "py-20 md:py-32"} bg-background`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {!full && (
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t.services.sectionTitle}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{t.services.heading}</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">{t.services.description}</p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
