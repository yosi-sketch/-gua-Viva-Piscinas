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
  Users,
  Briefcase,
  Landmark,
  BookOpen,
  Zap,
  HeartHandshake,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Firm Information — Advocacia Dr. Geovane Martins
const CLIENT_NAME = "Advocacia Dr. Geovane Martins";
const WHATSAPP_NUMBER = "5537991143595";
const PHONE_DISPLAY = "(37) 99114-3595";
const EMAIL_CONTACT = "geovanemartinsadv@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/geovanemartinsadv/";
const INSTAGRAM_HANDLE = "@geovanemartinsadv";

const ADDRESS_CLAUDIO =
  "Praça dos Ex-Combatentes, 33 - salas 2 e 3 - Cláudio, MG, 35530-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Geovane+Martins+%E2%80%94+Advocacia%0ACl%C3%A1udio+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=ea58cd80e616cff1&sxsrf=AKL5yDjQ_OV5OibZOufMUQITVPCzN92_mA:1793309974431&q=advocacia+dr.+geovane+martins+cl%C3%A1udio+endere%C3%A7o&ludocid=16554597364271703796&sa=X&ved=2ahUKEwisqf2fmOCXAxURppUCHS4vOFAQ6BN6BAg0EAI";

// Official assets generated from the new client logo & photoshoot
const EMBLEM_SRC = "/emblema-balanca.png";
const FOTO_HERO_SRC = "/dr-geovane-martins.jpg";
const FOTO_PORTRAIT_SRC = "/dr-geovane-escritorio.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Geovane Martins! Gostaria de agendar uma consulta jurídica especializada sobre o meu caso.";
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
    id: "direito-civil-indenizacoes",
    title: "Direito Cível & Ações Indenizatórias",
    category: "Contratos · Danos Morais e Materiais · Responsabilidade Civil · Cobranças · Imóveis",
    icon: Scale,
    tag: "Defesa Patrimonial · Reparação Integral · Rigor Técnico",
    summary:
      "Proteção resolutiva dos seus direitos civis e patrimoniais. Ações de indenização por danos materiais e morais, elaboração e revisão segura de contratos e execução ágil de débitos.",
    details:
      "O Direito Civil é a base da segurança nas relações interpessoais e comerciais. Com atuação combativa e atenta a cada detalhe, o Dr. Geovane Martins atua preventivamente e contenciosamente na resolução de litígios contratuais, na obtenção de liminares urgentes e na justa reparação financeira por prejuízos morais e materiais causados a você ou à sua empresa.",
    topics: [
      "Ações Indenizatórias por Danos Morais, Materiais e Estéticos com comprovação rigorosa das perdas",
      "Execução de Títulos Judiciais e Extrajudiciais (contratos, notas promissórias e dívidas inadimplidas)",
      "Elaboração, Revisão e Due Diligence de Contratos Particulares e Empresariais de Compra e Venda e Locação",
      "Direito Imobiliário: ações possessórias, regularização de escrituras, usucapião e litígios de posse",
      "Notificações Extrajudiciais fundamentadas e resolução célere de impasses sem necessidade de litígio desgastante",
      "Defesa e propositura de ações por Responsabilidade Civil e quebra contratual",
    ],
    whatsAppText:
      "Olá, Dr. Geovane Martins! Gostaria de consultar sobre uma demanda de Direito Cível / Indenização / Contratos.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    category: "Divórcio Consensual e Litigioso · Guarda & Visitas · Pensão Alimentícia · Inventário em Cartório",
    icon: Users,
    tag: "Acolhimento Humanizado · Agilidade em Cartório · Proteção Familiar",
    summary:
      "Sensibilidade, respeito e segurança jurídica para orientar e solucionar questões familiares delicadas e organizar a transmissão patrimonial com paz de espírito.",
    details:
      "Conflitos familiares exigem mais do que competência técnica: demandam empatia, escuta acolhedora e pacificação. O Dr. Geovane Martins prioriza a via consensual, realizando divórcios e inventários diretamente em Cartório de Notas para garantir economia de tempo e custos. Quando a via judicial litigiosa for necessária, atua com firmeza inabalável na defesa dos interesses de seus clientes e na proteção das crianças.",
    topics: [
      "Divórcio Consensual em Cartório: procedimento rápido, discreto e desburocratizado",
      "Divórcio Litigioso: partilha equitativa de bens e proteção contra fraudes patrimoniais",
      "Fixação, Revisão e Cobrança de Pensão Alimentícia com pedidos liminares urgentes",
      "Regulamentação de Guarda Compartilhada e Regime de Convivência e Visitas dos Filhos",
      "Inventário Extrajudicial em Cartório de Notas para partilha rápida de herança e desembaraço de bens",
      "Inventário Judicial, Testamentos e Planejamento Sucessório Familiar com reserva de usufruto",
      "Reconhecimento e Dissolução de União Estável com justa partilha de patrimônio comum",
    ],
    whatsAppText:
      "Olá, Dr. Geovane Martins! Gostaria de orientações sobre Direito de Família (Divórcio, Guarda, Pensão ou Inventário).",
  },
  {
    id: "direito-do-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Contra Abusos",
    category: "Instituições Financeiras · Negativação Indevida · Fraudes no Pix · Cobranças Abusivas",
    icon: Shield,
    tag: "Combate Incisivo · Liminar Urgente · Causa do Cliente",
    summary:
      "Atuação intransigente contra o poderio econômico de grandes empresas, bancos e operadoras que desrespeitam o consumidor ou causam prejuízos injustos.",
    details:
      "Nenhum cidadão deve se sentir indefeso diante de cobranças arbitrárias, contratos fraudulentos ou cadastramento indevido nos órgãos de proteção ao crédito (SPC/Serasa). O Dr. Geovane Martins ingressa com pedidos liminares para suspensão imediata de cobranças indevidas, exclusão de registros restritivos e obtenção de indenizações justas por danos morais e materiais.",
    topics: [
      "Pedido Liminar de Urgência para Exclusão Imediata do Nome no SPC, Serasa e Tabelionatos de Protesto",
      "Fraudes Bancárias, Golpes do Pix e Empréstimos Consignados Não Autorizados (anulação e restituição)",
      "Ações Indenizatórias por Danos Morais causados por descaso, má prestação de serviços ou fraudes",
      "Revisão de Juros Abusivos e Tarifas Bancárias Não Contratadas com devolução em dobro",
      "Ações contra Operadoras de Telefonia e Grandes Fornecedores por cancelamentos indevidos e cobrança dupla",
      "Planos de Saúde: ações urgentes com tutela liminar para cobertura de tratamentos e medicamentos recusados",
    ],
    whatsAppText:
      "Olá, Dr. Geovane Martins! Preciso de ajuda em Direito do Consumidor (Problema Bancário, Negativação ou Cobrança Indevida).",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário & Benefícios do INSS",
    category: "Aposentadorias · Auxílio por Incapacidade · BPC/LOAS · Pensão por Morte · Planejamento",
    icon: Landmark,
    tag: "Planejamento Estratégico · Concessão Segura · Amparo Legal",
    summary:
      "Assessoria completa e dedicada para conquistar o benefício previdenciário devido pelo INSS ou reverter indeferimentos administrativos injustos na Justiça Federal.",
    details:
      "Após uma vida inteira de trabalho e contribuição, ter o benefício do INSS negado ou calculado a menor é uma grande injustiça. Realizamos um diagnóstico documental minucioso, planejamento previdenciário e atuação administrativa e judicial para garantir a melhor renda mensal possível para sua aposentadoria ou benefício assistencial.",
    topics: [
      "Concessão e Planejamento de Aposentadoria (por Idade, Tempo de Contribuição e Especial com insalubridade)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Incapacidade Permanente (Invalidez)",
      "Benefício de Prestação Continuada (BPC/LOAS) para Idosos e Pessoas com Deficiência em vulnerabilidade",
      "Pensão por Morte e Auxílio-Reclusão para dependentes legais",
      "Ações Judiciais contra indeferimentos arbitrários do INSS perante a Justiça Federal",
      "Revisão da Vida Toda e recálculo da Renda Mensal Inicial (RMI) para aumento do valor do benefício",
    ],
    whatsAppText:
      "Olá, Dr. Geovane Martins! Gostaria de consultar sobre Benefício do INSS / Aposentadoria / BPC LOAS.",
  },
  {
    id: "direito-trabalhista-empregado-empresa",
    title: "Direito Trabalhista & Relações de Trabalho",
    category: "Verbas Rescisórias · Horas Extras · Rescisão Indireta · Acidentes de Trabalho · Consultoria",
    icon: Briefcase,
    tag: "Rigor Probatório · Equilíbrio · Reparação Justa",
    summary:
      "Defesa incisiva das garantias trabalhistas e assessoria preventiva para empresas, construindo soluções seguras e mitigando riscos em litígios laborais.",
    details:
      "Atuamos com sólido preparo probatório e profundo conhecimento da Consolidação das Leis do Trabalho (CLT) e jurisprudência dos Tribunais Regionais do Trabalho. Defendemos trabalhadores que tiveram seus direitos sonegados e assessoramos empresários na prevenção de passivos trabalhistas.",
    topics: [
      "Cobrança de Verbas Rescisórias Não Pagas (aviso prévio, férias proporcionais, 13º e multa do FGTS)",
      "Ações de Horas Extras, Adicional Noturno, Insalubridade e Periculosidade",
      "Rescisão Indireta do Contrato de Trabalho por falta grave cometida pelo empregador",
      "Indenizações por Acidente de Trabalho, Doenças Ocupacionais e Falta de Equipamentos de Proteção (EPI)",
      "Defesa contra Assédio Moral ou Discriminação no ambiente profissional",
      "Consultoria Preventiva Trabalhista para empresas locais e empregadores da região",
    ],
    whatsAppText:
      "Olá, Dr. Geovane Martins! Gostaria de falar sobre uma questão de Direito do Trabalho.",
  },
  {
    id: "consultoria-juridica-preventiva-extrajudicial",
    title: "Consultoria Preventiva & Soluções Sem Burocracia",
    category: "Negociação de Acordos · Análise de Riscos · Desburocratização em Cartório · Assessoria Contínua",
    icon: BookOpen,
    tag: "Eficiência Prática · Economia de Tempo · Clareza Total",
    summary:
      "A advocacia moderna resolve conflitos antes que se transformem em processos longos e onerosos. Atendimento claro, transparente e desburocratizado.",
    details:
      "Como frequentemente elogiado pelos clientes em Cláudio e região, o Dr. Geovane Martins tem o talento de traduzir termos jurídicos intrincados em orientações simples, práticas e objetivas. Isso permite tomar decisões com absoluta segurança, evitando litígios demorados e preservando seu patrimônio e tranquilidade.",
    topics: [
      "Consultoria Jurídica Estratégica para pessoas físicas, produtores rurais e empresas",
      "Mediação e Negociação Extrajudicial de acordos particulares com força executiva",
      "Pareceres Jurídicos e Auditoria Preventiva de riscos e contratos",
      "Desembaraço de pendências administrativas e cartorárias com agilidade",
      "Atendimento próximo e humanizado com acompanhamento transparente de cada etapa",
    ],
    whatsAppText:
      "Olá, Dr. Geovane Martins! Gostaria de agendar uma Consultoria Jurídica preventiva e estratégica.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Ética & Transparência"
    | "Dedicação & Empenho"
    | "Atenção & Humanidade"
    | "Eficiência & Agilidade";
  content: string;
  ownerReply?: string;
}

