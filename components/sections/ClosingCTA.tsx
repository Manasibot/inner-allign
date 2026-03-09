'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const treeRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            // Reversed tree draw (canopy downward)
            const paths = treeRef.current?.querySelectorAll('.close-tree-path');
            if (paths) {
                paths.forEach((path) => {
                    const el = path as SVGPathElement;
                    const length = el.getTotalLength();
                    gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
                    gsap.to(el, {
                        strokeDashoffset: 0,
                        duration: 2.5,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
                    });
                });
            }

            // Text sequence
            gsap.from('.close-tagline', {
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: 1.5,
                scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
            });

            gsap.from('.close-attribution', {
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: 2.0,
                scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
            });

            gsap.from('.close-cta', {
                y: 20,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: 2.2,
                scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
            });

            gsap.from('.close-fine', {
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: 2.5,
                scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-deep-forest min-h-screen flex items-center justify-center relative overflow-hidden"
            aria-label="Final call to action"
        >
            {/* Reversed tree SVG background */}
            <svg
                ref={treeRef}
                viewBox="0 0 500 800"
                fill="none"
                className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none"
                style={{ transform: 'scaleY(-1)' }}
                role="img"
                aria-label="Reversed botanical tree illustration"
            >
                <path className="close-tree-path" d="M250 700 C200 720 140 730 80 750" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                <path className="close-tree-path" d="M250 700 C300 720 360 730 420 750" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                <path className="close-tree-path" d="M250 700 C248 600 245 500 250 400 C252 350 248 300 250 250" stroke="#FAF8F5" strokeWidth="3" strokeOpacity="0.6" strokeLinecap="round" />
                <path className="close-tree-path" d="M250 350 C200 300 150 280 100 250" stroke="#FAF8F5" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
                <path className="close-tree-path" d="M250 350 C300 300 350 280 400 250" stroke="#FAF8F5" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
                <path className="close-tree-path" d="M250 300 C220 260 180 230 140 180" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
                <path className="close-tree-path" d="M250 300 C280 260 320 230 360 180" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
                <path className="close-tree-path" d="M250 280 C250 200 250 140 250 60" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
            </svg>

            <div className="relative z-10 text-center px-6 max-w-[600px] mx-auto">
                <p className="close-tagline font-cormorant italic text-light-sage text-[32px] md:text-[48px] leading-tight mb-10">
                    When clarity within grows, influence naturally follows.
                </p>

                <p className="close-attribution font-satoshi text-stone text-[13px] tracking-[0.12em] mb-20">
                    — The Inner Alignment Experience
                </p>

                <div className="close-cta mb-10">
                    <a href="#apply" className="btn-gold">
                        Begin Your Application
                        <span className="arrow">→</span>
                    </a>
                </div>

                <p className="close-fine font-satoshi text-stone/60 text-[12px] tracking-[0.08em]">
                    Powered by The ALIGN Framework™ · International Edition · Cohort of 14
                </p>
            </div>
        </section>
    );
}
