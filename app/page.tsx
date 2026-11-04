"use client";

import { useState } from "react";
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
  Waves,
  Flame,
  Droplets,
  Wrench,
  Bath,
  Sun,
  Camera,
  Navigation,
  Compass,
  Check,
  HelpCircle,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Água Viva Piscinas (Belo Horizonte - MG)
const COMPANY_NAME = "Água Viva Piscinas";
const COMPANY_FULL_NAME = "Água Viva Aquecedores e Piscinas";
const BRAND_SLOGAN = "Tudo para piscinas e aquecimentos em um só lugar.";
const BRAND_SUBTITLE =
  "Piscinas de fibra, vinil e azulejo, aquecedores, químicos HTH e Genco, filtros, bombas e assistência técnica em Belo Horizonte.";

const WHATSAPP_NUMBER = "5531989887599";
const PHONE_DISPLAY = "(31) 98988-7599";
const LANDLINE_DISPLAY = "(31) 3491-7955";
const EMAIL_CONTACT = "contato@aguavivapiscinas.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/aguavivapiscinasbh/";
const INSTAGRAM_HANDLE = "@aguavivapiscinasbh";
const CONTATEME_URL = "https://contate.me/aguaviva-piscinas";

const ADDRESS_STREET = "Av. Portugal, 1879";
const ADDRESS_NEIGHBORHOOD = "Santa Amélia";
const ADDRESS_CITY = "Belo Horizonte - MG";
const ADDRESS_CEP = "31555-000";
const ADDRESS_DISPLAY =
  "Av. Portugal, 1879 - Santa Amélia, Belo Horizonte - MG, 31555-000";
const CITIES_SERVED =
  "Belo Horizonte (Pampulha, Santa Amélia, Venda Nova), Lagoa Santa, Vespasiano, Contagem, Betim e Região Metropolitana";

const GOOGLE_REVIEW_COUNT = "62";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=%C3%81gua+Viva+Piscinas%0ASanta+Am%C3%A9lia+%C2%B7+Belo+Horizonte+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Portugal%2C+1879+-+Santa+Amelia%2C+Belo+Horizonte+-+MG%2C+31555-000";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Avenida+Portugal+1879+Santa+Amelia+Belo+Horizonte+MG";

// Assets Oficiais
const LOGO_SRC = "/logo.png";
const STOREFRONT_PHOTO_SRC = "/loja-fachada.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de um orçamento e mais informações sobre piscinas e produtos na Água Viva Piscinas.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 18,
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
  size = 18,
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

