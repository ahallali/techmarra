"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const navItems = [
    { label: t.nav.services, href: "/services" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 ">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="TechMarra"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover border-2 border-primary/10 shadow-sm"
              />
              <span className="text-xl font-bold text-primary hidden sm:inline tracking-tight">TechMarra</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-card shadow-lg">
                  <button
                    onClick={() => {
                      setLanguage("fr")
                      setShowLanguageMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm rounded-t-lg transition-colors ${language === "fr" ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary"
                      }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en")
                      setShowLanguageMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm rounded-b-lg transition-colors ${language === "en" ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary"
                      }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t.nav.getStarted}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="border-t border-border pt-3 mt-3 space-y-2">
              <p className="text-xs font-semibold text-foreground/60 uppercase px-2">{t.nav.language || "Langue"}</p>
              <button
                onClick={() => {
                  setLanguage("fr")
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm rounded transition-colors ${language === "fr" ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary"
                  }`}
              >
                Français
              </button>
              <button
                onClick={() => {
                  setLanguage("en")
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm rounded transition-colors ${language === "en" ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary"
                  }`}
              >
                English
              </button>
            </div>

            <Link
              href="/contact"
              className="block w-full rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              {t.nav.getStarted}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
