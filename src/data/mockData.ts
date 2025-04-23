
export interface Business {
  id: string;
  name: string;
  type: 'restaurant' | 'gym' | 'cafe' | 'studio';
  latitude: number;
  longitude: number;
  distance: number; // in meters
  address: string;
  rating: number;
  hasPromotion: boolean;
  promotionText?: string;
  isTrending: boolean;
  subscriptionLevel: 'Basic' | 'Basic+' | 'Premium';
  crowdLevels: {
    hour: number;
    level: number; // 0-100
  }[];
  image: string;
}

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Fitness First',
    type: 'gym',
    latitude: 40.7128,
    longitude: -74.006,
    distance: 350,
    address: '123 Workout St',
    rating: 4.5,
    hasPromotion: true,
    promotionText: '50% OFF First Month',
    isTrending: true,
    subscriptionLevel: 'Premium',
    crowdLevels: [
      { hour: 6, level: 20 },
      { hour: 8, level: 80 },
      { hour: 10, level: 60 },
      { hour: 12, level: 40 },
      { hour: 14, level: 30 },
      { hour: 16, level: 45 },
      { hour: 18, level: 90 },
      { hour: 20, level: 60 },
      { hour: 22, level: 30 },
    ],
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Bean & Brew',
    type: 'cafe',
    latitude: 40.7168,
    longitude: -74.014,
    distance: 220,
    address: '456 Coffee Ave',
    rating: 4.8,
    hasPromotion: false,
    isTrending: false,
    subscriptionLevel: 'Basic+',
    crowdLevels: [
      { hour: 6, level: 40 },
      { hour: 8, level: 90 },
      { hour: 10, level: 70 },
      { hour: 12, level: 80 },
      { hour: 14, level: 50 },
      { hour: 16, level: 40 },
      { hour: 18, level: 60 },
      { hour: 20, level: 30 },
      { hour: 22, level: 10 },
    ],
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Pasta Palace',
    type: 'restaurant',
    latitude: 40.7138,
    longitude: -74.009,
    distance: 400,
    address: '789 Pasta Ln',
    rating: 4.3,
    hasPromotion: true,
    promotionText: 'Happy Hour: 20% OFF',
    isTrending: true,
    subscriptionLevel: 'Premium',
    crowdLevels: [
      { hour: 6, level: 0 },
      { hour: 8, level: 0 },
      { hour: 10, level: 0 },
      { hour: 12, level: 70 },
      { hour: 14, level: 40 },
      { hour: 16, level: 20 },
      { hour: 18, level: 60 },
      { hour: 20, level: 90 },
      { hour: 22, level: 50 },
    ],
    image: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'Flow Yoga Studio',
    type: 'studio',
    latitude: 40.7198,
    longitude: -74.005,
    distance: 280,
    address: '101 Zen Way',
    rating: 4.9,
    hasPromotion: true,
    promotionText: 'Free Week Trial',
    isTrending: false,
    subscriptionLevel: 'Basic+',
    crowdLevels: [
      { hour: 6, level: 60 },
      { hour: 8, level: 70 },
      { hour: 10, level: 40 },
      { hour: 12, level: 30 },
      { hour: 14, level: 20 },
      { hour: 16, level: 40 },
      { hour: 18, level: 80 },
      { hour: 20, level: 60 },
      { hour: 22, level: 10 },
    ],
    image: '/placeholder.svg',
  },
  {
    id: '5',
    name: 'Green Smoothies',
    type: 'cafe',
    latitude: 40.7158,
    longitude: -74.002,
    distance: 150,
    address: '202 Health Blvd',
    rating: 4.7,
    hasPromotion: false,
    isTrending: true,
    subscriptionLevel: 'Basic',
    crowdLevels: [
      { hour: 6, level: 30 },
      { hour: 8, level: 70 },
      { hour: 10, level: 80 },
      { hour: 12, level: 90 },
      { hour: 14, level: 60 },
      { hour: 16, level: 40 },
      { hour: 18, level: 30 },
      { hour: 20, level: 20 },
      { hour: 22, level: 10 },
    ],
    image: '/placeholder.svg',
  },
  {
    id: '6',
    name: 'Power Gym',
    type: 'gym',
    latitude: 40.7108,
    longitude: -74.011,
    distance: 320,
    address: '303 Muscle Ave',
    rating: 4.2,
    hasPromotion: true,
    promotionText: 'No Joining Fee',
    isTrending: false,
    subscriptionLevel: 'Premium',
    crowdLevels: [
      { hour: 6, level: 50 },
      { hour: 8, level: 70 },
      { hour: 10, level: 40 },
      { hour: 12, level: 30 },
      { hour: 14, level: 20 },
      { hour: 16, level: 40 },
      { hour: 18, level: 90 },
      { hour: 20, level: 80 },
      { hour: 22, level: 40 },
    ],
    image: '/placeholder.svg',
  },
];

export const getCurrentHour = (): number => {
  return new Date().getHours();
};

export const getCurrentCrowdLevel = (business: Business): number => {
  const hour = getCurrentHour();
  const closestHour = business.crowdLevels.reduce((prev, curr) => {
    return Math.abs(curr.hour - hour) < Math.abs(prev.hour - hour) ? curr : prev;
  });
  return closestHour.level;
};

// Mock user position (Manhattan, NY)
export const userPosition = {
  latitude: 40.7138,
  longitude: -74.006,
};

// Filter options
export const businessTypes = ['All', 'restaurant', 'gym', 'cafe', 'studio'];
export const subscriptionLevels = ['All', 'Basic', 'Basic+', 'Premium'];
