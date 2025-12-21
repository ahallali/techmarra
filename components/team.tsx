"use client"

import { Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Team() {
    const { language } = useLanguage()
    const t = translations[language]

    const team = [
        {
            name: "Zakaria Mrabet",
            role: "Senior AI Engineer",
            image: "/zack.png",
            linkedin: "https://www.linkedin.com/in/zakariaemrabet/",     
        },
        {
            name: "Aymane Biri",
            role: "Senior software/AI engineer",
            image: "/aymane.jpeg",
            linkedin: "https://www.linkedin.com/in/aymane-biri/",
        },
        {
            name: "Oussama Sallak",
            role: "Full-Stack & AI Engineer",
            image: "/oussama.png",
            linkedin: "https://www.linkedin.com/in/osallak/",
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
                            <div className="aspect-4/5 bg-secondary/20 relative overflow-hidden">
                                {/* Team image */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                {/* Overlay with socials */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`LinkedIn - ${member.name}`}
                                            className="p-2 bg-white rounded-full text-primary hover:scale-110 transition-transform"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}

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
