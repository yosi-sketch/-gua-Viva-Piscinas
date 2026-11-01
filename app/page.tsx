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
  Activity,
  Calendar,
  Building2,
  Stethoscope,
  Smile,
  Eye,
  FileText,
  BadgeCheck,
  Compass,
  AlertCircle,
  Share2,
  Radio,
  Scan,
  Layers,
  HeartHandshake,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Official Clinic Information — TOMOSID · Dr. Frederico Cambraia (Campo Belo - MG)
const CLINIC_NAME = "TOMOSID";
const CLINIC_FULL_NAME = "TOMOSID — Dr. Frederico Cambraia";
const BRAND_LABEL = "Centro de Diagnóstico Médico por Imagem";
const PHYSICIAN_NAME = "Dr. Frederico Cambraia";
const PHYSICIAN_TITLE = "Médico Radiologista · CRM-MG 34752 · RQE 10424";

const WHATSAPP_NUMBER = "5535999760750";
const PHONE_DISPLAY = "(35) 99976-0750";
const EMAIL_CONTACT = "contato@tomosid.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/tomosidoficial";
const INSTAGRAM_HANDLE = "@tomosidoficial";
const LINKTREE_URL = "https://linktr.ee/drfredericocambraia";

const ADDRESS_STREET = "R. Dom Pedro II, 337";
const ADDRESS_NEIGHBORHOOD = "Centro";
const ADDRESS_CITY = "Campo Belo - MG";
const ADDRESS_CEP = "37270-000";
const ADDRESS_DISPLAY = "R. Dom Pedro II, 337 - Centro, Campo Belo - MG, 37270-000";
const CITIES_SERVED = "Campo Belo, Candeias, Cristais, Aguanil, Perdões, Santana do Jacaré e Região Sul de Minas";

const GOOGLE_RATING = "4,2";
const GOOGLE_REVIEW_COUNT = "124";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Tomosid+%E2%80%94+Dr.+Frederico+Cambraia%0ACampo+Belo+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Dom+Pedro+II%2C+337+-+Centro%2C+Campo+Belo+-+MG%2C+37270-000";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Rua+Dom+Pedro+II+337+Centro+Campo+Belo+MG";

// Official assets
const LOGO_SRC = "/logo.png";
const LOGO_DARK_SRC = "/logo-dark.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FACHADA_SRC = "/fachada-clinica.jpg";

