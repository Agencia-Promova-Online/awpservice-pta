import imgPreventiva from '../assets/image/pexels-photo-4489776.avif';
import imgCorretiva from '../assets/image/pexels-photo-7565157.avif';
import imgDiagnostico from '../assets/image/pexels-photo-38264258.avif';

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  icon: string;
  image: string;
  highlights: string[];
  description: string;
  sections: { heading: string; body: string }[];
  benefits: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: 'manutencao-preventiva',
    title: 'Manutenção Preventiva de Máquinas PTA',
    shortTitle: 'Manutenção Preventiva',
    excerpt:
      'Checklists diários e mensais, calibração de sensores e lubrificação para evitar paradas não programadas e prolongar a vida útil das suas plataformas elevatórias.',
    icon: 'ShieldCheck',
    image: imgPreventiva,
    highlights: [
      'Inspeção de 80+ pontos críticos',
      'Calibração de sensores de carga e inclinação',
      'Troca de óleos e filtros conforme fabricante',
      'Relatório fotográfico completo',
    ],
    description:
      'A manutenção preventiva é a base da confiabilidade operacional. Nosso programa inspeciona sistematicamente cada componente da sua plataforma elevatória antes que falhas se tornem paradas não programadas — reduzindo custos, downtime e riscos à segurança.',
    sections: [
      {
        heading: 'Inspeção Sistemática de Pontos Críticos',
        body: 'Nossa equipe percorre mais de 80 pontos de inspeção em cada máquina, desde o painel eletrônico até os componentes hidráulicos e estruturais. Cada item é verificado, medido e documentado, garantindo que nenhum detalhe passe despercebido.',
      },
      {
        heading: 'Calibração de Sensores e Sistemas Eletrônicos',
        body: 'Sensores de carga, inclinação, colisão e posicionamento são calibrados conforme as especificações do fabricante. Desvios de calibração são a causa número um de alarmes intermitentes e paradas desnecessárias — nossa equipe elimina esse problema na raiz.',
      },
      {
        heading: 'Lubrificação e Troca de Fluidos',
        body: 'Seguimos rigorosamente os intervalos recomendados pelos fabricantes para troca de óleo hidráulico, óleo de motor (em modelos a diesel) e filtros. Lubrificação de pivôs, correntes e buchas é realizada com graxas de alta performance compatíveis com o ambiente de operação.',
      },
      {
        heading: 'Relatório Técnico e Documentação',
        body: 'Cada intervenção preventiva é acompanhada de um relatório fotográfico completo, com checklist assinado pelo técnico responsável. Essa documentação é essencial para auditorias de conformidade com NR-18 e NR-35, e para rastreabilidade da gestão de frota.',
      },
    ],
    benefits: [
      {
        title: 'Redução de Downtime',
        description: 'Máquinas em programa preventivo param até 70% menos que aquelas em manutenção reativa.',
      },
      {
        title: 'Conformidade Normativa',
        description: 'Documentação completa para auditorias NR-18 e NR-35, com relatórios assinados e rastreáveis.',
      },
      {
        title: 'Economia de Peças',
        description: 'Identificação precoce de desgaste permite reparos programados, evitando falhas em cascata.',
      },
      {
        title: 'Vida Útil Estendida',
        description: 'Máquinas sob manutenção preventiva regular operam por mais anos com confiabilidade equivalente.',
      },
    ],
  },
  {
    slug: 'manutencao-corretiva',
    title: 'Manutenção Corretiva de Plataformas Elevatórias',
    shortTitle: 'Manutenção Corretiva',
    excerpt:
      'Reparos rápidos e precisos quando sua máquina para. Diagnóstico de campo, reposição de peças e retorno à operação no menor tempo possível.',
    icon: 'Wrench',
    image: imgCorretiva,
    highlights: [
      'Atendimento de emergência em todo o Brasil',
      'Estoque de peças críticas em Caxias do Sul',
      'Reparo hidráulico, elétrico e estrutural',
      'Retorno à operação no menor prazo',
    ],
    description:
      'Quando uma plataforma elevatória para, cada hora representa prejuízo. Nossa equipe de manutenção corretiva atua com agilidade e precisão para diagnosticar a falha, repor componentes e devolver a máquina à operação no menor tempo possível — com segurança e qualidade comprovadas.',
    sections: [
      {
        heading: 'Diagnóstico de Campo',
        body: 'Nossos técnicos deslocam-se ao local da máquina ou recebem o equipamento em nossa oficina em Caxias do Sul. Utilizamos ferramentas de diagnóstico proprietárias de cada fabricante para identificar a causa raiz da parada, sem achismos.',
      },
      {
        heading: 'Reposição de Peças com Estoque Próprio',
        body: 'Mantemos estoque de peças críticas para as marcas mais comuns do mercado brasileiro: Haulotte, Genie, JLG, Manitou, Skyjack, Zoomlion e Sinoboom. Isso elimina semanas de espera por importação e devolve sua máquina à operação em dias, não meses.',
      },
      {
        heading: 'Reparo Hidráulico, Elétrico e Estrutural',
        body: 'Atuamos em todos os subsistemas da plataforma: circuitos hidráulicos (bombas, válvulas, cilindros), sistemas elétricos (painéis, sensores, chicotes) e estrutura (braços, chassis, pivôs). Cada reparo é testado sob carga antes da liberação.',
      },
      {
        heading: 'Garantia e Pós-Reparo',
        body: 'Toda manutenção corretiva tem garantia sobre o serviço executado e peças instaladas. Acompanhamos a máquina nas primeiras horas de operação pós-reparo para garantir estabilidade e ausência de reincidência.',
      },
    ],
    benefits: [
      {
        title: 'Resposta Rápida',
        description: 'Atendimento de emergência com deslocamento a campo ou recepção imediata em nossa oficina.',
      },
      {
        title: 'Peças Disponíveis',
        description: 'Estoque próprio de componentes críticos para as principais marcas do mercado.',
      },
      {
        title: 'Reparo Completo',
        description: 'Hidráulica, elétrica e estrutura — tudo resolvido em um único fornecedor.',
      },
      {
        title: 'Garantia do Serviço',
        description: 'Todo reparo é coberto por garantia e acompanhado no pós-intervenção.',
      },
    ],
  },
  {
    slug: 'diagnostico-avancado',
    title: 'Diagnóstico Eletrônico Avançado de Módulos de Falha',
    shortTitle: 'Diagnóstico Avançado',
    excerpt:
      'Leitura e interpretação de códigos de falha em painéis Genie, JLG, Haulotte e demais marcas. Laboratório de diagnósticos com equipamentos proprietários.',
    icon: 'Cpu',
    image: imgDiagnostico,
    highlights: [
      'Leitura de códigos de falha multi-marca',
      'Laboratório de diagnósticos próprios',
      'Interpretação de módulos eletrônicos',
      'Resolução de alarmes intermitentes',
    ],
    description:
      'As plataformas elevatórias modernas são máquinas eletrônicas complexas. Quando um código de falha aparece no painel, a interpretação correta é o que separa um reparo rápido de dias de tentativa e erro. Nosso laboratório de diagnósticos é equipado com ferramentas proprietárias de cada fabricante para ler, interpretar e resolver falhas eletrônicas com precisão.',
    sections: [
      {
        heading: 'Leitura Multi-Marca de Códigos de Falha',
        body: 'Possuímos equipamentos de diagnóstico oficiais para Genie, JLG, Haulotte, Manitou, Skyjack, Zoomlion e Sinoboom. Cada marca utiliza protocolos e códigos próprios — nossa equipe domina a interpretação de todos eles, desde os códigos mais comuns até as falhas mais raras.',
      },
      {
        heading: 'Laboratório de Diagnósticos',
        body: 'Em nossa sede em Caxias do Sul, mantemos um laboratório dedicado à análise de módulos eletrônicos. Podemos testar controladores (ECUs), sensores e chicotes fora da máquina, isolando falhas que seriam impossíveis de diagnosticar a campo.',
      },
      {
        heading: 'Alarmes Intermitentes e Falsos Positivos',
        body: 'Um dos problemas mais frustrantes para gestores de frota é o alarme que aparece e desaparece sem causa aparente. Nossa metodologia combina leitura de histórico de falhas, análise de oscilação de sinais e testes de carga para identificar a origem real — eliminando paradas por falsos positivos.',
      },
      {
        heading: 'Atualização e Reprogramação de Módulos',
        body: 'Realizamos atualização de firmware em módulos eletrônicos quando o fabricante disponibiliza correções. Isso resolve bugs conhecidos, melhora a performance e pode eliminar falhas recorrentes sem necessidade de troca de componentes.',
      },
    ],
    benefits: [
      {
        title: 'Precisão no Diagnóstico',
        description: 'Interpretamos o código real, não fazemos tentativa e erro com peças.',
      },
      {
        title: 'Multi-Marca',
        description: 'Ferramentas proprietárias para todas as marcas que atendemos.',
      },
      {
        title: 'Resolve Alarmes Fantasma',
        description: 'Metodologia específica para falhas intermitentes e falsos positivos.',
      },
      {
        title: 'Laboratório Dedicado',
        description: 'Teste de módulos fora da máquina para isolamento definitivo de falhas.',
      },
    ],
  },
];
