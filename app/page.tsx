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
  FileText,
  Users,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Professional Information — Guimarães & Santiago Advogados
const CLIENT_NAME = "Guimarães & Santiago Advogados";
const BRAND_LABEL = "Anna Luiza Guimarães Advogados";
const LAWYERS_NAMES = "Dra. Anna Luiza Guimarães & Dr. Vitor Santiago";
const LAWYER_PRIMARY = "Dra. Anna Luiza Guimarães";
const LAWYER_PARTNER = "Dr. Vitor Santiago";
const LAWYER_TITLE = "Advocacia Especializada · Atendimento Presencial em Salinas - MG & On-line em Todo o País";
const WHATSAPP_NUMBER = "5538999587416";
const PHONE_DISPLAY = "(38) 99958-7416";
const EMAIL_CONTACT = "contato@guimaraessantiago.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/guimaraes.santiagoadv/";
const INSTAGRAM_HANDLE = "@guimaraes.santiagoadv";

const ADDRESS_SALINAS = "Av. João Pena Sobrinho, 115 - Centro, Salinas - MG, 39560-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Guimar%C3%A3es+%26+Santiago+Advogados%0ASalinas+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Jo%C3%A3o+Pena+Sobrinho,+115+-+Centro,+Salinas+-+MG,+39560-000";

