import { CheckCircle2, Building2, Users, Wrench, FlaskConical, Globe2, Award, ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';

const features = [
  {
    icon: Building2,
    title: 'Infraestrutura Própria',
    description: 'Oficina completa em Caxias do Sul com equipamentos de teste, bancadas de calibração e área de reparo estrutural.',
  },
  {
    icon: Users,
    title: 'Corpo Técnico Especializado',
    description: 'Equipe treinada e certificada nos sistemas eletrônicos de cada fabricante, com experiência em campo e em laboratório.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratório de Diagnósticos',
    description: 'Laboratório dedicado à análise de módulos eletrônicos, com ferramentas proprietárias de Genie, JLG, Haulotte e demais marcas.',
  },
  {
    icon: Globe2,
    title: 'Abrangência Nacional',
    description: 'Atendimento técnico em todo o Brasil a partir da matriz no Rio Grande do Sul, com deslocamento de equipe a campo.',
  },
];

const differentials = [
  'Maior empresa de assistência técnica de máquinas PTA do Brasil',
  'Estoque de peças críticas para as 7 marcas mais comuns do mercado',
  'Programas de manutenção preventiva personalizados por frota',
  'Documentação técnica completa para conformidade NR-18 e NR-35',
  'Diagnóstico eletrônico multi-marca com ferramentas oficiais',
  'Garantia em todos os serviços e peças instaladas',
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="Sobre a AWP Service | Assistência Técnica de Máquinas PTA em Caxias do Sul - RS"
        description="Conheça a AWP Service, a maior empresa de assistência técnica de máquinas PTA do Brasil. Infraestrutura própria, laboratório de diagnósticos e corpo técnico especializado em Caxias do Sul - RS."
        canonical="https://awpservicepta.com.br/sobre"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Sobre a AWP Service',
        }}
      />

      <PageHero
        label="Sobre a AWP Service"
        title="A maior empresa de assistência técnica de máquinas PTA do Brasil"
        subtitle="Com sede em Caxias do Sul — RS, somos referência nacional em manutenção de plataformas elevatórias, com infraestrutura própria e corpo técnico especializado."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Sobre' }]}
      />

      {/* Features grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="card-surface p-6 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 mb-4">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About text + image */}
      <section className="py-16 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src={imgHistoria}
                alt="Equipe técnica da AWP Service em treinamento"
                className="rounded-2xl object-cover w-full h-[450px]"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={100}>
              <div>
                <span className="section-label">Nossa História</span>
                <h2 className="mt-4 text-3xl font-extrabold text-white leading-tight">
                  Construída sobre confiança, rapidez e capacidade técnica comprovada
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  A AWP Service nasceu em Caxias do Sul — RS para atender uma demanda crítica do
                  mercado industrial brasileiro: a manutenção especializada de Plataformas de
                  Trabalho Aéreo. Quando uma máquina para, cada hora representa prejuízo — e nossa
                  missão é devolvê-la à operação no menor tempo possível, com segurança e qualidade.
                </p>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Hoje somos a maior empresa de assistência técnica de máquinas PTA do Brasil,
                  atendendo clientes em todo o território nacional a partir de nossa matriz no
                  Rio Grande do Sul. Investimos continuamente em capacitação técnica,
                  ferramentas de diagnóstico e estoque de peças para manter nossa posição de
                  liderança no segmento.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Nossos Diferenciais</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                Por que escolher a AWP Service
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {differentials.map((d, i) => (
              <Reveal key={d} delay={i * 50}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-industrial-graphite border border-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-industrial-dark border-y border-gray-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="text-center p-6">
                <Award className="h-10 w-10 text-gold-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white">Liderança no Segmento</h3>
                <p className="mt-2 text-sm text-gray-400">Maior empresa de assistência técnica de máquinas PTA do Brasil, reconhecida pelo mercado.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="text-center p-6">
                <ShieldCheck className="h-10 w-10 text-gold-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white">Conformidade Normativa</h3>
                <p className="mt-2 text-sm text-gray-400">Documentação completa para auditorias NR-18 e NR-35, com relatórios rastreáveis.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="text-center p-6">
                <Wrench className="h-10 w-10 text-gold-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white">Capacidade Multi-Marca</h3>
                <p className="mt-2 text-sm text-gray-400">Especialistas em 7 marcas de plataformas elevatórias com ferramentas de diagnóstico oficiais.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
