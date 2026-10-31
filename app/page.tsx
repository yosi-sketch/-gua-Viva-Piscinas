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

// Client & Professional Information — Clínica Dra. Kamilla
const CLINIC_NAME = "Clínica Dra. Kamilla";
const BRAND_LABEL = "Clínica Dra. Kamilla — Dermatologia, Laser & Estética Médica Avançada";
const DOCTOR_NAME = "Dra. Kamilla";
const DOCTOR_CRM = "CRM-MG 57814";
const DOCTOR_ROLE = "Médica · Dermatologia, Laser & Estética Médica";
const DOCTOR_BIO = "Médica (CRM-MG 57814), mãe de duas princesas, apaixonada por realçar a beleza e a autoestima com naturalidade, segurança e afeto.";
const WHATSAPP_NUMBER = "5531997172916";
const PHONE_DISPLAY = "(31) 99717-2916";
const INSTAGRAM_URL = "https://www.instagram.com/clinicadrakamilla/";
const INSTAGRAM_HANDLE = "@clinicadrakamilla";
const BEACONS_URL = "https://beacons.page/drakamilla";

const ADDRESS_DISPLAY = "R. Pres. Tancredo Neves, 294 - Centro, Mateus Leme - MG, 35670-000";
const CITIES_SERVED = "Mateus Leme e Itaúna - MG";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Cl%C3%ADnica+Dra.+Kamilla%0AMateus+Leme+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Pres.+Tancredo+Neves%2C+294+-+Centro%2C+Mateus+Leme+-+MG%2C+35670-000";

// Official assets from public folder
const LOGO_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const EMBLEM_SRC = "/emblem.png";
const FOTO_HERO_SRC = "/dra-kamilla.jpg";
const FOTO_EQUIPE_SRC = "/equipe-clinica.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta / procedimento na Clínica Dra. Kamilla.";
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
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
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

interface Specialty {
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

const specialties: Specialty[] = [
  {
    id: "tecnologias-a-laser",
    title: "Tecnologias a Laser & Fotorejuvenescimento",
    category: "Rejuvenescimento · Manchas · Cicatrizes · Poros Dilatados · Glow Imediato",
    icon: Zap,
    tag: "Alta Precisão · Excelência Comprovada · Estímulo de Colágeno",
    summary:
      "Tratamentos a laser de ponta para renovação celular profunda, clareamento seguro de manchas, atenuação de cicatrizes e efeito glow duradouro com total conforto.",
    details:
      "A Clínica Dra. Kamilla é referência em tratamentos a laser em Mateus Leme e Itaúna. Nossas plataformas de alta performance atuam com precisão micrométrica nas camadas da pele, estimulando novo colágeno, uniformizando o relevo dérmico, fechando poros e clareando hipercromias, sempre ajustados com rigor médico ao fototipo de cada paciente.",
    topics: [
      "Rejuvenescimento a laser para linhas finas e textura da pele",
      "Clareamento de manchas solares, melanoses e controle do melasma",
      "Suavização de cicatrizes de acne e poros dilatados",
      "Protocolos combinados com drug delivery de antioxidantes",
      "Recuperação rápida e orientações detalhadas de pós-laser",
      "Efeito glow radiante para eventos e revitalização contínua",
    ],
    whatsAppText:
      "Olá, Dra. Kamilla e equipe! Gostaria de agendar uma avaliação para tratamentos a Laser.",
  },
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica (Botox) com Naturalidade",
    category: "Prevenção · Rugas de Expressão · Olhar Descansado · Sem Efeito Congelado",
    icon: Sparkles,
    tag: "Harmonia Facial · Expressividade Preservada · Elegância",
    summary:
      "Aplicação médica estratégica para prevenir e suavizar linhas na testa, pés de galinha e glabela, mantendo sua expressividade natural e descanso no olhar.",
    details:
      "Acreditamos que o melhor procedimento é aquele que ninguém percebe que foi feito, mas todos notam como você está descansada e luminosa. A aplicação de toxina botulínica é planejada milimetricamente para relaxar os músculos hipercinéticos sem paralisar sua mímica ou alterar suas feições genuínas.",
    topics: [
      "Suavização das rugas da testa, entre as sobrancelhas (glabela) e pés de galinha",
      "Efeito olhar descansado e arqueamento sutil e natural das sobrancelhas",
      "Atenuação de linhas do nariz (bunny lines) e rugas no queixo",
      "Tratamento de sorriso gengival e elevação delicada dos cantos da boca",
      "Controle de bruxismo e afinamento suave do terço inferior do rosto",
      "Tratamento de hiperidrose (suor excessivo em axilas e palmas)",
    ],
    whatsAppText:
      "Olá! Gostaria de agendar minha aplicação de Toxina Botulínica (Botox) com a Dra. Kamilla.",
  },
  {
    id: "bioestimuladores-colageno",
    title: "Bioestimuladores de Colágeno (Sculptra & Radiesse)",
    category: "Firmeza Dérmica · Combate à Flacidez · Efeito Lifting Progressivo",
    icon: Layers,
    tag: "Produção Natural · Sustentação Dérmica · Longa Duração",
    summary:
      "Estímulo biológico potente da síntese natural de colágeno pelo seu próprio organismo, restaurando a firmeza, tônus e sustentação da face e corpo.",
    details:
      "Com o passar dos anos, o organismo diminui progressivamente a síntese de colágeno e elastina. Os bioestimuladores de colágeno atuam nas camadas estruturais da derme, despertando os fibroblastos para regenerar a firmeza e densidade tecidual. Resultados elegantes, progressivos e com durabilidade de até 24 meses.",
    topics: [
      "Recuperação da densidade e combate à flacidez facial e cervical",
      "Definição elegante do terço inferior do rosto e contorno de mandíbula",
      "Rejuvenescimento do pescoço e colo (suavização de linhas horizontais)",
      "Bioestímulo corporal (glúteos, abdômen pós-parto, braços e coxas)",
      "Melhora global da textura dérmica com efeito lifting suave",
      "Plano de manutenção preventiva anual da qualidade cutânea",
    ],
    whatsAppText:
      "Olá! Gostaria de uma avaliação para Bioestimuladores de Colágeno com a Dra. Kamilla.",
  },
  {
    id: "preenchimento-acido-hialuronico",
    title: "Preenchimento & Harmonização com Sutileza",
    category: "Lábios Elegantes · Olheiras · Sustentação Malar · Mento & Mandíbula",
    icon: Heart,
    tag: "Ácido Hialurônico Puro · Estrutura · Reversibilidade & Segurança",
    summary:
      "Restauração anatômica de volumes e pontos de luz faciais com ácido hialurônico homologado, valorizando seus traços mais belos com sofisticação.",
    details:
      "Nossa abordagem para preenchimentos prioriza a sofisticação e a anatomia individual. Através de pontos estratégicos de sustentação (MD Codes), descansamos o semblante, definimos lábios hidratados e desenhados, atenuamos olheiras profundas e equilibramos o perfil sem nunca cair em artificialismos ou exageros.",
    topics: [
      "Preenchimento labial com foco em contorno, hidratação e volume delicado",
      "Tratamento de olheiras fundas e olhar cansado",
      "Sustentação do terço médio (maçãs do rosto) com efeito lifting indireto",
      "Definição do mento (queixo) e alinhamento do contorno mandibular",
      "Atenuação do bigode chinês e linhas de marionete",
      "Rinomodelação não cirúrgica para refinamento sutil do perfil nasal",
    ],
    whatsAppText:
      "Olá! Gostaria de agendar uma consulta para Preenchimento com Ácido Hialurônico.",
  },
  {
    id: "dermatologia-clinica-pele",
    title: "Dermatologia Clínica & Gerenciamento da Pele",
    category: "Melasma · Acne Ativa · Rosácea · Manchas · Barreira Cutânea",
    icon: Shield,
    tag: "Diagnóstico Médico · Prescrição Individualizada · Saúde & Bem-Estar",
    summary:
      "Diagnóstico minucioso e tratamento médico para melasma, acne, dermatites, rosácea e acompanhamento preventivo da integridade da pele.",
    details:
      "Antes de qualquer procedimento estético, a saúde biológica da sua pele é o pilar mais importante. Avaliamos causas hormonais, histórico clínico, genética e estilo de vida para prescrever protocolos terapêuticos e rotinas de home care médico sob medida, garantindo resultados reais e sustentáveis.",
    topics: [
      "Consulta médica dermatológica completa para avaliação da saúde cutânea",
      "Protocolo avançado de clareamento e controle do melasma",
      "Tratamento da acne em adolescentes e adultos e prevenção de cicatrizes",
      "Controle de rosácea, vermelhidão crônica e sensibilidade cutânea",
      "Prescrição de home care personalizado com ativos de alta performance",
      "Acompanhamento e checagem periódica de pintas e lesões cutâneas",
    ],
    whatsAppText:
      "Olá! Gostaria de agendar uma consulta dermatológica médica com a Dra. Kamilla.",
  },
  {
    id: "skinbooster-hidratacao",
    title: "Skinbooster & Hidratação Profunda Injetável",
    category: "Glow Imediato · Ácido Hialurônico Fluido · Viço · Elasticidade",
    icon: Sparkles,
    tag: "Hidratação de Dentro para Fora · Viço Radiante · Textura Sedosa",
    summary:
      "Microdepósitos dérmicos de ácido hialurônico fluido que devolvem o viço, elasticidade e frescor nas camadas onde dermocosméticos tópicos não chegam.",
    details:
      "Indicado para quem sente a pele ressecada, opaca, craquelada ou com linhas finas causadas por desidratação. O skinbooster cria um reservatório hídrico dérmico que reflete a luz com beleza e vitalidade, sem alterar o formato do rosto.",
    topics: [
      "Hidratação profunda para face, pescoço, colo e dorso das mãos",
      "Melhora imediata do viço, textura e maciez da pele",
      "Atenuação de ruguinhas finas periorais (código de barras)",
      "Recuperação pós-praia, frio ou períodos de cansaço intenso",
      "Procedimento rápido, seguro e com retorno imediato à rotina",
    ],
    whatsAppText:
      "Olá! Gostaria de agendar uma sessão de Skinbooster / Hidratação Profunda.",
  },
  {
    id: "peelings-quimicos",
    title: "Peelings Químicos Médicos & Renovação Cutânea",
    category: "Uniformização · Afinamento Epidérmico · Controle de Oleosidade",
    icon: Activity,
    tag: "Renovação Celular · Ácidos de Grau Médico · Textura Lisa",
    summary:
      "Combinação de ácidos médicos que aceleram a descamação controlada, clareiam manchas superficiais, fecham poros e revitalizam o brilho facial.",
    details:
      "Utilizamos ácidos médicos rigorosamente selecionados (como retinóico, glicólico, salicílico e mandélico) para promover a esfoliação química segura, estimulando a síntese dérmica e entregando uma pele uniforme, sedosa e revigorada.",
    topics: [
      "Clareamento de manchas solares e hipercromias pós-inflamatórias",
      "Controle eficaz da oleosidade e diminuição de cravos e poros",
      "Afinamento da pele espessa com melhora da absorção de ativos",
      "Protocolos combinados com laser para potencialização dos resultados",
      "Suporte pós-procedimento com orientação personalizada",
    ],
    whatsAppText:
      "Olá! Gostaria de agendar uma avaliação para Peeling Químico Médico.",
  },
  {
    id: "tricologia-capilar",
    title: "Tricologia & Tratamento para Queda Capilar",
    category: "Queda de Cabelo · Eflúvio Telógeno · Alopecia · Fortalecimento dos Fios",
    icon: Users,
    tag: "Saúde do Couro Cabeludo · Estímulo Folicular · Densidade",
    summary:
      "Investigação médica das causas da perda de cabelo e terapias combinadas com mesoterapia de fatores de crescimento e vitaminas diretamente no couro cabeludo.",
    details:
      "Cabelos densos e cheios de vida começam na saúde do bulbo capilar. Investigamos carências nutricionais, alterações hormonais e fatores de estresse, associando tratamentos orais a procedimentos locais que estimulam a oxigenação e o crescimento de novos fios.",
    topics: [
      "Diagnóstico clínico das causas da queda e quebra capilar",
      "Protocolos para eflúvio telógeno pós-parto, pós-infecções ou estresse",
      "Tratamento de alopecia androgenética feminina e masculina",
      "Microinfusão de medicamentos e fatores de crescimento (MMP)",
      "Estímulo da densidade, espessura e ancoragem dos fios",
    ],
    whatsAppText:
      "Olá! Gostaria de uma avaliação médica para tratamento de Queda Capilar.",
  },
];

