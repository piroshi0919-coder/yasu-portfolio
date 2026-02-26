export interface PortfolioImage {
  id: string;
  src: string;
  title: string;
  category: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  color: string;
}

export const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    src: 'https://noisy-orange-jsnvczoxdr.edgeone.app/紅葉.jpg',
    title: 'Autumn leaves',
    category: 'Nature',
    aspectRatio: 'portrait',
    color: 'bg-pastel-pink'
  },
  {
    id: '2',
    src: 'https://curved-indigo-8jvkrwjwud.edgeone.app/紅葉２.jpg',
    title: 'Autumn leaves2',
    category: 'Nature',
    aspectRatio: 'portrait',
    color: 'bg-pastel-mint'
  },
  {
    id: '3',
    src: 'https://icy-jade-cm7kstgegm.edgeone.app/夜.jpg',
    title: 'Night',
    category: 'Landscape',
    aspectRatio: 'landscape',
    color: 'bg-pastel-blue'
  },
  {
    id: '4',
    src: 'https://agricultural-apricot-otakeqvxst.edgeone.app/草.jpg',
    title: 'Leaves',
    category: 'Nature',
    aspectRatio: 'portrait',
    color: 'bg-pastel-yellow'
  },
  {
    id: '5',
    src: 'https://developing-violet-wtprkimyrh.edgeone.app/柄杓.jpg',
    title: 'Ladle',
    category: 'Artifact',
    aspectRatio: 'portrait',
    color: 'bg-pastel-pink'
  },
  {
    id: '6',
    src: 'https://cooperative-orange-vkkayhaexv.edgeone.app/岐阜公園.jpg',
    title: 'Gifu Park',
    category: 'Nature',
    aspectRatio: 'landscape',
    color: 'bg-pastel-mint'
  },
  {
    id: '7',
    src: 'https://noisy-gold-jl92zwqqrx.edgeone.app/チームラボ.jpg',
    title: 'Team Lab',
    category: 'Artifact',
    aspectRatio: 'portrait',
    color: 'bg-pastel-blue'
  },
  {
    id: '8',
    src: 'https://purring-ivory-9ju91ja31b.edgeone.app/梅.jpg',
    title: 'Plum blossoms',
    category: 'Nature',
    aspectRatio: 'portrait',
    color: 'bg-pastel-yellow'
  },
  {
    id: '9',
    src: 'https://poor-blue-eo6qbrxbnd.edgeone.app/クラゲ.jpg',
    title: 'Jellyfish',
    category: 'Animal',
    aspectRatio: 'portrait',
    color: 'bg-pastel-yellow'
  },
  {
    id: '10',
    src: 'https://toxic-green-ppuivwlefc.edgeone.app/夜景1.jpg',
    title: 'Night view',
    category: 'Landscape',
    aspectRatio: 'portrait',
    color: 'bg-pastel-yellow'
  },
  {
    id: '11',
    src: 'https://atomic-scarlet-l7gfgfa9zf.edgeone.app/夜景2.jpg',
    title: 'Night view',
    category: 'Landscape',
    aspectRatio: 'portrait',
    color: 'bg-pastel-yellow'
  },
  
];
