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
  Users,
  Check,
  UserCheck,
  HeartHandshake,
  Sparkle,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais da Clínica Vivália — Juatuba / MG
const CLINIC_NAME = "Clínica Vivália";
const CLINIC_FULL_NAME = "Vivália Clínica Médica";
const BRAND_SLOGAN = "Acolhimento humanizado e ético.";
const BRAND_SUBTITLE = "Um sonho se tornando realidade no coração de Juatuba.";

const WHATSAPP_NUMBER = "5531996622315";
const PHONE_DISPLAY = "(31) 99662-2315";
const EMAIL_CONTACT = "contato@clinicavivalia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/clinicavivalia/";
const INSTAGRAM_HANDLE = "@clinicavivalia";
const LINKTREE_URL = "https://linktr.ee/clinicavivalia";

const ADDRESS_STREET = "Av. Tânus Saliba, 71A";
const ADDRESS_NEIGHBORHOOD = "Centro";
const ADDRESS_CITY = "Juatuba - MG";
const ADDRESS_CEP = "35675-000";
const ADDRESS_DISPLAY = "Av. Tânus Saliba, 71A - Centro, Juatuba - MG, 35675-000";
const CITIES_SERVED = "Juatuba, Betim, Mateus Leme, Igarapé, Florestal, Itaúna e Região Metropolitana de BH";

const GOOGLE_RATING = "5,0";
const GOOGLE_REVIEW_COUNT = "71";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Cl%C3%ADnica+Viv%C3%A1lia%0AJuatuba+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+T%C3%A2nus+Saliba%2C+71A+-+Centro%2C+Juatuba+-+MG%2C+35675-000";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Avenida+Tanus+Saliba+71A+Centro+Juatuba+MG";

// Assets Oficiais da Clínica Vivália
const LOGO_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_HORIZONTAL_LIGHT_SRC = "/logo-horizontal-light.png";
const DOCTOR_PHOTO_SRC = "/dr-alessandro-galvao.jpg";
const CORRIDOR_PHOTO_SRC = "/clinica-espaco-corredor.jpg";

function getWhatsAppUrl(message?: string, number: string = WHATSAPP_NUMBER) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta na Clínica Vivália em Juatuba.";
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

// Especialidades e Serviços da Clínica Vivália
interface SpecialtyService {
  id: string;
  title: string;
  category: "familia" | "mulher_infantil" | "clinicas" | "diagnosticos";
  badge: string;
  shortDesc: string;
  tag: string;
  fullDesc: string;
  indications: string[];
  benefits: string[];
  preparo: string;
  faq: { q: string; a: string };
}

