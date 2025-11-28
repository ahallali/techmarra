"use client"

import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Testimonials() {
    const { language } = useLanguage()
    const t = translations[language]

    // Placeholder testimonials data - normally this might come from translations too if content differs
    const testimonials = [
        {
            name: "Karim Benjelloun",
            role: "Owner, Riad Al Jazira",
            content:
                language === "fr"
                    ? "TechMarra a transformé notre présence en ligne. Les réservations directes ont augmenté de 40% dès le premier mois."
                    : "TechMarra transformed our online presence. Direct bookings increased by 40% in the first month.",
            rating: 5,
        },
        {
            name: "Sarah Dubois",
            role: "CEO, Atlas Market",
            content:
                language === "fr"
                    ? "Une équipe professionnelle et réactive. Notre boutique en ligne est magnifique et très facile à gérer."
                    : "A professional and responsive team. Our online store is beautiful and very easy to manage.",
            rating: 5,
        },
        {
            name: "Hassan El Amrani",
            role: "Director, TechStart",
            content:
                language === "fr"
                    ? "Le meilleur investissement pour notre startup. Le site est rapide, moderne et parfaitement optimisé pour le SEO."
                    : "The best investment for our startup. The site is fast, modern, and perfectly optimized for SEO.",
            rating: 5,
        },
    ]

    return (
        <section className="py-20 md:py-32 bg-secondary/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        {t.testimonials.sectionTitle}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.testimonials.heading}</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.testimonials.description}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-card p-8 rounded-2xl border border-border shadow-sm relative">
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-foreground/80 mb-6 italic">"{item.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">{item.name}</p>
                                    <p className="text-sm text-foreground/60">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
