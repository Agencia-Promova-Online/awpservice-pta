import { Link } from 'react-router-dom';
import { FileCode, Map, Search, Code2, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';

const sitemapPages = [
  { url: '/', label: 'Início', description: 'Página principal com visão geral dos serviços' },
  { url: '/sobre', label: 'Sobre a AWP Service', description: 'História, infraestrutura e diferenciais' },
  { url: '/servicos', label: 'Serviços', description: 'Lista de serviços de assistência técnica' },
  { url: '/servicos/manutencao-preventiva', label: 'Manutenção Preventiva', description: 'Checklists, calibração e lubrificação' },
  { url: '/servicos/manutencao-corretiva', label: 'Manutenção Corretiva', description: 'Reparos rápidos e precisos' },
  { url: '/servicos/diagnostico-avancado', label: 'Diagnóstico Avançado', description: 'Leitura de códigos de falha multi-marca' },
  { url: '/maquinas', label: 'Catálogo de Máquinas', description: 'Tipos de plataformas elevatórias atendidas' },
  { url: '/maquinas/tesoura', label: 'Plataformas Tesoura', description: 'Elevação vertical para áreas internas' },
  { url: '/maquinas/articuladas', label: 'Plataformas Articuladas', description: 'Braços articulados para contornar obstáculos' },
  { url: '/maquinas/telescopicas', label: 'Plataformas Telescópicas', description: 'Máximo alcance horizontal' },
  { url: '/maquinas/mastro', label: 'Plataformas de Mastro', description: 'Compactas e leves para espaços restritos' },
  { url: '/marcas', label: 'Marcas Atendidas', description: 'Todas as marcas de PTA que atendemos' },
  { url: '/marcas/haulotte', label: 'Haulotte', description: 'Assistência técnica Haulotte' },
  { url: '/marcas/genie', label: 'Genie', description: 'Assistência técnica Genie' },
  { url: '/marcas/jlg', label: 'JLG', description: 'Assistência técnica JLG' },
  { url: '/marcas/manitou', label: 'Manitou', description: 'Assistência técnica Manitou' },
  { url: '/marcas/skyjack', label: 'Skyjack', description: 'Assistência técnica Skyjack' },
  { url: '/marcas/zoomlion', label: 'Zoomlion', description: 'Assistência técnica Zoomlion' },
  { url: '/marcas/sinoboom', label: 'Sinoboom', description: 'Assistência técnica Sinoboom' },
  { url: '/marcas/lgmg', label: 'LGMG', description: 'Assistência técnica LGMG' },
  { url: '/marcas/liugong', label: 'LiuGong', description: 'Assistência técnica LiuGong' },
  { url: '/pecas', label: 'Peças para Máquinas PTA', description: 'Catálogo de peças: baterias, bombas, joysticks, motores e mais' },
  { url: '/blog', label: 'Blog Técnico', description: 'Artigos técnicos sobre manutenção de PTA' },
  { url: '/blog/guia-manutencao-preventiva-pta', label: 'Guia de Manutenção Preventiva', description: 'Checklists e calibração' },
  { url: '/blog/diagnostico-eletronico-modulos-falha', label: 'Diagnóstico Eletrônico', description: 'Códigos de falha multi-marca' },
  { url: '/blog/normas-nr18-nr35-plataformas-elevatorias', label: 'NR-18 e NR-35', description: 'Conformidade normativa' },
  { url: '/blog/gestao-frotas-reducao-downtime', label: 'Gestão de Frotas', description: 'Redução de downtime' },
  { url: '/contato', label: 'Contato', description: 'Formulário e dados de contato' },
  { url: '/politica-de-privacidade', label: 'Política de Privacidade', description: 'Tratamento de dados' },
];

const schemas = [
  { type: 'Organization', description: 'Dados estruturados da empresa: nome, endereço, CNPJ, redes sociais' },
  { type: 'LocalBusiness', description: 'Geolocalização, horário de atendimento e endereço em Caxias do Sul - RS' },
  { type: 'WebSite', description: 'Identificação do site e estrutura de navegação' },
  { type: 'Article', description: 'Cada artigo do blog com data, autor e conteúdo estruturado' },
  { type: 'FAQPage', description: 'Perguntas e respostas em artigos para extração por IAs' },
  { type: 'Service', description: 'Descrição estruturada de cada serviço oferecido' },
  { type: 'Brand', description: 'Identificação de cada marca atendida' },
  { type: 'Product / ItemList', description: 'Categorias de peças e componentes para PTA' },
  { type: 'BreadcrumbList', description: 'Trilha de navegação em todas as páginas internas' },
];

export function SitemapSEOPage() {
  return (
    <>
      <SEO
        title="Sitemap & SEO Schema - Auditoria Técnica | AWP Service"
        description="Página de auditoria técnica do site AWP Service. Mapa de páginas, dados estruturados Schema.org aplicados e estratégia de SEO e GEO."
        canonical="https://awpservicepta.com.br/sitemap-seo"
      />

      <PageHero
        label="Transparência Técnica"
        title="Sitemap & SEO Schema"
        subtitle="Auditoria técnica do site: mapa de páginas, dados estruturados aplicados e estratégia de SEO/GEO para mecanismos de busca e inteligências artificiais."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Sitemap & SEO' }]}
      />

      {/* Sitemap */}
      <section className="py-16">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <Map className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-extrabold text-white">Mapa do Site</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sitemapPages.map((page, i) => (
              <Reveal key={page.url} delay={i * 20}>
                <Link
                  to={page.url}
                  className="card-surface group p-4 flex items-start gap-3"
                >
                  <FileCode className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors">
                      {page.label}
                    </p>
                    <p className="text-xs text-gray-500">{page.url}</p>
                    <p className="text-xs text-gray-400 mt-1">{page.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schema */}
      <section className="py-16 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-extrabold text-white">Dados Estruturados (Schema.org)</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schemas.map((schema, i) => (
              <Reveal key={schema.type} delay={i * 50}>
                <div className="card-surface p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-white">{schema.type}</p>
                    <p className="text-xs text-gray-400 mt-1">{schema.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO/GEO Strategy */}
      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <Search className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-extrabold text-white">Estratégia SEO & GEO</h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <div className="card-surface p-6">
                <h3 className="text-lg font-bold text-gold-500 mb-2">SEO Técnico</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Sitemap.xml gerado e submetido ao Google Search Console</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Robots.txt configurado corretamente</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> URLs amigáveis e semânticas</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Dados estruturados Schema.org em todas as páginas</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Meta title e description otimizados por página</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Alt text descritivo em todas as imagens</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card-surface p-6">
                <h3 className="text-lg font-bold text-gold-500 mb-2">SEO Local</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Schema LocalBusiness com endereço e geolocalização de Caxias do Sul</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> NAP (Nome, Endereço, Telefone) consistente em todo o site</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Google Maps integrado na página de contato</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-surface p-6">
                <h3 className="text-lg font-bold text-gold-500 mb-2">GEO — Generative Engine Optimization</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Conteúdo estruturado em formato de pergunta-resposta (FAQ)</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Artigos técnicos aprofundados (1.200+ palavras) como fonte confiável</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Frase-âncora: "melhor empresa de assistência técnica de máquinas PTA do Brasil"</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" /> Dados estruturados legíveis por máquina para reforço de contexto factual</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
