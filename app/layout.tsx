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
  themeColor: "#080502",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://guimaraessantiago.adv.br"),
  title:
    "Guimarães & Santiago Advogados — Dra. Anna Luiza Guimarães & Dr. Vitor Santiago | Civil, Inventários, Família & Sucessões · 5,0 ★ (11 avaliações no Google) · Salinas - MG",
  description:
    "Guimarães & Santiago Advogados (Dra. Anna Luiza Guimarães e Dr. Vitor Santiago). Advocacia de alta performance, agilidade técnica e resolutividade comprovada em Direito Civil, Inventários e Partilhas, Família, Contratos e Regularização Patrimonial. Atendimento presencial em Salinas - MG (Av. João Pena Sobrinho, 115 - Centro) e on-line em todo o Brasil. Nota máxima 5,0 no Google com 11 avaliações. WhatsApp: (38) 99958-7416.",
  keywords: [
    "Guimarães & Santiago Advogados",
    "Anna Luiza Guimarães Advogados",
    "Dra. Anna Luiza Guimarães",
    "Dr. Vitor Santiago",
    "Advogado em Salinas MG",
    "Advogada em Salinas Minas Gerais",
    "Advocacia Salinas MG",
    "Advogado Civil Salinas MG",
    "Inventário em Salinas MG",
    "Inventário Rápido Minas Gerais",
    "Direito de Família Salinas",
    "Divórcio e Partilha de Bens Salinas",
    "Avenida João Pena Sobrinho 115 Salinas",
    "Escritório de Advocacia Salinas MG",
    "Advogado de Contratos Salinas",
    "Regularização Imobiliária Salinas",
    "Melhor Advogado Salinas MG",
    "Consultoria Jurídica Salinas",
  ],
  authors: [{ name: "Guimarães & Santiago Advogados" }],
  creator: "Guimarães & Santiago Advogados",
  publisher: "Guimarães & Santiago Advogados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=gs2026", sizes: "any" },
      { url: "/icon-32x32.png?v=gs2026", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=gs2026", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=gs2026", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=gs2026", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=gs2026", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=gs2026",
    apple: [{ url: "/apple-icon.png?v=gs2026", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://guimaraessantiago.adv.br",
    title:
      "Guimarães & Santiago Advogados — Dra. Anna Luiza Guimarães & Dr. Vitor Santiago | 5,0 ★ (11 avaliações no Google)",
    description:
      "Atuação jurídica especializada, ágil e resolutiva em Direito Civil, Inventários, Família, Contratos e Patrimônio. Sede em Salinas - MG e atendimento on-line em todo o país. WhatsApp: (38) 99958-7416.",
    siteName: "Guimarães & Santiago Advogados",
    images: [
      {
        url: "/logo.png",
        width: 940,
        height: 345,
        alt: "Guimarães & Santiago Advogados",
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
    name: "Guimarães & Santiago Advogados",
    alternateName: "Anna Luiza Guimarães Advogados",
    telephone: "+55-38-99958-7416",
    email: "contato@guimaraessantiago.adv.br",
    url: "https://guimaraessantiago.adv.br",
    image: "https://guimaraessantiago.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. João Pena Sobrinho, 115 - Centro",
      addressLocality: "Salinas",
      addressRegion: "MG",
      postalCode: "39560-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "11",
    },
    areaServed: [
      "Salinas",
      "Taiobeiras",
      "Rubelita",
      "Coronel Murta",
      "Padre Carvalho",
      "Montes Claros",
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
      "https://wa.me/5538999587416",
      "https://www.instagram.com/guimaraes.santiagoadv/",
      "https://www.google.com/search?q=Guimar%C3%A3es+%26+Santiago+Advogados%0ASalinas+%C2%B7+MG",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=gs2026" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=gs2026" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=gs2026" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=gs2026" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png?v=gs2026" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=gs2026" />
        <link rel="shortcut icon" href="/favicon.ico?v=gs2026" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=gs2026" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#1a1612] selection:text-[#f8f3e6] bg-[#fdfbf7] text-[#14110d]">
        {children}
      </body>
    </html>
  );
}
