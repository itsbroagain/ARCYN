'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/images/logos/arcyn-logo.svg" alt="Arcyn" className="h-10" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('#waitlist')}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('#waitlist')}
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-0 right-0 bg-dark-100 border-t border-dark-50 shadow-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <Container>
                <div className="py-8 space-y-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left text-lg text-gray-300 hover:text-white transition-colors py-2"
                    >
                      {link.label}
                    </button>
                  ))}

                  <div className="pt-6 space-y-3 border-t border-dark-50">
                    <Button
                      variant="ghost"
                      size="md"
                      onClick={() => scrollToSection('#waitlist')}
                      className="w-full"
                    >
                      Sign In
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => scrollToSection('#waitlist')}
                      className="w-full"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}