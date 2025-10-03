'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { AnimationProps } from '@/types';

interface SlideInProps extends AnimationProps {
  direction?: 'left' | 'right' | 'up' | 'down';
}

export default function SlideIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  className 
}: SlideInProps) {
  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}