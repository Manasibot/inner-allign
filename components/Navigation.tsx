'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 500);

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-forest' : 'bg-transparent'
                } ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionTimingFunction: 'var(--ease-entrance)' }}
        >
            <a
                href="#"
                className="font-canela text-warm-white text-[18px] md:text-[20px] tracking-tight whitespace-nowrap"
            >
                The Inner Alignment Experience
            </a>
            <a
                href="#apply"
                className="font-satoshi font-medium text-gold text-[14px] tracking-[0.08em] uppercase hover:text-mid-gold transition-colors duration-300"
            >
                Apply
            </a>
        </nav>
    );
}
