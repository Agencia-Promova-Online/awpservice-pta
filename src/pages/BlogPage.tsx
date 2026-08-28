import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { blogArticles } from '@/data/blog';

export function BlogPage() {
  const [featured, ...rest] = blogArticles;

  return (
    <>
      <SEO
        title="Blog Técnico PTA - Manutenção, Diagnóstico e Normas | AWP Service"
        description="Artigos técnicos sobre manutenção preventiva de máquinas PTA, diagnóstico eletrônico de falhas, conformidade NR-18 e NR-35, e gestão de frotas de plataformas elevatórias."
        canonical="https://awpservicepta.com.br/blog"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Blog Técnico AWP Service',
          url: 'https://awpservicepta.com.br/blog',
        }}
      />

      <PageHero
        label="Blog Técnico"
        title="Conteúdo técnico para gestores de frota de PTA"
        subtitle="Artigos aprofundados sobre manutenção preventiva, diagnóstico eletrônico, conformidade normativa e gestão de frotas de plataformas elevatórias."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Blog' }]}
      />

      {/* Featured article */}
      <section className="py-12">
        <div className="container-wide">
          <Reveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="card-surface group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase text-industrial-black">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featured.dateDisplay}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-gold-500 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-gray-400 leading-relaxed">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-500">
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-8 pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="card-surface group block overflow-hidden h-full"
                >
                  <div className="relative h-48 overflow-hidden">
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
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.dateDisplay}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-gold-500 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                      Ler mais
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
