'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function ModernNavigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6 ${isScrolled ? 'bg-stone/80 backdrop-blur-xl border-b border-espresso/5 py-4' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
            <div className="max-w-content mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-espresso rounded-sm rotate-45" />
                    <span className="font-outfit font-semibold text-[16px] text-espresso uppercase tracking-tight">
                        The Inner <span className="text-gold italic">Alignment</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
                    {['Philosophy', 'Method', 'Journey', 'Faculty'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-espresso/60 hover:text-gold transition-colors font-outfit text-[13px] uppercase tracking-widest font-medium"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="btn-gold !py-2.5 !px-6 !text-[12px]">
                        Apply for Sept &lsquo;25
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-espresso"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-stone border-b border-espresso/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {['Philosophy', 'Method', 'Journey', 'Faculty'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-espresso font-outfit text-[18px] font-medium"
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="btn-gold w-full">
                                Apply for Sept &lsquo;25
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