// Serviços e Categorias Principais
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: any;
  image: string;
  fullDesc: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "piscinas",
    title: "Piscinas de Fibra, Vinil e Azulejo",
    shortDesc:
      "Venda, instalação e projetos completos com modelos modernos, durabilidade garantida e acabamento impecável.",
    badge: "Construção & Instalação",
    icon: Waves,
    image: "/piscina-obra-7.jpeg",
    fullDesc:
      "Transforme sua casa ou sítio com uma piscina feita sob medida para momentos inesquecíveis em família. Trabalhamos com piscinas de fibra de alta resistência, modelos elegantes de vinil e projetos personalizados em azulejo e alvenaria armada para Belo Horizonte e região.",
    benefits: [
      "Diversos tamanhos e formatos prontos para entrega",
      "Estrutura com reforço técnico e garantia estendida",
      "Acompanhamento técnico desde a escavação até a entrega da água tratada",
      "Melhor custo-benefício e valorização direta do seu imóvel",
    ],
    ctaText: "Orçamento de Piscina",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para instalação de piscina (Fibra/Vinil/Azulejo).",
  },
  {
    id: "aquecedores",
    title: "Aquecedores Solares & Trocadores de Calor",
    shortDesc:
      "Aproveite sua piscina em temperatura agradável os 365 dias do ano com máxima eficiência e economia de energia.",
    badge: "Conforto Térmico",
    icon: Flame,
    image: "/aquecedor-real.jpg",
    fullDesc:
      "Não deixe sua piscina parada nos meses amenos! Oferecemos sistemas de aquecimento solar com placas de alta absorção e bombas de calor (trocadores de calor elétricos) com tecnologia inverter que mantêm a água sempre quentinha sem susto na conta de luz.",
    benefits: [
      "Trocadores de calor silenciosos e de alto rendimento elétrico",
      "Placas de aquecimento solar com proteção UV reforçada",
      "Dimensionamento exato de acordo com o volume e incidência solar",
      "Instalação profissional e assistência técnica autorizada em BH",
    ],
    ctaText: "Consultar Aquecimento",
    whatsappMessage:
      "Olá! Gostaria de saber qual o melhor sistema de aquecimento para a minha piscina.",
  },
  {
    id: "quimicos",
    title: "Produtos Químicos & Tratamento de Água",
    shortDesc:
      "Distribuidor autorizado das melhores marcas: HTH, Genco e Cris Água com estoque pronta entrega na loja física.",
    badge: "Pronta Entrega em BH",
    icon: Droplets,
    image: "/quimicos-hth-genco.jpg",
    fullDesc:
      "A saúde da sua família começa no equilíbrio da água. Em nossa loja física na Av. Portugal, mantemos estoque permanente de cloro granulado e em pastilhas, clarificantes, algicidas choque e manutenção, elevadores/redutores de pH, alcalinidade e kits de medição.",
    benefits: [
      "Produtos 100% originais com alta concentração de ativo",
      "Baldes e refis de cloro com os melhores preços da região",
      "Orientação técnica gratuita no balcão ou pelo WhatsApp",
      "Kits completos para manutenção semanal ou decantação rápida",
    ],
    ctaText: "Pedir Produtos Químicos",
    whatsappMessage:
      "Olá! Preciso de produtos químicos para piscina (Cloro, algicida, clarificante). Vocês têm à pronta entrega?",
  },
  {
    id: "equipamentos",
    title: "Filtros, Bombas & Casa de Máquinas",
    shortDesc:
      "Equipamentos de alta vazão, motores silenciosos e sistemas de filtragem que deixam a água cristalina com facilidade.",
    badge: "Hidráulica & Filtragem",
    icon: Wrench,
    image: "/filtro-bomba.jpg",
    fullDesc:
      "O coração da sua piscina é o sistema de circulação e filtragem. Trabalhamos com motobombas autoescorvantes de alta eficiência, filtros de areia de alto rendimento, painéis de comando automatizados e válvulas seletoras que facilitam o dia a dia da limpeza.",
    benefits: [
      "Bombas econômicas de baixo consumo energético e ruído mínimo",
      "Troca e reposição de carga de areia de quartzo para filtros",
      "Peças de reposição, rotores, selos mecânicos e registros",
      "Diagnóstico e manutenção para motores com barulho ou perda de pressão",
    ],
    ctaText: "Ver Bombas e Filtros",
    whatsappMessage:
      "Olá! Preciso de ajuda com bomba ou filtro de piscina (troca, conserto ou dimensionamento).",
  },
  {
    id: "saunas-spas",
    title: "Saunas Úmidas, Secas & Spas com Hidro",
    shortDesc:
      "Espaços de relaxamento, renovação e bem-estar para residências, condomínios e áreas de lazer privativas.",
    badge: "Bem-estar & Lazer",
    icon: Bath,
    image: "/spa-real.jpg",
    fullDesc:
      "Eleve seu padrão de lazer com saunas elétricas ou a gás e spas completos de hidromassagem. Auxiliamos no projeto térmico, isolamento, portas herméticas, quadros de comando digital e acessórios para que sua experiência de spa em casa seja perfeita.",
    benefits: [
      "Geradores de vapor para sauna úmida com acionamento seguro",
      "Aparelhos compactos para pequenos e médios ambientes",
      "Spas e banheiras com jatos de hidromassagem direcionáveis",
      "Assessoria completa de projeto, alvenaria e parte elétrica",
    ],
    ctaText: "Consultar Saunas & Spas",
    whatsappMessage:
      "Olá! Gostaria de informações sobre geradores de sauna e spas de hidromassagem.",
  },
  {
    id: "acessorios",
    title: "Cascatas, Iluminação LED & Acessórios",
    shortDesc:
      "Cascatas em aço inox, refletores LED subaquáticos RGB, capas térmicas, escadas e aspiradores manuais e automáticos.",
    badge: "Design & Conservação",
    icon: Sun,
    image: "/cascata-real.jpg",
    fullDesc:
      "Dê vida nova à sua piscina com iluminação noturna cênica e o som relaxante de uma cascata. Oferecemos capas térmicas que conservam o calor, capas de proteção de segurança para crianças e animais, mangueiras flutuantes, cabos telescópicos, escovões e peneiras reforçadas.",
    benefits: [
      "Cascatas de parede e piso em aço inoxidável resistente à corrosão",
      "Refletores LED coloridos com comando via controle remoto",
      "Capas térmicas sob medida que reduzem a evaporação e retêm a temperatura",
      "Acessórios manuais e práticos para limpeza rápida de folhas e resíduos",
    ],
    ctaText: "Ver Catálogo de Acessórios",
    whatsappMessage:
      "Olá! Gostaria de conferir o catálogo de cascatas, iluminação LED e acessórios para piscina.",
  },
];

// Depoimentos Reais do Google (4,3 Estrelas / 62 Avaliações)
const REVIEWS = [
  {
    name: "sara carolina",
    rating: 5,
    tag: "Cliente Verificada no Google",
    comment:
      "Fiquei super impressionada com o atendimento! Me explicaram tudo super bem, tiraram todas as minhas dúvidas e ainda ofereceram ajuda pelo WhatsApp, caso eu precisasse - bastava mandar uma foto da piscina! Indico demais, gente! 😍👏",
  },
  {
    name: "James Rizo",
    rating: 5,
    tag: "Local Guide · 182 avaliações",
    comment:
      "Atendimento prático, rápido e assertivo. Estava com minha piscina muito manchada e fiquei desanimado. Após uma breve conversa e envio de um vídeo pelo WhatsApp, recebi avaliação rápida, indicação de produto e instrução de uso. Hoje, não há qualquer mancha por aqui. Parabéns pelo trabalho!",
  },
  {
    name: "Juscilene Santana",
    rating: 5,
    tag: "Cliente Verificada",
    comment:
      "Recomendo fortemente o estabelecimento! O atendimento foi prático, rápido e eficiente. Kelly foi incrível: prestativa, educada e paciente em responder às minhas dúvidas.",
  },
  {
    name: "Juliana Abranches",
    rating: 5,
    tag: "Cliente de Vespasiano - MG",
    comment:
      "Achei a loja através do Google, moro em Vespasiano e fiz questão de ir pessoalmente após o atendimento da atendente que se dispôs a me ensinar e mostrar tudo que o precisava para deixar minha piscina limpa e tratada! Achei que era um bicho de 7 cabeças mas não é! Eles são bem pacientes e solícitos! Obrigada!",
  },
  {
    name: "Silvério de Paula",
    rating: 5,
    tag: "Local Guide · 111 avaliações",
    comment:
      "Atendimento nota 10. Todos os produtos para piscina de diversas marcas para todos os bolsos. O melhor preço da região sem dúvida. Super recomendo.",
  },
  {
    name: "Eduardo Euflasio",
    rating: 5,
    tag: "Local Guide · 31 avaliações",
    comment:
      "Ótimo atendimento Sra Camila, e sempre Sr Batista recomendo muito.",
  },
  {
    name: "Marcio Santos",
    rating: 5,
    tag: "Cliente Satisfeito",
    comment:
      "Meus parabéns, adorei a loja com produtos de qualidade e com um ótimo atendimento, com a atendente muito educada e atenciosa.",
  },
  {
    name: "Alexandre Salles",
    rating: 5,
    tag: "Cliente Verificado",
    comment:
      "Gostaria de deixar registrado o excelente atendimento que recebi na loja, especialmente da Kelly. Desde o início, fui atendido com muita cordialidade e atenção, o que me fez sentir muito à vontade. Além disso, a loja tem fácil acesso e ótimos preços.",
  },
  {
    name: "Harliston Melo",
    rating: 5,
    tag: "Cliente Verificado",
    comment:
      "Tem tudo que preciso para cuidar da minha piscina além de um excelente atendimento da moça e do vendedor.",
  },
];

