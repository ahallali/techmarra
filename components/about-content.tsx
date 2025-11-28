"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function AboutContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="h-96 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
            <img src="/team-working-on-websites-agency.jpg" alt="Our team" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{t.aboutContent.sectionTitle}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
                {t.aboutContent.heading}
              </h2>
            </div>

            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                {t.aboutContent.paragraph1}
              </p>
              <p>
                {t.aboutContent.paragraph2}
              </p>
              <p>
                {t.aboutContent.paragraph3}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">23+</p>
                <p className="text-sm text-foreground/70">{t.aboutContent.stats.projects}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-foreground/70">{t.aboutContent.stats.clients}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="text-sm text-foreground/70">{t.aboutContent.stats.active}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
