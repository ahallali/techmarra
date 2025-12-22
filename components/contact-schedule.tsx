"use client"

import React from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import CalendlyEmbed from "@/components/calendly-embed"

type Props = {
  url: string
  height?: number
}

export default function ContactSchedule({ url, height = 640 }: Props) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.contact.scheduleTitle}</h2>
      </div>
      <CalendlyEmbed url={url} height={height} />
    </div>
  )
}
