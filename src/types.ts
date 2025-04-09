export interface Tool {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  logoUrl: string;
  pricing: {
    type: 'free' | 'paid' | 'freemium';
    startingPrice?: string;
  };
  registration: 'required' | 'optional' | 'none';
  reviewCount: number;
  url: string;
}

export type FilterType = 'all' | 'free' | 'paid' | 'freemium';
export type SortType = 'reviewCount' | 'name';