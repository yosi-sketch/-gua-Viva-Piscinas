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
  themeColor: "#161110",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicadrakamilla.com.br"),
  title:
    "Clínica Dra. Kamilla — Dermatologia, Laser & Estética Médica Avançada | CRM-MG 57814 · 5,0 ★ (611 avaliações no Google) · Mateus Leme e Itaúna - MG",
  description:
    "Clínica Dra. Kamilla (CRM-MG 57814) — Referência em dermatologia, procedimentos a laser de alta performance, injetáveis e rejuvenescimento natural. Atendimento acolhedor no Centro de Mateus Leme - MG (R. Pres. Tancredo Neves, 294) e Itaúna. Mais de 610 avaliações 5 estrelas no Google. WhatsApp: (31) 99717-2916.",
  keywords: [
    "Clínica Dra. Kamilla",
    "Dra. Kamilla",
    "Dra Kamilla Mateus Leme",
    "Dra Kamilla Itaúna",
    "CRM MG 57814",
    "Dermatologista Mateus Leme",
    "Dermatologia Estética Mateus Leme",
    "Clínica de Estética Médica Mateus Leme",
    "Tratamento a Laser Mateus Leme",
    "Laser Dermatológico Mateus Leme",
    "Botox Mateus Leme",
    "Bioestimulador de Colágeno Mateus Leme",
    "Harmonização Facial Natural",
    "Melasma e Manchas Tratamento",
    "R. Pres. Tancredo Neves 294 Mateus Leme",
    "Melhor Clínica de Estética Mateus Leme MG",
  ],
  authors: [{ name: "Clínica Dra. Kamilla" }],
  creator: "Clínica Dra. Kamilla",
  publisher: "Clínica Dra. Kamilla",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=kamilla2", sizes: "any" },
      { url: "/icon-32x32.png?v=kamilla2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=kamilla2", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=kamilla2", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=kamilla2", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=kamilla2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=kamilla2",
    apple: [{ url: "/apple-icon.png?v=kamilla2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://clinicadrakamilla.com.br",
    title:
      "Clínica Dra. Kamilla — Dermatologia, Laser & Estética Médica | 5,0 ★ (611 avaliações no Google)",
    description:
      "Tecnologias a laser de ponta, estética médica avançada e cuidados dermatológicos com naturalidade e acolhimento humano. Mateus Leme e Itaúna - MG. WhatsApp: (31) 99717-2916.",
    siteName: "Clínica Dra. Kamilla",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 344,
        alt: "Clínica Dra. Kamilla — Dermatologia, Laser & Estética Médica Avançada",
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
    "@type": "MedicalClinic",
    name: "Clínica Dra. Kamilla",
    alternateName: "Dra. Kamilla Medicina & Estética",
    medicalSpecialty: ["Dermatology", "Aesthetic Medicine"],
    telephone: "+55-31-99717-2916",
    url: "https://clinicadrakamilla.com.br",
    image: "https://clinicadrakamilla.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Pres. Tancredo Neves, 294 - Centro",
      addressLocality: "Mateus Leme",
      addressRegion: "MG",
      postalCode: "35670-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "611",
    },
    areaServed: [
      "Mateus Leme",
      "Itaúna",
      "Juatuba",
      "Betim",
      "Pará de Minas",
      "Florestal",
      "Igarapé",
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
      "https://www.instagram.com/clinicadrakamilla/",
      "https://beacons.page/drakamilla",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#2a2220] selection:text-[#faece4]">
        {children}
      </body>
    </html>
  );
}
