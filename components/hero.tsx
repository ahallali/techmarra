"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { FadeInUp, FadeInRight, Floating, StaggerChildren, StaggerItem } from "@/components/animated-components"
import { useAnimatedCounter } from "@/hooks/use-scroll-animation"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { AntigravityBackground } from "@/components/antigravity-background"
import { MagneticButton } from "@/components/magnetic-button"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  // Animated counters for stats
  const projectsCounter = useAnimatedCounter(50, 2000)
  const clientsCounter = useAnimatedCounter(30, 2000)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background py-10 md:py-20 ">
      {/* Antigravity Particle Ring Animation */}
      <AntigravityBackground className="opacity-80" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Geometric Decorations */}
        <motion.div
          className="absolute top-1/4 left-10 w-3 h-3 bg-primary/30 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-2 h-2 bg-accent/40 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 border border-primary/20 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Launch Promo Badge */}
            <FadeInUp delay={0.1}>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 shadow-premium"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-r from-accent to-accent/80"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-3 w-3 text-white" />
                </motion.span>
                <span className="text-xs font-semibold text-foreground/90">{t.hero.promoLabel}</span>
              </motion.div>
            </FadeInUp>

            {/* Main Heading */}
            <FadeInUp delay={0.2}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {t.hero.title}
                  </motion.span>{" "}
                  <motion.span
                    className="text-gradient block mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {t.hero.titleHighlight1}
                  </motion.span>
                  <motion.span
                    className="block mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <span className="text-accent">{t.hero.titleHighlight2}</span>{" "}
                    <span className="text-foreground/80">{t.hero.titleForRiads}</span>
                  </motion.span>
                </h1>

                <motion.p
                  className="text-lg md:text-xl text-foreground/60 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {t.hero.subtitle}
                </motion.p>
              </div>
            </FadeInUp>

            {/* CTA Buttons */}
            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticButton strength={0.4}>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 btn-premium overflow-hidden"
                  >
                    <span className="relative z-10">{t.hero.claimDiscount}</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    {t.hero.learnMore}
                  </Link>
                </MagneticButton>
              </div>
            </FadeInUp>

            {/* Stats & Trust Indicators */}
            <FadeInUp delay={0.5}>
              <div className="pt-8 space-y-4 border-t border-border/50">
                <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider">{t.hero.trustedBy}</p>
                <StaggerChildren className="flex flex-wrap gap-6">
                  <StaggerItem>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span ref={projectsCounter.ref as React.RefObject<HTMLSpanElement>} className="font-bold text-foreground">
                        {projectsCounter.count}+
                      </span>
                      <span className="text-sm">{language === 'fr' ? 'Projets' : 'Projects'}</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span ref={clientsCounter.ref as React.RefObject<HTMLSpanElement>} className="font-bold text-foreground">
                        {clientsCounter.count}+
                      </span>
                      <span className="text-sm">{language === 'fr' ? 'Clients' : 'Clients'}</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="font-bold text-foreground">100%</span>
                      <span className="text-sm">Satisfaction</span>
                    </div>
                  </StaggerItem>
                </StaggerChildren>
              </div>
            </FadeInUp>
          </div>

          {/* Visual - Floating Card */}
          <FadeInRight delay={0.3}>
            <Floating duration={4} y={15}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Main Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-white/10">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 z-10 pointer-events-none" />

                  <img
                    src="/hero_marrakech_riad.png"
                    alt="Modern website preview for Moroccan hospitality businesses"
                    className="w-full h-auto object-cover aspect-[4/3]"
                    onError={(e) => {
                      e.currentTarget.src = "/luxury-moroccan-riad-website-preview.jpg"
                    }}
                  />
                </div>

                {/* Floating Badge 1 */}
                <motion.div
                  className="absolute -top-4 -right-4 md:top-8 md:-right-8 glass-strong rounded-xl px-4 py-3 shadow-premium"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-foreground/80">
                      {language === 'fr' ? 'Site en ligne' : 'Live Site'}
                    </span>
                  </div>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div
                  className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 glass-strong rounded-xl px-4 py-3 shadow-premium"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary/80 border-2 border-white" />
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent to-accent/80 border-2 border-white" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-foreground/90">+40%</p>
                      <p className="text-foreground/60">{language === 'fr' ? 'Réservations' : 'Bookings'}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Floating>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
