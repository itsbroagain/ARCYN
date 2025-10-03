'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CodeEditorProps {
  code: string;
  language?: string;
  filename?: string;
  typing?: boolean;
  typingSpeed?: number;
}

export default function CodeEditor({ 
  code, 
  language = 'typescript',
  filename = 'example.ts',
  typing = false,
  typingSpeed = 20
}: CodeEditorProps) {
  const [displayedCode, setDisplayedCode] = useState(typing ? '' : code);
  const [currentLine, setCurrentLine] = useState(1);

  useEffect(() => {
    if (!typing) {
      setDisplayedCode(code);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode(code.slice(0, index + 1));
        if (code[index] === '\n') {
          setCurrentLine(prev => prev + 1);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [code, typing, typingSpeed]);

  const lines = displayedCode.split('\n');

  return (
    <motion.div 
      className="code-editor shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Editor Header */}
      <div className="code-editor-header">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="code-tab active ml-4">
          {filename}
        </div>
      </div>

      {/* Editor Content */}
      <div className="code-content">
        {lines.map((line, index) => (
          <div key={index} className="code-line">
            <span className="code-line-numbers">
              {index + 1}
            </span>
            <pre className="flex-1 pl-4">
              <code 
                className={`language-${language}`}
                dangerouslySetInnerHTML={{ __html: highlightSyntax(line, language) }}
              />
            </pre>
          </div>
        ))}
        {typing && displayedCode.length < code.length && (
          <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />
        )}
      </div>
    </motion.div>
  );
}

function highlightSyntax(line: string, language: string): string {
  if (!line.trim()) return '&nbsp;';

  // Simple syntax highlighting
  let highlighted = line;

  // Keywords
  const keywords = ['import', 'from', 'export', 'const', 'let', 'var', 'function', 'async', 'await', 'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type'];
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="syntax-keyword">${keyword}</span>`);
  });

  // Strings
  highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span class="syntax-string">$1$2$1</span>');

  // Comments
  highlighted = highlighted.replace(/(\/\/.*$)/, '<span class="syntax-comment">$1</span>');
  highlighted = highlighted.replace(/(\/\*.*?\*\/)/g, '<span class="syntax-comment">$1</span>');

  // Functions
  highlighted = highlighted.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="syntax-function">$1</span>(');

  // Numbers
  highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="syntax-number">$1</span>');

  return highlighted;
}