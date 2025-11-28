"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function CTASection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">{t.cta.heading}</h2>
        <p className="text-lg text-primary-foreground/80 mb-8">
          {t.cta.description}
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-accent px-8 py-3 text-lg font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
        >
          {t.cta.button}
        </Link>
      </div>
    </section>
  )
}
