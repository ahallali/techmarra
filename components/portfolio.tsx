"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence } from "framer-motion"
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animated-components"
import { MagneticButton } from "@/components/magnetic-button"
import { AntigravityBackground } from "@/components/antigravity-background"

const portfolioItems = [
  {
    id: 1,
    name: "Riad Elfassia",
    category: "Hospitality",
    image: "/luxury-moroccan-riad-website.jpg",
    features: ["bookingIntegration", "gallery", "reviews"],
  },
  {
    id: 2,
    name: "Roma - Italian Restaurant",
    category: "Restauration",
    image: "/mountain-hotel-website-morocco.jpg",
    features: ["Restauration", "maps", "socialMedia","bookingIntegration"],
  },
  {
    id: 3,
    name: "Le Rêve Marocain",
    category: "Restauration",
    image: "/boutique-riad-medina-website.jpg",
    features: ["Restauration", "Menus", "reviews" , "bookingIntegration"],
  },
  {
    id: 4,
    name: "Maison du Kaftan",
    category: "E-commerce",
    image: "/artisanal_ecommerce_website.png",
    features: ["ecommerce", "gallery", "socialMedia"],
  },
  {
    id: 5,
    name: "Cabinet Alami",
    category: "Corporate",
    image: "/corporate_consulting_website.png",
    features: ["corporate", "seo", "analytics"],
  },
]

export function Portfolio({ full }: { full?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [filter, setFilter] = useState("All")

  // Derive categories from the actual data to avoid mismatches
  const derivedCategories = Array.from(new Set(portfolioItems.map((it) => it.category)) )
  const categories = ["All", ...derivedCategories]

  const isAll = filter.toLowerCase().trim() === "all"
  const filteredItems = isAll
    ? portfolioItems
    : portfolioItems.filter(item => item.category.toLowerCase().trim() === filter.toLowerCase().trim())

  const displayItems = full ? filteredItems : filteredItems.slice(0, 3)

  return (
    <section className={`relative ${full ? "py-20 md:py-32" : "py-20 md:py-32"} bg-background overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Antigravity Ring - Custom colored for visibility on light background */}
        <AntigravityBackground
          className="opacity-40"
          style={{ "--particle-color": "oklch(0.4 0.15 260)" } as React.CSSProperties}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="mb-12 space-y-4 text-center">
            <motion.span
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/10"
              whileHover={{ scale: 1.05 }}
            >
              {t.portfolio.sectionTitle}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{t.portfolio.heading}</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              {t.portfolio.description}
            </p>
          </div>
        </FadeInUp>

        {/* Filters */}
        {full && (
          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => {
                    // Debug: compute matches before updating state to aid tracing
                    const matches = portfolioItems.filter(item => item.category.toLowerCase().trim() === cat.toLowerCase().trim()).length
                    // eslint-disable-next-line no-console
                    console.debug(`portfolio filter: ${cat} => ${matches} matches`)
                    setFilter(cat)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                    ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg"
                    : "bg-secondary/50 text-foreground hover:bg-secondary border border-border/50"
                    }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </FadeInUp>
        )}

        {/* Portfolio Grid */}
        <StaggerChildren staggerDelay={0.1} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {process.env.NODE_ENV !== "production" ? (
            // Simplified rendering in development to rule out animation/rendering bugs
            displayItems.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground/70">{language === 'fr' ? 'Aucun projet pour cette catégorie.' : 'No projects in this category.'}</p>
              </div>
            ) : (
              displayItems.map((item) => (
                <div key={`dev-card-${item.id}`} className="group relative h-full">
                  <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden shadow-premium p-4">
                    <div className="h-40 overflow-hidden mb-4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-foreground/70 mb-2">{item.category}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-secondary/80 text-foreground/70 px-3 py-1.5 rounded-full border border-border/50">
                          {t.portfolio.features[feature as keyof typeof t.portfolio.features] || feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )
          ) : (
            <AnimatePresence mode="popLayout">
              {displayItems.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-foreground/70">{language === 'fr' ? 'Aucun projet pour cette catégorie.' : 'No projects in this category.'}</p>
                </div>
              ) : displayItems.map((item) => (
                <StaggerItem key={item.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group relative h-full"
                  >
                    <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          onError={(e) => {
                            e.currentTarget.src = "/luxury-moroccan-riad-website.jpg"
                          }}
                        />

                        {/* Overlay - Darker for better text visibility */}
                        <motion.div
                          className="absolute inset-0 bg-black/60"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Hover Content */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.button
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-bold shadow-lg hover:scale-105 transition-transform"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ scale: 1.05 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {language === 'fr' ? 'Voir le projet' : 'View Project'}
                            <ExternalLink className="w-4 h-4" />
                          </motion.button>
                        </motion.div>

                        {/* Category Badge - High contrast */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-black/50 backdrop-blur-md text-white border border-white/20 shadow-sm">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>

                        <div className="flex gap-2 flex-wrap">
                          {item.features.map((feature, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-xs bg-secondary/80 text-foreground/70 px-3 py-1.5 rounded-full border border-border/50"
                            >
                              {t.portfolio.features[feature as keyof typeof t.portfolio.features]}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </AnimatePresence>
          )}
        </StaggerChildren>


        {/* View All Button */}
        {!full && (
          <FadeInUp delay={0.3}>
            <div className="mt-16 flex justify-center">
              <MagneticButton strength={0.3}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 btn-premium group"
                >
                  <span>{t.portfolio.viewAll}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </FadeInUp>
        )}
      </div>
    </section>
  )
}
