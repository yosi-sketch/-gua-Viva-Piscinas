"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Heart,
  Baby,
  Briefcase,
  Syringe,
  Activity,
  Calendar,
  Users,
  Building2,
  Stethoscope,
  Smile,
  Eye,
  FileText,
  BadgeCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Official Clinic Information — Clínica São Camilo (Nova Serrana - MG)
const CLINIC_NAME = "Clínica São Camilo";
const BRAND_LABEL = "Clínica São Camilo — Medicina, Especialidades & Saúde Ocupacional";
const WHATSAPP_NUMBER = "553732262910";
const PHONE_DISPLAY = "(37) 3226-2910";
const EMAIL_CONTACT = "contato@clinicasaocamilons.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/clinicasaocamilons/";
const INSTAGRAM_HANDLE = "@clinicasaocamilons";
const LINKTREE_URL = "https://linktr.ee/clinicasaocamilons";

const ADDRESS_STREET = "R. Antônio Ferreira do Amaral, 136";
const ADDRESS_NEIGHBORHOOD = "Centro";
const ADDRESS_CITY = "Nova Serrana - MG";
const ADDRESS_CEP = "35519-000";
const ADDRESS_DISPLAY = "R. Antônio Ferreira do Amaral, 136 - Centro, Nova Serrana - MG, 35519-000";
const CITIES_SERVED = "Nova Serrana, Perdigão, Araújos, Pitangui, Conceição do Pará e Região";

const GOOGLE_RATING = "4,8";
const GOOGLE_REVIEW_COUNT = "203";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Cl%C3%ADnica+S%C3%A3o+Camilo%0ANova+Serrana+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Ant%C3%B4nio+Ferreira+do+Amaral%2C+136+-+Centro%2C+Nova+Serrana+-+MG%2C+35519-000";

// Official assets
const LOGO_SRC = "/logo.png";
const BANNER_SRC = "/banner-especialidades.png";
const FOTO_ATENDIMENTO_SRC = "/clinica-atendimento.jpg";
const FOTO_ESTRUTURA_SRC = "/clinica-estrutura.jpg";

function getWhatsAppUrl(message?: string, number: string = WHATSAPP_NUMBER) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta na Clínica São Camilo em Nova Serrana.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Especialidades e Serviços Médicos Oficiais
interface Specialty {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  tag: string;
  fullDesc: string;
  indications: string[];
  benefits: string[];
  recovery: string;
  faq: { q: string; a: string };
}

