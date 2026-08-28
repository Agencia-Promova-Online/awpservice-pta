import { MessageCircle } from 'lucide-react';
import { defaultWhatsAppMessage } from '@/data/site';

export function WhatsAppFloat() {
  return (
    <a
      href={defaultWhatsAppMessage}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.7)]"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute flex h-3 w-3 top-1 right-1">
        <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-gold-500" />
      </span>
    </a>
  );
}
