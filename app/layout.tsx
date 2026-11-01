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
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tomosid.com.br"),
  title:
    "TOMOSID — Dr. Frederico Cambraia | Centro de Diagnóstico por Imagem · Campo Belo - MG (4,2 ★ · 124 avaliações)",
  description:
    "Centro de diagnóstico médico por imagem em Campo Belo - MG. Tomografia Computadorizada, Ressonância Magnética, Ultrassonografia, Mapeamento de Endometriose, HyCoSy, Ecofetal, Biópsias, Mamografia Digital, Raio-X e Densitometria Óssea. Responsável Técnico: Dr. Frederico Cambraia (CRM-MG 34752 / RQE 10424). R. Dom Pedro II, 337 - Centro. WhatsApp: (35) 99976-0750.",
  keywords: [
    "TOMOSID",
    "Tomosid Campo Belo",
    "Dr Frederico Cambraia",
    "Frederico Cambraia Radiologista",
    "Diagnóstico por imagem Campo Belo",
    "Tomografia Campo Belo",
    "Ressonância magnética Campo Belo",
    "Ultrassom Campo Belo",
    "Ultrassonografia Campo Belo",
    "Endometriose Campo Belo",
    "HyCoSy Campo Belo",
    "Ecofetal Campo Belo",
    "Biópsia de mama Campo Belo",
    "Mamografia Campo Belo",
    "Densitometria óssea Campo Belo",
    "Raio X Campo Belo",
    "Clínica de imagem Sul de Minas",
    "Rua Dom Pedro II 337 Campo Belo",
  ],
  authors: [{ name: "TOMOSID — Diagnóstico por Imagem · Dr. Frederico Cambraia" }],
  creator: "TOMOSID",
  publisher: "TOMOSID — Dr. Frederico Cambraia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=tomo2", sizes: "any" },
      { url: "/icon-32x32.png?v=tomo2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=tomo2", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=tomo2", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=tomo2", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=tomo2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=tomo2",
    apple: [{ url: "/apple-icon.png?v=tomo2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tomosid.com.br",
    title:
      "TOMOSID — Dr. Frederico Cambraia | Diagnóstico por Imagem · 4,2 ★ no Google",
    description:
      "Centro de excelência em diagnóstico por imagem em Campo Belo e região. Tomografia, Ressonância, Ultrassom, Endometriose, HyCoSy, Ecofetal, Biópsias e Mamografia Digital. WhatsApp: (35) 99976-0750.",
    siteName: "TOMOSID — Dr. Frederico Cambraia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TOMOSID — Dr. Frederico Cambraia · Centro de Diagnóstico por Imagem em Campo Belo - MG",
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
    "@type": "DiagnosticLab",
    name: "TOMOSID — Dr. Frederico Cambraia",
    alternateName: "Tomosid Diagnóstico por Imagem",
    description:
      "Centro de diagnóstico por imagem de alta complexidade em Campo Belo - MG. Tomografia Computadorizada, Ressonância Magnética, Ultrassonografia, Mapeamento de Endometriose, HyCoSy, Ecofetal, Biópsias, Mamografia Digital e Densitometria Óssea.",
    medicalSpecialty: [
      "Radiology",
      "DiagnosticImaging",
      "ObstetricsGynecology",
      "Cardiology",
    ],
    telephone: "+55-35-99976-0750",
    url: "https://tomosid.com.br",
    image: "https://tomosid.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Dom Pedro II, 337 - Centro",
      addressLocality: "Campo Belo",
      addressRegion: "MG",
      postalCode: "37270-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      reviewCount: "124",
    },
    physician: {
      "@type": "Physician",
      name: "Dr. Frederico Cambraia",
      medicalSpecialty: "Radiologist",
      identifier: "CRM-MG 34752 / RQE 10424",
    },
    areaServed: [
      "Campo Belo",
      "Candeias",
      "Cristais",
      "Aguanil",
      "Perdões",
      "Santana do Jacaré",
      "Cana Verde",
      "Sul de Minas Gerais",
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
      "https://www.instagram.com/tomosidoficial",
      "https://linktr.ee/drfredericocambraia",
      "https://wa.me/5535999760750",
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
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#dc2626] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
