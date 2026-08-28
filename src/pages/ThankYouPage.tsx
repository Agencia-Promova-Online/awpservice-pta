import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { siteConfig, defaultWhatsAppMessage } from '@/data/site';
import { trackThankYouView, trackWhatsAppClick } from '@/utils/gtm';

export function ThankYouPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackThankYouView(
      pathname,
      'Obrigado pelo seu contato | AWP Service'
    );
  }, [pathname]);

  return (
    <>
      <SEO
        title="Obrigado pelo seu contato | AWP Service"
        description="Recebemos sua solicitação. Nossa equipe técnica entrará em contato em breve."
        canonical="https://awpservicepta.com.br/obrigado"
      />

      <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-gold-500/10 text-gold-500 mb-6">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Solicitação enviada com sucesso!
              </h1>
              <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                Obrigado pelo seu contato. Nossa equipe técnica da AWP Service recebeu sua solicitação
                e entrará em contato em breve. Se o WhatsApp não abriu automaticamente, clique no botão abaixo.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={defaultWhatsAppMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('thank_you_page', siteConfig.whatsappNumber)}
                  className="btn-primary"
                >
                  <MessageCircle className="h-5 w-5" />
                  Abrir WhatsApp
                </a>
                <Link to="/" className="btn-secondary">
                  Voltar ao início
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
