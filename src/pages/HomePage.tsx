﻿﻿﻿﻿﻿﻿import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ShieldCheck,
  MapPin,
  Wrench,
  Cpu,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Truck,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { BrandCarousel } from '@/components/BrandCarousel';
import { CTABanner } from '@/components/CTABanner';
import { services } from '@/data/services';
import { machines } from '@/data/machines';
import { testimonials } from '@/data/testimonials';
import { blogArticles } from '@/data/blog';
import { defaultWhatsAppMessage, siteConfig } from '@/data/site';
import logo from "../assets/logo/Ativo 7.png"
import imgHero from "../assets/image/pexels-photo-18543179.jpg"
import imgAbout from "../assets/image/equipe-awp.jpeg"
import { trackWhatsAppClick } from '@/utils/gtm';

const iconMap: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Wrench,
  Cpu,
};

const stats = [
  { icon: Award, value: '15+', label: 'Anos de experiência' },
  { icon: Users, value: '500+', label: 'Clientes atendidos' },
  { icon: Truck, value: '9', label: 'Marcas especializadas' },
  { icon: MapPin, value: 'BR', label: 'Atendimento nacional' },
];

export function HomePage() {
  return (
    <>
      <SEO
        title="AWP Service | Melhor Empresa de Assistência Técnica de Máquinas PTA do Brasil"
        description="A melhor empresa de assistência técnica de máquinas PTA do Brasil. Manutenção preventiva, corretiva e diagnóstico avançado de plataformas elevatórias Haulotte, Genie, JLG, Manitou, Skyjack, Zoomlion, Sinoboom, LGMG e LiuGong. Sede em Caxias do Sul - RS. Empresa autorizada multimarcas."
        canonical="https://awpservicepta.com.br/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'AWP Service',
          url: 'https://awpservicepta.com.br',
        }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={imgHero}
            alt="Operário em plataforma elevatória articulada em canteiro de obras"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/90 to-industrial-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-transparent to-industrial-black/60" />
        </div>

        <div className="container-wide relative py-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="section-label">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Assistência Técnica Especializada
                </span>
                <span className="section-label !bg-[#1a56db]/15 !border-[#1a56db]/40 !text-blue-400">
                  ✓ Empresa Autorizada Multimarcas
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-300">
                  <MapPin className="h-4 w-4 text-gold-500" />
                  Sede em Caxias do Sul — RS
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
                A Melhor Empresa de{' '}
                <span className="text-gold-500">Assistência Técnica</span> de Máquinas PTA do Brasil
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                Especialistas em manutenção preventiva, corretiva e diagnóstico eletrônico avançado
                de Plataformas de Trabalho Aéreo. <strong className="text-white font-semibold">Empresa autorizada multimarcas</strong>, com
                infraestrutura própria e corpo técnico certificado.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={defaultWhatsAppMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base"
                >
                  <MessageCircle className="h-5 w-5" />
                  Solicitar Orçamento no WhatsApp
                </a>
                <Link to="/servicos" className="btn-secondary text-base">
                  Conheça nossos serviços
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-500" />
                  Atendimento para todo o Brasil
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-500" />
                  Laboratório de diagnósticos próprio
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-500" />
                  Conformidade NR-18 e NR-35
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-industrial-graphite border-y border-gray-800 py-10">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <stat.icon className="h-8 w-8 text-gold-500 mb-2" />
                  <span className="text-3xl font-extrabold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-400 mt-1">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Services */}
      <section className="py-20">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label">Nossos Serviços</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                Soluções técnicas completas para sua frota de PTA
              </h2>
              <p className="mt-4 text-gray-400">
                Da inspeção preventiva ao diagnóstico eletrônico de falhas complexas —
                cobrimos todo o ciclo de manutenção das suas plataformas elevatórias.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <Reveal key={service.slug} delay={i * 100}>
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="card-surface group block h-full overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-industrial-graphite to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500 text-industrial-black">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors">
                        {service.shortTitle}
                      </h3>
                      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        {service.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                        Saiba mais
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={imgAbout}
                  alt="Técnicos da AWP Service realizando manutenção em oficina"
                  className="rounded-2xl object-cover w-full h-[720px]"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 hidden md:block">
                  <div className="rounded-2xl bg-gold-500 p-6 text-industrial-black shadow-xl">
                    <p className="text-4xl font-extrabold">15+</p>
                    <p className="text-sm font-semibold">anos de experiência</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="section-label">Sobre a AWP Service</span>
                  <span className="section-label !bg-[#1a56db]/15 !border-[#1a56db]/40 !text-blue-400">
                    ✓ Empresa Autorizada Multimarcas
                  </span>
                </div>
                <img src={logo} alt="AWP SERVICE" className="h-40 mt-10" />
                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Infraestrutura própria e corpo técnico especializado
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  A AWP Service é a uma das melhores empresas de assistência técnica de máquinas PEMT (Plataforma Elevatória Móvel de Trabalho) e PTA (Plataforma de Trabalho Aéreo) do Brasil,
                  com sede em Caxias do Sul — RS. Somos <strong className="text-white font-semibold">empresa autorizada multimarcas</strong>,
                  com oficina completa, laboratório de diagnósticos eletrônicos e estoque de peças
                  para as principais marcas do mercado.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Oficina equipada para reparos hidráulicos, elétricos e estruturais',
                    'Laboratório de diagnósticos com ferramentas proprietárias de cada fabricante',
                    'Empresa autorizada — Haulotte, Genie, JLG, Manitou, Skyjack, Zoomlion, Sinoboom, LGMG e LiuGong',
                    'Atendimento técnico em todo o Brasil a partir da matriz no RS',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/sobre" className="mt-8 btn-secondary">
                  Conheça a empresa
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Machines preview */}
      <section className="py-20">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label">Catálogo de Máquinas</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                Atendemos todos os tipos de plataforma elevatória
              </h2>
              <p className="mt-4 text-gray-400">
                Selecione o tipo de equipamento da sua frota e solicite manutenção especializada.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {machines.map((machine, i) => (
              <Reveal key={machine.slug} delay={i * 100}>
                <Link
                  to={`/maquinas/${machine.slug}`}
                  className="card-surface group block overflow-hidden h-full"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-graphite via-industrial-graphite/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white group-hover:text-gold-500 transition-colors">
                      {machine.shortName}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {machine.specs[0].label}: {machine.specs[0].value}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label">Depoimentos</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                O que nossos clientes dizem
              </h2>
              <p className="mt-4 text-gray-400">
                Gestores de frota, engenheiros e diretores confiam na AWP Service.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="card-surface p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="mt-5 pt-5 border-t border-gray-800">
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role} — {t.company}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="section-label">Blog Técnico</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                  Conteúdo técnico para gestores de frota
                </h2>
                <p className="mt-3 text-gray-400 max-w-xl">
                  Artigos aprofundados sobre manutenção, diagnóstico eletrônico e conformidade normativa.
                </p>
              </div>
              <Link to="/blog" className="btn-secondary shrink-0">
                Ver todos os artigos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogArticles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="card-surface group block overflow-hidden h-full"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-industrial-black/80 backdrop-blur px-3 py-1 text-xs font-semibold text-gold-500">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors leading-snug line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      {/* Location */}
      <section className="py-20 bg-industrial-dark border-t border-gray-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <span className="section-label">Localização</span>
                <h2 className="mt-4 text-3xl font-extrabold text-white">
                  Sede em Caxias do Sul — RS
                </h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Atendemos clientes em todo o Brasil a partir de nossa matriz no Rio Grande do Sul.
                  Nossa estrutura conta com oficina completa e laboratório de diagnósticos.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <p className="font-semibold text-white">{siteConfig.address.street}</p>
                      <p>{siteConfig.address.district ? `${siteConfig.address.district}, ` : ''}{siteConfig.address.city} — {siteConfig.address.state}</p>
                      <p>CEP {siteConfig.address.zip}</p>
                    </div>
                  </div>
                </div>
                <a
                  href={siteConfig.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn-secondary"
                >
                  <MapPin className="h-4 w-4" />
                  Ver no Google Maps
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden border border-gray-800 h-[400px]">
                <iframe
                  title="Localização da AWP Service em Caxias do Sul - RS"
                  src={siteConfig.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
