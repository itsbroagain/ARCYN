export interface WaitlistEntry {
    email: string;
    created_at?: string;
    source?: string;
  }
  
  export interface Feature {
    icon: string;
    title: string;
    description: string;
    gradient: string;
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface TechStack {
    name: string;
    category: string;
    logo: string;
  }
  
  export interface CodeExample {
    language: string;
    title: string;
    code: string;
    filename: string;
  }
  
  export interface AnimationProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
  }
  
  export interface Stat {
    label: string;
    value: string | number;
    suffix?: string;
    prefix?: string;
  }
  
  export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
  export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';