function getWhatsAppUrl(message?: string, number: string = WHATSAPP_NUMBER) {
  const defaultText =
    "Olá! Gostaria de agendar um exame na TOMOSID em Campo Belo com o Dr. Frederico Cambraia.";
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Especialidades e Serviços Diagnósticos Oficiais da TOMOSID
interface ExamService {
  id: string;
  title: string;
  category: "mulher" | "alta_complexidade" | "ultrassom" | "preventivo";
  badge: string;
  shortDesc: string;
  tag: string;
  fullDesc: string;
  indications: string[];
  benefits: string[];
  preparo: string;
  faq: { q: string; a: string };
}

const EXAM_SERVICES: ExamService[] = [
  {
    id: "endometriose",
    title: "Ultrassom com Mapeamento de Endometriose",
    category: "mulher",
    badge: "Especialidade Referência",
    shortDesc:
      "Protocolo avançado com preparo intestinal específico para diagnóstico preciso e mapeamento de focos profundos da endometriose.",
    tag: "Saúde da Mulher",
    fullDesc:
      "O mapeamento de endometriose por ultrassonografia é um exame altamente especializado conduzido pelo Dr. Frederico Cambraia. Permite identificar nódulos e aderências da endometriose profunda na pelve, retrocervical, ovários, ligamentos útero-sacros, bexiga e intestino, fornecendo ao ginecologista um mapa cirúrgico e clínico detalhado.",
    indications: [
      "Cólicas menstruais intensas (dismenorreia incapacitante)",
      "Dor pélvica crônica ou dor durante relações sexuais (dispareunia)",
      "Alterações intestinais ou urinárias durante o período menstrual",
      "Dificuldade para engravidar e investigação de infertilidade",
    ],
    benefits: [
      "Mapeamento minucioso dos compartimentos anterior e posterior da pelve",
      "Execução especializada com conforto e respeito ao tempo da paciente",
      "Laudo com documentação anatômica detalhada para conduta médica",
      "Evita cirurgias diagnósticas desnecessárias com visualização prévia",
    ],
    preparo:
      "Requer preparo intestinal simples no dia anterior orientado pela equipe no momento do agendamento para permitir visão limpa das alças intestinais.",
    faq: {
      q: "O exame de mapeamento de endometriose é doloroso?",
      a: "O exame é realizado com extrema delicadeza pelo Dr. Frederico Cambraia, respeitando o limite e o conforto da paciente em cada etapa do procedimento.",
    },
  },
  {
    id: "hycosy",
    title: "HyCoSy (Histerossalpingossoneografia)",
    category: "mulher",
    badge: "Fertilidade Feminina",
    shortDesc:
      "Avaliação moderna da permeabilidade das trompas uterinas com contraste ultrassonográfico sem radiação e sem uso de iodo.",
    tag: "Fertilidade & Trompas",
    fullDesc:
      "A HyCoSy é a técnica mais moderna e segura para investigar a fertilidade feminina e a desobstrução das trompas de Falópio. Diferente da histerossalpingografia tradicional com raio-x, a HyCoSy utiliza ultrassom de alta resolução com solução fisiológica e microbolhas sem radiação e sem os riscos de alergia ao iodo.",
    indications: [
      "Investigação de causas de infertilidade e dificuldade para engravidar",
      "Avaliação da permeabilidade tubária prévia a tratamentos reprodutivos",
      "Estudo da morfologia e contorno da cavidade uterina",
      "Histórico de infecções pélvicas ou cirurgias prévias com risco de aderência",
    ],
    benefits: [
      "Sem exposição à radiação ionizante para os ovários e útero",
      "Sem utilização de contraste iodado (100% seguro para alérgicos)",
      "Procedimento ambulatorial rápido com retorno imediato à rotina",
      "Exame dinâmico com avaliação em tempo real pelo especialista",
    ],
    preparo:
      "Realizado preferencialmente na primeira fase do ciclo menstrual (entre o 7º e o 12º dia após o início da menstruação), sem estar menstruada.",
    faq: {
      q: "Qual a diferença entre a HyCoSy e a Histerossalpingografia comum?",
      a: "A HyCoSy é guiada por ultrassom em vez de raio-x, não utiliza radiação nem iodo, gerando muito menos desconforto e permitindo avaliação completa do útero no mesmo procedimento.",
    },
  },
  {
    id: "ecofetal",
    title: "Ecocardiografia Fetal & Morfológico",
    category: "mulher",
    badge: "Medicina Fetal",
    shortDesc:
      "Avaliação cardiológica minuciosa do coração do bebê durante a gestação e ultrassom morfológico de alta precisão.",
    tag: "Gestação de Alto Risco",
    fullDesc:
      "A ecocardiografia fetal é o exame padrão-ouro para detectar precocemente alterações anatômicas e do ritmo cardíaco do feto ainda no útero. Realizado com equipamentos com doppler de última geração, oferece tranquilidade aos pais e segurança absoluta para o planejamento do parto em gestações comuns e de alto risco.",
    indications: [
      "Idade materna avançada ou gestação gemelar",
      "Histórico familiar de cardiopatias congênitas",
      "Diabetes gestacional, hipertensão ou doenças autoimunes na mãe",
      "Alterações suspeitas no ultrassom morfológico ou translucência nucal",
    ],
    benefits: [
      "Diagnóstico precoce que salva vidas e planeja o suporte neonatal",
      "Análise hemodinâmica detalhada das valvas e vasos fetais",
      "Acolhimento empático que tranquiliza a gestante e sua família",
      "Integração direta com o obstetra assistente",
    ],
    preparo:
      "Geralmente indicado entre a 24ª e 28ª semana de gestação. Não necessita jejum; recomenda-se refeição leve e hidratação normal antes do exame.",
    faq: {
      q: "O ecocardiograma fetal substitui o ultrassom morfológico?",
      a: "Eles são exames complementares. O morfológico analisa toda a anatomia fetal, enquanto o ecofetal foca profundamente na estrutura e fisiologia do coração do feto.",
    },
  },
  {
    id: "ultrassom-mama",
    title: "Ultrassonografia Mamária de Alta Resolução",
    category: "mulher",
    badge: "Saúde das Mamas",
    shortDesc:
      "Diferenciação precisa entre nódulos sólidos e cistos líquidos, ideal para mamas densas e acompanhamento preventivo contínuo.",
    tag: "Diagnóstico Mamário",
    fullDesc:
      "A ultrassonografia mamária utiliza transdutores lineares de alta frequência para avaliar o tecido glandular, ductos e axilas. É indispensável na avaliação complementar da mamografia, especialmente em mulheres jovens com tecido mamário denso, garantindo diagnóstico precoce e tranquilidade.",
    indications: [
      "Complementação diagnóstica de mamografias com mamas densas",
      "Avaliação de nódulos palpáveis ou dor mamária localizada",
      "Diferenciação clara entre cistos benignos e lesões sólidas",
      "Acompanhamento de próteses de silicone e integridade dos implantes",
    ],
    benefits: [
      "Exame 100% indolor, rápido e sem radiação",
      "Avaliação detalhada com classificação padronizada BI-RADS",
      "Inspeção simultânea das cadeias linfáticas axilares",
      "Orientação direta para biópsias quando houver indicação médica",
    ],
    preparo:
      "Não requer jejum. Recomenda-se levar exames anteriores de ultrassom e mamografia para estudo comparativo evolutivo.",
    faq: {
      q: "O ultrassom substitui a mamografia anual?",
      a: "Não. Em mulheres acima de 40 anos, os dois exames se complementam: a mamografia detecta microcalcificações iniciais e o ultrassom detalha nódulos e mamas densas.",
    },
  },
  {
    id: "biopsias",
    title: "Biópsias Guiadas por Ultrassom",
    category: "mulher",
    badge: "Precisão Intervencionista",
    shortDesc:
      "Punções e biópsias percutâneas (Core Biopsy e PAAF) de mama, tireoide e tecidos moles com anestesia local e visualização contínua.",
    tag: "Procedimentos Guiados",
    fullDesc:
      "Procedimentos intervencionistas minimamente invasivos realizados com precisão milimétrica guiados em tempo real por ultrassom. A coleta de fragmentos teciduais (Core Biopsy) ou células (PAAF) permite o diagnóstico anatomopatológico definitivo de nódulos de mama, tireoide e linfonodos com total conforto e segurança.",
    indications: [
      "Nódulos mamários classificados como BI-RADS 4 ou 5",
      "Nódulos de tireoide suspeitos com indicação de PAAF",
      "Investigação de linfonodomegalias cervicais ou axilares",
      "Lesões de partes moles que exigem definição histológica",
    ],
    benefits: [
      "Visualização contínua da agulha em tempo real pelo ultrassom",
      "Procedimento ambulatorial com anestesia local sem internação",
      "Amostras precisas que garantem resultado laboratorial conclusivo",
      "Pós-procedimento tranquilo com recuperação rápida no mesmo dia",
    ],
    preparo:
      "Avisar previamente sobre o uso de medicamentos anticoagulantes ou antiagregantes plaquetários. Orientações personalizadas são passadas na véspera.",
    faq: {
      q: "A biópsia guiada por ultrassom dói?",
      a: "O procedimento é realizado sob anestesia local cuidadosa, tornando a coleta muito bem tolerada e praticamente indolor durante a execução.",
    },
  },
  {
    id: "tomografia",
    title: "Tomografia Computadorizada Multislice",
    category: "alta_complexidade",
    badge: "Alta Tecnologia 3D",
    shortDesc:
      "Varredura tomográfica rápida com cortes submilimétricos e reconstruções 3D para crânio, tórax, abdome, pelve e ossos.",
    tag: "Alta Resolução Anatômica",
    fullDesc:
      "O tomógrafo computadorizado da TOMOSID realiza aquisições ultrarrápidas de imagens em alta definição, permitindo reconstruções multiplanares e 3D de altíssima fidelidade. É essencial para o diagnóstico de urgências, investigações oncológicas, avaliação do tórax, abdome agudo, traumas e pós-operatórios.",
    indications: [
      "Investigação de cefaleias agudas, AVC e traumas cranianos",
      "Avaliação de tórax (nódulos pulmonares, infecções e embolia)",
      "Abdome e pelve (apendicite, cálculos renais, diverticulite)",
      "Reconstruções ósseas tridimensionais para planejamento cirúrgico",
    ],
    benefits: [
      "Velocidade de aquisição que reduz o tempo de permanência no aparelho",
      "Doses otimizadas de radiação com protocolos seguros",
      "Reconstruções anatômicas tridimensionais (3D)",
      "Laudos rápidos emitidos por radiologistas experientes",
    ],
    preparo:
      "Para exames com contraste iodado, requer jejum de 4 a 6 horas e avaliação prévia da função renal (ureia e creatinina).",
    faq: {
      q: "Todo exame de tomografia precisa de contraste?",
      a: "Não. Exames ósseos e de crânio simples geralmente não utilizam contraste. Quando necessário para avaliação vascular ou abdominal, o paciente é avaliado com segurança.",
    },
  },
  {
    id: "ressonancia",
    title: "Ressonância Magnética de Alto Campo",
    category: "alta_complexidade",
    badge: "Máxima Definição",
    shortDesc:
      "Estudo aprofundado do sistema nervoso, coluna vertebral, articulações e tecidos moles sem emissão de radiação ionizante.",
    tag: "Neuro & Articular",
    fullDesc:
      "A ressonância magnética é a mais avançada técnica diagnóstica não invasiva para visualização do cérebro, medula espinhal, coluna, tendões, cartilagens e órgãos internos. Proporciona imagens com contraste incomparável entre diferentes tecidos moles, sem qualquer radiação ionizante.",
    indications: [
      "Hérnias de disco, dores lombares e cervicais crônicas",
      "Lesões de ligamentos e meniscos do joelho, ombro e tornozelo",
      "Investigação de doenças neurológicas, esclerose, tonturas e memória",
      "Estudo detalhado do fígado, vias biliares (colangiorressonância) e pelve",
    ],
    benefits: [
      "Sem radiação ionizante: segurança absoluta para o paciente",
      "Diferenciação celular e tecidual superior a qualquer outro método",
      "Ambiente planejado com equipe que acolhe pacientes com claustrofobia",
      "Laudos especializados que orientam com clareza o tratamento médico",
    ],
    preparo:
      "Retirar qualquer objeto metálico, brincos, relógio e piercing. Informar se possui marca-passo, próteses ou clipes cirúrgicos metálicos.",
    faq: {
      q: "Quem tem medo de lugares fechados consegue fazer o exame?",
      a: "Sim! Nossa equipe é treinada para acolher pacientes ansiosos, com comunicação contínua via fone de ouvido, ventilação e apoio passo a passo.",
    },
  },
  {
    id: "angiotomografia",
    title: "Angiotomografia Coronariana & Vascular",
    category: "alta_complexidade",
    badge: "Cardiovascular",
    shortDesc:
      "Visualização não invasiva da luz interna das artérias coronárias, carótidas, aorta e circulação periférica.",
    tag: "Coração & Vasos",
    fullDesc:
      "A angiotomografia permite avaliar detalhadamente a anatomia dos vasos sanguíneos de forma rápida e minimamente invasiva. Na área coronariana, identifica placas de gordura e cálcio que obstruem a circulação antes que causem eventos graves como o infarto agudo do miocárdio.",
    indications: [
      "Investigação de dor torácica atípica e suspeita de doença coronária",
      "Rastreamento de aneurismas da aorta torácica e abdominal",
      "Avaliação de carótidas e artérias vertebrais para prevenção de AVC",
      "Estenoses e oclusões vasculares nas pernas e abdome",
    ],
    benefits: [
      "Alternativa não invasiva e rápida ao cateterismo convencional para triagem",
      "Visualização em cortes milimétricos e reconstruções 3D de alta nitidez",
      "Segurança diagnóstica para cardiologistas e cirurgiões vasculares",
      "Liberação rápida do paciente após o procedimento",
    ],
    preparo:
      "Jejum orientado, controle de frequência cardíaca quando indicado para angiotomografia de coronárias e checagem de exames de função renal.",
    faq: {
      q: "A angiotomografia substitui o cateterismo?",
      a: "Em muitos casos de diagnóstico preventivo sim, pois oferece visão precisa dos vasos sem necessidade de punção arterial ou internação hospitalar.",
    },
  },
  {
    id: "ultrassom-geral",
    title: "Ultrassonografia Geral & Doppler Colorido",
    category: "ultrassom",
    badge: "Rotina & Check-up",
    shortDesc:
      "Exames de abdome total, vias urinárias, tireoide, próstata, aparelho locomotor e estudo do fluxo sanguíneo com Doppler.",
    tag: "Ultrassom Multidisciplinar",
    fullDesc:
      "O serviço de ultrassonografia geral da TOMOSID alia a experiência de radiologistas dedicados com aparelhos equipados com software Doppler colorido de alta sensibilidade. Fundamental para investigar dores abdominais, pedras na vesícula ou nos rins, esteatose hepática, tireoide e circulação.",
    indications: [
      "Check-up preventivo de rotina de órgãos abdominais e pelve",
      "Investigação de pedras na vesícula (colelitíase) e nos rins (litíase)",
      "Avaliação de gordura no fígado (esteatose) e aumento de volume",
      "Nódulos de tireoide, próstata, bolsa escrotal e partes moles",
    ],
    benefits: [
      "Método seguro, sem radiação e acessível para qualquer faixa etária",
      "Doppler colorido em tempo real que mapeia a circulação sanguínea",
      "Explicação verbal do Dr. Frederico Cambraia durante a consulta",
      "Resultados rápidos com imagens fotográficas de alta resolução",
    ],
    preparo:
      "Para abdome total: jejum de 6 horas e bexiga cheia (beber 4 copos de água 1 hora antes). Para tireoide e músculo esquelético: não requer jejum.",
    faq: {
      q: "Por que preciso estar de bexiga cheia para certos ultrassons?",
      a: "A bexiga cheia atua como uma janela acústica transparente, empurrando as alças intestinais e permitindo visualizar com clareza o útero, ovários ou próstata.",
    },
  },
  {
    id: "mamografia",
    title: "Mamografia Digital de Alta Resolução",
    category: "preventivo",
    badge: "Prevenção do Câncer",
    shortDesc:
      "Rastreamento precoce de microcalcificações e alterações mamárias iniciais com tecnologia digital e dose reduzida de radiação.",
    tag: "Rastreamento Mamário",
    fullDesc:
      "A mamografia digital da TOMOSID é o exame mais comprovadamente eficaz para a detecção precoce do câncer de mama, identificando microcalcificações e lesões milimétricas anos antes de se tornarem palpáveis ao exame físico. Nosso equipamento digital otimiza a compressão para maior conforto da paciente.",
    indications: [
      "Rastreamento anual recomendado para todas as mulheres a partir dos 40 anos",
      "Mulheres com histórico familiar direto de câncer de mama (a partir dos 35 anos)",
      "Presença de nódulos palpáveis, retração da pele ou secreção papilar",
      "Acompanhamento evolutivo pós-tratamento oncológico",
    ],
    benefits: [
      "Detecta lesões em fases iniciais com chances de cura superiores a 95%",
      "Menor tempo de compressão e software que suaviza a pressão nas mamas",
      "Processamento digital da imagem que aumenta o contraste anatômico",
      "Equipe feminina atenciosa e ambiente totalmente privativo e acolhedor",
    ],
    preparo:
      "Não usar desodorante, talco, cremes ou perfumes nas axilas e mamas no dia do exame, pois resíduos podem simular microcalcificações na imagem.",
    faq: {
      q: "A mamografia dói muito?",
      a: "Nossa equipe realiza a compressão de maneira gradual e suave, apenas pelo tempo estritamente necessário para obter a imagem nítida, minimizando desconfortos.",
    },
  },
  {
    id: "densitometria",
    title: "Densitometria Óssea de Corpo Inteiro",
    category: "preventivo",
    badge: "Saúde Óssea",
    shortDesc:
      "Diagnóstico preciso e quantificação de osteopenia e osteoporose na coluna lombar, fêmur proximal e antebraço.",
    tag: "Prevenção de Fraturas",
    fullDesc:
      "A densitometria óssea é o padrão internacional para medir a densidade mineral dos ossos e calcular o risco de fraturas por fragilidade. Essencial para mulheres na menopausa, idosos e pessoas em uso prolongado de corticoides, permite o tratamento antes da ocorrência de quedas e quebras graves.",
    indications: [
      "Mulheres na pós-menopausa ou homens acima de 60 anos",
      "Pessoas com histórico familiar de osteoporose ou fratura de fêmur",
      "Uso contínuo de medicamentos como corticoides ou anticonvulsivantes",
      "Monitoramento da eficácia de reposição de cálcio e medicações ósseas",
    ],
    benefits: [
      "Exame ultrarrápido (cerca de 10 a 15 minutos) totalmente indolor",
      "Dose de radiação extremamente baixa (inferior a um voo comercial)",
      "Relatório gráfico claro comparando seus ossos com a média da população",
      "Orienta condutas precoces que evitam perda de mobilidade",
    ],
    preparo:
      "Não ingerir suplementos de cálcio nas 24 horas que antecedem o exame. Vestir roupas confortáveis sem botões, zíperes ou detalhes metálicos.",
    faq: {
      q: "Com qual frequência devo repetir a densitometria óssea?",
      a: "Normalmente a cada 1 ou 2 anos, conforme a avaliação do seu médico para acompanhar a estabilidade ou melhora da massa óssea após o início do tratamento.",
    },
  },
  {
    id: "raiox",
    title: "Radiografia Digital (Raio-X Digital)",
    category: "preventivo",
    badge: "Agilidade & Nitidez",
    shortDesc:
      "Exames esqueléticos e torácicos com visualização digital imediata, alta definição e baixa exposição à radiação.",
    tag: "Raio-X Ágil",
    fullDesc:
      "O Raio-X Digital substitui os antigos filmes químicos por sensores digitais de altíssima sensibilidade. Isso significa menor exposição do paciente à radiação, imagem instantânea na tela para o técnico e radiologista, e possibilidade de zoom e ajuste de contraste para laudos rápidos e certeiros.",
    indications: [
      "Investigação de fraturas ósseas, entorses e luxações articulares",
      "Avaliação de dores na coluna, bico de papagaio e artrose",
      "Raio-X de tórax para diagnóstico de pneumonias, bronquites e tosse",
      "Exames admissionais e periódicos para colaboradores e empresas",
    ],
    benefits: [
      "Aquisição instantânea da imagem sem espera por revelação química",
      "Dose de radiação significativamente menor que no raio-x analógico",
      "Imagens arquivadas digitalmente para comparação com exames futuros",
      "Atendimento ágil para casos que requerem rapidez na conduta médica",
    ],
    preparo:
      "Não necessita jejum. Recomenda-se apenas retirar correntes, botões metálicos ou sutiãs com aro de metal na região que será examinada.",
    faq: {
      q: "Posso pegar o laudo no mesmo dia?",
      a: "Sim, os exames de raio-x contam com fluxo prioritário de digitação e emissão para que você apresente ao seu médico assistente rapidamente.",
    },
  },
];

// Depoimentos Reais / Google Reviews da TOMOSID e Dr. Frederico Cambraia (4,2 Estrelas · 124 avaliações reais)
interface Testimonial {
  author: string;
  role: string;
  rating: number;
  text: string;
  source: string;
  tag: string;
  date: string;
}

const REAL_TESTIMONIALS: Testimonial[] = [
  {
    author: "MARIANA WERNECK",
    role: "Paciente de Gestação de Alto Risco",
    rating: 5,
    text: "A MELHOR CLÍNICA DA CIDADE! O melhor atendimento que eu e minha esposa recebemos na gestação. Dr. Fred, um exemplo de humanidade! Excelente profissional. Gostaria de deixar meu sincero agradecimento ao Dr. Frederico pelo acompanhamento na minha gestação de alto risco, pela dedicação e competência nos exames.",
    source: "Google Reviews",
    tag: "Gestação de Alto Risco & Ecofetal",
    date: "9 meses atrás",
  },
  {
    author: "Bruna Silva",
    role: "Paciente da Tomosid",
    rating: 5,
    text: "Tive uma ótima experiência na Tomosid. O agendamento foi rápido, o atendimento muito organizado e os profissionais demonstraram um cuidado enorme comigo durante os exames. Dá pra sentir o comprometimento e o respeito com o paciente. Super recomendo! Dr Frederico Cambraia excelente médico.",
    source: "Google Reviews",
    tag: "Atendimento Humanizado",
    date: "9 meses atrás",
  },
  {
    author: "Luiz Celso Rogana Freire",
    role: "Paciente de Exames Especializados",
    rating: 5,
    text: "Dr. Frederico é um excelente profissional, com muita experiência e domínio do que faz. Foi extremamente atencioso, explicou tudo com clareza e passou muita segurança durante todo o atendimento. Dá pra perceber o cuidado e a seriedade no trabalho. Recomendo de olhos fechados!",
    source: "Google Reviews",
    tag: "Segurança & Clareza",
    date: "9 meses atrás",
  },
  {
    author: "Douglas Freire",
    role: "Morador de Campo Belo",
    rating: 5,
    text: "Não há comparação: é, disparada, a melhor clínica de imagem da região. Além da estrutura e da qualidade dos exames, destaco o profissionalismo e a atenção de toda a equipe. Um atendimento que realmente faz a diferença.",
    source: "Google Reviews",
    tag: "Estrutura & Tecnologia",
    date: "9 meses atrás",
  },
  {
    author: "Alberto Messias",
    role: "Local Guide Google",
    rating: 5,
    text: "Fui muito bem atendido desde a recepção até o exame. Equipe atenciosa, ambiente acolhedor e profissionais que realmente se preocupam com o paciente. Atendimento super humanizado. Recomendo!",
    source: "Google Reviews",
    tag: "Acolhimento & Recepção",
    date: "9 meses atrás",
  },
  {
    author: "Luiz Antunes",
    role: "Paciente Frequente da Tomosid",
    rating: 5,
    text: "Sempre que procuro a Tomosid para efetuar exames, sempre fui muito bem atendido pelas recepcionistas e excelentes profissionais. Parabéns, Dr. Frederico Cambraia, sua clínica é modelo e o senhor, um excelente profissional.",
    source: "Google Reviews",
    tag: "Clínica Modelo",
    date: "8 meses atrás",
  },
  {
    author: "Thamila Silva Rezende",
    role: "Paciente da Tomosid",
    rating: 5,
    text: "Ótimo atendimento, totalmente humanizado, Dr. Frederico super atencioso e esclarece todas as nossas dúvidas. Indico para todos em Campo Belo e região!",
    source: "Google Reviews",
    tag: "Esclarecimento de Dúvidas",
    date: "1 ano atrás",
  },
  {
    author: "Iago Lucas",
    role: "Comunicador Regional",
    rating: 5,
    text: "Profissional de excelência! Dr Frederico um ser humano iluminado! Atendimento nota 1000! Parabéns pelo carinho e respeito dedicado a cada paciente.",
    source: "Google Reviews",
    tag: "Humanidade Médica",
    date: "9 meses atrás",
  },
  {
    author: "Dalmy Cassio",
    role: "Paciente Tomosid",
    rating: 5,
    text: "Equipe muito profissional, excelentes médicos, equipamentos modernos, laudos rápidos! Uma clínica que dá orgulho para Campo Belo.",
    source: "Google Reviews",
    tag: "Laudos Rápidos",
    date: "9 meses atrás",
  },
  {
    author: "Astir Abrahão",
    role: "Paciente da Tomosid",
    rating: 5,
    text: "Referência em qualidade diagnóstica, destaca pela excelência técnica, precisão nos exames e compromisso com o paciente! Parabéns a toda equipe.",
    source: "Google Reviews",
    tag: "Precisão Técnica",
    date: "9 meses atrás",
  },
];

// Perguntas Frequentes
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: "Como funciona o agendamento de exames na TOMOSID?",
    answer:
      "O agendamento é feito com prioridade e praticidade diretamente pelo nosso WhatsApp oficial (35) 99976-0750. Você pode enviar a foto do seu pedido médico, informar o convênio ou preferência particular e nossa equipe responde com os horários disponíveis e instruções completas de preparo, sem necessidade de esperar no telefone.",
    category: "Agendamento",
  },
  {
    question: "A TOMOSID atende convênios ou somente exames particulares?",
    answer:
      "Atendemos pacientes particulares com condições acessíveis e opções de parcelamento, além de termos parceria com os principais convênios médicos atuantes em Campo Belo e no Sul de Minas. Envie a foto da sua carteirinha de convênio pelo WhatsApp para confirmarmos a autorização instantaneamente.",
    category: "Convênios",
  },
  {
    question: "O exame de HyCoSy é realizado pelo Dr. Frederico Cambraia?",
    answer:
      "Sim! A HyCoSy (Histerossalpingossoneografia) é realizada pessoalmente pelo Dr. Frederico Cambraia, médico radiologista especialista. O procedimento é guiado por ultrassom de alta resolução, sem radiação e sem uso de iodo, garantindo conforto e acompanhamento atencioso na investigação da fertilidade.",
    category: "Exames Especiais",
  },
  {
    question: "O que é o ultrassom com mapeamento de endometriose profunda?",
    answer:
      "É um exame ultrassonográfico pélvico e transvaginal altamente especializado com preparo intestinal prévio. Ele mapeia detalhadamente nódulos de endometriose que não aparecem em ultrassons de rotina comuns, avaliando ligamentos, ovários, bexiga e alças intestinais.",
    category: "Saúde da Mulher",
  },
  {
    question: "Em quanto tempo os laudos dos exames ficam prontos?",
    answer:
      "Os laudos da TOMOSID são emitidos com rigor e agilidade. A maioria dos exames de ultrassonografia e raio-x contam com liberação imediata ou no mesmo dia. Tomografias e ressonâncias que exigem reconstruções 3D e estudos minuciosos têm entrega rápida informada no momento da realização.",
    category: "Laudos & Resultados",
  },
  {
    question: "Como devo me preparar para exames com contraste?",
    answer:
      "Exames de tomografia ou angiotomografia que necessitam de contraste iodado exigem jejum de 4 a 6 horas e apresentação de exame de creatinina recente para avaliar a função renal. Nossa equipe orienta detalhadamente todos os cuidados no agendamento.",
    category: "Preparo de Exames",
  },
  {
    question: "A TOMOSID realiza biópsias guiadas por imagem?",
    answer:
      "Sim. Realizamos punções aspirativas por agulha fina (PAAF) de tireoide e core biopsy de mama e tecidos moles guiadas em tempo real por ultrassom, com anestesia local e sem necessidade de internação hospitalar.",
    category: "Procedimentos",
  },
  {
    question: "Qual o horário de funcionamento e endereço da TOMOSID?",
    answer:
      "Estamos localizados em sede própria moderna na Rua Dom Pedro II, 337 - Centro, Campo Belo - MG (próximo aos principais pontos de referência do Centro). Atendemos de segunda a sexta-feira a partir das 08h00.",
    category: "Localização",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "todos" | "mulher" | "alta_complexidade" | "ultrassom" | "preventivo"
  >("todos");
  const [activeModalExam, setActiveModalExam] = useState<ExamService | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredExams =
    selectedCategory === "todos"
      ? EXAM_SERVICES
      : EXAM_SERVICES.filter((e) => e.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#991b1b] selection:text-white">
      {/* 1. TOPBAR DE CREDIBILIDADE MÉDICA OFICIAL */}
      <aside
        aria-label="Avisos e Informações de Atendimento"
        className="bg-[#121318] text-slate-300 text-[12px] border-b border-[#272a38] py-2 px-4 transition-all"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-white font-bold">{GOOGLE_RATING}</span>
              <span className="text-slate-400 font-normal">
                ({GOOGLE_REVIEW_COUNT} avaliações no Google)
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin size={13} className="text-slate-400" />
              <span className="text-slate-300">R. Dom Pedro II, 337 - Centro · Campo Belo - MG</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-slate-400" />
              <span className="text-slate-300">Seg. a Sex. a partir das 08h00</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <InstagramIcon size={13} className="text-slate-400" />
              <span className="text-slate-300">{INSTAGRAM_HANDLE}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#22c55e] hover:text-[#4ade80] font-bold transition-colors"
            >
              <WhatsAppIcon size={13} />
              <span>Agendamento: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* 2. HEADER NAVEGAÇÃO PRINCIPAL (LIMPO, EQUILIBRADO E SEM QUEBRAS INDESEJADAS) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Oficial TOMOSID */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#991b1b] rounded-lg flex-shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src={LOGO_EMBLEM_SRC}
                alt="Emblema TOMOSID"
                width={44}
                height={44}
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col flex-shrink-0 min-w-0">
              <div className="flex items-baseline leading-none mb-1">
                <span className="font-heading font-black text-2xl tracking-tight text-slate-900">
                  TOMO
                </span>
                <span className="font-heading font-black text-2xl tracking-tight text-[#991b1b]">
                  SID
                </span>
              </div>
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-600 leading-tight whitespace-nowrap">
                DIAGNÓSTICO POR IMAGEM
              </span>
              <span className="text-[9.5px] font-medium text-slate-500 leading-tight whitespace-nowrap">
                Dr. Frederico Cambraia · CRM-MG 34752
              </span>
            </div>
          </a>

          {/* Links de navegação desktop (Linha única, sem quebra, espaçamento harmonioso) */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-[13px] xl:text-[13.5px] font-semibold text-slate-600">
            <a
              href="#exames"
              className="hover:text-[#991b1b] transition-colors py-1 whitespace-nowrap"
            >
              Exames
            </a>
            <a
              href="#dr-frederico"
              className="hover:text-[#991b1b] transition-colors py-1 whitespace-nowrap"
            >
              Dr. Frederico
            </a>
            <a
              href="#saude-mulher"
              className="hover:text-[#991b1b] transition-colors py-1 whitespace-nowrap"
            >
              Saúde da Mulher
            </a>
            <a
              href="#estrutura"
              className="hover:text-[#991b1b] transition-colors py-1 whitespace-nowrap"
            >
              Estrutura
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#991b1b] transition-colors py-1 whitespace-nowrap"
            >
              Depoimentos
            </a>
            <a
              href="#convenios"
              className="hover:text-[#991b1b] transition-colors py-1 whitespace-nowrap"
            >
              Convênios
            </a>
            <a
              href="#faq"
              className="hover:text-[#991b1b] transition-colors py-1 whitespace-nowrap"
            >
              Dúvidas
            </a>
          </nav>

          {/* Ação CTA Direta no Header: WhatsApp Verde Oficial (Elimina o bloco vermelho agressivo) */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de verificar horários para agendar um exame na TOMOSID."
              )}
              target="_blank"
              variant="whatsapp"
              size="sm"
              className="shadow-sm font-bold whitespace-nowrap px-4 py-2 text-[12.5px]"
            >
              <WhatsAppIcon size={15} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Agendar Exame</span>
            </GlowingButton>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#991b1b] focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg"
            >
              <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-[15px]">
                <a
                  href="#exames"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#991b1b]"
                >
                  Exames & Serviços
                </a>
                <a
                  href="#dr-frederico"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#991b1b]"
                >
                  Dr. Frederico Cambraia (Radiologista)
                </a>
                <a
                  href="#saude-mulher"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#991b1b]"
                >
                  Saúde da Mulher & Fetal (Endometriose / HyCoSy)
                </a>
                <a
                  href="#estrutura"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#991b1b]"
                >
                  Estrutura na R. Dom Pedro II, 337
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#991b1b]"
                >
                  Depoimentos de Pacientes (4,2 ★)
                </a>
                <a
                  href="#convenios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#991b1b]"
                >
                  Convênios & Particular
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#991b1b]"
                >
                  Perguntas Frequentes
                </a>
              </nav>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center font-bold"
                >
                  <WhatsAppIcon size={16} />
                  <span>Agendamento no WhatsApp: {PHONE_DISPLAY}</span>
                </GlowingButton>
                <div className="text-center text-[12px] text-slate-500">
                  R. Dom Pedro II, 337 - Centro · Campo Belo - MG
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION DE ALTA CONVERSÃO & AUTORIDADE */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-[#fcfbf9] to-[#f8fafc]">
        {/* Glow de fundo suave e discreto */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Coluna Texto & Proposta de Valor */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-[12px] font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#991b1b]" />
                CENTRO DE DIAGNÓSTICO MÉDICO POR IMAGEM · CAMPO BELO - MG
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]">
                Precisão diagnóstica com tecnologia avançada e o{" "}
                <span className="text-[#991b1b] underline decoration-slate-300 underline-offset-4">
                  cuidado humanizado
                </span>{" "}
                que você merece.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Na <strong>TOMOSID</strong>, unimos equipamentos de ponta à
                experiência e acolhimento do{" "}
                <strong className="text-slate-900">Dr. Frederico Cambraia</strong>{" "}
                (CRM-MG 34752 / RQE 10424). Realize seus exames de Tomografia,
                Ressonância Magnética, Ultrassonografia, Mapeamento de
                Endometriose, HyCoSy e Ecofetal em Campo Belo com segurança e agilidade.
              </p>

              {/* Badges de Credenciais Rápidas */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <BadgeCheck size={18} className="text-[#991b1b] flex-shrink-0" />
                  <span className="text-[12px] font-bold text-slate-800">
                    Dr. Frederico Cambraia
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <Star size={18} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                  <span className="text-[12px] font-bold text-slate-800">
                    4,2 ★ Google (124 avaliações)
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                  <Shield size={18} className="text-[#991b1b] flex-shrink-0" />
                  <span className="text-[12px] font-bold text-slate-800">
                    Convênios & Particular
                  </span>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um exame na TOMOSID em Campo Belo com o Dr. Frederico Cambraia."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="font-bold text-base shadow-sm"
                >
                  <WhatsAppIcon size={18} />
                  <span>Agendar Exame no WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#exames"
                  variant="outline"
                  size="lg"
                  className="font-bold text-slate-700"
                >
                  <Scan size={18} className="text-slate-600" />
                  <span>Ver Exames & Preparos</span>
                </GlowingButton>
              </div>

              {/* Alerta de facilidade de agendamento */}
              <div className="flex items-center gap-2 text-[12.5px] text-slate-500 pt-1">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                <span>
                  Atendimento ágil direto pelo WhatsApp: sem espera na linha telefônica.
                </span>
              </div>
            </div>

            {/* Coluna Visual: Fachada Oficial e Totem */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Moldura do card fotográfico */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                  <div className="relative h-[380px] sm:h-[420px] w-full">
                    <Image
                      src={FACHADA_SRC}
                      alt="Fachada Oficial da Clínica TOMOSID na Rua Dom Pedro II, 337 - Centro de Campo Belo - MG"
                      fill
                      priority
                      className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                  </div>

                  {/* Informações sobrepostas na imagem */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-[#991b1b] text-white text-[10px] font-black uppercase tracking-wider">
                        SEDE PRÓPRIA NO CENTRO
                      </span>
                      <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                        ★ 4,2 no Google
                      </span>
                    </div>
                    <p className="font-heading font-black text-xl text-white leading-tight">
                      TOMOSID · Diagnóstico por Imagem
                    </p>
                    <p className="text-slate-200 text-xs mt-1 flex items-center gap-1">
                      <MapPin size={12} className="text-slate-300 flex-shrink-0" />
                      Rua Dom Pedro II, 337 - Centro, Campo Belo - MG
                    </p>
                  </div>
                </div>

                {/* Badge Flutuante: Especialidades do Totem */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3.5 shadow-xl max-w-[260px] hidden sm:block">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#991b1b]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                      Exames no Local
                    </span>
                  </div>
                  <p className="text-[11.5px] text-slate-600 leading-snug font-medium">
                    Tomografia · Ressonância · Ultrassom · Mapeamento de Endometriose · HyCoSy · Biópsias
                  </p>
                </div>

                {/* Badge Flutuante: Responsável Técnico */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#121318] text-white rounded-xl p-3 shadow-xl border border-slate-700 hidden sm:block">
                  <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                    RESPONSÁVEL TÉCNICO
                  </div>
                  <div className="text-xs font-black text-white mt-0.5">
                    Dr. Frederico Cambraia
                  </div>
                  <div className="text-[10px] text-slate-400">
                    CRM-MG 34752 · RQE 10424
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE MÉTRICAS & CREDIBILIDADE DIAGNÓSTICA */}
      <section className="bg-[#121318] text-white border-y border-[#272a38] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-amber-400">
                4,2 ★
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Avaliação no Google
              </div>
              <div className="text-[11px] text-slate-400">
                124 avaliações reais de pacientes
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white">
                +12
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Modalidades Diagnósticas
              </div>
              <div className="text-[11px] text-slate-400">
                Tomografia, Ressonância, Ultrassom e mais
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-slate-200">
                RQE 10424
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Dr. Frederico Cambraia
              </div>
              <div className="text-[11px] text-slate-400">
                CRM-MG 34752 · Radiologista Especialista
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Atendimento Integrado
              </div>
              <div className="text-[11px] text-slate-400">
                Particular & Ampla Rede de Convênios
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATÁLOGO INTERATIVO DE EXAMES & DIAGNÓSTICOS */}
      <section id="exames" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="eyebrow justify-center">CATÁLOGO COMPLETO DE SERVIÇOS</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Exames de Alta Precisão & Imagem Médica Avançada
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Consulte todas as modalidades diagnósticas realizadas na TOMOSID em
            Campo Belo. Clique em qualquer exame para visualizar indicações,
            preparo necessário e orientações clínicas.
          </p>

          {/* Filtros por Categoria */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "todos", label: "Todos os Exames (12)" },
              { id: "mulher", label: "Saúde da Mulher & Fetal (5)" },
              { id: "alta_complexidade", label: "Alta Complexidade / 3D (3)" },
              { id: "ultrassom", label: "Ultrassonografia Geral (2)" },
              { id: "preventivo", label: "Preventivos & Raio-X (2)" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  setSelectedCategory(
                    cat.id as
                      | "todos"
                      | "mulher"
                      | "alta_complexidade"
                      | "ultrassom"
                      | "preventivo"
                  )
                }
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#1e293b] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Cards dos Exames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="card-clinical rounded-xl p-6 flex flex-col justify-between hover:border-slate-400 transition-all group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#fdf8f8] text-[#991b1b] border border-red-100">
                    {exam.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {exam.badge}
                  </span>
                </div>

                <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-[#991b1b] transition-colors leading-snug">
                  {exam.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                  {exam.shortDesc}
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Principais Indicações:
                  </div>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    {exam.indications.slice(0, 2).map((ind, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2
                          size={13}
                          className="text-[#991b1b] flex-shrink-0 mt-0.5"
                        />
                        <span className="line-clamp-1">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalExam(exam)}
                  className="text-xs font-bold text-slate-800 hover:text-[#991b1b] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Ver Detalhes & Preparo</span>
                  <ArrowRight size={13} />
                </button>

                <GlowingButton
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar o exame de ${exam.title} na TOMOSID.`
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="sm"
                  className="text-xs font-bold"
                >
                  <WhatsAppIcon size={13} />
                  <span>Agendar</span>
                </GlowingButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DETALHADO DO EXAME */}
      <AnimatePresence>
        {activeModalExam && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 relative"
            >
              {/* Botão Fechar */}
              <button
                type="button"
                onClick={() => setActiveModalExam(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar detalhes do exame"
              >
                <X size={20} />
              </button>

              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-[#fdf8f8] text-[#991b1b] text-xs font-bold border border-red-100">
                  {activeModalExam.tag} · {activeModalExam.badge}
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {activeModalExam.title}
                </h3>
              </div>

              <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <p>{activeModalExam.fullDesc}</p>

                {/* Indicações */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#991b1b]" />
                    Quando o exame é indicado:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeModalExam.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] mt-1.5 flex-shrink-0" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diferenciais TOMOSID */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Diferenciais e Vantagens na TOMOSID:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeModalExam.benefits.map((ben, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2"
                      >
                        <Shield size={14} className="text-[#991b1b] flex-shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparo */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                  <h4 className="font-bold text-amber-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Clock size={15} className="text-amber-700" />
                    Orientações de Preparo para o Exame:
                  </h4>
                  <p className="text-xs text-amber-900/90 leading-relaxed">
                    {activeModalExam.preparo}
                  </p>
                </div>

                {/* Dúvida Frequente */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs">
                    Dúvida comum: {activeModalExam.faq.q}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {activeModalExam.faq.a}
                  </p>
                </div>
              </div>

              {/* Ações do Modal */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalExam(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Fechar Janela
                </button>

                <GlowingButton
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar o exame de ${activeModalExam.title} na TOMOSID com o Dr. Frederico Cambraia.`
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full sm:w-auto font-bold"
                >
                  <WhatsAppIcon size={16} />
                  <span>Agendar este Exame no WhatsApp</span>
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. DESTAQUE ESPECIAL DE AUTORIDADE: DR. FREDERICO CAMBRAIA */}
      <section
        id="dr-frederico"
        className="py-16 md:py-24 bg-[#121318] text-white border-y border-[#272a38] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Foto e Badge do Médico */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-xl p-6 sm:p-8 space-y-5">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                  <Stethoscope size={32} />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300">
                    CORPO CLÍNICO & RESPONSÁVEL TÉCNICO
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    Dr. Frederico Cambraia
                  </h3>
                  <p className="text-slate-300 font-semibold text-sm">
                    Médico Radiologista · CRM-MG 34752 · RQE 10424
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-slate-300 flex-shrink-0" />
                    <span>Especialista em Radiologia e Diagnóstico por Imagem</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-slate-300 flex-shrink-0" />
                    <span>Mapeamento de Endometriose Profunda & HyCoSy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-slate-300 flex-shrink-0" />
                    <span>Ecocardiografia Fetal & Gestação de Alto Risco</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-slate-300 flex-shrink-0" />
                    <span>Biópsias Percutâneas Guiadas por Ultrassom</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={LINKTREE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 transition-colors"
                  >
                    <span>Acessar Linktree Oficial do Dr. Frederico</span>
                    <ArrowUpRight size={14} className="text-slate-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Texto de Apresentação e Humanização */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="eyebrow-dark">MEDICINA DIAGNÓSTICA COM ALMA E EXCELÊNCIA</div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Um diagnóstico seguro exige precisão de imagem e, acima de tudo,{" "}
                <span className="text-slate-200 underline decoration-slate-600">respeito e humanidade</span> com o paciente.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Com sólida atuação médica e dedicação ao diagnóstico por imagem
                em Campo Belo, o <strong>Dr. Frederico Cambraia</strong> consolidou
                a TOMOSID como polo de referência diagnóstica no Sul de Minas
                Gerais.
              </p>

              <blockquote className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-[#991b1b] text-slate-200 text-xs sm:text-sm italic leading-relaxed">
                &ldquo;Sabemos que por trás de cada solicitação de exame existe uma
                pessoa com suas angústias, expectativas e família. Nossa missão na
                TOMOSID é aliar a máxima acuidade tecnológica à escuta paciente,
                clareza na comunicação e acolhimento em cada etapa.&rdquo;
                <footer className="mt-2 text-right font-bold text-slate-300 not-italic text-xs">
                  — Dr. Frederico Cambraia
                </footer>
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="font-heading font-black text-xl text-white">
                    Clareza & Explicação
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Dúvidas esclarecidas com calma e segurança durante e após os exames.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="font-heading font-black text-xl text-white">
                    Gestações de Alto Risco
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Acompanhamento minucioso do coração e desenvolvimento fetal.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um exame diretamente com a equipe do Dr. Frederico Cambraia na TOMOSID."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="font-bold text-sm"
                >
                  <WhatsAppIcon size={16} />
                  <span>Agendar Consulta ou Exame via WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PILAR DE DESTAQUE: CENTRO AVANÇADO DE SAÚDE DA MULHER & MEDICINA FETAL */}
      <section id="saude-mulher" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="eyebrow justify-center">DIFERENCIAL EXCLUSIVO NA REGIÃO</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Polo Especializado em Saúde da Mulher & Medicina Fetal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Exames complexos que antes exigiam deslocamento para grandes centros
            agora estão disponíveis em Campo Belo com o Dr. Frederico Cambraia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-clinical rounded-2xl p-6 space-y-3 border-t-2 border-t-[#991b1b]">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#991b1b] flex items-center justify-center">
              <Activity size={24} />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Mapeamento de Endometriose
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Varredura de focos profundos na pelve, ovários, bexiga e alças
              intestinais com protocolo preparatório rigoroso.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#991b1b]">
              Indicado para cólicas e dor crônica →
            </span>
          </div>

          <div className="card-clinical rounded-2xl p-6 space-y-3 border-t-2 border-t-[#991b1b]">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#991b1b] flex items-center justify-center">
              <Sparkles size={24} />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              HyCoSy (Permeabilidade Tubária)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Avaliação de fertilidade feminina sem radiação ionizante e sem iodo,
              garantindo conforto e segurança no planejamento reprodutivo.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#991b1b]">
              Investigação de fertilidade →
            </span>
          </div>

          <div className="card-clinical rounded-2xl p-6 space-y-3 border-t-2 border-t-[#991b1b]">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#991b1b] flex items-center justify-center">
              <Baby size={24} />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Ecocardiografia Fetal
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Avaliação do coração do feto durante a gestação, fundamental para
              detecção precoce de cardiopatias e tranquilidade dos pais.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#991b1b]">
              Ideal entre 24ª e 28ª semana →
            </span>
          </div>

          <div className="card-clinical rounded-2xl p-6 space-y-3 border-t-2 border-t-[#991b1b]">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#991b1b] flex items-center justify-center">
              <Shield size={24} />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Biópsias Guiadas (Mama e Tireoide)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Punção (PAAF) e Core Biopsy guiadas em tempo real com anestesia local,
              oferecendo resultados anatomopatológicos ágeis.
            </p>
            <span className="inline-block text-[11px] font-bold text-[#991b1b]">
              Procedimento seguro e rápido →
            </span>
          </div>
        </div>
      </section>

      {/* 8. SEDE PRÓPRIA & INFRAESTRUTURA (A CLÍNICA NO CENTRO DE CAMPO BELO) */}
      <section id="estrutura" className="py-16 md:py-24 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Imagem da Sede */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
                <div className="relative h-[380px] sm:h-[450px] w-full">
                  <Image
                    src={FACHADA_SRC}
                    alt="Sede Física da Clínica TOMOSID na Rua Dom Pedro II, 337 - Centro de Campo Belo - MG"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200">
                  <p className="font-heading font-black text-slate-900 text-sm sm:text-base">
                    Sede Própria TOMOSID · Campo Belo - MG
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Rua Dom Pedro II, 337 - Centro · Fácil estacionamento e acessibilidade
                  </p>
                </div>
              </div>
            </div>

            {/* Informações da Estrutura */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="eyebrow">ESTRUTURA FÍSICA & TECNOLÓGICA</div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Espaço moderno, asséptico e planejado para o seu conforto.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A TOMOSID dispõe de instalações planejadas na área central de
                Campo Belo, com ambientes climatizados, salas de exames privativas,
                acessibilidade completa e totem com todas as modalidades
                diagnósticas integradas em um só lugar.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Scan size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Equipamentos Calibrados & Digitais
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tomógrafo computadorizado multislice, ressonância magnética, ultrassons de alta definição e mamografia digital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Atendimento Humanizado & Recepção Organizada
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Equipe treinada para acolher cada paciente com empatia, respeito ao horário e esclarecimento claro das etapas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Fácil Localização no Centro
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Localizada na Rua Dom Pedro II, 337, de fácil acesso tanto para moradores de Campo Belo quanto para cidades vizinhas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <GlowingButton
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="font-bold text-xs"
                >
                  <MapPin size={15} className="text-slate-600" />
                  <span>Traçar Rota no Google Maps</span>
                </GlowingButton>

                <GlowingButton
                  href={WAZE_MAPS_URL}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="font-bold text-xs"
                >
                  <Compass size={15} className="text-slate-600" />
                  <span>Abrir no Waze</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL REAL: GOOGLE REVIEWS (4,2 ESTRELAS · 124 AVALIAÇÕES) */}
      <section id="depoimentos" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="eyebrow justify-center">AVALIAÇÕES REAIS NO GOOGLE</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            O que dizem os pacientes que confiam na TOMOSID
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Com nota <strong>4,2 ★ e 124 avaliações</strong> verificadas no
            Google, a confiança dos nossos pacientes é o nosso maior patrimônio.
          </p>
        </div>

        {/* Grid de Depoimentos Reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="card-clinical rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {item.date}
                  </span>
                </div>

                <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">{item.role}</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600">
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link para Avaliar ou Ver Todas as Avaliações */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#991b1b] transition-colors"
          >
            <span>Ver todas as 124 avaliações no Google Meu Negócio</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* 10. CONVÊNIOS ATENDIDOS & MODALIDADE PARTICULAR */}
      <section id="convenios" className="py-16 md:py-20 bg-[#121318] text-white border-y border-[#272a38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="eyebrow-dark justify-center">ATENDIMENTO AMPLO & ACESSÍVEL</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Atendimento Particular & Principais Convênios
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Oferecemos flexibilidade e suporte completo para que você realize
            seus exames sem burocracia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="font-bold text-base text-white">Convênios Médicos</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Atendemos convênios regionais e nacionais. Envie a foto da sua carteirinha e pedido médico pelo WhatsApp para checagem imediata de cobertura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center font-bold">
                ★
              </div>
              <h3 className="font-bold text-base text-white">Atendimento Particular</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tabela acessível, sem filas demoradas, com facilidade de pagamento em cartão de crédito e PIX para exames de rotina ou de urgência.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center font-bold">
                ⚡
              </div>
              <h3 className="font-bold text-base text-white">Agilidade de Laudos</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Laudos precisos com rapidez para que seu médico assistente possa iniciar o tratamento sem perder tempo hábil.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de consultar se meu convênio é aceito na TOMOSID para realizar meus exames."
              )}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="font-bold"
            >
              <WhatsAppIcon size={16} />
              <span>Consultar Cobertura do Meu Convênio</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 11. PERGUNTAS FREQUENTES (FAQ) COM ACORDEÃO */}
      <section id="faq" className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="eyebrow justify-center">TIRE SUAS DÚVIDAS</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Perguntas Frequentes sobre a TOMOSID
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Respostas claras para as dúvidas mais comuns sobre agendamento,
            preparo de exames e atendimento.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="card-clinical rounded-xl overflow-hidden border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-heading font-bold text-slate-900 text-sm sm:text-base hover:text-[#991b1b] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#991b1b]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. CTA FINAL DE ALTA CONVERSÃO */}
      <section className="bg-gradient-to-br from-[#121318] via-[#16171d] to-[#121318] text-white py-16 md:py-20 border-t border-[#272a38]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-bold tracking-wide">
            AGENDAMENTO ÁGIL & PRIORITÁRIO
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Agende seu exame na TOMOSID com o Dr. Frederico Cambraia.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Envie sua solicitação pelo WhatsApp oficial e receba a confirmação
            com orientações de preparo diretamente da nossa equipe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de agendar um exame na TOMOSID em Campo Belo com o Dr. Frederico Cambraia."
              )}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto font-bold text-base shadow-md"
            >
              <WhatsAppIcon size={18} />
              <span>Agendar Exame no WhatsApp ({PHONE_DISPLAY})</span>
            </GlowingButton>

            <GlowingButton
              href={GOOGLE_MAPS_URL}
              target="_blank"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-bold text-slate-800"
            >
              <MapPin size={18} className="text-slate-600" />
              <span>Ver Localização no Centro</span>
            </GlowingButton>
          </div>

          <div className="text-xs text-slate-400 pt-2">
            Rua Dom Pedro II, 337 - Centro · Campo Belo - MG · Segunda a Sexta a partir das 08h00
          </div>
        </div>
      </section>

      {/* 13. FOOTER INSTITUCIONAL COMPLETO */}
      <footer className="bg-[#090a0f] text-slate-400 text-xs border-t border-[#272a38] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Coluna 1: Logo & Sobre */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <Image
                src={LOGO_EMBLEM_SRC}
                alt="Emblema TOMOSID"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl text-white">
                  TOMO<span className="text-[#f87171]">SID</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400">
                  DIAGNÓSTICO POR IMAGEM
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-[12px] leading-relaxed">
              Centro de diagnóstico médico por imagem de alta complexidade em
              Campo Belo - MG. Tomografia, Ressonância, Ultrassonografia,
              Mapeamento de Endometriose, HyCoSy, Ecofetal, Biópsias e Mamografia Digital.
            </p>
            <div className="text-[11px] text-slate-300 font-semibold">
              Responsável Técnico: Dr. Frederico Cambraia · CRM-MG 34752 · RQE 10424
            </div>
          </div>

          {/* Coluna 2: Modalidades */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Exames Principais
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-[12px]">
              <li>Mapeamento de Endometriose Profunda</li>
              <li>HyCoSy (Histerossalpingossoneografia)</li>
              <li>Ecocardiografia Fetal & Morfológico</li>
              <li>Tomografia Computadorizada Multislice 3D</li>
              <li>Ressonância Magnética de Alto Campo</li>
              <li>Biópsias Guiadas (Mama e Tireoide)</li>
              <li>Mamografia Digital de Alta Resolução</li>
              <li>Densitometria Óssea & Raio-X Digital</li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-[12px]">
              <li>
                <a href="#exames" className="hover:text-white transition-colors">
                  Todos os Exames & Preparos
                </a>
              </li>
              <li>
                <a href="#dr-frederico" className="hover:text-white transition-colors">
                  Dr. Frederico Cambraia (Radiologista)
                </a>
              </li>
              <li>
                <a href="#saude-mulher" className="hover:text-white transition-colors">
                  Saúde da Mulher & Medicina Fetal
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-white transition-colors">
                  Estrutura & Sede Física
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Avaliações Google (4,2 ★)
                </a>
              </li>
              <li>
                <a href="#convenios" className="hover:text-white transition-colors">
                  Convênios & Particular
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Endereço */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Contato & Localização
            </h4>
            <div className="space-y-2 text-[12px] text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Rua Dom Pedro II, 337 - Centro, Campo Belo - MG, CEP 37270-000</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} className="text-slate-400 flex-shrink-0" />
                <span>Segunda a Sexta a partir das 08h00</span>
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon size={15} className="text-emerald-500 flex-shrink-0" />
                <span>WhatsApp: {PHONE_DISPLAY}</span>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon size={15} className="text-slate-400 flex-shrink-0" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Disclaimer Médico */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center space-y-3">
          <p className="text-[11px] text-slate-500 max-w-4xl mx-auto leading-relaxed">
            As informações contidas neste website têm caráter exclusivamente
            educativo e institucional, em rigorosa consonância com a Resolução CFM
            nº 2.336/2023 (CODAME). Nenhum conteúdo substitui a consulta médica
            individualizada e o exame clínico presencial. Responsável Técnico:
            Dr. Frederico Cambraia · CRM-MG 34752 · RQE 10424.
          </p>

          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} TOMOSID — Diagnóstico por Imagem. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* 14. BOTÃO FLUTUANTE DE WHATSAPP OFICIAL COM STATUS ONLINE */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        <a
          href={getWhatsAppUrl(
            "Olá! Gostaria de agendar um exame na TOMOSID em Campo Belo com o Dr. Frederico Cambraia."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white pl-4 pr-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
          aria-label="Agendar Exame no WhatsApp da TOMOSID"
        >
          <div className="relative">
            <WhatsAppIcon size={22} className="text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 leading-tight">
              Agendamento Online
            </span>
            <span className="text-xs font-black tracking-tight leading-tight">
              (35) 99976-0750
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
