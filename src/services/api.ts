export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  madeCountry: string;
  quantity: number;
}

let products: Product[] = [
  {
    id: '1',
    name: 'Premium Widget',
    description: 'High-quality widget for professional use',
    imageUrl: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400',
    madeCountry: 'Germany',
    quantity: 50,
  },
  {
    id: '2',
    name: 'Smart Gadget',
    description: 'Innovative gadget with advanced features',
    imageUrl: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    madeCountry: 'Japan',
    quantity: 30,
  },
  {
    id: '3',
    name: 'Eco Device',
    description: 'Environmentally friendly device',
    imageUrl: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
    madeCountry: 'USA',
    quantity: 75,
  },
];

export const api = {
  getProducts: async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...products];
  },

  getProduct: async (id: string): Promise<Product | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return products.find(p => p.id === id);
  },

  createProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newProduct: Product = {
      ...product,
      id: Math.random().toString(36).substr(2, 9),
    };
    products.push(newProduct);
    return newProduct;
  },

  updateProduct: async (id: string, updates: Partial<Product>): Promise<Product> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');

    products[index] = { ...products[index], ...updates };
    return products[index];
  },

  deleteProduct: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    products = products.filter(p => p.id !== id);
  },
};
