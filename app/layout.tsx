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
  themeColor: "#066e69",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicavivalia.com.br"),
  title:
    "Clínica Vivália — Centro Médico em Juatuba - MG | 5,0 ★ no Google (71 avaliações)",
  description:
    "Centro médico humanizado e ético no coração de Juatuba - MG. Consultas médicas especializadas, exames diagnósticos, atendimento acolhedor para você e sua família. Dr. Alessandro Galvão, Dr. Elissander e equipe de especialistas. Av. Tânus Saliba, 71A - Centro. WhatsApp: (31) 99662-2315.",
  keywords: [
    "Clínica Vivália",
    "Vivália Clínica Médica",
    "Clínica Vivália Juatuba",
    "Centro médico Juatuba",
    "Médico em Juatuba",
    "Dr Alessandro Galvão",
    "Dr Elissander Juatuba",
    "Consultas médicas Juatuba MG",
    "Pediatra em Juatuba",
    "Cardiologista em Juatuba",
    "Clínica geral Juatuba",
    "Ginecologista Juatuba",
    "Exames em Juatuba",
    "Avenida Tanus Saliba 71A",
    "Clínica médica Betim Mateus Leme Juatuba",
    "Atendimento médico humanizado",
  ],
  authors: [{ name: "Clínica Vivália — Centro Médico · Juatuba - MG" }],
  creator: "Clínica Vivália",
  publisher: "Clínica Vivália",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=viv2", sizes: "any" },
      { url: "/icon-32x32.png?v=viv2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=viv2", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=viv2", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=viv2", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=viv2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=viv2",
    apple: [{ url: "/apple-icon.png?v=viv2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://clinicavivalia.com.br",
    title:
      "Clínica Vivália — Centro Médico em Juatuba - MG | 5,0 ★ no Google",
    description:
      "Acolhimento humanizado e ético no coração de Juatuba. Consultas médicas, exames e cuidado para toda a sua família. WhatsApp: (31) 99662-2315.",
    siteName: "Clínica Vivália",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Vivália — Centro Médico em Juatuba - MG",
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
    name: "Clínica Vivália",
    alternateName: "Vivália Clínica Médica",
    description:
      "Centro médico com acolhimento humanizado e ético no coração de Juatuba - MG. Consultas em diversas especialidades médicas, pediatria, clínica geral, exames e acompanhamento contínuo da saúde de toda a família.",
    medicalSpecialty: [
      "PrimaryCare",
      "Pediatrics",
      "Cardiology",
      "Gynecology",
      "Orthopedics",
      "Dermatology",
      "GeneralPractice",
    ],
    telephone: "+55-31-99662-2315",
    url: "https://clinicavivalia.com.br",
    image: "https://clinicavivalia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Tânus Saliba, 71A - Centro",
      addressLocality: "Juatuba",
      addressRegion: "MG",
      postalCode: "35675-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "71",
    },
    physician: [
      {
        "@type": "Physician",
        name: "Dr. Elissander Saliba Santos",
        medicalSpecialty: ["Cardiology", "GeneralPractice"],
        identifier: "CRM-MG 69828",
      },
      {
        "@type": "Physician",
        name: "Dr. Alessandro Galvão",
        medicalSpecialty: "GeneralPractice",
      },
      {
        "@type": "Physician",
        name: "Dra. Nicole Pardini",
        medicalSpecialty: "Otolaryngology",
      },
    ],
    areaServed: [
      "Juatuba",
      "Betim",
      "Mateus Leme",
      "Igarapé",
      "Florestal",
      "Itaúna",
      "Região Metropolitana de Belo Horizonte",
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
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/clinicavivalia",
      "https://linktr.ee/clinicavivalia",
      "https://wa.me/5531996622315",
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
      <body className="min-h-screen bg-[#f8faf9] text-[#0d1e1c] antialiased selection:bg-[#066e69] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
