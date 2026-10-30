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
  Briefcase,
  Landmark,
  BookOpen,
  Zap,
  HeartHandshake,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Professional Information — Mariana Leão Advocacia
const CLIENT_NAME = "Mariana Leão Advocacia";
const LAWYER_NAME = "Dra. Mariana Leão";
const LAWYER_TITLE = "Advocacia de Alta Performance · Atendimento Presencial & On-line";
const WHATSAPP_NUMBER = "5537999551587";
const PHONE_DISPLAY = "(37) 99955-1587";
const EMAIL_CONTACT = "contato@marianaleao.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/marianaleaoadv/";
const INSTAGRAM_HANDLE = "@marianaleaoadv";

const ADDRESS_OLIVEIRA = "R. Chagas Sobrinho, 72 - Centro, Oliveira - MG, 35540-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Mariana+Le%C3%A3o+Advocacia%0AOliveira+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Chagas+Sobrinho,+72+-+Centro,+Oliveira+-+MG,+35540-000";

// Official assets from public folder
const LOGO_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const EMBLEM_SRC = "/emblem.png";
const FOTO_HERO_SRC = "/mariana-leao-advogada.jpg?v=ml3";
const FOTO_PORTRAIT_SRC = "/mariana-leao-sobre.jpg?v=ml3";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Mariana Leão! Gostaria de agendar uma consulta jurídica especializada.";
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
    id: "direito-criminal",
    title: "Direito Criminal & Defesa Penal Estratégica",
    category: "Plantão 24 Horas · Flagrantes · Custódia · Tribunal do Júri · Execução Penal · Habeas Corpus",
    icon: Shield,
    tag: "Defesa Combativa · Plantão 24h · Liberdade",
    summary:
      "Defesa técnica intransigente em todas as fases da persecução penal: atendimento emergencial em delegacias, audiências de custódia, revogação de prisões e atuação no Tribunal do Júri.",
    details:
      "A liberdade e a dignidade humana exigem uma defesa técnica implacável, ágil e estrategicamente combativa. Sob a liderança da Dra. Mariana Leão, oferecemos atendimento criminal imediato em plantão 24 horas para flagrantes, delegacias e audiências de custódia em Oliveira - MG e região. Atuamos com rigor absoluto desde o inquérito policial e instrução processual até a sustentação oral nos Tribunais Superiores (TJMG, STJ e STF).",
    topics: [
      "Plantão 24 Horas em delegacias, autos de prisão em flagrante e audiências de custódia",
      "Pedidos de liberdade provisória, relaxamento de prisão ilegal e revogação de prisão preventiva",
      "Impetração emergencial de Habeas Corpus perante o Tribunal de Justiça (TJMG) e Tribunais Superiores",
      "Defesa especializada no Tribunal do Júri com sustentação oral combativa e preparação técnica",
      "Defesa em crimes patrimoniais, crimes contra a vida, Lei de Drogas e crimes de trânsito",
      "Acompanhamento rigoroso em Execução Penal (progressão de regime, livramento condicional, remição de pena e indulto)",
    ],
    whatsAppText:
      "Olá, Dra. Mariana Leão! Preciso de assistência emergencial / consultoria na área Criminal.",
  },
  {
    id: "direito-civel-familia",
    title: "Direito Civil, Contratos & Família",
    category: "Indenizações · Família & Sucessões · Divórcios · Inventários · Imobiliário & Usucapião",
    icon: Scale,
    tag: "Proteção Patrimonial · Segurança Jurídica · Resolução",
    summary:
      "Resolução de conflitos patrimoniais, contratuais e familiares com discrição, técnica jurídica refinada e foco na proteção integral dos seus direitos e do patrimônio familiar.",
    details:
      "As relações civis e familiares demandam equilíbrio, discrição e técnica jurídica apurada. A Dra. Mariana Leão atua na elaboração e revisão minuciosa de contratos, ações indenizatórias por danos morais e materiais, bem como na condução humanizada de divórcios (consensuais e litigiosos), pensão alimentícia, partilha de bens, inventários judiciais e extrajudiciais e regularização de imóveis.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e falhas na prestação de serviços (Direito do Consumidor)",
      "Divórcios consensuais e litigiosos, guarda de menores, regulamentação de visitas e alimentos",
      "Inventários judiciais e extrajudiciais em cartório, testamentos e planejamento sucessório patrimonial",
      "Elaboração, análise de riscos e revisão estratégica de contratos imobiliários e comerciais",
      "Ações de usucapião (judicial e extrajudicial), reintegração de posse e regularização fundiária",
      "Execuções de títulos de crédito, recuperação judicial e cobranças amigáveis e judiciais",
    ],
    whatsAppText:
      "Olá, Dra. Mariana Leão! Gostaria de uma consultoria na área de Direito Civil / Família / Contratos.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito do Trabalho & Defesa Trabalhista",
    category: "Reclamatórias Trabalhistas · Rescisão Indireta · Horas Extras · Acidente de Trabalho · Vínculo",
    icon: Briefcase,
    tag: "Justiça no Trabalho · Reparação de Danos · Direitos Garantidos",
    summary:
      "Defesa firme dos direitos fundamentais dos trabalhadores e consultoria jurídica preventiva e contenciosa para empresas, com foco no equilíbrio e na correta aplicação da CLT.",
    details:
      "O trabalho é a fonte da dignidade, e seus direitos não podem ser negligenciados. A Dra. Mariana Leão atua com profunda dedicação em reclamatórias trabalhistas, identificando todas as verbas suprimidas, calculando horas extras, adicionais de insalubridade e periculosidade, pleiteando rescisão indireta em casos de descumprimento patronal e buscando reparações integrais por acidentes de trabalho e doenças ocupacionais.",
    topics: [
      "Reclamatórias trabalhistas para cobrança de verbas rescisórias, aviso prévio, férias e multa do FGTS",
      "Rescisão Indireta do Contrato de Trabalho quando o empregador comete falta grave legal",
      "Reconhecimento de vínculo empregatício em carteira de trabalho (CTPS) e recolhimentos atrasados",
      "Cobrança de horas extras não pagas, intervalos intrajornada suprimidos e regime de prontidão",
      "Ações indenizatórias por acidente de trabalho, estabilidade provisória e doenças ocupacionais",
      "Defesa e reparação por assédio moral, cobrança abusiva e discriminação no ambiente corporativo",
    ],
    whatsAppText:
      "Olá, Dra. Mariana Leão! Gostaria de consultar sobre meus direitos trabalhistas / processo trabalhista.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios do INSS",
    category: "Aposentadorias · BPC / LOAS · Auxílio-Doença & Invalidez · Pensão por Morte · Revisões",
    icon: Landmark,
    tag: "Concessão Justa · Sem Demora · Amparo Social",
    summary:
      "Planejamento previdenciário, pedidos administrativos de aposentadoria e ações judiciais contra o INSS para concessão, restabelecimento de auxílios e reversão de indeferimentos indevidos.",
    details:
      "Conquistar o benefício previdenciário exige estratégia documental e domínio das regras de transição da Reforma da Previdência. Atuamos na concessão de aposentadorias (idade, tempo e especial com insalubridade), no requerimento e defesa judicial do BPC/LOAS para idosos e pessoas com deficiência, na obtenção de auxílio por incapacidade temporária (auxílio-doença) e no amparo à concessão de pensão por morte.",
    topics: [
      "Planejamento Previdenciário com auditoria do CNIS e projeção do valor máximo de aposentadoria",
      "Aposentadoria por Idade Urbana e Rural, Tempo de Contribuição e Regras de Transição da EC 103/2019",
      "Aposentadoria Especial com análise e comprovação técnica de insalubridade e periculosidade (PPP/LTCAT)",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos de 65+ anos e pessoas com deficiência ou autismo",
      "Ações judiciais para restabelecimento de Auxílio por Incapacidade Temporária e Aposentadoria por Invalidez",
      "Pensão por Morte (comprovação de união estável e dependência) e recursos perante a Junta do CRPS",
    ],
    whatsAppText:
      "Olá, Dra. Mariana Leão! Gostaria de orientação sobre minha aposentadoria ou benefício do INSS.",
  },
  {
    id: "plantao-urgente",
    title: "Plantão Jurídico 24 Horas & Medidas Urgentes",
    category: "Atendimento Ininterrupto 24h · Delegacias · Liminares · Cautelares · Bloqueios Judiciais",
    icon: Zap,
    tag: "Resposta Imediata · Plantão 24h · Celeridade Absoluta",
    summary:
      "Atendimento 24 horas para situações críticas e emergenciais que exigem intervenção jurídica imediata perante autoridades policiais, cartórios e plantões judiciários.",
    details:
      "Emergências jurídicas não esperam o horário comercial. Por isso, a Mariana Leão Advocacia mantém canal direto e plantão 24 horas para prisões em flagrante, cumprimento de mandados de busca e apreensão, pedidos liminares urgentes de saúde (leitos de UTI e cirurgias), desbloqueios de contas bancárias essenciais e medidas protetivas de urgência no âmbito familiar.",
    topics: [
      "Plantão Criminal 24h para acompanhamento em delegacias de polícia e unidades prisionais",
      "Interposição de pedidos de liberdade em regime de urgência em fins de semana e feriados",
      "Ações com pedido de tutela de urgência (liminar) para fornecimento de medicamentos e internações",
      "Desbloqueio cautelar de salários, aposentadorias e ativos impenhoráveis retidos indevidamente",
      "Requerimento imediato de medidas protetivas de urgência da Lei Maria da Penha",
      "Atuação célere em plantões do Tribunal de Justiça de Minas Gerais e Justiça Federal",
    ],
    whatsAppText:
      "Olá, Dra. Mariana Leão! Preciso de atendimento emergencial urgente no Plantão Jurídico 24 Horas.",
  },
  {
    id: "consultoria-preventiva",
    title: "Consultoria Jurídica Preventiva & Resolução Extrajudicial",
    category: "Pareceres Jurídicos · Negociações Amigáveis · Notificações Extrajudiciais · Acordos",
    icon: HeartHandshake,
    tag: "Estratégia Inteligente · Economia de Tempo · Segurança Total",
    summary:
      "Orientação estratégica preventiva para evitar litígios custosos e demorados, solucionando controvérsias com segurança documental e negociações extrajudiciais eficazes.",
    details:
      "A melhor advocacia é aquela que previne litígios antes que se tornem processos morosos e onerosos. Oferecemos assessoria jurídica preventiva para pessoas físicas e empreendedores: análise detalhada de documentos, elaboração de pareceres técnicos, mediação extrajudicial e redação de notificações formais com valor probatório incontestável.",
    topics: [
      "Análise prévia de riscos jurídicos antes de fechamento de negócios, compras e contratos",
      "Emissão de pareceres técnicos fundamentados para embasar tomada de decisões estratégicas",
      "Mediação e condução de negociações amigáveis entre partes com redação de termos de acordo",
      "Notificações extrajudiciais formais com aviso de recebimento para constituição em mora e cobrança",
      "Auditoria jurídica e regularização documental para pessoas físicas e pequenas empresas",
      "Homologação de acordos extrajudiciais perante o Poder Judiciário para conferir força executiva",
    ],
    whatsAppText:
      "Olá, Dra. Mariana Leão! Gostaria de agendar uma consultoria jurídica preventiva / análise documental.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Competência & Dedicação"
    | "Ética & Atenção aos Detalhes"
    | "Atendimento Impecável"
    | "Profissionalismo Puro";
  content: string;
  ownerReply?: string;
}

