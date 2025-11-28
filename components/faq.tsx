"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function FAQ() {
    const { language } = useLanguage()
    const t = translations[language]
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{t.faq.sectionTitle}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.faq.heading}</h2>
                    <p className="text-lg text-foreground/70">{t.faq.description}</p>
                </div>

                <div className="space-y-4">
                    {t.faq.items.map((item, index) => (
                        <div key={index} className="border border-border rounded-xl overflow-hidden bg-card">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-foreground pr-8">{item.q}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-foreground/70 leading-relaxed">{item.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