interface Review {
  name: string;
  rating: number;
  timeAgo: string;
  category: "Atendimento & Recepção" | "Laser & Tecnologia" | "Dra. Kamilla" | "Resultados & Cuidado";
  comment: string;
  verified: boolean;
  highlight?: string;
}

const clientReviews: Review[] = [
  {
    name: "Suelen Andrade",
    rating: 5,
    timeAgo: "3 meses atrás",
    category: "Atendimento & Recepção",
    comment:
      "Gostaria de agradecer à Clínica da Dra. Kamila pelo excelente atendimento. Fui muito bem recebida, com atenção, carinho e profissionalismo em todos os momentos. A equipe é muito educada, atenciosa e transmite confiança. Parabéns pelo ótimo trabalho e pelo cuidado com os pacientes. Recomendo a clínica com toda certeza!",
    verified: true,
    highlight: "Atenção, carinho e profissionalismo em todos os momentos",
  },
  {
    name: "Gisele As",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Atendimento & Recepção",
    comment:
      "Minha experiência na Clinica da dra Kamila foi excelente, desde que cheguei fui muito bem recebida pela equipe da recepção todas sempre muito gentil em especial a Kálica que demonstra muito carinho e atenção a todos, a dra Kamila um amor de ser humano uma profissional incrível, saio de lá bem cuidada e com a certeza que sempre voltarei só gratidão a todos pelo carinho e empatia!!!",
    verified: true,
    highlight: "Em especial a Kálica que demonstra muito carinho e a Dra. Kamilla incrível",
  },
  {
    name: "Day Oliveira",
    rating: 5,
    timeAgo: "2 meses atrás",
    category: "Laser & Tecnologia",
    comment:
      "Desde o atendimento até a sala da Dra kamilla é tudo muito bom , o laser nem se fala, maravilhoso 🤩",
    verified: true,
    highlight: "O laser nem se fala, maravilhoso 🤩",
  },
  {
    name: "Giovane Junior (Local Guide)",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Laser & Tecnologia",
    comment:
      "Dra. Kamila: excelência em laser e atendimento nota 1000. Obrigada por cuidar de mim com tanta dedicação!",
    verified: true,
    highlight: "Excelência em laser e atendimento nota 1000",
  },
  {
    name: "Lorrany Prado",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Resultados & Cuidado",
    comment:
      "Excelente clínica de estética! ✨ Os tratamentos são ótimos, com resultados incríveis e muito cuidado em cada detalhe. A Doutora Kamila é uma gracinha, super atenciosa, delicada e uma profissional maravilhosa.",
    verified: true,
    highlight: "Resultados incríveis e muito cuidado em cada detalhe",
  },
  {
    name: "Geisiane Da Silva Rocha",
    rating: 5,
    timeAgo: "3 semanas atrás",
    category: "Dra. Kamilla",
    comment:
      "Amei ambiente aconchegante, muito agradável, recepcionista muito educada, muito gentil, a Dr Kamila é espetacular, maravilhosa, gentil é excepcional. Amei a consulta obrigada.",
    verified: true,
    highlight: "Ambiente aconchegante, Dra. Kamilla espetacular e gentil",
  },
  {
    name: "João Victor CG",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Atendimento & Recepção",
    comment:
      "Excelente atendimento na clínica, tudo muito organizado e acolhedor. Destaque especial para a Kalica, que foi super atenciosa e prestativa. Parabéns à equipe!",
    verified: true,
    highlight: "Destaque especial para a Kalica, super atenciosa e prestativa",
  },
  {
    name: "Michele Rodrigues",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Atendimento & Recepção",
    comment:
      "Excelente atendimento em todas as etapas! Desde o agendamento até a consulta/procedimento, tudo é feito com muita atenção e cuidado. A equipe é muito profissional e acolhedora. Recomendo! Um destaque especial para a Kalica que foi extremamente atenciosa e profissional.",
    verified: true,
    highlight: "Excelente em todas as etapas, da recepção ao procedimento",
  },
  {
    name: "Maria Eduarda",
    rating: 5,
    timeAgo: "2 meses atrás",
    category: "Resultados & Cuidado",
    comment:
      "Maravilhoso, meninas da recepção super atenciosa e paciente, o atendimento das medicas incrível, lugar leve e agradável de ir. Te passa uma confiança incrível em cada procedimento. Lugar maravilhoso!!",
    verified: true,
    highlight: "Te passa uma confiança incrível em cada procedimento",
  },
  {
    name: "Larissa Gaudêncio Torres",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Atendimento & Recepção",
    comment:
      "A Kálica oferece um atendimento atencioso e profissional. A equipe é dedicada, o ambiente é agradável e o cliente se sente bem acolhido do início ao fim do serviço.",
    verified: true,
    highlight: "Ambiente agradável e cliente se sente bem acolhido do início ao fim",
  },
  {
    name: "Suelen Magalhães",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Dra. Kamilla",
    comment:
      "A equipe da Dra Kamilla é maravilhosa. O trabalho da Dra e o atendimento da Kalica, não tenho dúvidas de ser o melhor. Elas estão sempre prontas para me atender com agilidade e muito carinho!!! Parabéns a clínica!!! Obrigada por tudo!!! 🤝❤️",
    verified: true,
    highlight: "O trabalho da Dra e o atendimento da Kalica são os melhores",
  },
  {
    name: "Loren Prado (Local Guide)",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Resultados & Cuidado",
    comment:
      "Sem dúvidas perfeita! Indico de olhos fechados… excelente atendimento das meninas desde a chegada até no atendimento da Dra. Kamilla",
    verified: true,
    highlight: "Indico de olhos fechados, da chegada ao atendimento da Dra.",
  },
  {
    name: "Letícia Ferreira",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Resultados & Cuidado",
    comment:
      "A melhor clínica é o melhor atendimento. As meninas são perfeitas o trabalho é de extrema excelência.",
    verified: true,
    highlight: "A melhor clínica, trabalho de extrema excelência",
  },
  {
    name: "Maia Soares",
    rating: 5,
    timeAgo: "6 meses atrás",
    category: "Atendimento & Recepção",
    comment:
      "Amo tudo..., desde a recepção excepcional da Kalica ao carinho e dedicação da Dra. Kamila.",
    verified: true,
    highlight: "Recepção excepcional da Kalica e carinho da Dra. Kamilla",
  },
  {
    name: "Edilene Vieira",
    rating: 5,
    timeAgo: "3 meses atrás",
    category: "Dra. Kamilla",
    comment:
      "Excelente já sou paciente a muito tempo super indico !👏🏻👏🏻",
    verified: true,
    highlight: "Já sou paciente há muito tempo e super indico!",
  },
  {
    name: "Letícia Paiva da Silva",
    rating: 5,
    timeAgo: "2 meses atrás",
    category: "Dra. Kamilla",
    comment:
      "Gostaria de agradecer pelo excelente atendimento. Fui muito bem atendida. Parabéns pelo profissionalismo!",
    verified: true,
    highlight: "Parabéns pelo profissionalismo e atendimento!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta com a Dra. Kamilla?",
    answer:
      "A primeira consulta é uma conversa detalhada e acolhedora, com escuta atenta dos seus desejos e queixas. A Dra. Kamilla realiza um exame clínico minucioso da sua pele, mapeando pontos de atenção (como manchas, linhas, textura e flacidez) e montando um plano de tratamento personalizado e por etapas, respeitando seu tempo, seu orçamento e priorizando a máxima naturalidade.",
  },
  {
    question: "Quais são as tecnologias a laser disponíveis e para que servem?",
    answer:
      "A clínica dispõe de plataformas modernas a laser indicadas para renovação cutânea, clareamento de manchas e melasma, tratamento de cicatrizes de acne, fechamento de poros e estímulo de colágeno. O procedimento é rápido, seguro para diferentes tons de pele e realizado com protocolos que priorizam o conforto do paciente.",
  },
  {
    question: "Os procedimentos injetáveis (Botox e Preenchimento) deixam o rosto artificial?",
    answer:
      "De forma alguma! A filosofia da Dra. Kamilla é valorizar a beleza que você já tem. Os injetáveis são dosados com precisão anatômica para suavizar rugas e apoiar as estruturas do rosto sem congelar expressões ou gerar volumes exagerados. O objetivo é que você receba elogios de que está radiante e descansada, sem que ninguém saiba exatamente o que foi feito.",
  },
  {
    question: "A clínica atende pacientes de Itaúna e cidades vizinhas?",
    answer:
      "Sim! Nossa clínica está localizada no Centro de Mateus Leme (R. Pres. Tancredo Neves, 294), com acesso facílimo e estacionamento prático, recebendo frequentemente pacientes de Itaúna, Juatuba, Betim, Pará de Minas e toda a região metropolitana e Centro-Oeste mineiro.",
  },
  {
    question: "Como funciona o agendamento e o suporte com a recepção?",
    answer:
      "Nosso atendimento é reconhecido como nota 1000 pelos pacientes! Pelo WhatsApp oficial (31) 99717-2916, a Kálica e nossa equipe de recepção tiram todas as suas dúvidas com carinho, esclarecem os procedimentos e organizam o melhor horário para a sua agenda.",
  },
  {
    question: "Quais são as formas de pagamento para os procedimentos e protocolos?",
    answer:
      "Facilitamos o seu investimento em autocuidado com opções de pagamento via Pix, cartões de crédito com parcelamento facilitado em planos de tratamento combinados, garantindo transparência e conforto em todas as etapas.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
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
    "Atendimento & Recepção",
    "Laser & Tecnologia",
    "Dra. Kamilla",
    "Resultados & Cuidado",
  ];

  const filteredReviews =
    selectedReviewCategory === "Todas"
      ? clientReviews
      : clientReviews.filter((r) => r.category === selectedReviewCategory);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#fdfbf9] text-[#1e1815] selection:bg-[#2a2220] selection:text-[#faece4]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (LUXURY ESPRESSO & ROSE GOLD)       */}
        {/* ======================================================== */}
        <div className="border-b border-[#2a2220] bg-[#161110] py-2 text-xs text-[#ede4dc]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c88d6f] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#eab188]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#faece4] font-semibold tracking-wide">
                CLÍNICA DRA. KAMILLA · MATEUS LEME & ITAÚNA - MG · CRM-MG 57814 🩺
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#ede4dc]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#eab188]"
              >
                <Star size={12} className="fill-[#eab188] text-[#eab188]" />
                <span className="font-bold text-[#faece4]">5,0 ★</span> (611 avaliações no Google · Mateus Leme - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#352b28] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Kamilla e equipe! Gostaria de tirar uma dúvida pelo WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#faece4] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#c88d6f]" />
                {PHONE_DISPLAY}
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
              ? "border-b border-[#ede4dc] bg-white/95 py-2 shadow-sm backdrop-blur-md"
              : "border-b border-[#ede4dc]/80 bg-[#fdfbf9]/95 py-3 sm:py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Brand Official Logo */}
            <a
              href="#"
              className="flex shrink-0 items-center transition-transform hover:scale-102"
              aria-label="Clínica Dra. Kamilla - Início"
            >
              <Image
                src={LOGO_HORIZONTAL_SRC}
                alt="Clínica Dra. Kamilla — Dermatologia, Laser & Estética Médica"
                width={310}
                height={88}
                className={`w-auto object-contain drop-shadow-xs transition-all duration-300 ${
                  scrolled
                    ? "h-[46px] sm:h-[52px] md:h-[58px]"
                    : "h-[56px] sm:h-[64px] md:h-[72px]"
                }`}
                priority
                unoptimized
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 lg:gap-6 xl:gap-7 lg:flex">
              <a href="#procedimentos" className="nav-link">
                Procedimentos & Laser
              </a>
              <a href="#sobre" className="nav-link">
                Dra. Kamilla
              </a>
              <a href="#equipe" className="nav-link">
                A Clínica & Equipe
              </a>
              <a href="#diferenciais" className="nav-link">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link">
                Avaliações (611 ★)
              </a>
              <a href="#sede" className="nav-link">
                Localização
              </a>
              <a href="#duvidas" className="nav-link">
                Dúvidas
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA */}
            <div className="flex shrink-0 items-center gap-2.5">
              <GlowingButton
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com a Dra. Kamilla.")}
                target="_blank"
                variant="rosegold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0 shadow-md"
              >
                <WhatsAppIcon size={15} className="text-white" />
                <span className="hidden xl:inline">Agendar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#ede4dc] bg-white text-[#1e1815] transition-colors hover:border-[#b87755] hover:text-[#161110] lg:hidden cursor-pointer shrink-0"
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
                className="border-b border-[#ede4dc] bg-white px-5 py-6 lg:hidden shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center py-2 pb-4 border-b border-[#ede4dc]">
                    <Image
                      src={LOGO_SRC}
                      alt="Clínica Dra. Kamilla"
                      width={260}
                      height={70}
                      className="h-[52px] sm:h-[60px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <a
                    href="#procedimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1e1815] uppercase transition-colors hover:text-[#b87755]"
                  >
                    <span>Procedimentos & Laser</span>
                    <ArrowRight size={14} className="text-[#b87755]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1e1815] uppercase transition-colors hover:text-[#b87755]"
                  >
                    <span>Sobre a Dra. Kamilla (CRM-MG 57814)</span>
                    <ArrowRight size={14} className="text-[#b87755]" />
                  </a>
                  <a
                    href="#equipe"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1e1815] uppercase transition-colors hover:text-[#b87755]"
                  >
                    <span>A Clínica & Nossa Equipe (Kálica e Recepção)</span>
                    <ArrowRight size={14} className="text-[#b87755]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1e1815] uppercase transition-colors hover:text-[#b87755]"
                  >
                    <span>Por Que Escolher Nossa Clínica</span>
                    <ArrowRight size={14} className="text-[#b87755]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1e1815] uppercase transition-colors hover:text-[#b87755]"
                  >
                    <span>Avaliações no Google (611 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#b87755]" />
                  </a>
                  <a
                    href="#sede"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1e1815] uppercase transition-colors hover:text-[#b87755]"
                  >
                    <span>Localização em Mateus Leme - MG</span>
                    <ArrowRight size={14} className="text-[#b87755]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1e1815] uppercase transition-colors hover:text-[#b87755]"
                  >
                    <span>Perguntas Frequentes</span>
                    <ArrowRight size={14} className="text-[#b87755]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Kamilla! Gostaria de conversar com você pelo WhatsApp.")}
                      target="_blank"
                      variant="rosegold"
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
        {/* DOBRA 1: HERO SECTION COM FOTOGRAFIA DA DRA. KAMILLA     */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fdfbf9]">
          {/* Subtle Metallic Rose Gold Glow Radial */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-radial from-[#faece4]/60 via-[#c88d6f]/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#c88d6f]/15 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ede4dc] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#1e1815] shadow-2xs">
                    <span className="size-1.5 rounded-full bg-[#b87755] animate-pulse" />
                    CLÍNICA DRA. KAMILLA · CRM-MG 57814 · 5,0 ★ NO GOOGLE
                  </span>
                </div>

                {/* H1 Headline */}
                <h1 className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#1e1815] sm:text-5xl lg:text-[3.25rem]">
                  Realce sua beleza com a segurança da medicina: tratamentos a laser, dermatologia e estética com{" "}
                  <span className="bg-gradient-to-r from-[#944e31] via-[#c88d6f] to-[#eab188] bg-clip-text text-transparent">
                    naturalidade e acolhimento.
                  </span>
                </h1>

                {/* Subtitle / Value Proposition */}
                <p className="mt-6 text-base leading-relaxed text-[#665a54] sm:text-lg lg:max-w-xl">
                  Sob a liderança da <strong className="font-semibold text-[#1e1815]">{DOCTOR_NAME}</strong> (<strong className="text-[#944e31]">{DOCTOR_CRM}</strong>), unimos tecnologias avançadas a laser, injetáveis de alta precisão e uma equipe atenciosa e humana, para que você conquiste uma pele saudável e radiante com elegância que respeita quem você é.
                </p>

                {/* Quick Highlights Pills */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4dc] bg-white px-3 py-1 text-xs font-semibold text-[#1e1815] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b87755]" />
                    Tecnologias a Laser de Alta Performance
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4dc] bg-white px-3 py-1 text-xs font-semibold text-[#1e1815] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b87755]" />
                    Botox & Harmonização com Naturalidade
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4dc] bg-white px-3 py-1 text-xs font-semibold text-[#1e1815] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b87755]" />
                    Bioestimuladores de Colágeno (Firmeza)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4dc] bg-white px-3 py-1 text-xs font-semibold text-[#1e1815] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b87755]" />
                    Atendimento Humanizado com Kálica e Equipe
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com a Dra. Kamilla.")}
                    target="_blank"
                    variant="rosegold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Agendar Consulta no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#procedimentos"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Procedimentos</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </div>

                {/* Social Proof Strip underneath CTAs */}
                <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-[#ede4dc] pt-6 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#eab188]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#1e1815]">
                      5,0 no Google
                    </span>
                    <span className="text-xs text-[#665a54]">
                      (611 avaliações 5 estrelas verificadas · Mateus Leme e região)
                    </span>
                  </div>

                  <span className="hidden h-3.5 w-px bg-[#ede4dc] sm:inline-block" />

                  <div className="flex items-center gap-2 text-xs text-[#665a54]">
                    <Shield size={14} className="text-[#b87755]" />
                    <span>R. Pres. Tancredo Neves, 294 - Centro, Mateus Leme - MG</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Official Portrait of Dra. Kamilla */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  {/* Outer Luxury Metallic Border Frame */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#b87755]/40 bg-white p-2 shadow-2xl shadow-[#161110]/15">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f8f3ee] to-[#ede4dc]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Kamilla — Dermatologia, Laser & Estética Médica"
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-102"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette for High-Contrast Typography Badge */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#161110]/95 via-[#161110]/60 to-transparent" />

                      {/* Overlay Identification Badge */}
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#c88d6f]/45 bg-[#161110]/90 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-cinzel text-base font-bold text-white tracking-wide">
                              {DOCTOR_NAME}
                            </p>
                            <p className="text-[11px] font-semibold text-[#faece4] uppercase tracking-wider">
                              {DOCTOR_CRM} · {DOCTOR_ROLE}
                            </p>
                            <p className="text-[10px] text-[#ede4dc] mt-0.5">
                              Mateus Leme & Itaúna - MG · Atendimento Exclusivo
                            </p>
                          </div>
                          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-[#c88d6f]/45 bg-[#2a2220] p-1.5 shadow-md">
                            <Image
                              src={EMBLEM_SRC}
                              alt="Monograma K Clínica Dra. Kamilla"
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

                  {/* Floating Badge Top-Right */}
                  <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-lg border border-[#c88d6f]/50 bg-[#161110] px-3.5 py-2 shadow-lg text-white">
                    <p className="text-[9px] font-bold tracking-widest text-[#faece4] uppercase">
                      MATEUS LEME & ITAÚNA · MG
                    </p>
                    <p className="text-[11px] font-bold text-white">
                      R. Pres. Tancredo Neves, 294
                    </p>
                  </div>
                </div>

                {/* Google 5,0 Verified Review Card */}
                <div className="mt-4 mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none rounded-2xl border border-[#b87755]/35 bg-white p-4 shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-full bg-[#fdfbf9] border border-[#ede4dc]">
                        <GoogleIcon size={16} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[#eab188]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-current" />
                          ))}
                        </div>
                        <p className="text-[11px] font-bold text-[#1e1815]">
                          5,0 Estrelas no Google (+610 avaliações)
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-[#b87755]/30 bg-[#faece4] px-2.5 py-0.5 text-[10px] font-bold text-[#944e31] uppercase tracking-wider">
                      Reputação Máxima
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs italic text-[#665a54] line-clamp-2">
                    &ldquo;Desde o atendimento até a sala da Dra. Kamilla é tudo muito bom, o laser nem se fala, maravilhoso!&rdquo;
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-[#1e1815]">
                    — Day Oliveira (Paciente Verificada)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* STATS & AUTHORITY STRIP                                  */}
        {/* ======================================================== */}
        <section className="border-y border-[#ede4dc] bg-[#f8f3ee] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#944e31]">
                  611+
                </span>
                <span className="mt-1 text-xs font-semibold text-[#1e1815] uppercase tracking-wider">
                  Avaliações 5,0 ★ no Google
                </span>
                <span className="mt-0.5 text-[11px] text-[#665a54]">
                  Satisfação e carinho unânimes
                </span>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#944e31]">
                  CRM-MG
                </span>
                <span className="mt-1 text-xs font-semibold text-[#1e1815] uppercase tracking-wider">
                  57814 Ativo & Regular
                </span>
                <span className="mt-0.5 text-[11px] text-[#665a54]">
                  Medicina ética, segura e responsável
                </span>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#944e31]">
                  Laser
                </span>
                <span className="mt-1 text-xs font-semibold text-[#1e1815] uppercase tracking-wider">
                  Tecnologia de Alta Performance
                </span>
                <span className="mt-0.5 text-[11px] text-[#665a54]">
                  Resultados visíveis com conforto
                </span>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#944e31]">
                  100%
                </span>
                <span className="mt-1 text-xs font-semibold text-[#1e1815] uppercase tracking-wider">
                  Acolhimento & Afeto
                </span>
                <span className="mt-0.5 text-[11px] text-[#665a54]">
                  Kálica e equipe dedicada ao seu bem-estar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 2: ESPECIALIDADES & PROCEDIMENTOS MÉDICOS          */}
        {/* ======================================================== */}
        <section id="procedimentos" className="py-20 sm:py-26 bg-[#fdfbf9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="eyebrow mx-auto justify-center mb-3">
                Cuidado Integral & Tecnologia
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1815]">
                Procedimentos Médicos & Tecnologias Avançadas
              </h2>
              <p className="mt-4 text-base text-[#665a54]">
                Cada protocolo é desenhado sob medida para valorizar sua beleza com naturalidade, segurança e eficácia comprovada.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {specialties.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#ede4dc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#b87755]/60 hover:shadow-xl hover:shadow-[#161110]/5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#faece4] text-[#944e31] transition-colors group-hover:bg-[#944e31] group-hover:text-white">
                          <IconComponent size={22} />
                        </div>
                        <span className="text-[10px] font-bold text-[#b87755] uppercase tracking-wider">
                          {item.tag.split("·")[0]}
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-lg font-bold text-[#1e1815] group-hover:text-[#944e31] transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#b87755]">
                        {item.category}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-[#665a54]">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#ede4dc]">
                      <button
                        type="button"
                        onClick={() => setSelectedSpecialty(item)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#944e31] transition-colors hover:text-[#161110] cursor-pointer"
                      >
                        <span>Ver detalhes do protocolo</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Banner for WhatsApp booking */}
            <div className="mt-14 rounded-2xl border border-[#c88d6f]/40 bg-gradient-to-r from-[#161110] via-[#201918] to-[#2a2220] p-8 text-white shadow-xl sm:p-10">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="text-center md:text-left">
                  <span className="text-[11px] font-bold tracking-widest text-[#faece4] uppercase">
                    Dúvida sobre o procedimento ideal para sua pele?
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-white">
                    Fale diretamente com nossa recepção e agende sua avaliação
                  </h3>
                  <p className="mt-2 text-sm text-[#ede4dc] max-w-xl">
                    A Kálica e nossa equipe tiram suas dúvidas sobre valores, formas de pagamento, preparação e disponibilidade de horários.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Kálica! Gostaria de entender qual o procedimento ideal para a minha pele.")}
                    target="_blank"
                    variant="rosegold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com a Kálica no WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 3: SOBRE A DRA. KAMILLA                            */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#ede4dc] bg-[#f8f3ee]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Dra. Kamilla's Photo with Badge */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#b87755]/35 bg-white p-2.5 shadow-2xl">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f8f3ee] to-[#ede4dc]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Kamilla em seu consultório"
                        fill
                        className="object-cover object-center"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                      />
                    </div>
                  </div>

                  {/* Overlapping Badge */}
                  <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-5 rounded-xl border border-[#c88d6f]/40 bg-[#161110] p-4 text-white shadow-xl max-w-[260px]">
                    <div className="flex items-center gap-2">
                      <Heart size={16} className="text-[#faece4]" />
                      <p className="text-xs font-bold text-[#faece4]">
                        Medicina com Afeto
                      </p>
                    </div>
                    <p className="mt-1 text-[11px] text-[#ede4dc] leading-relaxed">
                      &ldquo;Mãe de duas princesas, médica dedicada a transformar vidas através da autoestima.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Philosophy */}
              <div className="lg:col-span-7">
                <span className="eyebrow mb-3">
                  Trajetória & Filosofia Médica
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1815]">
                  Conheça a <span className="rosegold-gradient-text">Dra. Kamilla</span>
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#944e31] uppercase tracking-wider">
                  Médica · CRM-MG 57814 · Mateus Leme e Itaúna - MG
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#665a54] sm:text-base">
                  <p>
                    A <strong className="text-[#1e1815]">Dra. Kamilla (CRM-MG 57814)</strong> construiu sua trajetória médica guiada por uma certeza inegociável: a verdadeira estética não cria padrões artificiais, mas resgata e ilumina a beleza única de cada paciente.
                  </p>
                  <p>
                    Com ampla dedicação à dermatologia, estética médica e tecnologias a laser de última geração, a Dra. Kamilla combina o rigor da ciência médica com uma sensibilidade feminina ímpar. Mãe de duas princesas, ela compreende a importância do autocuidado na rotina dinâmica de cada mulher e homem que busca em sua clínica um refúgio de bem-estar.
                  </p>
                  <p>
                    Na <strong className="text-[#1e1815]">Clínica Dra. Kamilla</strong>, cada paciente é acolhido com atenção genuína, desde o primeiro contato até o pós-procedimento. O resultado é comprovado pelas mais de <strong className="text-[#944e31]">610 avaliações com nota máxima (5,0 ★) no Google</strong>, consolidando a clínica como o principal polo de excelência médica e laser da região.
                  </p>
                </div>

                {/* 3 Pillars */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-[#ede4dc] bg-white p-4 shadow-2xs">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#faece4] text-[#944e31] mb-2">
                      <Shield size={16} />
                    </div>
                    <h4 className="text-xs font-bold text-[#1e1815]">
                      Segurança Médica
                    </h4>
                    <p className="mt-1 text-[11px] text-[#665a54]">
                      Produtos homologados pela Anvisa e protocolos baseados em evidência científica.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ede4dc] bg-white p-4 shadow-2xs">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#faece4] text-[#944e31] mb-2">
                      <Sparkles size={16} />
                    </div>
                    <h4 className="text-xs font-bold text-[#1e1815]">
                      Naturalidade
                    </h4>
                    <p className="mt-1 text-[11px] text-[#665a54]">
                      Resultados elegantes, sem exageros e respeitando suas feições originais.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ede4dc] bg-white p-4 shadow-2xs">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#faece4] text-[#944e31] mb-2">
                      <Heart size={16} />
                    </div>
                    <h4 className="text-xs font-bold text-[#1e1815]">
                      Acolhimento Real
                    </h4>
                    <p className="mt-1 text-[11px] text-[#665a54]">
                      Escuta sem pressa, carinho no atendimento e proximidade em cada etapa.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Kamilla! Gostaria de agendar uma consulta com você.")}
                    target="_blank"
                    variant="rosegold"
                    size="md"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar Consulta com a Dra. Kamilla</span>
                  </GlowingButton>
                  <GlowingButton
                    href={INSTAGRAM_URL}
                    target="_blank"
                    variant="outline"
                    size="md"
                  >
                    <InstagramIcon size={16} />
                    <span>Acompanhar no Instagram @clinicadrakamilla</span>
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 4: A CLÍNICA & NOSSA EQUIPE (COM FOTO DA EQUIPE)   */}
        {/* ======================================================== */}
        <section id="equipe" className="py-20 sm:py-26 bg-[#fdfbf9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Text & Tribute to the Team / Kálica */}
              <div className="lg:col-span-6">
                <span className="eyebrow mb-3">
                  Atendimento de Excelência
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1815]">
                  Um Ambiente Acolhedor & Uma Equipe Apaixonada
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#665a54]">
                  Mais do que uma clínica, criamos um espaço pensado nos mínimos detalhes para que você se sinta em casa. Desde a recepção até a sala de procedimentos, nossa prioridade é proporcionar uma experiência leve, acolhedora e memorável.
                </p>

                {/* Destaque Kálica & Recepção */}
                <div className="mt-6 rounded-2xl border border-[#b87755]/30 bg-[#faece4]/50 p-5 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#944e31] text-white font-bold">
                      <Smile size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1e1815]">
                        O Famoso Atendimento da Kálica & Recepção
                      </h4>
                      <p className="text-xs text-[#944e31] font-semibold">
                        Mencionada e elogiada em dezenas de avaliações no Google!
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#665a54] italic">
                    &ldquo;Minha experiência na clínica foi excelente, desde que cheguei fui muito bem recebida pela equipe da recepção, todas sempre muito gentis, em especial a Kálica que demonstra muito carinho e atenção a todos!&rdquo;
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#b87755] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#665a54]">
                      <strong className="text-[#1e1815]">Agilidade no WhatsApp:</strong> respostas rápidas, esclarecimento de dúvidas e facilidade para encontrar o melhor horário para sua rotina.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#b87755] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#665a54]">
                      <strong className="text-[#1e1815]">Ambiente Aconchegante:</strong> consultório elegante, climatizado, perfumado e com cafézinho acolhedor no Centro de Mateus Leme.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#b87755] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#665a54]">
                      <strong className="text-[#1e1815]">Pontualidade & Conforto:</strong> respeito rigoroso ao seu tempo e acompanhamento atencioso em todas as etapas da sua visita.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Kálica! Gostaria de agendar um horário com a Dra. Kamilla.")}
                    target="_blank"
                    variant="rosegold"
                    size="md"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com a Equipe no WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Right Column: Equipe Photo */}
              <div className="relative lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#b87755]/35 bg-white p-2.5 shadow-2xl">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xl bg-[#f8f3ee]">
                    <Image
                      src={FOTO_EQUIPE_SRC}
                      alt="Dra. Kamilla com sua equipe na recepção da clínica"
                      fill
                      className="object-cover object-center"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                  </div>
                </div>

                {/* Bottom Photo Caption */}
                <div className="mt-3 text-center sm:text-left">
                  <p className="text-xs font-semibold text-[#1e1815]">
                    Recepção oficial da Clínica Dra. Kamilla — R. Pres. Tancredo Neves, 294, Centro, Mateus Leme - MG.
                  </p>
                  <p className="text-[11px] text-[#665a54]">
                    Equipe pronta para receber você com carinho, atenção e profissionalismo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 5: DIFERENCIAIS DA CLÍNICA (OBSIDIAN & ROSE GOLD)  */}
        {/* ======================================================== */}
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#161110] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="eyebrow-dark mx-auto justify-center mb-3">
                Por Que Escolher Nossa Clínica
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Os Pilares que Consagram Nossos Resultados
              </h2>
              <p className="mt-4 text-base text-[#ede4dc]">
                O equilíbrio perfeito entre medicina científica rigorosa, tecnologia a laser de ponta e uma sensibilidade humana única.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#c88d6f]/25 bg-[#201918] p-7 transition-all duration-300 hover:border-[#c88d6f]/60 hover:bg-[#2a2220]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#c88d6f]/20 text-[#faece4] mb-5">
                  <Zap size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#faece4]">
                  Tecnologia a Laser de Ponta
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#ede4dc]">
                  Equipamentos modernos e consagrados que tratam manchas, poros, cicatrizes e estímulo de colágeno com resultados rápidos e recuperação confortável.
                </p>
              </div>

              <div className="rounded-2xl border border-[#c88d6f]/25 bg-[#201918] p-7 transition-all duration-300 hover:border-[#c88d6f]/60 hover:bg-[#2a2220]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#c88d6f]/20 text-[#faece4] mb-5">
                  <Sparkles size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#faece4]">
                  Naturalidade em Primeiro Lugar
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#ede4dc]">
                  Nosso compromisso é realçar sua essência sem exageros. Você com aspecto descansado, jovem e luminoso, sem perder suas expressões naturais.
                </p>
              </div>

              <div className="rounded-2xl border border-[#c88d6f]/25 bg-[#201918] p-7 transition-all duration-300 hover:border-[#c88d6f]/60 hover:bg-[#2a2220]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#c88d6f]/20 text-[#faece4] mb-5">
                  <Shield size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#faece4]">
                  Segurança Médica & CRM Ativo
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#ede4dc]">
                  Todos os procedimentos são conduzidos pela Dra. Kamilla (CRM-MG 57814), utilizando apenas produtos e insumos premium com liberação total da Anvisa.
                </p>
              </div>

              <div className="rounded-2xl border border-[#c88d6f]/25 bg-[#201918] p-7 transition-all duration-300 hover:border-[#c88d6f]/60 hover:bg-[#2a2220]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#c88d6f]/20 text-[#faece4] mb-5">
                  <Heart size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#faece4]">
                  Atendimento Afetuoso & Humano
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#ede4dc]">
                  Aqui você não é um número. Você é recebido com carinho genuíno por toda a equipe (com destaque para a Kálica) do agendamento até a alta.
                </p>
              </div>

              <div className="rounded-2xl border border-[#c88d6f]/25 bg-[#201918] p-7 transition-all duration-300 hover:border-[#c88d6f]/60 hover:bg-[#2a2220]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#c88d6f]/20 text-[#faece4] mb-5">
                  <Activity size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#faece4]">
                  Plano de Tratamento Personalizado
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#ede4dc]">
                  Não acreditamos em receitas prontas. Cada pele possui uma história e recebe um cronograma de tratamentos ajustado às suas reais necessidades.
                </p>
              </div>

              <div className="rounded-2xl border border-[#c88d6f]/25 bg-[#201918] p-7 transition-all duration-300 hover:border-[#c88d6f]/60 hover:bg-[#2a2220]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#c88d6f]/20 text-[#faece4] mb-5">
                  <Star size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#faece4]">
                  611 Avaliações 5,0 ★ no Google
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#ede4dc]">
                  A maior e mais elogiada aprovação dos pacientes em Mateus Leme e Itaúna. Quem vem pela primeira vez, sempre volta e indica de olhos fechados.
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na Clínica Dra. Kamilla.")}
                target="_blank"
                variant="rosegold"
                size="lg"
              >
                <WhatsAppIcon size={18} />
                <span>Agendar Avaliação no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 6: DEPOIMENTOS & PROVA SOCIAL (GOOGLE REVIEWS 5,0) */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#fdfbf9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="eyebrow mx-auto justify-center mb-3">
                Depoimentos Verificados
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1815]">
                O Que Nossos Pacientes Dizem
              </h2>
              <p className="mt-4 text-base text-[#665a54]">
                Mais de 610 avaliações com nota máxima (5,0 ★) no Google Maps. Transparência, carinho e resultados que transformam a autoestima.
              </p>

              {/* Category Filter Pills */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {reviewCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedReviewCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      selectedReviewCategory === cat
                        ? "bg-[#944e31] text-white shadow-xs"
                        : "border border-[#ede4dc] bg-white text-[#665a54] hover:border-[#b87755] hover:text-[#1e1815]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredReviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-[#ede4dc] bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#b87755]/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[#eab188]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-semibold text-[#b87755] bg-[#faece4] px-2.5 py-0.5 rounded-full">
                        {rev.timeAgo}
                      </span>
                    </div>

                    {rev.highlight && (
                      <p className="mt-3 text-xs font-bold text-[#944e31]">
                        &ldquo;{rev.highlight}&rdquo;
                      </p>
                    )}

                    <p className="mt-2 text-xs leading-relaxed text-[#665a54]">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#ede4dc] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#1e1815]">
                        {rev.name}
                      </p>
                      <p className="text-[10px] text-[#b87755] font-semibold">
                        {rev.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
                      <CheckCircle2 size={12} />
                      <span>Verificado</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#ede4dc] bg-white px-5 py-3 text-xs font-bold text-[#1e1815] shadow-xs transition-colors hover:border-[#b87755] hover:text-[#944e31]"
              >
                <GoogleIcon size={16} />
                <span>Ver todas as 611 avaliações no Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 7: NOSSA SEDE & LOCALIZAÇÃO EM MATEUS LEME         */}
        {/* ======================================================== */}
        <section id="sede" className="py-20 sm:py-26 border-t border-[#ede4dc] bg-[#f8f3ee]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Location Details */}
              <div className="lg:col-span-6">
                <span className="eyebrow mb-3">
                  Localização & Estrutura
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1815]">
                  Onde Estamos
                </h2>
                <p className="mt-4 text-base text-[#665a54]">
                  Localização privilegiada no Centro de Mateus Leme, com fácil acesso para pacientes de Itaúna, Juatuba, Betim, Pará de Minas e cidades vizinhas.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ede4dc] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#faece4] text-[#944e31]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1e1815] uppercase tracking-wider">
                        Endereço da Clínica
                      </h4>
                      <p className="mt-1 text-sm font-semibold text-[#1e1815]">
                        {ADDRESS_DISPLAY}
                      </p>
                      <p className="mt-0.5 text-xs text-[#665a54]">
                        Ponto central de fácil localização, próximo aos principais comércios e com facilidade para estacionar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ede4dc] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#faece4] text-[#944e31]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1e1815] uppercase tracking-wider">
                        Horário de Atendimento
                      </h4>
                      <p className="mt-1 text-sm font-semibold text-[#1e1815]">
                        Segunda a Sexta · A partir das 08:00
                      </p>
                      <p className="mt-0.5 text-xs text-[#665a54]">
                        Consultas e procedimentos com hora marcada para evitar esperas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-[#ede4dc] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#faece4] text-[#944e31]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1e1815] uppercase tracking-wider">
                        Canais de Contato & Agendamento
                      </h4>
                      <p className="mt-1 text-sm font-semibold text-[#1e1815]">
                        WhatsApp: {PHONE_DISPLAY}
                      </p>
                      <p className="mt-0.5 text-xs text-[#665a54]">
                        Instagram: @clinicadrakamilla · Agendamento rápido e descomplicado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <GlowingButton
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    variant="outline"
                    size="md"
                  >
                    <MapPin size={16} />
                    <span>Como Chegar (Google Maps)</span>
                  </GlowingButton>

                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar meu horário na clínica.")}
                    target="_blank"
                    variant="rosegold"
                    size="md"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar pelo WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Right Column: Visual Presentation Card of the Clinic Reception */}
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#b87755]/30 bg-white p-3 shadow-xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f8f3ee]">
                    <Image
                      src={FOTO_EQUIPE_SRC}
                      alt="Recepção e equipe da Clínica Dra. Kamilla em Mateus Leme"
                      fill
                      className="object-cover object-center"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161110]/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 text-white">
                      <p className="text-xs font-bold text-[#faece4] uppercase tracking-wider">
                        Sede Mateus Leme - MG
                      </p>
                      <p className="text-sm font-semibold text-white">
                        R. Pres. Tancredo Neves, 294 - Centro
                      </p>
                      <p className="text-[11px] text-[#ede4dc]">
                        Atendimento acolhedor para pacientes de Mateus Leme, Itaúna e região
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cities Badge Bar */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center">
                  <span className="rounded-lg border border-[#ede4dc] bg-white px-3 py-1 text-[11px] font-semibold text-[#665a54]">
                    📍 Mateus Leme
                  </span>
                  <span className="rounded-lg border border-[#ede4dc] bg-white px-3 py-1 text-[11px] font-semibold text-[#665a54]">
                    📍 Itaúna
                  </span>
                  <span className="rounded-lg border border-[#ede4dc] bg-white px-3 py-1 text-[11px] font-semibold text-[#665a54]">
                    📍 Juatuba
                  </span>
                  <span className="rounded-lg border border-[#ede4dc] bg-white px-3 py-1 text-[11px] font-semibold text-[#665a54]">
                    📍 Betim
                  </span>
                  <span className="rounded-lg border border-[#ede4dc] bg-white px-3 py-1 text-[11px] font-semibold text-[#665a54]">
                    📍 Pará de Minas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEÇÃO 8: PERGUNTAS FREQUENTES (FAQ)                      */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#fdfbf9]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow mx-auto justify-center mb-3">
                Esclareça Suas Dúvidas
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1815]">
                Perguntas Frequentes
              </h2>
              <p className="mt-4 text-base text-[#665a54]">
                Tudo o que você precisa saber antes de agendar sua visita à Clínica Dra. Kamilla.
              </p>
            </div>

            <div className="mt-12 space-y-3.5">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#ede4dc] bg-white transition-all shadow-2xs hover:border-[#b87755]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-base sm:text-lg font-bold text-[#1e1815]">
                        {faq.question}
                      </span>
                      <span className="ml-4 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#faece4] text-[#944e31]">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="border-t border-[#ede4dc] bg-[#f8f3ee]/50 p-5 text-sm leading-relaxed text-[#665a54]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center rounded-2xl border border-[#ede4dc] bg-white p-6 shadow-xs">
              <p className="text-sm font-semibold text-[#1e1815]">
                Tem alguma dúvida específica que não encontrou aqui?
              </p>
              <p className="mt-1 text-xs text-[#665a54]">
                Nossa equipe está à disposição no WhatsApp para responder prontamente.
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre os tratamentos da clínica.")}
                  target="_blank"
                  variant="rosegold"
                  size="sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER & CTA FINAL (LUXURY ESPRESSO & ROSE GOLD)          */}
        {/* ======================================================== */}
        <footer className="border-t border-[#2a2220] bg-[#161110] text-white pt-16 pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 pb-12 border-b border-[#2a2220]">
              {/* Col 1: Brand Logo & Bio */}
              <div className="lg:col-span-5">
                <Image
                  src={LOGO_SRC}
                  alt="Clínica Dra. Kamilla"
                  width={280}
                  height={80}
                  className="h-14 w-auto object-contain brightness-105"
                  unoptimized
                />
                <p className="mt-4 text-xs leading-relaxed text-[#ede4dc] max-w-md">
                  Clínica Dra. Kamilla (CRM-MG 57814) — Medicina com afeto, tecnologia a laser de alta performance e procedimentos estéticos com naturalidade e sofisticação em Mateus Leme e Itaúna - MG.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c88d6f]/40 bg-[#201918] text-[#faece4] transition-colors hover:border-[#faece4] hover:text-white"
                    aria-label="Instagram da Clínica Dra. Kamilla"
                  >
                    <InstagramIcon size={17} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c88d6f]/40 bg-[#201918] text-[#faece4] transition-colors hover:border-[#faece4] hover:text-white"
                    aria-label="WhatsApp da Clínica Dra. Kamilla"
                  >
                    <WhatsAppIcon size={17} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c88d6f]/40 bg-[#201918] text-[#faece4] transition-colors hover:border-[#faece4] hover:text-white"
                    aria-label="Google Meu Negócio Clínica Dra. Kamilla"
                  >
                    <GoogleIcon size={17} />
                  </a>
                </div>
              </div>

              {/* Col 2: Quick Links */}
              <div className="lg:col-span-3">
                <h4 className="text-xs font-bold text-[#faece4] uppercase tracking-wider mb-4">
                  Navegação Rápida
                </h4>
                <ul className="space-y-2.5 text-xs text-[#ede4dc]">
                  <li>
                    <a href="#procedimentos" className="transition-colors hover:text-[#faece4]">
                      Procedimentos & Laser
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="transition-colors hover:text-[#faece4]">
                      Sobre a Dra. Kamilla
                    </a>
                  </li>
                  <li>
                    <a href="#equipe" className="transition-colors hover:text-[#faece4]">
                      A Clínica & Equipe (Kálica)
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="transition-colors hover:text-[#faece4]">
                      Diferenciais & Tecnologia
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="transition-colors hover:text-[#faece4]">
                      Avaliações (611 no Google)
                    </a>
                  </li>
                  <li>
                    <a href="#sede" className="transition-colors hover:text-[#faece4]">
                      Localização em Mateus Leme
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="transition-colors hover:text-[#faece4]">
                      Perguntas Frequentes
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Contact & Hours */}
              <div className="lg:col-span-4">
                <h4 className="text-xs font-bold text-[#faece4] uppercase tracking-wider mb-4">
                  Atendimento & Endereço
                </h4>
                <ul className="space-y-3 text-xs text-[#ede4dc]">
                  <li className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-[#c88d6f] mt-0.5 shrink-0" />
                    <span>{ADDRESS_DISPLAY}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock size={15} className="text-[#c88d6f] mt-0.5 shrink-0" />
                    <span>Segunda a Sexta · A partir das 08:00</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Phone size={15} className="text-[#c88d6f] mt-0.5 shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Award size={15} className="text-[#c88d6f] mt-0.5 shrink-0" />
                    <span>Responsável Técnica: Dra. Kamilla (CRM-MG 57814)</span>
                  </li>
                </ul>

                <div className="mt-5">
                  <GlowingButton
                    href={getWhatsAppUrl()}
                    target="_blank"
                    variant="rosegold"
                    size="sm"
                    className="w-full"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Agendar Consulta</span>
                  </GlowingButton>
                </div>
              </div>
            </div>

            {/* Bottom Disclaimer & Medical Ethics Notice */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left text-[11px] text-[#ede4dc]/70">
              <p>
                © {new Date().getFullYear()} Clínica Dra. Kamilla · Todos os direitos reservados · CRM-MG 57814.
              </p>
              <p className="max-w-xl text-[10px] text-[#ede4dc]/60">
                Aviso Legal: Os resultados dos procedimentos médicos e estéticos podem variar de acordo com as características biológicas individuais de cada paciente. Conteúdo de caráter educativo e informativo, em conformidade com as normas do Conselho Federal de Medicina (CFM).
              </p>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* FLOATING WHATSAPP BUTTON                                 */}
        {/* ======================================================== */}
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na Clínica Dra. Kamilla.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar via WhatsApp"
            className="group relative flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:shadow-emerald-600/40"
          >
            <span className="absolute -top-1 -right-1 flex size-3.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-3.5 rounded-full bg-emerald-300" />
            </span>
            <WhatsAppIcon size={28} />
          </a>
        </div>

        {/* ======================================================== */}
        {/* MODAL INTERATIVO: DETALHES DO PROCEDIMENTO              */}
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
                className="absolute inset-0 bg-[#161110]/80 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#c88d6f]/40 bg-white p-6 sm:p-8 shadow-2xl z-10"
              >
                <button
                  type="button"
                  onClick={() => setSelectedSpecialty(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-full border border-[#ede4dc] bg-[#f8f3ee] text-[#1e1815] transition-colors hover:bg-white hover:text-[#944e31] cursor-pointer"
                  aria-label="Fechar detalhes"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2.5">
                  <span className="rounded-full bg-[#faece4] px-3 py-1 text-[11px] font-bold text-[#944e31] uppercase tracking-wider">
                    {selectedSpecialty.tag}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#1e1815]">
                  {selectedSpecialty.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#b87755]">
                  {selectedSpecialty.category}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#665a54]">
                  {selectedSpecialty.details}
                </p>

                <div className="mt-6 border-t border-[#ede4dc] pt-5">
                  <h4 className="text-xs font-bold text-[#1e1815] uppercase tracking-wider mb-3">
                    Principais Indicações & Benefícios:
                  </h4>
                  <ul className="space-y-2">
                    {selectedSpecialty.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#665a54]">
                        <CheckCircle2 size={14} className="text-[#b87755] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#ede4dc] pt-5">
                  <p className="text-xs text-[#665a54]">
                    Agendamento personalizado sob supervisão médica.
                  </p>
                  <GlowingButton
                    href={getWhatsAppUrl(selectedSpecialty.whatsAppText)}
                    target="_blank"
                    variant="rosegold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar Este Procedimento</span>
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
