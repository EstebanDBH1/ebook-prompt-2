import React, { useState } from "react";
import {
  BookOpen,
  Sparkles,
  BrainCircuit,
  Target,
  Star,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Menu,
  X,
  Home,
  List,
  Download,
  Zap,
  Gift,
  ChevronDown,
  Lock,
} from "lucide-react";

import ImageEbook from "./assets/image/image.jpeg";
// --- Global Styles for Font & Animations ---
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Oswald:wght@400;500;700&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #FFFFFF;
      color: #111111;
    }
    
    .heading-font {
      font-family: 'Oswald', sans-serif;
    }

    .hero-gradient {
      background: radial-gradient(circle at center, #222222 0%, #000000 100%);
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    @keyframes pulse-red {
      0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
      70% { box-shadow: 0 0 0 15px rgba(220, 38, 38, 0); }
      100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
    }

    .animate-pulse-red {
      animation: pulse-red 2s infinite;
    }
  `}</style>
);

// --- Components ---

// Updated Button to be an anchor tag (link)
const Button = ({
  children,
  primary = false,
  href = "#",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 rounded-lg font-bold transition-all duration-200 flex items-center gap-2 justify-center active:scale-95 uppercase tracking-wider text-sm border-2 cursor-pointer no-underline";
  // Dark Red Primary Button
  const primaryStyles =
    "bg-[#990000] border-[#990000] text-white hover:bg-[#7f0000] hover:border-[#7f0000] shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  // Secondary Button (Black outline)
  const secondaryStyles =
    "bg-transparent border-black text-black hover:bg-black hover:text-white";

  return (
    <a
      href={href}
      className={`${baseStyles} ${
        primary ? primaryStyles : secondaryStyles
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

const FloatingMenu = () => {
  const [active, setActive] = useState("inicio");

  const menuItems = [
    { id: "inicio", icon: Home, label: "Inicio", href: "#hero" },
    { id: "beneficios", icon: Zap, label: "Beneficios", href: "#why" },
    { id: "contenido", icon: List, label: "Contenido", href: "#inside" },
    { id: "bonos", icon: Gift, label: "Bonos", href: "#bonuses" },
    {
      id: "comprar",
      icon: Download,
      label: "Comprar",
      special: true,
      href: "#offer",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-max max-w-[95vw]">
      <div className="bg-black/90 backdrop-blur-md border border-gray-800 shadow-2xl rounded-full px-5 py-3 flex gap-4 items-center">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActive(item.id)}
            className={`relative group flex flex-col items-center justify-center transition-all duration-300 ${
              item.special ? "-mt-12" : ""
            }`}
          >
            {item.special ? (
              <div className="w-16 h-16 bg-[#990000] text-white rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 hover:scale-110 transition-transform duration-300 border-4 border-black animate-pulse-red">
                <Download size={24} strokeWidth={3} />
              </div>
            ) : (
              <div
                className={`p-2 rounded-full transition-all duration-300 ${
                  active === item.id
                    ? "text-white bg-gray-800 scale-110"
                    : "text-gray-400 hover:text-white hover:scale-110"
                }`}
              >
                <item.icon size={20} strokeWidth={2} />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

const BenefitCard = ({ icon: Icon, title, desc }) => (
  <div className="p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-black shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
    <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#990000] transition-colors text-white">
      <Icon size={28} strokeWidth={2} />
    </div>
    <h3 className="text-xl heading-font font-bold mb-3 text-black uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed font-medium">{desc}</p>
  </div>
);

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700 font-medium mb-3">
    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700">
      <CheckCircle2 size={14} strokeWidth={4} />
    </div>
    <span className="leading-relaxed">{text}</span>
  </li>
);

const TestimonialCard = ({ text, author, role }) => (
  <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-black transition-all duration-300 relative">
    <div className="absolute -top-4 left-8 bg-[#990000] text-white px-3 py-1 rounded text-xs font-bold">
      VERIFICADO
    </div>
    <div className="flex gap-1 mb-4 text-[#FFA500]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
    <p className="font-medium text-gray-800 mb-6 leading-relaxed text-lg">
      "{text}"
    </p>
    <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white heading-font font-bold text-lg">
        {author[0]}
      </div>
      <div>
        <p className="font-bold text-sm text-black uppercase">{author}</p>
        <p className="text-xs text-gray-500 font-semibold">{role}</p>
      </div>
    </div>
  </div>
);

const BonusCard = ({ title, desc, value, number }) => (
  <div className="relative overflow-hidden bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#990000] shadow-lg hover:shadow-2xl transition-all duration-300 group">
    <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 rounded-bl-xl text-sm font-bold uppercase tracking-widest group-hover:bg-[#990000] transition-colors">
      Bono #{number}
    </div>
    <div className="mb-4 text-[#990000]">
      <Gift size={40} strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl heading-font font-bold text-black mb-2 uppercase">
      {title}
    </h3>
    <p className="text-gray-600 mb-4 text-sm font-medium">{desc}</p>
    <div className="inline-block px-4 py-1 bg-red-50 rounded-md text-[#990000] text-sm font-bold border border-red-100">
      VALOR REAL: ${value} USD
    </div>
  </div>
);

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 border-gray-100 last:border-none">
      <button
        className="w-full py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group px-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-black group-hover:text-[#990000] text-lg">
          {question}
        </span>
        <ChevronDown
          size={24}
          className={`text-gray-400 group-hover:text-[#990000] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-base leading-relaxed font-medium px-2">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- Main Application ---
export default function PageEbook2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: "¿Qué incluye el ebook?",
      a: "Recibirás un PDF completo descargable al instante con más de 200 prompts organizados por categorías, además de los 3 bonos exclusivos incluidos en la oferta de lanzamiento.",
    },
    {
      q: "¿Es compatible con GPT-5?",
      a: "Totalmente. Los prompts están diseñados y probados para funcionar excelentemente tanto en la versión gratuita (3.5) como en la versión Plus (GPT-5) de ChatGPT.",
    },
    {
      q: "¿Recibiré actualizaciones?",
      a: "Sí. El mundo de la IA cambia rápido, así que actualizamos el libro periódicamente. Tendrás acceso a todas las futuras versiones sin costo adicional.",
    },
    {
      q: "¿Hay garantía de reembolso?",
      a: "Por supuesto. Tienes 30 días completos para probarlo. Si no sientes que ha mejorado tu productividad, te devolvemos el 100% de tu dinero. Sin preguntas.",
    },
    {
      q: "¿Cómo recibo el ebook?",
      a: "Inmediatamente después de completar tu pago seguro, recibirás un correo electrónico con un enlace.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#990000] selection:text-white pb-32 overflow-x-hidden">
      <FontStyles />
      <FloatingMenu />

      {/* Urgency Bar */}
      <div className="bg-[#990000] text-white text-center py-3 text-sm font-bold uppercase tracking-widest px-4 animate-pulse">
        🚨 Oferta especial de lanzamiento: Termina pronto
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className=" bg-black text-white flex items-center justify-center rounded font-bold heading-font text-xl"></div>
            <span className="text-2xl heading-font font-bold tracking-tighter uppercase text-black">
              <span className="text-[#990000]"></span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600 uppercase tracking-wide">
            <a href="#why" className="hover:text-black transition-colors">
              Beneficios
            </a>
            <a href="#inside" className="hover:text-black transition-colors">
              Contenido
            </a>
            <a
              href="#testimonials"
              className="hover:text-black transition-colors"
            >
              Resultados
            </a>
            <a
              href="#offer"
              className="bg-black text-white px-6 py-3 rounded hover:bg-[#990000] transition-colors font-bold text-xs uppercase tracking-wider"
            >
              Comprar por $10
            </a>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section - DARK MODE */}
      <section
        id="hero"
        className="pt-20 pb-24 px-6 hero-gradient relative overflow-hidden text-white"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#333] border border-gray-600 text-yellow-400 text-xs font-bold mb-8 shadow-sm uppercase tracking-wider">
            <Star size={12} fill="currentColor" />
            El recurso #1 para ChatGPT en español
          </div>

          <h1 className="heading-font text-5xl md:text-8xl font-bold leading-[0.95] mb-8 uppercase tracking-tight">
            El único eBook <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#990000]">
              de Prompts
            </span>{" "}
            <br />
            que necesitas
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            Deja de perder el tiempo con respuestas genéricas. Desbloquea el
            verdadero poder de la IA y multiplica tu productividad x10.
          </p>

          {/* Pricing Block */}
          <div className="bg-white text-black p-8 rounded-xl shadow-[0_0_40px_rgba(153,0,0,0.4)] border-4 border-black max-w-md mx-auto mb-12 transform hover:scale-105 transition-transform duration-300 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#990000] text-white px-4 py-1 font-bold text-sm uppercase rounded shadow-lg">
              Más vendido
            </div>
            <div className="flex justify-center items-center gap-4 mb-6 border-b-2 border-gray-100 pb-6">
              <div className="text-center">
                <span className="text-gray-400 line-through text-xl font-bold block">
                  $29
                </span>
                <span className="text-xs text-gray-500 uppercase font-bold">
                  Precio Normal
                </span>
              </div>
              <div className="text-5xl heading-font font-bold text-[#990000]">
                $10
              </div>
            </div>

            <ul className="text-left space-y-3 mb-8">
              <ListItem text="Acceso instantáneo al ebook completo" />
              <ListItem text="Más de 200 prompts categorizados" />
              <ListItem text="Actualizaciones gratuitas de por vida" />
              <ListItem text="Soporte por email" />
              <ListItem text="3 Bonos de Regalo ($100+)" />
              <ListItem text="Garantía total de 30 días" />
            </ul>

            <Button
              primary
              className="w-full mb-4 text-lg shadow-red-900/30 animate-pulse-red"
              href="https://pay.hotmart.com/K99381988U"
            >
              COMPRAR AHORA - $10 <ArrowRight size={20} />
            </Button>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1 font-bold uppercase">
              <Lock size={12} /> Pago 100% seguro SSL
            </p>
          </div>
        </div>
      </section>

      {/* Why This Ebook */}
      <section
        id="why"
        className="py-24 px-6 bg-gray-50 border-b-2 border-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-font text-5xl text-black mb-4 font-bold uppercase">
              ¿Por Qué Este Ebook?
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              No es teoría. Es un sistema práctico para dominar ChatGPT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={CheckCircle2}
              title="100% Probados"
              desc="Nada de relleno. Más de 200 prompts testeados para darte resultados de alta calidad al instante."
            />
            <BenefitCard
              icon={BrainCircuit}
              title="Domina la IA"
              desc="Deja de ser un novato. Aprende la estructura exacta para que ChatGPT haga exactamente lo que pides."
            />
            <BenefitCard
              icon={Zap}
              title="Velocidad x10"
              desc="Lo que antes te tomaba 4 horas, ahora te tomará 15 minutos. Recupera tu tiempo libre."
            />
            <BenefitCard
              icon={Target}
              title="Cero Estrés"
              desc="Elimina la frustración de obtener respuestas malas. Copia, pega y obtén resultados."
            />
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section id="inside" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-block px-4 py-1 bg-black text-white rounded font-bold uppercase tracking-widest mb-6 text-xs">
              Contenido Premium
            </div>
            <h2 className="heading-font text-4xl md:text-5xl text-black font-bold mb-6 uppercase leading-tight">
              Todo lo que necesitas <br />{" "}
              <span className="text-[#990000]">para ganar con IA</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg font-medium leading-relaxed">
              Hemos condensado cientos de horas de experimentación en una guía
              directa al grano.Solo prompts que funcionan.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "200+ prompts probados y optimizados para resultados inmediatos",
                "Prompts para creación de contenido y copywriting",
                "Prompts para aprendizaje y educación",
                "Prompts para marketing y ventas",
                "Automatización de tareas",
                "Copywriting persuasivo",
                "Creación de contenido viral",
                "Análisis de datos complejos",
                "Psicologia",
                "Conseguir empleos y entrevistas",
                "Astrologia",
                "Ejemplos reales de implementación",
                "Guía de mejores prácticas",
                "Prompts para productividad personal y profesional",
                "Prompts para análisis de datos y reportes",
                "Prompts para programación y desarrollo",
                "Técnicas avanzadas de prompt engineering",
                "Plantillas listas para copiar y pegar",
                "Actualizaciones gratuitas de por vida",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-base font-bold text-black border-b border-gray-100 pb-2"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#990000]"
                    strokeWidth={3}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button className="inline-flex" href="#offer">
                VER ÍNDICE COMPLETO <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 relative">
            {/* Abstract Book Cover Representation */}
            <div className="relative bg-black rounded-xl p-1 transform rotate-3 shadow-2xl border-4 border-gray-800 max-w-sm mx-auto hover:rotate-0 transition-all duration-500">
              <img src={ImageEbook} alt="ebook-cover" />
              {/*
              <div className="bg-[#111] rounded-lg p-8 md:p-12 border border-gray-700 text-center">
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-[#990000] rounded-full flex items-center justify-center text-white border-4 border-black shadow-lg">
                    <Zap size={40} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="heading-font text-3xl text-white font-bold mb-2 uppercase tracking-wide">
                  La Biblia <br /> del Prompt
                </h3>
                <div className="w-12 h-1 bg-[#990000] mx-auto my-4"></div>
                <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                  Edición Master 2025
                </p>
              </div>
                */}
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#990000] rounded-full blur-3xl opacity-20 z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section id="bonuses" className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#990000] font-bold uppercase tracking-widest text-sm block mb-2">
              Oferta Limitada
            </span>
            <h2 className="heading-font text-4xl md:text-6xl text-white mb-4 font-bold uppercase">
              Bonos Gratuitos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Si compras hoy, te llevas este paquete valorado en más de $100
              totalmente GRATIS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BonusCard
              number="1"
              title="50 Plantillas Pro"
              desc="Formatos listos para copiar y pegar. Ideales para emails, posts de redes sociales y guiones de venta."
              value="37"
            />
            <BonusCard
              number="2"
              title="Prompt Engineering"
              desc="Mini-curso en PDF para aprender a crear tus propios comandos avanzados desde cero."
              value="47"
            />
            <BonusCard
              number="3"
              title="Casos de Uso"
              desc="Biblioteca de ejemplos reales de cómo empresas están usando IA para facturar más."
              value="27"
            />
          </div>

          <div className="mt-16 text-center bg-[#222] p-8 rounded-2xl border border-gray-700 max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-white mb-2">
              Valor Total del Paquete:{" "}
              <span className="line-through text-gray-500">$210+</span>
            </p>
            <p className="text-4xl md:text-5xl font-black text-[#990000] mb-8 uppercase heading-font">
              Hoy solo: $10 USD
            </p>
            <Button
              primary
              className="mx-auto w-full md:w-auto text-lg"
              href="#offer"
            >
              RECLAMAR OFERTA AHORA
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-24 px-6 bg-white border-b-2 border-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-font text-4xl md:text-5xl text-center text-black mb-16 font-bold uppercase">
            Resultados Reales <br />
            <span className="text-[#990000]">Personas Reales</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              text="Este ebook transformó completamente mi forma de trabajar. Los prompts son increíblemente efectivos y me ahorran horas cada semana."
              author="María González"
              role="Marketing Manager"
            />
            <TestimonialCard
              text="La mejor inversión que he hecho. Los prompts de programación son oro puro. Ahora codifico 3x más rápido."
              author="Carlos Ramírez"
              role="Senior Dev"
            />
            <TestimonialCard
              text="Increíble. Antes tardaba horas en crear contenido, ahora con estos prompts lo hago en minutos. 100% recomendado."
              author="Ana Martínez"
              role="Creadora de Contenido"
            />
            <TestimonialCard
              text="Me ayudó muchísimo con mis estudios. Los prompts para aprendizaje son súper útiles. Mejoré mis calificaciones."
              author="Luis Fernández"
              role="Estudiante"
            />
            <TestimonialCard
              text="Vale cada centavo. Los prompts de marketing me ayudaron a crear campañas que realmente convierten ventas."
              author="Patricia Silva"
              role="Emprendedora"
            />
            <TestimonialCard
              text="Excelente recurso. Lo uso diariamente. Los prompts están muy bien estructurados y son fáciles de adaptar."
              author="Roberto Díaz"
              role="Consultor"
            />
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] text-center relative">
          <ShieldCheck
            size={64}
            className="text-[#990000] mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="heading-font text-3xl md:text-4xl text-black mb-4 font-bold uppercase">
            Garantía de Hierro de 30 Días
          </h2>
          <p className="text-gray-700 font-medium mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
            No arriesgas nada. Compra el ebook, úsalo, ponlo a prueba. Si no
            sientes que vale 10 veces lo que pagaste, envíanos un email y te
            devolvemos el 100% de tu dinero. Sin preguntas incómodas.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t-2 border-gray-100 pt-8">
            <div>
              <p className="text-3xl font-black text-black">30</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Días de prueba
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-black">100%</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Reembolso
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-black">0</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                Riesgo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="heading-font text-3xl text-black mb-10 text-center font-bold uppercase">
          Preguntas Frecuentes
        </h2>
        <div className="bg-white rounded-xl p-2 border border-gray-200 shadow-sm">
          {faqs.map((faq, i) => (
            <Accordion key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="offer"
        className="py-24 px-6 bg-[#000000] text-white text-center border-t-4 border-[#990000]"
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-block border border-gray-700 bg-[#111] px-4 py-1 rounded-full text-sm font-bold text-gray-300 mb-8">
            ÚLTIMA OPORTUNIDAD
          </div>
          <h2 className="heading-font text-5xl md:text-7xl mb-8 font-bold uppercase leading-none">
            No te quedes <br /> <span className="text-[#990000]">atrás</span>
          </h2>

          <div className="bg-[#111] rounded-xl p-8 mb-10 border border-gray-800 max-w-md mx-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
              <span className="text-gray-400 font-bold">Precio Regular</span>
              <span className="text-gray-400 line-through decoration-red-500 font-bold">
                $29 USD
              </span>
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-white font-bold text-xl">Oferta Hoy</span>
              <span className="text-[#990000] font-black text-4xl heading-font">
                $10 USD
              </span>
            </div>

            <Button
              primary
              className="w-full text-lg py-5 animate-pulse-red shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              href="https://pay.hotmart.com/K99381988U"
            >
              DESCARGAR AHORA <Download size={20} />
            </Button>
            <p className="mt-4 text-xs text-gray-500">
              Entrega digital inmediata por email
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-bold uppercase tracking-wide">
            <span className="flex items-center gap-1">
              <Lock size={14} /> Pago Seguro
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} /> Garantía 30 Días
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Zap size={14} /> Acceso Vitalicio
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded font-bold text-xs">
                P
              </div>
              <span className="font-bold text-lg tracking-tight">
                PromptsPro
              </span>
            </div>
            <p className="text-xs text-gray-500">
              © 2025 PromptsPro. Todos los derechos reservados.
            </p>
          </div>

          {/*

          <div className="flex gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Soporte</a>
          </div>
          */}

          <div className="flex items-center gap-2 text-xs text-gray-500 bg-[#111] px-4 py-2 rounded border border-gray-800">
            <Lock size={12} />
            <span>256-bit SSL Encrypted</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
