'use client';

import React from 'react';
import { Rocket } from 'lucide-react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import WaitlistForm from '@/components/forms/WaitlistForm';
import FadeIn from '@/components/animations/FadeIn';

export default function FinalCTA() {
  return (
    <section id="waitlist" className="py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <img src="/images/hero/grid-pattern.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary-500 via-purple-500 to-cyan-500 flex items-center justify-center">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Ship <GradientText>10x Faster</GradientText>?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of SaaS development.
          </p>

          {/* Waitlist Form */}
          <div className="mb-8">
            <WaitlistForm source="final_cta" size="lg" />
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}