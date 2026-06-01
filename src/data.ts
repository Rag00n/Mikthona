import { LucideIcon, Cookie, Coffee, ShoppingCart, Droplet, Star, Clock, MapPin, Tag } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  badge?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const CATEGORIES: Category[] = [
  { id: 'snacks', name: 'Snacks', icon: Cookie, color: 'bg-red-100 text-red-600' },
  { id: 'drinks', name: 'Cold Drinks', icon: Coffee, color: 'bg-blue-100 text-blue-600' },
  { id: 'instant', name: 'Instant Food', icon: ShoppingCart, color: 'bg-slate-100 text-slate-800' },
  { id: 'household', name: 'Essentials', icon: Droplet, color: 'bg-red-50 text-red-700' },
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Morning Boost: Free Coffee',
    description: 'Get a free small coffee with any fresh pastry purchase before 10 AM.',
    validUntil: 'Daily until 10:00 AM',
    color: 'bg-gradient-to-r from-red-600 to-red-500',
  },
  {
    id: 'promo-2',
    title: 'Weekend Snack Pack',
    description: 'Buy 2 get 1 free on all premium chips and sharing bags.',
    validUntil: 'Every Weekend',
    color: 'bg-gradient-to-r from-blue-700 to-blue-500',
  },
  {
    id: 'promo-3',
    title: 'Late Night Cravings',
    description: '20% off all instant noodles and hot snacks after 9 PM.',
    validUntil: 'Daily after 9:00 PM',
    color: 'bg-gradient-to-r from-red-700 to-red-600',
  }
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'p1',
    name: 'Classic Cola Can',
    price: 1.49,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300&h=300',
    badge: 'Popular'
  },
  {
    id: 'p2',
    name: 'Potato Chips - Original',
    price: 2.29,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1599813284000-0588ebd6baeb?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'p3',
    name: 'Instant Ramen Cup',
    price: 1.99,
    category: 'Instant Food',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=300&h=300',
    badge: 'Trending'
  },
  {
    id: 'p4',
    name: 'Sports Energy Drink',
    price: 3.49,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1527960471264-932f2fe8a044?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah J.',
    rating: 5,
    text: 'Always clean, always fast. The staff is incredibly friendly and they always have my favorite snacks in stock.',
    date: '2 days ago'
  },
  {
    id: 't2',
    name: 'Mark T.',
    rating: 5,
    text: 'Perfect stop on my way to work. Their coffee deals are great and the store layout makes it so easy to grab and go.',
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 4,
    text: 'Love the new local products section! A great neighborhood addition.',
    date: '2 weeks ago'
  }
];
