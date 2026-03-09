'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const days = [
    {
        number: '01',
        title: 'Knowing Yourself, Choosing Your Direction',
        tags: ['A — Awareness', 'L — Leadership Intent'],
        description:
            'The most important day of the program. Before any tree can grow, it must understand the terrain it is growing in. Today, each woman receives the most precise map of herself she has ever held — and makes her most important decision: which direction is up.',
    },
    {
        number: '02',
        title: 'Showing Up & Standing Tall',
        tags: ['I — Impact', 'G — Gravitas'],
        description:
            'The transition from interior to exterior. The roots are mapped, the direction is chosen. Now we examine the signal — how does this woman\'s inner world translate into outer presence?',
    },
    {
        number: '03',
        title: 'Owning Your Story, Growing Your Canopy',
        tags: ['N — Narrative', 'Integration'],
        description:
            'The harvest and the replanting. The roots are mapped, the trunk is strong. Now we grow the canopy: the visible, magnetic, distinctive expression of this woman\'s fully-integrated self.',
    },
];

export default function ThreeDayJourney() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<SVGLineElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            // Timeline line draw
            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    { attr: { y2: 0 } },
                    {
                        attr: { y2: '100%' },
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 60%',
                            end: 'bottom 40%',
                            scrub: 1,
                        },
                    }
                );
            }

            // Day blocks
            gsap.utils.toArray<HTMLElement>('.day-block').forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                });
            });

            // Node circles
            gsap.utils.toArray<HTMLElement>('.day-node').forEach((el) => {
                gsap.from(el, {
                    scale: 0,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-warm-white py-[100px] md:py-[140px]"
            aria-label="The three-day journey"
        >
            <div className="max-w-content mx-auto px-6 md:px-12">
                <span className="section-label block mb-4 text-center">THE JOURNEY</span>
                <h2 className="text-h1 text-deep-purple text-center mb-4">
                    Three Days. Five Pillars.<br className="hidden md:block" /> One Complete Cartography.
                </h2>
                <p className="text-body-lg text-charcoal text-center max-w-[620px] mx-auto mb-20">
                    Each day follows the biological sequence of tree growth — building upward from root to canopy.
                </p>

                {/* Timeline */}
                <div className="relative max-w-[900px] mx-auto">
                    {/* Vertical line - visible on desktop, left-aligned on tablet/mobile */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
                        <svg className="w-full h-full overflow-visible" aria-hidden="true">
                            <line
                                ref={lineRef}
                                x1="0" y1="0" x2="0" y2="0"
                                stroke="#B8862A"
                                strokeWidth="1"
                                strokeOpacity="0.4"
                            />
                        </svg>
                    </div>

                    {days.map((day, i) => (
                        <div
                            key={i}
                            className={`day-block relative flex items-start gap-8 md:gap-16 mb-20 last:mb-0 
                ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                flex-row pl-12 md:pl-0`}
                        >
                            {/* Node marker */}
                            <div
                                className="day-node absolute left-2 md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 rounded-full bg-warm-white border-2 border-gold flex items-center justify-center z-10"
                            >
                                <div className="w-2 h-2 rounded-full bg-gold" />
                            </div>

                            {/* Content */}
                            <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                <span className="font-canela text-deep-purple text-[48px] md:text-[64px] leading-none block mb-2">
                                    Day {day.number}
                                </span>
                                <h3 className="font-satoshi font-bold text-charcoal text-[18px] md:text-[20px] mb-4">
                                    {day.title}
                                </h3>
                                <div className={`flex flex-wrap gap-2 mb-4 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {day.tags.map((tag, j) => (
                                        <span key={j} className="align-pill">{tag}</span>
                                    ))}
                                </div>
                                <p className="text-body text-charcoal">{day.description}</p>
                            </div>

                            {/* Spacer for opposite side */}
                            <div className="hidden md:block md:w-[45%]" />
                        </div>
                    ))}
                </div>

                <p className="text-center mt-16">
                    <a href="#apply" className="font-satoshi text-gold text-[14px] hover:underline transition-all">
                        The full agenda is shared during the application process →
                    </a>
                </p>
            </div>
        </section>
    );
}
