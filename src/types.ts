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
    details?: string[];
  };
  registration: 'required' | 'optional' | 'none';
  reviewCount: number;
  url: string;
  pros?: string[];
  cons?: string[];
  useCases?: string[];
  alternatives?: string[];
  lastUpdated?: string;
  languages?: string[];
  platforms?: string[];
  tutorial?: {
    steps: string[];
    videoUrl?: string;
  };
}