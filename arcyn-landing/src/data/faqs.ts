import type { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    question: 'How is Arcyn different from GitHub Copilot or Cursor?',
    answer: 'Copilot and Cursor help you write code faster. Arcyn generates entire production-ready applications from scratch—complete with authentication, payments, database, and deployment.'
  },
  {
    question: 'What does "95%+ production-ready" actually mean?',
    answer: 'Every generated app passes strict quality checks: TypeScript strict mode (zero errors), security scanning, accessibility validation, and best practices enforcement.'
  },
  {
    question: 'Do I own the generated code?',
    answer: 'Yes. 100%. The generated code is yours to modify, deploy, and sell. No restrictions, no royalties.'
  },
  {
    question: 'What tech stack does Arcyn generate?',
    answer: 'Next.js 14 (App Router) + TypeScript, Supabase or Prisma for database, Stripe for payments, Tailwind + shadcn/ui for styling, and Vercel for hosting.'
  },
  {
    question: 'Can I customize the generated code?',
    answer: 'Absolutely. The code is clean, well-commented, and follows industry best practices. Plus, Arcyn learns from your edits to generate better code for you next time.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! 14 days, no credit card required. Generate as many apps as you want during the trial.'
  }
];