// Obras reais no portfólio
const GALLERY_ITEMS = [
  {
    src: "/hero-pool.jpg",
    title: "Piscina Residencial com Deck & Iluminação",
    category: "Projetos Residenciais",
    desc: "Instalação moderna com acabamento em deck de madeira, água cristalina e iluminação subaquática.",
  },
  {
    src: "/piscina-obra-7.jpeg",
    title: "Área de Lazer Completa com Piscina",
    category: "Piscinas de Fibra & Vinil",
    desc: "Projeto integrado com paisagismo, borda em pedra e sistema de recirculação.",
  },
  {
    src: "/piscina-obra-8.jpeg",
    title: "Piscinas Recreativas para Clubes e Sítios",
    category: "Piscinas de Clubes",
    desc: "Complexo de lazer aquático com toboáguas, chafarizes tipo cogumelo e área rasa.",
  },
  {
    src: "/piscina-obra-3.jpg",
    title: "Piscina em Alvenaria com Prainha",
    category: "Piscinas de Azulejo",
    desc: "Degrau amplo para relaxamento, hidroterapia e segurança para crianças.",
  },
  {
    src: "/cascata-real.jpg",
    title: "Cascatas em Aço Inox e Hidro",
    category: "Acessórios & Cascatas",
    desc: "Cascatas de parede e piso com som relaxante e jatos de pressão revigorantes.",
  },
  {
    src: "/loja-fachada.jpg",
    title: "Nossa Loja Física na Av. Portugal 1879",
    category: "Estrutura & Estoque",
    desc: "Estoque completo à pronta entrega de cloro HTH e Genco, bombas, filtros e piscinas.",
  },
];

