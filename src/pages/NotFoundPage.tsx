import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Página não encontrada | AWP Service"
        description="A página que você procura não existe ou foi movida."
        canonical="https://awpservicepta.com.br/404"
      />

      <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-8xl font-extrabold text-gold-500">404</p>
            <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-white">
              Página não encontrada
            </h1>
            <p className="mt-4 text-gray-400">
              A página que você procura não existe ou foi movida. Volte ao início ou explore nossos serviços.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <Home className="h-4 w-4" />
                Voltar ao início
              </Link>
              <Link to="/servicos" className="btn-secondary">
                Ver serviços
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
