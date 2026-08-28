import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/site';
import imgCTABackground from '../assets/image/pexels-photo-32437338.avif';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  message?: string;
}

export function CTABanner({
  title = 'Precisa de assistência técnica para sua máquina PTA?',
  subtitle = 'Fale agora com a equipe técnica da AWP Service e receba um orçamento personalizado para sua frota.',
  message,
}: CTABannerProps) {
  const link = message
    ? buildWhatsAppLink(message)
    : buildWhatsAppLink('Olá! Gostaria de solicitar um orçamento para assistência técnica de máquina PTA com a AWP Service.');

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gold-600 to-gold-500 py-14">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${imgCTABackground})` }}
      />
      <div className="container-wide relative flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-industrial-black leading-tight">
            {title}
          </h2>
          <p className="mt-2 text-industrial-black/80 font-medium max-w-2xl">
            {subtitle}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-industrial-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-industrial-graphite hover:scale-105 active:scale-95 shrink-0"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