// Perguntas Frequentes
const FAQS = [
  {
    question: "Como funciona o Diagnóstico de Água gratuito via WhatsApp?",
    answer:
      "É muito simples e prático! Se a sua piscina estiver verde, turva, com manchas nas paredes ou se você tiver dúvidas sobre a quantidade de produto químico, basta gravar um vídeo curto ou tirar uma foto da água e nos enviar pelo WhatsApp no (31) 98988-7599. Nossos especialistas (Kelly, Camila e Sr. Batista) analisam a situação e enviam a receita exata com os produtos e dosagens certas, evitando que você jogue dinheiro fora.",
  },
  {
    question: "Vocês têm produtos químicos à pronta entrega na loja física?",
    answer:
      "Sim! Mantemos estoque completo e permanente de cloros HTH, Genco e Cris Água, além de algicidas, clarificantes, elevadores e redutores de pH, decantadores e sulfato de alumínio. Você pode retirar na hora em nossa loja na Av. Portugal, 1879 (com estacionamento fácil na porta) ou solicitar informações de envio para sua residência em BH e região.",
  },
  {
    question: "Qual a diferença entre aquecimento solar e trocador de calor elétrico?",
    answer:
      "O aquecimento solar utiliza placas instaladas no telhado ou área aberta e depende da radiação solar para aquecer a água, oferecendo custo de energia praticamente zero durante dias ensolarados. Já o trocador de calor (bomba de calor elétrica) aquece a água em qualquer estação do ano, dia ou noite, funcionando de forma independente do sol com alta eficiência elétrica. O dimensionamento ideal depende da sua piscina e dos seus hábitos de uso.",
  },
  {
    question: "Vocês instalam e constroem piscinas em Belo Horizonte e cidades vizinhas?",
    answer:
      "Sim! Atendemos toda a cidade de Belo Horizonte (com destaque para a região da Pampulha, Santa Amélia, Venda Nova), além de Lagoa Santa, Vespasiano, Contagem, Betim, Nova Lima e condomínios de toda a Região Metropolitana. Realizamos fornecimento, instalação de tanques de fibra, vinil e alvenaria armada.",
  },
  {
    question: "Minha piscina está verde. Consigo recuperá-la sem trocar toda a água?",
    answer:
      "Na maioria esmagadora das vezes, sim! Descartar milhares de litros de água é desnecessário e caro. Com uma correção adequada da alcalinidade e do pH, seguida por um tratamento de choque de cloro e decantação com clarificante de alta performance, a sujeira desce para o fundo em 12 a 24 horas, permitindo a aspiração e deixando a água transparente novamente.",
  },
  {
    question: "Qual o horário de funcionamento da loja e onde fica?",
    answer:
      "Nossa loja física fica na Av. Portugal, 1879 - Santa Amélia, Belo Horizonte - MG (CEP 31555-000). Atendemos de segunda a sexta-feira, das 08h às 18h, e aos sábados, das 08h às 13h. Contamos com estacionamento fácil e atendimento atencioso no balcão e no WhatsApp.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [diagnosticTab, setDiagnosticTab] = useState<
    "verde" | "aquecimento" | "construir" | "quimicos" | "equipamento"
  >("verde");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#0096c7] selection:text-white">
      {/* 1. TOPBAR DE CREDIBILIDADE & CONTATO RÁPIDO */}
      <div className="bg-[#071e3d] text-white text-[12.5px] border-b border-[#163f73] py-2 px-4 sm:px-6 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Esquerda: Google Review & Autoridade */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#004d7a]/80 hover:bg-[#004d7a] transition-colors px-2.5 py-0.5 rounded-full text-white text-[12px] font-semibold border border-[#0096c7]/40"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-bold text-white">Google Avaliações</span>
              <span className="text-sky-200">
                ({GOOGLE_REVIEW_COUNT}+ clientes em BH)
              </span>
            </a>
            <span className="hidden sm:inline text-sky-400/40">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin size={13} className="text-[#00b4d8]" />
              Av. Portugal, 1879 - Santa Amélia, BH
            </span>
          </div>

          {/* Direita: Horários & Telefones */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end text-[12px]">
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock size={13} className="text-[#00b4d8]" />
              Seg a Sex: 08h-18h | Sáb: 08h-13h
            </span>
            <span className="hidden sm:inline text-sky-400/40">•</span>
            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-[#00b4d8]" />
              <span className="font-semibold">{LANDLINE_DISPLAY}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <WhatsAppIcon size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR MODERNA */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo Água Viva */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-transform hover:scale-[1.01]"
          >
            <div className="relative w-44 sm:w-52 h-14">
              <Image
                src={LOGO_SRC}
                alt="Água Viva Piscinas — Belo Horizonte"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-slate-700">
            <a
              href="#servicos"
              className="hover:text-[#0077b6] transition-colors py-2"
            >
              Produtos & Serviços
            </a>
            <a
              href="#diagnostico"
              className="hover:text-[#0077b6] transition-colors py-2 flex items-center gap-1"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Diagnóstico de Água
            </a>
            <a
              href="#obras"
              className="hover:text-[#0077b6] transition-colors py-2"
            >
              Projetos & Obras
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#0077b6] transition-colors py-2"
            >
              Avaliações
            </a>
            <a
              href="#loja-fisica"
              className="hover:text-[#0077b6] transition-colors py-2"
            >
              Loja Física BH
            </a>
            <a
              href="#faq"
              className="hover:text-[#0077b6] transition-colors py-2"
            >
              Dúvidas
            </a>
          </nav>

          {/* Botões de Ação na Direita */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Água Viva Piscinas"
              className="p-2 text-slate-500 hover:text-[#ea580c] transition-colors rounded-lg hover:bg-slate-100"
            >
              <InstagramIcon size={20} />
            </a>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Estou navegando no site e gostaria de solicitar um orçamento para piscina/produtos."
              )}
              target="_blank"
              size="sm"
              variant="whatsapp"
            >
              <WhatsAppIcon size={16} />
              <span>Falar no WhatsApp</span>
            </GlowingButton>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Drawer Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
            >
              <nav className="flex flex-col gap-3 text-[15px] font-medium text-slate-800">
                <a
                  href="#servicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  Produtos & Serviços
                  <ArrowRight size={16} className="text-[#0077b6]" />
                </a>
                <a
                  href="#diagnostico"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  Diagnóstico de Água por Foto
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Grátis
                  </span>
                </a>
                <a
                  href="#obras"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Projetos & Obras
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Avaliações no Google (+62 clientes)
                </a>
                <a
                  href="#loja-fisica"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Loja Física na Av. Portugal
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Perguntas Frequentes
                </a>

                <div className="pt-3 flex flex-col gap-2">
                  <GlowingButton
                    href={getWhatsAppUrl()}
                    target="_blank"
                    size="md"
                    variant="whatsapp"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={18} />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </GlowingButton>
                  <a
                    href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
                  >
                    <Phone size={16} className="text-[#0077b6]" />
                    Ligar Fixo: {LANDLINE_DISPLAY}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION — VIBRANTE, PROFISSIONAL E MODERNA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#051a37] via-[#07254d] to-[#041426] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Glow e Ondas de Fundo */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00b4d8] rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ea580c] rounded-full blur-[160px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Coluna Esquerda: Textos & Proposta de Valor */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge de Autoridade */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[13px] font-semibold text-sky-200">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>Tudo para Piscinas & Aquecimentos em BH</span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="hidden sm:inline text-amber-300 font-bold flex items-center gap-1">
                  <span className="text-amber-400">★★★★★</span> +62 Avaliações no Google
                </span>
              </div>

              {/* Headline H1 com cores do logotipo */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.15] text-white font-heading">
                Sua piscina{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#00b4d8]">
                  cristalina
                </span>
                , aquecida e perfeita para curtir com quem você ama.
              </h1>

              {/* Subtítulo */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Piscinas de fibra, vinil e azulejo, aquecedores solares e
                trocadores de calor, produtos químicos HTH e Genco à pronta
                entrega, filtros e assistência técnica especializada em Belo
                Horizonte.
              </p>

              {/* Destaques Rápidos com Ícones */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 size={16} />
                    <span>Loja Física</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Av. Portugal, 1879 em Santa Amélia
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-sm">
                    <Camera size={16} />
                    <span>Diagnóstico</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Envie foto/vídeo da água no WhatsApp
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Award size={16} />
                    <span>Pronta Entrega</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Linha HTH, Genco, Cris Água e bombas
                  </p>
                </div>
              </div>

              {/* Grupo de Botões CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de falar com um especialista da Água Viva Piscinas e pedir um orçamento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="orange"
                  className="font-bold text-base shadow-xl shadow-orange-500/20"
                >
                  <WhatsAppIcon size={20} />
                  <span>Pedir Orçamento Grátis</span>
                </GlowingButton>
                <GlowingButton
                  href="#diagnostico"
                  size="lg"
                  variant="light"
                  className="font-semibold text-base text-[#0077b6] bg-white hover:bg-sky-50 border-white"
                >
                  <Droplets size={18} className="text-[#0077b6]" />
                  <span>Diagnosticar Água Agora</span>
                </GlowingButton>
              </div>

              {/* Avaliação Social Prova */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                    SC
                  </span>
                  <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                    JR
                  </span>
                  <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                    JS
                  </span>
                  <span className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                    EE
                  </span>
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-[12px] text-slate-200">
                    <span className="font-bold text-white">Mais de 62 avaliações reais</span> no Google • Excelência em atendimento em BH
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Imagem de Destaque Desobstruída */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Moldura Principal com Imagem de Piscina Cristalina de Alto Padrão */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
                  <div className="relative h-[360px] sm:h-[440px] w-full">
                    <Image
                      src="/hero-pool.jpg"
                      alt="Piscina de Alto Padrão entregue pela Água Viva Piscinas"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041426] via-transparent to-transparent opacity-85"></div>
                  </div>

                  {/* Badge Superior Discreto */}
                  <div className="absolute top-3.5 right-3.5 bg-[#ea580c] text-white rounded-xl px-3 py-1.5 shadow-lg text-xs font-bold flex items-center gap-1.5 border border-orange-400 backdrop-blur-xs">
                    <Sparkles size={13} className="text-amber-200" />
                    <span>HTH • GENCO • CRIS ÁGUA</span>
                  </div>

                  {/* Informações Sobrepostas na Imagem (100% Desobstruída) */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071e3d]/90 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          Área de Lazer Completa
                        </span>
                        <h2 className="text-white font-bold text-base">
                          Piscinas, Aquecimento & Químicos
                        </h2>
                        <p className="text-xs text-slate-300">
                          Loja física na Av. Portugal, 1879 • Santa Amélia, BH
                        </p>
                      </div>
                      <a
                        href={getWhatsAppUrl("Olá! Vi a foto da piscina no site e gostaria de solicitar um orçamento.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-[#0077b6] hover:bg-[#005f94] text-white transition-colors shrink-0"
                        aria-label="Pedir orçamento"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELETOR RÁPIDO DE NECESSIDADE — O QUE VOCÊ PRECISA HOJE? */}
      <section
        id="diagnostico"
        className="py-14 bg-white border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0077b6] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Atendimento Rápido & Resolutivo
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Como podemos ajudar sua piscina hoje?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Selecione o seu objetivo e veja a recomendação imediata da nossa
              equipe técnica:
            </p>
          </div>

          {/* Abas Interativas */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <button
              type="button"
              onClick={() => setDiagnosticTab("verde")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "verde"
                  ? "bg-[#0077b6] text-white shadow-md shadow-sky-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Droplets size={16} />
              <span>Água Verde ou Turva</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("aquecimento")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "aquecimento"
                  ? "bg-[#0077b6] text-white shadow-md shadow-sky-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Flame size={16} />
              <span>Aquecer Minha Piscina</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("construir")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "construir"
                  ? "bg-[#0077b6] text-white shadow-md shadow-sky-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Waves size={16} />
              <span>Comprar ou Instalar Piscina</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("quimicos")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "quimicos"
                  ? "bg-[#0077b6] text-white shadow-md shadow-sky-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Sparkles size={16} />
              <span>Cloro & Químicos em BH</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("equipamento")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "equipamento"
                  ? "bg-[#0077b6] text-white shadow-md shadow-sky-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Wrench size={16} />
              <span>Bomba, Filtro ou Manutenção</span>
            </button>
          </div>

          {/* Painel do Diagnóstico */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 border border-sky-100 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
            {diagnosticTab === "verde" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <CheckCircle2 size={13} /> O problema mais comum — e fácil de resolver!
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Água verde, esbranquiçada ou piscina com manchas?
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Não troque a água da piscina! Grave um vídeo rápido de 10
                    segundos ou tire uma foto pelo WhatsApp. Nossos consultores
                    Kelly, Camila e Sr. Batista analisam na hora e passam a
                    dosagem exata de cloro de choque, clarificante ou elevador de
                    pH para clarear tudo em até 24h.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Sem desperdício de produto
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Orientação passo a passo
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Produtos à pronta entrega na loja
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Avaliação gratuita no WhatsApp
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-sky-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Camera size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Envie Foto no WhatsApp
                    </span>
                    <span className="text-xs text-slate-500">
                      Resposta rápida de seg a sáb
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá Kelly/Camila! Minha piscina está com a água verde/turva. Vou enviar uma foto para vocês me orientarem com os produtos."
                    )}
                    target="_blank"
                    size="sm"
                    variant="whatsapp"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Mandar Foto Agora</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "aquecimento" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                    <Flame size={13} /> Piscina Quentinha o Ano Inteiro
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Quer aproveitar sua piscina mesmo nos dias frios?
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Trabalhamos com trocadores de calor elétricos de alta
                    eficiência e sistemas de aquecimento solar com placas de alta
                    durabilidade. Fazemos o dimensionamento térmico exato para o
                    volume da sua piscina.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Trocadores inverter silenciosos
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Placas solares com garantia
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Capas térmicas sob medida
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Instalação técnica em BH
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-amber-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Sun size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Dimensionamento Grátis
                    </span>
                    <span className="text-xs text-slate-500">
                      Solar ou Trocador de Calor
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de fazer o dimensionamento de aquecedor (solar ou trocador de calor) para a minha piscina."
                    )}
                    target="_blank"
                    size="sm"
                    variant="orange"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Pedir Simulação</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "construir" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                    <Waves size={13} /> Realize o Sonho da Sua Área de Lazer
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Piscinas de Fibra, Vinil e Azulejo em BH
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Modelos compactos para quintais urbanos ou grandes projetos
                    para sítios e chácaras. Entregamos a estrutura completa com
                    cascata, prainha, iluminação LED e casa de máquinas
                    montada.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Tanques de fibra resistentes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Estampas exclusivas de vinil
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Alvenaria armada e azulejo
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Atendimento em toda a Grande BH
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-sky-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-sky-100 text-[#0077b6] flex items-center justify-center">
                    <Waves size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Catálogo & Modelos
                    </span>
                    <span className="text-xs text-slate-500">
                      Veja fotos de tamanhos e formatos
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de receber fotos e tabela de preços dos modelos de piscinas de fibra e vinil."
                    )}
                    target="_blank"
                    size="sm"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Ver Modelos e Preços</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "quimicos" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <Sparkles size={13} /> Linha Completa HTH, Genco e Cris Água
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Produtos químicos com os melhores preços de BH
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Baldes de cloro granulado, pastilhas de cloro lento,
                    clarificantes de alto rendimento, barrilha leve, sulfato,
                    algicida de manutenção e choque, limpadores de borda e kits
                    de teste de pH e cloro.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Pronta entrega na loja física
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Fácil estacionamento na porta
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Produtos 100% originais e lacrados
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Preço justo para condomínios e casas
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-emerald-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Consulte Nosso Estoque
                    </span>
                    <span className="text-xs text-slate-500">
                      Av. Portugal, 1879 - BH
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de consultar valores e disponibilidade de cloro e produtos químicos para retirar na loja."
                    )}
                    target="_blank"
                    size="sm"
                    variant="whatsapp"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Preços</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "equipamento" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                    <Wrench size={13} /> Assistência Técnica Especializada
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Bomba parou, filtro vazando ou barulho no motor?
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Não fique com a água parada estragando. Fazemos diagnóstico,
                    troca de carga de areia do filtro, substituição de bombas,
                    reparos em válvulas seletoras e instalação de quadros de
                    comando automáticos.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Motores silenciosos de reposição
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Areia de quartzo especial
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Temporizadores para automação
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Atendimento ágil em BH
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-sky-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-sky-100 text-[#0077b6] flex items-center justify-center">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Falar com Técnico
                    </span>
                    <span className="text-xs text-slate-500">
                      Ajuda com motor ou filtro
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Preciso de ajuda com a bomba/filtro da minha piscina que apresentou problema."
                    )}
                    target="_blank"
                    size="sm"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Solicitar Suporte Técnico</span>
                  </GlowingButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PRODUTOS & SERVIÇOS — GRID MODERNO */}
      <section
        id="servicos"
        className="py-16 sm:py-24 bg-[#f8fafc] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] block mb-2">
                Nossos Pilares de Atuação
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Tudo o que sua piscina precisa em um único endereço
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Do projeto inicial da piscina ao cloro semanal e aquecimento
                solar. Qualidade certificada e suporte próximo.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de falar com um atendente da Água Viva Piscinas e tirar dúvidas gerais."
              )}
              target="_blank"
              size="md"
              variant="outlineAqua"
            >
              <span>Consultar Especialista</span>
              <ArrowRight size={16} />
            </GlowingButton>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((serv) => {
              const IconComp = serv.icon;
              return (
                <div
                  key={serv.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col group"
                >
                  {/* Foto de Capa do Card */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={serv.image}
                      alt={serv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#071e3d]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                      {serv.badge}
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077b6] flex items-center justify-center mb-3">
                        <IconComp size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0077b6] transition-colors leading-snug">
                        {serv.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                        {serv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedService(serv)}
                        className="text-xs font-bold text-[#0077b6] hover:text-[#005f94] flex items-center gap-1 cursor-pointer"
                      >
                        Ver detalhes & benefícios
                        <ArrowRight size={14} />
                      </button>
                      <a
                        href={getWhatsAppUrl(serv.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                        aria-label={`Orçamento de ${serv.title}`}
                      >
                        <WhatsAppIcon size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MODAL INTERATIVO DE DETALHES DO SERVIÇO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col"
            >
              {/* Header do Modal com Imagem */}
              <div className="relative h-44 w-full shrink-0">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Corpo do Modal */}
              <div className="p-6 overflow-y-auto space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                    O que está incluído & diferenciais:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {selectedService.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer do Modal com CTA */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Fechar
                </button>
                <GlowingButton
                  href={getWhatsAppUrl(selectedService.whatsappMessage)}
                  target="_blank"
                  size="sm"
                  variant="whatsapp"
                >
                  <WhatsAppIcon size={16} />
                  <span>{selectedService.ctaText}</span>
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. DIFERENCIAL EXCLUSIVO — DIAGNÓSTICO PELO WHATSAPP */}
      <section className="py-16 bg-[#071e3d] text-white relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00b4d8] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <Sparkles size={14} /> O Segredo que Encanta Nossos Clientes
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading">
                “Bastava mandar uma foto da piscina no WhatsApp que eles
                resolveram!”
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Essa é a frase real da nossa cliente Sara Carolina e do James
                Rizo no Google. Cuidar de piscina não precisa ser complicado.
                Em vez de comprar produtos às cegas que não funcionam, você
                conversa diretamente com a nossa equipe em Belo Horizonte:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-xl font-black text-sky-400 block mb-1">
                    Passo 1
                  </span>
                  <span className="font-bold text-sm block text-white">
                    Grave um Vídeo ou Foto
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Mostre a cor da água, fundo e bordas da piscina.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-xl font-black text-[#ea580c] block mb-1">
                    Passo 2
                  </span>
                  <span className="font-bold text-sm block text-white">
                    Receba a Receita Exata
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Informamos as quantidades e dosagens de cada produto.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-xl font-black text-emerald-400 block mb-1">
                    Passo 3
                  </span>
                  <span className="font-bold text-sm block text-white">
                    Água Azul em 24h
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Sua família aproveita uma água limpa e saudável.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Estou precisando de orientação para a água da minha piscina. Posso mandar uma foto para vocês analisarem?"
                  )}
                  target="_blank"
                  size="md"
                  variant="whatsapp"
                  className="font-bold shadow-lg shadow-green-600/30"
                >
                  <WhatsAppIcon size={18} />
                  <span>Mandar Foto da Piscina no WhatsApp</span>
                </GlowingButton>
                <span className="text-xs text-slate-400">
                  Atendimento sem compromisso • Consultores Kelly e Batista
                </span>
              </div>
            </div>

            {/* Print simulado / Card de Conversa */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-5 shadow-2xl border border-slate-200 text-slate-900">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#0077b6] text-white flex items-center justify-center font-bold text-sm">
                    AV
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">
                      Consultoria Água Viva Piscinas
                    </h3>
                    <span className="text-[11px] text-emerald-600 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Online no WhatsApp (31) 98988-7599
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-3 text-xs">
                  <div className="bg-slate-100 rounded-xl p-3 max-w-[85%] text-slate-700">
                    <p className="font-semibold text-slate-900 mb-0.5">Cliente:</p>
                    <p>
                      “Kelly, boa tarde! Choveu ontem e a água amanheceu verde
                      musgo. Tenho visita no sábado, tem como recuperar?”
                    </p>
                  </div>

                  <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 max-w-[90%] ml-auto text-slate-800">
                    <p className="font-bold text-[#0077b6] mb-0.5">
                      Kelly • Água Viva:
                    </p>
                    <p>
                      “Olá! Fique tranquilo, dá tempo sim! Para os 30 mil litros
                      da sua piscina: aplique 400g de cloro choque HTH hoje às
                      18h, espere 1 hora e coloque 150ml de Maxfloc. Amanhã de
                      manhã a sujeira estará toda no fundo decantada. Só aspirar
                      drenando e ela volta a ficar 100% cristalina!”
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 text-center text-emerald-800 font-semibold text-[11px]">
                    ⭐ Depoimento real verificado nas avaliações do Google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GALERIA DE OBRAS & PROJETOS REAIS */}
      <section id="obras" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] block mb-2">
              Portfólio em Minas Gerais
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Projetos reais entregues pela Água Viva Piscinas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Confira fotos de instalações, reformas de piscinas de fibra,
              vinil, azulejo e a estrutura da nossa loja física em BH.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 bg-slate-900"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de ver mais fotos de projetos de piscinas executados por vocês."
              )}
              target="_blank"
              size="md"
              variant="outline"
              className="text-[#0077b6] border-[#0077b6]/30 hover:border-[#0077b6]"
            >
              <span>Ver Mais Fotos e Modelos no WhatsApp</span>
              <ArrowRight size={16} />
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 9. LOJA FÍSICA NA AV. PORTUGAL, 1879 — SANTA AMÉLIA BH */}
      <section
        id="loja-fisica"
        className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] to-sky-50/70 border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Foto Real da Fachada */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-300 shadow-md group">
                  <Image
                    src={STOREFRONT_PHOTO_SRC}
                    alt="Fachada real da Água Viva Piscinas na Av. Portugal 1879 - Santa Amélia BH"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#071e3d]/85 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-xs">
                    Loja Física em Belo Horizonte
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-slate-200">
                    Av. Portugal, 1879
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  Foto da nossa sede com amplo estoque de químicos HTH, Genco,
                  bombas, filtros e cascos de piscina.
                </p>
              </div>

              {/* Informações de Localização & Rotas */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] block mb-1">
                    Venha Tomar um Café Conosco
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                    Fácil estacionamento e atendimento de balcão
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    Localizada na tradicional <strong>Av. Portugal, 1879</strong>{" "}
                    (próximo à Pampulha e Santa Amélia), nossa loja conta com
                    balcão técnico, consultores prontos para tirar dúvidas e
                    amplo estoque para você levar seus produtos na hora.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <MapPin className="text-[#0077b6] shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="block text-slate-900">Endereço:</strong>
                      <span>{ADDRESS_DISPLAY}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <Clock className="text-[#0077b6] shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="block text-slate-900">
                        Horário de Atendimento:
                      </strong>
                      <span>
                        Segunda a Sexta das 08h às 18h | Sábado das 08h às 13h
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <Phone className="text-[#0077b6] shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="block text-slate-900">
                        Canais de Contato:
                      </strong>
                      <span>
                        Fixo: {LANDLINE_DISPLAY} • WhatsApp: {PHONE_DISPLAY}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botões de Rotas em 1 Clique */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <GlowingButton
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    size="md"
                    variant="primary"
                  >
                    <Navigation size={16} />
                    <span>Abrir no Google Maps</span>
                  </GlowingButton>
                  <GlowingButton
                    href={WAZE_MAPS_URL}
                    target="_blank"
                    size="md"
                    variant="outline"
                  >
                    <Compass size={16} />
                    <span>Traçar Rota no Waze</span>
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROVA SOCIAL — DEPOIMENTOS REAIS DO GOOGLE */}
      <section
        id="depoimentos"
        className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Badge Google */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200 mb-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400" />
                ))}
              </div>
              <span>Mais de 62 avaliações reais de clientes no Google</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              O que dizem os clientes que confiam na Água Viva
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Transparência, simpatia e conhecimento técnico reconhecidos por
              quem cuida da piscina em Belo Horizonte e região.
            </p>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {rev.tag}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    “{rev.comment}”
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0077b6] to-[#00b4d8] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {rev.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {rev.name}
                    </h3>
                    <span className="text-[11px] text-slate-500">
                      Avaliação pública no Google Maps
                    </span>
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
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0077b6] hover:text-[#005f94]"
            >
              <span>Ver todas as 62 avaliações no perfil oficial do Google</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ — PERGUNTAS FREQUENTES */}
      <section
        id="faq"
        className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] block mb-2">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Perguntas frequentes sobre piscinas e produtos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Respostas diretas para as dúvidas mais comuns dos nossos clientes
              em Belo Horizonte.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer text-sm sm:text-base"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle size={18} className="text-[#0077b6] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#0077b6]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-slate-600 text-sm sm:text-[14.5px] leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-sky-50 border border-sky-100 text-center">
            <h3 className="font-bold text-slate-900 text-base">
              Ainda tem alguma dúvida específica sobre a sua piscina?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
              Nossa equipe está disponível no WhatsApp agora para tirar dúvidas
              sem custo.
            </p>
            <div className="mt-4">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Tenho uma dúvida sobre piscina/produtos que não encontrei no FAQ."
                )}
                target="_blank"
                size="sm"
                variant="whatsapp"
              >
                <WhatsAppIcon size={16} />
                <span>Conversar com a Equipe no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>

      {/* 12. BANNER FINAL DE CONVERSÃO / CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0077b6] via-[#0096c7] to-[#00b4d8] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-5">
          <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/30">
            Atendimento Rápido em Toda BH e Região
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
            Pronto para ter sua piscina cristalina e quentinha o ano todo?
          </h2>
          <p className="text-sky-100 text-sm sm:text-lg max-w-2xl mx-auto">
            Fale conosco no WhatsApp ou visite nossa loja física na Av.
            Portugal, 1879 em Santa Amélia. Preço justo, marcas consagradas e
            consultoria de verdade.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Quero solicitar um orçamento e tirar dúvidas com a Água Viva Piscinas."
              )}
              target="_blank"
              size="lg"
              variant="orange"
              className="text-base font-bold shadow-xl shadow-orange-900/30"
            >
              <WhatsAppIcon size={20} />
              <span>Chamar no WhatsApp ({PHONE_DISPLAY})</span>
            </GlowingButton>
            <GlowingButton
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              size="lg"
              variant="white"
              className="text-slate-900 font-bold"
            >
              <Phone size={18} className="text-[#0077b6]" />
              <span>Ligar no Fixo: {LANDLINE_DISPLAY}</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 13. FOOTER COMPLETO COM DADOS DA EMPRESA */}
      <footer className="bg-[#041426] text-slate-300 text-xs sm:text-sm border-t border-[#163f73] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Coluna 1: Logo & Missão */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative w-48 h-16">
                <Image
                  src={LOGO_SRC}
                  alt="Água Viva Piscinas"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Tudo para piscinas e aquecimentos em um só lugar. Venda e
                instalação de piscinas de fibra, vinil e azulejo, aquecedores
                solares e elétricos, filtros, bombas e distribuição autorizada
                HTH e Genco em Belo Horizonte - MG.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#ea580c] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram da Água Viva Piscinas"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp da Água Viva Piscinas"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href={CONTATEME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0077b6] text-white flex items-center justify-center transition-colors"
                  aria-label="Linktree e Contatos"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Coluna 2: Produtos & Serviços */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Produtos & Serviços
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Piscinas de Fibra e Vinil
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Piscinas de Azulejo e Alvenaria
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Aquecedores Solares e Elétricos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Químicos: HTH, Genco e Cris Água
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Filtros de Areia e Motobombas
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Saunas Úmidas, Secas e Spas
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Cascatas Inox e Iluminação LED
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Links Rápidos */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Navegação
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#diagnostico"
                    className="hover:text-white transition-colors"
                  >
                    Diagnóstico de Água
                  </a>
                </li>
                <li>
                  <a
                    href="#obras"
                    className="hover:text-white transition-colors"
                  >
                    Galeria de Obras
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="hover:text-white transition-colors"
                  >
                    Avaliações no Google
                  </a>
                </li>
                <li>
                  <a
                    href="#loja-fisica"
                    className="hover:text-white transition-colors"
                  >
                    Loja Física em BH
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
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Endereço & Atendimento
              </h3>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#00b4d8] shrink-0 mt-0.5" />
                  <span>
                    Av. Portugal, 1879 - Santa Amélia, Belo Horizonte - MG, CEP
                    31555-000
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-[#00b4d8] shrink-0" />
                  <span>Fixo: {LANDLINE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <WhatsAppIcon size={15} className="text-emerald-400 shrink-0" />
                  <span>WhatsApp: {PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#00b4d8] shrink-0" />
                  <span>Seg a Sex: 08h às 18h | Sáb: 08h às 13h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-[#00b4d8] shrink-0" />
                  <span>{EMAIL_CONTACT}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright e Assinatura */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <div>
              <p>
                © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos
                reservados.
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">
                {COMPANY_FULL_NAME} • CNPJ & Inscrição Estadual regularizados •
                Belo Horizonte - MG
              </p>
            </div>
            <div className="text-slate-400 text-xs">
              Água Viva Piscinas • Santa Amélia / Pampulha
            </div>
          </div>
        </div>
      </footer>

      {/* 14. BOTÃO FLUTUANTE DE WHATSAPP COM AVISO DE RESPOSTA RÁPIDA */}
      <aside aria-label="Atendimento Rápido WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group">
        <a
          href={getWhatsAppUrl(
            "Olá! Estou navegando no site da Água Viva Piscinas e gostaria de tirar uma dúvida pelo WhatsApp."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5b] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
          aria-label="Falar com especialista no WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            Fale Conosco
          </span>
        </a>
      </aside>
    </main>
  );
}
