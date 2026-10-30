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
  FileText,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Professional Information — Dra. Nayara Medina
const CLIENT_NAME = "Dra. Nayara Medina — Advogada Previdenciária";
const LAWYER_NAME = "Dra. Nayara Medina";
const LAWYER_TITLE = "Advogada Previdenciarista · OAB/MG 184.540";
const WHATSAPP_NUMBER = "5537998351816";
const PHONE_DISPLAY = "(37) 99835-1816";
const EMAIL_CONTACT = "contato@nayaramedina.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/nayaramedina.adv";
const INSTAGRAM_HANDLE = "@nayaramedina.adv";

const ADDRESS_PITANGUI = "R. Maria Tangara, 20, Pitangui - MG, 35650-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Nayara+Medina+%E2%80%94+Advogada+Previdenci%C3%A1ria%0APitangui+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Maria+Tangara,+20,+Pitangui+-+MG,+35650-000";

// Official assets from public folder
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const EMBLEM_SRC = "/emblem.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_PORTRAIT_SRC = "/portrait.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Nayara Medina! Gostaria de uma consulta jurídica especializada sobre o meu benefício do INSS / aposentadoria.";
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
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário Personalizado",
    category: "Cálculo de RMI · Análise de CNIS · Simulação de Regras de Transição · Projeção de Valor",
    icon: FileText,
    tag: "Máxima Renda · Prevenção de Perdas · Decisão Inteligente",
    summary:
      "Descubra com exatidão a melhor data para se aposentar e qual regra de transição garante o valor máximo de benefício, corrigindo falhas no CNIS antes do pedido ao INSS.",
    details:
      "Aposentar-se sem planejamento prévio pode custar dezenas ou até centenas de milhares de reais ao longo da vida. Com o Planejamento Previdenciário da Dra. Nayara Medina, realizamos uma auditoria minuciosa em todo o seu histórico contributivo (CNIS), identificamos pendências cadastrais, tempo faltante e averbações possíveis, simulando detalhadamente todas as regras de transição da Reforma da Previdência (EC 103/2019) para que você conquiste a melhor aposentadoria possível sem surpresas desagradáveis.",
    topics: [
      "Auditoria completa do CNIS e retificação de vínculos extemporâneos, rasurados ou sem remuneração informada",
      "Simulação comparativa de todas as regras de transição (pontos, pedágio de 50%, pedágio de 100%, idade mínima)",
      "Projeção do cálculo da Renda Mensal Inicial (RMI) para atingir o teto previdenciário viável",
      "Orientação estratégica sobre se vale a pena continuar contribuindo e qual o valor ideal de recolhimento",
      "Aproveitamento de tempo de serviço militar, período rural (segurado especial) e regime próprio de previdência",
      "Relatório executivo claro, didático e fundamentado com cronograma e opções seguras de tomada de decisão",
    ],
    whatsAppText:
      "Olá, Dra. Nayara Medina! Gostaria de agendar um Planejamento Previdenciário personalizado para o meu caso.",
  },
  {
    id: "aposentadorias-inss",
    title: "Concessão de Aposentadorias do INSS",
    category: "Idade Urbana & Rural · Tempo de Contribuição · Pessoa com Deficiência (PCD) · Professor",
    icon: Landmark,
    tag: "Concessão Segura · Celeridade · Sem Burocracia",
    summary:
      "Requerimento administrativo e acompanhamento integral do seu pedido de aposentadoria no INSS ou na Justiça Federal, garantindo o deferimento no menor prazo possível.",
    details:
      "A concessão de aposentadoria é a consagração de anos de esforço e trabalho. Conduzimos todo o processo com rigor documental absoluto: desde a preparação minuciosa do processo administrativo até a defesa de recursos ou ingresso de Ação Concessória na Justiça Federal, garantindo que nenhum período trabalhado seja desconsiderado pelo perito ou analista do INSS.",
    topics: [
      "Aposentadoria por Idade Urbana (requisitos de idade e carência mínima rigorosamente demonstrados)",
      "Aposentadoria por Idade Rural e Híbrida (comprovação de atividade rural sem contribuição direta com provas materiais)",
      "Aposentadoria por Tempo de Contribuição e Regras de Transição da Reforma da Previdência",
      "Aposentadoria da Pessoa com Deficiência (PCD) por idade ou tempo com pontuação Biopsicossocial favorável",
      "Aposentadoria do Professor da Educação Básica e Infantil com comprovação de efetivo exercício docente",
      "Averbação e Conversão de Períodos de Regime Próprio (RPPS) para o Regime Geral (RGPS) via CTC",
    ],
    whatsAppText:
      "Olá, Dra. Nayara Medina! Gostaria de consultar sobre a Concessão da minha Aposentadoria no INSS.",
  },
  {
    id: "aposentadoria-especial",
    title: "Aposentadoria Especial & Insalubridade",
    category: "Insalubridade · Periculosidade · Saúde · Indústria · Conversão de Tempo Especial",
    icon: Shield,
    tag: "Comprovação Técnica · PPP & LTCAT · Proteção à Saúde",
    summary:
      "Defesa de trabalhadores expostos a agentes químicos, físicos, biológicos ou periculosidade (médicos, dentistas, enfermeiros, metalúrgicos, motoristas, frentistas e vigilantes).",
    details:
      "O trabalho exercido sob condições prejudiciais à saúde ou integridade física dá direito à contagem diferenciada de tempo e à aposentadoria especial. A Dra. Nayara Medina analisa tecnicamente o Perfil Profissiográfico Previdenciário (PPP) e o Laudo Técnico de Condições Ambientais de Trabalho (LTCAT), corrigindo omissões das empresas e convertendo tempo especial em comum para antecipar sua aposentadoria.",
    topics: [
      "Análise e impugnação técnica de PPPs e LTCATs emitidos com códigos ou informações incorretas",
      "Aposentadoria Especial para profissionais da saúde (médicos, enfermeiros, técnicos e dentistas)",
      "Reconhecimento de atividade insalubre para químicos, metalúrgicos, caldeireiros e operadores de máquinas",
      "Atividade especial para vigilantes (armados e desarmados), frentistas e motoristas de cargas perigosas",
      "Conversão de tempo especial em tempo comum trabalhado antes de 13/11/2019 (acréscimo de 40% para homens e 20% para mulheres)",
      "Ações judiciais com realização de perícia técnica judicial no local de trabalho",
    ],
    whatsAppText:
      "Olá, Dra. Nayara Medina! Preciso de ajuda para comprovar Insalubridade / Tempo Especial para Aposentadoria.",
  },
  {
    id: "bpc-loas",
    title: "Benefício de Prestação Continuada (BPC / LOAS)",
    category: "Idosos a partir de 65 anos · Pessoa com Deficiência · Autismo (TEA) · Baixa Renda",
    icon: HeartHandshake,
    tag: "Amparo Social · Sem Necessidade de Contribuição · Renda Mensal",
    summary:
      "Garanta 1 salário mínimo mensal para idosos com 65 anos ou mais e pessoas com deficiência ou autismo em condição de vulnerabilidade socioeconômica, sem exigir contribuições ao INSS.",
    details:
      "O BPC/LOAS é uma garantia constitucional fundamental prevista na Lei Orgânica da Assistência Social. Não exige que a pessoa tenha contribuído ao INSS. A Dra. Nayara Medina orienta desde a inscrição e atualização correta no Cadastro Único (CadÚnico) até a reunião documental médica e a defesa técnica perante a perícia social e médica, revertendo indeferimentos indevidos na Justiça com agilidade e acolhimento humano.",
    topics: [
      "BPC para Idosos a partir de 65 anos que não possuem renda ou aposentadoria suficiente",
      "BPC para Pessoas com Deficiência Física, Mental, Intelectual ou Sensorial de qualquer idade",
      "BPC / LOAS para Crianças e Adultos no Espectro Autista (TEA) e doenças crônicas incapacitantes",
      "Comprovação da vulnerabilidade e dedução de gastos médicos, remédios, fraldas e tratamentos da renda familiar",
      "Defesa de famílias unipessoais e desmembramento correto de grupo familiar no CadÚnico",
      "Ação Judicial contra o indeferimento do INSS com pedido de tutela de urgência e recebimento dos atrasados",
    ],
    whatsAppText:
      "Olá, Dra. Nayara Medina! Gostaria de consultar sobre o BPC / LOAS para Idoso ou Pessoa com Deficiência.",
  },
  {
    id: "beneficios-por-incapacidade",
    title: "Benefícios por Incapacidade (Auxílio-Doença & Invalidez)",
    category: "Auxílio por Incapacidade Temporária · Aposentadoria por Incapacidade Permanente · Auxílio-Acidente",
    icon: UserCheck,
    tag: "Restauração do Benefício · Perícia Judicial · Adicional de 25%",
    summary:
      "Orientação jurídica e medidas de urgência para trabalhadores doentes ou acidentados que tiveram o benefício negado ou cancelado indevidamente na perícia do INSS.",
    details:
      "Estar incapacitado para o trabalho e receber alta arbitrária do perito do INSS causa enorme angústia. Atuamos com extrema rapidez para ingressar com pedidos de reconsideração administrativa e ações com pedido liminar na Justiça Federal, onde médicos peritos judiciais especialistas examinam o caso com imparcialidade e rigor técnico.",
    topics: [
      "Auxílio por Incapacidade Temporária (antigo Auxílio-Doença): concessão, prorrogação e restabelecimento",
      "Aposentadoria por Incapacidade Permanente (antiga Aposentadoria por Invalidez) quando não há possibilidade de reabilitação",
      "Auxílio-Acidente: indenização mensal de 50% para quem sofreu acidente de qualquer natureza com sequelas permanentes",
      "Adicional de 25% na aposentadoria por invalidez para quem necessita de acompanhamento permanente de cuidador",
      "Reversão de alta programada indevida do INSS e obtenção de pagamentos retroativos (atrasados)",
      "Preparação estratégica de laudos, exames, relatórios médicos e quesitos para perícia judicial",
    ],
    whatsAppText:
      "Olá, Dra. Nayara Medina! Meu benefício por incapacidade (Auxílio-Doença/Invalidez) foi negado pelo INSS.",
  },
  {
    id: "pensoes-revisoes-recursos",
    title: "Pensão por Morte, Recursos & Revisões de Benefício",
    category: "Pensão por Morte · União Estável · Revisão da Vida Toda · Recálculo de RMI · Recursos",
    icon: Scale,
    tag: "Direito dos Dependentes · Correção de Valores · Reparação Justa",
    summary:
      "Apoio acolhedor para dependentes na concessão de pensão por morte e auditoria minuciosa para aumentar o valor do seu benefício atual por meio de revisões de cálculo.",
    details:
      "Muitos aposentados recebem um valor menor do que deveriam simplesmente porque o INSS descartou períodos de trabalho ou aplicou índices desvantajosos. Realizamos a conferência de cálculos e entramos com ações de revisão. Além disso, amparamos com empatia e segurança famílias que necessitam de pensão por morte, comprovando união estável e dependência financeira.",
    topics: [
      "Pensão por Morte Urbana e Rural: comprovação de união estável, dependência econômica de filhos e pais",
      "Reversão de indeferimentos de pensão com justificativa de falta de qualidade de segurado do falecido",
      "Revisão da Vida Toda e Revisão das Melhores Contribuições para aumentar a renda mensal do benefício",
      "Revisão do Buraco Negro, Buraco Verde e inclusão de ações trabalhistas transitadas em julgado no CNIS",
      "Recursos Administrativos perante a Junta de Recursos do CRPS (Conselho de Recursos da Previdência Social)",
      "Cobrança integral de valores atrasados não pagos desde a Data de Entrada do Requerimento (DER)",
    ],
    whatsAppText:
      "Olá, Dra. Nayara Medina! Gostaria de consultar sobre Pensão por Morte ou Revisão do meu benefício.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Clareza nas Explicações"
    | "Atendimento Acolhedor"
    | "Agilidade & Resposta"
    | "Competência & Dedicação";
  content: string;
  ownerReply?: string;
}

