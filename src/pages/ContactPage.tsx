import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig, defaultWhatsAppMessage } from '@/data/site';
import { trackWhatsAppClick, trackPhoneClick, trackEmailClick, trackCTAClick, trackAddressClick } from '@/utils/gtm';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contato - Solicite Orçamento de Assistência Técnica PTA | AWP Service"
        description="Entre em contato com a AWP Service para assistência técnica de máquinas PTA. Preencha o formulário e fale diretamente no WhatsApp com nossa equipe técnica em Caxias do Sul - RS."
        canonical="https://awpservicepta.com.br/contato"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contato AWP Service',
        }}
      />

      <PageHero
        label="Contato"
        title="Solicite seu orçamento de assistência técnica"
        subtitle="Preencha o formulário abaixo e fale diretamente no WhatsApp com nossa equipe técnica. Atendemos todo o Brasil a partir de Caxias do Sul — RS."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Contato' }]}
      />

      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal>
              <div className="card-surface p-8">
                <h2 className="text-xl font-bold text-white mb-6">Formulário de contato</h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={100}>
              <div className="space-y-6">
                <div className="card-surface p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Fale conosco</h3>
                  <div className="space-y-4">
                    <a href={defaultWhatsAppMessage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors">WhatsApp</p>
                        <p className="text-sm text-gray-400">Solicitar orçamento agora</p>
                      </div>
                    </a>
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors">Telefone</p>
                        <p className="text-sm text-gray-400">{siteConfig.phone}</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors">E-mail</p>
                        <p className="text-sm text-gray-400">{siteConfig.email}</p>
                      </div>
                    </a>
                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-gold-500 transition-colors">Instagram</p>
                        <p className="text-sm text-gray-400">{siteConfig.instagramHandle}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="card-surface p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Endereço</h3>
                  <a
                    href={siteConfig.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAddressClick('contact_page', siteConfig.address.street)}
                    className="flex items-start gap-3 group"
                  >
                    <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-400">
                      <p className="font-semibold text-white group-hover:text-gold-500 transition-colors">{siteConfig.address.street}</p>
                      {siteConfig.address.district && <p>{siteConfig.address.district}</p>}
                      <p>{siteConfig.address.city} — {siteConfig.address.state}</p>
                      <p>CEP {siteConfig.address.zip}</p>
                    </div>
                  </a>
                </div>

                <div className="card-surface p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Horário de atendimento</h3>
                  <div className="space-y-2">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day} className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-gold-500 shrink-0" />
                        <span className="text-sm text-gray-400">
                          <span className="font-semibold text-white">{h.day}:</span> {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container-wide">
          <div className="rounded-2xl overflow-hidden border border-gray-800 h-[400px]">
            <iframe
              title="Localização da AWP Service em Caxias do Sul - RS"
              src={siteConfig.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
