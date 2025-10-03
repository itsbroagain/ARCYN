'use client';

import React from 'react';
import { Check, Zap } from 'lucide-react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FadeIn from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200" />

      <Container className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge variant="warning" className="mb-4">
            <Zap className="w-3 h-3 mr-2" />
            Early Bird Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Lock in <GradientText>Founder Pricing</GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join now and get lifetime access at early bird rates. Price increases after launch.
          </p>
        </FadeIn>

        {/* Pricing Card */}
        <FadeIn delay={0.2}>
          <motion.div
            className="max-w-lg mx-auto"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-dark-100 rounded-3xl p-8 md:p-12 border-2 border-primary-500 shadow-2xl shadow-primary-500/20">
              {/* Best Value Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="success" className="text-sm px-6 py-2">
                  🔥 Best Value
                </Badge>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl text-gray-500 line-through">$99</span>
                  <span className="text-6xl font-bold gradient-text">$49</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">Limited time founder pricing</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited app generations',
                  '95%+ production-ready code',
                  'Deploy to Vercel + GitHub',
                  'All premium templates',
                  'Stripe integration included',
                  'Priority support',
                  'Early access to new features',
                  'Lifetime founder pricing'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="primary"
                size="lg"
                className="w-full mb-4"
                onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist - Lock in $49/mo
              </Button>

              <p className="text-sm text-center text-gray-500">
                14-day free trial • Cancel anytime • No credit card required
              </p>
            </div>
          </motion.div>
        </FadeIn>

        {/* Launch Timeline */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-gray-400">
            Expected launch: <span className="text-white font-semibold">Q1 2025</span>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}