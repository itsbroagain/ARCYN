import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/animations.css';
import '@/styles/code-theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arcyn - Ship SaaS Apps in Minutes, Not Months',
  description: 'The AI-powered IDE that generates production-ready SaaS applications. 95%+ quality code, deployed in under 5 minutes.',
  keywords: 'AI IDE, SaaS generator, code generation, Next.js, TypeScript, Supabase, Stripe',
  authors: [{ name: 'Arcyn' }],
  openGraph: {
    title: 'Arcyn - Ship SaaS Apps in Minutes',
    description: 'Generate production-ready SaaS applications with AI. Deploy in under 5 minutes.',
    type: 'website',
    url: 'https://arcyn.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcyn - Ship SaaS Apps in Minutes',
    description: 'Generate production-ready SaaS applications with AI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}