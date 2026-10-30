"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Award,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  FileText,
  Activity,
  Gavel,
  ShieldCheck,
  Zap,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Professional Information — Adv. Laura Melo Lopes
const CLIENT_NAME = "Adv. Laura Melo Lopes";
const BRAND_LABEL = "Laura Melo Lopes — Advocacia & Consultoria Jurídica";
const LAWYER_NAME = "Dra. Laura Melo Lopes";
const LAWYER_OAB = "OAB/MG 248.197";
const LAWYER_ROLE = "Advocacia & Consultoria Jurídica";
const LAWYER_TITLE = "Previdenciário · Médico · Criminal · Família e Sucessões · OAB/MG 248.197";
const WHATSAPP_NUMBER = "5535998763350";
const PHONE_DISPLAY = "(35) 99876-3350";
const EMAIL_CONTACT = "contato@lauramelolopes.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/adv.lauramelolopes/";
const INSTAGRAM_HANDLE = "@adv.lauramelolopes";
const BIOSITE_URL = "https://bio.site/adv.lauramelolopes";

const ADDRESS_CARMO = "Rua Monsenhor Mário, 405 - Carmo do Rio Claro, MG, 37150-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Laura+Melo+Lopes+%E2%80%94+Advogada%0ACarmo+do+Rio+Claro+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Monsenhor+M%C3%A1rio%2C+405+-+Carmo+do+Rio+Claro%2C+MG%2C+37150-000";

// Official assets from public folder
const LOGO_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_WHITE_SRC = "/logo-white.png";
const EMBLEM_SRC = "/emblem.png";
const FOTO_HERO_SRC = "/dra-laura.jpg?v=lml2";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Laura! Gostaria de agendar uma consulta jurídica especializada.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
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
  size = 17,
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
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
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

interface PracticeArea {
  id: string;
  title: string;
  category: string;
  icon: typeof Award;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios do INSS",
    category: "Aposentadorias · Auxílio-Doença · BPC/LOAS · Pensão por Morte · Planejamento Previdenciário",
    icon: ShieldCheck,
    tag: "Segurança Financeira · Planejamento · Concessão de Benefícios",
    summary:
      "Conquista e restabelecimento de benefícios do INSS pela via administrativa ou judicial, com cálculo prévio detalhado para garantir o melhor valor de benefício.",
    details:
      "A Dra. Laura Melo Lopes atua de forma estratégica em todas as fases perante a Previdência Social. Realizamos o planejamento previdenciário minucioso para identificar o melhor momento e a regra de transição mais vantajosa, além de ações judiciais ágeis contra indeferimentos indevidos do INSS em auxílio por incapacidade temporária (auxílio-doença), aposentadoria por invalidez, aposentadoria especial, pensão por morte, salário-maternidade e BPC/LOAS para idosos e pessoas com deficiência.",
    topics: [
      "Aposentadoria por Idade, Tempo de Contribuição, Especial (insalubridade) e Rural",
      "Auxílio por Incapacidade Temporária (auxílio-doença) e Aposentadoria por Invalidez",
      "BPC/LOAS para idosos em vulnerabilidade e pessoas com deficiência",
      "Pensão por morte urbana e rural e auxílio-reclusão",
      "Planejamento Previdenciário completo com projeção de renda futura",
      "Revisões judiciais de benefícios e correção de tempo de serviço no CNIS",
    ],
    whatsAppText:
      "Olá, Dra. Laura! Gostaria de uma consultoria especializada em Direito Previdenciário / Benefício do INSS.",
  },
  {
    id: "direito-medico-saude",
    title: "Direito Médico & Direito da Saúde",
    category: "Medicamentos de Alto Custo · Cirurgias e Tratamentos · Negativas de Planos de Saúde e SUS",
    icon: Activity,
    tag: "Direito à Vida · Tutela de Urgência (Liminares) · Firmeza Técnica",
    summary:
      "Medidas jurídicas rápidas e pedidos de liminar para fornecimento imediato de medicamentos de alto custo, cirurgias urgentes e tratamentos negados pelo SUS ou convênios.",
    details:
      "A saúde e a vida não podem esperar pela burocracia. Quando operadoras de planos de saúde ou o poder público negam cobertura a procedimentos indispensáveis, tratamentos oncológicos, exames de alta complexidade ou medicamentos de alto custo não padronizados, a Dra. Laura Melo Lopes ajuíza medidas de urgência com pedidos liminares para compelir a liberação rápida. Atuamos também em casos de erro médico e reparação integral por danos à saúde do paciente.",
    topics: [
      "Ações com pedido de liminar para fornecimento de medicamentos de alto custo pelo SUS ou plano",
      "Cobertura obrigatória para cirurgias de urgência, próteses, órteses e internações em UTI",
      "Terapias especiais e contínuas (tratamentos oncológicos, TEA, terapias multidisciplinares)",
      "Ações contra reajustes abusivos e cancelamentos unilaterais de planos de saúde",
      "Responsabilidade civil médica, erro de diagnóstico e falhas na prestação de serviços hospitalares",
      "Consultoria jurídica preventiva para clínicas e profissionais da área da saúde",
    ],
    whatsAppText:
      "Olá, Dra. Laura! Preciso de orientação urgente sobre negativa de plano de saúde / medicamento / tratamento.",
  },
  {
    id: "direito-criminal",
    title: "Direito Criminal & Penal Estratégico",
    category: "Defesa Técnica · Audiências de Custódia · Flagrantes · Tribunal do Júri · Inquéritos Policiais",
    icon: Gavel,
    tag: "Garantias Fundamentais · Prontidão · Defesa Combativa",
    summary:
      "Atuação técnica e combativa na defesa da liberdade e do devido processo legal, desde a prisão em flagrante e inquérito até recursos em tribunais superiores.",
    details:
      "Em matéria criminal, cada minuto conta para a garantia da ampla defesa e integridade do cidadão. A Dra. Laura Melo Lopes atua com firmeza e preparo técnico em acompanhamento de flagrantes, requerimentos de liberdade provisória e revogação de prisões preventivas, audiências de custódia, defesas prévias, memoriais, plenário do Tribunal do Júri, bem como em habeas corpus perante o TJMG, STJ e STF.",
    topics: [
      "Acompanhamento em delegacias de polícia e autos de prisão em flagrante",
      "Atuação em audiências de custódia e pedidos de revogação de prisão preventiva",
      "Impetração de Habeas Corpus perante os Tribunais Estaduais e Superiores (STJ e STF)",
      "Defesa integral em processos penais comuns, especiais e Tribunal do Júri",
      "Consultoria jurídica criminal preventiva e defesa em crimes contra a pessoa e patrimônio",
      "Execução penal: progressão de regime, livramento condicional e remição de pena",
    ],
    whatsAppText:
      "Olá, Dra. Laura! Preciso de atendimento especializado em Direito Criminal / Defesa Penal.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    category: "Inventários · Partilhas de Bens · Divórcios · Pensão Alimentícia · Guarda e Convivência",
    icon: HeartHandshake,
    tag: "Acolhimento Humano · Discrição Absoluta · Segurança Patrimonial",
    summary:
      "Resolução equilibrada, ética e célere para questões familiares e sucessórias, resguardando o bem-estar dos filhos e o patrimônio da família.",
    details:
      "Momentos delicados exigem condução jurídica acolhedora, sensível e tecnicamente impecável. A Dra. Laura Melo Lopes atua na condução de inventários extrajudiciais em cartório (rápidos e sem atritos) e judiciais, partilha justa de patrimônio, divórcios consensuais e litigiosos, fixação e revisão de pensão alimentícia, guarda compartilhada e planejamento sucessório para evitar conflitos futuros entre herdeiros.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas rápido e Inventário Judicial litigioso",
      "Divórcio consensual e litigioso com partilha equilibrada de bens",
      "Ações de alimentos (fixação, revisão, exoneração e execução)",
      "Guarda compartilhada, regulamentação de visitas e convivência familiar",
      "Reconhecimento e dissolução de união estável e pactos antenupciais",
      "Planejamento sucessório, testamentos e doações com reserva de usufruto",
    ],
    whatsAppText:
      "Olá, Dra. Laura! Gostaria de consultar sobre Inventário / Família / Divórcio / Partilha.",
  },
  {
    id: "direito-civil-consultoria",
    title: "Direito Civil & Consultoria Jurídica",
    category: "Contratos · Reparação de Danos · Cobranças · Obrigações · Assessoria Preventiva",
    icon: FileText,
    tag: "Prevenção de Riscos · Clareza Contratual · Resguardo Patrimonial",
    summary:
      "Elaboração de contratos seguros, ações de indenização por perdas e danos e consultoria jurídica preventiva para pessoas físicas e empreendedores.",
    details:
      "Uma consultoria jurídica preventiva evita prejuízos que levam anos para serem reparados na justiça. A Dra. Laura Melo Lopes elabora e revisa instrumentos contratuais personalizados, atua em cobranças judiciais e extrajudiciais de créditos, reparações cíveis por descumprimento de acordos e orienta decisões estratégicas com transparência e clareza informativa em cada etapa.",
    topics: [
      "Elaboração, análise e revisão criteriosa de contratos civis e comerciais",
      "Ações de indenização por danos morais, materiais e lucros cessantes",
      "Ações de cobrança, execuções de títulos executivos (notas promissórias, cheques)",
      "Rescisões contratuais e defesas em ações cíveis e de inadimplemento",
      "Notificações extrajudiciais formais com forte peso probatório",
      "Consultoria jurídica preventiva personalizada para proteção de direitos e bens",
    ],
    whatsAppText:
      "Olá, Dra. Laura! Gostaria de consultar sobre Contratos / Direito Civil / Indenizações.",
  },
  {
    id: "resolucao-extrajudicial",
    title: "Resolução Extrajudicial & Mediação",
    category: "Acordos Rápidos · Menos Desgaste · Força Executiva Legal · Agilidade e Sigilo",
    icon: Zap,
    tag: "Sem Demora · Economia de Custos · Resolução Pacífica",
    summary:
      "Soluções inteligentes para resolver conflitos sem a morosidade do Judiciário, por meio de negociações amigáveis e acordos com plena validade jurídica.",
    details:
      "Nem todo problema precisa se arrastar por anos nos tribunais. Com postura diplomática e firmeza técnica, a Dra. Laura Melo Lopes conduz mesas de negociação e mediação entre as partes, construindo acordos justos com peso de título executivo, poupando tempo, custos financeiros e o desgaste emocional de um processo litigioso.",
    topics: [
      "Condução de negociações diretas e amigáveis entre partes com equilíbrio",
      "Redação de termos de acordo, transações e confissões de dívida",
      "Homologação judicial rápida de termos e acordos extrajudiciais",
      "Resolução célere de pendências sucessórias e familiares sem litígio",
      "Mediação preventiva de impasses contratuais e interpessoais",
      "Orientação prévia e pareceres sobre riscos processuais e vantagens do consenso",
    ],
    whatsAppText:
      "Olá, Dra. Laura! Gostaria de orientação para um acordo extrajudicial do meu caso.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Segurança & Clareza"
    | "Domínio Técnico & Impecável"
    | "Atendimento & Confiança"
    | "Eficiência & Competência";
  content: string;
  ownerReply?: string;
}

