'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import FadeIn from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';

const showcaseTabs = [
  { id: 'generation', label: 'Generation Process', mockup: '/images/mockups/terminal-output.svg' },
  { id: 'code', label: 'Live Coding', mockup: '/images/videos/code-generation.svg' },
  { id: 'deployment', label: 'Deployment Flow', mockup: '/images/videos/deployment-flow.svg' },
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState('generation');

  return (
    <section className="py-32 relative overflow-hidden bg-dark-100">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <img src="/images/hero/grid-pattern.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Watch <GradientText>Arcyn</GradientText> in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See exactly how Arcyn transforms your description into production-ready code
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {showcaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-dark-200 text-gray-400 hover:text-white hover:bg-dark-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Mockup Display */}
        <FadeIn delay={0.4}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />
            
            {/* Mockup */}
            <img
              src={showcaseTabs.find(t => t.id === activeTab)?.mockup}
              alt={showcaseTabs.find(t => t.id === activeTab)?.label}
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-dark-50"
            />
          </motion.div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { label: 'Lines of Code', value: '847+', icon: '📝' },
              { label: 'Files Generated', value: '43', icon: '📁' },
              { label: 'Quality Score', value: '96%', icon: '✨' },
              { label: 'Deploy Time', value: '3.7m', icon: '⚡' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}