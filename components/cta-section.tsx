"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { FadeInUp } from "@/components/animated-components"
import { TypewriterText } from "@/components/typewriter-text"
import { MagneticButton } from "@/components/magnetic-button"
import { AntigravityBackground } from "@/components/antigravity-background"

export function CTASection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 animate-gradient-slow" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Antigravity Ring */}
        <AntigravityBackground className="opacity-60" />

        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2 mb-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
              <span className="text-sm font-medium text-white/90">
                {language === 'fr' ? 'Consultation gratuite' : 'Free consultation'}
              </span>
            </motion.div>

            {/* Heading */}
            <TypewriterText
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ "--typewriter-text-color": "white" } as React.CSSProperties}
              delay={0.3}
            >
              {t.cta.heading}
            </TypewriterText>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.cta.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <MagneticButton strength={0.4}>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <span className="absolute inset-0 shimmer pointer-events-none" />

                  <span className="relative z-10">{t.cta.button}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-10 flex items-center justify-center gap-6 text-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'fr' ? 'Sans engagement' : 'No commitment'}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'fr' ? 'Réponse sous 24h' : 'Reply within 24h'}
              </span>
            </motion.div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
