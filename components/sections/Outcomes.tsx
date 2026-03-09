'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
    {
        title: 'A Complete Root Map',
        description:
            'The most precise, scientifically grounded understanding of your identity, values, derailers, and strengths — produced through EQ-i 2.0, HPI, HDS, and MVPI',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Root spread">
                <path d="M20 10 C15 15 8 18 3 22" stroke="#B8862A" strokeWidth="1" strokeLinecap="round" />
                <path d="M20 10 C25 15 32 18 37 22" stroke="#B8862A" strokeWidth="1" strokeLinecap="round" />
                <path d="M20 10 C18 18 14 25 8 32" stroke="#B8862A" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M20 10 C22 18 26 25 32 32" stroke="#B8862A" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M20 10 C20 18 20 26 20 36" stroke="#B8862A" strokeWidth="0.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'A Personal Leadership Mandate',
        description:
            'A formal, one-page written declaration of who you are as a leader, what you stand for, and the specific impact you are committing to',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Single leaf">
                <path d="M20 35 L20 18" stroke="#B8862A" strokeWidth="1" strokeLinecap="round" />
                <path d="M20 18 C15 12 12 6 18 3 C24 6 21 12 20 18" stroke="#B8862A" strokeWidth="1" fill="none" />
            </svg>
        ),
    },
    {
        title: 'Somatic & Cultural Authority',
        description:
            'Embodied practices that create consistent executive presence across cultural geographies — London, Lagos, Singapore',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Tree rings">
                <circle cx="20" cy="20" r="16" stroke="#B8862A" strokeWidth="0.8" />
                <circle cx="20" cy="20" r="11" stroke="#B8862A" strokeWidth="0.6" />
                <circle cx="20" cy="20" r="6" stroke="#B8862A" strokeWidth="0.4" />
                <circle cx="20" cy="20" r="2" stroke="#B8862A" strokeWidth="0.3" />
            </svg>
        ),
    },
    {
        title: 'A Personal Brand Architecture',
        description:
            'Three to four precise qualities that define your professional presence, and a visibility strategy for every platform',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Wide canopy">
                <path d="M20 35 L20 22" stroke="#B8862A" strokeWidth="1" strokeLinecap="round" />
                <path d="M5 22 C10 10 30 10 35 22" stroke="#B8862A" strokeWidth="1" fill="none" />
                <path d="M20 22 C15 16 10 14 8 18" stroke="#B8862A" strokeWidth="0.6" strokeLinecap="round" />
                <path d="M20 22 C25 16 30 14 32 18" stroke="#B8862A" strokeWidth="0.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'A Peer Intelligence Network',
        description:
            'Entry into a lifelong cohort of equally accomplished, equally committed women',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Network node">
                <circle cx="20" cy="20" r="4" stroke="#B8862A" strokeWidth="1" />
                <circle cx="8" cy="12" r="2" stroke="#B8862A" strokeWidth="0.8" />
                <circle cx="32" cy="12" r="2" stroke="#B8862A" strokeWidth="0.8" />
                <circle cx="10" cy="32" r="2" stroke="#B8862A" strokeWidth="0.8" />
                <circle cx="30" cy="32" r="2" stroke="#B8862A" strokeWidth="0.8" />
                <line x1="17" y1="18" x2="10" y2="13" stroke="#B8862A" strokeWidth="0.5" />
                <line x1="23" y1="18" x2="30" y2="13" stroke="#B8862A" strokeWidth="0.5" />
                <line x1="18" y1="23" x2="12" y2="31" stroke="#B8862A" strokeWidth="0.5" />
                <line x1="22" y1="23" x2="28" y2="31" stroke="#B8862A" strokeWidth="0.5" />
            </svg>
        ),
    },
    {
        title: 'A 90-Day Growing Season Plan',
        description:
            'A personalised post-workshop roadmap with built-in accountability and community support',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Calendar leaf">
                <rect x="8" y="8" width="24" height="24" rx="2" stroke="#B8862A" strokeWidth="1" fill="none" />
                <line x1="8" y1="14" x2="32" y2="14" stroke="#B8862A" strokeWidth="0.8" />
                <path d="M20 20 C18 18 16 16 17 14 C18 16 20 18 20 20" stroke="#B8862A" strokeWidth="0.6" fill="none" />
            </svg>
        ),
    },
    {
        title: 'Full Psychometric Intelligence Suite',
        description:
            'Personalised reports from EQ-i 2.0 Leadership, Hogan HPI, HDS, and MVPI',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Microscope">
                <circle cx="20" cy="14" r="8" stroke="#B8862A" strokeWidth="1" fill="none" />
                <line x1="20" y1="22" x2="20" y2="32" stroke="#B8862A" strokeWidth="1" strokeLinecap="round" />
                <line x1="14" y1="32" x2="26" y2="32" stroke="#B8862A" strokeWidth="1" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'One Private Coaching Session',
        description:
            'A complimentary individual session with the lead facilitator, within 90 days of the program',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" role="img" aria-label="Compass">
                <circle cx="20" cy="20" r="14" stroke="#B8862A" strokeWidth="1" fill="none" />
                <path d="M20 8 L22 18 L20 20 L18 18 Z" stroke="#B8862A" strokeWidth="0.8" fill="none" />
                <path d="M20 32 L18 22 L20 20 L22 22 Z" stroke="#B8862A" strokeWidth="0.8" fill="none" />
                <circle cx="20" cy="20" r="2" stroke="#B8862A" strokeWidth="0.6" fill="none" />
            </svg>
        ),
    },
];

export default function Outcomes() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.outcome-card').forEach((el, i) => {
                const row = Math.floor(i / 2);
                const col = i % 2;
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: row * 0.2 + col * 0.12,
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-deep-forest py-[100px] md:py-[140px]"
            aria-label="What you leave with"
        >
            <div className="max-w-content mx-auto px-6 md:px-12">
                <span className="section-label block mb-4 text-center">THE OUTCOMES</span>
                <h2 className="text-h1 text-warm-white text-center mb-4">
                    Eight Outcomes. Each One Precise.<br className="hidden md:block" /> None Aspirational.
                </h2>
                <p className="text-body-lg text-stone text-center max-w-[620px] mx-auto mb-16">
                    These are the specific, documented results that the structure of this program is designed to produce.
                </p>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {outcomes.map((item, i) => (
                        <div
                            key={i}
                            className="outcome-card flex gap-5 p-6 md:p-8 bg-deep-forest border-l-[3px] border-l-gold"
                        >
                            <div className="flex-shrink-0 mt-1">{item.svg}</div>
                            <div>
                                <h4 className="font-satoshi font-bold text-warm-white text-[16px] md:text-[18px] mb-2">
                                    {item.title}
                                </h4>
                                <p className="font-satoshi text-stone text-[14px] leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="font-cormorant italic text-light-sage text-[18px] md:text-[22px] text-center mt-16 max-w-[620px] mx-auto leading-relaxed">
                    These are not promises. They are the documented results of the structure you are about to enter.
                </p>
            </div>
        </section>
    );
}
