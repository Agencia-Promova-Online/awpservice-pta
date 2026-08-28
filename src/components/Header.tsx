import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig, defaultWhatsAppMessage } from '@/data/site';
import { trackWhatsAppClick } from '@/utils/gtm';
import iconLogoPreta from "../assets/logo/Ativo 3.png"

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Marcas', to: '/marcas' },
  { label: 'Máquinas', to: '/maquinas' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-industrial-black/95 backdrop-blur-md border-b border-gray-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center ">
           <img src={iconLogoPreta} alt="AWP SERVICE" className="h-10 w-10" />
          </div>
          <div className="hidden sm:block">
            <span className="block text-lg font-extrabold leading-tight text-white">AWP SERVICE</span>
            <span className="flex items-center gap-1 text-[11px] text-gray-400 leading-tight">
              <MapPin className="h-3 w-3 text-gold-500" /> Caxias do Sul — RS
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to ||
              (link.to !== '/' && location.pathname.startsWith(link.to));
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  active ? 'text-gold-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={defaultWhatsAppMessage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('header_desktop', siteConfig.whatsappNumber)}
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-5"
          >
            <MessageCircle className="h-4 w-4" />
            Orçamento
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden mt-3 border-t border-gray-800 bg-industrial-dark/95 backdrop-blur-md">
          <div className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-3 text-sm font-semibold text-gray-200 hover:text-gold-500 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/sitemap-seo"
              className="px-4 py-3 text-sm font-semibold text-gray-200 hover:text-gold-500 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              Sitemap & SEO
            </Link>
            <a
              href={defaultWhatsAppMessage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('header_mobile_menu', siteConfig.whatsappNumber)}
              className="btn-primary mt-2"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
