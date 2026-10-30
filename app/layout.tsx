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
  themeColor: "#0a0908",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://marianaleao.adv.br"),
  title:
    "Mariana Leão Advocacia — Dra. Mariana Leão | Criminal, Cível, Trabalhista & Previdenciário · 5,0 ★ (13 avaliações no Google) · Oliveira - MG",
  description:
    "Dra. Mariana Leão — Mariana Leão Advocacia. Atuação jurídica de alta performance, ética irrestrita e combate estratégico em Direito Criminal, Cível, Trabalhista e Previdenciário. Atendimento presencial em Oliveira - MG (R. Chagas Sobrinho, 72 - Centro) e on-line para todo o Brasil. Nota máxima 5,0 no Google com 13 avaliações. WhatsApp: (37) 99955-1587.",
  keywords: [
    "Mariana Leão Advocacia",
    "Dra. Mariana Leão",
    "Mariana Leão Advogada",
    "Advogado em Oliveira MG",
    "Advogada em Oliveira Minas Gerais",
    "Advocacia Oliveira MG",
    "Advogado Criminalista Oliveira MG",
    "Defesa Criminal Oliveira MG",
    "Flagrante e Audiência de Custódia Oliveira",
    "Advogado Cível Oliveira MG",
    "Ações Cíveis e Família Oliveira",
    "Advogado Trabalhista Oliveira MG",
    "Direito do Trabalho Oliveira",
    "Advogada Previdenciária Oliveira MG",
    "Aposentadoria e INSS Oliveira MG",
    "Rua Chagas Sobrinho 72 Centro Oliveira",
    "Melhor Advogado Oliveira MG",
    "Consultoria Jurídica Oliveira Minas Gerais",
  ],
  authors: [{ name: "Dra. Mariana Leão — Mariana Leão Advocacia" }],
  creator: "Dra. Mariana Leão",
  publisher: "Mariana Leão Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=ml2", sizes: "any" },
      { url: "/icon-32x32.png?v=ml2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=ml2", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=ml2", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=ml2", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=ml2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=ml2",
    apple: [{ url: "/apple-icon.png?v=ml2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marianaleao.adv.br",
    title:
      "Mariana Leão Advocacia — Dra. Mariana Leão | 5,0 ★ (13 avaliações no Google)",
    description:
      "Atuação jurídica combativa e estratégica em Direito Criminal, Cível, Trabalhista e Previdenciário. Oliveira - MG e on-line em todo o país. WhatsApp: (37) 99955-1587.",
    siteName: "Mariana Leão Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Mariana Leão Advocacia",
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
    name: "Mariana Leão Advocacia",
    alternateName: "Dra. Mariana Leão",
    telephone: "+55-37-99955-1587",
    email: "contato@marianaleao.adv.br",
    url: "https://marianaleao.adv.br",
    image: "https://marianaleao.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Chagas Sobrinho, 72 - Centro",
      addressLocality: "Oliveira",
      addressRegion: "MG",
      postalCode: "35540-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
    },
    areaServed: [
      "Oliveira",
      "Campo Belo",
      "Santo Antônio do Amparo",
      "Carmópolis de Minas",
      "Cláudio",
      "Passa Tempo",
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
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://wa.me/5537999551587",
      "https://www.instagram.com/marianaleaoadv/",
      "https://www.google.com/search?q=Mariana+Le%C3%A3o+Advocacia%0AOliveira+%C2%B7+MG",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=ml2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=ml2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=ml2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=ml2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png?v=ml2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=ml2" />
        <link rel="shortcut icon" href="/favicon.ico?v=ml2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=ml2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#1a1612] selection:text-[#fcecb1] bg-[#fdfbf7] text-[#14110d]">
        {children}
      </body>
    </html>
  );
}