// Official assets from public folder
const LOGO_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_WHITE_SRC = "/logo-white.png";
const EMBLEM_SRC = "/emblem.png";
const FOTO_HERO_SRC = "/dra-anna-luiza.jpg?v=gs2";
const FOTO_ESCRITORIO_SRC = "/escritorio-salinas.jpg?v=gs2";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta jurídica com o escritório Guimarães & Santiago Advogados.";
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
    id: "inventarios-sucessoes",
    title: "Inventários, Partilhas & Sucessões",
    category: "Inventário Judicial e Extrajudicial · Desbloqueio de Bens · Planejamento Sucessório · Herança",
    icon: Scale,
    tag: "Alta Celeridade · Desbloqueio Patrimonial · Resolução",
    summary:
      "Especialistas em resolver inventários complexos e travados há anos em tempo recorde, com segurança documental tanto em cartório quanto pela via judicial.",
    details:
      "Inventários paralisados causam desgastes familiares e desvalorização patrimonial. A Dra. Anna Luiza Guimarães é amplamente reconhecida pela resolutividade surpreendente — como no caso comprovado por cliente em que concluiu em 5 meses um processo que se arrastava há 16 anos. Atuamos com extrema técnica na partilha amigável ou contenciosa, minutas notariais em cartório, apuração de haveres, levantamento de alvarás e planejamento sucessório patrimonial.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas rápido e sem litígio",
      "Inventário Judicial e resolução de processos antigos ou paralisados",
      "Alvarás judiciais para levantamento de valores, contas bancárias e veículos",
      "Partilha de bens móveis, imóveis rurais e urbanos e participações societárias",
      "Planejamento Sucessório para proteção do patrimônio familiar e economia tributária (ITCMD)",
      "Ações de sonegados, anulação de testamento e destituição de inventariante",
    ],
    whatsAppText:
      "Olá, Dra. Anna Luiza! Gostaria de uma consultoria especializada em Inventário / Partilha de Bens.",
  },
  {
    id: "direito-civil-contratos",
    title: "Direito Civil & Contratos Estratégicos",
    category: "Contratos · Ações Indenizatórias · Responsabilidade Civil · Recuperação de Crédito",
    icon: FileText,
    tag: "Segurança Jurídica · Prevenção · Proteção de Direitos",
    summary:
      "Assessoria jurídica consultiva e contenciosa para proteger seus negócios, indenizações por danos morais e materiais e elaboração de contratos robustos.",
    details:
      "Sob a liderança do Dr. Vitor Santiago e da Dra. Anna Luiza Guimarães, conduzimos disputas cíveis com apurada estratégia processual e clareza informativa. Atuamos na redação e revisão minuciosa de instrumentos contratuais, notificações premonitórias, execução de títulos de crédito, recuperação de haveres e reparações integrais por ilícitos civis ou descumprimento contratual.",
    topics: [
      "Elaboração, análise de riscos e blindagem de contratos civis e comerciais",
      "Ações de indenização por perdas e danos, danos morais e lucros cessantes",
      "Execução de dívidas, notas promissórias, cheques e recuperação de crédito",
      "Ações rescisórias e revisionais de cláusulas abusivas em contratos",
      "Notificações extrajudiciais estratégicas com efeito probatório incontestável",
      "Defesa dos direitos do consumidor em vícios de produtos e fraudes bancárias",
    ],
    whatsAppText:
      "Olá, Dr. Vitor e Dra. Anna! Gostaria de consultar sobre uma demanda de Direito Civil / Contratos.",
  },
  {
    id: "direito-familia",
    title: "Direito de Família & Proteção de Vínculos",
    category: "Divórcios · Partilha de Bens · Pensão Alimentícia · Guarda e Convivência",
    icon: HeartHandshake,
    tag: "Atendimento Humanizado · Discrição Total · Equilíbrio",
    summary:
      "Solução ética e humanizada para momentos delicados da vida familiar, assegurando os direitos patrimoniais e o bem-estar dos filhos com discrição absoluta.",
    details:
      "Demandas familiares exigem sensibilidade sem abrir mão da firmeza técnica. Atuamos em divórcios consensuais (em cartório de forma célere) e litigiosos, garantindo partilhas justas de patrimônio, estipulação e revisão de pensão alimentícia com base no binômio necessidade-possibilidade, regulamentação de guarda compartilhada e acordos de convivência harmoniosos.",
    topics: [
      "Divórcio Extrajudicial em cartório (rápido e discreto) e Divórcio Judicial litigioso",
      "Ações de alimentos (fixação, revisão, exoneração e execução com pedido de prisão)",
      "Guarda compartilhada, regulamentação de visitas e convivência familiar",
      "Reconhecimento e dissolução de união estável com partilha justa de patrimônio",
      "Pacto antenupcial, alteração de regime de bens no casamento e proteção de bens",
      "Interdição judicial, curatela e amparo legal a pessoas vulneráveis",
    ],
    whatsAppText:
      "Olá! Gostaria de atendimento com sigilo sobre Direito de Família / Divórcio / Partilha.",
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário & Regularização de Imóveis",
    category: "Usucapião · Regularização Fundiária · Posse · Compra e Venda Segura · Escrituras",
    icon: Landmark,
    tag: "Segurança de Bens · Titulação Definitiva · Valorização",
    summary:
      "Regularização documental de propriedades urbanas e rurais em Salinas e região, usucapião, reintegração de posse e segurança em transações imobiliárias.",
    details:
      "Um imóvel sem escritura definitiva representa insegurança jurídica e desvalorização. Nosso escritório atua ativamente na condução de usucapião extrajudicial e judicial, retificação de áreas em cartório de registro de imóveis, defesa da posse, contratos seguros de compra e venda e assessoria completa para produtores rurais e proprietários urbanos no Norte de Minas.",
    topics: [
      "Usucapião Judicial e Extrajudicial em cartório para obtenção da escritura definitiva",
      "Regularização documental de fazendas, sítios, lotes e casas urbanas",
      "Ações de reintegração e manutenção de posse contra turbações ou esbulhos",
      "Auditoria jurídica (due diligence) para compra e venda segura de imóveis",
      "Rescisão de compromissos de compra e venda e restituição de valores pagos",
      "Desmembramento, unificação de matrículas e extinção de condomínio sobre bens",
    ],
    whatsAppText:
      "Olá! Preciso de orientação sobre regularização de imóvel / usucapião / posse.",
  },
  {
    id: "consultoria-empresarial",
    title: "Assessoria Jurídica Empresarial & Agro",
    category: "Prevenção de Passivos · Contratos Comerciais · Cobrança · Apoio ao Produtor Rural",
    icon: Briefcase,
    tag: "Gestão de Riscos · Eficiência · Parceria de Longo Prazo",
    summary:
      "Parceria jurídica contínua para empresas e produtores de Salinas e Norte de Minas, prevenindo litígios caros e garantindo sustentabilidade nos negócios.",
    details:
      "Conforme destacados por nossos clientes há mais de 4 anos, mantemos uma advocacia preventiva que gera previsibilidade financeira e segurança nas tomadas de decisão. Auxiliamos empreendedores na revisão de contratos de fornecimento, relações trabalhistas preventivas, cobranças amigáveis e judiciais de inadimplentes e estruturação de operações comerciais.",
    topics: [
      "Consultoria contínua para empresas, comércios locais e produtores rurais",
      "Revisão e elaboração de contratos comerciais, parcerias e arrendamentos rurais",
      "Cobrança extrajudicial e judicial estratégica de títulos vencidos e duplicatas",
      "Diagnóstico preventivo para mitigação de passivos trabalhistas e cíveis",
      "Representação combativa em audiências de conciliação e processos judiciais",
      "Elaboração de acordos de sócios e resolução amigável de controvérsias societárias",
    ],
    whatsAppText:
      "Olá! Gostaria de conhecer a consultoria jurídica para minha empresa / negócio.",
  },
  {
    id: "resolucao-extrajudicial",
    title: "Resolução Extrajudicial & Mediação",
    category: "Acordos Céleres · Menos Custos · Validade Jurídica Executiva · Agilidade",
    icon: Zap,
    tag: "Sem Demora · Economia Financeira · Eficácia Total",
    summary:
      "Estratégia inteligente para solucionar conflitos sem a morosidade do Judiciário, por meio de acordos formais com força executiva e total sigilo.",
    details:
      "Nem todo problema precisa esperar anos na Justiça para ser resolvido. Nossa equipe prioriza a via extrajudicial sempre que oportuno, negociando diretamente com a parte contrária para alcançar acordos equilibrados, rápidos e homologados com peso de título executivo judicial, poupando tempo, recursos e estresse para nossos clientes.",
    topics: [
      "Mediação e condução de rodadas de negociação amigável entre partes",
      "Redação de termos de confissão de dívida e compromissos com garantias reais",
      "Homologação judicial rápida de acordos extrajudiciais",
      "Solução célere de impasses sucessórios e societários antes do litígio",
      "Procedimentos diretos perante Cartórios de Notas e Registros",
      "Orientação estratégica com pareceres prévios sobre viabilidade e custos",
    ],
    whatsAppText:
      "Olá! Gostaria de orientação para uma negociação extrajudicial amigável do meu caso.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Inventários & Agilidade"
    | "Parceria de Longos Anos"
    | "Atendimento Impecável & Clareza"
    | "Competência & Qualidade";
  content: string;
  ownerReply?: string;
}

