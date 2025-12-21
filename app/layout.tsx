import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

import { AntigravityBackground } from "@/components/antigravity-background"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// For now, metadata will be set at page level

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`font-sans antialiased bg-background text-foreground relative`}>
        <AntigravityBackground className="fixed inset-0 z-[-1] opacity-30 pointer-events-none" />
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
    title: "TechMarra — Web design & development",
    description:
    "Modern websites and digital experiences for riads and businesses — built with Next.js by TechMarra.",
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
  },
};