const SPECIALTIES: Specialty[] = [
  {
    id: "pediatria",
    title: "Pediatria & Puericultura",
    badge: "Destaque",
    shortDesc:
      "Acompanhamento atencioso do crescimento, desenvolvimento, saúde e vacinação do seu bebê e criança.",
    tag: "Infantil & Família",
    fullDesc:
      "A Pediatria da Clínica São Camilo é dedicada a cuidar com carinho, paciência e rigor científico de cada fase da infância. Desde as primeiras consultas de puericultura do recém-nascido, aleitamento materno e introdução alimentar, até o manejo de doenças sazonais, alergias e crescimento saudável.",
    indications: [
      "Consultas de rotina e acompanhamento de puericultura",
      "Avaliação de marcos de desenvolvimento e ganho de peso",
      "Orientações vacinais e prevenção de doenças infantis",
      "Febres, tosses, viroses, alergias e problemas respiratórios",
    ],
    benefits: [
      "Atendimento gentil, humanizado e focado no bem-estar da criança",
      "Orientações claras e tranquilizadoras para mães e pais",
      "Ambiente adaptado para que os pequenos se sintam confortáveis",
      "Integração direta com vacinas e Teste da Orelhinha na própria clínica",
    ],
    recovery:
      "Acompanhamento contínuo e preventivo para garantir uma infância saudável e segura.",
    faq: {
      q: "Com que frequência devo levar meu bebê ao pediatra?",
      a: "No primeiro ano de vida, as consultas são mensais até os 6 meses e depois bimestrais. Após 1 ano, ocorrem a cada 3 a 6 meses para acompanhamento preventivo regular.",
    },
  },
  {
    id: "medicina-do-trabalho",
    title: "Medicina do Trabalho & ASO",
    badge: "Empresas",
    shortDesc:
      "Gestão ocupacional completa para indústrias e empresas de Nova Serrana: ASO admissional, periódico, demissional e exames rápidos.",
    tag: "Saúde Ocupacional",
    fullDesc:
      "Nova Serrana é o principal polo calçadista de Minas Gerais, e a Clínica São Camilo é a parceira estratégica das empresas locais na preservação da saúde dos trabalhadores e cumprimento das Normas Regulamentadoras (NRs). Realizamos Atestados de Saúde Ocupacional com agilidade para o RH e exames complementares centralizados em um só endereço.",
    indications: [
      "Contratação ágil de novos colaboradores (Exame Admissional)",
      "Exames periódicos obrigatórios por função e risco",
      "Mudança de riscos operacionais e retorno pós-afastamento",
      "Homologação e demissões com emissão rápida de laudos",
    ],
    benefits: [
      "Agilidade máxima: exames clínicos e complementares no mesmo dia",
      "Sem filas excessivas: agendamento organizado para sua empresa",
      "Conformidade total com o eSocial e legislações trabalhistas",
      "Atendimento acolhedor e respeitoso para todos os colaboradores",
    ],
    recovery:
      "Laudos precisos entregues com agilidade para o departamento de Recursos Humanos.",
    faq: {
      q: "Minha empresa pode fechar parceria para exames ocupacionais?",
      a: "Sim! Oferecemos fluxo prioritário e condições especiais para indústrias, comércios e prestadores de serviços de Nova Serrana e região.",
    },
  },
  {
    id: "vacinas",
    title: "Vacinas & Imunização",
    badge: "Prevenção",
    shortDesc:
      "Vacina da Gripe (Influenza), vacinação infantil e de adultos com rigoroso controle de cadeia de frio e aplicação suave.",
    tag: "Imunização Familiar",
    fullDesc:
      "A imunização é a forma mais eficaz e segura de proteger quem você ama contra infecções virais e bacterianas. Na Clínica São Camilo, mantemos rigoroso controle de temperatura com câmaras de refrigeração médica e equipe capacitada para aplicação com técnicas humanizadas de alívio de dor.",
    indications: [
      "Campanha anual da Vacina da Gripe para toda a família",
      "Atualização do calendário vacinal de bebês e crianças",
      "Vacinas para gestantes, idosos e viajantes",
      "Imunizações ocupacionais e corporativas para colaboradores",
    ],
    benefits: [
      "Armazenamento seguro e controle térmico ininterrupto",
      "Aplicação humanizada que minimiza o medo e o desconforto",
      "Cartão de vacinas sempre atualizado com orientação profissional",
      "Disponibilidade para agendamento individual ou familiar",
    ],
    recovery:
      "Imunização rápida com orientações claras sobre cuidados e reações pós-aplicação.",
    faq: {
      q: "A Vacina da Gripe está disponível para qualquer idade?",
      a: "Sim! Disponível para bebês a partir de 6 meses, crianças, adultos, idosos e gestantes, garantindo proteção contra as principais cepas circulantes.",
    },
  },
  {
    id: "angiologia",
    title: "Angiologia & Circulação",
    badge: "Vascular",
    shortDesc:
      "Prevenção, diagnóstico e tratamento de varizes, vasinhos, sensação de inchaço, peso e dores nas pernas.",
    tag: "Circulação & Varizes",
    fullDesc:
      "A Angiologia cuida da saúde das artérias, veias e vasos linfáticos. Dores, sensação de peso ou queimação ao final do dia, vasinhos aparentes ou varizes são sinais de que o retorno venoso precisa de avaliação médica. O tratamento adequado alivia os sintomas e devolve a leveza ao caminhar.",
    indications: [
      "Varizes aparentes, vasinhos e sensação de peso nas pernas",
      "Inchaço (edema) nos tornozelos ao final do dia",
      "Câimbras noturnas, queimação e formigamento",
      "Histórico familiar de varizes ou risco de trombose venosa",
    ],
    benefits: [
      "Diagnóstico preciso do sistema circulatório",
      "Alívio duradouro do cansaço e dores nas pernas",
      "Prevenção eficaz de trombose e complicações vasculares",
      "Melhora estética e bem-estar funcional no dia a dia",
    ],
    recovery:
      "Tratamentos modernos e ambulatoriais com rápida retomada das atividades cotidianas.",
    faq: {
      q: "Varizes são apenas um incômodo estético?",
      a: "Não. As varizes são veias doentes que indicam insuficiência venosa crônica e podem causar dor crônica, inchaço e risco de complicações se não forem acompanhadas.",
    },
  },
  {
    id: "audiometria",
    title: "Audiometria & Teste da Orelhinha",
    badge: "Audiologia",
    shortDesc:
      "Triagem auditiva neonatal (Teste da Orelhinha) obrigatória para bebês e exames de audiometria clínica e ocupacional.",
    tag: "Saúde Auditiva",
    fullDesc:
      "A audição é a base para o desenvolvimento da fala, aprendizado e comunicação humana. Realizamos o Teste da Orelhinha, um exame rápido, 100% indolor e seguro para recém-nascidos, que detecta precocemente qualquer alteração auditiva. Também realizamos audiometria tonal e vocal para exames admissionais e periódicos.",
    indications: [
      "Bebês recém-nascidos (idealmente nos primeiros 30 dias de vida)",
      "Exames ocupacionais de audiometria para indústrias e fábricas",
      "Dificuldade de compreensão da fala em ambientes com ruído",
      "Sensação de ouvido tapado, zumbidos ou perda auditiva progressiva",
    ],
    benefits: [
      "Exame neonatal 100% indolor, realizado enquanto o bebê descansa",
      "Equipamentos modernos e calibrados de alta precisão",
      "Laudo imediato assinado por profissional habilitado",
      "Detecção precoce que viabiliza intervenções no tempo correto",
    ],
    recovery:
      "Exame rápido, não invasivo e com liberação imediata do paciente.",
    faq: {
      q: "O Teste da Orelhinha machuca o bebê?",
      a: "De forma alguma! Uma pequena sonda macia de silicone é colocada suavemente na orelhinha emitindo sons suaves. A maioria dos bebês dorme durante todo o exame.",
    },
  },
  {
    id: "cardiologia",
    title: "Cardiologia & Check-up",
    badge: "Coração",
    shortDesc:
      "Prevenção cardiovascular, controle de hipertensão, investigação de arritmias e avaliação de risco cirúrgico.",
    tag: "Coração & Prevenção",
    fullDesc:
      "Cuidar do coração é a decisão mais importante para uma vida longa, ativa e com tranquilidade. Na Clínica São Camilo, realizamos avaliações minuciosas para controle da pressão arterial, investigação de palpitações e emissão de laudos de risco cirúrgico.",
    indications: [
      "Pressão alta (hipertensão) ou histórico familiar precoce",
      "Palpitações, dores no peito, cansaço anormal aos esforços",
      "Avaliação de risco cirúrgico para procedimentos médicos",
      "Check-up preventivo anual a partir dos 35-40 anos",
    ],
    benefits: [
      "Monitoramento seguro e assertivo da saúde cardiovascular",
      "Prevenção primária de eventos graves",
      "Orientações clínicas integradas com estilo de vida",
      "Laudos cardiológicos ágeis e fundamentados",
    ],
    recovery:
      "Acompanhamento cardiológico regular com foco em longevidade e segurança.",
    faq: {
      q: "Quando devo procurar o cardiologista de forma preventiva?",
      a: "Homens a partir dos 40 anos e mulheres a partir dos 45 anos (ou antes, se houver histórico familiar de infarto, fumo ou diabetes) devem realizar check-up anual.",
    },
  },
  {
    id: "nutricao",
    title: "Nutrição Clínica & Esportiva",
    badge: "Nutrição",
    shortDesc:
      "Planos alimentares personalizados para emagrecimento sustentável, controle de diabetes, colesterol e nutrição infantil.",
    tag: "Reeducação Alimentar",
    fullDesc:
      "A alimentação é a fonte de vitalidade do corpo. Nosso atendimento nutricional desenvolve planos adaptados à sua rotina real, sem dietas punitivas ou restrições impossíveis de sustentar. Trabalhamos a reeducação alimentar, controle metabólico e nutrição infantil.",
    indications: [
      "Emagrecimento sustentável sem efeito sanfona",
      "Controle de glicemia, colesterol, triglicérides e esteatose",
      "Introdução alimentar infantil e combate à seletividade",
      "Ganho de disposição, melhora do sono e desempenho físico",
    ],
    benefits: [
      "Cardápio 100% individualizado para suas preferências e rotina",
      "Acompanhamento acolhedor da evolução corporal e de exames",
      "Estratégias práticas para aplicar no trabalho e em casa",
      "Mais vitalidade diária e saúde gastrointestinal",
    ],
    recovery:
      "Resultados consistentes e duradouros com acompanhamento humanizado.",
    faq: {
      q: "Vou precisar cortar tudo o que gosto na dieta?",
      a: "Não! O foco é o equilíbrio e a reeducação. Adaptamos as refeições para que sejam prazerosas, nutritivas e sustentáveis a longo prazo.",
    },
  },
  {
    id: "otorrinolaringologia",
    title: "Otorrinolaringologia (Otorrino)",
    badge: "Otorrino",
    shortDesc:
      "Diagnóstico e tratamento de rinites, sinusites, desvio de septo, rouquidão, dores de garganta e zumbido no ouvido.",
    tag: "Vias Aéreas Superiores",
    fullDesc:
      "O médico otorrinolaringologista cuida da saúde das vias aéreas superiores, equilíbrio e audição. Trata desde quadros frequentes como amigdalites de repetição, rinites alérgicas e sinusites crônicas, até labirintite, tonturas, rouquidão prolongada e ronco.",
    indications: [
      "Nariz entupido frequente, coriza crônica e rinite alérgica",
      "Dores de cabeça causadas por sinusite e congestão nasal",
      "Otites de repetição, dor ou secreção nos ouvidos",
      "Ronco noturno, alterações da voz e engasgos constantes",
    ],
    benefits: [
      "Alívio rápido de crises respiratórias e melhora no sono",
      "Investigação aprofundada de tonturas e labirintites",
      "Preservação da capacidade auditiva e da saúde vocal",
      "Tratamentos clínicos modernos e individualizados",
    ],
    recovery:
      "Recuperação do conforto respiratório e da qualidade de descanso ao dormir.",
    faq: {
      q: "Rinite alérgica tem cura?",
      a: "A rinite não possui cura definitiva, mas o acompanhamento médico adequado promove o controle completo dos sintomas por longos períodos.",
    },
  },
  {
    id: "pneumologia",
    title: "Pneumologia",
    badge: "Respiratória",
    shortDesc:
      "Cuidado especializado para asma, bronquite, DPOC, tosse crônica, falta de ar e reabilitação respiratória.",
    tag: "Pulmões & Respiração",
    fullDesc:
      "Respirar sem esforço é qualidade de vida. A Pneumologia na Clínica São Camilo é dedicada ao diagnóstico e tratamento de doenças pulmonares agudas e crônicas. Ajudamos pacientes a controlar crises de asma, cessar o tabagismo e recuperar o fôlego.",
    indications: [
      "Tosse persistente por mais de 3 semanas",
      "Falta de ar (dispneia) ao caminhar ou realizar esforços comuns",
      "Asma, bronquite crônica ou enfisema pulmonar (DPOC)",
      "Acompanhamento preventivo para fumantes e ex-fumantes",
    ],
    benefits: [
      "Controle seguro de chiados no peito e crises de falta de ar",
      "Diagnóstico funcional preciso da capacidade respiratória",
      "Prescrição correta e orientada de medicações inalatórias",
      "Mais resistência física e disposição para o dia a dia",
    ],
    recovery:
      "Plano terapêutico personalizado para que o paciente respire com leveza e segurança.",
    faq: {
      q: "O uso de bombinha para asma vicia?",
      a: "Mito. As medicações inalatórias modernas agem diretamente nos brônquios com absorção mínima pelo organismo, sendo o tratamento padrão mais seguro e recomendado mundialmente.",
    },
  },
  {
    id: "psiquiatria",
    title: "Psiquiatria & Saúde Mental",
    badge: "Saúde Mental",
    shortDesc:
      "Cuidado humanizado e confidencial para ansiedade, depressão, burnout, insônia, estresse e transtornos de humor.",
    tag: "Saúde Mental & Equilíbrio",
    fullDesc:
      "A saúde mental é o pilar de sustentação para toda a nossa vida pessoal e produtiva. Na Clínica São Camilo, as consultas psiquiátricas são pautadas pela escuta atenta, respeito absoluto e ética médica. Desmistificamos o tratamento com responsabilidade.",
    indications: [
      "Ansiedade constante, crises de pânico ou aperto no peito",
      "Tristeza profunda, desânimo prolongado e perda de interesse",
      "Insônia crônica ou noites mal dormidas com cansaço ao acordar",
      "Esgotamento emocional e profissional (Síndrome de Burnout)",
    ],
    benefits: [
      "Ambiente sigiloso, sem julgamentos e verdadeiramente acolhedor",
      "Prescrição médica consciente e explicada detalhadamente",
      "Melhora progressiva da qualidade do sono e disposição",
      "Resgate do equilíbrio emocional e das relações interpessoais",
    ],
    recovery:
      "Acompanhamento próximo com reavaliações periódicas para ajuste e redução gradual quando oportuno.",
    faq: {
      q: "Medicamentos psiquiátricos causam dependência?",
      a: "A imensa maioria dos medicamentos modernos para ansiedade e depressão não causa dependência. O tratamento é monitorado pelo médico psiquiatra com responsabilidade.",
    },
  },
  {
    id: "urologia",
    title: "Urologia & Prevenção",
    badge: "Urologia",
    shortDesc:
      "Prevenção do câncer de próstata, tratamento de cálculo renal (pedra nos rins), infecções urinárias e saúde masculina.",
    tag: "Trato Urinário & Próstata",
    fullDesc:
      "A Urologia cuida do sistema urinário de homens e mulheres e trata especificamente da saúde preventiva masculina. Com abordagem respeitosa e moderna, nossos especialistas realizam o rastreamento preventivo da próstata e tratamento de dores renais.",
    indications: [
      "Check-up preventivo da próstata (homens a partir dos 45-50 anos)",
      "Cólicas renais ou histórico de cálculo (pedra nos rins)",
      "Dificuldade, ardência ou idas frequentes ao banheiro à noite",
      "Infecções urinárias de repetição em homens ou mulheres",
    ],
    benefits: [
      "Diagnóstico precoce de alterações na próstata com alta chance de cura",
      "Alívio rápido para crises agudas de dor nos rins",
      "Atendimento médico ético, descomplicado e seguro",
      "Melhora significativa da qualidade de vida urinária e íntima",
    ],
    recovery:
      "Condutas terapêuticas modernas e preventivas para manter você saudável e confiante.",
    faq: {
      q: "Com qual idade o homem deve iniciar o acompanhamento da próstata?",
      a: "A partir dos 50 anos para homens sem histórico na família, ou a partir dos 45 anos para homens com histórico de primeiro grau.",
    },
  },
];

