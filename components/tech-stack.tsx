"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function TechStack() {
    const { language } = useLanguage()
    const t = translations[language]

    // Placeholder logos - in a real app these would be SVG imports or Next.js Images
    const techs = [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shopify",
        "WordPress",
        "Stripe",
        "Vercel",
    ]

    return (
        <section className="py-12 border-y border-border bg-secondary/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">{t.techStack.heading}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {techs.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xl md:text-2xl font-bold text-foreground/40 hover:text-primary transition-colors cursor-default animate-wobble inline-block"
                            style={{ animationDelay: `${index * -0.5}s` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
