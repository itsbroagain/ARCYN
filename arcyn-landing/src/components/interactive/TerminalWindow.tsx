'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'error' | 'info';
  content: string;
  delay?: number;
}

interface TerminalWindowProps {
  lines: TerminalLine[];
  title?: string;
  animated?: boolean;
}

export default function TerminalWindow({ 
  lines, 
  title = 'bash',
  animated = true 
}: TerminalWindowProps) {
  const [visibleLines, setVisibleLines] = useState<number>(animated ? 0 : lines.length);

  useEffect(() => {
    if (!animated) return;

    const timeouts: NodeJS.Timeout[] = [];
    let cumulativeDelay = 0;

    lines.forEach((line, index) => {
      cumulativeDelay += line.delay || 500;
      const timeout = setTimeout(() => {
        setVisibleLines(index + 1);
      }, cumulativeDelay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [lines, animated]);

  return (
    <motion.div 
      className="terminal-window shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
        </div>
        <span className="text-sm text-gray-400 ml-4">{title}</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        {lines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="terminal-line"
          >
            {line.type === 'command' && (
              <>
                <span className="terminal-prompt">➜</span>
                <span className="terminal-path"> ~/arcyn</span>
                <span className="terminal-command"> {line.content}</span>
              </>
            )}
            {line.type === 'output' && (
              <span className="terminal-output">{line.content}</span>
            )}
            {line.type === 'success' && (
              <span className="terminal-success">✓ {line.content}</span>
            )}
            {line.type === 'error' && (
              <span className="terminal-error">✗ {line.content}</span>
            )}
            {line.type === 'info' && (
              <span className="terminal-info">ℹ {line.content}</span>
            )}
          </motion.div>
        ))}
        {animated && visibleLines < lines.length && (
          <span className="terminal-cursor" />
        )}
      </div>
    </motion.div>
  );
}