// Depoimentos Reais / Google Reviews da Clínica São Camilo (4,8 Estrelas no Google)
interface Testimonial {
  author: string;
  role: string;
  rating: number;
  text: string;
  source: string;
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    author: "Mariana Silva",
    role: "Mãe de paciente pediátrico · Nova Serrana",
    rating: 5,
    text: "Excelente clínica! Levo meu filho no pediatra aqui desde que ele era recém-nascido. O atendimento é sempre carinhoso, pontual e muito acolhedor. O Teste da Orelhinha quando ele nasceu foi super tranquilo, a fonoaudióloga foi um amor de pessoa.",
    source: "Avaliação 5 estrelas no Google",
    tag: "Pediatria",
  },
  {
    author: "Roberto Guimarães",
    role: "Gestor de RH · Indústria de Calçados",
    rating: 5,
    text: "Nossa empresa encaminha todos os novos funcionários para o ASO admissional e periódico na Clínica São Camilo. O retorno é extremamente rápido, sem burocracia e com exames complementares feitos no mesmo endereço.",
    source: "Avaliação 5 estrelas no Google",
    tag: "Medicina do Trabalho",
  },
  {
    author: "Camila Ferreira",
    role: "Paciente da vacinação · Nova Serrana",
    rating: 5,
    text: "Fizemos a vacina da gripe com toda a nossa família. As enfermeiras têm uma mão leve e muita paciência com crianças, meu filho de 3 anos nem chorou! Clínica super limpa e organizada.",
    source: "Avaliação 5 estrelas no Google",
    tag: "Vacinas",
  },
  {
    author: "Geraldo Alvarenga",
    role: "Paciente de Cardiologia · Centro, Nova Serrana",
    rating: 5,
    text: "Passei pela consulta com o cardiologista e fiquei muito impressionado com o cuidado e a clareza nas explicações. O médico examinou tudo com calma e me passou total segurança. Nota dez!",
    source: "Avaliação 5 estrelas no Google",
    tag: "Cardiologia",
  },
  {
    author: "Patrícia Mendes",
    role: "Moradora de Nova Serrana",
    rating: 5,
    text: "A localização é ótima, bem no centro da cidade, fácil de estacionar e achar. As recepcionistas são educadíssimas. É a clínica de confiança da nossa família.",
    source: "Avaliação 5 estrelas no Google",
    tag: "Atendimento",
  },
  {
    author: "Luciana Duarte",
    role: "Paciente de Nutrição · Nova Serrana",
    rating: 5,
    text: "O plano nutricional foi feito sob medida para a minha rotina de trabalho. Já eliminei mais de 10kg com saúde e sem passar fome. Atendimento acolhedor que motiva a gente.",
    source: "Avaliação 5 estrelas no Google",
    tag: "Nutrição",
  },
];

