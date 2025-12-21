"use client"

import { Search, Lightbulb, Code2, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FadeInUp } from "@/components/animated-components"

export function Process() {
    const { language } = useLanguage()
    const t = translations[language]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const icons = [Search, Lightbulb, Code2, Rocket]
    const colors = [
        { bg: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30", text: "text-blue-600" },
        { bg: "from-amber-500/20 to-yellow-500/20", border: "border-amber-500/30", text: "text-amber-600" },
        { bg: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30", text: "text-purple-600" },
        { bg: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30", text: "text-green-600" },
    ]

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeInUp>
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            {t.process.sectionTitle}
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.process.heading}</h2>
                        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">{t.process.description}</p>
                    </div>
                </FadeInUp>

                {/* Process Steps */}
                <div ref={ref} className="relative">


                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                        {t.process.steps.map((step, index) => {
                            const Icon = icons[index]
                            const color = colors[index]

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="flex flex-col items-center text-center group"
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {/* Icon Circle */}
                                        <motion.div
                                            className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${color.bg} border-2 ${color.border} flex items-center justify-center mb-6 shadow-premium group-hover:shadow-premium-lg transition-all duration-300`}
                                            whileHover={{ scale: 1.05, rotate: 5 }}
                                        >
                                            {/* Pulse Ring */}
                                            <motion.div
                                                className={`absolute inset-0 rounded-full border-2 ${color.border}`}
                                                initial={{ scale: 1, opacity: 0.5 }}
                                                animate={isInView ? {
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0, 0.5]
                                                } : {}}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.3
                                                }}
                                            />

                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                animate={isInView ? { rotate: 360 } : {}}
                                                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                                            >
                                                <Icon className={`w-12 h-12 ${color.text}`} />
                                            </motion.div>

                                            {/* Step Number Badge */}
                                            <motion.div
                                                className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-accent to-accent/80 text-white flex items-center justify-center font-bold text-lg shadow-lg"
                                                initial={{ scale: 0 }}
                                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    delay: 0.6 + index * 0.15
                                                }}
                                            >
                                                {index + 1}
                                            </motion.div>
                                        </motion.div>

                                        {/* Text Content */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                                        >
                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-foreground/60 leading-relaxed max-w-xs">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
