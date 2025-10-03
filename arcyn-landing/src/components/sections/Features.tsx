'use client';

import React from 'react';
import { Brain, Zap, Shield, RefreshCw, Code2, Database } from 'lucide-react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Generation',
    description: 'Claude Sonnet 4.5 + GPT-4.5 orchestration for intelligent code generation. Not templates—real, context-aware architecture.',
    gradient: 'from-primary-500 to-purple-500',
    highlights: ['Natural language input', 'Smart module selection', 'Production-ready output']
  },
  {
    icon: Zap,
    title: 'Lightning Fast Deploy',
    description: 'From description to deployed app in under 5 minutes. Complete with GitHub repo, database, and payments configured.',
    gradient: 'from-purple-500 to-pink-500',
    highlights: ['Vercel deployment', 'Auto GitHub push', 'DNS configuration']
  },
  {
    icon: Shield,
    title: '95%+ Quality Score',
    description: 'Every generated app passes strict QA checks. TypeScript strict mode, security scanning, accessibility validation.',
    gradient: 'from-pink-500 to-red-500',
    highlights: ['Zero TypeScript errors', 'Security best practices', 'WCAG 2.1 AA compliant']
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'Arcyn learns from every user edit. Templates auto-improve weekly based on real usage patterns from thousands of developers.',
    gradient: 'from-cyan-500 to-blue-500',
    highlights: ['Pattern detection', 'Auto-template updates', 'Personal preferences']
  },
  {
    icon: Code2,
    title: 'Battle-Tested Templates',
    description: 'Hand-crafted by senior developers. Auth, billing, teams, CRUD—all production-ready modules that actually work.',
    gradient: 'from-blue-500 to-primary-500',
    highlights: ['7 auth variants', 'Stripe integration', 'RBAC system']
  },
  {
    icon: Database,
    title: 'Full Stack Generation',
    description: 'Not just frontend. Complete backend with API routes, database schema, migrations, and real-time subscriptions.',
    gradient: 'from-green-500 to-cyan-500',
    highlights: ['Supabase setup', 'Prisma schemas', 'API generation']
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Developers <GradientText>Love Arcyn</GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Not another code generator. A complete AI-powered development environment.
          </p>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <Card hover gradient className="h-full">
                <CardHeader>
                  {/* Icon with gradient */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-xl bg-dark-100 flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-green-400">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}