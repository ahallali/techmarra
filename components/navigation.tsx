"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { MagneticButton } from "@/components/magnetic-button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const navItems = [
    { label: t.nav.services, href: "/services" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ]

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "glass-strong shadow-premium border-b border-white/10"
        : "bg-background/80 backdrop-blur-sm border-b border-border"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="TechMarra"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover border-2 border-primary/20 shadow-lg group-hover:border-primary/40 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-primary hidden sm:inline tracking-tight group-hover:text-gradient transition-all duration-300">
                TechMarra
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <MagneticButton key={item.label} strength={0.3}>
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 group py-2 px-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </MagneticButton>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <MagneticButton strength={0.2}>
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  <Globe size={18} />
                  <span>{language.toUpperCase()}</span>
                </button>
              </MagneticButton>

              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 rounded-xl border border-border glass-strong shadow-premium-lg overflow-hidden z-50"
                  >
                    <button
                      onClick={() => {
                        setLanguage("fr")
                        setShowLanguageMenu(false)
                      }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${language === "fr"
                        ? "bg-primary/10 text-primary font-semibold"
                        : "hover:bg-secondary/50 text-foreground"
                        }`}
                    >
                      🇫🇷 Français
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en")
                        setShowLanguageMenu(false)
                      }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${language === "en"
                        ? "bg-primary/10 text-primary font-semibold"
                        : "hover:bg-secondary/50 text-foreground"
                        }`}
                    >
                      🇬🇧 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <MagneticButton strength={0.4}>
              <Link
                href="/contact"
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90 px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg hover:shadow-xl btn-premium group block"
              >
                <span className="relative z-10">{t.nav.getStarted}</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-6 pt-4 space-y-2 border-t border-border">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors py-3 px-4 rounded-lg"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Language Selector */}
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-xs font-semibold text-foreground/50 uppercase px-4 mb-2">
                    {t.nav.language || "Langue"}
                  </p>
                  <div className="flex gap-2 px-4">
                    <button
                      onClick={() => {
                        setLanguage("fr")
                        setIsOpen(false)
                      }}
                      className={`flex-1 text-center px-4 py-2.5 text-sm rounded-lg transition-colors ${language === "fr"
                        ? "bg-primary text-primary-foreground font-medium"
                        : "bg-secondary hover:bg-secondary/80"
                        }`}
                    >
                      🇫🇷 FR
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en")
                        setIsOpen(false)
                      }}
                      className={`flex-1 text-center px-4 py-2.5 text-sm rounded-lg transition-colors ${language === "en"
                        ? "bg-primary text-primary-foreground font-medium"
                        : "bg-secondary hover:bg-secondary/80"
                        }`}
                    >
                      🇬🇧 EN
                    </button>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 pt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-full bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-base font-semibold text-primary-foreground text-center shadow-lg"
                  >
                    {t.nav.getStarted}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
