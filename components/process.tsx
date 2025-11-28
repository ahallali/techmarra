"use client"

import { Search, Lightbulb, Code2, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Process() {
    const { language } = useLanguage()
    const t = translations[language]

    const icons = [Search, Lightbulb, Code2, Rocket]

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{t.process.sectionTitle}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.process.heading}</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.process.description}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10 transform -translate-y-1/2" />

                    {t.process.steps.map((step, index) => {
                        const Icon = icons[index]
                        return (
                            <div key={index} className="relative pt-8 lg:pt-0">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 relative z-10">
                                        <Icon className="w-10 h-10 text-primary" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-foreground/70">{step.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
