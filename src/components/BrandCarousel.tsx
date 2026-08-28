import { brands } from '@/data/brands';
import { Link } from 'react-router-dom';

export function BrandCarousel() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 bg-industrial-dark border-y border-gray-800">
      <div className="container-wide mb-10 text-center">
        <span className="section-label">Marcas Atendidas</span>
        <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-white">
          Especialistas em todas as principais marcas de PTA
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Diagnóstico, peças e manutenção para as plataformas elevatórias mais utilizadas no Brasil.
        </p>
      </div>

      <div className="relative overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-industrial-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-industrial-dark to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
          {doubled.map((brand, i) => (
            <Link
              key={i}
              to={`/marcas/${brand.slug}`}
              className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-gray-800 bg-industrial-graphite px-8 transition-all duration-300 hover:border-gold-500/50 hover:bg-industrial-steel"
            >
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ color: brand.accentColor }}
              >
                {brand.logoText}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="container-wide mt-8 text-center">
        <Link
          to="/marcas"
          className="text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors"
        >
          Ver todas as marcas atendidas →
        </Link>
      </div>
    </section>
  );
}
