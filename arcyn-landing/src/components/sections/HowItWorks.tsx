'use client';

import React from 'react';
import { MessageSquare, Sparkles, Rocket } from 'lucide-react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import FadeIn from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Describe Your App',
    description: 'Tell Arcyn what you want to build in plain English. No technical jargon needed.',
    gradient: 'from-primary-500 to-purple-500',
    example: '"Build a project management SaaS with team workspaces, Stripe billing, and client portals"'
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Review & Refine',
    description: 'AI generates a complete project spec. Review features, data models, and tech stack before proceeding.',
    gradient: 'from-purple-500 to-pink-500',
    example: '✓ 8 features detected\n✓ Database schema mapped\n✓ Tech stack selected'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy & Ship',
    description: 'Get a production-ready app deployed to Vercel with GitHub repo, database, and payments configured.',
    gradient: 'from-pink-500 to-cyan-500',
    example: 'Live URL + GitHub repo\nReady in 3-5 minutes'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            From Idea to <GradientText>Production</GradientText>
            <br />in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No coding required. Just describe what you want, and Arcyn handles the rest.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.2}>
              <motion.div
                className="relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Connection Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent -z-10" />
                )}

                <div className="relative bg-dark-100 rounded-2xl p-8 border border-dark-50 card-lift glow-hover h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-dark-200 to-dark-100 border border-dark-50 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-xl bg-dark-100 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6">{step.description}</p>

                  {/* Example Box */}
                  <div className="bg-dark-200 rounded-lg p-4 border border-dark-50">
                    <div className="text-xs text-gray-500 mb-2">Example:</div>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                      {step.example}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.8} className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to see it in action?</p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Join the Waitlist</span>
            <Rocket className="w-5 h-5" />
          </motion.button>
        </FadeIn>
      </Container>
    </section>
  );
}