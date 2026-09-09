export const siteConfig = {
  name: 'AWP Service',
  legalName: 'AWP SERVICE - Assistência Técnica de Máquinas PTA Ltda',
  fantasyName: 'AWP Service',
  cnpj: '49.190.173/0001-09',
  im: '223490',
  phone: '(54) 98127-1317',
  whatsappNumber: '5554981271317',
  email: 'awppaint@gmail.com',
  instagram: 'https://www.instagram.com/awpservicepta',
  instagramHandle: '@awpservicepta',
  address: {
    street: 'Rua Mario Danton Leitão, 699',
    district: '',
    city: 'Caxias do Sul',
    state: 'RS',
    zip: '95088-200',
    country: 'Brasil',
  },
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.316138337895!2d-51.2017903!3d-29.1519182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88409110db442eaf%3A0xd5148e9a35ff3b21!2sAWP%20Service%20PTA!5e1!3m2!1spt-BR!2sbr!4v1788987381684!5m2!1spt-BR!2sbr',
  mapsLink: 'https://maps.app.goo.gl/FzBik8gJWqCLCTVJ7',
  hours: [
    { day: 'Segunda a Sexta', time: '07:30 — 18:00' },
    { day: 'Sábado', time: '08:00 — 12:00' },
    { day: 'Domingo e Feriados', time: 'Sob demanda' },
  ],
};

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildWhatsAppFromForm(data: {
  nome: string;
  empresa: string;
  cidade: string;
  marca: string;
  equipamento: string;
  mensagem: string;
}): string {
  const msg = `*Solicitação de Orçamento - AWP Service*

*Nome:* ${data.nome}
*Empresa:* ${data.empresa}
*Cidade:* ${data.cidade}
*Marca da Máquina:* ${data.marca}
*Tipo de Equipamento:* ${data.equipamento}
*Mensagem:* ${data.mensagem}`;
  return buildWhatsAppLink(msg);
}

export const defaultWhatsAppMessage = buildWhatsAppLink(
  'Olá! Gostaria de solicitar um orçamento para assistência técnica de máquina PTA com a AWP Service.'
);