const SPECIALTY_SERVICES: SpecialtyService[] = [
  {
    id: "clinica-geral",
    title: "Clínica Geral & Medicina da Família",
    category: "familia",
    badge: "Acolhimento Integral",
    shortDesc:
      "Avaliação completa de saúde, diagnóstico precoce, check-up preventivo e acompanhamento contínuo para você e sua família.",
    tag: "Atenção Primária & Check-up",
    fullDesc:
      "A consulta de Clínica Geral na Clínica Vivália é centrada no paciente de forma integral e humanizada. Conduzida por profissionais como o Dr. Alessandro Galvão e o Dr. Elissander, combina escuta atenta, investigação detalhada dos sintomas, solicitação e interpretação criteriosa de exames e acompanhamento contínuo de doenças crônicas como hipertensão e diabetes.",
    indications: [
      "Check-up médico preventivo anual e avaliação de rotina",
      "Controle de pressão alta (hipertensão) e diabetes mellitus",
      "Investigação de sintomas como fadiga crônica, dores ou mal-estar",
      "Orientação médica inicial e encaminhamento para especialistas",
    ],
    benefits: [
      "Tempo adequado de consulta sem pressa para escutar suas queixas",
      "Visão holística da saúde física, emocional e do estilo de vida",
      "Prescrições claras e esclarecimento de todas as dúvidas",
      "Ambiente acolhedor e seguro no coração de Juatuba",
    ],
    preparo:
      "Traga seus exames recentes, receitas e uma lista dos medicamentos de uso contínuo para uma avaliação detalhada.",
    faq: {
      q: "Com que frequência devo consultar um clínico geral?",
      a: "Recomenda-se realizar uma consulta de check-up preventivo ao menos uma vez ao ano, ou sempre que houver sintomas que exijam investigação diagnóstica.",
    },
  },
  {
    id: "pediatria",
    title: "Pediatria & Puericultura",
    category: "mulher_infantil",
    badge: "Amor & Atenção Infantil",
    shortDesc:
      "Acompanhamento afetuoso do desenvolvimento, crescimento, vacinação e saúde do bebê, da criança e do adolescente.",
    tag: "Saúde da Criança",
    fullDesc:
      "O atendimento pediátrico na Vivália é reconhecido pelo carinho e paciência com os pequenos. Acompanhamos cada fase do crescimento da criança, desde os primeiros dias de vida com a puericultura, orientações sobre amamentação, introdução alimentar saudável, calendário vacinal, até o tratamento ágil de viroses e infecções respiratórias comuns da infância.",
    indications: [
      "Acompanhamento regular de puericultura do recém-nascido e lactente",
      "Monitoramento de ganho de peso, estatura e marcos do desenvolvimento",
      "Febre, tosse, viroses, resfriados, alergias e infecções respiratórias",
      "Dúvidas sobre sono, aleitamento materno e introdução alimentar",
    ],
    benefits: [
      "Ambiente lúdico e tranquilo que reduz o estresse da consulta para a criança",
      "Médica atenciosa e paciente que escuta com sensibilidade os pais",
      "Orientações preventivas que trazem segurança e tranquilidade à família",
      "Acolhimento elogiado por mães de Juatuba e região",
    ],
    preparo:
      "Traga a Caderneta de Vacinação da criança e anote dúvidas sobre a rotina, sono e alimentação para esclarecer durante a consulta.",
    faq: {
      q: "Qual a periodicidade das consultas do bebê nos primeiros meses?",
      a: "No primeiro ano de vida, as consultas são mensais até os 6 meses e depois a cada dois meses até completar 1 ano, garantindo um acompanhamento minucioso do crescimento.",
    },
  },
  {
    id: "cardiologia",
    title: "Cardiologia & Saúde do Coração",
    category: "clinicas",
    badge: "Prevenção Cardiovascular",
    shortDesc:
      "Prevenção e tratamento de doenças cardíacas, arritmias, controle pressórico e risco cirúrgico cardiovascular.",
    tag: "Coração & Vasos",
    fullDesc:
      "O serviço de cardiologia da Vivália oferece avaliação cardiológica minuciosa voltada à prevenção de infartos, controle rigoroso da pressão arterial, diagnóstico de alterações no ritmo cardíaco e liberação para atividades físicas e cirurgias com total segurança diagnóstica.",
    indications: [
      "Sensação de aperto, dor no peito ou palpitações cardíacas",
      "Histórico familiar precoce de infarto ou doenças cardiovasculares",
      "Controle de colesterol alto, triglicerídeos e hipertensão arterial",
      "Avaliação de risco cirúrgico pré-operatório e aptidão para exercícios",
    ],
    benefits: [
      "Avaliação personalizada do perfil de risco cardiovascular individual",
      "Planejamento de mudanças de estilo de vida aliadas a terapias modernas",
      "Laudos e relatórios ágeis para cirurgias e procedimentos",
      "Orientação médica preventiva que preserva a sua longevidade",
    ],
    preparo:
      "Não ingerir bebidas energéticas ou excesso de cafeína no dia da consulta e levar histórico de exames laboratoriais ou eletrocardiogramas anteriores.",
    faq: {
      q: "Quando devo procurar um cardiologista pela primeira vez?",
      a: "Homens a partir dos 40 anos e mulheres a partir dos 45 anos (ou antes, se houver histórico familiar de problemas cardíacos precoces) devem realizar consulta preventiva regular.",
    },
  },
  {
    id: "ginecologia",
    title: "Ginecologia & Saúde Integral da Mulher",
    category: "mulher_infantil",
    badge: "Cuidado Feminino",
    shortDesc:
      "Atendimento sensível e privativo para todas as fases da vida da mulher, exames preventivos, contracepção e menopausa.",
    tag: "Saúde Feminina",
    fullDesc:
      "Um espaço seguro, ético e empático para cuidar da saúde da mulher. Nossas consultas ginecológicas abrangem exames preventivos (como preventivo/Papanicolau), orientação contraceptiva individualizada, tratamento de infecções ginecológicas, manejo da endometriose, climatério e reposição hormonal com respaldo técnico.",
    indications: [
      "Exame preventivo anual e rastreamento do colo do útero",
      "Cólicas intensas, irregularidades menstruais e suspeita de endometriose",
      "Planejamento reprodutivo, contracepção e métodos de barreira",
      "Sintomas da menopausa, ondas de calor e alterações hormonais",
    ],
    benefits: [
      "Atendimento privativo, humanizado e com escuta sem julgamentos",
      "Explicações claras sobre as opções de tratamento disponíveis",
      "Acompanhamento em todas as fases da juventude à maturidade",
      "Ambiente higienizado e confortável",
    ],
    preparo:
      "Para realização de preventivo, recomenda-se abstinência sexual e não utilizar duchas ou cremes vaginais nas 48 horas anteriores.",
    faq: {
      q: "A partir de que idade a mulher deve consultar o ginecologista?",
      a: "Recomenda-se a primeira consulta na adolescência, logo após a primeira menstruação, para sanar dúvidas e iniciar o acompanhamento preventivo da saúde reprodutiva.",
    },
  },
  {
    id: "ortopedia",
    title: "Ortopedia & Aparelho Locomotor",
    category: "clinicas",
    badge: "Alívio da Dor & Mobilidade",
    shortDesc:
      "Diagnóstico e tratamento de dores articulares, coluna vertebral, tendinites, artrose e lesões musculoesqueléticas.",
    tag: "Ossos & Articulações",
    fullDesc:
      "A especialidade de ortopedia visa restabelecer o movimento, a força e o alívio das dores que limitam a rotina. Tratamos dores crônicas na coluna, bursites, tendinites, desgastes articulares (artrose) em joelhos e ombros, além de reabilitação pós-traumática.",
    indications: [
      "Dores agudas ou crônicas na lombar, coluna cervical ou ciático",
      "Dor, estalo ou limitação de movimento no joelho, quadril e ombro",
      "Entorses, lesões ligamentares ou recuperação de contusões",
      "Artrose, artrite, tendinites por esforço repetitivo (LER/DORT)",
    ],
    benefits: [
      "Tratamentos conservadores modernos para preservação das articulações",
      "Combinação de terapia medicamentosa, infiltrações e fisioterapia indicada",
      "Recuperação da qualidade de vida e mobilidade sem sofrimento",
      "Atendimento ágil para casos de dor que não podem esperar",
    ],
    preparo:
      "Traga exames de imagem anteriores (raio-x, tomografias ou ressonâncias) e roupas confortáveis que facilitem o exame físico da articulação afetada.",
    faq: {
      q: "Quando a dor nas costas requer avaliação imediata?",
      a: "Se a dor irradiar para as pernas com dormência, formigamento, fraqueza muscular ou persistir por mais de uma semana sem melhora, consulte um ortopedista.",
    },
  },
  {
    id: "geriatria",
    title: "Geriatria & Cuidado com a Melhor Idade",
    category: "familia",
    badge: "Respeito & Longevidade",
    shortDesc:
      "Atenção especializada na saúde, autonomia e bem-estar do idoso, com carinho, paciência e acompanhamento familiar.",
    tag: "Saúde do Idoso",
    fullDesc:
      "Celebrada nos depoimentos dos nossos pacientes pelo carinho com avós e idosos (como no atendimento do Dr. Elissander), nossa abordagem geriátrica prioriza a qualidade de vida, prevenção de quedas, ajuste minucioso de múltiplos medicamentos, memória e estímulo à autonomia física e mental.",
    indications: [
      "Acompanhamento preventivo integral a partir dos 60 anos",
      "Uso de muitos medicamentos (polifarmácia) que necessitam de ajuste",
      "Queixas de perda de memória, confusão mental ou alterações do humor",
      "Prevenção de quedas, perda de força muscular e desequilíbrio",
    ],
    benefits: [
      "Tempo estendido de escuta e acolhimento afetuoso ao paciente idoso",
      "Comunicação clara e próxima com os familiares e cuidadores",
      "Foco na manutenção da independência e bem-estar diário",
      "Consultório com fácil acessibilidade e conforto absoluto",
    ],
    preparo:
      "Solicitamos que o idoso venha acompanhado de familiar ou cuidador e traga todas as receitas e caixas dos medicamentos em uso.",
    faq: {
      q: "Por que o atendimento geriátrico é diferente da clínica comum?",
      a: "O geriatra avalia a interação de múltiplos problemas e remédios simultâneos, equilibrando o tratamento para evitar efeitos colaterais e priorizar a vitalidade do paciente.",
    },
  },
  {
    id: "dermatologia",
    title: "Dermatologia Clínica & Cuidado da Pele",
    category: "clinicas",
    badge: "Pele, Cabelos & Unhas",
    shortDesc:
      "Diagnóstico e controle de doenças da pele, alergias, acne, melasma, queda de cabelo e mapeamento preventivo de sinais.",
    tag: "Dermatologia",
    fullDesc:
      "A pele é o maior órgão do corpo e merece cuidados médicos especializados. Na Vivália, você conta com atendimento dermatológico ético para tratar alergias, psoríase, dermatites, queda capilar, micoses e avaliar manchas ou pintas suspeitas de câncer de pele.",
    indications: [
      "Pintas, manchas escuras ou sinais na pele que mudaram de formato ou cor",
      "Queda excessiva de cabelo, afinamento ou alterações no couro cabeludo",
      "Acne severa, cravos inflamatórios e cicatrizes",
      "Dermatite, eczema, psoríase, coceiras persistentes e micoses",
    ],
    benefits: [
      "Avaliação dermatoscópica minuciosa de cada pinta e lesão cutânea",
      "Tratamentos comprovados cientificamente e seguros para a pele",
      "Planos de cuidados diários adaptados ao seu tipo de pele e rotina",
      "Atendimento com respeito, empatia e sem promessas irrealistas",
    ],
    preparo:
      "Compareça à consulta sem maquiagem ou esmaltes escuros caso queira avaliar a face ou as unhas.",
    faq: {
      q: "Com qual regularidade devo examinar minhas pintas?",
      a: "O mapeamento dermatológico de sinais deve ser feito anualmente, ou antes se notar qualquer sinal que cresça rápido, sangre ou mude de cor.",
    },
  },
  {
    id: "nutricao",
    title: "Nutrição Clínica & Reeducação Alimentar",
    category: "familia",
    badge: "Saúde Metabólica",
    shortDesc:
      "Planos alimentares personalizados para perda de peso sustentável, controle de glicemia, colesterol e disposição.",
    tag: "Nutrição & Bem-Estar",
    fullDesc:
      "Alimentação que cura e transforma. Nosso acompanhamento nutricional não foca em dietas restritivas ou passageiras, mas em uma reeducação alimentar prática, gostosa e viável na sua rotina diária em Juatuba, para você conquistar energia, saúde digestiva e atingir suas metas corporais.",
    indications: [
      "Emagrecimento com preservação de massa magra e sem efeito sanfona",
      "Controle nutricional para diabetes, gordura no fígado e colesterol",
      "Melhora de sintomas digestivos (azia, gastrite, refluxo e constipação)",
      "Nutrição esportiva para rendimento e hipertrofia",
    ],
    benefits: [
      "Cardápios adaptados à sua rotina real, orçamento e preferências",
      "Avaliação da composição corporal e metas progressivas",
      "Apoio constante para construir uma relação saudável com a comida",
      "Integração direta com o médico assistente da clínica",
    ],
    preparo:
      "Anote nos três dias anteriores tudo o que costuma comer e beber para auxiliar a análise detalhada dos seus hábitos.",
    faq: {
      q: "Preciso cortar tudo o que gosto para emagrecer com saúde?",
      a: "Não! A reeducação alimentar sustentável ensina equilíbrio e proporções, permitindo que você aprecie suas comidas preferidas sem culpa.",
    },
  },
  {
    id: "psicologia",
    title: "Psicologia Clínica & Saúde Emocional",
    category: "familia",
    badge: "Acolhimento & Escuta",
    shortDesc:
      "Psicoterapia individual para ansiedade, depressão, estresse, luto e desenvolvimento pessoal com total sigilo.",
    tag: "Saúde Mental",
    fullDesc:
      "Cuidar da mente é essencial para o corpo viver bem. Oferecemos um espaço terapêutico acolhedor, ético e confidencial para ajudar você a compreender suas emoções, superar momentos difíceis, lidar com a ansiedade e construir recursos para viver com mais leveza e equilíbrio.",
    indications: [
      "Ansiedade excessiva, crises de pânico, medos ou pensamentos acelerados",
      "Tristeza profunda, falta de ânimo, esgotamento mental e depressão",
      "Dificuldades nos relacionamentos, conflitos familiares ou término",
      "Sobrecarga de trabalho (burnout), luto e momentos de transição de vida",
    ],
    benefits: [
      "Ambiente privativo com sigilo profissional rigoroso (Código de Ética)",
      "Escuta acolhedora, humana e sem qualquer julgamento",
      "Técnicas terapêuticas para regulação emocional e autoconhecimento",
      "Consultas presenciais no coração de Juatuba",
    ],
    preparo:
      "Não há preparo prévio. Basta vir com a mente aberta para falar sobre seus sentimentos e desafios no seu próprio ritmo.",
    faq: {
      q: "Qual a duração média de uma sessão de psicoterapia?",
      a: "As sessões têm duração padrão de aproximadamente 50 minutos e são agendadas em horário exclusivo para o seu conforto.",
    },
  },
  {
    id: "otorrino",
    title: "Otorrinolaringologia & Cabeça e Pescoço",
    category: "clinicas",
    badge: "Ouvido, Nariz & Garganta",
    shortDesc:
      "Diagnóstico e tratamento de rinite, sinusite, zumbido, perda auditiva, ronco, apneia e alterações da voz com a Dra. Nicole Pardini.",
    tag: "Otorrino",
    fullDesc:
      "A consulta de Otorrinolaringologia com a Dra. Nicole Pardini na Clínica Vivália trata problemas de ouvido, nariz e garganta em crianças e adultos. Investigamos causas de infecções respiratórias recorrentes, dores de garganta, desvio de septo, rinites alérgicas, sinusites, tonturas (labirintite) e distúrbios do sono.",
    indications: [
      "Rinite alérgica persistente, obstrução nasal crônica e sinusite",
      "Perda de audição, zumbido no ouvido, dor ou sensação de ouvido tapado",
      "Dores de garganta frequentes, rouquidão contínua e amigdalite",
      "Ronco noturno, respiração pela boca e engasgos durante o sono",
    ],
    benefits: [
      "Avaliação especializada com a Dra. Nicole Pardini",
      "Planos terapêuticos modernos para alívio respiratório e auditivo",
      "Tratamento humanizado para crianças e adultos",
      "Acompanhamento clínico e cirúrgico seguro",
    ],
    preparo:
      "Traga exames anteriores (audiometria, raio-x ou tomografias da face) caso já tenha realizado.",
    faq: {
      q: "Quando a rouquidão exige consulta com o otorrino?",
      a: "Se a rouquidão durar mais de 15 dias sem melhora, uma avaliação da laringe e cordas vocais é fundamental para descartar lesões.",
    },
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia & Reabilitação Funcional",
    category: "clinicas",
    badge: "Recuperação & Alívio",
    shortDesc:
      "Tratamento da dor, reabilitação motora, alívio de tensões e recuperação pós-lesão com cuidado integral.",
    tag: "Reabilitação",
    fullDesc:
      "O atendimento de fisioterapia na Clínica Vivália é planejado de forma individualizada para restaurar sua mobilidade, aliviar dores musculares e articulares, recuperar a postura e proporcionar qualidade de vida com exercícios terapêuticos e técnicas manuais.",
    indications: [
      "Dores musculares e articulares crônicas ou agudas",
      "Reabilitação pós-fratura, cirurgia ou entorse",
      "Correção postural e alívio de tensões diárias",
      "Fortalecimento muscular e prevenção de limitações",
    ],
    benefits: [
      "Sessões personalizadas e acompanhamento próximo",
      "Técnicas manuais e cinesioterapia direcionadas ao seu caso",
      "Recuperação progressiva da autonomia e conforto físico",
      "Integração com a equipe médica da clínica",
    ],
    preparo:
      "Venha com roupas confortáveis que facilitem o movimento e tragam eventuais exames de imagem anteriores.",
    faq: {
      q: "Quantas sessões de fisioterapia são necessárias?",
      a: "A quantidade varia de acordo com a avaliação fisioterapêutica inicial e a evolução do quadro clínico de cada paciente.",
    },
  },
  {
    id: "exames-checkup",
    title: "Exames Preventivos & Check-up Diagnóstico",
    category: "diagnosticos",
    badge: "Precisão & Confiabilidade",
    shortDesc:
      "Coletas de rotina, exames preventivos e encaminhamentos integrados para garantir diagnósticos certeiros.",
    tag: "Diagnósticos",
    fullDesc:
      "A agilidade no diagnóstico é decisiva para o sucesso do tratamento. Na Clínica Vivália, facilitamos o seu cuidado com a realização de exames preventivos essenciais e integração direta entre os médicos da equipe para que você não perca tempo e receba orientações rápidas.",
    indications: [
      "Exames de sangue, urina e fezes de rotina anual",
      "Avaliação de glicemia, função renal, hepática e tireoidiana",
      "Eletrocardiograma e risco cirúrgico para procedimentos",
      "Rastreamento preventivo oncológico inicial",
    ],
    benefits: [
      "Ambiente asséptico, organizado e impecavelmente limpo",
      "Resultados com análise médica integrada pelo seu doutor",
      "Equipe de enfermagem e atendimento treinada para cuidado delicado",
      "Praticidade de consultar e receber orientações em um só lugar",
    ],
    preparo:
      "Orientações específicas sobre tempo de jejum e coleta são informadas no momento do agendamento pelo WhatsApp da clínica.",
    faq: {
      q: "Posso agendar meus exames junto com a consulta médica?",
      a: "Sim! Nossa equipe organiza os agendamentos para otimizar sua visita à clínica, garantindo praticidade para você e sua família.",
    },
  },
];

