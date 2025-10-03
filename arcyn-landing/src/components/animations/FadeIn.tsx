'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { AnimationProps } from '@/types';

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className 
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
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