const clientReviews: Review[] = [
  {
    name: "Antonella Gomes Sarmento",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Inventários & Agilidade",
    content:
      "Dra Ana resolveu um inventário que estava fazendo aniversário de 16 anos. Vários advogados não conseguiram concluir o processo. Ela conseguiu resolver em 5 meses. A mulher é boa e sabe o que faz , super competente. Virei fã.",
    ownerReply:
      "Muito obrigada pelo carinho e pelas palavras, Antonella! Destravar inventários que pareciam sem solução e devolver a tranquilidade patrimonial à família é a nossa maior missão! ⚖️🤝",
  },
  {
    name: "Felipe Lemes",
    badge: "Local Guide · 16 avaliações · 3 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Parceria de Longos Anos",
    content:
      "Dr. Vitor é nosso Advogado a anos e presta um serviço de excelência. Se você precisar de um Advogado profissional, competente, que vai resolver o seu problema, sendo justo e esclarecendo suas dúvidas. Podem confiar",
    ownerReply:
      "Agradecemos muito pela confiança de longa data em nossa advocacia, Felipe! Atuar com ética, transparência e justiça sempre foi e sempre será o nosso maior compromisso!",
  },
  {
    name: "Jonatas Roncolato",
    badge: "8 avaliações · 4 fotos · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Parceria de Longos Anos",
    content:
      "Sou cliente a mais de 4 anos e sempre fui muito bem atendido com muita agilidade e competência! Indico seguramente o serviços dessa equipe! Trabalho impecável.🙏🏻",
    ownerReply:
      "Gratidão imensa pela parceria de mais de 4 anos, Jonatas! É uma satisfação honrosa prestar um serviço impecável para você!",
  },
  {
    name: "Karenn Sarmento",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "Editado · 2 anos atrás",
    category: "Competência & Qualidade",
    content:
      "Advogados de qualidade: muito capacitados e compromissados em resolver os problemas. Clareza na explicação e pontuais nas demandas. Recomendo com tranquilidade.",
    ownerReply:
      "Muito obrigado pela avaliação, Karenn! A clareza nas informações e a pontualidade nas ações são premissas fundamentais de nossa atuação diária.",
  },
  {
    name: "Andre Noga",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 anos atrás",
    category: "Competência & Qualidade",
    content:
      "Excelente profissional, cumpre com o combinado, conclui todo trabalho com perfeição.",
    ownerReply:
      "Obrigado pelo reconhecimento e pela confiança depositada em nossa equipe, Andre!",
  },
  {
    name: "Lucimaire Scheuer",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Atendimento Impecável & Clareza",
    content:
      "Agilidade, competência, confiança,clareza nas informações.Eu indico com certeza.",
    ownerReply:
      "Ficamos imensamente honrados com o seu depoimento, Lucimaire! Conte sempre conosco!",
  },
  {
    name: "Nathalia Cavalcante",
    badge: "8 avaliações · 5 Estrelas · Google Maps",
    date: "Editado · 6 anos atrás",
    category: "Atendimento Impecável & Clareza",
    content: "Ótima profissional. Competente e dedicada!",
    ownerReply:
      "Obrigada Nathalia Cavalcante por confiar em nossos serviços! — Guimarães & Santiago Advogados",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question:
      "Como funciona a consulta jurídica com a Dra. Anna Luiza Guimarães e o Dr. Vitor Santiago?",
    answer:
      "Nosso atendimento é planejado para oferecer acolhimento, sigilo e diagnóstico imediato. Você pode ser atendido presencialmente em nosso moderno escritório no Centro de Salinas - MG (Av. João Pena Sobrinho, 115) ou de forma 100% on-line via WhatsApp e videoconferência para qualquer cidade do Brasil. Na reunião, analisamos documentos, tiramos todas as dúvidas em linguagem acessível e traçamos o plano de ação mais vantajoso e célere para o seu caso.",
  },
  {
    question:
      "Por que o escritório é referência comprovada na resolução ágil de inventários?",
    answer:
      "Muitos inventários ficam travados por décadas devido a divergências entre herdeiros, falhas documentais ou falta de iniciativa processual. Nossa equipe atua com metodologia focada na celeridade — seja por meio de acordos em cartório (inventário extrajudicial) ou mediante intervenção técnica cirúrgica no processo judicial. Um de nossos casos públicos mais emblemáticos envolveu a conclusão em apenas 5 meses de um inventário que se arrastava há 16 anos.",
  },
  {
    question:
      "Quais são as principais áreas de atuação de Guimarães & Santiago Advogados?",
    answer:
      "Atuamos com sólida especialização em Direito Civil e Patrimonial: Inventários judiciais e extrajudiciais, Partilhas de bens, Direito de Família (divórcios, pensão, guarda), Direito Imobiliário (usucapião, regularização fundiária e posse), Contratos Comerciais, Indenizações e Consultoria Jurídica Preventiva para empresas e produtores rurais.",
  },
  {
    question:
      "Moro fora de Salinas ou em outro estado. Posso ter meu processo conduzido pelo escritório?",
    answer:
      "Perfeitamente! Atualmente, quase a totalidade dos processos judiciais no Brasil tramita pelo processo eletrônico (PJe, Projudi, E-Proc). Realizamos reuniões virtuais seguras, coleta de assinaturas com validade jurídica pelo celular e protocolamos petições em qualquer Tribunal de Minas Gerais ou do Brasil, com a mesma proximidade, transparência e presteza do atendimento presencial.",
  },
  {
    question:
      "Como sou informado sobre o andamento e as fases do meu processo?",
    answer:
      "Nossos clientes ressaltam frequentemente no Google a 'clareza na explicação, agilidade e pontualidade'. Você recebe relatórios periódicos em linguagem descomplicada a cada movimentação relevante, com canal direto no WhatsApp para esclarecer dúvidas sem precisar decifrar termos técnicos complicados.",
  },
  {
    question:
      "Como agendar um horário com os advogados do escritório?",
    answer:
      "O agendamento é rápido e prático: basta clicar em qualquer botão de WhatsApp nesta página ou enviar uma mensagem para o número (38) 99958-7416. Nossa equipe confirmará o dia e horário que melhor se adapta à sua disponibilidade presencial ou virtual.",
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
    "Inventários & Agilidade",
    "Parceria de Longos Anos",
    "Atendimento Impecável & Clareza",
    "Competência & Qualidade",
  ];

  const filteredReviews =
    selectedReviewCategory === "Todas"
      ? clientReviews
      : clientReviews.filter((r) => r.category === selectedReviewCategory);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#fdfbf7] text-[#14110d] selection:bg-[#1a1612] selection:text-[#f8f3e6]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (LUXURY OBSIDIAN & METALLIC GOLD)   */}
        {/* ======================================================== */}
        <div className="border-b border-[#241f1a] bg-[#080502] py-2 text-xs text-[#ebe4d8]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c2a366] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f8f3e6]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f8f3e6] font-semibold tracking-wide">
                GUIMARÃES & SANTIAGO ADVOGADOS · SALINAS - MG · ATENDIMENTO EM TODO O BRASIL ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#ebe4d8]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f8f3e6]"
              >
                <Star size={12} className="fill-[#d4af37] text-[#d4af37]" />
                <span className="font-bold text-[#f8f3e6]">5,0 ★</span> (11 avaliações no Google · Salinas - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#241f1a] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com Guimarães & Santiago Advogados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#f8f3e6] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#c2a366]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (GUIMARÃES & SANTIAGO ADVOGADOS)  */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#ebe4d8] bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-[#ebe4d8]/80 bg-[#fdfbf7]/95 py-3 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Brand Logo */}
            <a
              href="#"
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Guimarães & Santiago Advogados - Início"
            >
              <Image
                src={LOGO_HORIZONTAL_SRC}
                alt="Guimarães & Santiago Advogados — Anna Luiza Guimarães"
                width={300}
                height={70}
                className="h-[46px] sm:h-[52px] md:h-[60px] w-auto object-contain drop-shadow-xs"
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
                Sobre a Equipe
              </a>
              <a href="#diferenciais" className="nav-link">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link">
                Avaliações
              </a>
              <a href="#sede" className="nav-link">
                Sede em Salinas
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
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta jurídica especializada.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0 shadow-md"
              >
                <WhatsAppIcon size={15} className="text-[#080502]" />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#ebe4d8] bg-white text-[#14110d] transition-colors hover:border-[#c2a366] hover:text-[#080502] lg:hidden cursor-pointer shrink-0"
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
                      alt="Guimarães & Santiago Advogados"
                      width={240}
                      height={55}
                      className="h-[46px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c2a366]"
                  >
                    <span>Áreas de Atuação (Civil, Inventários, Família, Imóveis)</span>
                    <ArrowRight size={14} className="text-[#c2a366]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c2a366]"
                  >
                    <span>Sobre os Advogados (Dra. Anna & Dr. Vitor)</span>
                    <ArrowRight size={14} className="text-[#c2a366]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c2a366]"
                  >
                    <span>Pilares & Celeridade Comprovada</span>
                    <ArrowRight size={14} className="text-[#c2a366]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c2a366]"
                  >
                    <span>Avaliações no Google (11 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#c2a366]" />
                  </a>
                  <a
                    href="#sede"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c2a366]"
                  >
                    <span>Escritório em Salinas - MG</span>
                    <ArrowRight size={14} className="text-[#c2a366]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c2a366]"
                  >
                    <span>Perguntas Frequentes</span>
                    <ArrowRight size={14} className="text-[#c2a366]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#14110d] uppercase transition-colors hover:text-[#c2a366]"
                  >
                    <span>Contato & Localização</span>
                    <ArrowRight size={14} className="text-[#c2a366]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe de Guimarães & Santiago Advogados pelo WhatsApp.")}
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
        {/* DOBRA 1: HERO SECTION — COM DRA. ANNA LUIZA GUIMARÃES    */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fdfbf7]">
          {/* Subtle Royal Metallic Gold Radial Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#f8f3e6]/50 via-[#c2a366]/12 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#c2a366]/15 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ebe4d8] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#1a1612] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#c2a366] animate-pulse" />
                    GUIMARÃES & SANTIAGO ADVOGADOS · SALINAS - MG · 5,0 ★ NO GOOGLE
                  </span>
                </div>

                {/* H1 Headline */}
                <h1 className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#14110d] sm:text-5xl lg:text-[3.25rem]">
                  Advocacia de Alta Performance, Clareza e Resolutividade Comprovada em{" "}
                  <span className="bg-gradient-to-r from-[#835c32] via-[#c2a366] to-[#e2c98d] bg-clip-text text-transparent">
                    Salinas e em Todo o Brasil.
                  </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="mt-6 text-base leading-relaxed text-[#5c554b] sm:text-lg lg:max-w-xl">
                  Sob a liderança da <strong className="font-semibold text-[#14110d]">{LAWYER_PRIMARY}</strong> e do <strong className="font-semibold text-[#14110d]">{LAWYER_PARTNER}</strong>, desatamos nós burocráticos de anos com agilidade, técnica apurada e ética intransigente em <strong className="text-[#835c32]">Direito Civil, Inventários, Família, Contratos e Regularização de Imóveis</strong>.
                </p>

                {/* Quick Highlights Pills */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c2a366]" />
                    Inventários & Sucessões (Resolução Rápida)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c2a366]" />
                    Direito Civil & Contratos Estratégicos
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c2a366]" />
                    Família & Divórcios com Discrição
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe4d8] bg-white px-3 py-1 text-xs font-semibold text-[#1a1612] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c2a366]" />
                    Regularização Imobiliária & Usucapião
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com a equipe de Guimarães & Santiago Advogados.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Falar com os Advogados no WhatsApp</span>
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
                      (11 avaliações 5 estrelas verificadas · Salinas - MG)
                    </span>
                  </div>

                  <span className="hidden h-3.5 w-px bg-[#ebe4d8] sm:inline-block" />

                  <div className="flex items-center gap-2 text-xs text-[#5c554b]">
                    <Shield size={14} className="text-[#c2a366]" />
                    <span>Sede na Av. João Pena Sobrinho, 115 - Centro · Salinas - MG</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Official Portrait of Dra. Anna Luiza Guimarães */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  {/* Outer Luxury Metallic Border Frame */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c2a366]/40 bg-white p-2 shadow-2xl shadow-[#1a1612]/15">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f7f4ed] to-[#ebe4d8]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Anna Luiza Guimarães — Guimarães & Santiago Advogados"
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-102"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette for High-Contrast Typography Badge */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080502]/95 via-[#080502]/60 to-transparent" />

                      {/* Overlay Identification Badge */}
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#c2a366]/45 bg-[#080502]/90 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-cinzel text-base font-bold text-white tracking-wide">
                              {LAWYER_PRIMARY}
                            </p>
                            <p className="text-[11px] font-semibold text-[#f8f3e6] uppercase tracking-wider">
                              {CLIENT_NAME}
                            </p>
                            <p className="text-[10px] text-[#ebe4d8] mt-0.5">
                              {LAWYER_TITLE}
                            </p>
                          </div>
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#c2a366]/40 bg-[#1a1612] p-1.5 shadow-md">
                            <Image
                              src={EMBLEM_SRC}
                              alt="Monograma ALG"
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

                  {/* Floating Badge Top-Right: Sede Salinas */}
                  <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-lg border border-[#c2a366]/50 bg-[#080502] px-3.5 py-2 shadow-lg text-white">
                    <p className="text-[9px] font-bold tracking-widest text-[#f8f3e6] uppercase">
                      SALINAS · MG
                    </p>
                    <p className="text-[11px] font-bold text-white">
                      Av. João Pena Sobrinho, 115
                    </p>
                  </div>
                </div>

                {/* Google 5,0 Verified Review Card (Anchored cleanly right below the photo, leaving face and name badge 100% unobstructed) */}
                <div className="mt-4 mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none rounded-2xl border border-[#c2a366]/40 bg-white p-4 shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8]">
                        <GoogleIcon size={16} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[#d4af37]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-current" />
                          ))}
                        </div>
                        <p className="text-[11px] font-bold text-[#14110d]">
                          5,0 Estrelas no Google
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-[#c2a366]/30 bg-[#f8f3e6] px-2.5 py-0.5 text-[10px] font-bold text-[#835c32] uppercase tracking-wider">
                      Caso Verificado
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#5c554b] italic">
                    &quot;Dra Ana resolveu um inventário que estava fazendo aniversário de 16 anos. Vários advogados não conseguiram concluir o processo. Ela conseguiu resolver em 5 meses. A mulher é boa e sabe o que faz, super competente. Virei fã.&quot;
                  </p>
                  <div className="mt-2.5 flex items-center justify-between border-t border-[#ebe4d8]/70 pt-2 text-[10px]">
                    <span className="font-semibold text-[#835c32]">
                      — Antonella Gomes Sarmento (Google Maps)
                    </span>
                    <span className="text-[#5c554b]">
                      Inventário em 5 meses ⚖️
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
        <section className="border-y border-[#241f1a] bg-[#080502] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 text-center">
              {/* Stat 1: Google Rating */}
              <div className="flex flex-col items-center border-r border-[#241f1a] pr-4 last:border-r-0 md:pr-0">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#f8f3e6]">
                  <span>5,0</span>
                  <div className="flex text-[#d4af37]">
                    <Star size={18} className="fill-current" />
                  </div>
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Avaliação Máxima
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  11 avaliações 5 estrelas no Google
                </p>
              </div>

              {/* Stat 2: Resolutividade & Agilidade */}
              <div className="flex flex-col items-center md:border-r md:border-[#241f1a] md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f8f3e6]">
                  Recorde
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Agilidade Comprovada
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Inventários travados solucionados com rapidez
                </p>
              </div>

              {/* Stat 3: Parceria de Confiança */}
              <div className="flex flex-col items-center border-r border-[#241f1a] pr-4 last:border-r-0 md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f8f3e6]">
                  +4 Anos
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Fidelidade de Clientes
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Parcerias duradouras com clareza e justiça
                </p>
              </div>

              {/* Stat 4: Geographic Reach */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f8f3e6]">
                  Nacional
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Salinas & Todo o Brasil
                </p>
                <p className="text-[11px] text-[#ebe4d8]/70">
                  Sede própria & processos 100% digitais
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
                Conheça nossos principais ramos de atuação. Cada demanda é tratada com profundidade técnica, atenção minuciosa aos detalhes e compromisso absoluto com o resultado.
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
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ebe4d8] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#c2a366]/60 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Row: Icon + Tag */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-[#c2a366]/30 bg-[#f8f3e6]/40 text-[#835c32] transition-colors group-hover:bg-[#1a1612] group-hover:text-[#f8f3e6] group-hover:border-[#c2a366]">
                          <IconComponent size={24} />
                        </div>
                        <span className="rounded-full border border-[#ebe4d8] bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold text-[#835c32] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      {/* Area Title */}
                      <h3 className="mt-5 font-serif text-xl font-bold text-[#14110d] transition-colors group-hover:text-[#835c32]">
                        {area.title}
                      </h3>

                      {/* Category Subtext */}
                      <p className="mt-1 text-[11px] font-semibold text-[#a1773b] uppercase tracking-wider">
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
                              className="mt-0.5 shrink-0 text-[#c2a366]"
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
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#835c32] transition-colors hover:text-[#14110d] cursor-pointer"
                      >
                        <span>Ver detalhes completos</span>
                        <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-8 items-center justify-center rounded-lg bg-[#c2a366]/15 text-[#835c32] transition-all hover:bg-[#c2a366] hover:text-[#080502]"
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
            <div className="mt-12 rounded-2xl border border-[#c2a366]/40 bg-gradient-to-r from-[#080502] via-[#120f0c] to-[#1a1612] p-8 text-white shadow-xl sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div className="max-w-2xl">
                <span className="rounded-full border border-[#f8f3e6]/30 bg-[#f8f3e6]/10 px-3 py-1 text-[10px] font-bold text-[#f8f3e6] uppercase tracking-wider">
                  ATENDIMENTO DIRETO COM OS ADVOGADOS
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                  Precisa de uma avaliação imediata da sua demanda patrimonial ou familiar?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#ebe4d8]">
                  Inventários demorados, contratos de risco e disputas familiares exigem posicionamento técnico firme e estratégia apurada. Entre em contato direto pelo WhatsApp para analisarmos o seu caso com total sigilo.
                </p>
              </div>

              <div className="mt-6 sm:mt-0 shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de uma avaliação inicial do meu caso com os advogados.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Conversar com a Equipe</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE A EQUIPE (DRA. ANNA LUIZA & DR. VITOR)    */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#ebe4d8] bg-[#f7f4ed]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Portrait at Office Desk */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  {/* Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c2a366]/40 bg-white p-2.5 shadow-2xl">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#fdfbf7]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Anna Luiza Guimarães em atendimento"
                        fill
                        className="object-cover object-top"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                      />
                    </div>
                  </div>

                  {/* Secondary Office Sede Badge */}
                  <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-5 rounded-xl border border-[#c2a366]/60 bg-[#080502] p-3.5 shadow-2xl text-white max-w-[260px]">
                    <div className="flex items-center gap-2 text-[#f8f3e6] text-xs font-bold uppercase">
                      <MapPin size={15} />
                      <span>Salinas · Minas Gerais</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-white">
                      Av. João Pena Sobrinho, 115
                    </p>
                    <p className="text-[10px] text-[#ebe4d8]/70 mt-0.5">
                      Centro · Sede moderna & acolhedora
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Values */}
              <div className="lg:col-span-7">
                <p className="eyebrow mb-3.5">COMPETÊNCIA, JUSTIÇA & DEDICAÇÃO INEGOCIÁVEL</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                  Sobre Guimarães & Santiago Advogados
                </h2>
                <p className="mt-2 text-sm font-bold text-[#a1773b] tracking-wider uppercase">
                  {LAWYERS_NAMES} · Atendimento Presencial em Salinas - MG e On-line em Todo o País
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#5c554b] sm:text-base">
                  <p>
                    O escritório <strong className="font-semibold text-[#14110d]">{CLIENT_NAME}</strong> nasceu da união de profissionais vocacionados a oferecer uma advocacia de alta performance, transparente e resolutiva, contrapondo-se à morosidade e à burocracia tradicional.
                  </p>
                  <p>
                    A <strong className="font-semibold text-[#14110d]">{LAWYER_PRIMARY}</strong> é referência em Direito Civil, Sucessões e Família, reconhecida pela extraordinária capacidade de desatar nós processuais complexos — como o inventário concluído em apenas 5 meses após 16 anos paralisado, relatado espontaneamente por clientes.
                  </p>
                  <p>
                    Ao lado, o <strong className="font-semibold text-[#14110d]">{LAWYER_PARTNER}</strong> complementa a bancada com visão estratégica, justiça e proximidade técnica, construindo relacionamentos de confiança que perduram por anos a fio, garantindo a cada cliente a segurança de ser assessorado por profissionais que cumprem com exatidão o que prometem.
                  </p>
                  <p>
                    Reconhecido com <strong className="font-semibold text-[#14110d]">nota máxima 5,0 no Google</strong> com avaliações unânimes, o escritório alia modernidade, acolhimento humano e rigor técnico irrestrito em cada causa assumida.
                  </p>
                </div>

                {/* 4 Pillars of Action */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Zap size={16} className="text-[#c2a366]" />
                      <span>Agilidade Comprovada</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Processos que duravam anos resolvidos com celeridade técnica.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <BookOpen size={16} className="text-[#c2a366]" />
                      <span>Clareza nas Informações</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Explicações transparentes sem juridiquês indecifrável.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Users size={16} className="text-[#c2a366]" />
                      <span>Parceria Duradoura</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      Clientes assessorados há mais de 4 anos com fidelidade total.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#14110d] text-xs sm:text-sm">
                      <Award size={16} className="text-[#c2a366]" />
                      <span>Perfeição no Cumprido</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c554b]">
                      &quot;Cumpre com o combinado, conclui com perfeição.&quot;
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de conversar com a Dra. Anna Luiza e o Dr. Vitor Santiago sobre minha situação jurídica.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com os Advogados no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5c554b] transition-colors hover:text-[#14110d]"
                  >
                    <InstagramIcon size={16} className="text-[#c2a366]" />
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
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#080502] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow-dark justify-center mb-3.5">
                POR QUE CONFIAR SUA CAUSA A GUIMARÃES & SANTIAGO ADVOGADOS
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Os Pilares que Sustentam Nossa Reputação 5 Estrelas
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe4d8] sm:text-base">
                Avaliação máxima 5,0 no Google com depoimentos autênticos que atestam a competência, ética e celeridade de nossa equipe.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-[#241f1a] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c2a366]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c2a366]/30 bg-[#c2a366]/10 text-[#f8f3e6]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Celeridade & Resolução
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Ela conseguiu resolver em 5 meses um inventário de 16 anos.&quot; — Não deixamos processos parados na gaveta; buscamos soluções ativas e imediatas.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[#241f1a] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c2a366]/50 hover:bg-[#1a140e]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c2a366]/30 bg-[#c2a366]/10 text-[#f8f3e6]">
                  <BookOpen size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Clareza nas Informações
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Clareza na explicação e pontuais nas demandas.&quot; — Você sabe exatamente em que pé está o seu processo, sem surpresas ou inseguranças.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-[#241f1a] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c2a366]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c2a366]/30 bg-[#c2a366]/10 text-[#f8f3e6]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Justiça & Confiança
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Sendo justo e esclarecendo suas dúvidas. Podem confiar!&quot; — Ética intransigente e compromisso estrito com a verdade dos fatos.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-[#241f1a] bg-[#120f0c] p-7 transition-all duration-300 hover:border-[#c2a366]/50 hover:bg-[#1a1612]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c2a366]/30 bg-[#c2a366]/10 text-[#f8f3e6]">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Trabalho Impecável
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe4d8]/75">
                  &quot;Excelente profissional, cumpre com o combinado, conclui todo trabalho com perfeição.&quot; — Rigor técnico e pontualidade exemplar.
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
                <span className="text-xs font-bold text-[#835c32]">
                  5,0 / 5,0 (11 avaliações)
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                O Que Dizem Quem Já Teve Seus Direitos Defendidos
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5c554b] sm:text-base">
                Depoimentos públicos registrados no perfil oficial de Guimarães & Santiago Advogados no Google em Salinas - MG.
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
                      ? "border border-[#c2a366] bg-[#080502] text-[#f8f3e6] shadow-sm"
                      : "border border-[#ebe4d8] bg-white text-[#5c554b] hover:border-[#c2a366] hover:text-[#14110d]"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-[#ebe4d8] bg-white p-6 shadow-sm transition-all hover:border-[#c2a366]/50 hover:shadow-md"
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
                    <span className="mt-3 inline-block rounded-md bg-[#f8f3e6] px-2.5 py-0.5 text-[9px] font-bold text-[#835c32] uppercase tracking-wider">
                      {review.category}
                    </span>

                    {/* Review Text */}
                    <p className="mt-3.5 text-xs leading-relaxed text-[#14110d] italic">
                      &quot;{review.content}&quot;
                    </p>

                    {/* Owner Response if present */}
                    {review.ownerReply && (
                      <div className="mt-4 rounded-xl border border-[#c2a366]/25 bg-[#fdfbf7] p-3 text-[11px] text-[#5c554b]">
                        <p className="font-bold text-[#835c32] text-[10px] uppercase tracking-wider">
                          Resposta de Guimarães & Santiago Advogados:
                        </p>
                        <p className="mt-1 leading-snug">{review.ownerReply}</p>
                      </div>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#ebe4d8]/70 pt-4">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#080502] font-cinzel text-xs font-bold text-[#f8f3e6]">
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
        {/* DOBRA 7: ESCRITÓRIO EM SALINAS & ATENDIMENTO NACIONAL    */}
        {/* ======================================================== */}
        <section id="sede" className="border-t border-[#ebe4d8] py-20 sm:py-26 bg-[#f7f4ed]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Real Meeting Room Photo */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-[480px] lg:max-w-none overflow-hidden rounded-2xl border-2 border-[#c2a366]/50 bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#080502]">
                    <Image
                      src={FOTO_ESCRITORIO_SRC}
                      alt="Sala de Reuniões de Guimarães & Santiago Advogados em Salinas - MG"
                      fill
                      className="object-cover object-center"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    />

                    {/* Gradient Overlay for Address */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080502] via-[#080502]/80 to-transparent p-6 text-white">
                      <div className="flex items-center gap-2 text-[#f8f3e6] text-xs font-bold uppercase tracking-wider">
                        <MapPin size={16} />
                        <span>Sede em Salinas - Minas Gerais</span>
                      </div>
                      <p className="mt-1 font-serif text-lg font-bold text-white">
                        Av. João Pena Sobrinho, 115 - Centro
                      </p>
                      <p className="text-xs text-[#ebe4d8]">
                        Salinas - MG, CEP 39560-000, Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Office Details */}
              <div className="lg:col-span-6">
                <p className="eyebrow mb-3.5">ESTRUTURA DE ALTO PADRÃO & LOCALIZAÇÃO PRIVILEGIADA</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#14110d] sm:text-4xl lg:text-[2.6rem]">
                  Atendimento Presencial em Salinas e 100% On-line em Todo o País
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5c554b] sm:text-base">
                  Nosso escritório no Centro de Salinas - MG conta com uma estrutura executiva completa, sala de reuniões privativa e ambiente planejado para garantir sigilo total e conforto absoluto para você e sua família. E por meio de processos eletrônicos e plataformas digitais seguras, atendemos com a mesma eficácia clientes em Taiobeiras, Rubelita, Montes Claros, Belo Horizonte e qualquer região do Brasil.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Address Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c2a366]/15 text-[#835c32]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        {ADDRESS_SALINAS}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#835c32] hover:text-[#14110d]"
                      >
                        <span>Abrir rotas no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c2a366]/15 text-[#835c32]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#14110d] uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="text-xs text-[#5c554b] mt-0.5">
                        Segunda a Sexta-feira: <strong>08:00 às 18:00</strong>
                      </p>
                      <p className="text-[11px] text-[#835c32] font-semibold mt-0.5">
                        Atendimento presencial com agendamento prévio ou via WhatsApp.
                      </p>
                    </div>
                  </div>

                  {/* Contact Phones */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe4d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c2a366]/15 text-[#835c32]">
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
                    href={getWhatsAppUrl("Olá! Gostaria de agendar um atendimento presencial no escritório de Salinas.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c2a366] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#14110d] transition-all hover:bg-[#080502] hover:text-[#f8f3e6]"
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
                    className="overflow-hidden rounded-2xl border border-[#ebe4d8] bg-white transition-all hover:border-[#c2a366]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-serif text-base sm:text-lg font-bold text-[#14110d] transition-colors hover:text-[#835c32] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8] text-[#835c32]">
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
                  href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre meu caso e gostaria de conversar com os advogados.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#835c32] underline decoration-[#c2a366] hover:text-[#14110d] text-xs sm:text-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Converse diretamente com os advogados no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: BANNER DE CONTATO / CTA FINAL (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#080502] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#c2a366]/40 bg-gradient-to-b from-[#120f0c] to-[#080502] p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#c2a366]/12 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#f8f3e6]/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f8f3e6]/30 bg-[#f8f3e6]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f8f3e6]">
                    <span className="size-1.5 rounded-full bg-[#f8f3e6] animate-pulse" />
                    ATENDIMENTO PRIORITÁRIO & DISCRETO
                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Proteja Seu Patrimônio e Sua Família com Advogados que Realmente Resolvem.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe4d8] sm:text-base">
                    Não deixe seu inventário, seu imóvel ou seus direitos à mercê do tempo. Agende hoje mesmo sua consulta com a Dra. Anna Luiza Guimarães e o Dr. Vitor Santiago e tenha um direcionamento seguro, resolutivo e transparente.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#ebe4d8]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f8f3e6]" />
                      <span>Agilidade e pontualidade exemplar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f8f3e6]" />
                      <span>Sigilo profissional irrestrito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f8f3e6]" />
                      <span>Sede na Av. João Pena Sobrinho, 115 - Salinas · MG</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta jurídica especializada com Guimarães & Santiago Advogados.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c2a366]/50 bg-[#1a1612] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f8f3e6] transition-all hover:bg-[#c2a366] hover:text-[#080502]"
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
        <footer className="border-t border-[#241f1a] bg-[#080502] pt-16 pb-12 text-[#ebe4d8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Col 1: Brand & Logo */}
              <div>
                <a href="#" className="flex items-center gap-3">
                  <Image
                    src={EMBLEM_SRC}
                    alt="Guimarães & Santiago Advogados"
                    width={48}
                    height={48}
                    className="h-11 w-auto object-contain"
                    unoptimized
                  />
                  <div>
                    <p className="font-cinzel text-sm font-bold text-white tracking-wider">
                      GUIMARÃES & SANTIAGO
                    </p>
                    <p className="text-[9px] font-bold text-[#f8f3e6] tracking-[0.2em] uppercase">
                      ADVOGADOS
                    </p>
                  </div>
                </a>
                <p className="mt-4 text-xs leading-relaxed text-[#ebe4d8]/70">
                  Advocacia de excelência em Salinas - MG e em todo o Brasil. Direito Civil, Inventários rápidos, Direito de Família, Direito Imobiliário e Consultoria Estratégica. Sede executiva própria no Centro de Salinas.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c2a366]/40 bg-[#1a1612] text-[#f8f3e6] transition-colors hover:bg-[#c2a366] hover:text-[#080502]"
                    aria-label="Instagram Guimarães & Santiago Advogados"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c2a366]/40 bg-[#1a1612] text-[#f8f3e6] transition-colors hover:bg-[#c2a366] hover:text-[#080502]"
                    aria-label="WhatsApp Guimarães & Santiago Advogados"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c2a366]/40 bg-[#1a1612] text-[#f8f3e6] transition-colors hover:bg-[#c2a366] hover:text-[#080502]"
                    aria-label="Avaliações no Google Guimarães & Santiago Advogados"
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
                    <a href="#servicos" className="hover:text-[#f8f3e6] transition-colors">
                      Inventários, Partilhas & Sucessões
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f8f3e6] transition-colors">
                      Direito Civil & Contratos Estratégicos
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f8f3e6] transition-colors">
                      Direito de Família & Divórcios
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f8f3e6] transition-colors">
                      Direito Imobiliário & Usucapião
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f8f3e6] transition-colors">
                      Assessoria Empresarial & Agronegócio
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f8f3e6] transition-colors">
                      Resolução Extrajudicial & Acordos
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
                    <a href="#sobre" className="hover:text-[#f8f3e6] transition-colors">
                      Sobre os Advogados
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-[#f8f3e6] transition-colors">
                      Pilares & Celeridade
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-[#f8f3e6] transition-colors">
                      Avaliações no Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#sede" className="hover:text-[#f8f3e6] transition-colors">
                      Sede em Salinas - MG
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-[#f8f3e6] transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-[#f8f3e6] transition-colors">
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
                    <MapPin size={15} className="text-[#f8f3e6] shrink-0 mt-0.5" />
                    <span>{ADDRESS_SALINAS}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={15} className="text-[#f8f3e6] shrink-0" />
                    <span>WhatsApp / Telefone: {PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={15} className="text-[#f8f3e6] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={15} className="text-[#f8f3e6] shrink-0" />
                    <span>Seg. a Sex. das 08:00 às 18:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <InstagramIcon size={15} className="text-[#f8f3e6] shrink-0" />
                    <span>Instagram: {INSTAGRAM_HANDLE}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Legal Notice & Copyright */}
            <div className="mt-12 border-t border-[#241f1a] pt-8 text-center text-[11px] text-[#ebe4d8]/50">
              <p>
                © {new Date().getFullYear()} {CLIENT_NAME} ({BRAND_LABEL}). Todos os direitos reservados.
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
                className="absolute inset-0 bg-[#080502]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#c2a366]/50 bg-white p-6 sm:p-8 shadow-2xl text-[#14110d]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe4d8] text-[#5c554b] hover:text-[#14110d] hover:border-[#c2a366] cursor-pointer"
                  aria-label="Fechar janela"
                >
                  <X size={18} />
                </button>

                {/* Modal Content */}
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#c2a366]/15 text-[#835c32]">
                    <selectedPractice.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#a1773b]">
                      Área de Atuação
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#14110d]">
                      {selectedPractice.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs font-semibold text-[#835c32] uppercase tracking-wider">
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
                          className="mt-0.5 shrink-0 text-[#c2a366]"
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
            href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta jurídica especializada com Guimarães & Santiago Advogados.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#f8f3e6] bg-gradient-to-r from-[#a1773b] via-[#d4af37] to-[#c2a366] p-3.5 sm:px-5 sm:py-3.5 text-[#080502] font-extrabold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_28px_-4px_rgba(194,163,102,0.6)] cursor-pointer"
            aria-label="Falar com Guimarães & Santiago Advogados no WhatsApp"
          >
            <WhatsAppIcon size={22} className="text-[#080502]" />
            <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold text-[#080502]">
              Falar com Advogados
            </span>
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