const clientReviews: Review[] = [
  {
    name: "Carolina Balestra Silva",
    badge: "7 avaliações · 2 fotos · 5 Estrelas · Google Maps",
    date: "6 meses atrás",
    category: "Segurança & Clareza",
    content:
      "Excelente profissional! Atenciosa, clara nas orientações e muito segura na condução do processo. Sempre disponível para esclarecer dúvidas e passa muita confiança em todas as etapas. Recomendo!",
    ownerReply:
      "Muito obrigada pelas palavras, Carolina, e pela confiança. Permaneço à disposição sempre que precisar. 🙏🏼⚖️",
  },
  {
    name: "Igor Lopes",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "6 meses atrás",
    category: "Domínio Técnico & Impecável",
    content:
      "A Laura é uma profissional impecável. Além de dominar tecnicamente o que faz, traz uma segurança e uma clareza que fazem toda a diferença. Recomendo de olhos fechados para quem busca excelência e comprometimento.",
    ownerReply:
      "Muito obrigada pelas palavras e pela confiança, Igor. É gratificante saber que meu trabalho transmite segurança e clareza. Sigo à disposição sempre que precisar. 🙏🏼⚖️",
  },
  {
    name: "Maria Luiza Freire Andrade",
    badge: "5 avaliações · 1 foto · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Atendimento & Confiança",
    content:
      "Profissional de extrema qualidade e que passa total confiança. Recomendo muito!",
  },
  {
    name: "Gabriela Carielo",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "6 meses atrás",
    category: "Eficiência & Competência",
    content: "Ótima profissional e muito competente!",
    ownerReply:
      "Muito obrigada pela confiança, Gabriela. É um prazer poder atendê-la. Permaneço à disposição. 🙏🏼⚖️",
  },
  {
    name: "Stéfanie Sabrine Silva Santos",
    badge: "Local Guide · 5 avaliações · 5 Estrelas · Google Maps",
    date: "6 meses atrás",
    category: "Atendimento & Confiança",
    content: "Excelente profissional!",
    ownerReply: "Muito obrigada pela confiança, Stéfanie⚖️😄",
  },
  {
    name: "eduardo barros",
    badge: "Local Guide · 13 avaliações · 17 fotos · 5 Estrelas",
    date: "5 meses atrás",
    category: "Eficiência & Competência",
    content: "Otima advogada essa eu indico muito top",
  },
  {
    name: "Bruno Melo",
    badge: "5 avaliações · 1 foto · 5 Estrelas · Google Maps",
    date: "6 meses atrás",
    category: "Domínio Técnico & Impecável",
    content: "Excelente serviço!",
    ownerReply:
      "Obrigada pela confiança no meu trabalho, Bruno! 🙏🏼⚖️ Permaneço à disposição sempre que precisar. 🙏🏼⚖️",
  },
  {
    name: "Lucas Mendes",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Segurança & Clareza",
    content: "Excelente profissional.",
  },
  {
    name: "Tulio Avelino",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Eficiência & Competência",
    content: "Excelente profissional",
  },
  {
    name: "Marilda Elias",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "6 meses atrás",
    category: "Domínio Técnico & Impecável",
    content: "Eficiência e profissionalismo.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question:
      "Como funciona a consulta jurídica com a Dra. Laura Melo Lopes?",
    answer:
      "O atendimento é estruturado para oferecer acolhimento, escuta atenta, sigilo absoluto e diagnóstico técnico preciso. Você pode ser atendido presencialmente em nosso escritório em Carmo do Rio Claro - MG (Rua Monsenhor Mário, 405) ou de forma 100% on-line via WhatsApp e videoconferência em qualquer cidade de Minas Gerais e do Brasil. Analisamos documentos, esclarecemos todas as dúvidas em linguagem acessível e traçamos o plano de ação mais seguro e eficiente para o seu direito.",
  },
  {
    question:
      "Como o escritório atua na conquista e revisão de benefícios do INSS (Previdenciário)?",
    answer:
      "Atuamos desde o planejamento previdenciário prévio — simulando o melhor momento para se aposentar e a regra mais vantajosa — até o requerimento administrativo e o ajuizamento de ações judiciais contra o INSS. Seja para aposentadorias (tempo de contribuição, idade, especial, rural), auxílio-doença, BPC/LOAS ou pensão por morte, conduzimos o processo com técnica apurada e combate contra indeferimentos indevidos.",
  },
  {
    question:
      "O que fazer caso um plano de saúde ou o SUS negue medicamentos, cirurgias ou tratamentos?",
    answer:
      "Negativas de cobertura para tratamentos essenciais, remédios de alto custo, internações em UTI ou procedimentos cirúrgicos prescritos pelo médico assistente são frequentemente ilegais e abusivas. Nesses casos, a Dra. Laura Melo Lopes ingressa com ações judiciais com pedido de tutela de urgência (liminar), buscando que o juiz determine o fornecimento imediato em poucos dias ou horas.",
  },
  {
    question:
      "Como é a atuação em Direito Criminal e audiências de custódia?",
    answer:
      "Em matéria penal, atuamos com prontidão e defesa combativa das garantias constitucionais. Prestamos assistência em delegacias de polícia, autos de prisão em flagrante, pedidos de liberdade provisória, audiências de custódia, defesas em processos judiciais, Tribunal do Júri e recursos nos Tribunais Superiores (STJ e STF), assegurando que o devido processo legal seja rigorosamente respeitado.",
  },
  {
    question:
      "Moro fora de Carmo do Rio Claro ou em outro estado. Posso ser atendido pelo escritório?",
    answer:
      "Com certeza! Quase a totalidade dos processos judiciais e procedimentos no Brasil tramita pelo processo eletrônico (PJe, Projudi, E-Proc). Realizamos reuniões virtuais seguras, coleta de assinaturas digitais com validade legal pelo celular e peticionamos em qualquer tribunal de Minas Gerais ou do país, mantendo o mesmo padrão de clareza, transparência e proximidade.",
  },
  {
    question:
      "Como sou informado sobre o andamento e as fases do meu processo?",
    answer:
      "A clareza e a transparência são os maiores diferenciais destacados por nossos clientes nas avaliações do Google. Você recebe atualizações a cada movimentação relevante em linguagem descomplicada, sem juridiquês indecifrável, e conta com canal direto no WhatsApp para tirar dúvidas sempre que precisar.",
  },
  {
    question:
      "Como agendar um horário com a Dra. Laura Melo Lopes?",
    answer:
      "O agendamento é imediato e prático: basta clicar em qualquer botão de WhatsApp nesta página ou enviar uma mensagem para o número (35) 99876-3350. Nossa equipe responderá prontamente para agendar o melhor horário presencial ou virtual para o seu caso.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedReviewCategory, setSelectedReviewCategory] =
    useState<string>("Todas");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reviewCategories = [
    "Todas",
    "Segurança & Clareza",
    "Domínio Técnico & Impecável",
    "Atendimento & Confiança",
    "Eficiência & Competência",
  ];

  const filteredReviews =
    selectedReviewCategory === "Todas"
      ? clientReviews
      : clientReviews.filter((r) => r.category === selectedReviewCategory);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#fdfbf7] text-[#14110d] selection:bg-[#1a1612] selection:text-[#f7cd6d]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (LUXURY OBSIDIAN & METALLIC GOLD)   */}
        {/* ======================================================== */}
        <div className="border-b border-[#241e18] bg-[#0a0806] py-2 text-xs text-[#ebe4d8]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#bd8028] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f7cd6d]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f7cd6d] font-semibold tracking-wide">
                ADV. LAURA MELO LOPES · CARMO DO RIO CLARO - MG · OAB/MG 248.197 ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#ebe4d8]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f7cd6d]"
              >
                <Star size={12} className="fill-[#dba54c] text-[#dba54c]" />
                <span className="font-bold text-[#f7cd6d]">5,0 ★</span> (10 avaliações no Google · Carmo do Rio Claro - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#241e18] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de agendar uma consulta jurídica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#f7cd6d] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#bd8028]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (ADV. LAURA MELO LOPES)           */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#ebe4d8] bg-white/95 py-1.5 shadow-md backdrop-blur-md"
              : "border-b border-[#ebe4d8]/80 bg-[#fdfbf7]/95 py-2 sm:py-2.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Brand Logo (Equilibrado e Sofisticado) */}
            <a
              href="#"
              className="flex shrink-0 items-center transition-transform hover:scale-102"
              aria-label="Adv. Laura Melo Lopes - Início"
            >
              <Image
                src={LOGO_HORIZONTAL_SRC}
                alt="Adv. Laura Melo Lopes — Advocacia & Consultoria Jurídica"
                width={320}
                height={90}
                className={`w-auto object-contain drop-shadow-xs transition-all duration-300 ${
                  scrolled
                    ? "h-[48px] sm:h-[54px] md:h-[60px] lg:h-[66px]"
                    : "h-[58px] sm:h-[66px] md:h-[74px] lg:h-[82px]"
                }`}
                priority
                unoptimized
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 lg:gap-6 xl:gap-7 lg:flex">
              <a href="#servicos" className="nav-link">
                Áreas de Atuação
              </a>
              <a href="#sobre" className="nav-link">
                Sobre a Advogada
              </a>
              <a href="#diferenciais" className="nav-link">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link">
                Avaliações
              </a>
              <a href="#sede" className="nav-link">
                Escritório
              </a>
              <a href="#duvidas" className="nav-link">
                Dúvidas
              </a>
              <a href="#contato" className="nav-link">
                Contato
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA (Metallic Gold) */}
            <div className="flex shrink-0 items-center gap-2.5">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de agendar uma consulta jurídica especializada.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0 shadow-md"
              >
                <WhatsAppIcon size={15} className="text-[#0a0806]" />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#ebe4d8] bg-white text-[#14110d] transition-colors hover:border-[#bd8028] hover:text-[#0a0806] lg:hidden cursor-pointer shrink-0"
                aria-label="Abrir menu principal"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-[#ebe4d8] bg-white px-5 py-6 lg:hidden shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center py-2 pb-4 border-b border-[#ebe4d8]">
                    <Image
                      src={LOGO_SRC}
                      alt="Adv. Laura Melo Lopes"
                      width={280}
                      height={75}
                      className="h-[58px] sm:h-[66px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#bd8028]"
                  >
                    <span>Áreas de Atuação (Previdenciário, Médico, Criminal, Família)</span>
                    <ArrowRight size={14} className="text-[#bd8028]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#bd8028]"
                  >
                    <span>Sobre a Dra. Laura Melo Lopes</span>
                    <ArrowRight size={14} className="text-[#bd8028]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#bd8028]"
                  >
                    <span>Pilares & Excelência Comprovada</span>
                    <ArrowRight size={14} className="text-[#bd8028]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#bd8028]"
                  >
                    <span>Avaliações no Google (10 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#bd8028]" />
                  </a>
                  <a
                    href="#sede"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#bd8028]"
                  >
                    <span>Escritório em Carmo do Rio Claro - MG</span>
                    <ArrowRight size={14} className="text-[#bd8028]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#bd8028]"
                  >
                    <span>Perguntas Frequentes</span>
                    <ArrowRight size={14} className="text-[#bd8028]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#bd8028]"
                  >
                    <span>Contato & Localização</span>
                    <ArrowRight size={14} className="text-[#bd8028]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de conversar com você pelo WhatsApp.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp: {PHONE_DISPLAY}</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM DRA. LAURA MELO LOPES        */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fdfbf7]">
          {/* Subtle Royal Metallic Gold Radial Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#fdf2cf]/50 via-[#bd8028]/12 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#bd8028]/15 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ebe4d8] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#1a1612] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#bd8028] animate-pulse" />
                    ADV. LAURA MELO LOPES · CARMO DO RIO CLARO - MG · 5,0 ★ NO GOOGLE
                  </span>
                </div>

                {/* H1 Headline */}
                <h1 className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#14110d] sm:text-5xl lg:text-[3.25rem]">
                  Em Defesa do Seu Direito: Excelência Jurídica, Clareza e Firmeza em{" "}
                  <span className="bg-gradient-to-r from-[#8c4f08] via-[#bd8028] to-[#dba54c] bg-clip-text text-transparent">
                    Carmo do Rio Claro e em Todo o Brasil.
                  </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="mt-6 text-base leading-relaxed text-[#5c554b] sm:text-lg lg:max-w-xl">
                  Sob a liderança da <strong className="font-semibold text-[#14110d]">{LAWYER_NAME}</strong> (<strong className="text-[#8c4f08]">{LAWYER_OAB}</strong>), unimos rigor técnico, sensibilidade e resolutividade comprovada em <strong className="text-[#8c4f08]">Direito Previdenciário (INSS), Direito Médico e da Saúde, Defesa Criminal, Família e Sucessões</strong>.
                </p>

                {/* Quick Highlights Pills */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#bd8028]" />
                    Previdenciário & Benefícios do INSS
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#bd8028]" />
                    Direito Médico & Ações contra Planos/SUS
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#bd8028]" />
                    Defesa Criminal & Custódia Estratégica
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#bd8028]" />
                    Família, Divórcios & Inventários
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de agendar uma consulta com você.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Falar com a Advogada no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Áreas de Atuação</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </div>

                {/* Social Proof Strip underneath CTAs */}
                <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-[#ebe4d8] pt-6 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#dba54c]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#14110d]">
                      5,0 no Google
                    </span>
                    <span className="text-xs text-[#5c554b]">
                      (10 avaliações 5 estrelas verificadas · Carmo do Rio Claro - MG)
                    </span>
                  </div>

                  <span className="hidden h-3.5 w-px bg-[#ebe4d8] sm:inline-block" />

                  <div className="flex items-center gap-2 text-xs text-[#5c554b]">
                    <Shield size={14} className="text-[#bd8028]" />
                    <span>Sede na Rua Monsenhor Mário, 405 · Carmo do Rio Claro - MG</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Official Portrait of Dra. Laura Melo Lopes */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  {/* Outer Luxury Metallic Border Frame */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#bd8028]/40 bg-white p-2 shadow-2xl shadow-[#1a1612]/15">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f7f4ed] to-[#ebe4d8]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Laura Melo Lopes — Advocacia & Consultoria Jurídica"
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-102"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette for High-Contrast Typography Badge */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0806]/95 via-[#0a0806]/60 to-transparent" />

                      {/* Overlay Identification Badge */}
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#bd8028]/45 bg-[#0a0806]/90 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-cinzel text-base font-bold text-white tracking-wide">
                              {LAWYER_NAME}
                            </p>
                            <p className="text-[11px] font-semibold text-[#f7cd6d] uppercase tracking-wider">
                              {LAWYER_OAB} · {LAWYER_ROLE}
                            </p>
                            <p className="text-[10px] text-[#ebe4d8] mt-0.5">
                              Carmo do Rio Claro - MG · Atendimento Nacional
                            </p>
                          </div>
                          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-[#bd8028]/45 bg-[#1a1612] p-1.5 shadow-md">
                            <Image
                              src={EMBLEM_SRC}
                              alt="Monograma LML Balança da Justiça"
                              width={52}
                              height={52}
                              className="size-full object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge Top-Right: Sede Carmo do Rio Claro */}
                  <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-lg border border-[#bd8028]/50 bg-[#0a0806] px-3.5 py-2 shadow-lg text-white">
                    <p className="text-[9px] font-bold tracking-widest text-[#f7cd6d] uppercase">
                      CARMO DO RIO CLARO · MG
                    </p>
                    <p className="text-[11px] font-bold text-white">
                      Rua Monsenhor Mário, 405
                    </p>
                  </div>
                </div>

                {/* Google 5,0 Verified Review Card (Anchored cleanly right below the photo, leaving face and name badge 100% unobstructed) */}
                <div className="mt-4 mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none rounded-2xl border border-[#bd8028]/40 bg-white p-4 shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8]">
                        <GoogleIcon size={16} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[#dba54c]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-current" />
                          ))}
                        </div>
                        <p className="text-[11px] font-bold text-[#14110d]">
                          5,0 Estrelas no Google
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-[#bd8028]/30 bg-[#fdf2cf] px-2.5 py-0.5 text-[10px] font-bold text-[#8c4f08] uppercase tracking-wider">
                      Avaliação Verificada
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#5c554b] italic">
                    &quot;A Laura é uma profissional impecável. Além de dominar tecnicamente o que faz, traz uma segurança e uma clareza que fazem toda a diferença. Recomendo de olhos fechados para quem busca excelência e comprometimento.&quot;
                  </p>
                  <div className="mt-2.5 flex items-center justify-between border-t border-[#ebe4d8]/70 pt-2 text-[10px]">
                    <span className="font-semibold text-[#8c4f08]">
                      — Igor Lopes (Google Maps)
                    </span>
                    <span className="text-[#5c554b]">
                      Excelência e Segurança ⚖️
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: STRIP DE AUTORIDADE / MÉTRICAS (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section className="border-y border-[#241e18] bg-[#0a0806] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 text-center">
              {/* Stat 1: Google Rating */}
              <div className="flex flex-col items-center border-r border-[#241e18] pr-4 last:border-r-0 md:pr-0">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#f7cd6d]">
                  <span>5,0</span>
                  <div className="flex text-[#dba54c]">
                    <Star size={18} className="fill-current" />
                  </div>
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Nota Máxima 5,0
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  10 avaliações 5 estrelas no Google
                </p>
              </div>

              {/* Stat 2: OAB e Qualificação */}
              <div className="flex flex-col items-center md:border-r md:border-[#241e18] md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f7cd6d]">
                  248.197
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  OAB/MG Ativa
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Rigor técnico e ética inegociável
                </p>
              </div>

              {/* Stat 3: Segurança e Clareza */}
              <div className="flex flex-col items-center border-r border-[#241e18] pr-4 last:border-r-0 md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f7cd6d]">
                  100%
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Clareza & Segurança
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Orientações seguras em todas as etapas
                </p>
              </div>

              {/* Stat 4: Geographic Reach */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f7cd6d]">
                  Nacional
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Carmo do Rio Claro & Brasil
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Sede presencial & processos 100% digitais
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO                                */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">
                EXPERTISE JURÍDICA ESTRATÉGICA & RESOLUTIVA
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                Áreas de Atuação & Pilares de Excelência
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5c554b] sm:text-base">
                Conheça nossos principais ramos de atuação. Cada demanda é tratada com profundidade técnica, atenção minuciosa aos detalhes e compromisso absoluto com o seu direito.
              </p>
            </div>

            {/* Practice Areas Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ebe4d8] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#bd8028]/60 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Row: Icon + Tag */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-[#bd8028]/30 bg-[#fdf2cf]/40 text-[#8c4f08] transition-colors group-hover:bg-[#1a1612] group-hover:text-[#f7cd6d] group-hover:border-[#bd8028]">
                          <IconComponent size={24} />
                        </div>
                        <span className="rounded-full border border-[#ebe4d8] bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold text-[#8c4f08] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      {/* Area Title */}
                      <h3 className="mt-5 font-serif text-xl font-bold text-[#14110d] transition-colors group-hover:text-[#8c4f08]">
                        {area.title}
                      </h3>

                      {/* Category Subtext */}
                      <p className="mt-1 text-[11px] font-semibold text-[#a26417] uppercase tracking-wider">
                        {area.category}
                      </p>

                      {/* Summary */}
                      <p className="mt-3.5 text-xs leading-relaxed text-[#5c554b]">
                        {area.summary}
                      </p>

                      {/* Key Topics List */}
                      <ul className="mt-4 space-y-2 border-t border-[#ebe4d8]/70 pt-4 text-xs text-[#14110d]">
                        {area.topics.slice(0, 3).map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#bd8028]"
                            />
                            <span className="leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Actions */}
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#ebe4d8] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8c4f08] transition-colors hover:text-[#14110d] cursor-pointer"
                      >
                        <span>Ver detalhes completos</span>
                        <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-8 items-center justify-center rounded-lg bg-[#bd8028]/15 text-[#8c4f08] transition-all hover:bg-[#bd8028] hover:text-[#0a0806]"
                        aria-label={`Consultar sobre ${area.title} no WhatsApp`}
                      >
                        <WhatsAppIcon size={15} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Callout Banner */}
            <div className="mt-12 rounded-2xl border border-[#bd8028]/40 bg-gradient-to-r from-[#0a0806] via-[#120e0b] to-[#1a1612] p-8 text-white shadow-xl sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div className="max-w-2xl">
                <span className="rounded-full border border-[#f7cd6d]/30 bg-[#f7cd6d]/10 px-3 py-1 text-[10px] font-bold text-[#f7cd6d] uppercase tracking-wider">
                  ATENDIMENTO DIRETO COM A ADVOGADA
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                  Precisa de uma avaliação imediata da sua demanda jurídica?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#ebe4d8]">
                  Benefícios negados pelo INSS, negativas de saúde, processos criminais ou partilhas familiares exigem intervenção técnica rápida e estratégica. Entre em contato direto pelo WhatsApp para analisarmos o seu caso com total sigilo.
                </p>
              </div>

              <div className="mt-6 sm:mt-0 shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de uma avaliação inicial do meu caso com você.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Conversar com a Advogada</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE A PROFISSIONAL (DRA. LAURA MELO LOPES)    */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#ebe4d8] bg-[#f7f4ed]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Portrait at Office */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  {/* Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#bd8028]/40 bg-white p-2.5 shadow-2xl">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#fdfbf7]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Laura Melo Lopes em atendimento"
                        fill
                        className="object-cover object-top"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                      />
                    </div>
                  </div>

                  {/* Secondary Office Sede Badge */}
                  <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-5 rounded-xl border border-[#bd8028]/60 bg-[#0a0806] p-3.5 shadow-2xl text-white max-w-[260px]">
                    <div className="flex items-center gap-2 text-[#f7cd6d] text-xs font-bold uppercase">
                      <MapPin size={15} />
                      <span>Carmo do Rio Claro · MG</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-white">
                      Rua Monsenhor Mário, 405
                    </p>
                    <p className="text-[10px] text-[#ebe4d8]/70 mt-0.5">
                      Atendimento presencial & virtual acolhedor
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Values */}
              <div className="lg:col-span-7">
                <p className="eyebrow mb-3.5">COMPETÊNCIA, SEGURANÇA & DEDICAÇÃO INEGOCIÁVEL</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                  Sobre a Dra. Laura Melo Lopes
                </h2>
                <p className="mt-2 text-sm font-bold text-[#a26417] tracking-wider uppercase">
                  {LAWYER_OAB} · Atendimento Presencial em Carmo do Rio Claro - MG e On-line em Todo o País
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#5c554b] sm:text-base">
                  <p>
                    A advocacia exercida pela <strong className="font-semibold text-[#14110d]">{LAWYER_NAME}</strong> é guiada por uma premissa fundamental: <strong className="text-[#14110d]">unir o mais rigoroso preparo técnico à humanidade e clareza no atendimento</strong>. Cada cliente que chega ao escritório encontra não apenas uma advogada competente, mas uma defensora incansável dos seus direitos.
                  </p>
                  <p>
                    Com atuação especializada em <strong className="text-[#8c4f08]">Direito Previdenciário (INSS)</strong>, <strong className="text-[#8c4f08]">Direito Médico e da Saúde</strong>, <strong className="text-[#8c4f08]">Direito Criminal</strong> e <strong className="text-[#8c4f08]">Direito de Família e Sucessões</strong>, a Dra. Laura é amplamente reconhecida pela condução segura de processos delicados — passando aos clientes a tranquilidade de quem realmente domina a matéria e está ao seu lado em todas as etapas.
                  </p>
                  <p>
                    Como atestam os depoimentos públicos e espontâneos no Google: <em className="italic text-[#14110d]">&quot;A Laura é uma profissional impecável. Além de dominar tecnicamente o que faz, traz uma segurança e uma clareza que fazem toda a diferença.&quot;</em> e <em className="italic text-[#14110d]">&quot;Atenciosa, clara nas orientações e muito segura na condução do processo. Sempre disponível para esclarecer dúvidas e passa muita confiança em todas as etapas.&quot;</em>
                  </p>
                  <p>
                    Com <strong className="font-semibold text-[#14110d]">nota máxima 5,0 no Google</strong> com avaliações 100% cinco estrelas, nosso compromisso é oferecer uma advocacia acessível, transparente e de altíssima resolutividade.
                  </p>
                </div>

                {/* 4 Pillars of Action */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Shield size={16} className="text-[#bd8028]" />
                      <span>Segurança na Condução</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      &quot;Muito segura na condução do processo e passa muita confiança.&quot;
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Scale size={16} className="text-[#bd8028]" />
                      <span>Clareza nas Orientações</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Explicações transparentes sem juridiquês indecifrável.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Award size={16} className="text-[#bd8028]" />
                      <span>Domínio Técnico Total</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      &quot;Profissional impecável que domina tecnicamente o que faz.&quot;
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <HeartHandshake size={16} className="text-[#bd8028]" />
                      <span>Acolhimento & Presença</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Sempre disponível para esclarecer dúvidas em todas as etapas.
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de conversar com você sobre a minha situação jurídica.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com a Advogada no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5c554b] transition-colors hover:text-[#14110d]"
                  >
                    <InstagramIcon size={16} className="text-[#bd8028]" />
                    <span>Siga {INSTAGRAM_HANDLE} no Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 5: NOSSOS PILARES & DIFERENCIAIS (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#0a0806] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow-dark justify-center mb-3.5">
                POR QUE CONFIAR SUA CAUSA À DRA. LAURA MELO LOPES
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Os Pilares que Sustentam Nossa Reputação 5 Estrelas
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe4d8] sm:text-base">
                Avaliação máxima 5,0 no Google com depoimentos autênticos que atestam a competência, ética e clareza de nossa atuação.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-[#241e18] bg-[#120e0b] p-7 transition-all duration-300 hover:border-[#bd8028]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#bd8028]/30 bg-[#bd8028]/10 text-[#f7cd6d]">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Segurança na Condução
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Muito segura na condução do processo e passa total confiança em todas as etapas.&quot; — Defesa firme e sem vacilos.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[#241e18] bg-[#120e0b] p-7 transition-all duration-300 hover:border-[#bd8028]/50 hover:bg-[#1a140e]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#bd8028]/30 bg-[#bd8028]/10 text-[#f7cd6d]">
                  <Scale size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Clareza & Transparência
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Atenciosa e clara nas orientações, sempre disponível para esclarecer dúvidas.&quot; — Você sabe exatamente cada passo da sua ação.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-[#241e18] bg-[#120e0b] p-7 transition-all duration-300 hover:border-[#bd8028]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#bd8028]/30 bg-[#bd8028]/10 text-[#f7cd6d]">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Domínio Técnico Impecável
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Profissional impecável que domina tecnicamente o que faz com excelência e comprometimento.&quot; — Alta performance jurídica.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-[#241e18] bg-[#120e0b] p-7 transition-all duration-300 hover:border-[#bd8028]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#bd8028]/30 bg-[#bd8028]/10 text-[#f7cd6d]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Eficiência & Agilidade
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Eficiência e profissionalismo. Ótima advogada, essa eu indico muito top!&quot; — Celeridade para entregar resultados reais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: PROVA SOCIAL / GOOGLE REVIEWS (5,0 ★)           */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header with Google Badge */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ebe4d8] bg-white px-4 py-1.5 shadow-2xs">
                <GoogleIcon size={16} />
                <span className="text-xs font-bold text-[#14110d]">
                  Google Avaliações Verificadas
                </span>
                <span className="flex text-[#dba54c]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </span>
                <span className="text-xs font-bold text-[#8c4f08]">
                  5,0 / 5,0 (10 avaliações)
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                O Que Dizem Quem Já Teve Seus Direitos Defendidos
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5c554b] sm:text-base">
                Depoimentos públicos e autênticos registrados no perfil oficial de Laura Melo Lopes — Advogada no Google em Carmo do Rio Claro - MG.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {reviewCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedReviewCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedReviewCategory === cat
                      ? "border border-[#bd8028] bg-[#0a0806] text-[#f7cd6d] shadow-sm"
                      : "border border-[#ebe4d8] bg-white text-[#5c554b] hover:border-[#bd8028] hover:text-[#14110d]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reviews Cards Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-[#ebe4d8] bg-white p-6 shadow-sm transition-all hover:border-[#bd8028]/50 hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Stars + Date */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex text-[#dba54c]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#5c554b]">{review.date}</span>
                    </div>

                    {/* Category Tag */}
                    <span className="mt-3 inline-block rounded-md bg-[#fdf2cf] px-2.5 py-0.5 text-[9px] font-bold text-[#8c4f08] uppercase tracking-wider">
                      {review.category}
                    </span>

                    {/* Review Text */}
                    <p className="mt-3.5 text-xs leading-relaxed text-[#14110d] italic">
                      &quot;{review.content}&quot;
                    </p>

                    {/* Owner Response if present */}
                    {review.ownerReply && (
                      <div className="mt-4 rounded-xl border border-[#bd8028]/25 bg-[#fdfbf7] p-3 text-[11px] text-[#5c554b]">
                        <p className="font-bold text-[#8c4f08] text-[10px] uppercase tracking-wider">
                          Resposta de Adv. Laura Melo Lopes:
                        </p>
                        <p className="mt-1 leading-snug">{review.ownerReply}</p>
                      </div>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#ebe4d8]/70 pt-4">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#0a0806] font-cinzel text-xs font-bold text-[#f7cd6d]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d]">{review.name}</p>
                      <p className="text-[10px] text-[#5c554b]">{review.badge}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: ESCRITÓRIO EM CARMO DO RIO CLARO & ATENDIMENTO  */}
        {/* ======================================================== */}
        <section id="sede" className="border-t border-[#ebe4d8] py-20 sm:py-26 bg-[#f7f4ed]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Sede Card Presentation */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-[480px] lg:max-w-none overflow-hidden rounded-2xl border-2 border-[#bd8028]/50 bg-white p-2 shadow-2xl">
                  <div className="relative min-h-[380px] sm:min-h-[420px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0a0806] via-[#120e0b] to-[#1a1612] p-8 text-white flex flex-col justify-between">
                    {/* Background Emblem Watermark */}
                    <div className="pointer-events-none absolute right-4 bottom-4 opacity-15">
                      <Image
                        src={EMBLEM_SRC}
                        alt="Emblema Laura Melo Lopes"
                        width={220}
                        height={220}
                        className="object-contain"
                        unoptimized
                      />
                    </div>

                    {/* Top Sede Badge */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#f7cd6d]/40 bg-[#f7cd6d]/10 px-3.5 py-1 text-[11px] font-bold text-[#f7cd6d] uppercase tracking-wider">
                        <MapPin size={14} />
                        <span>Sede Própria em Minas Gerais</span>
                      </div>
                      <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                        Laura Melo Lopes — Advocacia & Consultoria Jurídica
                      </h3>
                      <p className="mt-2 text-xs text-[#ebe4d8]/80 leading-relaxed max-w-md">
                        Estrutura planejada para garantir atendimento privativo, sigilo irrestrito e acolhimento humano a cada cliente e sua família.
                      </p>
                    </div>

                    {/* Bottom Details */}
                    <div className="relative z-10 mt-8 rounded-xl border border-[#bd8028]/35 bg-[#0a0806]/90 p-5 backdrop-blur-md">
                      <div className="flex items-start gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#bd8028]/20 text-[#f7cd6d]">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-[#f7cd6d] uppercase tracking-wider">
                            Endereço Oficial
                          </p>
                          <p className="text-sm font-bold text-white mt-0.5">
                            Rua Monsenhor Mário, 405
                          </p>
                          <p className="text-xs text-[#ebe4d8]">
                            Carmo do Rio Claro - MG, CEP 37150-000, Brasil
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#241e18] pt-3 text-[11px] text-[#ebe4d8]/80">
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#bd8028]" />
                          <span>Seg. a Sex. das 08:00 às 18:00</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#f7cd6d] font-semibold">
                          <Star size={13} className="fill-current text-[#dba54c]" />
                          <span>5,0 ★ no Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Office Details */}
              <div className="lg:col-span-6">
                <p className="eyebrow mb-3.5">ATENDIMENTO PRESENCIAL & DIGITAL NACIONAL</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                  Atendimento Presencial em Carmo do Rio Claro e 100% On-line em Todo o País
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5c554b] sm:text-base">
                  Nosso escritório em Carmo do Rio Claro - MG conta com um ambiente acolhedor, planejado para garantir sigilo total e conforto absoluto. E por meio de processos eletrônicos e plataformas digitais seguras, atendemos com a mesma proximidade e eficácia clientes em Alpinópolis, Passos, Belo Horizonte e qualquer região do Brasil.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Address Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#bd8028]/15 text-[#8c4f08]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        {ADDRESS_CARMO}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#8c4f08] hover:text-[#14110d]"
                      >
                        <span>Abrir rotas no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#bd8028]/15 text-[#8c4f08]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        Segunda a Sexta-feira: <strong>08:00 às 18:00</strong>
                      </p>
                      <p className="text-[11px] text-[#8c4f08] font-semibold mt-0.5">
                        Atendimento presencial com agendamento prévio ou via WhatsApp.
                      </p>
                    </div>
                  </div>

                  {/* Contact Phones */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#bd8028]/15 text-[#8c4f08]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Telefone & WhatsApp de Atendimento
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        WhatsApp Oficial: <strong>{PHONE_DISPLAY}</strong>
                      </p>
                      <p className="text-xs text-[#5c554b]">
                        E-mail de Contato: <strong>{EMAIL_CONTACT}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sede CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de agendar um atendimento no escritório de Carmo do Rio Claro.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar Atendimento Presencial</span>
                  </GlowingButton>

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#bd8028] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#14110d] transition-all hover:bg-[#0a0806] hover:text-[#f7cd6d]"
                  >
                    <MapPin size={15} />
                    <span>Como Chegar (Google Maps)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: DÚVIDAS FREQUENTES (FAQ)                        */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">ESCLARECIMENTOS & TRANSPARÊNCIA</p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5c554b] sm:text-base">
                Tire suas principais dúvidas sobre nosso modelo de atendimento, honorários e prazos.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-[#ebe4d8] bg-white transition-all hover:border-[#bd8028]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-serif text-base sm:text-lg font-bold text-[#14110d] transition-colors hover:text-[#8c4f08] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8] text-[#8c4f08]">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-[#ebe4d8]/70 px-5 pb-6 pt-4 sm:px-6 text-xs sm:text-sm leading-relaxed text-[#5c554b]"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom FAQ CTA */}
            <div className="mt-10 text-center">
              <p className="text-xs text-[#5c554b]">
                Tem alguma dúvida específica sobre a sua demanda jurídica?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Laura! Tenho uma dúvida sobre meu caso e gostaria de conversar com você.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#8c4f08] underline decoration-[#bd8028] hover:text-[#14110d] text-xs sm:text-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Converse diretamente com a advogada no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: BANNER DE CONTATO / CTA FINAL (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#0a0806] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#bd8028]/40 bg-gradient-to-b from-[#120e0b] to-[#0a0806] p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#bd8028]/12 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#f7cd6d]/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f7cd6d]/30 bg-[#f7cd6d]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f7cd6d]">
                    <span className="size-1.5 rounded-full bg-[#f7cd6d] animate-pulse" />
                    ATENDIMENTO PRIORITÁRIO & DISCRETO
                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Proteja Seus Direitos e Seu Futuro com Quem Realmente Luta por Você.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe4d8] sm:text-base">
                    Não deixe seu benefício do INSS, seu tratamento de saúde ou seus direitos familiares à mercê do tempo. Agende hoje mesmo sua consulta com a Dra. Laura Melo Lopes e tenha uma orientação segura, clara e altamente resolutiva.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#ebe4d8]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f7cd6d]" />
                      <span>Atendimento seguro e clareza nas orientações</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f7cd6d]" />
                      <span>Sigilo profissional irrestrito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f7cd6d]" />
                      <span>Sede na Rua Monsenhor Mário, 405 · Carmo do Rio Claro · MG</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de agendar uma consulta jurídica especializada com você.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full text-center"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Iniciar Atendimento no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#bd8028]/50 bg-[#1a1612] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f7cd6d] transition-all hover:bg-[#bd8028] hover:text-[#0a0806]"
                  >
                    <Phone size={15} />
                    <span>Ligar: {PHONE_DISPLAY}</span>
                  </a>

                  <p className="text-center text-[10px] text-[#ebe4d8]/60 mt-1">
                    Atendimento Presencial com Hora Marcada e On-line em Todo o País
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER (SOFISTICADO, COMPLETO & 100% LIMPO)              */}
        {/* ======================================================== */}
        <footer className="border-t border-[#241e18] bg-[#0a0806] pt-16 pb-12 text-[#ebe4d8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Col 1: Brand & Logo */}
              <div>
                <a href="#" className="inline-block transition-opacity hover:opacity-90">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Adv. Laura Melo Lopes — Advocacia & Consultoria Jurídica"
                    width={300}
                    height={80}
                    className="h-16 sm:h-18 w-auto object-contain"
                    unoptimized
                  />
                </a>
                <p className="mt-4 text-xs leading-relaxed text-[#ebe4d8]/70">
                  Advocacia de excelência em Carmo do Rio Claro - MG e em todo o Brasil. Direito Previdenciário (INSS), Direito Médico e da Saúde, Defesa Criminal, Família e Sucessões e Consultoria Civil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#bd8028]/40 bg-[#1a1612] text-[#f7cd6d] transition-colors hover:bg-[#bd8028] hover:text-[#0a0806]"
                    aria-label="Instagram Adv. Laura Melo Lopes"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#bd8028]/40 bg-[#1a1612] text-[#f7cd6d] transition-colors hover:bg-[#bd8028] hover:text-[#0a0806]"
                    aria-label="WhatsApp Adv. Laura Melo Lopes"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#bd8028]/40 bg-[#1a1612] text-[#f7cd6d] transition-colors hover:bg-[#bd8028] hover:text-[#0a0806]"
                    aria-label="Avaliações no Google Adv. Laura Melo Lopes"
                  >
                    <GoogleIcon size={16} />
                  </a>
                  <a
                    href={BIOSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 px-2.5 items-center justify-center rounded-lg border border-[#bd8028]/40 bg-[#1a1612] text-[#f7cd6d] text-[10px] font-bold uppercase tracking-wider transition-colors hover:bg-[#bd8028] hover:text-[#0a0806]"
                    aria-label="Bio Site Adv. Laura Melo Lopes"
                  >
                    Bio Site
                  </a>
                </div>
              </div>

              {/* Col 2: Áreas de Atuação */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Áreas de Atuação
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-[#ebe4d8]/70">
                  <li>
                    <a href="#servicos" className="hover:text-[#f7cd6d] transition-colors">
                      Direito Previdenciário (INSS)
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7cd6d] transition-colors">
                      Direito Médico & Negativas de Saúde
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7cd6d] transition-colors">
                      Direito Criminal & Defesa Penal
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7cd6d] transition-colors">
                      Família, Divórcios & Inventários
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7cd6d] transition-colors">
                      Direito Civil & Contratos Estratégicos
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7cd6d] transition-colors">
                      Resolução Extrajudicial & Mediação
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Links Rápidos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Navegação Rápida
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-[#ebe4d8]/70">
                  <li>
                    <a href="#sobre" className="hover:text-[#f7cd6d] transition-colors">
                      Sobre a Dra. Laura Melo Lopes
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-[#f7cd6d] transition-colors">
                      Pilares & Reputação 5,0 ★
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-[#f7cd6d] transition-colors">
                      Avaliações no Google (10 Avaliações)
                    </a>
                  </li>
                  <li>
                    <a href="#sede" className="hover:text-[#f7cd6d] transition-colors">
                      Escritório em Carmo do Rio Claro - MG
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-[#f7cd6d] transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-[#f7cd6d] transition-colors">
                      Contato & WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4: Sede & Contatos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Sede & Atendimento
                </p>
                <ul className="mt-4 space-y-3 text-xs text-[#ebe4d8]/70">
                  <li className="flex items-start gap-2">
                    <MapPin size={15} className="text-[#f7cd6d] shrink-0 mt-0.5" />
                    <span>{ADDRESS_CARMO}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={15} className="text-[#f7cd6d] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={15} className="text-[#f7cd6d] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={15} className="text-[#f7cd6d] shrink-0" />
                    <span>Seg. a Sex. das 08:00 às 18:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <InstagramIcon size={15} className="text-[#f7cd6d] shrink-0" />
                    <span>Instagram: {INSTAGRAM_HANDLE}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Legal Notice & Copyright */}
            <div className="mt-12 border-t border-[#241e18] pt-8 text-center text-[11px] text-[#ebe4d8]/50">
              <p>
                © {new Date().getFullYear()} {BRAND_LABEL} (OAB/MG 248.197). Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Atuação em estrita conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* MODAL DE DETALHES DA ÁREA DE ATUAÇÃO                     */}
        {/* ======================================================== */}
        <AnimatePresence>
          {selectedPractice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPractice(null)}
                className="absolute inset-0 bg-[#0a0806]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#bd8028]/50 bg-white p-6 sm:p-8 shadow-2xl text-[#14110d]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8] text-[#5c554b] hover:text-[#14110d] hover:border-[#bd8028] cursor-pointer"
                  aria-label="Fechar janela"
                >
                  <X size={18} />
                </button>

                {/* Modal Content */}
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#bd8028]/15 text-[#8c4f08]">
                    <selectedPractice.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#a26417]">
                      Área de Atuação
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#14110d]">
                      {selectedPractice.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs font-semibold text-[#8c4f08] uppercase tracking-wider">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5c554b]">
                  {selectedPractice.details}
                </p>

                <div className="mt-6">
                  <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#14110d]">
                    Principais Procedimentos e Atuação Especializada:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#14110d]">
                    {selectedPractice.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-[#bd8028]"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#ebe4d8]">
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar sobre {selectedPractice.title}</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="rounded-lg border border-[#ebe4d8] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#5c554b] hover:bg-[#fdfbf7] hover:text-[#14110d] cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* BOTÃO FLUTUANTE DE WHATSAPP (ACESSIBILIDADE RÁPIDA)       */}
        {/* ======================================================== */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href={getWhatsAppUrl("Olá, Dra. Laura! Gostaria de agendar uma consulta jurídica especializada com você.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#fdf2cf] bg-gradient-to-r from-[#a26417] via-[#dba54c] to-[#bd8028] p-3.5 sm:px-5 sm:py-3.5 text-[#0a0806] font-extrabold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_28px_-4px_rgba(189,128,40,0.6)] cursor-pointer"
            aria-label="Falar com Adv. Laura Melo Lopes no WhatsApp"
          >
            <WhatsAppIcon size={22} className="text-[#0a0806]" />
            <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold text-[#0a0806]">
              Falar com a Advogada
            </span>
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
