import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Clock, Shield } from 'lucide-react';
import { siteConfig } from '@/data/site';
import iconLogoPreta from "../assets/logo/Ativo 1.png"

const footerLinks = {
  Empresa: [
    { label: 'Sobre a AWP Service', to: '/sobre' },
    { label: 'Serviços', to: '/servicos' },
    { label: 'Marcas Atendidas', to: '/marcas' },
    { label: 'Catálogo de Máquinas', to: '/maquinas' },
  ],
  Conteúdo: [
    { label: 'Blog Técnico', to: '/blog' },
    { label: 'Contato', to: '/contato' },
    { label: 'Política de Privacidade', to: '/politica-de-privacidade' },
  ],
  Serviços: [
    { label: 'Manutenção Preventiva', to: '/servicos/manutencao-preventiva' },
    { label: 'Manutenção Corretiva', to: '/servicos/manutencao-corretiva' },
    { label: 'Diagnóstico Avançado', to: '/servicos/diagnostico-avancado' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-industrial-dark border-t border-gray-800">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-16 w-16 items-center justify-center">
                <img src={iconLogoPreta} alt="AWP SERVICE" className="h-16 w-16" />
              </div>
              <div>
                <span className="block text-lg font-extrabold leading-tight text-white">AWP SERVICE</span>
                <span className="text-[11px] text-gray-400">Assistência Técnica de Máquinas PTA</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              A maior empresa de assistência técnica de máquinas PTA do Brasil. Manutenção preventiva, corretiva e diagnóstico avançado de plataformas elevatórias.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-gold-500 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              {siteConfig.instagramHandle}
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-gold-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">Endereço</p>
              <p>{siteConfig.address.street}</p>
              {siteConfig.address.district && <p>{siteConfig.address.district}</p>}
              <p>{siteConfig.address.city} — {siteConfig.address.state}</p>
              <p>CEP {siteConfig.address.zip}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">Contato</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">Horário</p>
              {siteConfig.hours.map((h) => (
                <p key={h.day}>{h.day}: {h.time}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            {siteConfig.legalName} | CNPJ: {siteConfig.cnpj} | I.M: {siteConfig.im}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Shield className="h-4 w-4 text-gold-500" />
            <span>Atendimento para todo o Brasil a partir de Caxias do Sul — RS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
