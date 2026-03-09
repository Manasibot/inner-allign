'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AncientForestHook() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.forest-para').forEach((el, i) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    delay: i * 0.2,
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                });
            });

            gsap.from('.forest-quote', {
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: 0.4,
                scrollTrigger: { trigger: '.forest-quote', start: 'top 85%', once: true },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-warm-white py-[100px] md:py-[160px] relative overflow-hidden"
            aria-label="The philosophy of The Inner Alignment Experience"
        >
            {/* Tree ring background */}
            <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
                viewBox="0 0 600 600"
                aria-hidden="true"
            >
                {[60, 90, 120, 155, 190, 225, 260].map((r, i) => (
                    <circle key={i} cx="300" cy="300" r={r} fill="none" stroke="#E8E4DE" strokeWidth="1" />
                ))}
            </svg>

            <div className="relative z-10 max-w-narrow mx-auto px-6 md:px-12">
                <span className="section-label block mb-12 text-center">THE PHILOSOPHY</span>

                <p className="forest-para text-body-lg text-charcoal mb-8">
                    The most powerful trees in the world did not grow by accident. Beneath every towering oak, every ancient cedar,
                    every fruit-bearing canopy — there is a root system as complex and intelligent as the tree itself. It mapped its
                    terrain before it grew. It survived storms by developing density, not rigidity. It feeds an entire ecosystem
                    simply by becoming fully itself.
                </p>

                <p className="forest-para text-body-lg text-charcoal mb-8">
                    The Inner Alignment Experience is built on this truth. This is not a program for women who are broken. This is a
                    program for women who are already powerful — and who sense, with absolute clarity, that there is more. More depth.
                    More reach. More of themselves waiting to be expressed.
                </p>

                <p className="forest-para text-body-lg text-charcoal mb-4">
                    Over three transformational days, using the precision of The ALIGN Framework™ and the wisdom of the Ancient
                    Forest, you will complete the most important cartography of your life.
                </p>

                <p className="forest-quote font-cormorant italic text-deep-purple text-[22px] md:text-[26px] leading-relaxed">
                    A complete map of your inner architecture, your leadership ecosystem, and the legacy canopy you were designed to
                    grow.
                </p>
            </div>
        </section>
    );
}
