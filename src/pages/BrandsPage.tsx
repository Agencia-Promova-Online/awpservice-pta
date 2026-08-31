import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { brands } from '@/data/brands';

export function BrandsPage() {
  return (
    <>
      <SEO
        title="Marcas de Plataformas Elevatórias Atendidas | AWP Service"
        description="A AWP Service atende Haulotte, Genie, JLG, Manitou, Skyjack, Zoomlion e Sinoboom. Diagnóstico, peças e manutenção especializada para todas as principais marcas de PTA."
        canonical="https://awpservicepta.com.br/marcas"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: brands.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            url: `https://awpservicepta.com.br/marcas/${b.slug}`,
          })),
        }}
      />

      <PageHero
        label="Marcas Atendidas"
        title="Especialistas em todas as principais marcas de PTA"
        subtitle="Diagnóstico eletrônico, peças e manutenção para as plataformas elevatórias mais utilizadas no Brasil. Selecione a marca da sua frota."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Marcas' }]}
      />

      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <Reveal key={brand.slug} delay={i * 80}>
                <Link
                  to={`/marcas/${brand.slug}`}
                  className="card-surface group overflow-hidden h-full block"
                >
                  <div className="p-8 text-center border-b border-gray-800 min-h-[140px] flex items-center justify-center">
                    <img
                      src={brand.logoImage}
                      alt={`Logo ${brand.name}`}
                      className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{brand.country}</span>
                      <span>{brand.machineTypes.length} tipos</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">{brand.specialty}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {brand.machineTypes.map((type) => (
                        <span
                          key={type}
                          className="rounded-full bg-gray-800 px-2.5 py-1 text-xs text-gray-400"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                      Ver detalhes
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
