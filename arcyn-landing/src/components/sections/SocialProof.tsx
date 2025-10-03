'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, MessageSquare } from 'lucide-react';
import Container from '@/components/layout/Container';
import GradientText from '@/components/ui/GradientText';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import FadeIn from '@/components/animations/FadeIn';
import { getWaitlistCount } from '@/lib/supabase';

export default function SocialProof() {
  const [waitlistCount, setWaitlistCount] = useState(200);

  useEffect(() => {
    getWaitlistCount()
      .then(count => setWaitlistCount(count))
      .catch(() => setWaitlistCount(200)); // Fallback
  }, []);

  return (
    <section className="py-32 relative">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join <GradientText>Hundreds</GradientText> of Developers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Developers are already seeing the potential. Don't miss out.
          </p>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={0.1}>
            <div className="bg-dark-100 rounded-2xl p-8 border border-dark-50 text-center card-lift glow-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber value={waitlistCount} suffix="+" />
              </div>
              <div className="text-gray-400">On the Waitlist</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-dark-100 rounded-2xl p-8 border border-dark-50 text-center card-lift glow-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber value={143} />
              </div>
              <div className="text-gray-400">Reddit Views (24h)</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-dark-100 rounded-2xl p-8 border border-dark-50 text-center card-lift glow-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber value={21} />
              </div>
              <div className="text-gray-400">Beta Requests (24h)</div>
            </div>
          </FadeIn>
        </div>

        {/* Reddit Validation */}
        <FadeIn delay={0.4}>
          <div className="bg-dark-100 rounded-2xl p-8 border border-primary-500/20 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Validated on Reddit</h3>
                <p className="text-gray-400">Posted 24 hours ago</p>
              </div>
            </div>
            <blockquote className="text-gray-300 italic mb-4">
              "This is exactly what I've been waiting for. The AI IDE space is heating up, but this looks like it actually generates production-ready code, not toy examples."
            </blockquote>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>👍 143 views</span>
              <span>💬 21 interested developers</span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}