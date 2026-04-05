export interface Article {
  uuid: string;
  title: string;
  teaser: string;
  content?: string;
}

export interface NodeInfo {
  blockHeight: number;
  alias: string;
  uri: string;
}

export interface Invoice {
  rhash: string;
  paymentRequest: string;
}

export interface LoginState {
  status: "LOGGED_IN" | "ANONYMOUS";
  key?: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  category: string;
  style: string;
  color: string;
  material: string;
  wattage: number;
  voltage: string;
  dimmable: boolean;
  inStock: boolean;
  featured: boolean;
  image: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}