// Depoimentos Reais dos Pacientes no Google Meu Negócio da Clínica Vivália (5,0 ★ · 71 avaliações)
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
    author: "Alice Santos",
    role: "Paciente da Clínica Vivália",
    rating: 5,
    text: "Sem defeitos! Atendimento impecável desde a recepcionista até o médico! Lugar limpo e organizado. Qualquer valor que cobrar ainda seria barato. Parabéns!",
    source: "Google Reviews",
    tag: "Atendimento Impecável",
    date: "1 ano atrás",
  },
  {
    author: "Daniella Saliba",
    role: "Paciente da Clínica Vivália",
    rating: 5,
    text: "Os médicos da clínica são verdadeiros especialistas, demonstrando conhecimento, empatia e dedicação. O ambiente é tranquilo, confortável e impecavelmente limpo, proporcionando uma experiência de atendimento médico de alta qualidade. A combinação de profissionais excelentes e infraestrutura excepcional torna a clínica uma referência em saúde. Recomendo!",
    source: "Google Reviews",
    tag: "Referência em Saúde",
    date: "2 anos atrás",
  },
  {
    author: "Leo Souza",
    role: "Paciente do Dr. Elissander",
    rating: 5,
    text: "Ótimo atendimento, agilidade, pontualidade e um médico excelente Dr Elissander.",
    source: "Google Reviews",
    tag: "Agilidade & Pontualidade",
    date: "3 meses atrás",
  },
  {
    author: "LUCAS SANTOS",
    role: "Local Guide Google",
    rating: 5,
    text: "Excelente atendimento. Havia tempos que a cidade precisava de uma clínica que tratasse sua gente com amor, carinho e atenção. Super indico.",
    source: "Google Reviews",
    tag: "Amor & Carinho com a Cidade",
    date: "2 anos atrás",
  },
  {
    author: "Isabela",
    role: "Familiar de Paciente",
    rating: 5,
    text: "Minha avó foi atendida pelo Dr. Elissander e estamos muito satisfeitas e agradecidas tanto pelo profissionalismo, quanto pela capacidade técnica e pelo carinho.",
    source: "Google Reviews",
    tag: "Carinho com Idosos",
    date: "1 ano atrás",
  },
  {
    author: "jessica poliane",
    role: "Mãe de Paciente Pediátrico",
    rating: 5,
    text: "Atendimento, estrutura, tudo com excelente qualidade. Profissionais sensacionais, meu filho amou sua nova pediatra!",
    source: "Google Reviews",
    tag: "Pediatria com Amor",
    date: "1 ano atrás",
  },
  {
    author: "Glaucilaine",
    role: "Paciente Vivália",
    rating: 5,
    text: "Local agradável, excelente profissional, desde a recepção até o médico.",
    source: "Google Reviews",
    tag: "Local Agradável",
    date: "3 meses atrás",
  },
  {
    author: "Jessica Fonseca",
    role: "Paciente Vivália",
    rating: 5,
    text: "Excelente atendimento, profissionais qualificados e ambiente muito aconchegante 🥰",
    source: "Google Reviews",
    tag: "Ambiente Aconchegante",
    date: "2 anos atrás",
  },
  {
    author: "Raquel Rodrigues",
    role: "Paciente Vivália",
    rating: 5,
    text: "Clínica maravilhosa!! Profissionais com grande experiência. Ambiente super limpo, aconchegante. Excelente atendimento. Muito atenciosos. Localização de fácil acesso.",
    source: "Google Reviews",
    tag: "Fácil Acesso & Limpeza",
    date: "2 anos atrás",
  },
  {
    author: "Lisye Saliba",
    role: "Paciente Vivália",
    rating: 5,
    text: "Além de profissionais incríveis, a clínica oferece um atendimento humanizado e muita comodidade para o paciente.",
    source: "Google Reviews",
    tag: "Atendimento Humanizado",
    date: "2 anos atrás",
  },
  {
    author: "Bárbara Dias",
    role: "Paciente Vivália",
    rating: 5,
    text: "Clínica super moderna, ambiente muito agradável e com ótimos profissionais. Super recomendo!",
    source: "Google Reviews",
    tag: "Super Moderna",
    date: "2 anos atrás",
  },
  {
    author: "Ludmila Vale Vidal",
    role: "Paciente Vivália",
    rating: 5,
    text: "Estrutura física maravilhosa e possui uma excelente equipe de profissionais!",
    source: "Google Reviews",
    tag: "Estrutura Física Maravilhosa",
    date: "2 anos atrás",
  },
];

