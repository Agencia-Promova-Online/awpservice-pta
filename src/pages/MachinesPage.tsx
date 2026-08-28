import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { machines, machineCategories } from '@/data/machines';
import { buildWhatsAppLink, siteConfig } from '@/data/site';
import { trackWhatsAppClick } from '@/utils/gtm';

export function MachinesPage() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? machines : machines.filter((m) => m.category === filter);

  return (
    <>
      <SEO
        title="Catálogo de Máquinas & Serviços PTA | AWP Service"
        description="Catálogo completo de plataformas elevatórias atendidas pela AWP Service: tesoura, articuladas, telescópicas e mastro. Solicite manutenção especializada para sua máquina."
        canonical="https://awpservicepta.com.br/maquinas"
      />

      <PageHero
        label="Catálogo de Máquinas"
        title="Atendemos todos os tipos de plataforma elevatória"
        subtitle="Selecione o tipo de equipamento da sua frota e solicite manutenção especializada com a AWP Service."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Máquinas' }]}
      />

      {/* Filter */}
      <section className="py-8">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gold-500 text-industrial-black'
                  : 'bg-industrial-graphite text-gray-300 border border-gray-800 hover:border-gold-500/40'
              }`}
            >
              Todos
            </button>
            {machineCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setFilter(cat.slug)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  filter === cat.slug
                    ? 'bg-gold-500 text-industrial-black'
                    : 'bg-industrial-graphite text-gray-300 border border-gray-800 hover:border-gold-500/40'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-8 pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((machine, i) => {
              const whatsappLink = buildWhatsAppLink(
                `Olá! Preciso de assistência técnica para uma ${machine.name}. Pode me ajudar?`
              );
              return (
                <Reveal key={machine.slug} delay={i * 80}>
                  <div className="card-surface group overflow-hidden h-full flex flex-col">
                    <Link to={`/maquinas/${machine.slug}`} className="relative h-48 overflow-hidden block">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-industrial-graphite via-transparent to-transparent" />
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <Link to={`/maquinas/${machine.slug}`}>
                        <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors">
                          {machine.name}
                        </h3>
                      </Link>
                      <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-3">
                        {machine.description}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {machine.specs.slice(0, 4).map((spec) => (
                          <div key={spec.label} className="text-xs">
                            <span className="text-gray-500">{spec.label}: </span>
                            <span className="text-gray-300 font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex gap-2 mt-auto">
                        <Link
                          to={`/maquinas/${machine.slug}`}
                          className="btn-secondary flex-1 !py-2.5 !text-xs"
                        >
                          Ver detalhes
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick(`machines_card_${m.slug}`, siteConfig.whatsappNumber)}
                          className="btn-primary !py-2.5 !px-4"
                          aria-label="Solicitar manutenção no WhatsApp"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
