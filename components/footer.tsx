"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail,Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/animated-components"
import { MagneticButton } from "@/components/magnetic-button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = translations[language]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/TechMarra", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/tech-marra/", label: "LinkedIn" },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-card to-card/80 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <StaggerChildren staggerDelay={0.1} className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <StaggerItem>
            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative">
                    <Image
                      src="/logo.png"
                      alt="TechMarra"
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover border-2 border-primary/20 shadow-lg"
                    />
                  </div>
                  <span className="text-xl font-bold text-primary tracking-tight">TechMarra</span>
                </Link>
              </motion.div>
              <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
                {t.footer.tagline}
              </p>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group h-11 w-11 rounded-xl bg-primary/5 hover:bg-primary/10 border border-border/50 hover:border-primary/30 flex items-center justify-center text-foreground/60 hover:text-primary transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </StaggerItem>

          {/* Navigation */}
          <StaggerItem>
            <div>
              <h3 className="font-semibold text-foreground mb-5">{t.footer.navigation}</h3>
              <ul className="space-y-3">
                {[
                  { label: t.footer.services, href: "/services" },
                  { label: t.footer.portfolio, href: "/portfolio" },
                  { label: t.footer.about, href: "/about" },
                  { label: t.footer.contact, href: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        {item.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <div>
              <h3 className="font-semibold text-foreground mb-5">{t.footer.contact}</h3>
              <ul className="space-y-4">
                <li>
                  <motion.a
                    href="mailto:contact@techmarra.ma"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Mail size={16} className="text-primary" />
                    </div>
                    contact@techmarra.ma
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="tel:+212612345678"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Phone size={16} className="text-primary" />
                    </div>
                    +212 614 755 457
                  </motion.a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-sm text-foreground/60">
                    <div className="p-2 rounded-lg bg-primary/5">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    Gueliz, Marrakech
                  </div>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Newsletter / CTA */}
          <StaggerItem>
            <div>
              <h3 className="font-semibold text-foreground mb-5">
                {language === 'fr' ? 'Restez informé' : 'Stay updated'}
              </h3>
              <p className="text-sm text-foreground/60 mb-4">
                {language === 'fr'
                  ? 'Recevez nos conseils et actualités'
                  : 'Get our tips and updates'}
              </p>
              <div className="mt-4">
                <MagneticButton strength={0.2}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </StaggerItem>
        </StaggerChildren>

        {/* Bottom Bar */}
        <FadeInUp delay={0.3}>
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-foreground/50">
                {t.footer.copyright.replace('{year}', currentYear.toString())}
              </p>
              <div className="flex gap-6">
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-xs text-foreground/50 hover:text-primary transition-colors"
                >
                  {t.footer.privacy}
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-xs text-foreground/50 hover:text-primary transition-colors"
                >
                  {t.footer.terms}
                </motion.a>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </footer>
  )
}
