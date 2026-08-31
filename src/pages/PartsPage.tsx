import { Wrench, Package, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { BrandCarousel } from '@/components/BrandCarousel';
import { siteConfig } from '@/data/site';
import { parts } from '@/data/parts';
import { trackWhatsAppClick, trackPartsConsultationClick } from '@/utils/gtm';

function buildPartsWhatsAppUrl(partTitle?: string) {
  const msg = partTitle
    ? `Olá! Gostaria de consultar a peça: ${partTitle}`
    : 'Olá! Gostaria de consultar a disponibilidade de uma peça para minha máquina PTA.';
  return `https://wa.me/55${siteConfig.phoneDigits}?text=${encodeURIComponent(msg)}`;
}

export default function PartsPage() {
  return (
    <div>
      <SEO
        title="Peças para Máquinas PTA | AWP Service — Caxias do Sul - RS"
        description="Catálogo de peças e componentes originais para máquinas PTA (plataformas elevatórias). Baterias tracionárias, bombas hidráulicas, joysticks, controladores, motores elétricos, vedações e muito mais. Compatíveis com Haulotte, Genie, JLG, Manitou, Skyjack, Zoomlion, Sinoboom, LGMG e LiuGong. Empresa autorizada multimarcas em Caxias do Sul - RS."
        canonical="https://awpservicepta.com.br/pecas"
      />

      {/* 1. HERO */}
      <PageHero
        label={<span className="inline-flex items-center gap-2"><Package className="h-3.5 w-3.5" /> Catálogo de Peças</span>}
        title="Peças e Componentes Originais para Máquinas PTA"
        subtitle="A AWP Service, melhor empresa de assistência técnica de máquinas PTA do Brasil, também fornece peças testadas e compatíveis com as principais marcas do mercado: Haulotte, Genie, JLG, Manitou, Skyjack, Zoomlion, Sinoboom, LGMG e LiuGong."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Peças' }]}
      >
        <a
          href={buildPartsWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('parts_page_hero', siteConfig.phoneDigits)}
          className="btn-primary inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Consultar Peça no WhatsApp
        </a>
      </PageHero>

      {/* 2. GRID DE CATÁLOGO */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">
                <Wrench className="h-3.5 w-3.5" />
                9 categorias de peças
              </span>
              <h2 className="mt-4 text-2xl md:text-4xl font-extrabold text-white leading-tight">
                Catálogo de componentes para plataformas elevatórias
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Peças testadas, originais ou compatíveis, com garantia de qualidade e compatibilidade
                confirmada pela equipe técnica da AWP Service.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parts.map((part, i) => (
              <Reveal key={part.slug} delay={i * 70}>
                <div className="card-surface group h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] bg-gray-800/50 overflow-hidden border-b border-gray-800">
                    <img
                      src={part.image}
                      alt={part.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors">
                      {part.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed flex-1">
                      {part.description}
                    </p>
                    <a
                      href={buildPartsWhatsAppUrl(part.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackWhatsAppClick(`parts_card_${part.slug}`, siteConfig.phoneDigits);
                        trackPartsConsultationClick(part.title, `parts_card_${part.slug}`);
                      }}
                      className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-500 hover:bg-gold-500 hover:text-gray-950 transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Consultar no WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE CONFIANÇA / COMPATIBILIDADE */}
      <section className="py-16 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="section-label">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Garantia de compatibilidade
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Compatibilidade com as Principais Marcas do Mercado
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Todas as nossas peças são testadas antes do envio e compatíveis com equipamentos
                  Haulotte, Genie, JLG, Manitou, Skyjack, Zoomlion, Sinoboom, LGMG e LiuGong.
                  Qualidade confirmada pela equipe técnica autorizada multimarcas da AWP Service.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Peças 100% testadas antes do envio',
                    'Compatibilidade confirmada com 9 principais marcas',
                    'Garantia aplicada em todas as peças vendidas',
                    'Suporte técnico pós-venda incluso',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-gray-300">
                      <ShieldCheck className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-surface p-6 md:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-500 mb-4">
                  Marcas atendidas
                </h3>
                <BrandCarousel />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 via-gray-950 to-[#F59E0B]/5 p-8 md:p-14">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                <div className="lg:col-span-3">
                  <span className="section-label">
                    <Package className="h-3.5 w-3.5" />
                    Não encontrou o que precisa?
                  </span>
                  <h2 className="mt-4 text-2xl md:text-4xl font-extrabold text-white leading-tight">
                    Não encontrou a peça que precisa?
                  </h2>
                  <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                    Fale agora com nossa equipe técnica e consulte disponibilidade,
                    compatibilidade e prazo de entrega. Temos fornecedores homologados e acesso a
                    peças raras para todos os modelos do mercado brasileiro.
                  </p>
                </div>
                <div className="lg:col-span-2 lg:text-right">
                  <a
                    href={buildPartsWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('parts_page_final_cta', siteConfig.phoneDigits)}
                    className="btn-primary inline-flex text-base"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Falar com a AWP Service
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
