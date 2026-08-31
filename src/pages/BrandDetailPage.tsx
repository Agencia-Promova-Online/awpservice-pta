import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { brands } from '@/data/brands';
import { buildWhatsAppLink, siteConfig } from '@/data/site';
import { trackWhatsAppClick } from '@/utils/gtm';

export function BrandDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) return <Navigate to="/marcas" replace />;

  const whatsappLink = buildWhatsAppLink(
    `Olá! Preciso de assistência técnica para uma plataforma elevatória ${brand.name}. AWP Service pode me ajudar?`
  );

  return (
    <>
      <SEO
        title={`Assistência Técnica ${brand.name} - Manutenção de Plataformas | AWP Service`}
        description={brand.description}
        canonical={`https://awpservicepta.com.br/marcas/${brand.slug}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Brand',
          name: brand.name,
          description: brand.description,
        }}
      />

      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-graphite to-industrial-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] blur-[100px] rounded-full pointer-events-none opacity-20" style={{ background: brand.accentColor }} />

        <div className="container-wide relative">
          <Breadcrumbs
            items={[
              { label: 'Início', to: '/' },
              { label: 'Marcas', to: '/marcas' },
              { label: brand.name },
            ]}
          />
          <Reveal>
            <div className="mt-6 flex items-center gap-4 mb-6">
              <div className="flex h-20 md:h-24 items-center justify-center rounded-xl bg-white/5 border border-gray-800 px-5 md:px-8">
                <img
                  src={brand.logoImage}
                  alt={`Logo ${brand.name}`}
                  className="max-h-12 md:max-h-16 w-auto object-contain"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
              Assistência técnica especializada em {brand.name}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold-500" />
                {brand.country}
              </span>
              <span>{brand.specialty}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <Reveal>
            <p className="text-lg text-gray-300 leading-relaxed">{brand.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Machine types */}
      <section className="py-12 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-white mb-6">Tipos de equipamento atendidos</h2>
          <div className="flex flex-wrap gap-3">
            {brand.machineTypes.map((type) => (
              <span
                key={type}
                className="rounded-lg border border-gray-700 bg-industrial-graphite px-5 py-3 text-sm font-bold text-white"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container-wide text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Tem uma plataforma {brand.name}?
              </h2>
              <p className="text-gray-400 max-w-xl">
                Nossa equipe está pronta para diagnosticar, reparar e manter sua máquina {brand.name} em operação.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`brand_detail_${brand.slug}`, siteConfig.whatsappNumber)} className="btn-primary mt-2">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other brands */}
      <section className="py-16 bg-industrial-dark border-t border-gray-800">
        <div className="container-wide">
          <h2 className="text-2xl font-extrabold text-white mb-8">Outras marcas atendidas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands
              .filter((b) => b.slug !== brand.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  to={`/marcas/${b.slug}`}
                  className="card-surface group p-5 flex items-center justify-center min-h-[100px]"
                  title={`Assistência técnica ${b.name} — AWP Service`}
                >
                  <img
                    src={b.logoImage}
                    alt={`Logo ${b.name}`}
                    className="max-h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
