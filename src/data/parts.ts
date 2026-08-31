import imgBaterias from '../assets/pecas/baterias-tracionarias.jpeg';
import imgBombas from '../assets/pecas/bombas-hidraulicas.jpeg';
import imgCarregadores from '../assets/pecas/carregadores.jpeg';
import imgContatores from '../assets/pecas/contatores.jpeg';
import imgControladores from '../assets/pecas/controladores.jpeg';
import imgInterruptores from '../assets/pecas/interruptores.jpeg';
import imgJoysticks from '../assets/pecas/Joysticks.jpeg';
import imgMotores from '../assets/pecas/Motores elétricos.jpeg';
import imgVedacoes from '../assets/pecas/vedacoes.jpeg';

export interface PartCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const parts: PartCategory[] = [
  {
    slug: 'baterias-tracionarias',
    title: 'Baterias Tracionárias',
    description:
      'Baterias de ciclo profundo para alimentação elétrica de plataformas, com alta durabilidade e autonomia para operação intensa.',
    image: imgBaterias,
    imageAlt: 'Baterias Tracionárias para máquinas PTA',
  },
  {
    slug: 'bombas-hidraulicas',
    title: 'Bombas Hidráulicas',
    description:
      'Bombas para sistemas hidráulicos de elevação, garantindo pressão e fluidez de movimento com segurança.',
    image: imgBombas,
    imageAlt: 'Bombas Hidráulicas para máquinas PTA',
  },
  {
    slug: 'carregadores',
    title: 'Carregadores',
    description:
      'Carregadores de bateria compatíveis com as principais marcas, otimizando o tempo de recarga e a vida útil do sistema.',
    image: imgCarregadores,
    imageAlt: 'Carregadores para máquinas PTA',
  },
  {
    slug: 'contatores',
    title: 'Contatores',
    description:
      'Contatores elétricos de alta durabilidade para acionamento seguro dos sistemas de potência da máquina.',
    image: imgContatores,
    imageAlt: 'Contatores para máquinas PTA',
  },
  {
    slug: 'controladores',
    title: 'Controladores',
    description:
      'Controladores eletrônicos responsáveis pelo gerenciamento de tração e funções da plataforma, com precisão e resposta rápida.',
    image: imgControladores,
    imageAlt: 'Controladores para máquinas PTA',
  },
  {
    slug: 'interruptores',
    title: 'Interruptores',
    description:
      'Interruptores e chaves de comando originais/compatíveis, essenciais para a segurança operacional da máquina.',
    image: imgInterruptores,
    imageAlt: 'Interruptores para máquinas PTA',
  },
  {
    slug: 'joysticks',
    title: 'Joysticks',
    description:
      'Manetes de comando (joysticks) para controle preciso de movimento e elevação, compatíveis com os principais painéis do mercado.',
    image: imgJoysticks,
    imageAlt: 'Joysticks para máquinas PTA',
  },
  {
    slug: 'motores-eletricos',
    title: 'Motores Elétricos',
    description:
      'Motores elétricos de tração e elevação, revisados e testados para garantir performance e confiabilidade.',
    image: imgMotores,
    imageAlt: 'Motores Elétricos para máquinas PTA',
  },
  {
    slug: 'vedacoes',
    title: 'Vedações',
    description:
      'Kits de vedação e retentores para sistemas hidráulicos, prevenindo vazamentos e assegurando o desempenho do equipamento.',
    image: imgVedacoes,
    imageAlt: 'Vedações para máquinas PTA',
  },
];
