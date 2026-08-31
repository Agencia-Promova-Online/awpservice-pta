import logoHaulotte from '../assets/marcas/logo-haulotte.png';
import logoGenie from '../assets/marcas/logo-genie.png';
import logoJlg from '../assets/marcas/logo-jlg.png';
import logoManitou from '../assets/marcas/logo-Manitou.webp';
import logoSkyjack from '../assets/marcas/logo-skyjack.png';
import logoZoomlion from '../assets/marcas/logo-zoomlion.png';
import logoSinoboom from '../assets/marcas/logo-sinoboom.png';

export interface Brand {
  slug: string;
  name: string;
  country: string;
  specialty: string;
  description: string;
  machineTypes: string[];
  logoText: string;
  accentColor: string;
  logoImage: string;
}

export const brands: Brand[] = [
  {
    slug: 'haulotte',
    name: 'Haulotte',
    country: 'França',
    specialty: 'Plataformas articuladas e tesoura',
    description:
      'Fabricante francesa com forte presença no mercado brasileiro. Plataformas Haulotte são reconhecidas pela robustez e pelo sistema eletrônico de diagnóstico que permite leitura remota de falhas. A AWP Service domina o protocolo Haulotte de diagnóstico e mantém estoque de peças de desgaste para os modelos mais comuns.',
    machineTypes: ['Articuladas', 'Tesoura', 'Telescópicas', 'Mastro'],
    logoText: 'HAULOTTE',
    accentColor: '#E63946',
    logoImage: logoHaulotte,
  },
  {
    slug: 'genie',
    name: 'Genie',
    country: 'Estados Unidos',
    specialty: 'Plataformas telescópicas e articuladas',
    description:
      'Uma das marcas mais populares no Brasil, parte do grupo Terex. Plataformas Genie utilizam o sistema de diagnóstico Genie Debug Mode, que nossa equipe domina completamente. Atendemos toda a linha Genie — desde tesouras elétricas compactas até booms telescópicos de grande porte.',
    machineTypes: ['Articuladas', 'Tesoura', 'Telescópicas', 'Mastro'],
    logoText: 'GENIE',
    accentColor: '#E63946',
    logoImage: logoGenie,
  },
  {
    slug: 'jlg',
    name: 'JLG',
    country: 'Estados Unidos',
    specialty: 'Plataformas articuladas e telescópicas',
    description:
      'Líder global em plataformas elevatórias, parte do grupo Oshkosh. Equipamentos JLG são referência em robustez e tecnologia. Nosso laboratório de diagnósticos está equipado com o sistema JLG Mobile Control, permitindo leitura precisa de códigos de falha e reprogramação de módulos.',
    machineTypes: ['Articuladas', 'Tesoura', 'Telescópicas', 'Mastro'],
    logoText: 'JLG',
    accentColor: '#FF6600',
    logoImage: logoJlg,
  },
  {
    slug: 'manitou',
    name: 'Manitou',
    country: 'França',
    specialty: 'Plataformas articuladas e manipuladores telescópicos',
    description:
      'Fabricante francesa conhecida por manipuladores telescópicos e plataformas articuladas. Equipamentos Manitou exigem conhecimento específico do sistema de controle Manitou OS, que nossa equipe utiliza para diagnóstico e calibração. Somos referência em manutenção da linha Manitou no Sul do Brasil.',
    machineTypes: ['Articuladas', 'Telescópicas'],
    logoText: 'MANITOU',
    accentColor: '#D61B1B',
    logoImage: logoManitou,
  },
  {
    slug: 'skyjack',
    name: 'Skyjack',
    country: 'Canadá',
    specialty: 'Plataformas tesoura e articuladas',
    description:
      'Marca canadense do grupo Linamar, reconhecida pela simplicidade de manutenção e confiabilidade. Plataformas Skyjack utilizam um sistema eletrônico mais acessível, mas ainda assim exigem conhecimento técnico para diagnóstico correto. A AWP Service atende toda a linha Skyjack com peças e mão de obra especializadas.',
    machineTypes: ['Tesoura', 'Articuladas'],
    logoText: 'SKYJACK',
    accentColor: '#FBC80C',
    logoImage: logoSkyjack,
  },
  {
    slug: 'zoomlion',
    name: 'Zoomlion',
    country: 'China',
    specialty: 'Plataformas articuladas e telescópicas de grande porte',
    description:
      'Fabricante chinês com crescimento acelerado no mercado brasileiro. Plataformas Zoomlion combinam custo competitivo com tecnologia moderna. Nossa equipe acompanha a evolução dos sistemas eletrônicos Zoomlion e mantém capacidade de diagnóstico e reposição de peças para os modelos importados.',
    machineTypes: ['Articuladas', 'Telescópicas'],
    logoText: 'ZOOMLION',
    accentColor: '#1A56DB',
    logoImage: logoZoomlion,
  },
  {
    slug: 'sinoboom',
    name: 'Sinoboom',
    country: 'China',
    specialty: 'Plataformas articuladas e tesoura',
    description:
      'Marca chinesa especializada em plataformas elevatórias, com presença crescente no Brasil. Os equipamentos Sinoboom utilizam sistemas eletrônicos próprios que requerem ferramentas de diagnóstico específicas. A AWP Service investiu em capacitação para atender a marca, incluindo estoque de peças de desgaste mais comuns.',
    machineTypes: ['Articuladas', 'Tesoura'],
    logoText: 'SINOBOOM',
    accentColor: '#E11D48',
    logoImage: logoSinoboom,
  },
];

