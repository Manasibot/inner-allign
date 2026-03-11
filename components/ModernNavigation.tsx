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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6 ${isScrolled ? 'bg-petal/80 backdrop-blur-xl border-b border-plum/5 py-4' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
            <div className="max-w-content mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="The Inner Alignment"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
                    {['Philosophy', 'Method', 'Journey', 'Faculty'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-plum/60 hover:text-rose-gold transition-colors font-outfit text-[13px] uppercase tracking-widest font-medium"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#apply" className="btn-rose !py-2.5 !px-6 !text-[12px]">
                        Apply for May &lsquo;26
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-plum"
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
                        className="md:hidden bg-blush border-b border-plum/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {['Philosophy', 'Method', 'Journey', 'Faculty'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-plum font-outfit text-[18px] font-medium"
                                >
                                    {item}
                                </a>
                            ))}
                            <a href="#apply" onClick={() => setIsMobileMenuOpen(false)} className="btn-gold w-full text-center">
                                Apply for May &lsquo;26
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
