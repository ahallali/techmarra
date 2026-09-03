"use client"

import { useState } from "react"
import { send } from "@emailjs/browser"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { submitContact } from "@/lib/contact-submit.mjs"
import { translations } from "@/lib/translations"

export function Contact({ full }: { full?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await submitContact(formData, language, {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }, send)

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", property: "", message: "" })
      // keep success visible briefly
      setTimeout(() => setSubmitted(false), 3000)
    } catch {
      setError("Could not send your message. Your text has been kept; please try again or use the email link.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={`relative ${full ? "py-20 md:py-32" : "py-20 md:py-32"} bg-background`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{t.contact.sectionTitle}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                {t.contact.heading}
              </h2>
              <p className="text-lg text-foreground/70 mt-4">
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.contact.email}</p>
                  <a
                    href="mailto:contact@techmarra.ma"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    contact@techmarra.ma
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.contact.phone}</p>
                  <a href="tel:+212612345678" className="text-foreground/70 hover:text-primary transition-colors">
                    +212 614 755 457
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.contact.location}</p>
                  <p className="text-foreground/70">{t.contact.locationValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-96">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t.contact.success.title}</h3>
                  <p className="text-foreground/70">{t.contact.success.message}</p>
                </div>
              </div>
            ) : (
              <form aria-busy={loading} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.email}</label>
                    <input
                      type="email"
                      id="contact-email"
                    name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      id="contact-phone"
                    name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={t.contact.form.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-property" className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.property}</label>
                  <input
                    type="text"
                    id="contact-property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t.contact.form.propertyPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-2">{t.contact.form.message}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded-lg px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity ${
                    loading ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:opacity-90"
                  }`}
                >
                  {loading ? ("Sending...") : t.contact.form.submit}
                </button>

                {error && (
                  <p className="text-sm text-red-500 text-center mt-2">{error}</p>
                )}

                <p className="text-xs text-foreground/60 text-center">
                  {t.contact.form.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