const clientReviews: Review[] = [
  {
    name: "Marcilio Carneiro",
    badge: "6 avaliações · 5 Estrelas · Google Maps",
    date: "1 ano atrás",
    category: "Dedicação & Empenho",
    content:
      "É com grande satisfação que recomendo o Dr. Geovane Martins, advogado altamente competente e dedicado que tive o prazer de conhecer. Dr. Geovane destaca-se pela profundidade de seu conhecimento e por sua habilidade em traduzir conceitos legais complicados em orientações claras e objetivas, o que proporciona grande confiança e tranquilidade aos seus clientes. Sua ética profissional é inquestionável, e ele demonstra uma dedicação notável para garantir que todos os aspectos do caso sejam tratados com rigor e atenção aos detalhes. Além de sua competência técnica, o Dr. Geovane Martins é conhecido por sua empatia e paciência, valores que trazem um diferencial significativo em um campo que exige tanto profissionalismo quanto sensibilidade. Seu compromisso com a defesa dos interesses de seus clientes é genuíno e inabalável, e sua postura profissional assegura que todas as partes envolvidas recebam o respeito e a consideração que merecem. Recomendo o Dr. Geovane Martins sem qualquer hesitação para qualquer pessoa ou empresa que busque um advogado confiável, dedicado e altamente qualificado. Sua atuação exemplar certamente contribuirá para o sucesso e a proteção dos interesses de seus clientes.",
    ownerReply: "Grato.",
  },
  {
    name: "Daniel Amaral",
    badge: "214 avaliações · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Dedicação & Empenho",
    content:
      "Responsabilidade, dedicação, empenho e excelência na execução de seu trabalho! Doutor Geovane é um ser humano diferenciado na nossa sociedade! Super recomendo 😃",
    ownerReply: "Muito obrigado pela confiança.",
  },
  {
    name: "Élida Ferreira",
    badge: "3 avaliações · 3 fotos · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Atenção & Humanidade",
    content:
      "Super indico, atencioso, ótimo profissional, deu a maior atenção ao meu caso, resolveu tudo que eu precisava com todo empenho.",
    ownerReply: "Obrigado pela confiança.",
  },
  {
    name: "Rhayane Cristini Martins da Rosa",
    badge: "7 avaliações · 5 Estrelas · Google Maps",
    date: "1 ano atrás",
    category: "Atenção & Humanidade",
    content: "O Dr. Geovane é um profissional incrível e o escritório é acolhedor.",
  },
  {
    name: "Luis Carlos G. Santos",
    badge: "Local Guide · 16 avaliações · 2 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Ética & Transparência",
    content:
      "Sempre muito sensato e profissional. Passa muita segurança em seu trabalho. Recomendo!",
    ownerReply: "Grato pelo feedback.",
  },
  {
    name: "Zuleica Martins",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Ética & Transparência",
    content:
      "Profissional extremamente ético, responsável e comprometido. Esclareceu todas as minhas dúvidas. Recomendo.",
    ownerReply: "Obrigado pela confiança.",
  },
  {
    name: "César de Castro Alves",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Ética & Transparência",
    content:
      "Atencioso. Ético. Comprometido com o bem-comum. E acima de tudo, justo conforme deve ser.",
    ownerReply: "Obrigado.",
  },
  {
    name: "Leandro Vieira",
    badge: "Local Guide · 37 avaliações · 7 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Eficiência & Agilidade",
    content:
      "Sinônimo de eficiência, atenção e comprometimento. Recomendo demais!!",
    ownerReply: "Obrigado pela confiança.",
  },
  {
    name: "Julia Colle",
    badge: "9 avaliações · 1 foto · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Eficiência & Agilidade",
    content:
      "Advogado excelente! Rápido atendimento e consultoria eficiente. Recomendo.",
    ownerReply: "Grato.",
  },
  {
    name: "Délia Amaral",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Dedicação & Empenho",
    content:
      "Excelente profissional. Trabalha com seriedade e comprometimento.",
    ownerReply: "Gratidão pela confiança.",
  },
  {
    name: "Débora Amaral",
    badge: "Local Guide · 35 avaliações · 57 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Atenção & Humanidade",
    content: "Super indico. É dedicado e atencioso.",
    ownerReply: "Grato pelo feedback.",
  },
  {
    name: "Samanda Ribeiro",
    badge: "2 avaliações · 3 fotos · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Dedicação & Empenho",
    content: "Trabalho excelente!",
    ownerReply: "Grato.",
  },
  {
    name: "B.claudio Amorim",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Eficiência & Agilidade",
    content: "Atendimento de excelencia, pontualidade e atenção.",
    ownerReply: "Grato.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta jurídica com o Dr. Geovane Martins?",
    answer:
      "Nosso primeiro atendimento pode ser presencial em nosso escritório em Cláudio - MG (Praça dos Ex-Combatentes, 33 - salas 2 e 3) ou 100% digital via WhatsApp (37) 99114-3595 e videochamada, atendendo com total comodidade clientes de qualquer lugar do Brasil. Durante a consulta, realizamos uma escuta humanizada e detalhada do seu relato, avaliamos os documentos disponíveis e apresentamos caminhos claros e desmistificados para a resolução do seu caso.",
  },
  {
    question: "Como o Dr. Geovane Martins atua em Divórcios e Inventários?",
    answer:
      "Sempre que viável e acordado entre as partes, priorizamos a via extrajudicial diretamente em Cartório de Notas. Essa via reduz drasticamente o tempo de tramitação e os custos financeiros e emocionais. Caso haja litígio ou menores envolvidos no inventário, atuamos no âmbito judicial com máxima firmeza na partilha equitativa de bens e proteção dos direitos da família.",
  },
  {
    question: "Tive problemas com banco, negativação indevida ou golpe. O que pode ser feito?",
    answer:
      "Ingressamos imediatamente com uma medida judicial com pedido de liminar de urgência. O Judiciário pode determinar a imediata exclusão do seu CPF dos cadastros de inadimplentes (SPC/Serasa) sob pena de multa diária, além de requerermos a declaração de inexistência do débito e reparação por danos morais e materiais decorrentes do transtorno.",
  },
  {
    question: "O escritório atua em pedidos de Aposentadoria e Benefícios do INSS?",
    answer:
      "Sim. Realizamos a análise documental do seu extrato de contribuições (CNIS), planejamento previdenciário para obter o melhor benefício e requerimento administrativo no INSS. Em caso de indeferimento indevido ou concessão com valor inferior ao devido, ingressamos com ação judicial para restabelecer o seu direito.",
  },
  {
    question: "O Dr. Geovane Martins atende apenas em Cláudio ou em outras cidades e estados?",
    answer:
      "Nosso escritório físico está localizado na Praça dos Ex-Combatentes, 33 - salas 2 e 3 em Cláudio - MG, onde recebemos presencialmente clientes de Cláudio, Divinópolis, Carmo do Cajuru, Itapecerica, Oliveira e toda a região centro-oeste de Minas. Além disso, através dos sistemas digitais da Justiça (PJe), prestamos atendimento e acompanhamento processual para clientes em todo o território nacional.",
  },
  {
    question: "Como acompanho o andamento do meu processo após a contratação?",
    answer:
      "Prezamos pela transparência absoluta e comunicação constante. Conforme destacado nas avaliações do escritório no Google, o Dr. Geovane mantém os clientes informados a cada movimentação relevante, traduzindo despachos e decisões em linguagem clara para que você tenha total tranquilidade e segurança.",
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
    "Ética & Transparência",
    "Dedicação & Empenho",
    "Atenção & Humanidade",
    "Eficiência & Agilidade",
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
      <main className="min-h-screen bg-[#faf8f3] text-[#0f131a] selection:bg-[#151922] selection:text-[#f3d893]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (LUXURY OBSIDIAN & GOLD ACCENT)     */}
        {/* ======================================================== */}
        <div className="border-b border-[#1e2430] bg-[#080a0e] py-2 text-xs text-[#e5dfd2]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d4a843] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f3d893]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f3d893] font-semibold">
                ADVOCACIA DR. GEOVANE MARTINS · Cláudio - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#e5dfd2]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f3d893]"
              >
                <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                <span className="font-bold text-[#f3d893]">5,0 ★</span> (26 avaliações no Google · Cláudio - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#1e2430] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#f3d893] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#d4a843]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (OFFICIAL DR. GEOVANE MARTINS)   */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#e5dfd2] bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-[#e5dfd2]/80 bg-[#faf8f3]/95 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Dr. Geovane Martins Horizontal Logo */}
            <a
              href="#"
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Advocacia Dr. Geovane Martins - Início"
            >
              <Image
                src="/logo-horizontal.png"
                alt="Advocacia Dr. Geovane Martins"
                width={250}
                height={52}
                className="h-[42px] sm:h-[48px] md:h-[52px] w-auto object-contain drop-shadow-xs"
                priority
                unoptimized
              />
            </a>

            {/* Center: Desktop Navigation (Refined, concise & balanced) */}
            <nav className="hidden items-center gap-5 lg:gap-6 xl:gap-7 lg:flex">
              <a href="#servicos" className="nav-link">
                Atuação
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

            {/* Right Action: WhatsApp CTA (Metallic Polished Gold) */}
            <div className="flex shrink-0 items-center gap-2.5">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Gostaria de agendar uma consulta sobre o meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0 shadow-md"
              >
                <WhatsAppIcon size={15} className="text-[#080a0e]" />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#e5dfd2] bg-white text-[#0f131a] transition-colors hover:border-[#d4a843] hover:text-[#080a0e] lg:hidden cursor-pointer shrink-0"
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
                className="border-b border-[#e5dfd2] bg-white px-5 py-6 lg:hidden shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#e5dfd2]">
                    <Image
                      src="/logo-horizontal.png"
                      alt="Advocacia Dr. Geovane Martins"
                      width={220}
                      height={46}
                      className="h-[42px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#0f131a] uppercase transition-colors hover:text-[#d4a843]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#d4a843]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#0f131a] uppercase transition-colors hover:text-[#d4a843]"
                  >
                    <span>Sobre Dr. Geovane Martins</span>
                    <ArrowRight size={14} className="text-[#d4a843]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#0f131a] uppercase transition-colors hover:text-[#d4a843]"
                  >
                    <span>Pilares & Ética Profissional</span>
                    <ArrowRight size={14} className="text-[#d4a843]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#0f131a] uppercase transition-colors hover:text-[#d4a843]"
                  >
                    <span>Avaliações no Google (26 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#d4a843]" />
                  </a>
                  <a
                    href="#sede"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#0f131a] uppercase transition-colors hover:text-[#d4a843]"
                  >
                    <span>Escritório em Cláudio - MG</span>
                    <ArrowRight size={14} className="text-[#d4a843]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#0f131a] uppercase transition-colors hover:text-[#d4a843]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#d4a843]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#0f131a] uppercase transition-colors hover:text-[#d4a843]"
                  >
                    <span>Contato & Localização</span>
                    <ArrowRight size={14} className="text-[#d4a843]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Gostaria de tirar dúvidas sobre meu caso pelo WhatsApp.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar com o Dr. Geovane no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DO DR. GEOVANE MARTINS  */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#faf8f3]">
          {/* Subtle Warm Amber Gold Radial Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#f3d893]/20 via-[#d4a843]/5 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#d4a843]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#e5dfd2] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#151922] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#d4a843] animate-pulse" />
                    ADVOCACIA DR. GEOVANE MARTINS · CLÁUDIO - MG
                  </span>
                </div>

                {/* H1 Headline */}
                <h1 className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#0f131a] sm:text-5xl lg:text-[3.25rem]">
                  Defesa Jurídica Estratégica, Rigor Ético e Dedicação Integral em{" "}
                  <span className="bg-gradient-to-r from-[#8c6218] via-[#d4a843] to-[#f3d893] bg-clip-text text-transparent">
                    Cláudio e em Todo o Brasil.
                  </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="mt-6 text-base leading-relaxed text-[#4e5564] sm:text-lg lg:max-w-xl">
                  Sob a liderança do <strong className="font-semibold text-[#0f131a]">Dr. Geovane Martins</strong>, unimos profundidade técnica, acolhimento empático e comunicação clara para traduzir o direito em segurança real, protegendo o seu patrimônio e garantindo a defesa intransigente dos seus direitos.
                </p>

                {/* Quick Highlights Pills */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5dfd2] bg-white px-3 py-1 text-xs font-semibold text-[#151922] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#d4a843]" />
                    Direito Civil & Indenizações
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5dfd2] bg-white px-3 py-1 text-xs font-semibold text-[#151922] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#d4a843]" />
                    Direito de Família & Inventários
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5dfd2] bg-white px-3 py-1 text-xs font-semibold text-[#151922] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#d4a843]" />
                    Direito do Consumidor & Bancário
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5dfd2] bg-white px-3 py-1 text-xs font-semibold text-[#151922] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#d4a843]" />
                    Previdenciário & INSS
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Gostaria de agendar uma consulta jurídica sobre o meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Agendar Consulta no WhatsApp</span>
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
                <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-[#e5dfd2] pt-6 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#0f131a]">
                      5,0 no Google
                    </span>
                    <span className="text-xs text-[#4e5564]">
                      (26 avaliações verificadas)
                    </span>
                  </div>

                  <span className="hidden h-3.5 w-px bg-[#e5dfd2] sm:inline-block" />

                  <div className="flex items-center gap-2 text-xs text-[#4e5564]">
                    <Shield size={14} className="text-[#d4a843]" />
                    <span>Sede na Praça dos Ex-Combatentes, 33 - Cláudio - MG</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo of Dr. Geovane Martins */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  {/* Outer Luxury Metallic Border Frame */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4a843]/40 bg-white p-2 shadow-2xl shadow-[#151922]/15">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f3efe6] to-[#e5dfd2]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Geovane Martins — Advogado em Cláudio - MG"
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-102"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette for High-Contrast Typography Badge */}
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080a0e]/95 via-[#080a0e]/50 to-transparent" />

                      {/* Overlay Identification Badge */}
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#d4a843]/45 bg-[#080a0e]/90 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-cinzel text-base font-bold text-white tracking-wide">
                              Dr. Geovane Martins
                            </p>
                            <p className="text-[11px] font-semibold text-[#f3d893] uppercase tracking-wider">
                              Advogado · OAB/MG
                            </p>
                            <p className="text-[10px] text-[#e5dfd2] mt-0.5">
                              Atendimento em Cláudio e em todo o Brasil
                            </p>
                          </div>
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#d4a843]/40 bg-[#151922] p-1.5 shadow-md">
                            <Image
                              src={EMBLEM_SRC}
                              alt="Balança da Justiça Dr. Geovane Martins"
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
                  <div className="absolute -bottom-6 -left-4 sm:-bottom-7 sm:-left-7 rounded-xl border border-[#d4a843]/40 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:max-w-[275px]">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-[#faf8f3] border border-[#e5dfd2]">
                        <GoogleIcon size={14} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[#f59e0b]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} className="fill-current" />
                          ))}
                        </div>
                        <p className="text-[10px] font-bold text-[#0f131a]">
                          5,0 Estrelas no Google
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] leading-snug text-[#4e5564] italic">
                      &quot;Responsabilidade, dedicação, empenho e excelência na execução de seu trabalho!&quot;
                    </p>
                    <p className="mt-1 text-[9px] font-semibold text-[#8c6218]">
                      — Daniel Amaral (Avaliação no Google)
                    </p>
                  </div>

                  {/* Floating Badge Top-Right: Sede Cláudio */}
                  <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-lg border border-[#d4a843]/50 bg-[#080a0e] px-3.5 py-2 shadow-lg text-white">
                    <p className="text-[9px] font-bold tracking-widest text-[#f3d893] uppercase">
                      CLÁUDIO · MG
                    </p>
                    <p className="text-[11px] font-bold text-white">
                      Pça. dos Ex-Combatentes, 33
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
        <section className="border-y border-[#1e2430] bg-[#080a0e] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 text-center">
              {/* Stat 1: Google Rating */}
              <div className="flex flex-col items-center border-r border-[#1e2430] pr-4 last:border-r-0 md:pr-0">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#f3d893]">
                  <span>5,0</span>
                  <div className="flex text-[#f59e0b]">
                    <Star size={18} className="fill-current" />
                  </div>
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Avaliação Máxima
                </p>
                <p className="text-[11px] text-[#e5dfd2]/70">
                  26 avaliações 5 estrelas no Google
                </p>
              </div>

              {/* Stat 2: Ética & Compromisso */}
              <div className="flex flex-col items-center md:border-r md:border-[#1e2430] md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f3d893]">
                  100%
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Ética Inquestionável
                </p>
                <p className="text-[11px] text-[#e5dfd2]/70">
                  Transparência e rigor absoluto
                </p>
              </div>

              {/* Stat 3: Agilidade & Eficiência */}
              <div className="flex flex-col items-center border-r border-[#1e2430] pr-4 last:border-r-0 md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f3d893]">
                  Ágil
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Atendimento Eficiente
                </p>
                <p className="text-[11px] text-[#e5dfd2]/70">
                  Respostas rápidas e objetivas
                </p>
              </div>

              {/* Stat 4: Geographic Reach */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f3d893]">
                  Brasil
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Sede em Cláudio - MG
                </p>
                <p className="text-[11px] text-[#e5dfd2]/70">
                  Atendimento presencial & online
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (SERVIÇOS ESPECIALIZADOS)      */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#faf8f3]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">
                EXPERTISE JURÍDICA ESTRATÉGICA
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f131a] sm:text-4xl lg:text-[2.6rem]">
                Áreas de Atuação Especializada
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4e5564] sm:text-base">
                Conheça nossos pilares de atuação. Cada demanda é conduzida com profundidade técnica, ética exemplar e dedicação genuína aos seus direitos.
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
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e5dfd2] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#d4a843]/60 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Row: Icon + Tag */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-[#f3d893]/15 text-[#8c6218] transition-colors group-hover:bg-[#151922] group-hover:text-[#f3d893] group-hover:border-[#d4a843]">
                          <IconComponent size={24} />
                        </div>
                        <span className="rounded-full border border-[#e5dfd2] bg-[#faf8f3] px-3 py-1 text-[10px] font-bold text-[#8c6218] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      {/* Area Title */}
                      <h3 className="mt-5 font-serif text-xl font-bold text-[#0f131a] transition-colors group-hover:text-[#8c6218]">
                        {area.title}
                      </h3>

                      {/* Category Subtext */}
                      <p className="mt-1 text-[11px] font-semibold text-[#b88628] uppercase tracking-wider">
                        {area.category}
                      </p>

                      {/* Summary */}
                      <p className="mt-3.5 text-xs leading-relaxed text-[#4e5564]">
                        {area.summary}
                      </p>

                      {/* Key Topics List */}
                      <ul className="mt-4 space-y-2 border-t border-[#e5dfd2]/70 pt-4 text-xs text-[#0f131a]">
                        {area.topics.slice(0, 3).map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#d4a843]"
                            />
                            <span className="leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Actions */}
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#e5dfd2] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8c6218] transition-colors hover:text-[#0f131a] cursor-pointer"
                      >
                        <span>Ver detalhes completos</span>
                        <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-8 items-center justify-center rounded-lg bg-[#d4a843]/15 text-[#8c6218] transition-all hover:bg-[#d4a843] hover:text-[#080a0e]"
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
            <div className="mt-12 rounded-2xl border border-[#d4a843]/40 bg-gradient-to-r from-[#080a0e] via-[#0f131a] to-[#151922] p-8 text-white shadow-xl sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div className="max-w-2xl">
                <span className="rounded-full border border-[#f3d893]/30 bg-[#f3d893]/10 px-3 py-1 text-[10px] font-bold text-[#f3d893] uppercase tracking-wider">
                  ATENDIMENTO DIRETO COM O ADVOGADO
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                  Precisa de uma orientação personalizada para o seu caso?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#e5dfd2]">
                  Cada situação requer um olhar técnico e estratégico único. Entre em contato direto pelo WhatsApp para analisarmos o seu caso com total sigilo e dedicação.
                </p>
              </div>

              <div className="mt-6 sm:mt-0 shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Gostaria de uma avaliação inicial sobre o meu caso.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Conversar com o Dr. Geovane</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE DR. GEOVANE MARTINS                      */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#e5dfd2] bg-[#f3efe6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Portrait at Office Desk */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  {/* Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4a843]/40 bg-white p-2.5 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#faf8f3]">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dr. Geovane Martins — Atendimento e Consultoria Jurídica em Cláudio - MG"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                      />
                    </div>
                  </div>

                  {/* Secondary Office Sede Badge */}
                  <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-5 rounded-xl border border-[#d4a843]/60 bg-[#080a0e] p-3.5 shadow-2xl text-white max-w-[240px]">
                    <div className="flex items-center gap-2 text-[#f3d893] text-xs font-bold uppercase">
                      <MapPin size={15} />
                      <span>Cláudio · MG</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-white">
                      Praça dos Ex-Combatentes, 33
                    </p>
                    <p className="text-[10px] text-[#e5dfd2]/70 mt-0.5">
                      Salas 2 e 3 · Escritório acolhedor
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Values */}
              <div className="lg:col-span-7">
                <p className="eyebrow mb-3.5">TRAJETÓRIA & VOCAÇÃO</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f131a] sm:text-4xl lg:text-[2.6rem]">
                  Sobre o Dr. Geovane Martins
                </h2>
                <p className="mt-2 text-sm font-bold text-[#b88628] tracking-wider uppercase">
                  Advocacia Ética · Rigor Técnico · Atendimento Humano & Acolhedor
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#4e5564] sm:text-base">
                  <p>
                    Com escritório sediado em Cláudio - MG, o <strong className="font-semibold text-[#0f131a]">Dr. Geovane Martins</strong> consolidou sua atuação profissional fundamentada em preceitos inegociáveis: ética profissional inquestionável, rigor aos detalhes e uma dedicação profunda a cada causa que assume.
                  </p>
                  <p>
                    Reconhecido pelos próprios clientes e pela comunidade como um profissional que <em className="italic">&quot;traduz conceitos legais complicados em orientações claras e objetivas&quot;</em>, o Dr. Geovane se destaca pela paciência, empatia e sensibilidade para lidar com demandas humanas e patrimoniais complexas.
                  </p>
                  <p>
                    Seja em causas cíveis, de família e sucessões, ações consumeristas ou previdenciárias, seu compromisso é assegurar que você receba um atendimento de excelência, com segurança técnica e a tranquilidade de ter um defensor incansável ao seu lado.
                  </p>
                </div>

                {/* 4 Pillars of Action */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#e5dfd2] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#0f131a] text-xs sm:text-sm">
                      <Shield size={16} className="text-[#d4a843]" />
                      <span>Ética Inquestionável</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#4e5564]">
                      Conduta reta, transparente e alinhada à justiça.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e5dfd2] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#0f131a] text-xs sm:text-sm">
                      <HeartHandshake size={16} className="text-[#d4a843]" />
                      <span>Empatia & Paciência</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#4e5564]">
                      Acolhimento respeitoso a cada história e pessoa.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e5dfd2] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#0f131a] text-xs sm:text-sm">
                      <Zap size={16} className="text-[#d4a843]" />
                      <span>Eficiência & Agilidade</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#4e5564]">
                      Respostas rápidas, objetividade e pontualidade.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e5dfd2] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#0f131a] text-xs sm:text-sm">
                      <Award size={16} className="text-[#d4a843]" />
                      <span>Dedicação Notável</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#4e5564]">
                      Atenção absoluta aos mínimos detalhes do caso.
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Gostaria de conversar diretamente com você sobre uma demanda jurídica.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com o Dr. Geovane no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#4e5564] transition-colors hover:text-[#0f131a]"
                  >
                    <InstagramIcon size={16} className="text-[#d4a843]" />
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
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#080a0e] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow-dark justify-center mb-3.5">
                POR QUE CONFIAR EM NOSSO TRABALHO
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Os Valores que Sustentam Nossa Reputação
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#e5dfd2] sm:text-base">
                Aprovado com nota máxima 5,0 por clientes em Cláudio e em todo o Brasil.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-[#1e2430] bg-[#0f131a] p-7 transition-all duration-300 hover:border-[#d4a843]/50 hover:bg-[#151922]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-[#d4a843]/10 text-[#f3d893]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Ética Inquestionável
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e5dfd2]/75">
                  &quot;Profissional extremamente ético, responsável e comprometido. Justo conforme deve ser.&quot; — Atuação sempre pautada pela retidão e pelo bem comum.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[#1e2430] bg-[#0f131a] p-7 transition-all duration-300 hover:border-[#d4a843]/50 hover:bg-[#151922]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-[#d4a843]/10 text-[#f3d893]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Empatia & Atenção
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e5dfd2]/75">
                  Escuta atenta e respeito integral. O Dr. Geovane dedica tempo para entender cada aspecto da sua demanda, acolhendo você com serenidade.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-[#1e2430] bg-[#0f131a] p-7 transition-all duration-300 hover:border-[#d4a843]/50 hover:bg-[#151922]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-[#d4a843]/10 text-[#f3d893]">
                  <BookOpen size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Clareza & Segurança
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e5dfd2]/75">
                  Habilidade singular em traduzir conceitos jurídicos complexos em orientações transparentes e acessíveis, transmitindo total segurança jurídica.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-[#1e2430] bg-[#0f131a] p-7 transition-all duration-300 hover:border-[#d4a843]/50 hover:bg-[#151922]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#d4a843]/30 bg-[#d4a843]/10 text-[#f3d893]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Eficiência & Pontualidade
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e5dfd2]/75">
                  Respostas rápidas, condução diligente e compromisso rigoroso com os prazos e resultados esperados pelo cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: PROVA SOCIAL / GOOGLE REVIEWS (5,0 ★)           */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#faf8f3]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header with Google Badge */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e5dfd2] bg-white px-4 py-1.5 shadow-2xs">
                <GoogleIcon size={16} />
                <span className="text-xs font-bold text-[#0f131a]">
                  Google Avaliações Verificadas
                </span>
                <span className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </span>
                <span className="text-xs font-bold text-[#8c6218]">
                  5,0 / 5,0 (26 avaliações)
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#0f131a] sm:text-4xl lg:text-[2.6rem]">
                O Reconhecimento de Nossos Clientes
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4e5564] sm:text-base">
                Depoimentos reais registrados no perfil oficial do Google da Advocacia Dr. Geovane Martins em Cláudio - MG.
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
                      ? "border border-[#d4a843] bg-[#080a0e] text-[#f3d893] shadow-sm"
                      : "border border-[#e5dfd2] bg-white text-[#4e5564] hover:border-[#d4a843] hover:text-[#0f131a]"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-[#e5dfd2] bg-white p-6 shadow-sm transition-all hover:border-[#d4a843]/50 hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Stars + Date */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#4e5564]">{review.date}</span>
                    </div>

                    {/* Category Tag */}
                    <span className="mt-3 inline-block rounded-md bg-[#f3d893]/20 px-2.5 py-0.5 text-[9px] font-bold text-[#8c6218] uppercase tracking-wider">
                      {review.category}
                    </span>

                    {/* Review Text */}
                    <p className="mt-3.5 text-xs leading-relaxed text-[#0f131a] italic">
                      &quot;{review.content}&quot;
                    </p>

                    {/* Owner Response if present */}
                    {review.ownerReply && (
                      <div className="mt-4 rounded-xl border border-[#d4a843]/20 bg-[#faf8f3] p-3 text-[11px] text-[#4e5564]">
                        <p className="font-bold text-[#8c6218] text-[10px] uppercase tracking-wider">
                          Resposta do Dr. Geovane Martins:
                        </p>
                        <p className="mt-1 leading-snug">{review.ownerReply}</p>
                      </div>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#e5dfd2]/70 pt-4">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#080a0e] font-cinzel text-xs font-bold text-[#f3d893]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f131a]">{review.name}</p>
                      <p className="text-[10px] text-[#4e5564]">{review.badge}</p>
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
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d4a843] bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0f131a] transition-all hover:bg-[#080a0e] hover:text-[#f3d893] cursor-pointer"
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
        {/* DOBRA 7: ESCRITÓRIO EM CLÁUDIO & ATENDIMENTO NACIONAL    */}
        {/* ======================================================== */}
        <section id="sede" className="border-t border-[#e5dfd2] py-20 sm:py-26 bg-[#f3efe6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Office Presentation Image */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-[480px] lg:max-w-none overflow-hidden rounded-2xl border-2 border-[#d4a843]/50 bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#080a0e]">
                    <Image
                      src={FOTO_PORTRAIT_SRC}
                      alt="Dr. Geovane Martins em seu escritório em Cláudio - MG"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    />

                    {/* Gradient Overlay for Address */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/75 to-transparent p-6 text-white">
                      <div className="flex items-center gap-2 text-[#f3d893] text-xs font-bold uppercase tracking-wider">
                        <MapPin size={16} />
                        <span>Sede em Cláudio - Minas Gerais</span>
                      </div>
                      <p className="mt-1 font-serif text-lg font-bold text-white">
                        Praça dos Ex-Combatentes, 33
                      </p>
                      <p className="text-xs text-[#e5dfd2]">
                        Salas 2 e 3, Cláudio - MG, CEP 35530-000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Office Hours */}
              <div className="lg:col-span-6">
                <p className="eyebrow mb-3.5">ESTRUTURA & LOCALIZAÇÃO</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f131a] sm:text-4xl lg:text-[2.6rem]">
                  Atendimento Presencial Acolhedor e Atuação Digital em Todo o País
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#4e5564] sm:text-base">
                  Nosso escritório em Cláudio foi estruturado para proporcionar máxima discrição, acolhimento e conforto. Além das consultas presenciais com agendamento prévio, oferecemos atendimento digital humanizado para clientes em qualquer região do Brasil.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Address Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#e5dfd2] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#d4a843]/15 text-[#8c6218]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f131a] uppercase tracking-wider">
                        Endereço Completo
                      </p>
                      <p className="text-xs text-[#4e5564] mt-0.5">
                        {ADDRESS_CLAUDIO}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#8c6218] hover:text-[#0f131a]"
                      >
                        <span>Abrir rotas no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#e5dfd2] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#d4a843]/15 text-[#8c6218]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f131a] uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="text-xs text-[#4e5564] mt-0.5">
                        Segunda a Sexta-feira: <strong>09:00 às 18:00</strong>
                      </p>
                      <p className="text-[11px] text-[#8c6218] font-semibold mt-0.5">
                        Atendimento com hora marcada ou consulta online imediata.
                      </p>
                    </div>
                  </div>

                  {/* Contact Phones */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#e5dfd2] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#d4a843]/15 text-[#8c6218]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f131a] uppercase tracking-wider">
                        Telefone & WhatsApp Oficial
                      </p>
                      <p className="text-xs text-[#4e5564] mt-0.5">
                        WhatsApp / Contato: <strong>{PHONE_DISPLAY}</strong>
                      </p>
                      <p className="text-xs text-[#4e5564]">
                        E-mail: <strong>{EMAIL_CONTACT}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sede CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Geovane! Gostaria de agendar um horário para visita em seu escritório em Cláudio.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d4a843] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0f131a] transition-all hover:bg-[#080a0e] hover:text-[#f3d893]"
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
        {/* DOBRA 8: DÚVIDAS FREQUENTES (FAQ ACCORDION)              */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#faf8f3]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">ESCLARECIMENTOS JURÍDICOS</p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f131a] sm:text-4xl lg:text-[2.6rem]">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4e5564] sm:text-base">
                Tire suas principais dúvidas sobre nosso atendimento, procedimentos e prazos.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-[#e5dfd2] bg-white transition-all hover:border-[#d4a843]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-serif text-base sm:text-lg font-bold text-[#0f131a] transition-colors hover:text-[#8c6218] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#faf8f3] border border-[#e5dfd2] text-[#8c6218]">
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
                          className="border-t border-[#e5dfd2]/70 px-5 pb-6 pt-4 sm:px-6 text-xs sm:text-sm leading-relaxed text-[#4e5564]"
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
              <p className="text-xs text-[#4e5564]">
                Ainda tem alguma dúvida específica sobre o seu caso?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Tenho uma dúvida sobre meu caso e gostaria de orientação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#8c6218] underline decoration-[#d4a843] hover:text-[#0f131a] text-xs sm:text-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Converse diretamente com o Dr. Geovane pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: BANNER DE CONTATO / CTA FINAL (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#080a0e] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#d4a843]/40 bg-gradient-to-b from-[#0f131a] to-[#080a0e] p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#d4a843]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#f3d893]/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f3d893]/30 bg-[#f3d893]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f3d893]">
                    <span className="size-1.5 rounded-full bg-[#f3d893] animate-pulse" />
                    ATENDIMENTO PRIORITÁRIO & SIGILOSO
                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Proteja Seus Direitos e Seu Patrimônio com uma Advocacia Dedicada e Combativa.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#e5dfd2] sm:text-base">
                    Não adie a resolução do seu impasse jurídico. Agende hoje mesmo uma consulta com o Dr. Geovane Martins e receba uma orientação estratégica e personalizada.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#e5dfd2]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f3d893]" />
                      <span>Atendimento humanizado e sem promessas vazias</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f3d893]" />
                      <span>Sigilo profissional irrestrito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f3d893]" />
                      <span>Sede na Praça dos Ex-Combatentes em Cláudio - MG</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Geovane Martins! Gostaria de agendar uma consulta jurídica especializada sobre meu caso.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d4a843]/50 bg-[#151922] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f3d893] transition-all hover:bg-[#d4a843] hover:text-[#080a0e]"
                  >
                    <Phone size={15} />
                    <span>Ligar: {PHONE_DISPLAY}</span>
                  </a>

                  <p className="text-center text-[10px] text-[#e5dfd2]/60 mt-1">
                    Atendimento de Segunda a Sexta, das 09h às 18h.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER (SOFISTICADO, COMPLETO & 100% LIMPO)              */}
        {/* ======================================================== */}
        <footer className="border-t border-[#1e2430] bg-[#080a0e] pt-16 pb-12 text-[#e5dfd2]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Col 1: Brand & Logo */}
              <div>
                <a href="#" className="flex items-center gap-3">
                  <Image
                    src={EMBLEM_SRC}
                    alt="Advocacia Dr. Geovane Martins"
                    width={48}
                    height={48}
                    className="h-11 w-auto object-contain"
                    unoptimized
                  />
                  <div>
                    <p className="font-cinzel text-sm font-bold text-white tracking-wider">
                      GEOVANE MARTINS
                    </p>
                    <p className="text-[9px] font-bold text-[#f3d893] tracking-[0.2em] uppercase">
                      A D V O C A C I A
                    </p>
                  </div>
                </a>
                <p className="mt-4 text-xs leading-relaxed text-[#e5dfd2]/70">
                  Advocacia ética, ágil e combativa em Direito Civil, Família & Sucessões, Direito do Consumidor e Previdenciário. Sede física em Cláudio - MG e atendimento digital para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#d4a843]/40 bg-[#151922] text-[#f3d893] transition-colors hover:bg-[#d4a843] hover:text-[#080a0e]"
                    aria-label="Instagram Dr. Geovane Martins Advogado"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#d4a843]/40 bg-[#151922] text-[#f3d893] transition-colors hover:bg-[#d4a843] hover:text-[#080a0e]"
                    aria-label="WhatsApp Dr. Geovane Martins"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#d4a843]/40 bg-[#151922] text-[#f3d893] transition-colors hover:bg-[#d4a843] hover:text-[#080a0e]"
                    aria-label="Avaliações no Google"
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
                <ul className="mt-4 space-y-2.5 text-xs text-[#e5dfd2]/70">
                  <li>
                    <a href="#servicos" className="hover:text-[#f3d893] transition-colors">
                      Direito Civil & Indenizações
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f3d893] transition-colors">
                      Direito de Família & Sucessões
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f3d893] transition-colors">
                      Divórcio & Inventário em Cartório
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f3d893] transition-colors">
                      Direito do Consumidor & Bancário
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f3d893] transition-colors">
                      Previdenciário & Benefícios do INSS
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f3d893] transition-colors">
                      Consultoria Jurídica Preventiva
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Links Rápidos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Navegação Rápida
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-[#e5dfd2]/70">
                  <li>
                    <a href="#sobre" className="hover:text-[#f3d893] transition-colors">
                      Sobre Dr. Geovane Martins
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-[#f3d893] transition-colors">
                      Pilares & Ética Profissional
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-[#f3d893] transition-colors">
                      Avaliações no Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#sede" className="hover:text-[#f3d893] transition-colors">
                      Escritório em Cláudio - MG
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-[#f3d893] transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-[#f3d893] transition-colors">
                      Contato & Agendamento
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4: Sede & Contatos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Sede & Contato
                </p>
                <ul className="mt-4 space-y-3 text-xs text-[#e5dfd2]/70">
                  <li className="flex items-start gap-2">
                    <MapPin size={15} className="text-[#f3d893] shrink-0 mt-0.5" />
                    <span>{ADDRESS_CLAUDIO}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={15} className="text-[#f3d893] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={15} className="text-[#f3d893] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={15} className="text-[#f3d893] shrink-0" />
                    <span>Seg a Sex: 09:00 às 18:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <InstagramIcon size={15} className="text-[#f3d893] shrink-0" />
                    <span>Instagram: {INSTAGRAM_HANDLE}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Legal Notice & Copyright */}
            <div className="mt-12 border-t border-[#1e2430] pt-8 text-center text-[11px] text-[#e5dfd2]/50">
              <p>
                © {new Date().getFullYear()} {CLIENT_NAME}. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Atuação em estrita conformidade com o Código de Ética e Disciplina da OAB e a legislação brasileira.
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
                className="absolute inset-0 bg-[#080a0e]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#d4a843]/50 bg-white p-6 sm:p-8 shadow-2xl text-[#0f131a]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-[#faf8f3] border border-[#e5dfd2] text-[#4e5564] hover:text-[#0f131a] hover:border-[#d4a843] cursor-pointer"
                  aria-label="Fechar janela"
                >
                  <X size={18} />
                </button>

                {/* Modal Content */}
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#d4a843]/15 text-[#8c6218]">
                    <selectedPractice.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b88628]">
                      Área Especializada
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0f131a]">
                      {selectedPractice.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs font-semibold text-[#8c6218] uppercase tracking-wider">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#4e5564]">
                  {selectedPractice.details}
                </p>

                <div className="mt-6">
                  <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#0f131a]">
                    Principais Procedimentos e Atuação:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#0f131a]">
                    {selectedPractice.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-[#d4a843]"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e5dfd2]">
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
                    className="rounded-lg border border-[#e5dfd2] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#4e5564] hover:bg-[#faf8f3] hover:text-[#0f131a] cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
