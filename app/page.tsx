"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
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
  ChevronUp,
  Sparkles,
  Heart,
  Smile,
  Activity,
  Calendar,
  Users,
  Layers,
  Zap,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Professional Information — Dr. Frank Eduardo — Odontologia Avançada
const CLINIC_NAME = "Dr. Frank Eduardo — Odontologia Avançada";
const BRAND_LABEL = "Dr. Frank Eduardo — Cirurgião Dentista | Odontologia Avançada & Reabilitação Oral";
const DOCTOR_NAME = "Dr. Frank Eduardo";
const DOCTOR_ROLE = "Cirurgião Dentista · Odontologia Avançada & Reabilitação Oral";
const DOCTOR_BIO = "Cirurgião Dentista especialista em devolver função mastigatória, saúde e autoestima por meio da odontologia avançada, próteses, implantes e estética do sorriso com atendimento verdadeiramente humanizado, técnica suave e sem dor.";
const RECEPTIONIST_NAME = "Meg";
const WHATSAPP_NUMBER = "5531997670022";
const PHONE_DISPLAY = "(31) 99767-0022";
const INSTAGRAM_URL = "https://www.instagram.com/dr.frankeduardo/";
const INSTAGRAM_HANDLE = "@dr.frankeduardo";

const ADDRESS_DISPLAY = "Av. Gov. Valadares, 440 - 3º Andar - Sala 202 - Centro, Igarapé - MG, 32900-000";
const CITIES_SERVED = "Igarapé, Betim, Contagem, Brumadinho, São Joaquim de Bicas e Região";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Dr.+Frank+Eduardo+%E2%80%94+Odontologia%0AIgarap%C3%A9+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Gov.+Valadares%2C+440+-+3+Andar+-+Sala+202+-+Centro%2C+Igarap%C3%A9+-+MG%2C+32900-000";

// Official assets from public folder
const LOGO_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_DARK_BG_SRC = "/logo-dark-bg.png";
const EMBLEM_SRC = "/emblem.png";
const FOTO_HERO_SRC = "/dr-frank-eduardo.jpg";
const FOTO_CONSULTORIO_SRC = "/consultorio.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta / avaliação com o Dr. Frank Eduardo no consultório em Igarapé.";
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Especialidades e Tratamentos Odontológicos
interface Specialty {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  icon: string;
  fullDesc: string;
  indications: string[];
  benefits: string[];
  recovery: string;
  faq: { q: string; a: string };
}

