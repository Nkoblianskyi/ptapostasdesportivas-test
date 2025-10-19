import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Melhores Sites de Apostas em Portugal 2025 | Top Casas de Apostas Licenciadas",
  description:
    "Descubra os melhores sites de apostas desportivas em Portugal. Análise completa dos top bookmakers licenciados, bónus exclusivos, odds competitivas e apostas seguras. Futebol, ténis, basquetebol, Fórmula 1 e muito mais.",
  category: "Sports Betting Reviews",
  classification: "Informational/Review Site",
  keywords: [
    "melhores sites de apostas Portugal",
    "top sites apostas desportivas",
    "casas de apostas licenciadas Portugal",
    "bookmakers Portugal",
    "sites apostas online Portugal",
    "apostas desportivas legais",
    "top betting sites Portugal",
    "melhores bookmakers Portugal",
    "apostas seguras Portugal",
    "sites apostas confiáveis",
    "casas apostas reguladas",
    "apostas futebol Portugal",
    "apostas ténis online",
    "apostas basquetebol",
    "apostas Fórmula 1",
    "apostas MMA UFC",
    "apostas hóquei no gelo",
    "apostas dardos",
    "apostas bilhar snooker",
    "bónus apostas desportivas",
    "bónus boas-vindas apostas",
    "apostas ao vivo",
    "live betting Portugal",
    "odds apostas desportivas",
    "comparação sites apostas",
    "ranking casas apostas Portugal",
    "apostas mobile friendly",
    "apps apostas desportivas",
    "métodos pagamento apostas",
    "apostas responsáveis Portugal",
    "licenças apostas Portugal",
    "SRIJ Portugal",
    "melhores odds Portugal",
    "cashout apostas",
    "streaming ao vivo apostas",
  ],
  authors: [{ name: "Melhores Sites de Apostas Portugal" }],
  publisher: "ptapostasdesportivas.com",
  openGraph: {
    title: "Melhores Sites de Apostas em Portugal 2025 | Top Bookmakers Licenciados",
    description:
      "Análise completa dos melhores sites de apostas desportivas em Portugal. Top bookmakers licenciados, bónus exclusivos e apostas seguras.",
    url: "https://ptapostasdesportivas.com",
    siteName: "Melhores Sites de Apostas Portugal",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melhores Sites de Apostas em Portugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Sites de Apostas em Portugal 2025",
    description: "Top bookmakers licenciados, bónus exclusivos e apostas seguras",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ptapostasdesportivas.com",
  },
  other: {
    rating: "general",
    distribution: "global",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