// Perguntas Frequentes (FAQ)
const FAQS = [
  {
    q: "Como faço para agendar uma consulta ou exame na Clínica São Camilo?",
    a: "Você pode agendar de forma rápida e prática diretamente pelo nosso WhatsApp oficial no número (37) 3226-2910 ou ligando para o mesmo número. Nossa equipe responderá prontamente com os dias e horários disponíveis.",
  },
  {
    q: "A clínica atende convênios ou somente consultas particulares?",
    a: "Atendemos na modalidade particular com valores acessíveis e facilitados, além de convênios e parcerias corporativas. Entre em contato pelo WhatsApp para confirmarmos a cobertura do seu atendimento.",
  },
  {
    q: "Como funciona o atendimento de Medicina do Trabalho para empresas?",
    a: "Oferecemos fluxo prioritário e ágil para indústrias e comércios de Nova Serrana e região. Realizamos ASO Admissional, Periódico, Demissional e Mudança de Risco, além de Audiometria e Espirometria no mesmo endereço.",
  },
  {
    q: "Quando deve ser feito o Teste da Orelhinha no bebê?",
    a: "O Teste da Orelhinha (triagem auditiva neonatal) é obrigatório e deve ser realizado preferencialmente no primeiro mês de vida do bebê. O procedimento é 100% indolor, rápido e pode ser feito enquanto o bebê dorme.",
  },
  {
    q: "Quais vacinas estão disponíveis na Clínica São Camilo?",
    a: "Disponibilizamos a Vacina da Gripe (Influenza) sazonal atualizada, vacinas do calendário infantil, gestantes, idosos e imunizações ocupacionais, com rigoroso controle térmico.",
  },
  {
    q: "Onde fica a Clínica São Camilo e qual é o horário de funcionamento?",
    a: "Estamos localizados na Rua Antônio Ferreira do Amaral, 136 - Centro, Nova Serrana - MG (CEP 35519-000). Nosso horário é de segunda a sexta-feira, a partir das 08:00.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [filterTag, setFilterTag] = useState<string>("todos");
  const [showAllSpecialties, setShowAllSpecialties] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSpecialties =
    filterTag === "todos"
      ? SPECIALTIES
      : SPECIALTIES.filter((s) =>
          filterTag === "ocupacional"
            ? s.id === "medicina-do-trabalho" || s.id === "audiometria"
            : filterTag === "infantil"
            ? s.id === "pediatria" || s.id === "vacinas" || s.id === "audiometria"
            : filterTag === "clinica"
            ? s.id !== "medicina-do-trabalho"
            : true
        );

  const displayedSpecialties = showAllSpecialties
    ? filteredSpecialties
    : filteredSpecialties.slice(0, 4);

  return (
    <div className="relative min-h-screen bg-[#f8fafb] text-slate-800 antialiased overflow-x-hidden">
      {/* Top Bar Sóbrio e Elegante */}
      <div className="bg-[#062d29] text-slate-200 text-xs py-2 px-4 border-b border-teal-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-100">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{GOOGLE_RATING} ★ ({GOOGLE_REVIEW_COUNT} avaliações no Google)</span>
            </span>
            <span className="hidden sm:inline-block text-teal-800">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              Seg. a Sex. a partir das 08:00
            </span>
            <span className="hidden md:inline-block text-teal-800">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Centro, Nova Serrana - MG
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs shrink-0">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da Clínica São Camilo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-white transition-colors"
            >
              <WhatsAppIcon size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              title="Instagram Clínica São Camilo"
            >
              <InstagramIcon size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Header Fixo com Logo Nitido e Navegação Equilibrada */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
          scrolled ? "border-slate-200 shadow-sm" : "border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
          {/* Logo da Clínica São Camilo (+10% ampliado, nítido e fixo) */}
          <a
            href="#"
            className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#0d766e] rounded-lg"
          >
            <div className="relative w-[195px] sm:w-[230px] h-12 sm:h-[53px] shrink-0">
              <Image
                src={LOGO_SRC}
                alt="Clínica São Camilo"
                fill
                sizes="230px"
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Menu Desktop Enxuto e Limpo */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#especialidades" className="nav-link">
              Especialidades
            </a>
            <a href="#medicina-trabalho" className="nav-link">
              Medicina do Trabalho
            </a>
            <a href="#vacinas" className="nav-link">
              Vacinas & Exames
            </a>
            <a href="#sobre" className="nav-link">
              Sobre Nós
            </a>
            <a href="#depoimentos" className="nav-link">
              Avaliações
            </a>
            <a href="#localizacao" className="nav-link">
              Localização
            </a>
            <a href="#duvidas" className="nav-link">
              Dúvidas
            </a>
          </nav>

          {/* CTA Header Sóbrio e Elegante */}
          <div className="hidden sm:flex items-center shrink-0">
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na Clínica São Camilo.")}
              target="_blank"
              variant="primary"
              size="sm"
              className="gap-2 shrink-0"
            >
              <WhatsAppIcon size={15} />
              <span>Agendar Consulta</span>
            </GlowingButton>
          </div>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0d766e]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg"
            >
              <div className="flex flex-col gap-2.5 text-sm font-semibold text-slate-700">
                <a
                  href="#especialidades"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0d766e]"
                >
                  Especialidades Médicas
                </a>
                <a
                  href="#medicina-trabalho"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0d766e]"
                >
                  Medicina do Trabalho (ASO)
                </a>
                <a
                  href="#vacinas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0d766e]"
                >
                  Vacinas & Teste da Orelhinha
                </a>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0d766e]"
                >
                  Sobre Nós
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0d766e]"
                >
                  Avaliações Google (4,8★)
                </a>
                <a
                  href="#localizacao"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0d766e]"
                >
                  Como Chegar & Horários
                </a>
                <a
                  href="#duvidas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-50 text-[#0d766e]"
                >
                  Perguntas Frequentes
                </a>
                <div className="pt-2">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na Clínica São Camilo.")}
                    target="_blank"
                    variant="primary"
                    size="md"
                    className="w-full gap-2 justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar pelo WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section Sóbria, Médica e Acolhedora */}
      <section className="relative overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Texto do Hero */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badge discreto */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#0d766e] text-xs font-semibold tracking-wide mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Clínica Médica Multidisciplinar em Nova Serrana - MG
              </div>

              {/* Título sem gradiente multicolorido chamativo */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-5">
                Cuidado completo, médicos especialistas e{" "}
                <span className="text-[#0d766e]">atendimento humanizado</span>{" "}
                para toda a sua família.
              </h1>

              {/* Subtítulo sóbrio */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-2xl font-normal">
                Da <strong>Pediatria</strong> à <strong>Medicina do Trabalho</strong> para empresas: consultas com médicos especialistas, <strong>Vacina da Gripe</strong>, <strong>Teste da Orelhinha</strong> e exames no mesmo local, com excelência comprovada por mais de <strong>200 avaliações 4,8 estrelas no Google</strong>.
              </p>

              {/* Botões do Hero com visual refinado */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na Clínica São Camilo em Nova Serrana.")}
                  target="_blank"
                  variant="primary"
                  size="lg"
                  className="gap-2.5"
                >
                  <WhatsAppIcon size={18} />
                  <span>Agendar Consulta via WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#especialidades"
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <span>Conhecer Especialidades</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </GlowingButton>
              </div>

              {/* Badges de Confiança Limpos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-slate-100 pt-5 text-left">
                <div>
                  <p className="font-heading font-extrabold text-xl text-[#0d766e]">
                    4,8 ★
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    203 avaliações Google
                  </p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-xl text-slate-800">
                    +11 Especialidades
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Corpo médico completo
                  </p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-xl text-[#0d766e]">
                    ASO Ágil
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Medicina do Trabalho
                  </p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-xl text-slate-800">
                    No Centro
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Nova Serrana - MG
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem do Hero Limpa e Elegante */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/50 bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={FOTO_ATENDIMENTO_SRC}
                      alt="Atendimento Médico Humanizado na Clínica São Camilo"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                        Atendimento Acolhedor
                      </p>
                      <p className="text-sm sm:text-base font-bold font-heading">
                        Cuidado e respeito com quem você mais ama
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Google Avaliações */}
                <div className="absolute -top-4 -left-4 sm:-left-5 bg-white rounded-xl p-3 shadow-lg border border-slate-200/90 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#0d766e] flex items-center justify-center font-bold text-sm">
                    4.8
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[11px] font-bold text-slate-800">
                      Excelente no Google
                    </p>
                    <p className="text-[10px] text-slate-500">
                      203 avaliações reais
                    </p>
                  </div>
                </div>

                {/* Card Medicina do Trabalho */}
                <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-[#0a2e2a] rounded-xl p-3 shadow-xl border border-teal-800/40 text-white flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-800/40 flex items-center justify-center text-emerald-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white flex items-center gap-1.5">
                      Medicina do Trabalho & ASO
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Agilidade para o RH de Nova Serrana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de Estatísticas */}
      <section className="border-b border-slate-200 bg-slate-50/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x md:divide-slate-200">
            <div className="px-3">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#0d766e]">
                4,8 ★
              </span>
              <p className="font-bold text-xs uppercase tracking-wide text-slate-700 mt-1">
                Avaliação no Google
              </p>
              <p className="text-[11px] text-slate-500">
                Mais de 200 opiniões reais
              </p>
            </div>

            <div className="px-3">
              <span className="font-heading font-black text-2xl sm:text-3xl text-slate-800">
                11+
              </span>
              <p className="font-bold text-xs uppercase tracking-wide text-slate-700 mt-1">
                Especialidades Médicas
              </p>
              <p className="text-[11px] text-slate-500">
                Da infância à terceira idade
              </p>
            </div>

            <div className="px-3">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#0d766e]">
                100%
              </span>
              <p className="font-bold text-xs uppercase tracking-wide text-slate-700 mt-1">
                Exames no Local
              </p>
              <p className="text-[11px] text-slate-500">
                Audiometria e Teste da Orelhinha
              </p>
            </div>

            <div className="px-3">
              <span className="font-heading font-black text-2xl sm:text-3xl text-slate-800">
                ASO Rápido
              </span>
              <p className="font-bold text-xs uppercase tracking-wide text-slate-700 mt-1">
                Saúde Ocupacional
              </p>
              <p className="text-[11px] text-slate-500">
                Sem filas para sua empresa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especialidades Médicas & Exames */}
      <section id="especialidades" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="eyebrow justify-center mb-2.5">
              Corpo Clínico & Especialidades
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Consultas Médicas & Exames na Clínica São Camilo
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Consulte com médicos especialistas em um ambiente moderno, acolhedor e com exames no mesmo endereço em Nova Serrana. Selecione a especialidade para ver detalhes e agendar.
            </p>

            {/* Filtros rápidos e discretos */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: "todos", label: "Todas (11)" },
                { id: "infantil", label: "Infantil & Vacinas" },
                { id: "ocupacional", label: "Medicina do Trabalho" },
                { id: "clinica", label: "Clínica & Adulto" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setFilterTag(filter.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    filterTag === filter.id
                      ? "bg-[#0d766e] text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Cards de Especialidades (4 visíveis inicialmente + botão Ver Mais) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedSpecialties.map((spec) => (
              <div
                key={spec.id}
                className="bg-white rounded-xl p-5 border border-slate-200/80 hover:border-[#0d766e]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold bg-teal-50 text-[#0d766e]">
                      {spec.badge}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      {spec.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {spec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {spec.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {spec.indications.slice(0, 2).map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSpecialty(spec)}
                    className="text-xs font-bold text-[#0d766e] hover:text-[#0f5f59] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Ver detalhes
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <GlowingButton
                    href={getWhatsAppUrl(`Olá! Gostaria de agendar uma consulta de ${spec.title} na Clínica São Camilo.`)}
                    target="_blank"
                    variant="primary"
                    size="sm"
                  >
                    <span>Agendar</span>
                  </GlowingButton>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Ver Mais / Ver Menos Especialidades */}
          {filteredSpecialties.length > 4 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllSpecialties(!showAllSpecialties)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0d766e] hover:border-[#0d766e] font-semibold text-xs uppercase tracking-wide transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <span>
                  {showAllSpecialties
                    ? "Ver menos"
                    : `Ver mais especialidades (+${filteredSpecialties.length - 4})`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    showAllSpecialties ? "rotate-180 text-[#0d766e]" : ""
                  }`}
                />
              </button>
            </div>
          )}

          {/* Banner de Destaque da Clínica com cores sóbrias */}
          <div className="mt-12 bg-[#08332e] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden border border-teal-900/60 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-teal-800/50 text-teal-200 text-xs font-semibold mb-3">
                  Atendimento Multidisciplinar
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 leading-snug">
                  Todas as especialidades e exames que sua família e empresa precisam em Nova Serrana.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Pediatria, Medicina do Trabalho, Vacinas, Angiologia, Audiometria / Teste da Orelhinha, Cardiologia, Nutrição, Otorrino, Pneumologia, Psiquiatria e Urologia.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar na Clínica São Camilo.")}
                    target="_blank"
                    variant="whatsapp"
                    size="sm"
                    className="gap-2"
                  >
                    <WhatsAppIcon size={15} />
                    <span>WhatsApp: (37) 3226-2910</span>
                  </GlowingButton>
                  <span className="text-xs text-slate-400">
                    Rua Antônio Ferreira do Amaral, 136 - Centro
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-teal-700/40 shadow bg-white p-2">
                  <Image
                    src={BANNER_SRC}
                    alt="Especialidades da Clínica São Camilo"
                    width={500}
                    height={280}
                    className="w-full h-auto rounded object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Medicina do Trabalho Corporativa */}
      <section id="medicina-trabalho" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-2.5">Saúde Ocupacional & Empresas</div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Medicina do Trabalho ágil e sem filas para indústrias e comércios de Nova Serrana.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Como polo calçadista dinâmico, Nova Serrana exige agilidade na contratação e no controle da saúde ocupacional. A Clínica São Camilo oferece estrutura completa para atender seus colaboradores, emitindo o ASO com agilidade e total conformidade com o eSocial.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {[
                  {
                    title: "ASO Admissional & Periódico",
                    desc: "Agilidade na contratação de novos colaboradores.",
                  },
                  {
                    title: "Exames no Mesmo Local",
                    desc: "Audiometria ocupacional, espirometria e ECG centralizados.",
                  },
                  {
                    title: "Demissional & Retorno",
                    desc: "Segurança jurídica e laudos precisos para a sua empresa.",
                  },
                  {
                    title: "Fluxo Sem Longas Filas",
                    desc: "Agendamento organizado para os funcionários não perderem o dia.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-[#0d766e]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Sou do setor de RH/empresa e gostaria de informações sobre Medicina do Trabalho / ASO.")}
                  target="_blank"
                  variant="primary"
                  size="md"
                  className="gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Cadastrar Empresa / Solicitar Atendimento</span>
                </GlowingButton>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={FOTO_ESTRUTURA_SRC}
                    alt="Infraestrutura da Clínica São Camilo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                      Infraestrutura Completa
                    </p>
                    <p className="font-heading text-base font-bold">
                      Recepção climatizada, consultórios modernos e atendimento pontual
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre a Clínica */}
      <section id="sobre" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src={FOTO_ATENDIMENTO_SRC}
                  alt="Corpo Clínico da Clínica São Camilo"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500">
                    Reputação no Google
                  </p>
                  <p className="font-heading font-extrabold text-sm text-[#0d766e]">
                    Nota 4,8 ★ (203 avaliações)
                  </p>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="eyebrow mb-2.5">Sobre a Clínica São Camilo</div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Tradição, acolhimento e excelência médica no coração de Nova Serrana.
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  A <strong>Clínica São Camilo</strong> nasceu com o propósito de oferecer a Nova Serrana e cidades vizinhas uma medicina resolutiva, humanizada e com acesso facilitado a especialistas de renome.
                </p>
                <p>
                  Com localização estratégica no Centro (Rua Antônio Ferreira do Amaral, 136), reunimos em um único endereço consultas médicas em mais de 11 áreas, setor exclusivo de Medicina Ocupacional para empresas, imunização e exames complementares de alta precisão como o Teste da Orelhinha e a Audiometria.
                </p>
                <p>
                  Aqui, cada paciente — do bebê que vem para suas primeiras vacinas até o trabalhador que faz seu exame periódico — é acolhido com atenção, respeito ao seu tempo e a dedicação que a sua saúde merece.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-5 border-t border-slate-100">
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-[#0d766e] mb-1">
                    Humanização
                  </h4>
                  <p className="text-xs text-slate-500">
                    Médicos que ouvem com atenção e explicam cada conduta.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-[#0d766e] mb-1">
                    Pontualidade
                  </h4>
                  <p className="text-xs text-slate-500">
                    Agendamentos organizados para respeitar o seu tempo.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-[#0d766e] mb-1">
                    Tudo no Mesmo Local
                  </h4>
                  <p className="text-xs text-slate-500">
                    Consultas, exames e vacinas sem deslocamentos desnecessários.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Diferenciais em Deep Teal Elegante (Sem cores berrantes) */}
      <section id="diferenciais" className="py-16 sm:py-20 bg-[#062d29] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow-dark justify-center mb-2.5">
              Por que nos escolher
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              6 Pilares que tornam a Clínica São Camilo referência em Nova Serrana
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Aliamos rigor científico, equipamentos modernos e a vocação genuína de cuidar de vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Stethoscope,
                title: "Corpo Clínico Multidisciplinar",
                desc: "Médicos especialistas em Pediatria, Cardiologia, Pneumologia, Psiquiatria, Urologia, Angiologia, Otorrino e Nutrição atuando de forma integrada.",
              },
              {
                icon: Briefcase,
                title: "Referência em Medicina Ocupacional",
                desc: "ASO rápido, seguro e sem filas para indústrias calçadistas e comércios de Nova Serrana, com total conformidade com o eSocial.",
              },
              {
                icon: Baby,
                title: "Cuidado com a Primeira Infância",
                desc: "Pediatria acolhedora, Teste da Orelhinha neonatal indolor e calendário de vacinas aplicadas com carinho.",
              },
              {
                icon: Activity,
                title: "Exames no Próprio Endereço",
                desc: "Audiometria tonal e vocal, eletrocardiograma e testes rápidos sem a necessidade de deslocamento para outros laboratórios.",
              },
              {
                icon: MapPin,
                title: "Localização Central Privilegiada",
                desc: "Sede de fácil acesso na Rua Antônio Ferreira do Amaral, 136 - Centro, perto de tudo em Nova Serrana.",
              },
              {
                icon: Star,
                title: "Avaliação 4,8 ★ no Google",
                desc: "Mais de 200 avaliações de pacientes confirmando a qualidade do atendimento, pontualidade e limpeza do ambiente.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="rounded-xl p-5 bg-[#0a3833]/90 border border-teal-800/40 hover:border-teal-600/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-800/50 flex items-center justify-center text-teal-300 mb-3">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na Clínica São Camilo.")}
              target="_blank"
              variant="whatsapp"
              size="md"
              className="gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>Agendar Agora pelo WhatsApp</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos Reais / Prova Social Google 4,8★ */}
      <section id="depoimentos" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow justify-center mb-2.5">
              Depoimentos de Pacientes
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              O que dizem os pacientes da Clínica São Camilo
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Avaliação média de <strong>4,8 estrelas com mais de 203 avaliações no Google</strong>.
            </p>

            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span>Nota Oficial 4,8 / 5,0 no Google</span>
            </div>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="font-heading font-bold text-xs text-slate-800">
                    {item.author}
                  </p>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d766e] hover:underline"
            >
              <span>Ver todas as 203 avaliações no Google</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Seção Localização & Contato */}
      <section id="localizacao" className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-2.5">Sede & Agendamento</div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Fácil de chegar, no centro de Nova Serrana.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Estamos localizados na região central da cidade, com acesso rápido e estacionamento nas proximidades. Venha nos visitar ou agende sua consulta e exame previamente pelo WhatsApp.
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#0d766e] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0d766e]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-slate-700">
                      Endereço
                    </h4>
                    <p className="text-sm font-semibold text-slate-900">
                      {ADDRESS_STREET} - {ADDRESS_NEIGHBORHOOD}
                    </p>
                    <p className="text-xs text-slate-500">
                      {ADDRESS_CITY} · CEP {ADDRESS_CEP}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#0d766e] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#0d766e]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-slate-700">
                      Telefone & WhatsApp
                    </h4>
                    <p className="text-sm font-bold text-slate-900">
                      {PHONE_DISPLAY}
                    </p>
                    <p className="text-xs text-slate-500">
                      Agendamentos de segunda a sexta-feira
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#0d766e] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#0d766e]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-slate-700">
                      Horário de Atendimento
                    </h4>
                    <p className="text-sm font-semibold text-slate-900">
                      Segunda a Sexta a partir das 08:00
                    </p>
                    <p className="text-xs text-slate-500">
                      Atendimento com pontualidade e agilidade
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <GlowingButton
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  variant="primary"
                  size="md"
                  className="gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Traçar Rota no GPS</span>
                </GlowingButton>

                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre a localização da clínica.")}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="gap-2"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 sm:p-7 bg-[#062d29] text-white border border-teal-900/60 shadow-lg">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-teal-800/40 text-teal-300 text-xs font-semibold mb-3">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Ponto de Fácil Acesso
                </div>

                <h3 className="font-heading text-xl font-bold mb-2 text-white">
                  Clínica São Camilo Nova Serrana
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Localizada na região central de Nova Serrana, a poucos metros das principais vias e do comércio, oferecendo praticidade para suas consultas e exames ocupacionais.
                </p>

                <div className="p-3.5 rounded-xl bg-teal-950/50 border border-teal-800/40 mb-5 space-y-2 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Rua Antônio Ferreira do Amaral, 136 - Centro</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Nova Serrana - MG, 35519-000</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Atendimento a pacientes de toda a região</span>
                  </p>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wide transition-colors"
                >
                  <span>Abrir no Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Dúvidas Frequentes */}
      <section id="duvidas" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="eyebrow justify-center mb-2.5">Tire suas Dúvidas</div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Perguntas Frequentes
            </h2>
            <p className="text-sm text-slate-600">
              Esclareça dúvidas comuns sobre consultas, exames ocupacionais e vacinas.
            </p>
          </div>

          <div className="space-y-2.5">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isOpen
                      ? "border-[#0d766e] bg-white shadow-2xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 text-left font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0d766e]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#0d766e]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-teal-50/60 border border-teal-100 text-center">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-[#0d766e] mb-1">
              Ficou com alguma dúvida específica?
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Nossa equipe está disponível no WhatsApp para responder prontamente.
            </p>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre os serviços da Clínica São Camilo.")}
              target="_blank"
              variant="primary"
              size="sm"
              className="gap-2"
            >
              <WhatsAppIcon size={14} />
              <span>Falar com o Atendimento</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* Footer Sóbrio e Completo */}
      <footer className="bg-[#04201d] text-white pt-14 pb-10 border-t border-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-teal-900/40">
            <div className="lg:col-span-2">
              <a href="#" className="inline-block mb-3">
                <div className="relative w-52 sm:w-56 h-12 sm:h-13">
                  <Image
                    src={LOGO_SRC}
                    alt="Clínica São Camilo"
                    fill
                    sizes="230px"
                    className="object-contain object-left brightness-105"
                  />
                </div>
              </a>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 max-w-sm">
                Clínica médica multidisciplinar em Nova Serrana - MG. Consultas médicas com especialistas, Medicina do Trabalho completa com ASO rápido, Vacinas e Teste da Orelhinha.
              </p>

              <div className="flex items-center gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-teal-900/60 border border-teal-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={15} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-teal-900/60 border border-teal-800 text-teal-300 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all"
                  title="Instagram"
                >
                  <InstagramIcon size={15} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-400 mb-3">
                Especialidades
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>Pediatria & Puericultura</li>
                <li>Medicina do Trabalho (ASO)</li>
                <li>Cardiologia</li>
                <li>Angiologia & Varizes</li>
                <li>Pneumologia</li>
                <li>Psiquiatria</li>
                <li>Otorrinolaringologia</li>
                <li>Nutrição & Urologia</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-400 mb-3">
                Exames & Vacinas
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>Teste da Orelhinha (Neonatal)</li>
                <li>Audiometria Ocupacional</li>
                <li>Vacina da Gripe (Influenza)</li>
                <li>ASO Admissional & Periódico</li>
                <li>Eletrocardiograma (ECG)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-400 mb-3">
                Atendimento
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>R. Antônio Ferreira do Amaral, 136 - Centro, Nova Serrana - MG</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>(37) 3226-2910</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Seg. a Sex. a partir das 08:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <p>
              © {new Date().getFullYear()} Clínica São Camilo. Todos os direitos reservados. Nova Serrana - MG.
            </p>
            <div className="flex items-center gap-3">
              <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Linktree Oficial
              </a>
              <span>·</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante de WhatsApp */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na Clínica São Camilo em Nova Serrana.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-xs"
          aria-label="Falar no WhatsApp com a Clínica São Camilo"
        >
          <WhatsAppIcon size={18} />
          <span className="hidden sm:inline-block">WhatsApp</span>
        </a>
      </div>

      {/* Modal de Detalhes da Especialidade */}
      <AnimatePresence>
        {selectedSpecialty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 max-h-[88vh] flex flex-col"
            >
              <div className="p-5 bg-[#0a3833] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-teal-950/60 px-2 py-0.5 rounded">
                    {selectedSpecialty.badge}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white mt-1">
                    {selectedSpecialty.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSpecialty(null)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-[#0d766e] mb-1.5">
                    Sobre o Atendimento
                  </h4>
                  <p className="leading-relaxed">{selectedSpecialty.fullDesc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h5 className="font-heading font-bold text-xs uppercase tracking-wide text-slate-800 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Indicações
                    </h5>
                    <ul className="space-y-1">
                      {selectedSpecialty.indications.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <span className="text-[#0d766e]">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-teal-50/50 border border-teal-100">
                    <h5 className="font-heading font-bold text-xs uppercase tracking-wide text-[#0d766e] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#0d766e]" />
                      Benefícios
                    </h5>
                    <ul className="space-y-1">
                      {selectedSpecialty.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <p className="font-bold text-slate-800 mb-0.5">
                    Dúvida Comum: {selectedSpecialty.faq.q}
                  </p>
                  <p>{selectedSpecialty.faq.a}</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSpecialty(null)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Fechar
                </button>

                <GlowingButton
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar uma consulta de ${selectedSpecialty.title} na Clínica São Camilo em Nova Serrana.`
                  )}
                  target="_blank"
                  variant="primary"
                  size="sm"
                  className="gap-1.5"
                >
                  <WhatsAppIcon size={14} />
                  <span>Agendar {selectedSpecialty.title}</span>
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
