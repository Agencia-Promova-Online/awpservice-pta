import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle, Wrench } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { machines } from '@/data/machines';
import { buildWhatsAppLink, siteConfig } from '@/data/site';
import { trackWhatsAppClick } from '@/utils/gtm';

export function MachineDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const machine = machines.find((m) => m.slug === slug);

  if (!machine) return <Navigate to="/maquinas" replace />;

  const whatsappLink = buildWhatsAppLink(
    `Olá! Preciso de assistência técnica para uma ${machine.name}. Pode me ajudar com a manutenção?`
  );

  return (
    <>
      <SEO
        title={`${machine.name} - Manutenção e Assistência Técnica | AWP Service`}
        description={machine.description}
        canonical={`https://awpservicepta.com.br/maquinas/${machine.slug}`}
        ogImage={machine.image}
      />

      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={machine.image} alt={machine.name} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/90 to-industrial-black/50" />
        </div>
        <div className="container-wide relative">
          <Breadcrumbs
            items={[
              { label: 'Início', to: '/' },
              { label: 'Máquinas', to: '/maquinas' },
              { label: machine.shortName },
            ]}
          />
          <Reveal>
            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
              {machine.name}
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed max-w-2xl">{machine.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-white mb-6">Especificações técnicas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {machine.specs.map((spec, i) => (
              <Reveal key={spec.label} delay={i * 60}>
                <div className="rounded-xl bg-industrial-graphite border border-gray-800 p-5 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{spec.label}</p>
                  <p className="mt-2 text-lg font-extrabold text-gold-500">{spec.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications + Brands */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-5">Aplicações</h2>
                <ul className="space-y-3">
                  {machine.applications.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-5">Marcas atendidas</h2>
                <div className="flex flex-wrap gap-3">
                  {machine.brandsSupported.map((brand) => (
                    <Link
                      key={brand}
                      to={`/marcas/${brand.toLowerCase()}`}
                      className="rounded-lg border border-gray-700 bg-industrial-graphite px-5 py-3 text-sm font-bold text-white transition-all hover:border-gold-500 hover:text-gold-500"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA for this machine */}
      <section className="py-12 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500">
                <Wrench className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Precisa de manutenção para esta máquina?
              </h2>
              <p className="text-gray-400 max-w-xl">
                Fale com nossa equipe técnica especializada em {machine.name.toLowerCase()} e receba um orçamento imediato.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`machine_detail_${machine.slug}`, siteConfig.whatsappNumber)} className="btn-primary mt-2">
                <MessageCircle className="h-5 w-5" />
                Solicitar manutenção no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other machines */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-extrabold text-white mb-8">Outros tipos de máquina</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {machines
              .filter((m) => m.slug !== machine.slug)
              .map((m) => (
                <Link
                  key={m.slug}
                  to={`/maquinas/${m.slug}`}
                  className="card-surface group flex items-center justify-between p-5"
                >
                  <span className="font-bold text-white group-hover:text-gold-500 transition-colors">
                    {m.shortName}
                  </span>
                  <ArrowRight className="h-5 w-5 text-gold-500 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