const SPECIALTIES: Specialty[] = [
  {
    id: "reabilitacao-oral",
    title: "Reabilitação Oral & Próteses",
    badge: "Especialidade Cirúrgica",
    shortDesc:
      "Recupere a mastigação completa, estabilidade oclusal e a estética do sorriso com planejamento digital individualizado.",
    icon: "Smile",
    fullDesc:
      "A Reabilitação Oral é o conjunto integrado de procedimentos que restabelece dentes perdidos, desgastados ou com mordida desalinhada. Utilizando próteses fixas, próteses sobre implantes e cerâmicas de alta resistência, o Dr. Frank Eduardo planeja cada detalhe para devolver a liberdade de sorrir e mastigar qualquer alimento com total conforto e firmeza.",
    indications: [
      "Perda de um ou múltiplos dentes",
      "Dentes desgastados por bruxismo ou acidez",
      "Dificuldade na mastigação e dores articulares (DTM)",
      "Insatisfação estética com próteses antigas ou soltas",
    ],
    benefits: [
      "Mastigação perfeita e firmeza absoluta",
      "Harmonia facial e rejuvenescimento do terço inferior da face",
      "Próteses fixas com estética idêntica ao dente natural",
      "Planejamento digital com previsibilidade total de resultado",
    ],
    recovery:
      "Tratamento planejado em etapas confortáveis, respeitando o tempo de cicatrização e com adaptação guiada.",
    faq: {
      q: "Vou conseguir mastigar com segurança como antes?",
      a: "Sim! O objetivo principal da reabilitação oral é devolver 100% da eficiência mastigatória, segurança mecânica e naturalidade estética.",
    },
  },
  {
    id: "implantes-dentarios",
    title: "Implantes Dentários de Alta Tecnologia",
    badge: "Cirurgia Avançada",
    shortDesc:
      "Reposição definitiva com pinos de titânio biocompatíveis e coroas de porcelana. Fixação segura e conforto natural.",
    icon: "Shield",
    fullDesc:
      "Os implantes dentários substituem as raízes dos dentes ausentes com pinos de titânio de altíssima pureza integrados ao osso. Com planejamento cirúrgico minucioso e anestesia moderna, o procedimento é realizado com técnica suave e indolor pelo Dr. Frank Eduardo, proporcionando a base perfeita para dentes fixos, belos e vitalícios.",
    indications: [
      "Ausência de um, vários ou todos os dentes",
      "Usuários de dentaduras ou pontes móveis que desejam dentes fixos",
      "Perdas dentárias recentes ou antigas",
      "Dificuldade de retenção com próteses convencionais",
    ],
    benefits: [
      "Estabilidade fixa que nunca sai do lugar ao falar ou comer",
      "Preservação do osso maxilar e da estrutura facial",
      "Procedimento cirúrgico seguro, guiado e sem dor",
      "Autoestima renovada para sorrir sem receios",
    ],
    recovery:
      "Pós-operatório rápido e tranquilo com acompanhamento dedicado e orientações claras do Dr. Frank e da equipe.",
    faq: {
      q: "Colocar implante dói?",
      a: "Não. A cirurgia de implante é realizada sob anestesia local altamente eficaz. A maioria dos pacientes relata um pós-operatório muito mais confortável do que uma extração comum.",
    },
  },
  {
    id: "lentes-facetas",
    title: "Lentes de Contato Dental & Facetas",
    badge: "Estética & Harmonização",
    shortDesc:
      "Harmonização do sorriso com porcelanas ultrafinas e resinas nobres para alinhar cor, formato e proporções com naturalidade.",
    icon: "Sparkles",
    fullDesc:
      "As lentes de contato e facetas dentárias são lâminas ultrafinas confeccionadas sob medida para cobrir a superfície frontal dos dentes. Elas corrigem imperfeições de cor, espaçamentos (diastemas), bordas quebradas e dentes escurecidos, proporcionando um sorriso simétrico, luminoso e que respeita os traços naturais do seu rosto.",
    indications: [
      "Dentes manchados ou escurecidos resistentes ao clareamento",
      "Espaços indesejados entre os dentes (diastemas)",
      "Dentes lascados, curtos ou levemente desalinhados",
      "Desejo de um sorriso mais jovem, harmônico e radiante",
    ],
    benefits: [
      "Sorriso impecável e alinhado de forma rápida e duradoura",
      "Materiais que mantêm o brilho e não mancham com café ou vinho",
      "Mínimo ou nenhum desgaste da estrutura dental sadia",
      "Resultado natural sem aquele aspecto artificial de 'dentes falsos'",
    ],
    recovery:
      "Procedimento minimamente invasivo, sem dor e com retorno imediato às atividades cotidianas.",
    faq: {
      q: "As lentes de contato desgastam muito os dentes?",
      a: "Não. Com as porcelanas ultrafinas modernas, o desgaste é milimétrico e estritamente conservador, preservando a saúde do dente natural.",
    },
  },
  {
    id: "cirurgia-siso",
    title: "Cirurgia de Sisos & Extrações Suaves",
    badge: "Cirurgia Humanizada",
    shortDesc:
      "Remoção cirúrgica segura de sisos inclusos e dentes comprometidos com técnica indolor, mão leve e pós-operatório assistido.",
    icon: "Heart",
    fullDesc:
      "A cirurgia de dentes terceiros molares (sisos) é realizada pelo Dr. Frank Eduardo com técnica cirúrgica refinada, delicadeza e rapidez. Conhecido por sua 'mão leve' e atendimento humanizado, o Dr. Frank cuida até de pacientes gestantes e pessoas com histórico de trauma de infância, oferecendo suporte contínuo antes, durante e após a cirurgia.",
    indications: [
      "Sisos inclusos, semi-inclusos ou empurrando os outros dentes",
      "Dor de dente aguda, inchaço ou infecções recorrentes (pericoronarite)",
      "Dentes com fratura profunda ou destruição irreparável",
      "Indicação ortodôntica para liberação de espaço na arcada",
    ],
    benefits: [
      "Alívio imediato da dor e prevenção de infecções graves",
      "Técnica minimamente invasiva com menor edema (inchaço)",
      "Atendimento cuidadoso e acolhedor que tranquiliza o paciente",
      "Acompanhamento pós-cirúrgico de perto pelo WhatsApp com o Dr. Frank",
    ],
    recovery:
      "Protocolo de medicamentos pré e pós-operatórios para cicatrização rápida e sem dor em 3 a 5 dias.",
    faq: {
      q: "Eu tenho muito medo de arrancar o siso. Vou sentir dor?",
      a: "Absolutamente não. A anestesia local é aplicada de forma suave e gradual. O Dr. Frank tem uma técnica cirúrgica delicada ('mão leve') amplamente elogiada pelos pacientes em mais de 250 avaliações.",
    },
  },
  {
    id: "clareamento-dental",
    title: "Clareamento Dental Avançado",
    badge: "Estética Não Invasiva",
    shortDesc:
      "Protocolos combinados em consultório e caseiro supervisionado para clarear os dentes com segurança e sem sensibilidade incômoda.",
    icon: "Zap",
    fullDesc:
      "O clareamento dental profissional sob supervisão do Dr. Frank Eduardo remove pigmentos profundos acumulados ao longo dos anos, restaurando a cor clara e brilhante dos dentes. Utilizamos géis clareadores com agentes dessensibilizantes e protetores gengivais de ponta para garantir conforto térmico durante todo o tratamento.",
    indications: [
      "Dentes amarelados pelo envelhecimento natural ou alimentos",
      "Manchas decorrentes de café, chá, refrigerantes ou cigarro",
      "Pacientes que se preparam para eventos, casamentos ou restaurações",
      "Desejo de renovar a luminosidade e jovialidade do sorriso",
    ],
    benefits: [
      "Dentes visivelmente mais brancos em poucas sessões",
      "Protocolo seguro que não agride o esmalte dental",
      "Fórmulas com dessensibilizante para máximo conforto",
      "Acompanhamento fotográfico do antes e depois",
    ],
    recovery:
      "Sem necessidade de repouso. Apenas evitar corantes intensos nas primeiras 48 horas após a sessão.",
    faq: {
      q: "O clareamento estraga o esmalte dos dentes?",
      a: "Não. Quando realizado com produtos regulamentados e supervisão odontológica do Dr. Frank, o clareamento apenas quebra as moléculas de corante sem desgastar a matriz do esmalte.",
    },
  },
  {
    id: "restauracoes-esteticas",
    title: "Restaurações Estéticas & Check-up",
    badge: "Saúde & Prevenção",
    shortDesc:
      "Substituição de restaurações escuras por resinas que mimetizam a cor natural, além de profilaxia profunda e remoção de tártaro.",
    icon: "CheckCircle2",
    fullDesc:
      "As restaurações modernas em resinas compostas nanoparticuladas devolvem a forma original do dente com acabamento e brilho imperceptíveis. Aliadas à profilaxia periódica (limpeza com ultrassom e jato de bicarbonato), mantêm a gengiva saudável e protegem a dentição contra cáries e doenças periodontais.",
    indications: [
      "Troca de restaurações escuras de amálgama (metálicas)",
      "Tratamento de cáries ativas ou restaurações fraturadas",
      "Acúmulo de tártaro, placa bacteriana ou sangramento gengival",
      "Check-up preventivo semestral para toda a família",
    ],
    benefits: [
      "Estética natural idêntica à cor dos seus dentes",
      "Hálito puro, gengiva firme e proteção duradoura",
      "Consultório ultra-higienizado com equipamentos esterilizados",
      "Atendimento preventivo que evita problemas complexos no futuro",
    ],
    recovery:
      "Recuperação imediata: você já pode se alimentar normalmente logo após o procedimento.",
    faq: {
      q: "De quanto em quanto tempo devo fazer limpeza no consultório?",
      a: "O recomendado é a cada 6 meses, garantindo a remoção de tártaro antes que cause inflamações gengivais ou perdas ósseas.",
    },
  },
];

// Depoimentos Reais do Google Reviews (Nota 5,0 estrelas - 256 avaliações)
interface Review {
  name: string;
  badge?: string;
  timeAgo: string;
  comment: string;
  highlights: string[];
}

