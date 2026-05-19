import React, { useState, useEffect } from 'react';
import {
  Terminal, Layout, Smartphone, Mail, Code2, ArrowRight,
  GitBranch, ExternalLink, Calendar, CreditCard, ChevronDown,
  CheckCircle2, Zap, Shield
} from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    { q: "¿Cuánto tiempo lleva implementar el sistema?", a: "Cada proyecto es distinto, pero la mayoría de las implementaciones iniciales se entregan en pocos días. En desarrollos más avanzados, definimos un cronograma claro desde el inicio para que sepas exactamente cuándo estará listo." },
    { q: "¿El sistema es realmente a medida o es algo estándar?", a: "Cada solución se adapta completamente a tu negocio: horarios, servicios, lógica de reservas, reglas de cancelación y flujo de trabajo. No utilizamos plantillas genéricas." },
    { q: "¿Qué incluye exactamente el servicio?", a: "Incluye el desarrollo del sistema, implementación, puesta online y acompañamiento inicial. También podés optar por mantenimiento continuo, mejoras y soporte prioritario." },
    { q: "¿Se puede integrar con pagos online?", a: "Sí, integramos el sistema con Mercado Pago para automatizar cobros, reducir cancelaciones y asegurar ingresos antes de cada turno." },
    { q: "¿Voy a poder escalar el sistema a futuro?", a: "Sí. Todos los sistemas están pensados para crecer con tu negocio: más servicios, más usuarios, nuevas funcionalidades o incluso convertirlo en una plataforma más grande." },
    { q: "¿Qué nivel de soporte ofrecen?", a: "Ofrezco soporte directo y personalizado. No tratás con intermediarios: hablás directamente conmigo para resolver dudas, ajustar el sistema o implementar mejoras." },
    { q: "¿El sistema funciona en cualquier dispositivo?", a: "Sí, es 100% responsive. Funciona de forma óptima en celulares, tablets y computadoras sin necesidad de instalar nada." },
    { q: "¿Qué pasa si necesito cambios o nuevas funcionalidades?", a: "El sistema está preparado para evolucionar. Podés solicitar mejoras en cualquier momento y las implementamos de forma progresiva según las necesidades de tu negocio." },
    { q: "¿Incluye hosting, dominio y puesta en producción?", a: "Sí, puedo encargarme de todo el proceso técnico para que recibas el sistema listo para usar, sin preocuparte por configuraciones." },
    { q: "¿Cómo garantizan la confiabilidad del sistema?", a: "Trabajamos con tecnologías modernas, seguras y estables, asegurando disponibilidad, rendimiento y protección de la información." },
    { q: "¿Este sistema es para mi tipo de negocio?", a: "Si tu negocio maneja turnos, reservas o procesos repetitivos, se puede automatizar. Analizamos tu caso y te mostramos cómo aplicarlo antes de avanzar." },
    { q: "¿Cómo es el proceso de trabajo?", a: "Primero entendemos tu negocio, luego te mostramos una propuesta clara, desarrollamos la solución y te acompañamos en la implementación para que empieces a usarla sin fricción." }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white overflow-x-hidden">

      <style>{`
        /* ── Reveal animations ── */
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: 60ms; }
        .d2 { transition-delay: 130ms; }
        .d3 { transition-delay: 200ms; }
        .d4 { transition-delay: 270ms; }

        /* ── Dot grid ── */
        .bg-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.042) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* ── Noise overlay ── */
        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9998;
          opacity: 0.024;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        /* ── Glass card ── */
        .glass {
          background: rgba(255,255,255,0.016);
          border: 1px solid rgba(255,255,255,0.062);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.055),
            0 2px 12px rgba(0,0,0,0.15);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
        }
        .glass:hover {
          background: rgba(255,255,255,0.028);
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-2px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 20px 44px rgba(0,0,0,0.38),
            0 4px 12px rgba(0,0,0,0.18);
        }

        /* ── Top shimmer line ── */
        .shimmer-top::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.15) 65%, transparent 100%);
        }

        /* ── Service card icon ── */
        .svc-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.075);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease;
        }
        .glass:hover .svc-icon {
          background: rgba(255,255,255,0.085);
          border-color: rgba(255,255,255,0.13);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.07); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.12); }

        /* ── Slow pan for bg image ── */
        @keyframes slowPan {
          0%, 100% { transform: scale(1) translate(0,0); }
          50%       { transform: scale(1.06) translate(-6px,-4px); }
        }
        .animate-pan { animation: slowPan 30s ease-in-out infinite; }

        /* ── Input focus ring ── */
        input:focus, textarea:focus {
          box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 0 0 3px rgba(255,255,255,0.04);
        }

        /* ── FAQ open state border ── */
        .faq-open {
          border-left: 2px solid rgba(255,255,255,0.12);
        }
      `}</style>

      {/* Animated background */}
      <AnimatedBackground />

      {/* Noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/88 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_1px_0_rgba(255,255,255,0.03),0_4px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="w-8 h-8 bg-white rounded-[9px] flex items-center justify-center group-hover:bg-zinc-100 transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_0_14px_rgba(255,255,255,0.08)]">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="text-white font-semibold tracking-[0.16em] text-[11px]">NC SOFTWARE</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 text-sm font-medium">
            {[['sobre-mi','Sobre mí'],['proceso','Proceso'],['servicios','Servicios'],['faq','FAQ']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-3.5 py-2 text-[13px] text-zinc-500 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-200 font-medium"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="ml-4 px-5 py-2 bg-white text-black text-[13px] font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.13),0_2px_4px_rgba(0,0,0,0.25)]"
            >
              Contactar
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-zinc-500 hover:text-white p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#080808]/96 backdrop-blur-2xl border-b border-white/[0.05] px-5 pb-5 pt-1 flex flex-col gap-0.5">
            {[['sobre-mi','Sobre mí'],['proceso','Proceso'],['servicios','Servicios'],['faq','FAQ'],['contacto','Contactar']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all text-[13px] font-medium"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="relative" style={{ zIndex: 2 }}>

        {/* ── HERO ── */}
        <section id="inicio" className="relative pt-40 pb-32 md:pt-56 md:pb-44 px-6 overflow-hidden">

          {/* Layered backgrounds */}
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/25 to-[#080808]" />

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-4xl">

              {/* Badge */}
              <div className="reveal active inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-zinc-400 text-[11px] font-medium mb-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Demo gratis · Setup en 48hs
              </div>

              {/* Eyebrow */}
              <p className="reveal active text-zinc-600 font-mono text-[10px] mb-5 flex items-center gap-2 tracking-[0.22em] uppercase">
                <Code2 className="w-3 h-3" />
                Desarrollo · Automatización · Integración
              </p>

              {/* Headline */}
              <h1 className="reveal active text-[52px] md:text-[80px] lg:text-[92px] font-bold text-white tracking-[-0.03em] leading-[0.96] mb-8">
                Software a medida.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-700">
                  Para negocios que crecen.
                </span>
              </h1>

              {/* Subheading */}
              <p className="reveal active d1 text-[15px] md:text-[17px] text-zinc-500 max-w-[520px] leading-[1.75] mb-14">
                Sistemas de turnos, automatización de procesos e integración de pagos con Mercado Pago.
                Soluciones robustas, listas para escalar.
              </p>

              {/* CTAs */}
              <div className="reveal active d2 flex flex-wrap gap-3.5 mb-20">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="group bg-white text-black px-7 py-3.5 text-[13px] font-semibold rounded-xl flex items-center gap-2 hover:bg-zinc-100 transition-all duration-200 shadow-[0_0_28px_rgba(255,255,255,0.14),0_2px_8px_rgba(0,0,0,0.3)]"
                >
                  Iniciar un proyecto
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => scrollToSection('trabajos')}
                  className="px-7 py-3.5 text-[13px] border border-white/[0.08] text-zinc-400 font-medium rounded-xl hover:bg-white/[0.04] hover:border-white/[0.14] hover:text-white transition-all duration-200"
                >
                  Ver portafolio
                </button>
              </div>

              {/* Stats */}
              <div className="reveal active d3 pt-12 border-t border-white/[0.05] flex flex-wrap gap-12">
                {[
                  { value: '15+', label: 'Proyectos entregados' },
                  { value: '48hs', label: 'Tiempo de respuesta' },
                  { value: '100%', label: 'Soporte personalizado' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-[22px] font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-[11px] text-zinc-600 mt-0.5 tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section id="sobre-mi" className="py-32 px-6">
          <div className="max-w-5xl mx-auto reveal">
            <div className="relative glass shimmer-top rounded-2xl overflow-hidden p-12 md:p-16">
              {/* Subtle corner glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col md:flex-row items-start gap-12">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                  <Terminal className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-zinc-600 font-mono text-[10px] tracking-[0.22em] uppercase mb-3">Sobre mí</p>
                  <p className="text-xl md:text-[22px] text-zinc-200 leading-[1.6] font-light mb-4">
                    Soy <span className="text-white font-semibold">Nicolás Cirulli</span>, desarrollador enfocado en crear
                    soluciones digitales que realmente le sirven a tu negocio.
                  </p>
                  <p className="text-zinc-500 leading-[1.75] text-[14px] mb-8">
                    Me especializo en sistemas de turnos online, automatización de procesos e integración de medios de pago.
                    Trabajo directamente con vos, sin intermediarios ni tiempos perdidos.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'PostgreSQL', 'Mercado Pago', 'Next.js', 'Tailwind CSS'].map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-[11px] font-mono text-zinc-500 bg-white/[0.035] border border-white/[0.06] rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESO ── */}
        <section id="proceso" className="relative py-36 px-6 overflow-hidden">
          {/* Bg image layer */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.025] animate-pan"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-18 reveal">
              <p className="text-zinc-600 font-mono text-[10px] tracking-[0.22em] uppercase mb-3">Proceso</p>
              <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-[-0.02em]">Cómo trabajamos</h2>
              <p className="text-zinc-500 text-[14px] max-w-md leading-[1.7]">
                Un proceso ágil y transparente. Te acompañamos desde la idea hasta el lanzamiento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "01", title: "Analizamos tu negocio", desc: "Entendemos tus necesidades y objetivos reales antes de escribir una línea de código." },
                { num: "02", title: "Te mostramos una demo", desc: "Visualizás cómo será tu plataforma antes de comprometerte con el desarrollo completo." },
                { num: "03", title: "Implementamos el sistema", desc: "Desarrollamos con código limpio, seguro y preparado para escalar sin límites." },
                { num: "04", title: "Empezás a usarlo", desc: "Lanzamiento rápido con capacitación incluida para sacarle el máximo provecho desde el día uno." }
              ].map((step, i) => (
                <div
                  key={i}
                  className={`relative glass rounded-xl p-8 group reveal d${i + 1} overflow-hidden`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                  <div className="text-[68px] font-black text-white/[0.04] mb-5 leading-none group-hover:text-white/[0.07] transition-colors duration-500 select-none -ml-1">
                    {step.num}
                  </div>
                  <h3 className="text-[13px] font-semibold text-white mb-2.5 leading-snug">{step.title}</h3>
                  <p className="text-zinc-600 text-[12.5px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section id="servicios" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 reveal">
              <p className="text-zinc-600 font-mono text-[10px] tracking-[0.22em] uppercase mb-3">Servicios</p>
              <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-[-0.02em]">Lo que construimos</h2>
              <p className="text-zinc-500 text-[14px] max-w-md leading-[1.7]">
                Soluciones integrales para negocios que quieren crecer sin depender de procesos manuales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: <Calendar className="w-[18px] h-[18px]" />,
                  title: "Sistemas de Turnos",
                  desc: "Reservas online 100% automatizadas. Reducí cancelaciones y gestioná tu agenda sin intervención manual.",
                  featured: true
                },
                {
                  icon: <CreditCard className="w-[18px] h-[18px]" />,
                  title: "Mercado Pago Integrado",
                  desc: "Cobros online seguros. Automatizá el proceso de pago y asegurá ingresos antes de cada turno.",
                  featured: true
                },
                {
                  icon: <Terminal className="w-[18px] h-[18px]" />,
                  title: "Aplicaciones a Medida",
                  desc: "Sistemas de gestión, plataformas SaaS y paneles administrativos adaptados a tu flujo de trabajo."
                },
                {
                  icon: <Layout className="w-[18px] h-[18px]" />,
                  title: "Desarrollo Web",
                  desc: "Sitios corporativos y landing pages optimizados para SEO, velocidad y conversión."
                },
                {
                  icon: <Smartphone className="w-[18px] h-[18px]" />,
                  title: "Diseño Responsive",
                  desc: "Interfaces que funcionan perfecto en celular, tablet y desktop. Sin instalar nada."
                },
                {
                  icon: <Zap className="w-[18px] h-[18px]" />,
                  title: "Automatización",
                  desc: "Conectamos tus herramientas y eliminamos tareas repetitivas para que te enfoques en crecer."
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className={`relative glass rounded-xl p-8 group reveal d${(i % 3) + 1} overflow-hidden`}
                >
                  {service.featured && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.22] to-transparent" />
                  )}
                  <div className="svc-icon mb-6 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-[13px] font-semibold text-white mb-2.5 leading-snug">{service.title}</h3>
                  <p className="text-zinc-600 text-[12.5px] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section id="trabajos" className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.006] to-transparent pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <div className="mb-16 reveal">
              <p className="text-zinc-600 font-mono text-[10px] tracking-[0.22em] uppercase mb-3">Portafolio</p>
              <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-[-0.02em]">Trabajos Destacados</h2>
              <p className="text-zinc-500 text-[14px]">Proyectos reales que resuelven problemas reales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Sistema ERP Cloud",
                  desc: "Aplicación completa de gestión de inventario, facturación y recursos humanos para empresa de logística.",
                  tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
                  mockup: (
                    <div className="absolute inset-0 p-6 flex flex-col gap-3">
                      <div className="flex gap-2 items-center mb-1">
                        <div className="h-1.5 w-20 bg-white/10 rounded-full" />
                        <div className="h-1.5 w-12 bg-white/[0.06] rounded-full" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="h-16 bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5">
                            <div className="h-1.5 w-8 bg-white/10 rounded-full mb-2" />
                            <div className="h-4 w-10 bg-white/[0.07] rounded" />
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 bg-white/[0.025] border border-white/[0.05] rounded-lg p-3">
                        <div className="flex gap-3 mb-3">
                          {[...Array(4)].map((_, i) => <div key={i} className="h-1.5 w-10 bg-white/[0.08] rounded-full" />)}
                        </div>
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex gap-3 mb-2 items-center">
                            <div className="h-1.5 w-3 bg-white/[0.05] rounded-full" />
                            <div className="h-1.5 flex-1 bg-white/[0.04] rounded-full" />
                            <div className="h-1.5 w-10 bg-white/[0.06] rounded-full" />
                            <div className="h-4 w-8 bg-white/[0.04] rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                },
                {
                  title: "E-commerce + Turnos",
                  desc: "Plataforma de ventas online con sistema de reservas integrado, Mercado Pago y panel administrativo.",
                  tags: ['Next.js', 'Mercado Pago', 'Supabase', 'Tailwind'],
                  mockup: (
                    <div className="absolute inset-0 p-6 flex flex-col gap-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                        <div className="h-6 w-20 bg-white/[0.06] rounded-lg border border-white/[0.06]" />
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 flex-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3 flex flex-col">
                            <div className="flex-1 bg-white/[0.04] rounded-lg mb-2.5 min-h-[32px]" />
                            <div className="h-1.5 w-3/4 bg-white/[0.07] rounded-full mb-1.5" />
                            <div className="h-1.5 w-1/2 bg-white/[0.05] rounded-full mb-2" />
                            <div className="h-5 w-full bg-white/[0.06] rounded-md border border-white/[0.06]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }
              ].map((project, i) => (
                <div key={i} className={`group glass rounded-2xl overflow-hidden reveal d${i + 1}`}>
                  {/* Mockup area */}
                  <div className="aspect-[16/9] bg-[#0b0b0b] relative overflow-hidden border-b border-white/[0.05]">
                    {/* Browser chrome */}
                    <div className="absolute top-3 left-4 flex gap-1.5 z-10">
                      <div className="w-2 h-2 rounded-full bg-white/[0.06]" />
                      <div className="w-2 h-2 rounded-full bg-white/[0.06]" />
                      <div className="w-2 h-2 rounded-full bg-white/[0.06]" />
                    </div>
                    <div className="absolute inset-0 top-8 group-hover:scale-[1.015] transition-transform duration-700 ease-out">
                      {project.mockup}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/65 to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[16px] font-bold text-white tracking-tight">{project.title}</h3>
                      <div className="flex gap-3 text-zinc-700">
                        <a href="#" className="hover:text-zinc-400 transition-colors"><GitBranch className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-zinc-400 transition-colors"><ExternalLink className="w-4 h-4" /></a>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-[13px] mb-5 leading-[1.65]">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/[0.035] text-zinc-500 text-[11px] font-mono rounded-lg border border-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 reveal">
              <p className="text-zinc-600 font-mono text-[10px] tracking-[0.22em] uppercase mb-3">FAQ</p>
              <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-3 tracking-[-0.02em]">Preguntas Frecuentes</h2>
              <p className="text-zinc-500 text-[13px] leading-relaxed">Todo lo que necesitás saber antes de empezar.</p>
            </div>

            <div className="space-y-1.5 reveal d1">
              {faqs.map((faq, i) => (
                <div key={i} className={`glass rounded-xl overflow-hidden transition-all duration-200 ${openFaq === i ? 'faq-open' : ''}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
                  >
                    <span className={`font-medium pr-4 text-[13px] leading-snug transition-colors duration-200 ${openFaq === i ? 'text-white' : 'text-zinc-300'}`}>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-600 transition-all duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180 text-zinc-400' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 pt-0 text-zinc-500 text-[13px] leading-[1.75] border-t border-white/[0.04]">
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="relative py-36 px-6 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.014] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

              {/* Left: info */}
              <div className="reveal">
                <p className="text-zinc-600 font-mono text-[10px] tracking-[0.22em] uppercase mb-4">Contacto</p>
                <h2 className="text-[40px] md:text-[52px] font-bold text-white mb-6 leading-[0.97] tracking-[-0.03em]">
                  Empecemos<br />a construir.
                </h2>
                <p className="text-zinc-500 leading-[1.75] mb-10 text-[14px] max-w-xs">
                  ¿Tenés un proyecto en mente? Contame qué necesitás y te respondo en menos de 24hs con una propuesta concreta.
                </p>

                <a
                  href="mailto:contacto@ncsoftware.dev"
                  className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group mb-10 w-fit"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:bg-white/[0.07] transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <Mail className="w-[15px] h-[15px]" />
                  </div>
                  <span className="text-[13px]">contacto@ncsoftware.dev</span>
                </a>

                <div className="space-y-3">
                  {[
                    'Demo gratuita sin compromiso',
                    'Propuesta en menos de 24hs',
                    'Soporte personalizado directo',
                    'Sin intermediarios',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-zinc-500 text-[13px]">
                      <CheckCircle2 className="w-[14px] h-[14px] text-green-500/80 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className="relative glass shimmer-top rounded-2xl p-8 reveal d2 overflow-hidden">
                <div className="absolute -top-20 right-0 w-48 h-48 bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />
                <form onSubmit={handleContactSubmit} className="relative space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-medium text-zinc-600 mb-2 tracking-[0.14em] uppercase">
                      Nombre o Empresa
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-white/[0.025] border border-white/[0.07] rounded-lg px-4 py-3 text-white text-[13px] focus:outline-none focus:border-white/[0.18] focus:bg-white/[0.04] transition-all duration-200 placeholder:text-zinc-700"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-medium text-zinc-600 mb-2 tracking-[0.14em] uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/[0.025] border border-white/[0.07] rounded-lg px-4 py-3 text-white text-[13px] focus:outline-none focus:border-white/[0.18] focus:bg-white/[0.04] transition-all duration-200 placeholder:text-zinc-700"
                      placeholder="hola@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-medium text-zinc-600 mb-2 tracking-[0.14em] uppercase">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-white/[0.025] border border-white/[0.07] rounded-lg px-4 py-3 text-white text-[13px] focus:outline-none focus:border-white/[0.18] focus:bg-white/[0.04] transition-all duration-200 resize-none placeholder:text-zinc-700"
                      placeholder="Contame sobre tu proyecto..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full font-semibold py-3.5 rounded-xl transition-all duration-200 text-[13px] ${
                      formStatus === 'success'
                        ? 'bg-green-500/12 text-green-400/90 border border-green-500/20'
                        : 'bg-white text-black hover:bg-zinc-100 shadow-[0_0_24px_rgba(255,255,255,0.12),0_2px_8px_rgba(0,0,0,0.3)] disabled:opacity-40 disabled:cursor-not-allowed'
                    }`}
                  >
                    {formStatus === 'submitting'
                      ? 'Enviando...'
                      : formStatus === 'success'
                      ? '✓ Mensaje enviado'
                      : 'Enviar Mensaje'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-14 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-white rounded-[8px] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <Terminal className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="text-white font-semibold tracking-[0.16em] text-[10px]">NC SOFTWARE</span>
          </div>

          <p className="text-zinc-700 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Nicolás Cirulli · Todos los derechos reservados.
          </p>

          <div className="flex gap-5">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-300 transition-all hover:-translate-y-0.5 duration-200" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-300 transition-all hover:-translate-y-0.5 duration-200" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://instagram.com/tu-cuenta" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-300 transition-all hover:-translate-y-0.5 duration-200" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>

        </div>
      </footer>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/20 hover:scale-[1.08] hover:shadow-[#25D366]/35 hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="absolute right-[56px] bg-[#0e0e0e] border border-white/[0.07] text-white text-[11px] font-medium px-3.5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0 shadow-2xl">
          ¡Hablemos de tu proyecto!
        </span>
      </a>

    </div>
  );
}
