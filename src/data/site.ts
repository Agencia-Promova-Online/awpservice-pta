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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.8!2d-51.1794!3d-29.1681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Mario%20Danton%20Leit%C3%A3o%2C%20699%2C%20Caxias%20do%20Sul%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Rua+Mario+Danton+Leitao+699+Caxias+do+Sul+RS',
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
