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
  themeColor: "#001344",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drfrankeduardo.com.br"),
  title:
    "Dr. Frank Eduardo — Odontologia Avançada | Cirurgião Dentista · 5,0 ★ (256 avaliações no Google) · Igarapé - MG",
  description:
    "Dr. Frank Eduardo — Odontologia Avançada em Igarapé - MG. Cirurgião Dentista especialista em reabilitação oral, implantes dentários, lentes de contato, próteses e cirurgias com atendimento humanizado, sem trauma e mão leve. Mais de 256 avaliações 5 estrelas no Google. Av. Gov. Valadares, 440 - Sala 202. WhatsApp: (31) 99767-0022.",
  keywords: [
    "Dr. Frank Eduardo",
    "Dentista Igarapé",
    "Dentista em Igarapé MG",
    "Dr Frank Eduardo Igarapé",
    "Odontologia Avançada Igarapé",
    "Cirurgião Dentista Igarapé",
    "Implantes Dentários Igarapé",
    "Próteses Dentárias Igarapé",
    "Reabilitação Oral Igarapé",
    "Lentes de Contato Dental Igarapé",
    "Facetas de Resina Igarapé",
    "Clareamento Dental Igarapé",
    "Cirurgia de Siso Igarapé",
    "Dentista com Mão Leve Igarapé",
    "Tratamento de Canal Igarapé",
    "Dentista Betim",
    "Dentista Contagem",
    "Av Gov Valadares 440 Igarapé",
    "Melhor Dentista Igarapé MG",
  ],
  authors: [{ name: "Dr. Frank Eduardo — Odontologia Avançada" }],
  creator: "Dr. Frank Eduardo",
  publisher: "Dr. Frank Eduardo — Odontologia Avançada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=frank1", sizes: "any" },
      { url: "/icon-32x32.png?v=frank1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=frank1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=frank1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=frank1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=frank1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=frank1",
    apple: [{ url: "/apple-icon.png?v=frank1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://drfrankeduardo.com.br",
    title:
      "Dr. Frank Eduardo — Odontologia Avançada | 5,0 ★ (256 avaliações no Google)",
    description:
      "Tecnologia de ponta, precisão cirúrgica e atendimento odontológico humanizado em Igarapé - MG. Reabilitação oral, implantes, próteses e estética com total conforto. WhatsApp: (31) 99767-0022.",
    siteName: "Dr. Frank Eduardo — Odontologia Avançada",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 372,
        alt: "Dr. Frank Eduardo — Odontologia Avançada",
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
    "@type": "Dentist",
    name: "Dr. Frank Eduardo — Odontologia Avançada",
    alternateName: "Dr. Frank Eduardo Dentista Igarapé",
    medicalSpecialty: [
      "Dentistry",
      "OralSurgery",
      "Periodontics",
      "Prosthodontics",
      "Endodontics",
    ],
    telephone: "+55-31-99767-0022",
    url: "https://drfrankeduardo.com.br",
    image: "https://drfrankeduardo.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Gov. Valadares, 440 - 3º Andar - Sala 202 - Centro",
      addressLocality: "Igarapé",
      addressRegion: "MG",
      postalCode: "32900-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "256",
    },
    areaServed: [
      "Igarapé",
      "Betim",
      "Contagem",
      "São Joaquim de Bicas",
      "Brumadinho",
      "Minas Gerais",
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
      "https://www.instagram.com/dr.frankeduardo/",
      "https://wa.me/5531997670022",
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
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#001a60] selection:text-[#fff3c4]">
        {children}
      </body>
    </html>
  );
}
