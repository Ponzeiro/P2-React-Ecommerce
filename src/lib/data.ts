import type { Product } from './types';

const products: Product[] = [
  {
    id: '1',
    name: 'Sérum de Resplandor Hidratante',
    category: 'Cuidado de la piel',
    price: 45.0,
    description:
      'Un suero ligero de rápida absorción que hidrata intensamente y potencia la luminosidad. Formulado con ácido hialurónico y vitamina C.',
    ingredients: ['Aqua', 'Glicerina', 'Hialuronato de sodio', 'Ácido ascórbico'],
    usage: 'Aplicar 2-3 gotas en el rostro y cuello limpios, mañana y noche.',
    imageId: 'product-1',
    rating: 4.8,
    reviewCount: 125,
  },
  {
    id: '2',
    name: 'Crema de Noche Rejuvenecedora',
    category: 'Cuidado de la piel',
    price: 58.0,
    description:
      'Una crema rica y nutritiva que actúa durante la noche para reparar y rejuvenecer la piel. Contiene retinol y péptidos para reducir las líneas de expresión.',
    ingredients: ['Manteca de Karité', 'Retinol', 'Complejo de Péptidos', 'Aceite de Jojoba'],
    usage: 'Aplicar una pequeña cantidad en el rostro y el cuello como último paso de la rutina nocturna.',
    imageId: 'product-2',
    rating: 4.9,
    reviewCount: 230,
  },
  {
    id: '3',
    name: 'Labial Mate Terciopelo',
    category: 'Maquillaje',
    price: 28.0,
    description:
      'Un labial de larga duración y alta pigmentación con un cómodo acabado mate. Disponible en 12 tonos impresionantes.',
    ingredients: ['Dimeticona', 'Octildodecanol', 'Polietileno', 'Rojo 7 Laca'],
    usage: 'Aplicar directamente sobre los labios para un color intenso y uniforme.',
    imageId: 'product-3',
    rating: 4.6,
    reviewCount: 450,
  },
  {
    id: '4',
    name: 'Paleta de Sombras Atardecer',
    category: 'Maquillaje',
    price: 49.0,
    description:
      'Una paleta versátil de 12 sombras de ojos en tonos cálidos con acabados mate, brillante y metálico. Perfecta para crear looks de día y de noche.',
    ingredients: ['Talco', 'Mica', 'Estearato de Magnesio', 'Óxidos de Hierro'],
    usage: 'Usar una brocha para aplicar y difuminar los tonos sobre los párpados.',
    imageId: 'product-4',
    rating: 4.7,
    reviewCount: 310,
  },
  {
    id: '5',
    name: 'Aceite Limpiador Suave',
    category: 'Cuidado de la piel',
    price: 32.0,
    description:
      'Un aceite limpiador suave pero eficaz que elimina el maquillaje y las impurezas sin resecar la piel. Deja la piel suave e hidratada.',
    ingredients: ['Aceite de Semilla de Uva', 'Sorbeth-30 Tetraoleato', 'Triglicérido Caprílico'],
    usage: 'Masajear sobre la piel seca, luego añadir agua para emulsionar. Enjuagar bien.',
    imageId: 'product-5',
    rating: 4.8,
    reviewCount: 180,
  },
  {
    id: '6',
    name: 'Base de Maquillaje Acabado Impecable',
    category: 'Maquillaje',
    price: 42.0,
    description:
      'Una base de cobertura media a completa con un acabado satinado natural. Esta fórmula modulable unifica el tono de la piel y dura todo el día.',
    ingredients: ['Aqua', 'Cicllopentasiloxano', 'Dióxido de Titanio', 'Glicerina'],
    usage: 'Aplicar con una esponja o brocha, difuminando desde el centro del rostro hacia afuera.',
    imageId: 'product-6',
    rating: 4.5,
    reviewCount: 520,
  },
  {
    id: '7',
    name: 'Máscara de Pestañas Lush Lash',
    category: 'Maquillaje',
    price: 25.0,
    description:
      'Una máscara voluminizadora y alrgadora que proporciona pestañas dramáticas y ligeras sin apelmazar ni descascararse.',
    ingredients: ['Aqua', 'Cera de Abejas', 'Óxidos de Hierro', 'Copolímero de Acrilatos'],
    usage: 'Mover el cepillo desde la base de las pestañas hasta las puntas. Aplicar una segunda capa para más volumen.',
    imageId: 'product-7',
    rating: 4.6,
    reviewCount: 610,
  },
  {
    id: '8',
    name: 'Bruma Equilibrante de Agua de Rosas',
    category: 'Cuidado de la piel',
    price: 22.0,
    description:
      'Una bruma facial refrescante que hidrata, tonifica y calma la piel. Perfecta para un retoque rápido durante el día.',
    ingredients: ['Agua de Flor de Rosa Damascena', 'Glicerina', 'Jugo de Hoja de Aloe Vera'],
    usage: 'Rociar sobre el rostro y el cuello según sea necesario. Puede usarse sobre o debajo del maquillaje.',
    imageId: 'product-8',
    rating: 4.9,
    reviewCount: 350,
  },
];

export function getProducts(category?: string): Product[] {
  if (category) {
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getCategories(): string[] {
    const categories = products.map(p => p.category);
    return [...new Set(categories)];
}
