'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Code2 } from 'lucide-react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import Badge from '@/components/ui/Badge';
import WaitlistForm from '@/components/forms/WaitlistForm';
import FloatingOrbs from '@/components/interactive/FloatingOrbs';
import CodeEditor from '@/components/interactive/CodeEditor';

const exampleCode = `import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const { name, email } = await req.json();
  
  const { data, error } = await supabase
    .from('projects')
    .insert([{ name, email, status: 'active' }])
    .select();
  
  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
  
  return NextResponse.json(data);
}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <FloatingOrbs />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Badge variant="info" className="inline-flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                <span>21 beta testers in 24 hours</span>
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ship SaaS Apps in{' '}
              <GradientText as="span">Minutes</GradientText>
              , Not Months
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl text-gray-400 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The AI-powered IDE that generates production-ready SaaS applications. 
              Describe your app, get a deployed codebase with authentication, payments, 
              and database—all in under 5 minutes.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-300">95%+ Production Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-gray-300">Deploy in ~4 Minutes</span>
              </div>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <WaitlistForm source="hero" size="lg" />
            </motion.div>

            {/* Trust Indicators */}
            <motion.p
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-green-400">✓</span> No credit card required
              <span className="mx-2">•</span>
              <span className="text-green-400">✓</span> 14-day free trial
              <span className="mx-2">•</span>
              <span className="text-green-400">✓</span> Cancel anytime
            </motion.p>
          </motion.div>

          {/* Right Content - Desktop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
            
            {/* Desktop Editor Mockup SVG */}
            <div className="relative">
              <img 
                src="/images/mockups/desktop-editor-dark.svg" 
                alt="Arcyn Code Editor" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />

              {/* Floating Quality Badge */}
              <motion.div
                className="absolute -right-4 top-8 bg-dark-100 border border-green-500/20 rounded-xl p-4 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <img src="/images/features/quality-badge.svg" alt="Quality" className="w-12 h-12" />
                  <div>
                    <div className="text-2xl font-bold text-white">96%</div>
                    <div className="text-xs text-gray-400">Quality Score</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -left-4 bottom-8 bg-dark-100 border border-primary-500/20 rounded-xl p-4 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 2 }}
              >
                <img src="/images/features/lightning-deploy.svg" alt="Fast" className="w-8 h-8 mb-2" />
                <div className="text-sm text-gray-400 mb-1">Generation Time</div>
                <div className="text-2xl font-bold gradient-text">3m 47s</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}