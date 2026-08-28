import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { services } from '@/data/services';

const iconMap: Record<string, typeof ShieldCheck> = { ShieldCheck, Wrench, Cpu };

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Serviços de Assistência Técnica de Máquinas PTA | AWP Service"
        description="Manutenção preventiva, corretiva e diagnóstico eletrônico avançado de plataformas elevatórias. Atendemos todas as principais marcas com infraestrutura própria em Caxias do Sul - RS."
        canonical="https://awpservicepta.com.br/servicos"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: `https://awpservicepta.com.br/servicos/${s.slug}`,
          })),
        }}
      />

      <PageHero
        label="Serviços"
        title="Assistência técnica completa para plataformas elevatórias"
        subtitle="Da manutenção preventiva ao diagnóstico eletrônico de falhas complexas — cobrimos todo o ciclo de manutenção das suas máquinas PTA."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Serviços' }]}
      />

      <section className="py-16">
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <Reveal key={service.slug} delay={i * 100}>
                  <div className="card-surface overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-industrial-graphite to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute top-4 left-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-industrial-black">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-8">
                      <h2 className="text-2xl font-extrabold text-white">{service.title}</h2>
                      <p className="mt-3 text-gray-400 leading-relaxed">{service.description}</p>

                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{h}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/servicos/${service.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-500 hover:text-gold-400 transition-colors"
                      >
                        Conhecer o serviço em detalhes
                        <ArrowRight className="h-4 w-4" />
                      </Link>
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
