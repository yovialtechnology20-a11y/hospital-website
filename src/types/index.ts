export interface Department {
  id: number;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface Doctor {
  id: number;
  name: string;
  qualification: string;
  specialty: string;
  experience: string;
  fee: number;
  image: string;
  rating: number;
  department: string;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  department: string;
  rating: number;
  feedback: string;
  date: string;
}

export interface HealthPackage {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
  icon: string;
}

export interface InsuranceProvider {
  name: string;
  logo: string;
}
