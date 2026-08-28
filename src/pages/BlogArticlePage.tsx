import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MessageCircle, User } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { blogArticles } from '@/data/blog';
import { buildWhatsAppLink, siteConfig } from '@/data/site';
import { trackWhatsAppClick } from '@/utils/gtm';

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const whatsappLink = buildWhatsAppLink(
    `Olá! Acabei de ler o artigo "${article.title}" no blog da AWP Service e gostaria de falar com a equipe técnica.`
  );

  const otherArticles = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.date,
    author: { '@type': 'Organization', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'AWP Service',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Caxias do Sul',
        addressRegion: 'RS',
        addressCountry: 'BR',
      },
    },
    ...(article.faq
      ? {
          mainEntity: article.faq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : {}),
  };

  return (
    <>
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`https://awpservicepta.com.br/blog/${article.slug}`}
        ogImage={article.image}
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/90 to-industrial-black/50" />
        </div>
        <div className="container-wide relative">
          <Breadcrumbs
            items={[
              { label: 'Início', to: '/' },
              { label: 'Blog', to: '/blog' },
              { label: article.category },
            ]}
          />
          <Reveal>
            <span className="mt-6 inline-block rounded-full bg-gold-500/20 border border-gold-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-500">
              {article.category}
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-gold-500" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gold-500" />
                {article.dateDisplay}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold-500" />
                {article.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <div
              className="prose-awp"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
            />
          </Reveal>

          {/* CTA box */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-gold-600 to-gold-500 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-extrabold text-industrial-black">
                  Fale com a equipe técnica da AWP Service
                </h2>
                <p className="mt-2 text-industrial-black/80 font-medium max-w-xl">
                  Tire suas dúvidas sobre manutenção de plataformas elevatórias e solicite um orçamento personalizado.
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`blog_article_${article.slug}`, siteConfig.whatsappNumber)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-industrial-black px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-industrial-graphite hover:scale-105 shrink-0"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-white mb-6">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {article.faq.map((f, i) => (
                  <Reveal key={i} delay={i * 50}>
                    <div className="card-surface p-6">
                      <h3 className="text-lg font-bold text-gold-500 mb-2">{f.question}</h3>
                      <p className="text-gray-400 leading-relaxed">{f.answer}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Other articles */}
      <section className="py-16 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <h2 className="text-2xl font-extrabold text-white mb-8">Continue lendo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/blog/${a.slug}`}
                className="card-surface group block overflow-hidden h-full"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors leading-snug line-clamp-2">
                    {a.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-500">
                    Ler artigo
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function renderMarkdown(content: string): string {
  return content
    .trim()
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith('- ')) return `<li>${formatInline(line.slice(2))}</li>`;
      if (line.startsWith('  - ')) return `<li>${formatInline(line.slice(4))}</li>`;
      if (/^\d+\. /.test(line)) return `<li>${formatInline(line.replace(/^\d+\. /, ''))}</li>`;
      if (line.trim() === '') return '';
      return `<p>${formatInline(line)}</p>`;
    })
    .join('\n')
    .replace(/(<li>.*?<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/<p><\/p>/g, '');
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
