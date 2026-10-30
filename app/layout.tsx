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
  themeColor: "#0a0704",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nayaramedina.adv.br"),
  title:
    "Dra. Nayara Medina — Advogada Previdenciária | Aposentadorias, BPC/LOAS & INSS · 5,0 ★ (25 avaliações no Google) · Pitangui - MG",
  description:
    "Dra. Nayara Medina — Advogada Previdenciarista (OAB/MG 184.540). Atendimento especializado e humanizado em Planejamento Previdenciário, Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões do INSS em Pitangui - MG e online para todo o Brasil. R. Maria Tangara, 20, Pitangui - MG. Nota máxima 5,0 no Google com 25 avaliações. WhatsApp: (37) 99835-1816.",
  keywords: [
    "Dra. Nayara Medina",
    "Nayara Medina Advogada",
    "Advogada Previdenciária Pitangui MG",
    "Advogado Previdenciário em Pitangui MG",
    "Advocacia Previdenciária Pitangui Minas Gerais",
    "Aposentadoria Pitangui MG",
    "BPC LOAS Pitangui MG",
    "Planejamento Previdenciário Pitangui",
    "Auxílio Doença INSS Pitangui",
    "Pensão por Morte Pitangui MG",
    "Aposentadoria Especial Insalubridade",
    "Benefício Negado pelo INSS",
    "Revisão de Benefício INSS",
    "Dra Nayara Medina OAB/MG 184.540",
    "Melhor Advogada Previdenciária Pitangui",
    "Advocacia Previdenciária Online Minas Gerais",
    "Comissão Previdenciária OAB Pitangui",
  ],
  authors: [{ name: "Dra. Nayara Medina — Advogada Previdenciária" }],
  creator: "Dra. Nayara Medina",
  publisher: "Dra. Nayara Medina — Advogada Previdenciária",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=nm1", sizes: "any" },
      { url: "/icon-32x32.png?v=nm1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=nm1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=nm1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=nm1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=nm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=nm1",
    apple: [{ url: "/apple-icon.png?v=nm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nayaramedina.adv.br",
    title:
      "Dra. Nayara Medina — Advogada Previdenciária | 5,0 ★ (25 avaliações no Google)",
    description:
      "Garanta seu benefício do INSS com acolhimento, agilidade e excelência técnica. Pitangui - MG e online para todo o Brasil. WhatsApp: (37) 99835-1816.",
    siteName: "Dra. Nayara Medina — Advogada Previdenciária",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Dra. Nayara Medina — Advogada Previdenciária",
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
    name: "Dra. Nayara Medina — Advogada Previdenciária",
    alternateName: "Nayara Medina Advocacia",
    telephone: "+55-37-99835-1816",
    email: "contato@nayaramedina.adv.br",
    url: "https://nayaramedina.adv.br",
    image: "https://nayaramedina.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Maria Tangara, 20",
      addressLocality: "Pitangui",
      addressRegion: "MG",
      postalCode: "35650-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25",
    },
    areaServed: [
      "Pitangui",
      "Martinho Campos",
      "Conceição do Pará",
      "Nova Serrana",
      "Pará de Minas",
      "Divinópolis",
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
        opens: "08:30",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://wa.me/5537998351816",
      "https://www.instagram.com/nayaramedina.adv",
      "https://www.google.com/search?q=Nayara+Medina+%E2%80%94+Advogada+Previdenci%C3%A1ria%0APitangui+%C2%B7+MG",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=nm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=nm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=nm1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=nm1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png?v=nm1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=nm1" />
        <link rel="shortcut icon" href="/favicon.ico?v=nm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=nm1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#1a140e] selection:text-[#f7dfb8] bg-[#fdfbf7] text-[#140f0b]">
        {children}
      </body>
    </html>
  );
}
