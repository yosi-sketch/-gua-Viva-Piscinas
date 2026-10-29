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
  themeColor: "#080a0e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://geovanemartins.adv.br"),
  title:
    "Advocacia Dr. Geovane Martins | Atendimento Jurídico Especializado · 5,0 ★ (26 avaliações no Google) · Cláudio - MG",
  description:
    "Advocacia Dr. Geovane Martins — Serviços jurídicos com excelência técnica, ética e humanidade em Cláudio - MG e online para todo o Brasil. Atuação em Direito Civil, Família & Sucessões, Direito do Consumidor e Previdenciário. Sede na Praça dos Ex-Combatentes, 33 - salas 2 e 3 - Cláudio, MG, 35530-000. Nota máxima 5,0 no Google com 26 avaliações. WhatsApp: (37) 99114-3595.",
  keywords: [
    "Advocacia Dr. Geovane Martins",
    "Dr. Geovane Martins Advogado",
    "Geovane Martins Advocacia Cláudio MG",
    "Advogado em Cláudio MG",
    "Advocacia Cláudio Minas Gerais",
    "Direito de Família Cláudio MG",
    "Divórcio Cláudio MG",
    "Pensão Alimentícia Cláudio MG",
    "Inventário em Cartório Cláudio MG",
    "Direito do Consumidor Cláudio",
    "Advogado Cível Cláudio MG",
    "Advogado Previdenciário Cláudio",
    "Consultoria Jurídica Cláudio",
    "Melhor Advogado Cláudio MG",
    "Advocacia online Minas Gerais",
    "Dr Geovane Martins",
    "OAB MG Cláudio",
  ],
  authors: [{ name: "Advocacia Dr. Geovane Martins" }],
  creator: "Dr. Geovane Martins",
  publisher: "Advocacia Dr. Geovane Martins",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=gm1", sizes: "any" },
      { url: "/icon-32x32.png?v=gm1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=gm1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=gm1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=gm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=gm1",
    apple: [{ url: "/apple-icon.png?v=gm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://geovanemartins.adv.br",
    title:
      "Advocacia Dr. Geovane Martins | 5,0 ★ (26 avaliações no Google)",
    description:
      "Advocacia dedicada, ética inquestionável e atendimento humanizado em Cláudio - MG e em todo o Brasil. WhatsApp: (37) 99114-3595.",
    siteName: "Advocacia Dr. Geovane Martins",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 648,
        alt: "Advocacia Dr. Geovane Martins",
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
    name: "Advocacia Dr. Geovane Martins",
    alternateName: "Dr. Geovane Martins — Advocacia",
    telephone: "+55-37-99114-3595",
    email: "geovanemartinsadv@gmail.com",
    url: "https://geovanemartins.adv.br",
    image: "https://geovanemartins.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça dos Ex-Combatentes, 33 - salas 2 e 3",
      addressLocality: "Cláudio",
      addressRegion: "MG",
      postalCode: "35530-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "26",
    },
    areaServed: [
      "Cláudio",
      "Divinópolis",
      "Carmo do Cajuru",
      "Itapecerica",
      "Oliveira",
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
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5537991143595",
      "https://www.instagram.com/geovanemartinsadv/",
      "https://www.google.com/search?q=Geovane+Martins+%E2%80%94+Advocacia%0ACl%C3%A1udio+%C2%B7+MG",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=gm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=gm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=gm1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=gm1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=gm1" />
        <link rel="shortcut icon" href="/favicon.ico?v=gm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=gm1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#151922] selection:text-[#f3d893] bg-[#faf8f3] text-[#0f131a]">
        {children}
      </body>
    </html>
  );
}
