import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0806",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lauramelolopes.adv.br"),
  title:
    "Adv. Laura Melo Lopes — Advocacia & Consultoria Jurídica | Previdenciário, Médico, Criminal, Família e Sucessões · OAB/MG 248.197 · 5,0 ★ (10 avaliações no Google) · Carmo do Rio Claro - MG",
  description:
    "Adv. Laura Melo Lopes (OAB/MG 248.197) — Advocacia e consultoria jurídica de alta performance, clareza e resolutividade comprovada em Direito Previdenciário (INSS), Direito Médico e da Saúde, Direito Criminal, Família e Sucessões e Direito Civil. Atendimento presencial em Carmo do Rio Claro - MG (Rua Monsenhor Mário, 405) e on-line em todo o Brasil. Nota máxima 5,0 no Google com 10 avaliações. WhatsApp: (35) 99876-3350.",
  keywords: [
    "Adv. Laura Melo Lopes",
    "Laura Melo Lopes Advogada",
    "Dra. Laura Melo Lopes",
    "Laura Melo Lopes Advocacia e Consultoria Jurídica",
    "OAB MG 248.197",
    "Advogado em Carmo do Rio Claro MG",
    "Advogada em Carmo do Rio Claro Minas Gerais",
    "Advocacia Carmo do Rio Claro",
    "Advogado Previdenciário Carmo do Rio Claro",
    "Aposentadoria INSS Carmo do Rio Claro",
    "Direito Médico Carmo do Rio Claro",
    "Negativa de Plano de Saúde Carmo do Rio Claro",
    "Medicamento Alto Custo SUS Liminar",
    "Advogado Criminal Carmo do Rio Claro",
    "Defesa Penal Flagrante Custódia",
    "Direito de Família Carmo do Rio Claro",
    "Divórcio e Pensão Carmo do Rio Claro",
    "Inventário em Carmo do Rio Claro",
    "Rua Monsenhor Mário 405 Carmo do Rio Claro",
    "Consultoria Jurídica Carmo do Rio Claro",
    "Melhor Advogada Carmo do Rio Claro MG",
  ],
  authors: [{ name: "Adv. Laura Melo Lopes" }],
  creator: "Adv. Laura Melo Lopes",
  publisher: "Adv. Laura Melo Lopes",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=lml2026", sizes: "any" },
      { url: "/icon-32x32.png?v=lml2026", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=lml2026", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=lml2026", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=lml2026", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=lml2026", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=lml2026",
    apple: [{ url: "/apple-icon.png?v=lml2026", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lauramelolopes.adv.br",
    title:
      "Adv. Laura Melo Lopes — Advocacia & Consultoria Jurídica | 5,0 ★ (10 avaliações no Google)",
    description:
      "Atuação jurídica especializada, ágil e resolutiva em Direito Previdenciário, Direito Médico, Direito Criminal, Família e Sucessões. Sede em Carmo do Rio Claro - MG e atendimento on-line em todo o país. WhatsApp: (35) 99876-3350.",
    siteName: "Adv. Laura Melo Lopes",
    images: [
      {
        url: "/logo.png",
        width: 934,
        height: 604,
        alt: "Adv. Laura Melo Lopes — Advocacia & Consultoria Jurídica",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Adv. Laura Melo Lopes — Advocacia & Consultoria Jurídica",
    alternateName: "Laura Melo Lopes Advogada",
    telephone: "+55-35-99876-3350",
    email: "contato@lauramelolopes.adv.br",
    url: "https://lauramelolopes.adv.br",
    image: "https://lauramelolopes.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Monsenhor Mário, 405",
      addressLocality: "Carmo do Rio Claro",
      addressRegion: "MG",
      postalCode: "37150-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
    },
    areaServed: [
      "Carmo do Rio Claro",
      "Alpinópolis",
      "Passos",
      "Conceição da Aparecida",
      "Alterosa",
      "Guapé",
      "Sul de Minas",
      "Belo Horizonte",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5535998763350",
      "https://www.instagram.com/adv.lauramelolopes/",
      "https://bio.site/adv.lauramelolopes",
      "https://www.google.com/search?q=Laura+Melo+Lopes+%E2%80%94+Advogada%0ACarmo+do+Rio+Claro+%C2%B7+MG",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=lml2026" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=lml2026" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=lml2026" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=lml2026" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png?v=lml2026" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=lml2026" />
        <link rel="shortcut icon" href="/favicon.ico?v=lml2026" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=lml2026" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#1a1612] selection:text-[#f7cd6d] bg-[#fdfbf7] text-[#14110d]">
        {children}
      </body>
    </html>
  );
}
