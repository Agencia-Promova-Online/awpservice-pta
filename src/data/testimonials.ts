export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rafael Mantovani',
    role: 'Gerente de Frota',
    company: 'LocLoc Brasil',
    rating: 5,
    text: 'A AWP Service resolveu em 48 horas um problema de diagnóstico eletrônico que outro técnico levou duas semanas sem solução. Hoce é nosso fornecedor único de manutenção para toda a frota de articuladas.',
  },
  {
    name: 'Cristina Bayer',
    role: 'Diretora de Operações',
    company: 'Eleva Locações',
    rating: 5,
    text: 'O programa de manutenção preventiva deles reduziu nossas paradas não programadas em mais de 60%. Os relatórios fotográficos são excelentes para nossa auditoria de conformidade NR-35.',
  },
  {
    name: 'Anderson Stoltz',
    role: 'Engenheiro de Manutenção',
    company: 'Grupo Construtor Sul',
    rating: 5,
    text: 'Equipe extremamente técnica. Trouxeram uma JLG 660SJ que estava parada há um mês e devolveram em operação em três dias. O diagnóstico foi preciso, sem troca de peças desnecessárias.',
  },
  {
    name: 'Marcelo Kist',
    role: 'Gerente Industrial',
    company: 'Intralog Porto Seco',
    rating: 5,
    text: 'Atendimento rápido, peças disponíveis e preço justo. Mantemos um contrato de manutenção preventiva das nossas tesouras elétricas há dois anos sem uma única reclamação. Recomendo sem reservas.',
  },
  {
    name: 'Paula Schneider',
    role: 'Coordenadora de SMS',
    company: 'BuildEngenharia',
    rating: 5,
    text: 'A documentação técnica que a AWP Service entrega após cada manutenção é impecável. Para nossa gestão de segurança do trabalho, ter laudos e relatórios rastreáveis faz toda a diferença em auditorias.',
  },
  {
    name: 'Júlio Renner',
    role: 'Diretor',
    company: 'Altus Equipamentos',
    rating: 5,
    text: 'Levei uma plataforma Haulotte com alarme intermitente que nenhum técnico local conseguiu resolver. O laboratório de diagnósticos da AWP identificou o módulo defeituoso em uma hora. Profissionalismo de outro nível.',
  },
];
