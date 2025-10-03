'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 - Top Right */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-cyan-500 blur-3xl" />
      </motion.div>

      {/* Orb 2 - Bottom Left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 opacity-20"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-primary-500 blur-3xl" />
      </motion.div>

      {/* Orb 3 - Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 via-primary-500 to-purple-500 blur-3xl" />
      </motion.div>
    </div>
  );
}