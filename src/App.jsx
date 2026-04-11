import React, { useState, useEffect } from 'react';
import {
  Terminal, Layout, Smartphone, Mail, Code2, ArrowRight,
  GitBranch, ExternalLink, Calendar, CreditCard, ChevronDown,
  CheckCircle2, Zap, Shield
} from 'lucide-react';

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
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: 80ms; }
        .d2 { transition-delay: 180ms; }
        .d3 { transition-delay: 280ms; }
        .d4 { transition-delay: 380ms; }

        /* ── Dot grid ── */
        .bg-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── Noise overlay ── */
        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9998;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        /* ── Glow orbs ── */
        .hero-glow-top {
          position: absolute;
          top: -280px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 700px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.035) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-glow-left {
          position: absolute;
          top: 5%;
          left: -280px;
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse at center, rgba(120,80,255,0.055) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-glow-right {
          position: absolute;
          bottom: 0;
          right: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(0,180,255,0.03) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ── Glass card ── */
        .glass {
          background: rgba(255,255,255,0.022);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .glass:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-3px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.5);
        }

        /* ── Top shimmer line ── */
        .shimmer-top::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }

        /* ── Service card icon ── */
        .svc-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
        }
        .glass:hover .svc-icon {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.15);
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }

        /* ── Slow pan for bg image ── */
        @keyframes slowPan {
          0%, 100% { transform: scale(1) translate(0,0); }
          50%       { transform: scale(1.05) translate(-8px,-6px); }
        }
        .animate-pan { animation: slowPan 24s ease-in-out infinite; }

        /* ── Input focus ring ── */
        input:focus, textarea:focus {
          box-shadow: 0 0 0 2px rgba(255,255,255,0.07);
        }
      `}</style>

      {/* Noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/85 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_1px_24px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-zinc-200 transition-colors shadow-[0_0_12px_rgba(255,255,255,0.12)]">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="text-white font-bold tracking-widest text-sm">NC SOFTWARE</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 text-sm font-medium">
            {[['sobre-mi','Sobre mí'],['proceso','Proceso'],['servicios','Servicios'],['faq','FAQ']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="ml-3 px-5 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_16px_rgba(255,255,255,0.12)]"
            >
              Contactar
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-white/[0.05] px-5 pb-4 flex flex-col gap-1">
            {[['sobre-mi','Sobre mí'],['proceso','Proceso'],['servicios','Servicios'],['faq','FAQ'],['contacto','Contactar']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all text-sm"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>

        {/* ── HERO ── */}
        <section id="inicio" className="relative pt-36 pb-28 md:pt-52 md:pb-40 px-6 overflow-hidden">

          {/* Layered backgrounds */}
          <div className="absolute inset-0 bg-grid" />
          <div className="hero-glow-top" />
          <div className="hero-glow-left" />
          <div className="hero-glow-right" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/20 to-[#080808]" />

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-4xl">

              {/* Badge */}
              <div className="reveal active inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm font-medium mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Demo gratis · Setup en 48hs
              </div>

              {/* Eyebrow */}
              <p className="reveal active text-zinc-600 font-mono text-xs mb-5 flex items-center gap-2 tracking-[0.2em] uppercase">
                <Code2 className="w-3.5 h-3.5" />
                Desarrollo · Automatización · Integración
              </p>

              {/* Headline */}
              <h1 className="reveal active text-5xl md:text-[70px] font-bold text-white tracking-tight leading-[1.04] mb-8">
                Software a medida.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-700">
                  Para negocios que crecen.
                </span>
              </h1>

              {/* Subheading */}
              <p className="reveal active d1 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
                Sistemas de turnos, automatización de procesos e integración de pagos con Mercado Pago.
                Soluciones robustas, listas para escalar.
              </p>

              {/* CTAs */}
              <div className="reveal active d2 flex flex-wrap gap-4 mb-16">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="group bg-white text-black px-7 py-3.5 font-semibold rounded-xl flex items-center gap-2 hover:bg-zinc-100 transition-all duration-200 shadow-[0_0_24px_rgba(255,255,255,0.14)]"
                >
                  Iniciar un proyecto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => scrollToSection('trabajos')}
                  className="px-7 py-3.5 border border-white/[0.1] text-white font-semibold rounded-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-200"
                >
                  Ver portafolio
                </button>
              </div>

              {/* Stats */}
              <div className="reveal active d3 pt-10 border-t border-white/[0.06] flex flex-wrap gap-10">
                {[
                  { value: '15+', label: 'Proyectos entregados' },
                  { value: '48hs', label: 'Tiempo de respuesta' },
                  { value: '100%', label: 'Soporte personalizado' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-zinc-500 mt-1 tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section id="sobre-mi" className="py-28 px-6">
          <div className="max-w-5xl mx-auto reveal">
            <div className="relative glass shimmer-top rounded-2xl overflow-hidden p-10 md:p-14">
              {/* Subtle corner glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-40 bg-white/[0.025] rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col md:flex-row items-start gap-10">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                  <Terminal className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-3">Sobre mí</p>
                  <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-light mb-4">
                    Soy <span className="text-white font-semibold">Nicolás Cirulli</span>, desarrollador enfocado en crear
                    soluciones digitales que realmente le sirven a tu negocio.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mb-7">
                    Me especializo en sistemas de turnos online, automatización de procesos e integración de medios de pago.
                    Trabajo directamente con vos, sin intermediarios ni tiempos perdidos.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'PostgreSQL', 'Mercado Pago', 'Next.js', 'Tailwind CSS'].map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-lg"
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
        <section id="proceso" className="relative py-32 px-6 overflow-hidden">
          {/* Bg image layer */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.028] animate-pan"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal">
              <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-3">Proceso</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cómo trabajamos</h2>
              <p className="text-zinc-400 max-w-xl">
                Un proceso ágil y transparente. Te acompañamos desde la idea hasta el lanzamiento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { num: "01", title: "Analizamos tu negocio", desc: "Entendemos tus necesidades y objetivos reales antes de escribir una línea de código." },
                { num: "02", title: "Te mostramos una demo", desc: "Visualizás cómo será tu plataforma antes de comprometerte con el desarrollo completo." },
                { num: "03", title: "Implementamos el sistema", desc: "Desarrollamos con código limpio, seguro y preparado para escalar sin límites." },
                { num: "04", title: "Empezás a usarlo", desc: "Lanzamiento rápido con capacitación incluida para sacarle el máximo provecho desde el día uno." }
              ].map((step, i) => (
                <div
                  key={i}
                  className={`relative glass rounded-xl p-7 group reveal d${i + 1} overflow-hidden`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
                  <div className="text-[52px] font-black text-white/[0.05] mb-5 leading-none group-hover:text-white/[0.09] transition-colors duration-300 select-none">
                    {step.num}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section id="servicios" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 reveal">
              <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-3">Servicios</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que construimos</h2>
              <p className="text-zinc-400 max-w-xl">
                Soluciones integrales para negocios que quieren crecer sin depender de procesos manuales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <Calendar className="w-5 h-5" />,
                  title: "Sistemas de Turnos",
                  desc: "Reservas online 100% automatizadas. Reducí cancelaciones y gestioná tu agenda sin intervención manual.",
                  featured: true
                },
                {
                  icon: <CreditCard className="w-5 h-5" />,
                  title: "Mercado Pago Integrado",
                  desc: "Cobros online seguros. Automatizá el proceso de pago y asegurá ingresos antes de cada turno.",
                  featured: true
                },
                {
                  icon: <Terminal className="w-5 h-5" />,
                  title: "Aplicaciones a Medida",
                  desc: "Sistemas de gestión, plataformas SaaS y paneles administrativos adaptados a tu flujo de trabajo."
                },
                {
                  icon: <Layout className="w-5 h-5" />,
                  title: "Desarrollo Web",
                  desc: "Sitios corporativos y landing pages optimizados para SEO, velocidad y conversión."
                },
                {
                  icon: <Smartphone className="w-5 h-5" />,
                  title: "Diseño Responsive",
                  desc: "Interfaces que funcionan perfecto en celular, tablet y desktop. Sin instalar nada."
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  title: "Automatización",
                  desc: "Conectamos tus herramientas y eliminamos tareas repetitivas para que te enfoques en crecer."
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className={`relative glass rounded-xl p-7 group reveal d${(i % 3) + 1} overflow-hidden`}
                >
                  {service.featured && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  )}
                  <div className="svc-icon mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section id="trabajos" className="relative py-28 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.008] to-transparent pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <div className="mb-14 reveal">
              <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-3">Portafolio</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trabajos Destacados</h2>
              <p className="text-zinc-400 max-w-xl">Proyectos reales que resuelven problemas reales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="aspect-[16/9] bg-[#0c0c0c] relative overflow-hidden border-b border-white/[0.06]">
                    {/* Browser chrome dots */}
                    <div className="absolute top-3 left-4 flex gap-1.5 z-10">
                      <div className="w-2 h-2 rounded-full bg-white/[0.07]" />
                      <div className="w-2 h-2 rounded-full bg-white/[0.07]" />
                      <div className="w-2 h-2 rounded-full bg-white/[0.07]" />
                    </div>
                    <div className="absolute inset-0 top-8 group-hover:scale-[1.02] transition-transform duration-500">
                      {project.mockup}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/70 to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <div className="flex gap-3 text-zinc-600">
                        <a href="#" className="hover:text-zinc-300 transition-colors"><GitBranch className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-zinc-300 transition-colors"><ExternalLink className="w-4 h-4" /></a>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-5 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/[0.04] text-zinc-400 text-xs font-mono rounded-lg border border-white/[0.06]">
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
        <section id="faq" className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Preguntas Frecuentes</h2>
              <p className="text-zinc-400 text-sm">Todo lo que necesitás saber antes de empezar.</p>
            </div>

            <div className="space-y-2 reveal d1">
              {faqs.map((faq, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
                  >
                    <span className="font-medium text-zinc-200 pr-4 text-sm leading-snug">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180 text-zinc-300' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5 pt-4 text-zinc-400 text-sm leading-relaxed border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="relative py-32 px-6 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.012] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white/[0.018] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

              {/* Left: info */}
              <div className="reveal">
                <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">Contacto</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Empecemos<br />a construir.
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-10 text-sm">
                  ¿Tenés un proyecto en mente? Contame qué necesitás y te respondo en menos de 24hs con una propuesta concreta.
                </p>

                <a
                  href="mailto:contacto@ncsoftware.dev"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group mb-10 w-fit"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">contacto@ncsoftware.dev</span>
                </a>

                <div className="space-y-3">
                  {[
                    'Demo gratuita sin compromiso',
                    'Propuesta en menos de 24hs',
                    'Soporte personalizado directo',
                    'Sin intermediarios',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className="relative glass shimmer-top rounded-2xl p-8 reveal d2 overflow-hidden">
                <div className="absolute -top-20 right-0 w-48 h-48 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
                <form onSubmit={handleContactSubmit} className="relative space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-500 mb-2 tracking-widest uppercase">
                      Nombre o Empresa
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all placeholder:text-zinc-600"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-500 mb-2 tracking-widest uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all placeholder:text-zinc-600"
                      placeholder="hola@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-zinc-500 mb-2 tracking-widest uppercase">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all resize-none placeholder:text-zinc-600"
                      placeholder="Contame sobre tu proyecto..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm ${
                      formStatus === 'success'
                        ? 'bg-green-500/15 text-green-400 border border-green-500/25'
                        : 'bg-white text-black hover:bg-zinc-100 shadow-[0_0_24px_rgba(255,255,255,0.12)] disabled:opacity-50 disabled:cursor-not-allowed'
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
      <footer className="border-t border-white/[0.05] py-10 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="text-white font-bold tracking-widest text-xs">NC SOFTWARE</span>
          </div>

          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Nicolás Cirulli · Todos los derechos reservados.
          </p>

          <div className="flex gap-5">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all hover:-translate-y-0.5 duration-200" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all hover:-translate-y-0.5 duration-200" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://instagram.com/tu-cuenta" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all hover:-translate-y-0.5 duration-200" aria-label="Instagram">
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
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/25 hover:scale-110 hover:shadow-[#25D366]/40 hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="absolute right-16 bg-[#111] border border-white/[0.08] text-white text-xs font-medium px-3.5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0 shadow-2xl">
          ¡Hablemos de tu proyecto!
        </span>
      </a>

    </div>
  );
}
