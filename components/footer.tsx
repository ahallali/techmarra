"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="TechMarra"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover border border-primary/10"
              />
              <span className="text-lg font-bold text-primary">TECHMARRA</span>
            </div>
            <p className="text-sm text-foreground/70">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-foreground mb-4">{t.footer.navigation}</p>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  {t.footer.services}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  {t.footer.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-foreground mb-4">{t.footer.contact}</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@techmarra.ma"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} /> contact@techmarra.ma
                </a>
              </li>
              <li>
                <a
                  href="tel:+212614755457"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone size={16} /> +212 614 755 457
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-foreground mb-4">{t.footer.followUs}</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-foreground/60">{t.footer.copyright.replace('{year}', currentYear.toString())}</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
