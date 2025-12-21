"use client"

import Link from "next/link"
import { TypewriterText } from "@/components/typewriter-text"
import { TiltCard } from "@/components/tilt-card"
import { ShoppingBag, Building2, Hotel, Search, Wrench, Palette, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animated-components"

export function Services({ full }: { full?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language]

  // Define colors for subtle glows instead of full gradients
  const services = t.services.items.map((item, index) => {
    const icons = [ShoppingBag, Building2, Hotel, Search, Wrench, Palette]
    const glowColors = [
      "bg-blue-500/20",
      "bg-purple-500/20",
      "bg-amber-500/20",
      "bg-green-500/20",
      "bg-rose-500/20",
      "bg-indigo-500/20"
    ]
    const textColors = [
      "text-blue-600",
      "text-purple-600",
      "text-amber-600",
      "text-green-600",
      "text-rose-600",
      "text-indigo-600"
    ]

    return {
      icon: icons[index],
      title: item.title,
      description: item.description,
      glowColor: glowColors[index],
      textColor: textColors[index]
    }
  })

  return (
    <section className={`relative ${full ? "py-20 md:py-32" : "py-20 md:py-32"} bg-background overflow-hidden`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {!full && (
          <FadeInUp>
            <div className="mb-16 space-y-4 text-center">
              <motion.span
                className="inline-block text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/10"
                whileHover={{ scale: 1.05 }}
              >
                {t.services.sectionTitle}
              </motion.span>
              <TypewriterText
                as="h2"
                className="text-4xl md:text-5xl font-bold text-foreground text-balance block mx-auto"
                delay={0.2}
              >
                {t.services.heading}
              </TypewriterText>
              <p className="mx-auto max-w-2xl text-lg text-foreground/60 leading-relaxed">
                {t.services.description}
              </p>
            </div>
          </FadeInUp>
        )}

        {/* Services Grid */}
        <StaggerChildren staggerDelay={0.1} className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <StaggerItem key={index}>
                <TiltCard
                  className="group h-full rounded-3xl bg-card border border-border/20 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-transparent"
                  gradientColor="transparent" // Disable the default tilt glare color to handle it manually if needed, or keep it subtle
                >
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-8">
                    {/* Icon Container with Dynamic Glow */}
                    <div className="mb-6 relative">
                      {/* Glow behind icon */}
                      <div className={`absolute -inset-4 rounded-full ${service.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150`} />

                      <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/50 group-hover:bg-white transition-colors duration-300 shadow-sm group-hover:shadow-md`}>
                        <Icon className={`h-8 w-8 text-primary transition-colors duration-300 ${service.textColor}`} />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="mb-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <div className="relative overflow-hidden flex-grow">
                      <p className="text-foreground/60 leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Link (Subtle) */}
                    <Link href="/contact" className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                      <span>{language === 'fr' ? 'Découvrir' : 'Discover'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </TiltCard>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