const clientReviews: Review[] = [
  {
    name: "Paloma Milena Pereira",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Agilidade & Resposta",
    content:
      "Melhor profissional, muito atenciosa, tudo que precisamos ela responde mensagem na hora, resolve tudo. Excelente profissional 🫶🏻 e tem todo aquele cuidado e atenção com seus clientes.",
    ownerReply:
      "Obrigadaaa querida! Fico muito feliz em contribuir com cada cliente na solução de sua situação! É sempre um prazer! 🤝",
  },
  {
    name: "Maria Aparecida Barcelos Ferreira Aguiar",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Clareza nas Explicações",
    content:
      "Excelente profissional! Explica tudo com muita clareza! Sabe do que fala. Esta sempre disponivel! Super indico e recomendo.",
    ownerReply: "Muito obrigada querida! É sempre um prazer!",
  },
  {
    name: "Nicholas Henrique",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Competência & Dedicação",
    content:
      "Excelente profissional! Muito atenciosa, competente e dedicada em cada etapa do processo. Sempre explicou tudo com clareza, tirou todas as minhas dúvidas e sempre demonstrou muito comprometimento e responsabilidade. Além do ótimo atendimento!",
    ownerReply:
      "Muito obrigada de verdade por todas as palavras! Estou a disposição! 🤝",
  },
  {
    name: "Daniela Campos",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Atendimento Acolhedor",
    content:
      "Quero agradecer pelo excelente atendimento e profissionalismo. Desde o primeiro contato ela foi extremamente atenciosa, paciente e demonstrou conhecimento sobre o meu caso. Me senti acolhida e segura durante todo o processo, ela me explicou cada etapa com clareza e sempre esteve disponível para tirar minhas dúvidas. Além de resolver meu problema com agilidade, competência teve empatia, dedicação, responsabilidade nos detalhes. Recomendo de olhos fechados para quem procura um atendimento sério, eficiente e cuidadoso.",
    ownerReply:
      "Fico imensamente lisonjeada com essas palavras! Muito obrigada mesmo pelo reconhecimento! Estou a disposição! 🤝",
  },
  {
    name: "Vinicius Henrique",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "3 meses atrás",
    category: "Competência & Dedicação",
    content:
      "Profissional extremamente dedicada e competente. A Dra. Nayara Medina trata cada caso com seriedade, atenção e humanidade, transmitindo confiança e segurança em todas as orientações. Atendimento de excelência!",
  },
  {
    name: "Brenda Campos",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Agilidade & Resposta",
    content:
      "Melhor profissional que já conheci, muito atenciosa, trabalho impecável… entrega antes do prazo, e tem todo um cuidado com os seus clientes!",
    ownerReply:
      "Muito obrigada maravilhosa! Fico muito satisfeita com seu reconhecimento! Estou a disposição!",
  },
  {
    name: "Nayra Lopes Medina",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Clareza nas Explicações",
    content:
      "Excelente profissional! Dra. Nayara foi muito atenciosa, demonstrou grande conhecimento técnico e sempre esteve disponível para tirar minhas dúvidas. Recomendo muito o atendimento!",
    ownerReply:
      "Muito obrigada pelo reconhecimento! Estou a disposição! É sempre um prazer! 🤝",
  },
  {
    name: "Carlos Alvarenga Junior",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Atendimento Acolhedor",
    content:
      "Uma ótima advogada muito prestativa em seu serviço muito atenciosa com seus clientes e dedicada parabéns!",
    ownerReply:
      "Muito obrigada pelo reconhecimento! Estou a disposição! 🤝",
  },
  {
    name: "Amanda Morato",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Atendimento Acolhedor",
    content:
      "Ótima profissional! Competente, atenciosa e se importa com seus clientes.",
    ownerReply:
      "Muito obrigada querida! Fico muito feliz com o reconhecimento! Estou a disposição!",
  },
  {
    name: "Gilmar ArteCerta",
    badge: "7 avaliações · 2 fotos · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Competência & Dedicação",
    content:
      "Excelente profissional! Ótimo atendimento. Resolveu meu problema com muita competência.",
    ownerReply:
      "Muito obrigada pelo reconhecimento! Estou a disposição!",
  },
  {
    name: "Nataly Duarte",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Agilidade & Resposta",
    content:
      "Excelente profissional. Sempre que preciso rapidamente sou atendida. Recomendo.",
  },
  {
    name: "Jeanne Walder",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Atendimento Acolhedor",
    content:
      "Pessoa maravilhosa excelente profissional, muito atenciosa e resolutiva! Recomendo sempre!!",
    ownerReply: "Obrigadaa querida! Estou a disposição! 🤝",
  },
  {
    name: "Fernanda Santos",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Competência & Dedicação",
    content:
      "Ótima advogada super indico e recomendo super de confiança e excelente profissional foi muito bem atendida.",
    ownerReply:
      "Ohh querida muito obrigada de verdade! Estou a disposição! 🤝",
  },
  {
    name: "Galaxia do JP",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Competência & Dedicação",
    content:
      "Dra Nayara Medina é uma Excelente profissional!!! Muito competente e atenciosa com seus clientes, buscando sempre a melhor maneira de solucionar seus problemas!! Se precisar de uma advogada, esse é o nome!!!!",
    ownerReply:
      "Muito obrigada pela indicação! Fico feliz com todo reconhecimento!",
  },
  {
    name: "Isabel Cristina",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Clareza nas Explicações",
    content:
      "Dra. Nayara é uma super advogada! Ótima para explicar excelente pessoa.",
    ownerReply: "Ohh querida estou a disposição! Muito obrigada!",
  },
  {
    name: "Ricardo Aguiar",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Atendimento Acolhedor",
    content:
      "Doutora muito atenciosa, educada... Bastante competente.",
    ownerReply: "Agradecida pelo seu feedback! Estou a disposição!",
  },
  {
    name: "Gustavo Da Silva Batista",
    badge: "5 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Agilidade & Resposta",
    content:
      "Ótima profissional, atende com clareza e tem disponibilidade.",
    ownerReply: "Obrigada pelo feedback! Fico a disposição!",
  },
  {
    name: "Cristiane Ferreira",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Atendimento Acolhedor",
    content:
      "Profissional de primeira qualidade, e sempre com um sorriso no rosto.",
    ownerReply: "Muito obrigada querida! Estou a disposição!",
  },
  {
    name: "Edvânia Monteiro",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Competência & Dedicação",
    content: "Profissional de grande competência!",
  },
  {
    name: "Leide",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "5 meses atrás",
    category: "Competência & Dedicação",
    content:
      "Prezada Dra. Nayara, gostaria de registrar meu agradecimento pelo excelente atendimento, dedicação e empenho demonstrados ao longo de todo o acompanhamento do meu caso.",
    ownerReply:
      "Muito obrigada querida! Fico muito feliz com o reconhecimento e me coloco a disposição para o que precisar! 🤝",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question:
      "Como funciona a consulta com a Dra. Nayara Medina e como posso ser atendido?",
    answer:
      "O atendimento com a Dra. Nayara Medina pode ser realizado de forma presencial em nosso escritório em Pitangui - MG (R. Maria Tangara, 20) ou 100% digital via WhatsApp (37) 99835-1816 e videochamada, atendendo com total conforto e agilidade clientes de qualquer cidade de Minas Gerais, do Brasil ou do exterior. Durante a consulta, realizamos uma escuta humanizada e detalhada do seu histórico profissional e pessoal, examinamos seus documentos e explicamos todos os caminhos legais de forma simples, transparente e sem juridiquês.",
  },
  {
    question:
      "Por que fazer um Planejamento Previdenciário antes de dar entrada na aposentadoria?",
    answer:
      "Com a Reforma da Previdência (EC 103/2019), foram criadas várias regras de transição distintas. Dar entrada na aposentadoria sem fazer cálculos prévios pode significar receber um benefício mensal muito inferior pelo resto da vida ou perder anos de contribuição. No Planejamento Previdenciário, a Dra. Nayara analisa detalhadamente o seu CNIS, identifica erros cadastrais, simula todas as regras possíveis e entrega um plano claro indicando o momento exato em que você alcançará o valor financeiro mais vantajoso.",
  },
  {
    question:
      "Tive meu benefício (Auxílio-Doença, BPC ou Aposentadoria) negado pelo INSS. O que fazer?",
    answer:
      "Não se desespere. O INSS indefere milhares de benefícios todos os meses por análises automatizadas e superficiais. Quando isso acontece, a Dra. Nayara Medina analisa o motivo do indeferimento e ingressa com Ação Judicial perante a Justiça Federal. Na via judicial, a perícia médica e a análise dos documentos são realizadas por peritos e juízes imparciais. Além de garantir o seu benefício, você recebe todos os valores retroativos devidos desde o primeiro dia do requerimento no INSS.",
  },
  {
    question:
      "Quem tem direito ao BPC / LOAS e precisa ter contribuído para o INSS?",
    answer:
      "Não é necessário ter contribuído ao INSS para ter direito ao BPC/LOAS! O benefício é assistencial no valor de um salário mínimo mensal e é pago a idosos com 65 anos ou mais e a pessoas de qualquer idade com deficiência ou autismo (TEA), desde que comprovem condição de baixa renda familiar (vulnerabilidade socioeconômica). A Dra. Nayara auxilia na correta organização dos laudos médicos e comprovantes de despesas para demonstrar a real necessidade familiar.",
  },
  {
    question:
      "O que é Aposentadoria Especial e como comprovar tempo com insalubridade?",
    answer:
      "A Aposentadoria Especial é destinada a profissionais que trabalharam expostos a agentes nocivos à saúde (como ruído excessivo, calor, produtos químicos, vírus e bactérias) ou à periculosidade (eletricidade, vigilância armada, combustíveis). Ela é comprovada por documentos emitidos pela empresa chamados PPP (Perfil Profissiográfico Previdenciário) e LTCAT. Além disso, o tempo trabalhado em atividade insalubre antes de novembro de 2019 pode ser convertido em tempo comum com acréscimo de 40% (homens) e 20% (mulheres) para acelerar a concessão.",
  },
  {
    question:
      "Como acompanho o andamento do meu processo após a contratação?",
    answer:
      "Prezamos pela transparência e comunicação ágil. Como nossos clientes destacam no Google ('responde na hora', 'explica tudo com clareza'), a Dra. Nayara Medina e sua equipe mantêm você informado a cada nova movimentação do seu processo administrativo ou judicial. Traduzimos despachos, decisões e perícias em linguagem acessível para que você tenha total tranquilidade e segurança do início ao fim.",
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
    "Clareza nas Explicações",
    "Atendimento Acolhedor",
    "Agilidade & Resposta",
    "Competência & Dedicação",
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
      <main className="min-h-screen bg-[#fdfbf7] text-[#140f0b] selection:bg-[#1a140e] selection:text-[#f7dfb8]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (LUXURY OBSIDIAN & GOLD ACCENT)     */}
        {/* ======================================================== */}
        <div className="border-b border-[#261e16] bg-[#0a0704] py-2 text-xs text-[#ebe3d7]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#df7418] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#fbaf53]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f7dfb8] font-semibold">
                DRA. NAYARA MEDINA · ADVOCACIA PREVIDENCIÁRIA · PITANGUI - MG ⚖️🌻
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#ebe3d7]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f7dfb8]"
              >
                <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                <span className="font-bold text-[#f7dfb8]">5,0 ★</span> (25 avaliações no Google · Pitangui - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#261e16] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de consultar sobre o meu benefício do INSS.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#f7dfb8] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#df7418]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (DRA. NAYARA MEDINA)              */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#ebe3d7] bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-[#ebe3d7]/80 bg-[#fdfbf7]/95 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Dra. Nayara Medina Horizontal Logo */}
            <a
              href="#"
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Dra. Nayara Medina - Início"
            >
              <Image
                src={LOGO_HORIZONTAL_SRC}
                alt="Dra. Nayara Medina — Advogada Previdenciária"
                width={260}
                height={55}
                className="h-[42px] sm:h-[48px] md:h-[54px] w-auto object-contain drop-shadow-xs"
                priority
                unoptimized
              />
            </a>

            {/* Center: Desktop Navigation (Refined, concise & balanced) */}
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

            {/* Right Action: WhatsApp CTA (Metallic Amber Gold) */}
            <div className="flex shrink-0 items-center gap-2.5">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de agendar uma consulta sobre meu benefício do INSS.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0 shadow-md"
              >
                <WhatsAppIcon size={15} className="text-[#0a0704]" />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#ebe3d7] bg-white text-[#140f0b] transition-colors hover:border-[#df7418] hover:text-[#0a0704] lg:hidden cursor-pointer shrink-0"
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
                className="border-b border-[#ebe3d7] bg-white px-5 py-6 lg:hidden shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#ebe3d7]">
                    <Image
                      src={LOGO_HORIZONTAL_SRC}
                      alt="Dra. Nayara Medina — Advogada Previdenciária"
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
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#140f0b] uppercase transition-colors hover:text-[#df7418]"
                  >
                    <span>Áreas de Atuação (INSS & Benefícios)</span>
                    <ArrowRight size={14} className="text-[#df7418]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#140f0b] uppercase transition-colors hover:text-[#df7418]"
                  >
                    <span>Sobre Dra. Nayara Medina</span>
                    <ArrowRight size={14} className="text-[#df7418]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#140f0b] uppercase transition-colors hover:text-[#df7418]"
                  >
                    <span>Pilares & Atendimento Humanizado</span>
                    <ArrowRight size={14} className="text-[#df7418]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#140f0b] uppercase transition-colors hover:text-[#df7418]"
                  >
                    <span>Avaliações no Google (25 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#df7418]" />
                  </a>
                  <a
                    href="#sede"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#140f0b] uppercase transition-colors hover:text-[#df7418]"
                  >
                    <span>Escritório em Pitangui - MG</span>
                    <ArrowRight size={14} className="text-[#df7418]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#140f0b] uppercase transition-colors hover:text-[#df7418]"
                  >
                    <span>Dúvidas Frequentes sobre Previdência</span>
                    <ArrowRight size={14} className="text-[#df7418]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#140f0b] uppercase transition-colors hover:text-[#df7418]"
                  >
                    <span>Contato & Localização</span>
                    <ArrowRight size={14} className="text-[#df7418]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de tirar dúvidas sobre meu benefício pelo WhatsApp.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar com a Dra. Nayara no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DA DRA. NAYARA MEDINA   */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fdfbf7]">
          {/* Subtle Warm Amber Gold Radial Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#fedaa8]/30 via-[#df7418]/8 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#df7418]/12 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ebe3d7] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#1a140e] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#df7418] animate-pulse" />
                    DRA. NAYARA MEDINA · ADVOGADA PREVIDENCIARISTA · OAB/MG 184.540
                  </span>
                </div>

                {/* H1 Headline */}
                <h1 className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#140f0b] sm:text-5xl lg:text-[3.25rem]">
                  Garanta a Sua Aposentadoria e Benefícios do INSS com Máxima Clareza e Segurança em{" "}
                  <span className="bg-gradient-to-r from-[#8e3d06] via-[#df7418] to-[#fbaf53] bg-clip-text text-transparent">
                    Pitangui e em Todo o Brasil.
                  </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="mt-6 text-base leading-relaxed text-[#5c5249] sm:text-lg lg:max-w-xl">
                  Sob a condução da <strong className="font-semibold text-[#140f0b]">Dra. Nayara Medina</strong>, unimos acolhimento humanizado, agilidade nas respostas e profundo rigor técnico para defender o seu direito ao melhor benefício previdenciário, sem burocracia e com total dedicação.
                </p>

                {/* Quick Highlights Pills */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe3d7] bg-white px-3 py-1 text-xs font-semibold text-[#1a140e] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#df7418]" />
                    Planejamento Previdenciário & Cálculo de RMI
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe3d7] bg-white px-3 py-1 text-xs font-semibold text-[#1a140e] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#df7418]" />
                    Aposentadorias (Idade, Tempo, Especial e Rural)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe3d7] bg-white px-3 py-1 text-xs font-semibold text-[#1a140e] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#df7418]" />
                    BPC / LOAS (Idosos & PCDs)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ebe3d7] bg-white px-3 py-1 text-xs font-semibold text-[#1a140e] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#df7418]" />
                    Auxílio por Incapacidade & Revisões
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de agendar uma consulta sobre o meu benefício do INSS / aposentadoria.")}
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
                    <span>Conhecer Especialidades</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </div>

                {/* Social Proof Strip underneath CTAs */}
                <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-[#ebe3d7] pt-6 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#140f0b]">
                      5,0 no Google
                    </span>
                    <span className="text-xs text-[#5c5249]">
                      (25 avaliações verificadas · 100% 5 estrelas)
                    </span>
                  </div>

                  <span className="hidden h-3.5 w-px bg-[#ebe3d7] sm:inline-block" />

                  <div className="flex items-center gap-2 text-xs text-[#5c5249]">
                    <Shield size={14} className="text-[#df7418]" />
                    <span>Sede na R. Maria Tangara, 20 · Pitangui - MG</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo of Dra. Nayara Medina */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  {/* Outer Luxury Metallic Border Frame */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#df7418]/40 bg-white p-2 shadow-2xl shadow-[#1a140e]/15">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f7f2ea] to-[#ebe3d7]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Nayara Medina — Advogada Previdenciária em Pitangui - MG"
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-102"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette for High-Contrast Typography Badge */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0704]/95 via-[#0a0704]/55 to-transparent" />

                      {/* Overlay Identification Badge */}
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#df7418]/45 bg-[#0a0704]/90 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-cinzel text-base font-bold text-white tracking-wide">
                              Dra. Nayara Medina
                            </p>
                            <p className="text-[11px] font-semibold text-[#f7dfb8] uppercase tracking-wider">
                              Advogada Previdenciarista · OAB/MG 184.540
                            </p>
                            <p className="text-[10px] text-[#ebe3d7] mt-0.5">
                              Vice-Pres. Com. Previdenciária OAB Pitangui/Martinho Campos
                            </p>
                          </div>
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#df7418]/40 bg-[#1a140e] p-1.5 shadow-md">
                            <Image
                              src={EMBLEM_SRC}
                              alt="Monograma Dra. Nayara Medina"
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
                  <div className="absolute -bottom-6 -left-4 sm:-bottom-7 sm:-left-7 rounded-xl border border-[#df7418]/40 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:max-w-[285px]">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe3d7]">
                        <GoogleIcon size={14} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[#f59e0b]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} className="fill-current" />
                          ))}
                        </div>
                        <p className="text-[10px] font-bold text-[#140f0b]">
                          5,0 Estrelas no Google
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] leading-snug text-[#5c5249] italic">
                      &quot;Melhor profissional, muito atenciosa, responde mensagem na hora, resolve tudo!&quot;
                    </p>
                    <p className="mt-1 text-[9px] font-semibold text-[#8e3d06]">
                      — Paloma Milena (Avaliação no Google)
                    </p>
                  </div>

                  {/* Floating Badge Top-Right: Sede Pitangui */}
                  <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-lg border border-[#df7418]/50 bg-[#0a0704] px-3.5 py-2 shadow-lg text-white">
                    <p className="text-[9px] font-bold tracking-widest text-[#f7dfb8] uppercase">
                      PITANGUI · MG
                    </p>
                    <p className="text-[11px] font-bold text-white">
                      R. Maria Tangara, 20
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
        <section className="border-y border-[#261e16] bg-[#0a0704] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 text-center">
              {/* Stat 1: Google Rating */}
              <div className="flex flex-col items-center border-r border-[#261e16] pr-4 last:border-r-0 md:pr-0">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#f7dfb8]">
                  <span>5,0</span>
                  <div className="flex text-[#f59e0b]">
                    <Star size={18} className="fill-current" />
                  </div>
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Avaliação Máxima
                </p>
                <p className="text-[11px] text-[#ebe3d7]/70">
                  25 avaliações 5 estrelas no Google
                </p>
              </div>

              {/* Stat 2: Ética & Compromisso */}
              <div className="flex flex-col items-center md:border-r md:border-[#261e16] md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f7dfb8]">
                  100%
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Atendimento Humanizado
                </p>
                <p className="text-[11px] text-[#ebe3d7]/70">
                  Acolhimento, clareza e empatia
                </p>
              </div>

              {/* Stat 3: Agilidade & Eficiência */}
              <div className="flex flex-col items-center border-r border-[#261e16] pr-4 last:border-r-0 md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f7dfb8]">
                  Ágil
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Respostas Rápidas
                </p>
                <p className="text-[11px] text-[#ebe3d7]/70">
                  Disponibilidade e atenção constante
                </p>
              </div>

              {/* Stat 4: Geographic Reach */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f7dfb8]">
                  Brasil
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Sede em Pitangui - MG
                </p>
                <p className="text-[11px] text-[#ebe3d7]/70">
                  Presencial & 100% digital via PJe
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO PREVIDENCIÁRIA                 */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">
                EXPERTISE PREVIDENCIÁRIA DE ALTO NÍVEL
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#140f0b] sm:text-4xl lg:text-[2.6rem]">
                Especialidades Previdenciárias & Benefícios do INSS
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5c5249] sm:text-base">
                Conheça nossos principais pilares de atuação. Cada processo é conduzido com rigor documental absoluto, estratégia jurídica personalizada e dedicação integral à conquista do seu benefício.
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
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ebe3d7] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#df7418]/60 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Row: Icon + Tag */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-[#df7418]/30 bg-[#f7dfb8]/20 text-[#8e3d06] transition-colors group-hover:bg-[#1a140e] group-hover:text-[#f7dfb8] group-hover:border-[#df7418]">
                          <IconComponent size={24} />
                        </div>
                        <span className="rounded-full border border-[#ebe3d7] bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold text-[#8e3d06] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      {/* Area Title */}
                      <h3 className="mt-5 font-serif text-xl font-bold text-[#140f0b] transition-colors group-hover:text-[#8e3d06]">
                        {area.title}
                      </h3>

                      {/* Category Subtext */}
                      <p className="mt-1 text-[11px] font-semibold text-[#c25b0e] uppercase tracking-wider">
                        {area.category}
                      </p>

                      {/* Summary */}
                      <p className="mt-3.5 text-xs leading-relaxed text-[#5c5249]">
                        {area.summary}
                      </p>

                      {/* Key Topics List */}
                      <ul className="mt-4 space-y-2 border-t border-[#ebe3d7]/70 pt-4 text-xs text-[#140f0b]">
                        {area.topics.slice(0, 3).map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#df7418]"
                            />
                            <span className="leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Actions */}
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#ebe3d7] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8e3d06] transition-colors hover:text-[#140f0b] cursor-pointer"
                      >
                        <span>Ver detalhes completos</span>
                        <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-8 items-center justify-center rounded-lg bg-[#df7418]/15 text-[#8e3d06] transition-all hover:bg-[#df7418] hover:text-[#0a0704]"
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
            <div className="mt-12 rounded-2xl border border-[#df7418]/40 bg-gradient-to-r from-[#0a0704] via-[#130e09] to-[#1a140e] p-8 text-white shadow-xl sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div className="max-w-2xl">
                <span className="rounded-full border border-[#f7dfb8]/30 bg-[#f7dfb8]/10 px-3 py-1 text-[10px] font-bold text-[#f7dfb8] uppercase tracking-wider">
                  ATENDIMENTO DIRETO COM A ADVOGADA
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                  Precisa de uma análise detalhada da sua situação no INSS?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#ebe3d7]">
                  Cada benefício previdenciário exige uma estratégia documental sob medida. Entre em contato direto pelo WhatsApp para analisarmos o seu caso com total sigilo e atenção humana.
                </p>
              </div>

              <div className="mt-6 sm:mt-0 shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de uma avaliação inicial sobre o meu benefício do INSS.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Conversar com a Dra. Nayara</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE DRA. NAYARA MEDINA                        */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#ebe3d7] bg-[#f7f2ea]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Portrait at Office Desk */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  {/* Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#df7418]/40 bg-white p-2.5 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#fdfbf7]">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dra. Nayara Medina em seu escritório em Pitangui - MG"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                      />
                    </div>
                  </div>

                  {/* Secondary Office Sede Badge */}
                  <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-5 rounded-xl border border-[#df7418]/60 bg-[#0a0704] p-3.5 shadow-2xl text-white max-w-[250px]">
                    <div className="flex items-center gap-2 text-[#f7dfb8] text-xs font-bold uppercase">
                      <MapPin size={15} />
                      <span>Pitangui · MG</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-white">
                      R. Maria Tangara, 20
                    </p>
                    <p className="text-[10px] text-[#ebe3d7]/70 mt-0.5">
                      Sede acolhedora & atendimento presencial
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Values */}
              <div className="lg:col-span-7">
                <p className="eyebrow mb-3.5">TRAJETÓRIA, VOCAÇÃO & JUSTIÇA SOCIAL</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#140f0b] sm:text-4xl lg:text-[2.6rem]">
                  Sobre a Dra. Nayara Medina
                </h2>
                <p className="mt-2 text-sm font-bold text-[#c25b0e] tracking-wider uppercase">
                  Advogada Previdenciarista · OAB/MG 184.540 · Vice-Presidente da Comissão Previdenciária
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#5c5249] sm:text-base">
                  <p>
                    A <strong className="font-semibold text-[#140f0b]">Dra. Nayara Medina</strong> é advogada especialista em Direito Previdenciário, dedicada integralmente à defesa dos direitos sociais de trabalhadores, idosos, famílias e pessoas com deficiência perante o INSS e a Justiça Federal.
                  </p>
                  <p>
                    Com atuação destacada como <strong className="font-semibold text-[#140f0b]">Vice-Presidente da Comissão de Direito Previdenciário da OAB (Subseção Pitangui / Martinho Campos)</strong> e com sólida experiência na Assistência Judiciária Municipal, sua advocacia é pautada por um compromisso inegociável: aliar alto rigor técnico a um atendimento acolhedor, transparente e profundamente humano.
                  </p>
                  <p>
                    Reconhecida com nota máxima de <strong className="font-semibold text-[#140f0b]">5,0 estrelas no Google</strong> por seus clientes, a Dra. Nayara destaca-se pela didática cristalina, desmistificando o complexo sistema do INSS para que cada segurado compreenda exatamente seus direitos e receba o valor justo que merece.
                  </p>
                </div>

                {/* 4 Pillars of Action */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#ebe3d7] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#140f0b] text-xs sm:text-sm">
                      <BookOpen size={16} className="text-[#df7418]" />
                      <span>Clareza & Didática</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c5249]">
                      Explicações claras e compreensíveis, sem termos difíceis.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe3d7] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#140f0b] text-xs sm:text-sm">
                      <HeartHandshake size={16} className="text-[#df7418]" />
                      <span>Acolhimento & Empatia</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c5249]">
                      Cuidado, paciência e escuta atenta à história de cada cliente.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe3d7] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#140f0b] text-xs sm:text-sm">
                      <Zap size={16} className="text-[#df7418]" />
                      <span>Agilidade & Resposta</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c5249]">
                      Atendimento rápido e entregas antes do prazo esperado.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ebe3d7] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#140f0b] text-xs sm:text-sm">
                      <Award size={16} className="text-[#df7418]" />
                      <span>Competência Técnica</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#5c5249]">
                      Domínio aprofundado das normas e precedentes previdenciários.
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de conversar diretamente com você sobre minha aposentadoria / benefício.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com a Dra. Nayara no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5c5249] transition-colors hover:text-[#140f0b]"
                  >
                    <InstagramIcon size={16} className="text-[#df7418]" />
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
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#0a0704] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow-dark justify-center mb-3.5">
                POR QUE CONFIAR SEU BENEFÍCIO À DRA. NAYARA MEDINA
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Os Valores que Sustentam Nossa Reputação
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe3d7] sm:text-base">
                Reconhecida com nota máxima 5,0 por clientes em Pitangui e em todo o Brasil.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-[#261e16] bg-[#130e09] p-7 transition-all duration-300 hover:border-[#df7418]/50 hover:bg-[#1a140e]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#df7418]/30 bg-[#df7418]/10 text-[#f7dfb8]">
                  <BookOpen size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Clareza nas Explicações
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe3d7]/75">
                  &quot;Explica tudo com muita clareza, sabe do que fala e está sempre disponível!&quot; — Tradução descomplicada das regras do INSS com transparência total.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[#261e16] bg-[#130e09] p-7 transition-all duration-300 hover:border-[#df7418]/50 hover:bg-[#1a140e]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#df7418]/30 bg-[#df7418]/10 text-[#f7dfb8]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Agilidade & Resposta Rápida
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe3d7]/75">
                  &quot;Tudo que precisamos ela responde mensagem na hora, resolve tudo e entrega antes do prazo!&quot; — Agilidade no atendimento e presteza permanente.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-[#261e16] bg-[#130e09] p-7 transition-all duration-300 hover:border-[#df7418]/50 hover:bg-[#1a140e]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#df7418]/30 bg-[#df7418]/10 text-[#f7dfb8]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Acolhimento & Humanidade
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe3d7]/75">
                  &quot;Me senti acolhida e segura durante todo o processo. Teve empatia, dedicação e responsabilidade nos detalhes.&quot;
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-[#261e16] bg-[#130e09] p-7 transition-all duration-300 hover:border-[#df7418]/50 hover:bg-[#1a140e]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#df7418]/30 bg-[#df7418]/10 text-[#f7dfb8]">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Rigor & Competência
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#ebe3d7]/75">
                  Atuação técnica especializada perante as agências do INSS, Junta de Recursos (CRPS) e Varas da Justiça Federal para garantir a concessão do benefício.
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
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ebe3d7] bg-white px-4 py-1.5 shadow-2xs">
                <GoogleIcon size={16} />
                <span className="text-xs font-bold text-[#140f0b]">
                  Google Avaliações Verificadas
                </span>
                <span className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </span>
                <span className="text-xs font-bold text-[#8e3d06]">
                  5,0 / 5,0 (25 avaliações)
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#140f0b] sm:text-4xl lg:text-[2.6rem]">
                O Reconhecimento de Nossos Clientes
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5c5249] sm:text-base">
                Depoimentos reais registrados no perfil oficial da Dra. Nayara Medina - Advogada Previdenciária no Google em Pitangui - MG.
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
                      ? "border border-[#df7418] bg-[#0a0704] text-[#f7dfb8] shadow-sm"
                      : "border border-[#ebe3d7] bg-white text-[#5c5249] hover:border-[#df7418] hover:text-[#140f0b]"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-[#ebe3d7] bg-white p-6 shadow-sm transition-all hover:border-[#df7418]/50 hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Stars + Date */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#5c5249]">{review.date}</span>
                    </div>

                    {/* Category Tag */}
                    <span className="mt-3 inline-block rounded-md bg-[#f7dfb8]/30 px-2.5 py-0.5 text-[9px] font-bold text-[#8e3d06] uppercase tracking-wider">
                      {review.category}
                    </span>

                    {/* Review Text */}
                    <p className="mt-3.5 text-xs leading-relaxed text-[#140f0b] italic">
                      &quot;{review.content}&quot;
                    </p>

                    {/* Owner Response if present */}
                    {review.ownerReply && (
                      <div className="mt-4 rounded-xl border border-[#df7418]/25 bg-[#fdfbf7] p-3 text-[11px] text-[#5c5249]">
                        <p className="font-bold text-[#8e3d06] text-[10px] uppercase tracking-wider">
                          Resposta da Dra. Nayara Medina:
                        </p>
                        <p className="mt-1 leading-snug">{review.ownerReply}</p>
                      </div>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#ebe3d7]/70 pt-4">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#0a0704] font-cinzel text-xs font-bold text-[#f7dfb8]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#140f0b]">{review.name}</p>
                      <p className="text-[10px] text-[#5c5249]">{review.badge}</p>
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
                  className="inline-flex items-center gap-2 rounded-lg border border-[#df7418] bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#140f0b] transition-all hover:bg-[#0a0704] hover:text-[#f7dfb8] cursor-pointer"
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
        {/* DOBRA 7: ESCRITÓRIO EM PITANGUI & ATENDIMENTO NACIONAL   */}
        {/* ======================================================== */}
        <section id="sede" className="border-t border-[#ebe3d7] py-20 sm:py-26 bg-[#f7f2ea]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Office Presentation Image */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-[480px] lg:max-w-none overflow-hidden rounded-2xl border-2 border-[#df7418]/50 bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0a0704]">
                    <Image
                      src={FOTO_PORTRAIT_SRC}
                      alt="Dra. Nayara Medina em seu escritório em Pitangui - MG"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    />

                    {/* Gradient Overlay for Address */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0704] via-[#0a0704]/75 to-transparent p-6 text-white">
                      <div className="flex items-center gap-2 text-[#f7dfb8] text-xs font-bold uppercase tracking-wider">
                        <MapPin size={16} />
                        <span>Sede em Pitangui - Minas Gerais</span>
                      </div>
                      <p className="mt-1 font-serif text-lg font-bold text-white">
                        R. Maria Tangara, 20
                      </p>
                      <p className="text-xs text-[#ebe3d7]">
                        Pitangui - MG, CEP 35650-000, Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Office Hours */}
              <div className="lg:col-span-6">
                <p className="eyebrow mb-3.5">ESTRUTURA & LOCALIZAÇÃO</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#140f0b] sm:text-4xl lg:text-[2.6rem]">
                  Atendimento Presencial em Pitangui e 100% Digital em Todo o Brasil
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5c5249] sm:text-base">
                  Nosso escritório físico em Pitangui foi planejado para oferecer conforto, acolhimento e privacidade absoluta para você e sua família. E por meio do processo eletrônico judicial (PJe) e do INSS Digital, prestamos consultoria e acompanhamento processual completo para clientes em qualquer município do Brasil e brasileiros residentes no exterior.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Address Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe3d7] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#df7418]/15 text-[#8e3d06]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#140f0b] uppercase tracking-wider">
                        Endereço Completo
                      </p>
                      <p className="text-xs text-[#5c5249] mt-0.5">
                        {ADDRESS_PITANGUI}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#8e3d06] hover:text-[#140f0b]"
                      >
                        <span>Abrir rotas no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe3d7] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#df7418]/15 text-[#8e3d06]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#140f0b] uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="text-xs text-[#5c5249] mt-0.5">
                        Segunda a Sexta-feira: <strong>08:30 às 17:00</strong>
                      </p>
                      <p className="text-[11px] text-[#8e3d06] font-semibold mt-0.5">
                        Atendimento com hora marcada ou consulta online imediata.
                      </p>
                    </div>
                  </div>

                  {/* Contact Phones */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ebe3d7] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#df7418]/15 text-[#8e3d06]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#140f0b] uppercase tracking-wider">
                        Telefone & WhatsApp Oficial
                      </p>
                      <p className="text-xs text-[#5c5249] mt-0.5">
                        WhatsApp / Contato: <strong>{PHONE_DISPLAY}</strong>
                      </p>
                      <p className="text-xs text-[#5c5249]">
                        E-mail: <strong>{EMAIL_CONTACT}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sede CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Nayara! Gostaria de agendar um atendimento presencial em seu escritório em Pitangui.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#df7418] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#140f0b] transition-all hover:bg-[#0a0704] hover:text-[#f7dfb8]"
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
        {/* DOBRA 8: DÚVIDAS FREQUENTES (FAQ PREVIDENCIÁRIO)         */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">ESCLARECIMENTOS PREVIDENCIÁRIOS</p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#140f0b] sm:text-4xl lg:text-[2.6rem]">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5c5249] sm:text-base">
                Tire suas principais dúvidas sobre benefícios do INSS, prazos e procedimentos.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-[#ebe3d7] bg-white transition-all hover:border-[#df7418]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-serif text-base sm:text-lg font-bold text-[#140f0b] transition-colors hover:text-[#8e3d06] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe3d7] text-[#8e3d06]">
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
                          className="border-t border-[#ebe3d7]/70 px-5 pb-6 pt-4 sm:px-6 text-xs sm:text-sm leading-relaxed text-[#5c5249]"
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
              <p className="text-xs text-[#5c5249]">
                Ainda tem alguma dúvida específica sobre o seu benefício ou histórico no INSS?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Tenho uma dúvida sobre minha aposentadoria / benefício e gostaria de orientação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#8e3d06] underline decoration-[#df7418] hover:text-[#140f0b] text-xs sm:text-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Converse diretamente com a Dra. Nayara pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: BANNER DE CONTATO / CTA FINAL (LUXURY OBSIDIAN) */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#0a0704] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#df7418]/40 bg-gradient-to-b from-[#130e09] to-[#0a0704] p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#df7418]/12 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#f7dfb8]/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f7dfb8]/30 bg-[#f7dfb8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f7dfb8]">
                    <span className="size-1.5 rounded-full bg-[#f7dfb8] animate-pulse" />
                    ATENDIMENTO PRIORITÁRIO & ACOLHEDOR
                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Não Deixe Seu Futuro Previdenciário nas Mãos da Sorte. Conte com Quem Entende de Verdade de INSS.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ebe3d7] sm:text-base">
                    Evite perdas irreparáveis no valor da sua aposentadoria ou meses esperando por um benefício travado no INSS. Agende hoje mesmo sua consulta com a Dra. Nayara Medina e receba uma orientação clara e resolutiva.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#ebe3d7]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f7dfb8]" />
                      <span>Atendimento acolhedor e com respostas rápidas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f7dfb8]" />
                      <span>Sigilo profissional e ética rigorosa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f7dfb8]" />
                      <span>Sede na R. Maria Tangara, 20 · Pitangui - MG</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de agendar uma consulta sobre meu benefício do INSS / aposentadoria.")}
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#df7418]/50 bg-[#1a140e] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f7dfb8] transition-all hover:bg-[#df7418] hover:text-[#0a0704]"
                  >
                    <Phone size={15} />
                    <span>Ligar: {PHONE_DISPLAY}</span>
                  </a>

                  <p className="text-center text-[10px] text-[#ebe3d7]/60 mt-1">
                    Atendimento de Segunda a Sexta, das 08h30 às 17h.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER (SOFISTICADO, COMPLETO & 100% LIMPO)              */}
        {/* ======================================================== */}
        <footer className="border-t border-[#261e16] bg-[#0a0704] pt-16 pb-12 text-[#ebe3d7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Col 1: Brand & Logo */}
              <div>
                <a href="#" className="flex items-center gap-3">
                  <Image
                    src={EMBLEM_SRC}
                    alt="Dra. Nayara Medina — Advogada Previdenciária"
                    width={48}
                    height={48}
                    className="h-11 w-auto object-contain"
                    unoptimized
                  />
                  <div>
                    <p className="font-cinzel text-sm font-bold text-white tracking-wider">
                      NAYARA MEDINA
                    </p>
                    <p className="text-[9px] font-bold text-[#f7dfb8] tracking-[0.2em] uppercase">
                      ADVOGADA PREVIDENCIÁRIA
                    </p>
                  </div>
                </a>
                <p className="mt-4 text-xs leading-relaxed text-[#ebe3d7]/70">
                  Advocacia especializada em Direito Previdenciário: Planejamento Previdenciário, Aposentadorias, BPC/LOAS, Benefícios por Incapacidade e Revisões do INSS. Sede física em Pitangui - MG e atendimento digital para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#df7418]/40 bg-[#1a140e] text-[#f7dfb8] transition-colors hover:bg-[#df7418] hover:text-[#0a0704]"
                    aria-label="Instagram Dra. Nayara Medina"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#df7418]/40 bg-[#1a140e] text-[#f7dfb8] transition-colors hover:bg-[#df7418] hover:text-[#0a0704]"
                    aria-label="WhatsApp Dra. Nayara Medina"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#df7418]/40 bg-[#1a140e] text-[#f7dfb8] transition-colors hover:bg-[#df7418] hover:text-[#0a0704]"
                    aria-label="Avaliações no Google"
                  >
                    <GoogleIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Col 2: Áreas de Atuação */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Especialidades Previdenciárias
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-[#ebe3d7]/70">
                  <li>
                    <a href="#servicos" className="hover:text-[#f7dfb8] transition-colors">
                      Planejamento Previdenciário & CNIS
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7dfb8] transition-colors">
                      Concessão de Aposentadorias
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7dfb8] transition-colors">
                      Aposentadoria Especial (Insalubridade)
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7dfb8] transition-colors">
                      Benefício Assistencial (BPC / LOAS)
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7dfb8] transition-colors">
                      Auxílio-Doença & Benefício por Incapacidade
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f7dfb8] transition-colors">
                      Pensão por Morte & Revisões de Benefício
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Links Rápidos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Navegação Rápida
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-[#ebe3d7]/70">
                  <li>
                    <a href="#sobre" className="hover:text-[#f7dfb8] transition-colors">
                      Sobre Dra. Nayara Medina
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-[#f7dfb8] transition-colors">
                      Pilares & Atendimento Humanizado
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-[#f7dfb8] transition-colors">
                      Avaliações no Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#sede" className="hover:text-[#f7dfb8] transition-colors">
                      Escritório em Pitangui - MG
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-[#f7dfb8] transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-[#f7dfb8] transition-colors">
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
                <ul className="mt-4 space-y-3 text-xs text-[#ebe3d7]/70">
                  <li className="flex items-start gap-2">
                    <MapPin size={15} className="text-[#f7dfb8] shrink-0 mt-0.5" />
                    <span>{ADDRESS_PITANGUI}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={15} className="text-[#f7dfb8] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={15} className="text-[#f7dfb8] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={15} className="text-[#f7dfb8] shrink-0" />
                    <span>Seg a Sex: 08:30 às 17:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <InstagramIcon size={15} className="text-[#f7dfb8] shrink-0" />
                    <span>Instagram: {INSTAGRAM_HANDLE}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Legal Notice & Copyright */}
            <div className="mt-12 border-t border-[#261e16] pt-8 text-center text-[11px] text-[#ebe3d7]/50">
              <p>
                © {new Date().getFullYear()} {CLIENT_NAME} (OAB/MG 184.540). Todos os direitos reservados.
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
                className="absolute inset-0 bg-[#0a0704]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#df7418]/50 bg-white p-6 sm:p-8 shadow-2xl text-[#140f0b]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-[#fdfbf7] border border-[#ebe3d7] text-[#5c5249] hover:text-[#140f0b] hover:border-[#df7418] cursor-pointer"
                  aria-label="Fechar janela"
                >
                  <X size={18} />
                </button>

                {/* Modal Content */}
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#df7418]/15 text-[#8e3d06]">
                    <selectedPractice.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c25b0e]">
                      Área Especializada
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#140f0b]">
                      {selectedPractice.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs font-semibold text-[#8e3d06] uppercase tracking-wider">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5c5249]">
                  {selectedPractice.details}
                </p>

                <div className="mt-6">
                  <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#140f0b]">
                    Principais Procedimentos e Atuação:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#140f0b]">
                    {selectedPractice.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-[#df7418]"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#ebe3d7]">
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
                    className="rounded-lg border border-[#ebe3d7] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#5c5249] hover:bg-[#fdfbf7] hover:text-[#140f0b] cursor-pointer"
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
            href={getWhatsAppUrl("Olá, Dra. Nayara Medina! Gostaria de consultar sobre meu benefício do INSS / aposentadoria.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#fedaa8] bg-gradient-to-r from-[#df7418] via-[#e5862b] to-[#c25b0e] p-3.5 sm:px-5 sm:py-3.5 text-[#0a0704] font-extrabold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_28px_-4px_rgba(223,116,24,0.6)] cursor-pointer"
            aria-label="Falar com a Dra. Nayara Medina no WhatsApp"
          >
            <WhatsAppIcon size={22} className="text-[#0a0704]" />
            <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold text-[#0a0704]">
              Falar com Dra. Nayara
            </span>
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
