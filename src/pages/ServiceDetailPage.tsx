import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { services } from '@/data/services';
import { buildWhatsAppLink } from '@/data/site';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/servicos" replace />;

  const whatsappLink = buildWhatsAppLink(
    `Olá! Tenho interesse no serviço de ${service.shortTitle} da AWP Service. Gostaria de solicitar um orçamento.`
  );

  return (
    <>
      <SEO
        title={`${service.title} | AWP Service`}
        description={service.excerpt}
        canonical={`https://awpservicepta.com.br/servicos/${service.slug}`}
        ogImage={service.image}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.excerpt,
          provider: {
            '@type': 'Organization',
            name: 'AWP Service',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Caxias do Sul',
              addressRegion: 'RS',
              addressCountry: 'BR',
            },
          },
          areaServed: 'BR',
        }}
      />

      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/90 to-industrial-black/50" />
        </div>
        <div className="container-wide relative">
          <Breadcrumbs
            items={[
              { label: 'Início', to: '/' },
              { label: 'Serviços', to: '/servicos' },
              { label: service.shortTitle },
            ]}
          />
          <Reveal>
            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="h-5 w-5" />
                Solicitar este serviço
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 80}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-industrial-graphite border border-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="py-16">
        <div className="container-wide max-w-4xl">
          {service.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 50}>
              <div className="mb-10">
                <h2 className="text-2xl font-extrabold text-white mb-3">{section.heading}</h2>
                <p className="text-gray-400 leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-10">
              Benefícios deste serviço
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="card-surface p-6 h-full">
                  <h3 className="text-lg font-bold text-gold-500">{b.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-extrabold text-white mb-8">Outros serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="card-surface group p-5 flex items-center justify-between"
                >
                  <span className="font-bold text-white group-hover:text-gold-500 transition-colors">
                    {s.shortTitle}
                  </span>
                  <ArrowRight className="h-5 w-5 text-gold-500 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Interessado em ${service.shortTitle.toLowerCase()}?`}
        subtitle="Fale com nossa equipe técnica e receba um orçamento personalizado."
        message={`Olá! Tenho interesse no serviço de ${service.shortTitle} da AWP Service. Gostaria de solicitar um orçamento.`}
      />
    </>
  );
}
