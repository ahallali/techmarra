"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const portfolioItems = [
  {
    id: 1,
    name: "Atlas Market",
    category: "E-commerce",
    image: "/luxury-moroccan-riad-website.jpg",
    features: ["ecommerce", "analytics", "seo"],
  },
  {
    id: 2,
    name: "TechStart Maroc",
    category: "Corporate",
    image: "/mountain-hotel-website-morocco.jpg",
    features: ["corporate", "maps", "socialMedia"],
  },
  {
    id: 3,
    name: "Riad Al-Fassia",
    category: "Hospitality",
    image: "/riad-elfassia.png",
    url: "https://riad-demo.vercel.app/",
    features: ["bookingIntegration", "gallery", "reviews"],
  },
  {
    id: 4,
    name: "Maison du Kaftan",
    category: "E-commerce",
    image: "/artisanal_ecommerce_website.png", // Will generate this
    features: ["ecommerce", "gallery", "socialMedia"],
  },
  {
    id: 5,
    name: "Cabinet Alami",
    category: "Corporate",
    image: "/corporate_consulting_website.png", // Will generate this
    features: ["corporate", "seo", "analytics"],
  },
  {
    id: 6,
    name: "Dar Zitoune",
    category: "Hospitality",
    image: "/modern_restaurant_website.png", // Will generate this
    features: ["customBooking", "maps", "reviews"],
  },
]

export function Portfolio({ full }: { full?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Hospitality", "E-commerce", "Corporate"]

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter)

  // Show only 3 items on home page, all on full page
  const displayItems = full ? filteredItems : filteredItems.slice(0, 3)

  return (
    <section className={`relative ${full ? "py-20 md:py-32" : "py-20 md:py-32"} bg-background`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t.portfolio.sectionTitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{t.portfolio.heading}</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            {t.portfolio.description}
          </p>
        </div>

        {/* Filters */}
        {full && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  // onError={(e) => {
                  //   // Fallback if image doesn't exist yet
                  //   e.currentTarget.src = "/luxury-moroccan-riad-website.jpg"
                  // }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white/20 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white/20 transition-colors">
                      View Project <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap mt-auto">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {t.portfolio.features[feature as keyof typeof t.portfolio.features]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!full && (
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t.portfolio.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
