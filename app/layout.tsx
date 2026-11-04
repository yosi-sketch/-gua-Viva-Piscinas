import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Montserrat({
  variable: "--font-heading",
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
  themeColor: "#0077b6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aguavivapiscinas.com.br"),
  title:
    "Água Viva Piscinas — Tudo para Piscinas e Aquecedores em BH | Mais de 62 Avaliações no Google",
  description:
    "Tudo para sua piscina e aquecimento em um só lugar em Belo Horizonte. Piscinas de fibra, vinil e azulejo, aquecedores solares e elétricos, filtros, bombas, produtos químicos HTH e Genco, e assistência técnica. Av. Portugal, 1879 - Santa Amélia. WhatsApp: (31) 98988-7599.",
  keywords: [
    "Água Viva Piscinas",
    "Água Viva Aquecedores e Piscinas",
    "Piscinas Belo Horizonte",
    "Piscinas Santa Amélia BH",
    "Piscinas Pampulha BH",
    "Loja de piscinas Av Portugal BH",
    "Aquecedores de piscina BH",
    "Aquecedor solar piscina BH",
    "Trocador de calor BH",
    "Piscinas de fibra Belo Horizonte",
    "Piscinas de vinil BH",
    "Piscinas de azulejo",
    "Produtos químicos piscina BH",
    "Cloro HTH BH",
    "Cloro Genco BH",
    "Filtros e bombas para piscina BH",
    "Manutenção de piscinas BH",
    "Saunas e Spas Belo Horizonte",
    "Diagnóstico de água piscina WhatsApp",
  ],
  authors: [{ name: "Água Viva Piscinas — Belo Horizonte - MG" }],
  creator: "Água Viva Piscinas",
  publisher: "Água Viva Piscinas",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=av1", sizes: "any" },
      { url: "/icon-32x32.png?v=av1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=av1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=av1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=av1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=av1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=av1",
    apple: [{ url: "/apple-icon.png?v=av1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aguavivapiscinas.com.br",
    title:
      "Água Viva Piscinas — Tudo para Piscinas e Aquecedores em BH",
    description:
      "Piscinas de fibra, vinil e azulejo, aquecedores, filtros, bombas, químicos (HTH e Genco) e assistência técnica especializada em Belo Horizonte. WhatsApp: (31) 98988-7599.",
    siteName: "Água Viva Piscinas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Água Viva Piscinas — Belo Horizonte - MG",
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
    "@type": "HomeGoodsStore",
    name: "Água Viva Piscinas",
    alternateName: "Água Viva Aquecedores e Piscinas",
    description:
      "Loja completa e fornecedor especializado em piscinas, aquecedores solares e elétricos, filtros, bombas, saunas, spas, produtos químicos e manutenção de piscinas em Belo Horizonte - MG.",
    telephone: "+553134917955",
    url: "https://aguavivapiscinas.com.br",
    image: "https://aguavivapiscinas.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Portugal, 1879",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31555-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      reviewCount: "62",
    },
    areaServed: [
      "Belo Horizonte",
      "Santa Amélia",
      "Pampulha",
      "Venda Nova",
      "Lagoa Santa",
      "Vespasiano",
      "Contagem",
      "Betim",
      "Nova Lima",
      "Grande BH",
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
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/aguavivapiscinasbh/",
      "https://wa.me/5531989887599",
      "https://contate.me/aguaviva-piscinas",
    ],
  };

  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#0096c7] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
