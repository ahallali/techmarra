"use client"

import { Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Team() {
    const { language } = useLanguage()
    const t = translations[language]

    const team = [
        {
            name: "Ahmed El Mansouri",
            role: "Founder & Lead Developer",
            image: "/team-1.jpg", // Placeholder
        },
        {
            name: "Sarah Bennani",
            role: "Creative Director",
            image: "/team-2.jpg", // Placeholder
        },
        {
            name: "Youssef Alami",
            role: "Marketing Strategist",
            image: "/team-3.jpg", // Placeholder
        },
    ]

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{t.team.sectionTitle}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.team.heading}</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.team.description}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {team.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl bg-card border border-border">
                            <div className="aspect-[4/5] bg-secondary/20 relative overflow-hidden">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 text-primary font-bold text-4xl">
                                    {member.name.charAt(0)}
                                </div>

                                {/* Overlay with socials */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href="#" className="p-2 bg-white rounded-full text-primary hover:scale-110 transition-transform">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-2 bg-white rounded-full text-primary hover:scale-110 transition-transform">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
