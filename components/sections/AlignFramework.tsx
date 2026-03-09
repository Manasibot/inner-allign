'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    {
        letter: 'A',
        pillar: 'Awareness',
        treePart: 'The Root System',
        subtitle: 'Root Architecture',
        description:
            'Identity, values, self-perception — mapped with scientific precision using EQ-i 2.0 and Hogan Assessments',
        svg: (
            <svg viewBox="0 0 120 80" fill="none" className="w-full h-auto" role="img" aria-label="Root system illustration">
                <path d="M60 10 C50 20 30 30 10 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M60 10 C70 20 90 30 110 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M60 10 C55 25 40 40 20 55" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M60 10 C65 25 80 40 100 55" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M60 10 C58 30 50 50 35 70" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
                <path d="M60 10 C62 30 70 50 85 70" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
                <path d="M60 10 C60 30 60 50 60 75" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        letter: 'L',
        pillar: 'Leadership Intent',
        treePart: 'The Stem',
        subtitle: 'Growth Direction',
        description: 'The irreversible decision: which direction is up. Role, ambition, influence goals',
        svg: (
            <svg viewBox="0 0 120 80" fill="none" className="w-full h-auto" role="img" aria-label="Stem illustration">
                <line x1="60" y1="75" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M60 20 C55 15 52 10 55 5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                <ellipse cx="55" cy="4" rx="3" ry="4" stroke="currentColor" strokeWidth="0.6" fill="none" transform="rotate(-20 55 4)" />
            </svg>
        ),
    },
    {
        letter: 'I',
        pillar: 'Impact',
        treePart: 'The Bud',
        subtitle: 'First Visible Signal',
        description: 'How the world outside you reads the world inside you',
        svg: (
            <svg viewBox="0 0 120 80" fill="none" className="w-full h-auto" role="img" aria-label="Bud cluster illustration">
                <ellipse cx="50" cy="40" rx="10" ry="14" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-15 50 40)" />
                <ellipse cx="60" cy="35" rx="10" ry="14" stroke="currentColor" strokeWidth="1" fill="none" />
                <ellipse cx="70" cy="40" rx="10" ry="14" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(15 70 40)" />
                <line x1="60" y1="50" x2="60" y2="75" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        letter: 'G',
        pillar: 'Gravitas',
        treePart: 'The Trunk & Bark',
        subtitle: 'Bark Intelligence',
        description: 'Somatic authority, cultural climate adaptability, executive presence',
        svg: (
            <svg viewBox="0 0 120 80" fill="none" className="w-full h-auto" role="img" aria-label="Trunk cross-section illustration">
                <circle cx="60" cy="40" r="28" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <circle cx="60" cy="40" r="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="60" cy="40" r="12" stroke="currentColor" strokeWidth="0.6" fill="none" />
                <circle cx="60" cy="40" r="5" stroke="currentColor" strokeWidth="0.4" fill="none" />
                <path d="M32 40 C40 38 50 42 60 40 C70 38 80 42 88 40" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        letter: 'N',
        pillar: 'Narrative',
        treePart: 'The Canopy',
        subtitle: 'The Canopy Economy',
        description:
            'Personal brand, authentic visibility — the part that feeds others and attracts the world',
        svg: (
            <svg viewBox="0 0 120 80" fill="none" className="w-full h-auto" role="img" aria-label="Canopy illustration">
                <path d="M60 70 L60 50" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M60 50 C40 45 20 30 15 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M60 50 C80 45 100 30 105 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M60 50 C50 40 35 25 30 10" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
                <path d="M60 50 C70 40 85 25 90 10" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
                <path d="M60 50 C55 35 50 20 50 5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                <path d="M60 50 C65 35 70 20 70 5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                <path d="M15 20 C30 15 50 10 60 8 C70 10 90 15 105 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function AlignFramework() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.align-card').forEach((el, i) => {
                gsap.from(el, {
                    y: 60,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    delay: i * 0.15,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-deep-forest py-[100px] md:py-[140px]"
            aria-label="The ALIGN Framework"
        >
            <div className="max-w-content mx-auto px-6 md:px-12">
                <span className="section-label block mb-4 text-center">THE METHOD</span>
                <h2 className="text-h1 text-warm-white text-center mb-6">The ALIGN Framework™</h2>
                <p className="text-body-lg text-stone text-center max-w-[620px] mx-auto mb-16">
                    Five parts of the tree. Five pillars of your transformation. Each phase follows the same biological sequence that
                    produces the world&apos;s most enduring trees.
                </p>

                {/* Desktop: 5 columns. Mobile: horizontal scroll with snap */}
                <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                    {pillars.map((p, i) => (
                        <div
                            key={i}
                            className="align-card flex-shrink-0 w-[260px] md:w-auto md:flex-1 snap-center
                bg-deep-forest border border-stone/20 p-6 md:p-8
                card-hover hover:border-t-2 hover:border-t-warm-white/60 transition-all duration-300"
                        >
                            <span className="font-canela text-gold text-[60px] md:text-[80px] leading-none block mb-3">
                                {p.letter}
                            </span>
                            <h3 className="font-satoshi font-bold text-warm-white text-[15px] md:text-[16px] mb-1">
                                {p.pillar}
                            </h3>
                            <p className="font-cormorant italic text-light-sage text-[16px] md:text-[18px] mb-4">
                                {p.treePart}
                            </p>
                            <p className="font-satoshi text-stone text-[13px] md:text-[14px] leading-relaxed mb-6">
                                {p.description}
                            </p>
                            <div className="text-light-sage/40 mt-auto">{p.svg}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
