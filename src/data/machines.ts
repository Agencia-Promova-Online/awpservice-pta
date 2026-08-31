import imgTesoura from '../assets/image/tesoura.jpg';
import imgArticuladas from '../assets/image/articulada.jpg';
import imgTelescopicas from '../assets/image/pexels-photo-27330792.avif';
import imgMastro from '../assets/image/pexels-photo-16105409.avif';

export interface Machine {
  slug: string;
  category: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  applications: string[];
  brandsSupported: string[];
}

export const machineCategories = [
  { slug: 'tesoura', name: 'Plataformas Tesoura', shortName: 'Tesoura' },
  { slug: 'articuladas', name: 'Plataformas Articuladas', shortName: 'Articuladas' },
  { slug: 'telescopicas', name: 'Plataformas Telescópicas', shortName: 'Telescópicas' },
  { slug: 'mastro', name: 'Plataformas de Mastro', shortName: 'Mastro' },
];

export const machines: Machine[] = [
  {
    slug: 'tesoura',
    category: 'tesoura',
    name: 'Plataformas Tesoura (Scissor Lift)',
    shortName: 'Tesoura',
    description:
      'Plataformas de elevação vertical com sistema de tesoura hidráulico. Ideais para trabalhos em altura em grandes áreas internas como galpões logísticos, centros de distribuição e instalações industriais. Oferecem grande capacidade de carga e superfície de trabalho ampla.',
    image: imgTesoura,
    specs: [
      { label: 'Altura máxima', value: '8 a 18 metros' },
      { label: 'Capacidade', value: '230 a 700 kg' },
      { label: 'Propulsão', value: 'Elétrica ou Diesel' },
      { label: 'Aplicação', value: 'Interna e Externa' },
    ],
    applications: ['Galpões logísticos', 'Centros de distribuição', 'Manutenção predial', 'Montagem industrial'],
    brandsSupported: ['Haulotte', 'Genie', 'JLG', 'Skyjack', 'Zoomlion'],
  },
  {
    slug: 'articuladas',
    category: 'articuladas',
    name: 'Plataformas Articuladas (Boom Lift)',
    shortName: 'Articuladas',
    description:
      'Plataformas com braços articulados que permitem alcançar posições elevadas contornando obstáculos. São as mais versáteis do mercado, ideais para obras, manutenção de fachadas, instalações industriais e qualquer situação que exija posicionamento preciso em altura com deslocamento lateral.',
    image: imgArticuladas,
    specs: [
      { label: 'Altura máxima', value: '12 a 43 metros' },
      { label: 'Capacidade', value: '120 a 300 kg' },
      { label: 'Propulsão', value: 'Diesel ou Elétrica' },
      { label: 'Aplicação', value: 'Externa e Interna' },
    ],
    applications: ['Obras de construção civil', 'Manutenção de fachadas', 'Refinarias e indústrias', 'Montagem de estruturas'],
    brandsSupported: ['Haulotte', 'Genie', 'JLG', 'Manitou', 'Sinoboom'],
  },
  {
    slug: 'telescopicas',
    category: 'telescopicas',
    name: 'Plataformas Telescópicas (Telescopic Boom)',
    shortName: 'Telescópicas',
    description:
      'Plataformas com braços telescópicos retilíneos que oferecem o máximo de alcance horizontal entre todas as categorias. Projetadas para acessar pontos elevados em grandes open spaces, instalações industriais e canteiros de obras onde a distância horizontal é tão crítica quanto a altura.',
    image: imgTelescopicas,
    specs: [
      { label: 'Altura máxima', value: '20 a 58 metros' },
      { label: 'Capacidade', value: '200 a 450 kg' },
      { label: 'Propulsão', value: 'Diesel' },
      { label: 'Aplicação', value: 'Externa' },
    ],
    applications: ['Grandes canteiros de obra', 'Construção industrial', 'Portos e aeroportos', 'Instalações de grande porte'],
    brandsSupported: ['Genie', 'JLG', 'Haulotte', 'Manitou', 'Zoomlion'],
  },
  {
    slug: 'mastro',
    category: 'mastro',
    name: 'Plataformas de Mastro (Mast Lift)',
    shortName: 'Mastro',
    description:
      'Plataformas de elevação vertical por mastro, compactas e leves. Projetadas para espaços internos restritos onde o piso tem capacidade de carga limitada. São silenciosas, não emitem gases e oferecem acesso a alturas moderadas com pegada mínima — ideais para retrofit, manutenção predial e retail.',
    image: imgMastro,
    specs: [
      { label: 'Altura máxima', value: '6 a 14 metros' },
      { label: 'Capacidade', value: '120 a 250 kg' },
      { label: 'Propulsão', value: 'Elétrica' },
      { label: 'Aplicação', value: 'Interna' },
    ],
    applications: ['Retail e shopping centers', 'Manutenção predial interna', 'Hospitais e data centers', 'Espaços com piso frágil'],
    brandsSupported: ['Genie', 'JLG', 'Haulotte', 'Skyjack'],
  },
];
