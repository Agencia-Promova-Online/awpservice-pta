import { type ReactNode } from 'react';
import { Reveal } from './Reveal';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

interface PageHeroProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}

export function PageHero({ label, title, subtitle, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-graphite/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <Reveal>
          {label && <span className="section-label">{label}</span>}
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-[1.1] max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