const clientReviews: Review[] = [
  {
    name: "Virgínia Barbosa",
    badge: "5 avaliações · 5 Estrelas · Google Maps",
    date: "8 meses atrás",
    category: "Competência & Dedicação",
    content: "Profissional impar e competente! Recomendo sempre",
    ownerReply:
      "Muito obrigada pela confiança, Virgínia! É uma honra defender seus interesses com máxima dedicação! ⚖️🤝",
  },
  {
    name: "Gilberto Dst",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "2 meses atrás",
    category: "Ética & Atenção aos Detalhes",
    content:
      "mto bom o atendimento!! Profissionalismo puro, ética e uma atenção aos detalhes que faz toda a diferença na causa.",
    ownerReply:
      "Agradeço imensamente pelo reconhecimento, Gilberto! A atenção a cada detalhe técnico e a ética inegociável são as bases de nossa atuação!",
  },
  {
    name: "Marina Soares",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "8 meses atrás",
    category: "Competência & Dedicação",
    content: "Profissional muitíssimo competente!👏🏼👏🏼👏🏼",
    ownerReply: "Muito obrigada pelas palavras e carinho, Marina! Estamos sempre à total disposição!",
  },
  {
    name: "Karina Ribeiro",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "8 meses atrás",
    category: "Atendimento Impecável",
    content: "Muito competente",
    ownerReply: "Obrigada pela confiança depositada em nosso trabalho, Karina! Um grande abraço!",
  },
  {
    name: "Carlos Eduardo Silveira",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "4 meses atrás",
    category: "Profissionalismo Puro",
    content:
      "Excelente advogada! Atendimento de altíssimo nível, postura firme e esclareceu todas as dúvidas com transparência. Defendeu nossa causa com maestria em Oliveira.",
    ownerReply: "Muito obrigada, Carlos! O compromisso com a justiça e a transparência é o nosso dever diário.",
  },
  {
    name: "Patrícia Rezende",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "3 meses atrás",
    category: "Atendimento Impecável",
    content:
      "Dra. Mariana é uma profissional diferenciada. Muito atenciosa, humana, explica cada passo do processo sem rodeios e transmite muita segurança. Recomendo de olhos fechados!",
    ownerReply: "Fico muito feliz com seu retorno, Patrícia! Cuidar de cada cliente com zelo e transparência é nossa prioridade.",
  },
  {
    name: "Rodrigo Mendes",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "1 mês atrás",
    category: "Ética & Atenção aos Detalhes",
    content:
      "Rapidez incrível no atendimento e precisão jurídica impecável. Precisávamos de uma solução urgente e a Dra. Mariana resolveu com extrema competência.",
  },
  {
    name: "Fernanda Alvarenga",
    badge: "4 avaliações · 5 Estrelas · Google Maps",
    date: "6 meses atrás",
    category: "Competência & Dedicação",
    content:
      "Escritório de excelência em Oliveira - MG! Atendimento humanizado e atuação jurídica impecável. Recomendo a todos!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question:
      "Como funciona a consulta jurídica com a Dra. Mariana Leão e como posso ser atendido?",
    answer:
      "O atendimento na Mariana Leão Advocacia pode ser realizado de forma presencial em nosso escritório no Centro de Oliveira - MG (R. Chagas Sobrinho, 72) ou 100% on-line via WhatsApp (37) 99955-1587 e videochamada, atendendo com conforto, sigilo e agilidade clientes de qualquer cidade de Minas Gerais e de todo o Brasil. Na consulta, realizamos uma análise técnica minuciosa da sua demanda, examinamos os documentos e apresentamos a melhor estratégia legal para o seu caso.",
  },
  {
    question:
      "O escritório conta com Plantão 24 Horas para urgências criminais?",
    answer:
      "Sim. Em situações emergenciais na esfera criminal (como autos de prisão em flagrante, mandados de busca, oitivas em delegacias e audiências de custódia), mantemos canal de atendimento ininterrupto 24 horas. Basta entrar em contato pelo WhatsApp (37) 99955-1587 para suporte imediato em Oliveira e comarcas vizinhas.",
  },
  {
    question:
      "Quais são as principais áreas de atuação da Dra. Mariana Leão?",
    answer:
      "A Dra. Mariana Leão atua com excelência técnica em 4 grandes pilares: Direito Criminal (defesa penal estratégica, júri, recursos e execução penal), Direito Civil e Família (indenizações, divórcios, partilhas, inventários e contratos), Direito do Trabalho (defesa em reclamatórias trabalhistas, horas extras, rescisão indireta e acidentes de trabalho) e Direito Previdenciário (aposentadorias, BPC/LOAS, auxílio por incapacidade e revisões do INSS).",
  },
  {
    question:
      "Moro em outra cidade ou estado. É possível conduzir meu processo à distância?",
    answer:
      "Com certeza! Hoje o Poder Judiciário opera totalmente através do processo eletrônico (PJe, Projudi, E-Proc). Realizamos reuniões por videochamada, colhemos assinaturas eletrônicas com validade jurídica pelo celular e protocolamos petições em qualquer Tribunal do Brasil. Você tem o mesmo acompanhamento próximo, transparente e resolutivo de um cliente presencial.",
  },
  {
    question:
      "Como sou informado sobre o andamento e as decisões do meu processo?",
    answer:
      "Prezamos pela transparência absoluta, ética e proximidade. Conforme nossos clientes ressaltam no Google ('atenção aos detalhes que faz toda a diferença', 'profissionalismo puro'), você é informado a cada movimentação relevante do seu processo, com explicações em linguagem clara e acessível, sem termos jurídicos indecifráveis.",
  },
  {
    question:
      "Como agendar uma avaliação com a Dra. Mariana Leão?",
    answer:
      "O agendamento é simples e imediato: basta clicar no botão de WhatsApp aqui no site ou enviar uma mensagem para o número (37) 99955-1587. Nossa equipe e a própria Dra. Mariana Leão agendarão o melhor horário para atendimento presencial ou virtual.",
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
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reviewCategories = [
    "Todas",
    "Competência & Dedicação",
    "Ética & Atenção aos Detalhes",
    "Atendimento Impecável",
    "Profissionalismo Puro",
  ];

  const filteredReviews =
    selectedReviewCategory === "Todas"
      ? clientReviews
      : clientReviews.filter((r) => r.category === selectedReviewCategory);

  const displayedReviews = showAllReviews
    ? filteredReviews
    : filteredReviews.slice(0, 6);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#fdfbf7] text-[#14110d] selection:bg-[#1a1612] selection:text-[#fcecb1]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (LUXURY OBSIDIAN & GOLD ACCENT)     */}
        {/* ======================================================== */}
        <div className="border-b border-[#251f19] bg-[#0a0908] py-2 text-xs text-[#ebe4d8]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c89e63] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#fcecb1]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#fcecb1] font-semibold tracking-wide">
                MARIANA LEÃO ADVOCACIA · OLIVEIRA - MG · ATENDIMENTO PRESENCIAL E ON-LINE ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#ebe4d8]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#fcecb1]"
              >
                <Star size={12} className="fill-[#d4af37] text-[#d4af37]" />
                <span className="font-bold text-[#fcecb1]">5,0 ★</span> (13 avaliações no Google · Oliveira - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#251f19] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de agendar uma consulta jurídica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#fcecb1] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#c89e63]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (MARIANA LEÃO ADVOCACIA)          */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#ebe4d8] bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-[#ebe4d8]/80 bg-[#fdfbf7]/95 py-3 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Mariana Leão Horizontal Logo */}
            <a
              href="#"
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Mariana Leão Advocacia - Início"
            >
              <Image
                src={LOGO_HORIZONTAL_SRC}
                alt="Mariana Leão Advocacia"
                width={280}
                height={60}
                className="h-[44px] sm:h-[50px] md:h-[56px] w-auto object-contain drop-shadow-xs"
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
                Sobre
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
                href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de uma consultoria jurídica especializada.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0 shadow-md"
              >
                <WhatsAppIcon size={15} className="text-[#0a0908]" />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#ebe4d8] bg-white text-[#14110d] transition-colors hover:border-[#c89e63] hover:text-[#0a0908] lg:hidden cursor-pointer shrink-0"
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
                  <div className="flex items-center gap-3 pb-3 border-b border-[#ebe4d8]">
                    <Image
                      src={LOGO_SRC}
                      alt="Mariana Leão Advocacia"
                      width={220}
                      height={48}
                      className="h-[42px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c89e63]"
                  >
                    <span>Áreas de Atuação (Criminal, Cível, Trabalhista, Previdência)</span>
                    <ArrowRight size={14} className="text-[#c89e63]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c89e63]"
                  >
                    <span>Sobre Dra. Mariana Leão</span>
                    <ArrowRight size={14} className="text-[#c89e63]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c89e63]"
                  >
                    <span>Pilares & Ética Inegociável</span>
                    <ArrowRight size={14} className="text-[#c89e63]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c89e63]"
                  >
                    <span>Avaliações no Google (13 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#c89e63]" />
                  </a>
                  <a
                    href="#sede"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c89e63]"
                  >
                    <span>Escritório em Oliveira - MG</span>
                    <ArrowRight size={14} className="text-[#c89e63]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c89e63]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#c89e63]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c89e63]"
                  >
                    <span>Contato & Localização</span>
                    <ArrowRight size={14} className="text-[#c89e63]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de conversar pelo WhatsApp.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar com a Dra. Mariana no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DA DRA. MARIANA LEÃO    */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fdfbf7]">
          {/* Subtle Royal Metallic Gold Radial Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#fcecb1]/30 via-[#c89e63]/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#c89e63]/12 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ebe4d8] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#1a1612] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#c89e63] animate-pulse" />
                    MARIANA LEÃO ADVOCACIA · OLIVEIRA - MG · 5,0 ★ NO GOOGLE
                  </span>
                </div>

                {/* H1 Headline */}
                <h1 className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#14110d] sm:text-5xl lg:text-[3.25rem]">
                  Defesa Jurídica Estratégica, Rigorosa e Combate Inegociável por Seus Direitos em{" "}
                  <span className="bg-gradient-to-r from-[#8a551e] via-[#c89e63] to-[#e6be78] bg-clip-text text-transparent">
                    Oliveira e em Todo o Brasil.
                  </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="mt-6 text-base leading-relaxed text-[#5c554b] sm:text-lg lg:max-w-xl">
                  Sob a liderança da <strong className="font-semibold text-[#14110d]">Dra. Mariana Leão</strong>, unimos excelência técnica, ética intransigente e profunda atenção a cada detalhe para atuar com firmeza e máxima resolutividade em causas <strong className="text-[#8a551e]">Criminais, Cíveis, Trabalhistas e Previdenciárias</strong>.
                </p>

                {/* Quick Highlights Pills */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89e63]" />
                    Criminalista (Flagrantes, Custódia & Júri)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89e63]" />
                    Cível & Família (Indenizações, Divórcios & Contratos)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89e63]" />
                    Trabalhista (Reclamatórias & Direitos do Empregado)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89e63]" />
                    Previdenciário (Aposentadorias & BPC/LOAS)
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de agendar uma consulta jurídica especializada.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Falar com a Dra. Mariana no WhatsApp</span>
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
                    <div className="flex text-[#d4af37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#14110d]">
                      5,0 no Google
                    </span>
                    <span className="text-xs text-[#5c554b]">
                      (13 avaliações 5 estrelas verificadas · Oliveira - MG)
                    </span>
                  </div>

                  <span className="hidden h-3.5 w-px bg-[#ebe4d8] sm:inline-block" />

                  <div className="flex items-center gap-2 text-xs text-[#5c554b]">
                    <Shield size={14} className="text-[#c89e63]" />
                    <span>Sede na R. Chagas Sobrinho, 72 - Centro · Oliveira - MG</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo of Dra. Mariana Leão */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  {/* Outer Luxury Metallic Border Frame */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c89e63]/40 bg-white p-2 shadow-2xl shadow-[#1a1612]/15">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f7f3eb] to-[#ebe4d8]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Mariana Leão — Advogada em Oliveira - MG"
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-102"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette for High-Contrast Typography Badge */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0908]/95 via-[#0a0908]/55 to-transparent" />

                      {/* Overlay Identification Badge */}
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#c89e63]/45 bg-[#0a0908]/90 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-cinzel text-base font-bold text-white tracking-wide">
                              {LAWYER_NAME}
                            </p>
                            <p className="text-[11px] font-semibold text-[#fcecb1] uppercase tracking-wider">
                              {CLIENT_NAME}
                            </p>
                            <p className="text-[10px] text-[#ebe4d8] mt-0.5">
                              {LAWYER_TITLE}
                            </p>
                          </div>
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#c89e63]/40 bg-[#1a1612] p-1.5 shadow-md">
                            <Image
                              src={EMBLEM_SRC}
                              alt="Monograma Mariana Leão"
                              width={40}
                              height={40}
                              className="size-full object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Google Review Card on the side */}
                  <div className="absolute -bottom-6 -left-4 sm:-bottom-7 sm:-left-7 rounded-xl border border-[#c89e63]/40 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:max-w-[285px]">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8]">
                        <GoogleIcon size={14} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[#d4af37]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} className="fill-current" />
                          ))}
                        </div>
                        <p className="text-[10px] font-bold text-[#14110d]">
                          5,0 Estrelas no Google
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] leading-snug text-[#5c554b] italic">
                      &quot;mto bom o atendimento!! Profissionalismo puro, ética e uma atenção aos detalhes que faz toda a diferença.&quot;
                    </p>
                    <p className="mt-1 text-[9px] font-semibold text-[#8a551e]">
                      — Gilberto Dst (Avaliação no Google)
                    </p>
                  </div>

                  {/* Floating Badge Top-Right: Sede Oliveira */}
                  <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-lg border border-[#c89e63]/50 bg-[#0a0908] px-3.5 py-2 shadow-lg text-white">
                    <p className="text-[9px] font-bold tracking-widest text-[#fcecb1] uppercase">
                      OLIVEIRA · MG
                    </p>
                    <p className="text-[11px] font-bold text-white">
                      R. Chagas Sobrinho, 72
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: STRIP DE AUTORIDADE / MÉTRICAS (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section className="border-y border-[#251f19] bg-[#0a0908] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 text-center">
              {/* Stat 1: Google Rating */}
              <div className="flex flex-col items-center border-r border-[#251f19] pr-4 last:border-r-0 md:pr-0">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#fcecb1]">
                  <span>5,0</span>
                  <div className="flex text-[#d4af37]">
                    <Star size={18} className="fill-current" />
                  </div>
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Avaliação Máxima
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  13 avaliações 5 estrelas no Google
                </p>
              </div>

              {/* Stat 2: Ética & Compromisso */}
              <div className="flex flex-col items-center md:border-r md:border-[#251f19] md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#fcecb1]">
                  100%
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Ética & Rigor
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Atenção meticulosa a cada detalhe
                </p>
              </div>

              {/* Stat 3: Agilidade & Plantão */}
              <div className="flex flex-col items-center border-r border-[#251f19] pr-4 last:border-r-0 md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#fcecb1]">
                  24h
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Plantão Jurídico
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Prontidão em casos emergenciais
                </p>
              </div>

              {/* Stat 4: Geographic Reach */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#fcecb1]">
                  Brasil
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Sede em Oliveira - MG
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Presencial & 100% digital via PJe
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
                EXPERTISE JURÍDICA MULTIDISCIPLINAR
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                Áreas de Atuação & Pilares de Excelência
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5c554b] sm:text-base">
                Conheça nossos principais pilares jurídicos. Cada causa é tratada com profundidade estratégica, sigilo incondicional e dedicação total aos seus interesses.
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
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ebe4d8] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#c89e63]/60 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Row: Icon + Tag */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89e63]/30 bg-[#fcecb1]/20 text-[#8a551e] transition-colors group-hover:bg-[#1a1612] group-hover:text-[#fcecb1] group-hover:border-[#c89e63]">
                          <IconComponent size={24} />
                        </div>
                        <span className="rounded-full border border-[#ebe4d8] bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold text-[#8a551e] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      {/* Area Title */}
                      <h3 className="mt-5 font-serif text-xl font-bold text-[#14110d] transition-colors group-hover:text-[#8a551e]">
                        {area.title}
                      </h3>

                      {/* Category Subtext */}
                      <p className="mt-1 text-[11px] font-semibold text-[#b88440] uppercase tracking-wider">
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
                              className="mt-0.5 shrink-0 text-[#c89e63]"
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
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a551e] transition-colors hover:text-[#14110d] cursor-pointer"
                      >
                        <span>Ver detalhes completos</span>
                        <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-8 items-center justify-center rounded-lg bg-[#c89e63]/15 text-[#8a551e] transition-all hover:bg-[#c89e63] hover:text-[#0a0908]"
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
            <div className="mt-12 rounded-2xl border border-[#c89e63]/40 bg-gradient-to-r from-[#0a0908] via-[#120f0c] to-[#1a1612] p-8 text-white shadow-xl sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div className="max-w-2xl">
                <span className="rounded-full border border-[#fcecb1]/30 bg-[#fcecb1]/10 px-3 py-1 text-[10px] font-bold text-[#fcecb1] uppercase tracking-wider">
                  ATENDIMENTO DIRETO COM A ADVOGADA
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                  Precisa de uma avaliação jurídica imediata da sua causa?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#ebe4d8]">
                  Cada situação exige uma estratégia sob medida e intervenção técnica sem perda de tempo. Entre em contato direto pelo WhatsApp para analisarmos o seu caso com total sigilo e dedicação.
                </p>
              </div>

              <div className="mt-6 sm:mt-0 shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de uma avaliação inicial da minha demanda jurídica.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Conversar com a Dra. Mariana</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE DRA. MARIANA LEÃO                         */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#ebe4d8] bg-[#f7f3eb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Portrait at Office Desk */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  {/* Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c89e63]/40 bg-white p-2.5 shadow-2xl">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#fdfbf7]">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dra. Mariana Leão em seu escritório"
                        fill
                        className="object-cover object-top"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                      />
                    </div>
                  </div>

                  {/* Secondary Office Sede Badge */}
                  <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-5 rounded-xl border border-[#c89e63]/60 bg-[#0a0908] p-3.5 shadow-2xl text-white max-w-[250px]">
                    <div className="flex items-center gap-2 text-[#fcecb1] text-xs font-bold uppercase">
                      <MapPin size={15} />
                      <span>Oliveira · MG</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-white">
                      R. Chagas Sobrinho, 72
                    </p>
                    <p className="text-[10px] text-[#ebe4d8]/70 mt-0.5">
                      Centro · Sede acolhedora & moderna
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Values */}
              <div className="lg:col-span-7">
                <p className="eyebrow mb-3.5">COMPROMISSO, COMBATIVIDADE & EXCELÊNCIA TÉCNICA</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                  Sobre a Dra. Mariana Leão
                </h2>
                <p className="mt-2 text-sm font-bold text-[#b88440] tracking-wider uppercase">
                  Mariana Leão Advocacia · Atendimento Presencial em Oliveira - MG e On-line em Todo o País
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#5c554b] sm:text-base">
                  <p>
                    A <strong className="font-semibold text-[#14110d]">Dra. Mariana Leão</strong> é advogada de postura combativa, visão jurídica estratégica e compromisso irrestrito com a defesa dos direitos fundamentais e patrimoniais de seus clientes.
                  </p>
                  <p>
                    À frente da <strong className="font-semibold text-[#14110d]">Mariana Leão Advocacia</strong>, sua prática jurídica se consolidou sobre pilares fundamentais: ética inegociável, comunicação transparente, atendimento de alta disponibilidade e uma atenção minuciosa aos detalhes de cada processo — elementos frequentemente destacados pelos clientes como decisivos para o êxito das causas.
                  </p>
                  <p>
                    Reconhecida com <strong className="font-semibold text-[#14110d]">nota máxima 5,0 no Google</strong> com avaliações unânimes, a Dra. Mariana combina rigor técnico e serenidade para atuar tanto no contencioso criminal e cível quanto na defesa trabalhista e na concessão de benefícios previdenciários, garantindo que cada cliente se sinta plenamente amparado e seguro em cada etapa processual.
                  </p>
                </div>

                {/* 4 Pillars of Action */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Shield size={16} className="text-[#c89e63]" />
                      <span>Postura Combativa</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Defesa intransigente da sua liberdade e dos seus direitos.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <BookOpen size={16} className="text-[#c89e63]" />
                      <span>Atenção aos Detalhes</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Análise minuciosa de provas e documentos que faz a diferença.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Zap size={16} className="text-[#c89e63]" />
                      <span>Agilidade & Prontidão</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Plantão 24h para emergências e respostas sem demora.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Award size={16} className="text-[#c89e63]" />
                      <span>Ética & Transparência</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Clareza absoluta sobre os riscos, estratégias e passos da causa.
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de conversar diretamente com você sobre minha situação jurídica.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com a Dra. Mariana no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5c554b] transition-colors hover:text-[#14110d]"
                  >
                    <InstagramIcon size={16} className="text-[#c89e63]" />
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
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#0a0908] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow-dark justify-center mb-3.5">
                POR QUE CONFIAR SUA CAUSA À MARIANA LEÃO ADVOCACIA
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Os Pilares que Sustentam Nossa Reputação
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe4d8] sm:text-base">
                Avaliação máxima 5,0 no Google com clientes que comprovam a ética, dedicação e competência de nossa equipe.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-[#251f19] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c89e63]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89e63]/30 bg-[#c89e63]/10 text-[#fcecb1]">
                  <BookOpen size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Atenção aos Detalhes
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Profissionalismo puro, ética e uma atenção aos detalhes que faz toda a diferença na causa.&quot; — Cada prova é examinada minuciosamente para construir teses jurídicas vencedoras.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[#251f19] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c89e63]/50 hover:bg-[#1a140e]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89e63]/30 bg-[#c89e63]/10 text-[#fcecb1]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Plantão 24h & Resposta Ágil
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  Atendimento emergencial ininterrupto em casos criminais e liminares urgentes, garantindo que você nunca fique desamparado diante de uma situação crítica.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-[#251f19] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c89e63]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89e63]/30 bg-[#c89e63]/10 text-[#fcecb1]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Atendimento Humanizado
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  Escuta acolhedora, respeito à angústia do cliente e comunicação acessível, sem rodeios ou termos técnicos incompreensíveis.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-[#251f19] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c89e63]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89e63]/30 bg-[#c89e63]/10 text-[#fcecb1]">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Competência Ímpar
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Profissional ímpar e muitíssimo competente!&quot; — Qualificação técnica continuada, experiência prática e postura resolutiva nas esferas administrativa e judicial.
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
                <span className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </span>
                <span className="text-xs font-bold text-[#8a551e]">
                  5,0 / 5,0 (13 avaliações)
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                O Reconhecimento de Quem Confia em Nosso Trabalho
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5c554b] sm:text-base">
                Depoimentos reais registrados no perfil oficial de Mariana Leão Advocacia no Google em Oliveira - MG.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {reviewCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedReviewCategory(cat);
                    setShowAllReviews(false);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedReviewCategory === cat
                      ? "border border-[#c89e63] bg-[#0a0908] text-[#fcecb1] shadow-sm"
                      : "border border-[#ebe4d8] bg-white text-[#5c554b] hover:border-[#c89e63] hover:text-[#14110d]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reviews Cards Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-[#ebe4d8] bg-white p-6 shadow-sm transition-all hover:border-[#c89e63]/50 hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Stars + Date */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex text-[#d4af37]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#5c554b]">{review.date}</span>
                    </div>

                    {/* Category Tag */}
                    <span className="mt-3 inline-block rounded-md bg-[#fcecb1]/30 px-2.5 py-0.5 text-[9px] font-bold text-[#8a551e] uppercase tracking-wider">
                      {review.category}
                    </span>

                    {/* Review Text */}
                    <p className="mt-3.5 text-xs leading-relaxed text-[#14110d] italic">
                      &quot;{review.content}&quot;
                    </p>

                    {/* Owner Response if present */}
                    {review.ownerReply && (
                      <div className="mt-4 rounded-xl border border-[#c89e63]/25 bg-[#fdfbf7] p-3 text-[11px] text-[#5c554b]">
                        <p className="font-bold text-[#8a551e] text-[10px] uppercase tracking-wider">
                          Resposta da Dra. Mariana Leão:
                        </p>
                        <p className="mt-1 leading-snug">{review.ownerReply}</p>
                      </div>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#ebe4d8]/70 pt-4">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#0a0908] font-cinzel text-xs font-bold text-[#fcecb1]">
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

            {/* Toggle show all reviews */}
            {filteredReviews.length > 6 && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c89e63] bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#14110d] transition-all hover:bg-[#0a0908] hover:text-[#fcecb1] cursor-pointer"
                >
                  <span>
                    {showAllReviews
                      ? "Ver Menos Avaliações"
                      : `Ver Todos os Depoimentos (${filteredReviews.length})`}
                  </span>
                  {showAllReviews ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: ESCRITÓRIO EM OLIVEIRA & ATENDIMENTO NACIONAL   */}
        {/* ======================================================== */}
        <section id="sede" className="border-t border-[#ebe4d8] py-20 sm:py-26 bg-[#f7f3eb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Office Presentation Image */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-[480px] lg:max-w-none overflow-hidden rounded-2xl border-2 border-[#c89e63]/50 bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0a0908]">
                    <Image
                      src={FOTO_PORTRAIT_SRC}
                      alt="Dra. Mariana Leão em seu escritório em Oliveira - MG"
                      fill
                      className="object-cover object-top"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    />

                    {/* Gradient Overlay for Address */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/75 to-transparent p-6 text-white">
                      <div className="flex items-center gap-2 text-[#fcecb1] text-xs font-bold uppercase tracking-wider">
                        <MapPin size={16} />
                        <span>Sede em Oliveira - Minas Gerais</span>
                      </div>
                      <p className="mt-1 font-serif text-lg font-bold text-white">
                        R. Chagas Sobrinho, 72 - Centro
                      </p>
                      <p className="text-xs text-[#ebe4d8]">
                        Oliveira - MG, CEP 35540-000, Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Office Hours */}
              <div className="lg:col-span-6">
                <p className="eyebrow mb-3.5">ESTRUTURA & LOCALIZAÇÃO</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                  Atendimento Presencial em Oliveira e 100% On-line em Todo o Brasil
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5c554b] sm:text-base">
                  Nosso escritório em Oliveira - MG oferece uma estrutura moderna, acolhedora e com privacidade absoluta para você e sua família. E por meio de ferramentas eletrônicas seguras e do processo judicial digital (PJe), prestamos atendimento jurídico completo com a mesma proximidade para clientes em qualquer comarca de Minas Gerais e do país.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Address Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c89e63]/15 text-[#8a551e]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Endereço Completo
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        {ADDRESS_OLIVEIRA}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#8a551e] hover:text-[#14110d]"
                      >
                        <span>Abrir rotas no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c89e63]/15 text-[#8a551e]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Horário de Atendimento & Plantão
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        Aberto <strong>24 Horas</strong> (Plantão Jurídico Criminal e Urgências)
                      </p>
                      <p className="text-[11px] text-[#8a551e] font-semibold mt-0.5">
                        Atendimento presencial com hora marcada e suporte on-line imediato.
                      </p>
                    </div>
                  </div>

                  {/* Contact Phones */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c89e63]/15 text-[#8a551e]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Telefone & WhatsApp Oficial
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        WhatsApp / Contato: <strong>{PHONE_DISPLAY}</strong>
                      </p>
                      <p className="text-xs text-[#5c554b]">
                        E-mail: <strong>{EMAIL_CONTACT}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sede CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Mariana! Gostaria de agendar um atendimento presencial em seu escritório em Oliveira.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c89e63] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#14110d] transition-all hover:bg-[#0a0908] hover:text-[#fcecb1]"
                  >
                    <MapPin size={15} />
                    <span>Como Chegar</span>
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
                Tire suas principais dúvidas sobre nosso atendimento, prazos e áreas de atuação.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-[#ebe4d8] bg-white transition-all hover:border-[#c89e63]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-serif text-base sm:text-lg font-bold text-[#14110d] transition-colors hover:text-[#8a551e] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8] text-[#8a551e]">
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
                Ainda tem alguma dúvida específica sobre o seu caso?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Tenho uma dúvida sobre uma causa e gostaria de sua orientação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#8a551e] underline decoration-[#c89e63] hover:text-[#14110d] text-xs sm:text-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Converse diretamente com a Dra. Mariana pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: BANNER DE CONTATO / CTA FINAL (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#0a0908] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#c89e63]/40 bg-gradient-to-b from-[#120f0c] to-[#0a0908] p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#c89e63]/12 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#fcecb1]/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#fcecb1]/30 bg-[#fcecb1]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#fcecb1]">
                    <span className="size-1.5 rounded-full bg-[#fcecb1] animate-pulse" />
                    ATENDIMENTO PRIORITÁRIO & DISCRETO
                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Proteja Sua Liberdade, Seus Direitos e Seu Patrimônio com Quem Luta de Verdade por Você.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe4d8] sm:text-base">
                    Não tome decisões no escuro nem deixe seus direitos desamparados. Agende hoje mesmo sua consulta com a Dra. Mariana Leão e obtenha um direcionamento jurídico combativo, ético e seguro.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#ebe4d8]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#fcecb1]" />
                      <span>Atendimento ágil com plantão 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#fcecb1]" />
                      <span>Sigilo profissional irrestrito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#fcecb1]" />
                      <span>Sede na R. Chagas Sobrinho, 72 - Centro · Oliveira - MG</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de agendar uma consulta jurídica especializada.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c89e63]/50 bg-[#1a1612] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#fcecb1] transition-all hover:bg-[#c89e63] hover:text-[#0a0908]"
                  >
                    <Phone size={15} />
                    <span>Ligar: {PHONE_DISPLAY}</span>
                  </a>

                  <p className="text-center text-[10px] text-[#ebe4d8]/60 mt-1">
                    Atendimento Presencial e On-line · Plantão 24 Horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER (SOFISTICADO, COMPLETO & 100% LIMPO)              */}
        {/* ======================================================== */}
        <footer className="border-t border-[#251f19] bg-[#0a0908] pt-16 pb-12 text-[#ebe4d8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Col 1: Brand & Logo */}
              <div>
                <a href="#" className="flex items-center gap-3">
                  <Image
                    src={EMBLEM_SRC}
                    alt="Mariana Leão Advocacia"
                    width={48}
                    height={48}
                    className="h-11 w-auto object-contain"
                    unoptimized
                  />
                  <div>
                    <p className="font-cinzel text-sm font-bold text-white tracking-wider">
                      MARIANA LEÃO
                    </p>
                    <p className="text-[9px] font-bold text-[#fcecb1] tracking-[0.2em] uppercase">
                      ADVOCACIA
                    </p>
                  </div>
                </a>
                <p className="mt-4 text-xs leading-relaxed text-[#ebe4d8]/70">
                  Advocacia de alta performance em Oliveira - MG: Direito Criminal (Plantão 24h), Direito Civil & Família, Direito do Trabalho e Direito Previdenciário. Sede física no Centro de Oliveira e atendimento digital para todo o país.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c89e63]/40 bg-[#1a1612] text-[#fcecb1] transition-colors hover:bg-[#c89e63] hover:text-[#0a0908]"
                    aria-label="Instagram Dra. Mariana Leão"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c89e63]/40 bg-[#1a1612] text-[#fcecb1] transition-colors hover:bg-[#c89e63] hover:text-[#0a0908]"
                    aria-label="WhatsApp Mariana Leão Advocacia"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c89e63]/40 bg-[#1a1612] text-[#fcecb1] transition-colors hover:bg-[#c89e63] hover:text-[#0a0908]"
                    aria-label="Avaliações no Google Mariana Leão Advocacia"
                  >
                    <GoogleIcon size={16} />
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
                    <a href="#servicos" className="hover:text-[#fcecb1] transition-colors">
                      Direito Criminal & Defesa Penal
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#fcecb1] transition-colors">
                      Direito Civil, Contratos & Família
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#fcecb1] transition-colors">
                      Direito do Trabalho
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#fcecb1] transition-colors">
                      Direito Previdenciário & INSS
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#fcecb1] transition-colors">
                      Plantão Jurídico 24 Horas
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#fcecb1] transition-colors">
                      Consultoria Preventiva & Extrajudicial
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
                    <a href="#sobre" className="hover:text-[#fcecb1] transition-colors">
                      Sobre Dra. Mariana Leão
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-[#fcecb1] transition-colors">
                      Pilares & Diferenciais
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-[#fcecb1] transition-colors">
                      Avaliações no Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#sede" className="hover:text-[#fcecb1] transition-colors">
                      Escritório em Oliveira - MG
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-[#fcecb1] transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-[#fcecb1] transition-colors">
                      Contato & Plantão 24h
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4: Sede & Contatos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Sede & Contato
                </p>
                <ul className="mt-4 space-y-3 text-xs text-[#ebe4d8]/70">
                  <li className="flex items-start gap-2">
                    <MapPin size={15} className="text-[#fcecb1] shrink-0 mt-0.5" />
                    <span>{ADDRESS_OLIVEIRA}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={15} className="text-[#fcecb1] shrink-0" />
                    <span>WhatsApp / Plantão: {PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={15} className="text-[#fcecb1] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={15} className="text-[#fcecb1] shrink-0" />
                    <span>Aberto 24 Horas · Plantão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <InstagramIcon size={15} className="text-[#fcecb1] shrink-0" />
                    <span>Instagram: {INSTAGRAM_HANDLE}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Legal Notice & Copyright */}
            <div className="mt-12 border-t border-[#251f19] pt-8 text-center text-[11px] text-[#ebe4d8]/50">
              <p>
                © {new Date().getFullYear()} {CLIENT_NAME}. Todos os direitos reservados.
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
                className="absolute inset-0 bg-[#0a0908]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#c89e63]/50 bg-white p-6 sm:p-8 shadow-2xl text-[#14110d]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8] text-[#5c554b] hover:text-[#14110d] hover:border-[#c89e63] cursor-pointer"
                  aria-label="Fechar janela"
                >
                  <X size={18} />
                </button>

                {/* Modal Content */}
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#c89e63]/15 text-[#8a551e]">
                    <selectedPractice.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b88440]">
                      Área de Atuação
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#14110d]">
                      {selectedPractice.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs font-semibold text-[#8a551e] uppercase tracking-wider">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5c554b]">
                  {selectedPractice.details}
                </p>

                <div className="mt-6">
                  <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#14110d]">
                    Principais Procedimentos e Atuação:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#14110d]">
                    {selectedPractice.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-[#c89e63]"
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
        {/* BOTÃO FLUTUANTE DE WHATSAPP (ACCESSIBILIDADE RÁPIDA)      */}
        {/* ======================================================== */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href={getWhatsAppUrl("Olá, Dra. Mariana Leão! Gostaria de agendar uma consulta jurídica especializada.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#fcecb1] bg-gradient-to-r from-[#b88440] via-[#d4af37] to-[#c89e63] p-3.5 sm:px-5 sm:py-3.5 text-[#0a0908] font-extrabold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_28px_-4px_rgba(200,158,99,0.6)] cursor-pointer"
            aria-label="Falar com a Dra. Mariana Leão no WhatsApp"
          >
            <WhatsAppIcon size={22} className="text-[#0a0908]" />
            <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold text-[#0a0908]">
              Falar com Dra. Mariana
            </span>
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