const REVIEWS: Review[] = [
  {
    name: "Polyana Rodrigues",
    badge: "9 avaliações · Paciente de Betim",
    timeAgo: "6 meses atrás",
    comment:
      "Super recomendo o Dr Frank! Ótimo profissional, passa muita segurança e humanização no atendimento. Muito critério na higienização das salas e equipamentos, fiz procedimentos com ele e faria novamente. Detalhe: me desloquei de Betim para ir até seu consultório devido às recomendações que tive dele, então a distância não era problema. Gratidão Dr Frank, muito obrigada!",
    highlights: ["Humanização no atendimento", "Higiene rigorosa", "Deslocou de Betim"],
  },
  {
    name: "Carlos Deleon Gonçalves",
    badge: "Local Guide · 27 avaliações",
    timeAgo: "8 meses atrás",
    comment:
      "Excelente! Equipamentos de alta tecnologia, moderno, qualidade e ótimo atendimento. O Dr. Frank é um ótimo profissional e a Meg muito gente boa e simpática no atendimento. Recomendo de olhos fechados!",
    highlights: ["Alta tecnologia", "Moderno", "Meg simpática e atenciosa"],
  },
  {
    name: "Luiz Fernando Oliveira",
    badge: "Local Guide · 24 avaliações",
    timeAgo: "6 meses atrás",
    comment:
      "O melhor dentista de Igarapé e região. Responsável, honesto e muito profissional. Explica passo a passo o que está fazendo e deixa tudo bem claro para que não haja dúvidas.",
    highlights: ["Melhor de Igarapé e região", "Honesto e claro", "Explica passo a passo"],
  },
  {
    name: "Mariana Neta",
    badge: "8 avaliações",
    timeAgo: "3 meses atrás",
    comment:
      "Dr. Frank foi muito atencioso e educado, me explicou todo o procedimento com clareza. Excelente dentista. Super indico!!",
    highlights: ["Educado e atencioso", "Explicação clara", "Super indico"],
  },
  {
    name: "Nanda Oliveira",
    badge: "4 avaliações · Atendimento Gestante",
    timeAgo: "5 anos atrás",
    comment:
      "Sempre tive medo de dentista e precisei de tratamento em um dente siso durante a gravidez do meu filho. Eu estava sentindo muita dor e o Dr Frank me atendeu em pleno feriado para uma avaliação, com muita cautela pela gestação no 8º mês. Ele me deu todo suporte e sempre atencioso nas mensagens nas madrugadas de dor. Depois tirei o dente e foi um alívio imenso. Gratidão imensa pelo carinho e competência!",
    highlights: ["Atendimento no feriado", "Cuidado na gestação", "Suporte nas madrugadas"],
  },
  {
    name: "Kaah Oliver",
    badge: "6 avaliações · Superou Trauma",
    timeAgo: "2 anos atrás",
    comment:
      "O Dr Frank é muito atencioso e o mais importante: muito honesto. Vim traumatizada de outro consultório em Igarapé e fiz minha consulta com ele. O serviço prestado é de excelência desde a atendente que é um amor, até o Dr Frank que tem bastante experiência, calma e a mão leve rs. Indico muito!",
    highlights: ["Superou trauma anterior", "Mão leve e calma", "Honesto demais"],
  },
  {
    name: "Jessica Dos Santos",
    badge: "3 avaliações · Família Tratando",
    timeAgo: "2 anos atrás",
    comment:
      "O único que conseguiu tirar o trauma que tive com dentista! Um excelente profissional, me explicou tudo o que precisava fazer sem deixar nenhuma dúvida. Recomendo de olhos fechados, meu esposo e minhas filhas tratam com ele.",
    highlights: ["Tirou o trauma de dentista", "Família inteira trata", "Recomendo de olhos fechados"],
  },
  {
    name: "Diego Romao",
    badge: "3 avaliações",
    timeAgo: "5 anos atrás",
    comment:
      "Já tinha tentado resolver meu problema com vários dentistas, mas o Dr. Frank foi o único que conseguiu me entender e solucionar minha insatisfação com meus dentes. Se tenho autoestima e satisfação com meu sorriso hoje, devo a esse consultório maravilhoso. Obrigado também a Meg pela excelência em seu trabalho. Me sinto em casa com vocês!",
    highlights: ["Autoestima restaurada", "Entendeu meu caso", "Equipe faz sentir em casa"],
  },
  {
    name: "Lia Portugal",
    badge: "1 avaliação · Honestidade Rara",
    timeAgo: "5 anos atrás",
    comment:
      "Fiz tratamento de dentes com o Dr. Frank Eduardo. Foram 4 dentes e pensei que fosse custar uma fortuna. Para espanto meu, ele cobrou um preço bem baixo, o tratamento foi rápido e quando fui pagar ele ainda me deu desconto afirmando que não gastou todo o material previsto. É difícil acontecer um caso deste! Muito gentil e não dá medo de fazer o tratamento.",
    highlights: ["Honestidade de verdade", "Preço justo", "Gentil e sem medo"],
  },
  {
    name: "Priscila Amaro",
    badge: "Local Guide · 37 avaliações",
    timeAgo: "5 anos atrás",
    comment:
      "Excelência do começo ao fim! Materiais e produtos de ótima qualidade, ambiente confortável e agradável, uma recepção alegre, gentil e educada da Meg. Não é à toa que saio de Contagem para ser atendida por essa pessoa incrível. Simpatia ímpar!",
    highlights: ["Vem de Contagem", "Materiais de qualidade", "Simpatia ímpar"],
  },
];

