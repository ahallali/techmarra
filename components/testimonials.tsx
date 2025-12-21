"use client"

import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animated-components"
import { TiltCard } from "@/components/tilt-card"

export function Testimonials() {
    const { language } = useLanguage()
    const t = translations[language]

    const testimonials = [
        {
            name: "Karim Benjelloun",
            role: "Owner, Riad Al Jazira",
            content:
                language === "fr"
                    ? "TechMarra a transformé notre présence en ligne. Les réservations directes ont augmenté de 40% dès le premier mois."
                    : "TechMarra transformed our online presence. Direct bookings increased by 40% in the first month.",
            rating: 5,
            avatar: "KB",
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Sara Dubois",
            role: "CEO, Atlas Market",
            content:
                language === "fr"
                    ? "Une équipe professionnelle et réactive. Notre boutique en ligne est magnifique et très facile à gérer."
                    : "A professional and responsive team. Our online store is beautiful and very easy to manage.",
            rating: 5,
            avatar: "SD",
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Hassan El Amrani",
            role: "Director, TechStart",
            content:
                language === "fr"
                    ? "Le meilleur investissement pour notre startup. Le site est rapide, moderne et parfaitement optimisé pour le SEO."
                    : "The best investment for our startup. The site is fast, modern, and perfectly optimized for SEO.",
            rating: 5,
            avatar: "HA",
            color: "from-amber-500 to-orange-500",
        },
    ]

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeInUp>
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            {t.testimonials.sectionTitle}
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.testimonials.heading}</h2>
                        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">{t.testimonials.description}</p>
                    </div>
                </FadeInUp>

                {/* Testimonials Grid */}
                <StaggerChildren staggerDelay={0.15} className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <StaggerItem key={index}>
                            <TiltCard
                                className="group h-full rounded-2xl border border-border/50 bg-card shadow-premium hover:shadow-premium-lg transition-all duration-500"
                                gradientColor={item.color.includes("blue") ? "59, 130, 246" : item.color.includes("purple") ? "168, 85, 247" : "245, 158, 11"}
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color.replace('500', '500/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative p-8 h-full flex flex-col">
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300">
                                        <Quote className={`w-12 h-12 text-primary`} />
                                    </div>

                                    {/* Stars */}
                                    <div className="relative flex gap-1 mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                            >
                                                <Star className="w-5 h-5 fill-accent text-accent" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="relative text-foreground/80 mb-8 leading-relaxed text-lg italic flex-grow">
                                        "{item.content}"
                                    </p>

                                    {/* Author */}
                                    <div className="relative flex items-center gap-4 mt-auto">
                                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                            {item.avatar}
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground">{item.name}</p>
                                            <p className="text-sm text-foreground/60">{item.role}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br ${item.color}`} style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                                </div>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    )
}
