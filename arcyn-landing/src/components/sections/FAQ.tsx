'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import FadeIn from '@/components/animations/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How is Arcyn different from GitHub Copilot or Cursor?',
    answer: 'Copilot and Cursor help you write code faster. Arcyn generates entire production-ready applications from scratch—complete with authentication, payments, database, and deployment. Think of it as a senior developer building your app, not just autocompleting lines.'
  },
  {
    question: 'What does "95%+ production-ready" actually mean?',
    answer: 'Every generated app passes strict quality checks: TypeScript strict mode (zero errors), security scanning, accessibility validation, and best practices enforcement. The code is indistinguishable from what a senior developer would ship. You can deploy immediately—no fixing broken code.'
  },
  {
    question: 'Do I own the generated code?',
    answer: 'Yes. 100%. The generated code is yours to modify, deploy, and sell. No restrictions, no royalties. You can even white-label it for clients.'
  },
  {
    question: 'What tech stack does Arcyn generate?',
    answer: 'Next.js 14 (App Router) + TypeScript, Supabase or Prisma for database, Stripe for payments, Tailwind + shadcn/ui for styling, and Vercel for hosting. We focus on the most modern, production-proven stack.'
  },
  {
    question: 'Can I customize the generated code?',
    answer: 'Absolutely. The code is clean, well-commented, and follows industry best practices. You can edit it like any codebase. Plus, Arcyn learns from your edits to generate better code for you next time.'
  },
  {
    question: 'How does the continuous learning work?',
    answer: 'Arcyn tracks what developers edit after generation (anonymously). When patterns emerge—like "80% of users add loading states here"—we update our templates. Your future generations automatically benefit from collective knowledge.'
  },
  {
    question: 'What if I need features not in the templates?',
    answer: 'The AI can combine and customize templates intelligently. For truly custom features, you can edit the generated code yourself—it\'s standard Next.js/TypeScript. V2 will have custom template creation.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! 14 days, no credit card required. Generate as many apps as you want during the trial. If you\'re not blown away, cancel anytime.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Arcyn
          </p>
        </FadeIn>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="bg-dark-100 rounded-xl border border-dark-50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5} className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@arcyn.dev"
            className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
          >
            Email us at hello@arcyn.dev
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}