// Perguntas Frequentes (FAQ)
const FAQS = [
  {
    q: "Tenho pavor de dentista ou tive experiências traumáticas no passado. O atendimento com o Dr. Frank vai doer?",
    a: "Fique totalmente tranquilo(a)! Dezenas de pacientes relatam em nossas mais de 250 avaliações no Google que tinham medo e superaram o trauma com o Dr. Frank Eduardo. Ele é reconhecido por sua paciência, escuta atenta e pela famosa 'mão leve'. As anestesias são aplicadas com técnica suave, respeitando seu tempo e sem nenhuma pressa.",
  },
  {
    q: "Como funciona a primeira avaliação no consultório?",
    a: "Na consulta inicial, o Dr. Frank conversa detalhadamente com você para entender suas queixas, desejos e histórico. É feito um exame clínico minucioso com tecnologia digital. O Dr. Frank explica com transparência o diagnóstico, apresentando as alternativas de tratamento e orçamentos claros, sem empurrar procedimentos desnecessários.",
  },
  {
    q: "O consultório atende pacientes que moram em Betim, Contagem ou outras cidades?",
    a: "Sim! Muitos pacientes se deslocam frequentemente de Betim, Contagem, Brumadinho, São Joaquim de Bicas e de toda a Região Metropolitana de BH até o nosso consultório no Centro de Igarapé pela confiança e pelos resultados diferenciados do Dr. Frank. O consultório tem fácil acesso com elevador e ótima localização na Av. Governador Valadares.",
  },
  {
    q: "Quais são as opções de pagamento disponíveis para tratamentos e próteses?",
    a: "Trabalhamos com condições facilitadas de pagamento no cartão de crédito, PIX e opções parceladas para que você possa realizar seu tratamento odontológico ou reabilitação oral com tranquilidade e planejamento financeiro.",
  },
  {
    q: "Como faço para agendar meu horário?",
    a: "O agendamento é simples, rápido e direto pelo WhatsApp com a Meg, nossa secretária. Basta clicar em qualquer botão do site ou chamar no (31) 99767-0022. Responderemos com atenção para encontrar o melhor dia e horário para a sua rotina.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#001a60] selection:text-[#fff3c4]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (ROYAL NAVY & GOLD)                 */}
        {/* ======================================================== */}
        <div className="border-b border-[#0a1945] bg-[#000d2b] py-2 text-xs text-[#cbd5e1]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="inline-flex items-center gap-1 text-[#f4c22b] font-bold">
                <Star size={13} className="fill-[#f4c22b]" /> 5,0 no Google
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline">256+ avaliações reais de pacientes</span>
              <span className="hidden md:inline text-slate-500">|</span>
              <span className="hidden md:inline text-slate-300">
                Centro de Igarapé - MG
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1 text-[#cbd5e1] hover:text-[#f4c22b] transition-colors"
              >
                <MapPin size={12} className="text-[#dea404]" />
                Av. Gov. Valadares, 440 · Sala 202
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-[#f4c22b] hover:text-white transition-colors"
              >
                <WhatsAppIcon size={13} />
                <span>(31) 99767-0022</span>
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR                                   */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#001a60]/15 bg-white/95 backdrop-blur-md shadow-sm"
              : "border-b border-slate-200/60 bg-white"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0 group">
              <div className="relative h-10 w-48 sm:h-11 sm:w-60 md:w-64">
                <Image
                  src={LOGO_HORIZONTAL_SRC}
                  alt={CLINIC_NAME}
                  fill
                  sizes="(max-width: 640px) 190px, 260px"
                  className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 shrink-0">
              <a href="#tratamentos" className="nav-link">
                Tratamentos
              </a>
              <a href="#sobre" className="nav-link">
                Dr. Frank
              </a>
              <a href="#estrutura" className="nav-link">
                O Consultório
              </a>
              <a href="#diferenciais" className="nav-link">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link">
                Depoimentos (5★)
              </a>
              <a href="#localizacao" className="nav-link">
                Localização
              </a>
              <a href="#duvidas" className="nav-link">
                Dúvidas
              </a>
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block shrink-0">
                <GlowingButton
                  variant="gold"
                  size="sm"
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma avaliação com o Dr. Frank Eduardo.")}
                  target="_blank"
                  className="whitespace-nowrap shrink-0 shadow-sm"
                >
                  <WhatsAppIcon size={15} className="shrink-0" />
                  <span>Agendar Consulta</span>
                </GlowingButton>
              </div>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#001344] hover:bg-slate-100 transition-colors focus:outline-none shrink-0"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
              >
                <div className="flex flex-col gap-3 font-semibold text-sm text-[#001344]">
                  <a
                    href="#tratamentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>Tratamentos & Procedimentos</span>
                    <ArrowRight size={14} className="text-[#dea404]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>Sobre o Dr. Frank Eduardo</span>
                    <ArrowRight size={14} className="text-[#dea404]" />
                  </a>
                  <a
                    href="#estrutura"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>Estrutura & Tecnologia</span>
                    <ArrowRight size={14} className="text-[#dea404]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>Por Que Escolher Nosso Consultório</span>
                    <ArrowRight size={14} className="text-[#dea404]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>Depoimentos no Google (256+ avaliações)</span>
                    <ArrowRight size={14} className="text-[#dea404]" />
                  </a>
                  <a
                    href="#localizacao"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>Endereço & Como Chegar</span>
                    <ArrowRight size={14} className="text-[#dea404]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 flex items-center justify-between"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#dea404]" />
                  </a>

                  <div className="pt-4 flex flex-col gap-2.5">
                    <GlowingButton
                      variant="gold"
                      size="md"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Agendar no WhatsApp</span>
                    </GlowingButton>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-300 text-xs font-bold uppercase text-[#001344] hover:bg-slate-50 transition-colors"
                    >
                      <InstagramIcon size={14} />
                      <span>Instagram @dr.frankeduardo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION                                    */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-24 bg-gradient-to-b from-white via-[#f0f4f9] to-[#f8fafc]">
          {/* Subtle Royal Blue & Gold Ambient Glows */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-radial from-[#e8f1fc]/80 via-[#dea404]/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-[450px] w-[500px] rounded-full bg-radial from-[#dea404]/10 to-transparent blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Headlines & Authority Copy */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dea404]/40 bg-[#fff3c4]/40 px-3.5 py-1 text-xs font-bold text-[#8c6002] mb-5 shadow-xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#dea404] animate-pulse" />
                  <span className="tracking-[0.14em] uppercase">
                    Odontologia Avançada & Cirurgia · Igarapé - MG
                  </span>
                </div>

                {/* Main H1 Headline */}
                <h1 className="font-heading text-3xl font-extrabold tracking-tight text-[#001344] sm:text-4xl md:text-5xl lg:text-5xl lg:leading-[1.15]">
                  Tecnologia de ponta, precisão cirúrgica e o acolhimento que{" "}
                  <span className="royal-gradient-text">
                    devolve a alegria de sorrir.
                  </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Reabilitação oral completa, implantes, próteses e estética dental
                  com a segurança de um cirurgião experiente e o carinho de quem
                  realmente escuta você. Tratamentos com a famosa{" "}
                  <strong className="text-[#001a60] font-bold">"mão leve"</strong> que
                  elimina o trauma de dentista.
                </p>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dea404] shrink-0" />
                    <span>256+ avaliações 5 estrelas no Google</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dea404] shrink-0" />
                    <span>Cirurgião Dentista Dedicado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dea404] shrink-0" />
                    <span>Técnica Suave & Humanizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dea404] shrink-0" />
                    <span>Centro de Igarapé (Sala 202)</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <GlowingButton
                    variant="gold"
                    size="lg"
                    href={getWhatsAppUrl("Olá Dr. Frank e Meg! Gostaria de agendar uma consulta de avaliação no consultório em Igarapé.")}
                    target="_blank"
                    className="shadow-lg"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Agendar Avaliação no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    variant="navy"
                    size="lg"
                    href="#tratamentos"
                  >
                    <span>Conhecer Tratamentos</span>
                    <ArrowDownIcon size={14} />
                  </GlowingButton>
                </div>

                {/* Social Proof Google Box */}
                <div className="mt-9 flex items-center gap-4 rounded-xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xs max-w-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#001a60] text-white">
                    <Star size={24} className="fill-[#f4c22b] text-[#f4c22b]" />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#001344]">
                      <span className="text-sm">5,0</span>
                      <div className="flex text-[#f4c22b]">
                        {"★".repeat(5)}
                      </div>
                      <span className="text-slate-500 font-normal">
                        (256 avaliações no Google)
                      </span>
                    </div>
                    <p className="mt-0.5 text-slate-600">
                      Pacientes de Igarapé, Betim, Contagem e região recomendam o Dr. Frank e o carinho da recepção da Meg.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Photography & Trust Cards */}
              <div className="lg:col-span-5 relative">
                {/* Visual Frame */}
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Glowing decorative backdrop */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#001a60]/20 via-[#dea404]/25 to-transparent blur-xl" />

                  {/* Main Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-white bg-white shadow-2xl">
                    <div className="relative aspect-[3/4] w-full bg-slate-100">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Frank Eduardo em atendimento odontológico cirúrgico"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover object-top"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#000d2b]/90 via-[#001344]/50 to-transparent" />

                      {/* Doctor Caption Tag */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#dea404] px-2.5 py-0.5 text-[11px] font-extrabold text-[#001344] uppercase tracking-wider mb-1">
                          Cirurgião Dentista
                        </div>
                        <h2 className="font-heading text-lg font-bold">
                          Dr. Frank Eduardo
                        </h2>
                        <p className="text-xs text-slate-200">
                          Odontologia Avançada · Reabilitação Oral · Cirurgia
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge 1: 5.0 Google Reviews */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute -top-4 -left-4 sm:-left-6 rounded-xl border border-[#dea404]/30 bg-white/95 p-3.5 shadow-xl backdrop-blur-md max-w-[210px]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#001344] text-[#f4c22b]">
                        <Star size={16} className="fill-[#f4c22b]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#001344]">
                          Nota 5,0 Estrelas
                        </div>
                        <div className="text-[10px] text-slate-500">
                          256 avaliações Google
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge 2: Atendimento Humanizado & Mão Leve */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -bottom-5 -right-4 sm:-right-6 rounded-xl border border-[#001a60]/20 bg-white/95 p-3.5 shadow-xl backdrop-blur-md max-w-[220px]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <Heart size={18} className="fill-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#001344]">
                          Técnica "Mão Leve"
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Sem dor e sem traumas
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* STATS & AUTHORITY STRIP                                  */}
        {/* ======================================================== */}
        <section className="border-y border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                  5,0 ★
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#b78004]">
                  Avaliação no Google
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Mais de 256 depoimentos com nota máxima
                </p>
              </div>

              <div className="text-center border-l border-slate-200">
                <div className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                  Cirurgião
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#b78004]">
                  Alta Precisão
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Implantes, reabilitação e sisos complexos
                </p>
              </div>

              <div className="text-center border-l-0 sm:border-l border-slate-200">
                <div className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                  Zero Trauma
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#b78004]">
                  Técnica Indolor
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Paciência e acolhimento para quem tem medo
                </p>
              </div>

              <div className="text-center border-l border-slate-200">
                <div className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                  Sala 202
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#b78004]">
                  Centro de Igarapé
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Av. Gov. Valadares, 440 · 3º Andar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 2: TRATAMENTOS & ESPECIALIDADES                    */}
        {/* ======================================================== */}
        <section id="tratamentos" className="py-20 sm:py-26 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dea404]/40 bg-[#fff3c4]/50 px-3.5 py-1 text-xs font-bold text-[#8c6002] uppercase tracking-[0.14em] mb-4">
                Tratamentos Especializados
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                Cuidado odontológico avançado para cada necessidade do seu sorriso.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Do alívio imediato da dor à transformação completa da mastigação e da estética. Conheça nossos procedimentos planejados com tecnologia digital e executados com maestria.
              </p>
            </div>

            {/* Specialties Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SPECIALTIES.map((spec) => (
                <div
                  key={spec.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#dea404]/60 hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#f0f4f9] px-3 py-1 text-[11px] font-bold text-[#001a60]">
                        {spec.badge}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#001344] text-[#f4c22b] group-hover:scale-110 transition-transform">
                        <Sparkles size={18} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-[#001344] mt-5 group-hover:text-[#001a60] transition-colors">
                      {spec.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {spec.shortDesc}
                    </p>
                  </div>

                  {/* Action Link & Modal Opener */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedSpecialty(spec)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001a60] hover:text-[#b78004] transition-colors cursor-pointer"
                    >
                      <span>Ver detalhes completos</span>
                      <ArrowRight size={13} />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Olá! Gostaria de mais informações sobre ${spec.title} com o Dr. Frank Eduardo.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                      title="Agendar este tratamento"
                    >
                      <WhatsAppIcon size={15} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Support Callout */}
            <div className="mt-12 rounded-2xl border border-[#dea404]/30 bg-gradient-to-r from-[#000d2b] via-[#001a60] to-[#02298a] p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#f4c22b] uppercase tracking-wider mb-2">
                    <Sparkles size={14} /> Atendimento Personalizado
                  </div>
                  <h3 className="font-heading text-2xl font-bold">
                    Não tem certeza de qual tratamento é o mais indicado para você?
                  </h3>
                  <p className="mt-2 text-sm text-slate-200 max-w-2xl">
                    Agende uma avaliação inicial com o Dr. Frank Eduardo. Nós realizamos um diagnóstico completo, tiramos todas as suas dúvidas e planejamos o melhor caminho para a sua saúde bucal.
                  </p>
                </div>
                <GlowingButton
                  variant="gold"
                  size="lg"
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma avaliação inicial com o Dr. Frank Eduardo para entender qual o melhor tratamento para o meu caso.")}
                  target="_blank"
                  className="shrink-0"
                >
                  <WhatsAppIcon size={17} />
                  <span>Falar com a Recepção</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 3: SOBRE O DR. FRANK EDUARDO                       */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Doctor Photo */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Subtle decorative background */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#dea404]/20 via-[#001a60]/10 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-slate-100">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Frank Eduardo — Cirurgião Dentista"
                        fill
                        sizes="(max-width: 1024px) 100vw, 450px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Doctor Quote Card */}
                  <div className="mt-4 rounded-xl border border-slate-200 bg-[#f8fafc] p-4 text-xs text-slate-700 italic shadow-xs">
                    "O dentista não deve apenas tratar dentes; deve acolher pessoas, ouvir suas histórias e devolver a segurança de sorrir sem receios ou dor."
                    <div className="mt-2 font-bold not-italic text-[#001344]">
                      — Dr. Frank Eduardo, Cirurgião Dentista
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio, Philosophy & Credentials */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dea404]/40 bg-[#fff3c4]/50 px-3.5 py-1 text-xs font-bold text-[#8c6002] uppercase tracking-[0.14em] mb-4">
                  Cirurgião Dentista
                </div>

                <h2 className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                  Dr. Frank Eduardo: dedicação à excelência e ao cuidado humano.
                </h2>

                <p className="mt-5 text-base text-slate-700 leading-relaxed">
                  Com sólida atuação em <strong className="text-[#001a60]">cirurgia, reabilitação oral e odontologia avançada</strong>, o Dr. Frank Eduardo construiu seu consultório em Igarapé baseado em três pilares fundamentais: honestidade transparente, rigor técnico e um atendimento profundamente humanizado.
                </p>

                <p className="mt-4 text-base text-slate-700 leading-relaxed">
                  Conhecido carinhosamente entre os pacientes pela sua <strong>"mão leve"</strong> e pela calma ao explicar cada detalhe do procedimento, o Dr. Frank já ajudou centenas de pessoas que carregavam traumas profundos do passado a voltarem a frequentar o consultório com tranquilidade e confiança.
                </p>

                {/* Key Pillars */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#001344] text-[#f4c22b]">
                      <Shield size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#001344]">
                        Transparência & Ética
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        Diagnósticos sinceros, preços justos e apenas os procedimentos que você realmente precisa.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#001344] text-[#f4c22b]">
                      <Heart size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#001344]">
                        Acolhimento Sem Trauma
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        Técnicas anestésicas indolores e paciência de verdade para tranquilizar até quem tem fobia.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#001344] text-[#f4c22b]">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#001344]">
                        Reabilitação Completa
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        Implantes, próteses de alta durabilidade e estética que devolvem a força mastigatória.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#001344] text-[#f4c22b]">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#001344]">
                        Equipe Nota 100 com a Meg
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        Recepção carinhosa, pontualidade e suporte atencioso desde o primeiro 'olá' no WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com o Dr. Frank Eduardo.")}
                    target="_blank"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar Consulta com Dr. Frank</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#001a60] hover:text-[#b78004] transition-colors"
                  >
                    <InstagramIcon size={15} />
                    <span>Acompanhe o dia a dia no Instagram</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 4: A ESTRUTURA DO CONSULTÓRIO                      */}
        {/* ======================================================== */}
        <section id="estrutura" className="py-20 sm:py-26 bg-[#f0f4f9] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Clinic Description */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dea404]/40 bg-[#fff3c4]/50 px-3.5 py-1 text-xs font-bold text-[#8c6002] uppercase tracking-[0.14em] mb-4">
                  Infraestrutura & Tecnologia
                </div>

                <h2 className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                  Um ambiente moderno, esterilizado e acolhedor no Centro de Igarapé.
                </h2>

                <p className="mt-4 text-base text-slate-700 leading-relaxed">
                  Localizado no Edifício Central da Avenida Governador Valadares (Sala 202, 3º andar), nosso consultório foi projetado para oferecer o máximo em conforto, segurança biológica e tranquilidade.
                </p>

                <div className="mt-6 space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#dea404] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#001344]">Equipamentos de Alta Tecnologia:</strong> Cadeiras odontológicas ergonômicas, aparelhos digitais e instrumentos rotatórios de última geração para procedimentos rápidos e precisos.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#dea404] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#001344]">Biossegurança & Higienização Rigorosa:</strong> Esterilização em autoclave hospitalar monitorada, embalagens seladas individuais e materiais descartáveis para segurança absoluta do paciente.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#dea404] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#001344]">Recepção Confortável com a Meg:</strong> Ambiente climatizado, água, biscoitos, café e um atendimento caloroso que faz você se sentir em casa antes mesmo de entrar no consultório.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#dea404] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#001344]">Acessibilidade Completa:</strong> Edifício moderno com elevador, acesso fácil e localização privilegiada no coração de Igarapé.
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <GlowingButton
                    variant="navy"
                    size="md"
                    href={getWhatsAppUrl("Olá Meg! Gostaria de agendar uma consulta para conhecer o consultório.")}
                    target="_blank"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar sua Visita</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Right Column: High Quality Dental Office Photography */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-white">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={FOTO_CONSULTORIO_SRC}
                        alt="Estrutura do consultório odontológico do Dr. Frank Eduardo em Igarapé"
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-4 border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#001344] text-[#f4c22b]">
                        <Clock size={20} />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-[#001344]">
                          Horário de Atendimento
                        </div>
                        <div className="text-slate-600">
                          Segunda a Sexta · 08:00 às 18:00
                        </div>
                      </div>
                    </div>

                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#001a60] hover:text-[#dea404] flex items-center gap-1"
                    >
                      <span>Ver no Mapa</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 5: DIFERENCIAIS DA CLÍNICA (DEEP NAVY & GOLD)      */}
        {/* ======================================================== */}
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#000d2b] text-white relative overflow-hidden">
          {/* Subtle gold ambient glow */}
          <div className="pointer-events-none absolute -top-40 right-10 -z-0 h-[500px] w-[500px] rounded-full bg-radial from-[#dea404]/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 -z-0 h-[400px] w-[400px] rounded-full bg-radial from-[#0037a8]/20 to-transparent blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f4c22b]/40 bg-[#001a60]/60 px-3.5 py-1 text-xs font-bold text-[#f4c22b] uppercase tracking-[0.14em] mb-4">
                Por Que Escolher Nosso Consultório
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                O que torna o atendimento do Dr. Frank Eduardo único na região.
              </h2>
              <p className="mt-4 text-base text-slate-300">
                A união entre precisão técnica de cirurgião e o acolhimento carinhoso que faz você se sentir em família desde a recepção.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Diferencial 1 */}
              <div className="rounded-2xl border border-[#001a60] bg-[#001344]/80 p-7 backdrop-blur-sm hover:border-[#dea404]/60 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#000d2b] to-[#001a60] border border-[#dea404]/40 text-[#f4c22b] mb-5">
                  <Heart size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  A Famosa "Mão Leve"
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Pacientes com fobia de dentista relatam surpresa com o quão suave e indolor é o tratamento. O Dr. Frank tem paciência ímpar e aplica anestesias de forma quase imperceptível.
                </p>
              </div>

              {/* Diferencial 2 */}
              <div className="rounded-2xl border border-[#001a60] bg-[#001344]/80 p-7 backdrop-blur-sm hover:border-[#dea404]/60 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#000d2b] to-[#001a60] border border-[#dea404]/40 text-[#f4c22b] mb-5">
                  <Shield size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Honestidade Absoluta & Preço Justo
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Sem empurrar tratamentos desnecessários. Como relata a paciente Lia no Google: quando não gasta todo o material previsto, o Dr. Frank cobra apenas o justo e dá o desconto ao paciente.
                </p>
              </div>

              {/* Diferencial 3 */}
              <div className="rounded-2xl border border-[#001a60] bg-[#001344]/80 p-7 backdrop-blur-sm hover:border-[#dea404]/60 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#000d2b] to-[#001a60] border border-[#dea404]/40 text-[#f4c22b] mb-5">
                  <Award size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Cirurgião Dentista Especialista
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Experiência comprovada em casos de alta complexidade: extração de sisos inclusos, implantes unitários e múltiplos, e reabilitação oral completa.
                </p>
              </div>

              {/* Diferencial 4 */}
              <div className="rounded-2xl border border-[#001a60] bg-[#001344]/80 p-7 backdrop-blur-sm hover:border-[#dea404]/60 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#000d2b] to-[#001a60] border border-[#dea404]/40 text-[#f4c22b] mb-5">
                  <Users size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Recepção Acolhedora da Meg
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Elogiada nominalmente em dezenas de avaliações, a Meg garante um atendimento pontual, gentil e sem pressa, cuidando para que você se sinta em casa antes e após o procedimento.
                </p>
              </div>

              {/* Diferencial 5 */}
              <div className="rounded-2xl border border-[#001a60] bg-[#001344]/80 p-7 backdrop-blur-sm hover:border-[#dea404]/60 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#000d2b] to-[#001a60] border border-[#dea404]/40 text-[#f4c22b] mb-5">
                  <MapPin size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Pacientes de Toda a Região
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Pessoas viajam de Betim, Contagem, Brumadinho, São Joaquim de Bicas e até do exterior para se tratarem com o Dr. Frank em Igarapé pela certeza de um resultado duradouro e confiável.
                </p>
              </div>

              {/* Diferencial 6 */}
              <div className="rounded-2xl border border-[#001a60] bg-[#001344]/80 p-7 backdrop-blur-sm hover:border-[#dea404]/60 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#000d2b] to-[#001a60] border border-[#dea404]/40 text-[#f4c22b] mb-5">
                  <Zap size={22} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Suporte Pós-Operatório Real
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Como vivenciou a paciente Nanda: atendimento e acompanhamento contínuo por WhatsApp mesmo em feriados ou madrugadas de dor para total tranquilidade do paciente.
                </p>
              </div>
            </div>

            {/* CTA inside dark section */}
            <div className="mt-14 text-center">
              <GlowingButton
                variant="gold"
                size="lg"
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com o Dr. Frank Eduardo.")}
                target="_blank"
              >
                <WhatsAppIcon size={18} />
                <span>Agendar Avaliação com o Dr. Frank</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 6: DEPOIMENTOS REAIS DO GOOGLE (256+ AVALIAÇÕES)   */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dea404]/40 bg-[#fff3c4]/50 px-3.5 py-1 text-xs font-bold text-[#8c6002] uppercase tracking-[0.14em] mb-4">
                Prova Social Comprovada
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                O que os pacientes dizem sobre o Dr. Frank Eduardo e a equipe.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Avaliação máxima de <strong>5,0 estrelas com mais de 256 depoimentos reais no Google</strong>. Depoimentos espontâneos de quem recuperou a saúde bucal e a vontade de sorrir.
              </p>
            </div>

            {/* Google Score Summary Banner */}
            <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <span className="font-heading text-4xl font-extrabold text-[#001344]">
                  5,0
                </span>
                <div className="text-left">
                  <div className="flex text-[#f4c22b] text-lg">
                    {"★".repeat(5)}
                  </div>
                  <div className="text-xs font-bold text-slate-600">
                    256 avaliações verificadas no Google
                  </div>
                </div>
              </div>
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#001a60] hover:text-[#dea404] transition-colors"
              >
                <span>Ver todas as avaliações diretamente no Google</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Reviews Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((rev, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#dea404]/50 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    {/* Stars & Time */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#f4c22b] text-sm">
                        {"★".repeat(5)}
                      </div>
                      <span className="text-[11px] text-slate-600 font-medium">
                        {rev.timeAgo}
                      </span>
                    </div>

                    {/* Comment text */}
                    <p className="mt-4 text-sm text-slate-700 leading-relaxed italic">
                      "{rev.comment}"
                    </p>

                    {/* Highlights tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {rev.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="rounded-md bg-[#f0f4f9] px-2 py-0.5 text-[10px] font-semibold text-[#001a60]"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#001344] font-bold text-xs text-[#f4c22b]">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading text-xs font-bold text-[#001344]">
                        {rev.name}
                      </div>
                      {rev.badge && (
                        <div className="text-[10px] text-slate-600 font-medium">
                          {rev.badge}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA under reviews */}
            <div className="mt-14 text-center">
              <GlowingButton
                variant="gold"
                size="lg"
                href={getWhatsAppUrl("Olá! Li os depoimentos no site e gostaria de agendar uma consulta de avaliação com o Dr. Frank Eduardo.")}
                target="_blank"
              >
                <WhatsAppIcon size={18} />
                <span>Quero Agendar Minha Avaliação</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 7: LOCALIZAÇÃO & SEDE EM IGARAPÉ                   */}
        {/* ======================================================== */}
        <section id="localizacao" className="py-20 sm:py-26 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Contact details */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dea404]/40 bg-[#fff3c4]/50 px-3.5 py-1 text-xs font-bold text-[#8c6002] uppercase tracking-[0.14em] mb-4">
                  Onde Estamos
                </div>

                <h2 className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                  Fácil acesso no Centro de Igarapé - MG.
                </h2>

                <p className="mt-4 text-base text-slate-700 leading-relaxed">
                  Localização estratégica com elevador, estacionamento nas proximidades e total comodidade para pacientes de Igarapé e cidades vizinhas como Betim, Contagem, Brumadinho e São Joaquim de Bicas.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <MapPin size={22} className="text-[#dea404] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-bold text-[#001344]">Endereço Completo</div>
                      <div className="text-slate-600 mt-0.5">
                        {ADDRESS_DISPLAY}
                      </div>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#001a60] hover:text-[#dea404] mt-2 transition-colors"
                      >
                        <span>Traçar rota no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <Phone size={22} className="text-[#dea404] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-bold text-[#001344]">Telefone & WhatsApp</div>
                      <div className="text-slate-600 mt-0.5">
                        {PHONE_DISPLAY}
                      </div>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#001a60] hover:text-[#dea404] mt-2 transition-colors"
                      >
                        <span>Conversar no WhatsApp com a Meg</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <Clock size={22} className="text-[#dea404] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-bold text-[#001344]">Horários de Funcionamento</div>
                      <div className="text-slate-600 mt-0.5">
                        Segunda a Sexta-feira: 08:00 às 18:00
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Atendimentos com agendamento prévio para seu conforto e pontualidade.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Map Preview Card */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                  {/* Clean Map Graphic Container */}
                  <div className="relative h-[380px] w-full bg-slate-200 flex flex-col items-center justify-center p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#001344] text-[#f4c22b] shadow-lg mb-4">
                      <MapPin size={32} />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#001344]">
                      Dr. Frank Eduardo — Odontologia Avançada
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 max-w-md">
                      Av. Gov. Valadares, 440 · 3º Andar · Sala 202 · Centro, Igarapé - MG
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      CEP 32900-000 · Referência: Próximo à praça central
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#001344] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#001a60] transition-colors"
                      >
                        <MapPin size={15} className="text-[#f4c22b]" />
                        <span>Abrir no Google Maps</span>
                      </a>

                      <a
                        href={getWhatsAppUrl("Olá! Gostaria de receber a localização exata do consultório no WhatsApp.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-emerald-700 transition-colors"
                      >
                        <WhatsAppIcon size={15} />
                        <span>Pedir Localização no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 8: PERGUNTAS FREQUENTES (FAQ)                      */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#f8fafc] border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dea404]/40 bg-[#fff3c4]/50 px-3.5 py-1 text-xs font-bold text-[#8c6002] uppercase tracking-[0.14em] mb-4">
                Dúvidas Comuns
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-[#001344] sm:text-4xl">
                Perguntas Frequentes dos Pacientes
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Tire suas dúvidas sobre consultas, procedimentos, agendamento e formas de pagamento.
              </p>
            </div>

            <div className="mt-12 space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-bold text-[#001344] hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f4f9] text-[#001a60]">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-5 pb-5 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Direct WhatsApp Callout for Extra Questions */}
            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-center">
              <p className="text-sm text-slate-700 font-medium">
                Tem alguma dúvida específica sobre o seu caso?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá Meg e Dr. Frank! Tenho uma dúvida sobre um procedimento e gostaria de esclarecer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#001a60] hover:text-[#dea404] transition-colors"
                >
                  <WhatsAppIcon size={15} />
                  <span>Converse diretamente conosco no WhatsApp</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER & CTA FINAL (ROYAL NAVY & GOLD)                   */}
        {/* ======================================================== */}
        <footer className="border-t border-[#0a1945] bg-[#000d2b] text-white pt-16 pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 pb-12 border-b border-[#0a1945]">
              {/* Brand Col */}
              <div className="lg:col-span-5">
                <div className="relative h-12 w-60 mb-4">
                  <Image
                    src={LOGO_DARK_BG_SRC}
                    alt={CLINIC_NAME}
                    fill
                    sizes="240px"
                    className="object-contain object-left"
                  />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                  Dr. Frank Eduardo — Odontologia Avançada, Reabilitação Oral, Próteses, Implantes e Estética Dental com rigor científico e o carinho do acolhimento humano no Centro de Igarapé - MG.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#001a60] bg-[#001344] text-[#cbd5e1] hover:text-[#f4c22b] hover:border-[#dea404] transition-colors"
                    aria-label="Instagram Dr. Frank Eduardo"
                  >
                    <InstagramIcon size={16} />
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#001a60] bg-[#001344] text-[#cbd5e1] hover:text-[#f4c22b] hover:border-[#dea404] transition-colors"
                    aria-label="WhatsApp Dr. Frank Eduardo"
                  >
                    <WhatsAppIcon size={16} />
                  </a>

                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#001a60] bg-[#001344] text-[#cbd5e1] hover:text-[#f4c22b] hover:border-[#dea404] transition-colors"
                    aria-label="Google Avaliações"
                  >
                    <Star size={16} className="text-[#f4c22b]" />
                  </a>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="lg:col-span-3 text-xs">
                <div className="font-heading text-sm font-bold text-[#f4c22b] uppercase tracking-wider mb-4">
                  Navegação Rápida
                </div>
                <ul className="space-y-2.5 text-slate-300">
                  <li>
                    <a href="#tratamentos" className="hover:text-white transition-colors">
                      Tratamentos & Procedimentos
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="hover:text-white transition-colors">
                      Sobre o Dr. Frank Eduardo
                    </a>
                  </li>
                  <li>
                    <a href="#estrutura" className="hover:text-white transition-colors">
                      Estrutura do Consultório
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-white transition-colors">
                      Por Que Nos Escolher
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-white transition-colors">
                      Depoimentos no Google (256+)
                    </a>
                  </li>
                  <li>
                    <a href="#localizacao" className="hover:text-white transition-colors">
                      Localização & Rotas
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-white transition-colors">
                      Dúvidas Frequentes
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info Col */}
              <div className="lg:col-span-4 text-xs">
                <div className="font-heading text-sm font-bold text-[#f4c22b] uppercase tracking-wider mb-4">
                  Informações & Contato
                </div>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#dea404] shrink-0 mt-0.5" />
                    <span>{ADDRESS_DISPLAY}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone size={16} className="text-[#dea404] shrink-0" />
                    <a
                      href={getWhatsAppUrl()}
                      className="text-[#f4c22b] font-bold hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock size={16} className="text-[#dea404] shrink-0 mt-0.5" />
                    <span>Segunda a Sexta: 08:00 às 18:00</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#0a1945]">
                  <GlowingButton
                    variant="gold"
                    size="sm"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="w-full"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Falar com a Meg no WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div>
                © {new Date().getFullYear()} {CLINIC_NAME}. Todos os direitos reservados.
              </div>
              <div className="text-[11px] text-slate-500">
                Cirurgião Dentista · Odontologia Avançada · Igarapé - MG
              </div>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* FLOATING WHATSAPP BUTTON                                 */}
        {/* ======================================================== */}
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com o Dr. Frank Eduardo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3 text-xs font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40 focus:outline-none"
            aria-label="Agendar via WhatsApp"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
            <WhatsAppIcon size={20} />
            <span className="hidden sm:inline font-extrabold uppercase tracking-wider">
              Agendar Consulta
            </span>
          </a>
        </div>

        {/* ======================================================== */}
        {/* MODAL INTERATIVO: DETALHES DO PROCEDIMENTO               */}
        {/* ======================================================== */}
        <AnimatePresence>
          {selectedSpecialty && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSpecialty(null)}
                className="fixed inset-0 bg-[#000d2b]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl z-10"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedSpecialty(null)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  aria-label="Fechar"
                >
                  <X size={18} />
                </button>

                {/* Badge & Title */}
                <span className="inline-block rounded-full bg-[#f0f4f9] px-3 py-1 text-xs font-bold text-[#001a60] mb-3">
                  {selectedSpecialty.badge}
                </span>

                <h3 className="font-heading text-2xl font-extrabold text-[#001344] sm:text-3xl">
                  {selectedSpecialty.title}
                </h3>

                <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                  {selectedSpecialty.fullDesc}
                </p>

                {/* Indications & Benefits */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#001a60] mb-3">
                      Quando é Indicado:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {selectedSpecialty.indications.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#dea404] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#001a60] mb-3">
                      Principais Benefícios:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {selectedSpecialty.benefits.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#dea404] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recovery & Comfort */}
                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs text-emerald-900">
                  <strong className="font-bold">Conforto & Recuperação: </strong>
                  {selectedSpecialty.recovery}
                </div>

                {/* FAQ Snippet */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs">
                  <div className="font-bold text-[#001344] mb-1">
                    Dúvida Comum: {selectedSpecialty.faq.q}
                  </div>
                  <div className="text-slate-600">
                    {selectedSpecialty.faq.a}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-200">
                  <div className="text-xs text-slate-500">
                    Agendamento direto com a Meg pelo WhatsApp
                  </div>
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl(`Olá! Gostaria de agendar uma avaliação para ${selectedSpecialty.title} com o Dr. Frank Eduardo.`)}
                    target="_blank"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar {selectedSpecialty.title}</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}

function ArrowDownIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}
