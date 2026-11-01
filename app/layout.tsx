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
  themeColor: "#026c63",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicasaocamilons.com.br"),
  title:
    "Clínica São Camilo — Consultas, Especialidades, Medicina do Trabalho e Vacinas | 4,8 ★ (203 avaliações) · Nova Serrana - MG",
  description:
    "Clínica São Camilo em Nova Serrana - MG. Consultas médicas com especialistas (Pediatria, Cardiologia, Pneumologia, Psiquiatria, Urologia, Angiologia, Otorrino e Nutrição), Medicina do Trabalho completa com ASO rápido, Vacina da Gripe, Teste da Orelhinha e Audiometria. Avaliação 4,8 ★ no Google (203 avaliações). R. Antônio Ferreira do Amaral, 136 - Centro. Telefone / WhatsApp: (37) 3226-2910.",
  keywords: [
    "Clínica São Camilo",
    "Clínica São Camilo Nova Serrana",
    "Médico em Nova Serrana",
    "Clínica médica Nova Serrana",
    "Pediatra Nova Serrana",
    "Pediatria Nova Serrana",
    "Medicina do Trabalho Nova Serrana",
    "ASO Nova Serrana",
    "Exame Admissional Nova Serrana",
    "Exame Demissional Nova Serrana",
    "Vacinas Nova Serrana",
    "Vacina da Gripe Nova Serrana",
    "Teste da Orelhinha Nova Serrana",
    "Cardiologista Nova Serrana",
    "Audiometria Nova Serrana",
    "Angiologia Nova Serrana",
    "Nutricionista Nova Serrana",
    "Otorrino Nova Serrana",
    "Pneumologista Nova Serrana",
    "Psiquiatra Nova Serrana",
    "Urologista Nova Serrana",
    "Rua Antônio Ferreira do Amaral 136",
    "Melhor clínica Nova Serrana MG",
  ],
  authors: [{ name: "Clínica São Camilo — Medicina & Saúde" }],
  creator: "Clínica São Camilo",
  publisher: "Clínica São Camilo — Nova Serrana",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=camilo1", sizes: "any" },
      { url: "/icon-32x32.png?v=camilo1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=camilo1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=camilo1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=camilo1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=camilo1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=camilo1",
    apple: [{ url: "/apple-icon.png?v=camilo1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://clinicasaocamilons.com.br",
    title:
      "Clínica São Camilo — Consultas, Especialidades & Medicina do Trabalho | 4,8 ★ no Google",
    description:
      "Atendimento médico humanizado, pediatria, saúde ocupacional, vacinas e exames no Centro de Nova Serrana - MG. WhatsApp: (37) 3226-2910.",
    siteName: "Clínica São Camilo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica São Camilo — Medicina e Saúde em Nova Serrana - MG",
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
    name: "Clínica São Camilo",
    alternateName: "Clínica São Camilo Nova Serrana",
    medicalSpecialty: [
      "Pediatrics",
      "OccupationalMedicine",
      "Cardiology",
      "Pulmonary",
      "Psychiatry",
      "Urology",
      "Otolaryngology",
      "DietNutrition",
    ],
    telephone: "+55-37-3226-2910",
    url: "https://clinicasaocamilons.com.br",
    image: "https://clinicasaocamilons.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Antônio Ferreira do Amaral, 136 - Centro",
      addressLocality: "Nova Serrana",
      addressRegion: "MG",
      postalCode: "35519-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "203",
    },
    areaServed: [
      "Nova Serrana",
      "Perdigão",
      "Araújos",
      "Pitangui",
      "Leandro Ferreira",
      "Conceição do Pará",
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
      "https://www.instagram.com/clinicasaocamilons/",
      "https://linktr.ee/clinicasaocamilons",
      "https://wa.me/553732262910",
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
      <body className="min-h-screen bg-[#f4fbf9] text-[#0a211e] antialiased selection:bg-[#026c63] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