// Perguntas Frequentes sobre a Clínica Vivália
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: "Como funciona o agendamento de consultas na Clínica Vivália?",
    answer:
      "O agendamento é feito de forma rápida, acolhedora e personalizada direto pelo nosso WhatsApp oficial: (31) 99662-2315. Nossa equipe recepciona sua mensagem, verifica os horários mais convenientes para você e sua família e fornece todas as orientações necessárias.",
    category: "Agendamento",
  },
  {
    question: "A Clínica Vivália atende convênios ou somente consultas particulares?",
    answer:
      "Oferecemos consultas particulares com valores justos e acessíveis, além de trabalharmos com parcerias e convênios para atender os moradores de Juatuba e região. Entre em contato pelo WhatsApp enviando a foto do seu plano para confirmarmos o atendimento imediatamente.",
    category: "Convênios",
  },
  {
    question: "Quais são os médicos e especialidades presentes na clínica?",
    answer:
      "A Clínica Vivália conta com médicos experientes como o Dr. Alessandro Galvão e o Dr. Elissander, além de especialistas dedicados em Pediatria, Cardiologia, Ginecologia, Ortopedia, Geriatria, Dermatologia, Nutrição Clínica, Psicologia e exames preventivos.",
    category: "Corpo Clínico",
  },
  {
    question: "Onde a Clínica Vivália fica localizada em Juatuba?",
    answer:
      "Estamos estrategicamente localizados no Centro de Juatuba - MG, na Av. Tânus Saliba, 71A. O local conta com fácil acesso para quem chega a pé, de carro ou de transporte público, além de estacionamento nas imediações e total acessibilidade.",
    category: "Localização",
  },
  {
    question: "Quais são os horários de atendimento da clínica?",
    answer:
      "Nosso atendimento presencial ocorre de segunda a sexta-feira a partir das 08h00. O canal de agendamento no WhatsApp também está à disposição para dúvidas e reserva de consultas.",
    category: "Horários",
  },
  {
    question: "Como é a estrutura da clínica para crianças e idosos?",
    answer:
      "Nossa clínica foi cuidadosamente planejada para proporcionar calma e aconchego. Dispomos de corredores amplos, ambiente climatizado, higienização rigorosa e consultórios preparados para receber desde recém-nascidos até a melhor idade com respeito, comodidade e acolhimento.",
    category: "Estrutura",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "todas" | "familia" | "mulher_infantil" | "clinicas" | "diagnosticos"
  >("todas");
  const [activeModalSpecialty, setActiveModalSpecialty] =
    useState<SpecialtyService | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSpecialties =
    selectedCategory === "todas"
      ? SPECIALTY_SERVICES
      : SPECIALTY_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#f8faf9] text-[#0d1e1c] selection:bg-[#066e69] selection:text-white">
      {/* 1. TOPBAR DE CREDIBILIDADE MÉDICA OFICIAL */}
      <aside
        aria-label="Avisos e Informações de Atendimento"
        className="bg-[#051514] text-slate-300 text-[12px] border-b border-[#1e3e3b] py-2 px-4 transition-all"
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
              <MapPin size={13} className="text-[#d8a46b]" />
              <span className="text-slate-300">
                Av. Tânus Saliba, 71A - Centro · Juatuba - MG
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-[#d8a46b]" />
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
              <InstagramIcon size={13} className="text-[#d8a46b]" />
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

      {/* 2. HEADER NAVEGAÇÃO PRINCIPAL */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8e7] py-3"
            : "bg-white border-b border-[#edf2f1] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Oficial Clínica Vivália (Exatamente a imagem enviada) */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066e69] rounded-lg flex-shrink-0 py-1"
            aria-label="Clínica Vivália - Página Inicial"
          >
            <Image
              src={LOGO_HORIZONTAL_SRC}
              alt="Clínica Vivália — Clínica Médica"
              width={220}
              height={55}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Links de navegação desktop */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-[13px] xl:text-[13.5px] font-semibold text-slate-700">
            <a
              href="#especialidades"
              className="hover:text-[#066e69] transition-colors py-1 whitespace-nowrap"
            >
              Especialidades & Exames
            </a>
            <a
              href="#sobre"
              className="hover:text-[#066e69] transition-colors py-1 whitespace-nowrap"
            >
              A Clínica
            </a>
            <a
              href="#medicos"
              className="hover:text-[#066e69] transition-colors py-1 whitespace-nowrap"
            >
              Corpo Clínico
            </a>
            <a
              href="#estrutura"
              className="hover:text-[#066e69] transition-colors py-1 whitespace-nowrap"
            >
              Estrutura & Ambiente
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#066e69] transition-colors py-1 whitespace-nowrap"
            >
              Depoimentos (5,0 ★)
            </a>
            <a
              href="#convenios"
              className="hover:text-[#066e69] transition-colors py-1 whitespace-nowrap"
            >
              Convênios
            </a>
            <a
              href="#faq"
              className="hover:text-[#066e69] transition-colors py-1 whitespace-nowrap"
            >
              Dúvidas
            </a>
          </nav>

          {/* Ação CTA Direta no Header */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de verificar horários disponíveis para consulta na Clínica Vivália."
              )}
              target="_blank"
              variant="whatsapp"
              size="sm"
              className="shadow-sm font-bold whitespace-nowrap px-4 py-2 text-[12.5px]"
            >
              <WhatsAppIcon size={15} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Agendar Consulta</span>
            </GlowingButton>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#066e69] focus:outline-none"
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
              className="lg:hidden bg-white border-b border-[#e2e8e7] px-6 py-5 space-y-4 shadow-lg"
            >
              <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-[15px]">
                <a
                  href="#especialidades"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#066e69]"
                >
                  Especialidades & Exames
                </a>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#066e69]"
                >
                  A Clínica (Um Sonho em Juatuba)
                </a>
                <a
                  href="#medicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#066e69]"
                >
                  Corpo Clínico & Médicos
                </a>
                <a
                  href="#estrutura"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#066e69]"
                >
                  Estrutura na Av. Tânus Saliba, 71A
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#066e69]"
                >
                  Avaliações de Pacientes (5,0 ★ no Google)
                </a>
                <a
                  href="#convenios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#066e69]"
                >
                  Convênios & Particular
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#066e69]"
                >
                  Perguntas Frequentes
                </a>
              </nav>

              <div className="pt-3 border-t border-[#f0f4f3] flex flex-col gap-2.5">
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
                  Av. Tânus Saliba, 71A - Centro · Juatuba - MG
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION DE ALTA CONVERSÃO & HUMANIZAÇÃO */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-[#f7faf9] to-[#f0f6f5]">
        {/* Glow de fundo orgânico e suave */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Coluna Texto & Proposta de Valor */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f8f7] border border-[#cde6e4] text-[#066e69] text-[12px] font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#066e69]" />
                ACOLHIMENTO HUMANIZADO E ÉTICO · CENTRO DE JUATUBA - MG
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Cuidado médico de excelência com o{" "}
                <span className="text-[#066e69] underline decoration-[#b3844e] underline-offset-4">
                  acolhimento humano
                </span>{" "}
                que você e sua família merecem.
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                A realização de um grande sonho no coração de Juatuba. Na{" "}
                <strong className="text-[#066e69]">Clínica Vivália</strong>, unimos
                médicos especialistas dedicados, ambiente aconchegante e
                infraestrutura moderna para oferecer a você e à sua família o
                melhor em atendimento de saúde, com escuta atenta, respeito e afeto.
              </p>

              {/* Badges de Credenciais Rápidas */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#e2e8e7] shadow-2xs">
                  <Star size={18} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                  <span className="text-[12px] font-bold text-slate-800">
                    5,0 ★ Google (71 avaliações)
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#e2e8e7] shadow-2xs">
                  <HeartHandshake size={18} className="text-[#066e69] flex-shrink-0" />
                  <span className="text-[12px] font-bold text-slate-800">
                    Atendimento Humanizado
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#e2e8e7] shadow-2xs col-span-2 sm:col-span-1">
                  <MapPin size={18} className="text-[#b3844e] flex-shrink-0" />
                  <span className="text-[12px] font-bold text-slate-800">
                    Av. Tânus Saliba, 71A
                  </span>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta na Clínica Vivália em Juatuba."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="font-bold text-base shadow-sm"
                >
                  <WhatsAppIcon size={18} />
                  <span>Agendar Consulta no WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#especialidades"
                  variant="outline"
                  size="lg"
                  className="font-bold text-slate-800"
                >
                  <Stethoscope size={18} className="text-[#066e69]" />
                  <span>Ver Especialidades & Exames</span>
                </GlowingButton>
              </div>

              {/* Alerta de facilidade de agendamento */}
              <div className="flex items-center gap-2 text-[12.5px] text-slate-600 pt-1">
                <CheckCircle2 size={15} className="text-[#16a34a] flex-shrink-0" />
                <span>
                  Atendimento ágil pelo WhatsApp: tire dúvidas e escolha o melhor dia e horário sem filas.
                </span>
              </div>
            </div>

            {/* Coluna Visual: Composé com Fotos Reais da Clínica e do Médico */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Card Principal: Foto Oficial de Apresentação */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <div className="relative h-[420px] sm:h-[480px] w-full">
                    <Image
                      src={DOCTOR_PHOTO_SRC}
                      alt="Dr. Alessandro Galvão e Equipe Médica da Clínica Vivália em Juatuba - MG"
                      fill
                      priority
                      className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051514]/90 via-[#051514]/20 to-transparent" />
                  </div>

                  {/* Informações sobrepostas na imagem */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#066e69] text-white text-[10px] font-black uppercase tracking-wider">
                        UM SONHO SE TORNANDO REALIDADE
                      </span>
                      <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                        ★ 5,0 no Google
                      </span>
                    </div>
                    <p className="font-heading font-black text-xl text-white leading-tight">
                      Clínica Vivália · Centro Médico
                    </p>
                    <p className="text-slate-200 text-xs mt-1 flex items-center gap-1">
                      <MapPin size={12} className="text-[#d8a46b] flex-shrink-0" />
                      Av. Tânus Saliba, 71A - Centro · Juatuba - MG
                    </p>
                  </div>
                </div>

                {/* Badge Flutuante: Foto do Espaço da Clínica (Corredor Aconchegante) */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#cde6e4] rounded-xl p-2.5 shadow-xl max-w-[260px] hidden sm:flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
                    <Image
                      src={CORRIDOR_PHOTO_SRC}
                      alt="Espaço Aconchegante da Clínica Vivália"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#066e69]">
                      Ambiente Acolhedor
                    </div>
                    <p className="text-[11px] text-slate-700 leading-tight font-medium mt-0.5">
                      Estrutura moderna, calma e impecavelmente limpa.
                    </p>
                  </div>
                </div>

                {/* Badge Flutuante: Nota Máxima no Google */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#0c201e] text-white rounded-xl p-3 shadow-xl border border-[#1e3e3b] hidden sm:block">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-black text-white mt-1">
                    5,0 ★ Nota Máxima
                  </div>
                  <div className="text-[10px] text-slate-400">
                    71 avaliações no Google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE MÉTRICAS & CREDIBILIDADE MÉDICA */}
      <section className="bg-[#051514] text-white border-y border-[#1e3e3b] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-amber-400">
                5,0 ★
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Avaliação no Google
              </div>
              <div className="text-[11px] text-slate-400">
                71 avaliações verificadas de pacientes
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-[#d8a46b]">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Acolhimento Humanizado
              </div>
              <div className="text-[11px] text-slate-400">
                Cuidado empático da recepção ao médico
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white">
                +10
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Especialidades & Cuidados
              </div>
              <div className="text-[11px] text-slate-400">
                Cuidado integral para todas as idades
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-[#14a39b]">
                Juatuba
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                No Coração da Cidade
              </div>
              <div className="text-[11px] text-slate-400">
                Av. Tânus Saliba, 71A - Centro
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATÁLOGO INTERATIVO DE ESPECIALIDADES & EXAMES */}
      <section
        id="especialidades"
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="eyebrow justify-center">CUIDADO INTEGRAL & ESPECIALIZADO</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Especialidades Médicas & Serviços de Saúde
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Consulte as especialidades médicas e serviços clínicos disponíveis na
            Clínica Vivália em Juatuba. Clique em qualquer especialidade para ver
            detalhes, orientações e agendar sua consulta.
          </p>

          {/* Filtros por Categoria */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "todas", label: "Todas as Especialidades (12)" },
              { id: "familia", label: "Medicina da Família & Idoso (4)" },
              { id: "mulher_infantil", label: "Pediatria & Mulher (2)" },
              { id: "clinicas", label: "Especialidades Clínicas (5)" },
              { id: "diagnosticos", label: "Exames & Check-up (1)" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  setSelectedCategory(
                    cat.id as
                      | "todas"
                      | "familia"
                      | "mulher_infantil"
                      | "clinicas"
                      | "diagnosticos"
                  )
                }
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#066e69] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-[#e2e8e7] hover:border-[#cde6e4] hover:bg-[#f0f8f7]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Cards das Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((specialty) => (
            <div
              key={specialty.id}
              className="card-clinical rounded-xl p-6 flex flex-col justify-between hover:border-[#066e69] transition-all group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#f0f8f7] text-[#066e69] border border-[#cde6e4]">
                    {specialty.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-[#b3844e]">
                    {specialty.badge}
                  </span>
                </div>

                <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-[#066e69] transition-colors leading-snug">
                  {specialty.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                  {specialty.shortDesc}
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Principais Atuações:
                  </div>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    {specialty.indications.slice(0, 2).map((ind, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2
                          size={13}
                          className="text-[#066e69] flex-shrink-0 mt-0.5"
                        />
                        <span className="line-clamp-1">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#f0f4f3] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalSpecialty(specialty)}
                  className="text-xs font-bold text-slate-800 hover:text-[#066e69] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight size={13} />
                </button>

                <GlowingButton
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar uma consulta de ${specialty.title} na Clínica Vivália.`
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

      {/* MODAL DETALHADO DA ESPECIALIDADE */}
      <AnimatePresence>
        {activeModalSpecialty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#cde6e4] p-6 sm:p-8 space-y-6 relative"
            >
              {/* Botão Fechar */}
              <button
                type="button"
                onClick={() => setActiveModalSpecialty(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar detalhes da especialidade"
              >
                <X size={20} />
              </button>

              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-[#f0f8f7] text-[#066e69] text-xs font-bold border border-[#cde6e4]">
                  {activeModalSpecialty.tag} · {activeModalSpecialty.badge}
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {activeModalSpecialty.title}
                </h3>
              </div>

              <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <p>{activeModalSpecialty.fullDesc}</p>

                {/* Indicações */}
                <div className="bg-[#f8faf9] p-4 rounded-xl border border-[#e2e8e7] space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#066e69]" />
                    Quando procurar esta especialidade:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeModalSpecialty.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#066e69] mt-1.5 flex-shrink-0" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diferenciais Vivália */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Diferenciais do Cuidado na Clínica Vivália:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeModalSpecialty.benefits.map((ben, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-[#f0f8f7] border border-[#cde6e4] flex items-start gap-2"
                      >
                        <Shield size={14} className="text-[#066e69] flex-shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orientações */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                  <h4 className="font-bold text-amber-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Clock size={15} className="text-amber-700" />
                    Orientações para o Dia da Consulta:
                  </h4>
                  <p className="text-xs text-amber-900/90 leading-relaxed">
                    {activeModalSpecialty.preparo}
                  </p>
                </div>

                {/* Dúvida Frequente */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs">
                    Dúvida comum: {activeModalSpecialty.faq.q}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {activeModalSpecialty.faq.a}
                  </p>
                </div>
              </div>

              {/* Ações do Modal */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalSpecialty(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Fechar Janela
                </button>

                <GlowingButton
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar uma consulta de ${activeModalSpecialty.title} na Clínica Vivália.`
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full sm:w-auto font-bold"
                >
                  <WhatsAppIcon size={16} />
                  <span>Agendar esta Consulta no WhatsApp</span>
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. SOBRE A CLÍNICA VIVÁLIA: UM SONHO SE TORNANDO REALIDADE */}
      <section
        id="sobre"
        className="py-16 md:py-24 bg-[#0c201e] text-white border-y border-[#1e3e3b] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Foto e Card da Clínica */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#1e3e3b] bg-[#051514] shadow-xl p-6 sm:p-8 space-y-5">
                <div className="w-16 h-16 rounded-xl bg-[#066e69]/20 border border-[#066e69]/40 flex items-center justify-center text-[#14a39b]">
                  <HeartHandshake size={32} />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d8a46b]">
                    NOSSA HISTÓRIA & PROPÓSITO
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    Clínica Vivália
                  </h3>
                  <p className="text-slate-300 font-semibold text-sm">
                    Acolhimento humanizado e ético no coração de Juatuba
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#1e3e3b] text-xs text-slate-300 leading-relaxed">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#14a39b] flex-shrink-0" />
                    <span>Realização de um grande sonho trazido para Juatuba</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#14a39b] flex-shrink-0" />
                    <span>Corpo clínico qualificado e comprometido com o paciente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#14a39b] flex-shrink-0" />
                    <span>Estrutura física acolhedora, limpa e moderna</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#14a39b] flex-shrink-0" />
                    <span>Atendimento elogiado com 5,0 estrelas no Google</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={LINKTREE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#066e69] hover:bg-[#055955] px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Acessar Linktree Oficial da Clínica</span>
                    <ArrowUpRight size={14} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Texto de Apresentação e Humanização */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="eyebrow-dark">UM SONHO SE TORNANDO REALIDADE</div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                A realização deste grande sonho nos trouxe para o coração de{" "}
                <span className="text-[#d8a46b] underline decoration-[#066e69]">Juatuba</span>.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Estamos prontos para oferecer a você e sua família o melhor em
                atendimento de saúde. Acreditamos que a medicina deve ser
                exercida com amor, respeito ao tempo de cada pessoa e rigor ético.
              </p>

              <blockquote className="p-4 rounded-xl bg-[#051514]/80 border-l-4 border-[#b3844e] text-slate-200 text-xs sm:text-sm italic leading-relaxed">
                &ldquo;Priorize sua saúde e bem-estar! Agende sua consulta hoje
                mesmo e dê o primeiro passo para uma vida mais feliz. Nossa equipe de
                profissionais está à sua disposição para proporcionar um atendimento
                humanizado e de máxima qualidade.&rdquo;
                <footer className="mt-2 text-right font-bold text-[#d8a46b] not-italic text-xs">
                  — Equipe Clínica Vivália
                </footer>
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#051514]/60 border border-[#1e3e3b]">
                  <div className="font-heading font-black text-lg text-white">
                    Escuta Paciente & Empática
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Consultas sem correria, onde cada dúvida é explicada com carinho e clareza.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#051514]/60 border border-[#1e3e3b]">
                  <div className="font-heading font-black text-lg text-white">
                    Cuidado para Toda a Família
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Do recém-nascido na pediatria ao idoso, saúde integrada sob o mesmo teto.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com a equipe da Clínica Vivália para agendar uma consulta."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="font-bold text-sm"
                >
                  <WhatsAppIcon size={16} />
                  <span>Falar com Nossa Equipe no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CORPO CLÍNICO: MÉDICOS E ESPECIALISTAS DEDICADOS */}
      <section id="medicos" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="eyebrow justify-center">PROFISSIONAIS QUALIFICADOS</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Corpo Clínico & Equipe Multidisciplinar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Médicos e profissionais elogiados pela comunidade de Juatuba pelo
            conhecimento técnico, pontualidade e gentileza no acolhimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Dr. Elissander Saliba Santos */}
          <div className="card-clinical rounded-2xl p-6 space-y-4 border-t-4 border-t-[#b3844e] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#b3844e] flex items-center justify-center">
                <Heart size={26} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b3844e]">
                  RESPONSÁVEL TÉCNICO
                </span>
                <h3 className="font-heading font-black text-lg text-slate-900">
                  Dr. Elissander Saliba
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Cardiologista & Clínico Geral · CRM-MG 69828
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Médico cardiologista e clínico geral, elogiado pelo acolhimento humano, pontualidade e dedicação a pacientes e idosos. Atua em check-ups cardiológicos, risco cirúrgico e emagrecimento saudável.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de agendar consulta com o Dr. Elissander Saliba na Clínica Vivália."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#b3844e] hover:underline flex items-center gap-1"
              >
                <span>Agendar com Dr. Elissander</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Card Dr. Alessandro Galvão */}
          <div className="card-clinical rounded-2xl p-6 space-y-4 border-t-4 border-t-[#066e69] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#f0f8f7] text-[#066e69] flex items-center justify-center">
                <Stethoscope size={26} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#066e69]">
                  CORPO CLÍNICO
                </span>
                <h3 className="font-heading font-black text-lg text-slate-900">
                  Dr. Alessandro Galvão
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Médico · Atenção Integral & Saúde da Família
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Profissional dedicado ao acolhimento ético e resolutivo, unindo conhecimento clínico a uma escuta empática que valoriza a saúde e a história de cada paciente.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de verificar agenda para consulta com o Dr. Alessandro Galvão."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#066e69] hover:underline flex items-center gap-1"
              >
                <span>Agendar com Dr. Alessandro</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Card Dra. Nicole Pardini */}
          <div className="card-clinical rounded-2xl p-6 space-y-4 border-t-4 border-t-[#14a39b] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#14a39b] flex items-center justify-center">
                <Sparkles size={26} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#14a39b]">
                  CORPO CLÍNICO
                </span>
                <h3 className="font-heading font-black text-lg text-slate-900">
                  Dra. Nicole Pardini
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Médica Otorrinolaringologista
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Especialista em Otorrinolaringologia e Cirurgia de Cabeça e Pescoço, dedicada ao diagnóstico e tratamento preciso de distúrbios da audição, respiração, rinite, sinusite e garganta.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de agendar consulta com a Dra. Nicole Pardini na Clínica Vivália."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#14a39b] hover:underline flex items-center gap-1"
              >
                <span>Agendar com Dra. Nicole</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Card Equipe Multidisciplinar */}
          <div className="card-clinical rounded-2xl p-6 space-y-4 border-t-4 border-t-[#066e69] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#f0f8f7] text-[#066e69] flex items-center justify-center">
                <Users size={26} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#066e69]">
                  CUIDADO MULTIDISCIPLINAR
                </span>
                <h3 className="font-heading font-black text-lg text-slate-900">
                  Pediatria, Nutrição & Mais
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Especialistas Dedicados à Sua Família
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pediatra que as crianças adoram, nutrição clínica, fisioterapia, ortopedia, ginecologia, dermatologia e exames preventivos reunidos em um só lugar.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de consultar a grade de horários de especialistas na Clínica Vivália."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#066e69] hover:underline flex items-center gap-1"
              >
                <span>Ver Especialidades</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ESTRUTURA FÍSICA & AMBIENTE ACONCHEGANTE */}
      <section
        id="estrutura"
        className="py-16 md:py-24 bg-[#f0f5f4] border-t border-[#e2e8e7]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Imagem Real do Corredor e Plantas */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
                <div className="relative h-[380px] sm:h-[460px] w-full">
                  <Image
                    src={CORRIDOR_PHOTO_SRC}
                    alt="Corredor interno da Clínica Vivália com piso em madeira, iluminação acolhedora e plantas ornamentais"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#cde6e4]">
                  <p className="font-heading font-black text-slate-900 text-sm sm:text-base">
                    Espaço Físico da Clínica Vivália · Juatuba - MG
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Av. Tânus Saliba, 71A - Centro · Ambiente calmo, aconchegante e impecavelmente limpo
                  </p>
                </div>
              </div>
            </div>

            {/* Informações da Estrutura */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="eyebrow">ESTRUTURA FÍSICA & ACOLHIMENTO</div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Ambiente planejado para o seu conforto, calma e biossegurança.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Quem visita a Clínica Vivália nota a diferença logo na recepção.
                Projetamos cada detalhe — da iluminação suave ao piso aconchegante
                e às plantas naturais — para que você e sua família se sintam
                em paz e bem cuidados desde o primeiro instante.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#e2e8e7]">
                  <div className="w-9 h-9 rounded-lg bg-[#f0f8f7] text-[#066e69] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Limpeza Impecável & Organização Rigorosa
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Padrão de assepsia e higiene hospitalar, garantindo um ambiente seguro e agradável para consultas e exames.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#e2e8e7]">
                  <div className="w-9 h-9 rounded-lg bg-[#f0f8f7] text-[#066e69] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Recepção Atenciosa & Sem Esperas Extensas
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Agendamentos organizados para respeitar o seu horário, com equipe atenta e prestativa em todas as etapas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#e2e8e7]">
                  <div className="w-9 h-9 rounded-lg bg-[#f0f8f7] text-[#066e69] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Localização Central & Fácil Acesso
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      No coração de Juatuba, na Av. Tânus Saliba, 71A, com acesso facilitado para todas as regiões da cidade e municípios vizinhos.
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
                  <MapPin size={15} className="text-[#066e69]" />
                  <span>Traçar Rota no Google Maps</span>
                </GlowingButton>

                <GlowingButton
                  href={WAZE_MAPS_URL}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="font-bold text-xs"
                >
                  <Compass size={15} className="text-[#b3844e]" />
                  <span>Abrir no Waze</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL REAL: GOOGLE REVIEWS (5,0 ESTRELAS · 71 AVALIAÇÕES) */}
      <section
        id="depoimentos"
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="eyebrow justify-center">AVALIAÇÕES REAIS NO GOOGLE</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            O que dizem os pacientes que confiam na Clínica Vivália
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Com nota máxima de <strong>5,0 ★ e 71 avaliações</strong> verificadas no
            Google, o carinho e o reconhecimento dos nossos pacientes é a nossa
            maior motivação diária.
          </p>
        </div>

        {/* Grid de Depoimentos Reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="card-clinical rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#066e69]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
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
                <span className="px-2 py-0.5 rounded bg-[#f0f8f7] text-[10px] font-bold text-[#066e69]">
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
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#066e69] transition-colors"
          >
            <span>Ver todas as 71 avaliações no Google Meu Negócio</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* 10. CONVÊNIOS ATENDIDOS, VIVÁLIA CARD & ATENDIMENTO PARTICULAR */}
      <section
        id="convenios"
        className="py-16 md:py-20 bg-[#0c201e] text-white border-y border-[#1e3e3b]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="eyebrow-dark justify-center">ATENDIMENTO AMPLO & ACESSÍVEL</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Vivália Card, Convênios & Atendimento Particular
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Criamos opções pensadas para facilitar o seu acesso e de sua família
            a uma saúde médica de excelência em Juatuba, sem complicação.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-6 rounded-2xl bg-[#051514]/80 border-2 border-[#b3844e] space-y-2 relative overflow-hidden">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#b3844e] text-slate-950 text-[10px] font-black uppercase tracking-wider">
                EXCLUSIVO VIVÁLIA
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#b3844e]/30 text-[#d8a46b] flex items-center justify-center font-bold">
                💳
              </div>
              <h3 className="font-bold text-base text-white">Vivália Card</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cartão de benefícios próprio da clínica, idealizado para que a população de Juatuba e região tenha acesso a consultas e exames com condições especiais e descontos exclusivos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#051514]/80 border border-[#1e3e3b] space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#066e69]/30 text-[#14a39b] flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="font-bold text-base text-white">Convênios & Parcerias</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atendemos parcerias e planos de saúde da região. Envie a foto da sua carteirinha pelo WhatsApp para verificação imediata de cobertura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#051514]/80 border border-[#1e3e3b] space-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-[#066e69]/30 text-[#14a39b] flex items-center justify-center font-bold">
                ★
              </div>
              <h3 className="font-bold text-base text-white">Consultas Particulares</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Valores justos e acessíveis, atendimento pontual, com pagamento facilitado em cartão de crédito, débito e PIX.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de mais informações sobre o Vivália Card e como aderir aos benefícios."
              )}
              target="_blank"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto font-bold"
            >
              <span>Saber Mais sobre o Vivália Card</span>
            </GlowingButton>

            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de consultar se meu convênio é atendido na Clínica Vivália."
              )}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto font-bold"
            >
              <WhatsAppIcon size={16} />
              <span>Consultar Convênio no WhatsApp</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 11. PERGUNTAS FREQUENTES (FAQ) COM ACORDEÃO */}
      <section
        id="faq"
        className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-3 mb-10">
          <div className="eyebrow justify-center">TIRE SUAS DÚVIDAS</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Perguntas Frequentes sobre a Clínica Vivália
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Respostas claras para as dúvidas mais comuns sobre agendamento,
            consultas, especialidades e localização.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="card-clinical rounded-xl overflow-hidden border border-[#e2e8e7]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-heading font-bold text-slate-900 text-sm sm:text-base hover:text-[#066e69] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#066e69]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-[#f0f4f3] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. LOCALIZAÇÃO & COMO CHEGAR */}
      <section className="py-16 bg-[#f8faf9] border-t border-[#e2e8e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-clinical rounded-2xl p-8 sm:p-10 border border-[#cde6e4] bg-gradient-to-br from-white to-[#f0f8f7]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#f0f8f7] text-[#066e69] text-xs font-bold border border-[#cde6e4]">
                  LOCALIZAÇÃO PRIVILEGIADA NO CENTRO
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                  Venha conhecer a Clínica Vivália em Juatuba
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Estamos localizados na <strong>Av. Tânus Saliba, 71A - Centro</strong>,
                  Juatuba - MG. Ponto de fácil localização, próximo aos principais
                  comércios e serviços da cidade, com comodidade e segurança.
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#066e69] flex-shrink-0" />
                    <span>{ADDRESS_DISPLAY}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#066e69] flex-shrink-0" />
                    <span>Atendimento de Segunda a Sexta a partir das 08h00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#066e69] flex-shrink-0" />
                    <span>Telefone e WhatsApp: {PHONE_DISPLAY}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-3">
                <GlowingButton
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center font-bold"
                >
                  <MapPin size={18} />
                  <span>Abrir Rota no Google Maps</span>
                </GlowingButton>

                <GlowingButton
                  href={WAZE_MAPS_URL}
                  target="_blank"
                  variant="gold"
                  size="lg"
                  className="w-full justify-center font-bold"
                >
                  <Compass size={18} />
                  <span>Navegar pelo Waze</span>
                </GlowingButton>

                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de orientações sobre como chegar à Clínica Vivália."
                  )}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="w-full justify-center font-bold text-slate-800"
                >
                  <WhatsAppIcon size={16} />
                  <span>Pedir Localização no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CTA FINAL DE ALTA CONVERSÃO */}
      <section className="bg-gradient-to-br from-[#051514] via-[#0c201e] to-[#051514] text-white py-16 md:py-20 border-t border-[#1e3e3b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#122c2a] border border-[#1e3e3b] text-[#d8a46b] text-xs font-bold tracking-wide">
            PRIORIZE SUA SAÚDE & BEM-ESTAR
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Agende sua consulta na Clínica Vivália hoje mesmo.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Dê o primeiro passo para uma vida mais feliz com o acolhimento, o
            respeito e a atenção técnica que você e sua família merecem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de agendar uma consulta na Clínica Vivália em Juatuba."
              )}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto font-bold text-base shadow-md"
            >
              <WhatsAppIcon size={18} />
              <span>Agendar Consulta no WhatsApp ({PHONE_DISPLAY})</span>
            </GlowingButton>

            <GlowingButton
              href={GOOGLE_MAPS_URL}
              target="_blank"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-bold text-slate-800"
            >
              <MapPin size={18} className="text-[#066e69]" />
              <span>Ver Localização no Centro</span>
            </GlowingButton>
          </div>

          <div className="text-xs text-slate-400 pt-2">
            Av. Tânus Saliba, 71A - Centro · Juatuba - MG · Segunda a Sexta a partir das 08h00
          </div>
        </div>
      </section>

      {/* 14. FOOTER INSTITUCIONAL COMPLETO */}
      <footer className="bg-[#051514] text-slate-400 text-xs border-t border-[#1e3e3b] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Coluna 1: Logo & Sobre */}
          <div className="space-y-4">
            <Image
              src={LOGO_HORIZONTAL_LIGHT_SRC}
              alt="Clínica Vivália — Clínica Médica"
              width={190}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="text-slate-400 text-[12px] leading-relaxed">
              Centro médico humanizado e ético no coração de Juatuba - MG.
              Consultas em diversas especialidades médicas, pediatria, clínica
              geral, exames e cuidado integral para toda a família.
            </p>
            <div className="text-[11px] text-slate-300 font-semibold">
              Corpo Clínico: Dr. Alessandro Galvão, Dr. Elissander e Especialistas
            </div>
          </div>

          {/* Coluna 2: Especialidades */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Especialidades
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-[12px]">
              <li>Clínica Geral & Medicina da Família</li>
              <li>Pediatria & Puericultura</li>
              <li>Cardiologia & Check-up Cardiovascular</li>
              <li>Ginecologia & Saúde da Mulher</li>
              <li>Ortopedia & Aparelho Locomotor</li>
              <li>Geriatria & Cuidado ao Idoso</li>
              <li>Dermatologia Clínica</li>
              <li>Nutrição Clínica & Psicologia</li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-[12px]">
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Todas as Especialidades & Exames
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  A Clínica (Um Sonho em Juatuba)
                </a>
              </li>
              <li>
                <a href="#medicos" className="hover:text-white transition-colors">
                  Corpo Clínico & Médicos
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-white transition-colors">
                  Estrutura & Ambiente Acolhedor
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Avaliações Google (5,0 ★)
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
                <MapPin size={15} className="text-[#d8a46b] flex-shrink-0 mt-0.5" />
                <span>Av. Tânus Saliba, 71A - Centro, Juatuba - MG, CEP 35675-000</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} className="text-[#d8a46b] flex-shrink-0" />
                <span>Segunda a Sexta a partir das 08h00</span>
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon size={15} className="text-emerald-500 flex-shrink-0" />
                <span>WhatsApp: {PHONE_DISPLAY}</span>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon size={15} className="text-[#d8a46b] flex-shrink-0" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {INSTAGRAM_HANDLE} (3.367 seguidores)
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Disclaimer Médico */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#1e3e3b] text-center space-y-3">
          <p className="text-[11px] text-slate-400 max-w-4xl mx-auto leading-relaxed">
            As informações contidas neste website têm caráter exclusivamente
            educativo e institucional, em rigorosa consonância com a Resolução CFM
            nº 2.336/2023 (CODAME). Nenhum conteúdo substitui a consulta médica
            individualizada e o exame clínico presencial. Clínica Vivália · Juatuba - MG.
          </p>

          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Clínica Vivália — Centro Médico. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* 15. BOTÃO FLUTUANTE DE WHATSAPP OFICIAL COM STATUS ONLINE */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        <a
          href={getWhatsAppUrl(
            "Olá! Gostaria de agendar uma consulta na Clínica Vivália em Juatuba."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white pl-4 pr-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
          aria-label="Agendar Consulta no WhatsApp da Clínica Vivália"
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
              (31) 99662-2315
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
