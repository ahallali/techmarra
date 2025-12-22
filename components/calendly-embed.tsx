"use client"

import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function CalendlyEmbed({
  url = "https://calendly.com/rageman-1-aa/30min",
  height = 700,
}: {
  url?: string
  height?: number | string
}) {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    // Ensure Calendly widget script is added only once
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) return

    const s = document.createElement("script")
    s.src = "https://assets.calendly.com/assets/external/widget.js"
    s.async = true
    document.body.appendChild(s)

    return () => {
      // keep the script as other pages/components might use it; do not remove
    }
  }, [])

  return (
    <div className="w-full">
      <div className="relative z-0">
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: "320px", height }}
        />
      </div>

      {/* Fallback text and button rendered under the widget (visually below) */}
      <div className="mt-4 text-center">
        <p className="text-xs text-foreground/60 mb-2">
          {t.contact.calendlyFallback}
        </p>
        <button
          type="button"
          onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          aria-label={t.contact.openCalendly}
          className="inline-block rounded-md px-3 py-1 text-sm font-medium text-white bg-primary hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {t.contact.openCalendly}
        </button>
      </div>
    </div>
  )
}
