"use client"

import { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence } from "framer-motion"
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animated-components"

export function FAQ() {
    const { language } = useLanguage()
    const t = translations[language]
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeInUp>
                    <div className="text-center mb-16">
                        <motion.div
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <HelpCircle className="w-4 h-4" />
                            {t.faq.sectionTitle}
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.faq.heading}</h2>
                        <p className="text-lg text-foreground/60">{t.faq.description}</p>
                    </div>
                </FadeInUp>

                {/* FAQ Items */}
                <StaggerChildren staggerDelay={0.1} className="space-y-4">
                    {t.faq.items.map((item, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "border-primary/30 shadow-premium bg-card"
                                        : "border-border/50 bg-card/50 hover:bg-card hover:border-border"
                                    }`}
                                layout
                            >
                                <motion.button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <span className={`text-lg font-semibold pr-8 transition-colors ${openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"
                                        }`}>
                                        {item.q}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-secondary text-foreground/70 group-hover:bg-primary/10 group-hover:text-primary"
                                            }`}
                                    >
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5" />
                                        ) : (
                                            <Plus className="w-5 h-5" />
                                        )}
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                height: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 }
                                            }}
                                        >
                                            <motion.div
                                                className="px-6 pb-6 text-foreground/70 leading-relaxed"
                                                initial={{ y: -10 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <div className="pt-2 border-t border-border/30">
                                                    <p className="pt-4">{item.a}</p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>

                {/* CTA */}
                <FadeInUp delay={0.4}>
                    <motion.div
                        className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50"
                        whileHover={{ scale: 1.01 }}
                    >
                        <p className="text-foreground/80 mb-4">
                            {language === 'fr'
                                ? "Vous avez d'autres questions ?"
                                : "Have more questions?"}
                        </p>
                        <motion.a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </FadeInUp>
            </div>
        </section>
    )
}
