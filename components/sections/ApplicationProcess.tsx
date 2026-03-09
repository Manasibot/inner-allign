'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        title: 'Submit Your Application',
        desc: 'A 10-minute form covering your professional context and current inflection point',
    },
    {
        num: '02',
        title: 'Application Review',
        desc: 'The facilitation team reviews within 5 business days',
    },
    {
        num: '03',
        title: 'Exploratory Conversation',
        desc: 'A 20-minute call for mutual fit assessment',
    },
    {
        num: '04',
        title: 'Confirmation & Welcome',
        desc: 'Confirmed participants receive the pre-work dossier and onboarding details',
    },
];

export default function ApplicationProcess() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.app-step').forEach((el, i) => {
                gsap.from(el, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: i * 0.12,
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                });
            });

            gsap.from('.app-card', {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.app-card', start: 'top 85%', once: true },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const totalPlaces = 14;
    const filledPlaces = 5;

    return (
        <section
            ref={sectionRef}
            id="apply"
            className="bg-warm-white py-[100px] md:py-[140px]"
            aria-label="Application process"
        >
            <div className="max-w-content mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Column — Content */}
                    <div className="lg:w-[58%]">
                        <span className="section-label block mb-4">THE APPLICATION</span>
                        <h2 className="text-h1 text-deep-purple mb-6">Selectivity Is a Form of Care.</h2>
                        <p className="text-body-lg text-charcoal mb-12 max-w-[560px]">
                            The application process exists because the curation of this cohort is the program&apos;s most important
                            design decision. Every woman in the room shapes the experience for every other woman. We review each
                            application carefully.
                        </p>

                        <div className="space-y-8">
                            {steps.map((step, i) => (
                                <div key={i} className="app-step flex gap-5">
                                    <span className="font-canela text-gold text-[32px] leading-none flex-shrink-0 w-10">
                                        {step.num}
                                    </span>
                                    <div>
                                        <h4 className="font-satoshi font-bold text-deep-purple text-[18px] mb-1">{step.title}</h4>
                                        <p className="font-satoshi text-charcoal text-[15px]">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Sticky Application Card */}
                    <div className="lg:w-[42%]">
                        <div className="app-card lg:sticky lg:top-[100px] bg-deep-forest p-8 md:p-10 rounded-[4px]">
                            <span className="section-label block mb-3">NEXT COHORT</span>
                            <h3 className="font-canela text-warm-white text-[24px] md:text-[28px] mb-6">
                                September 2025 — Location TBC
                            </h3>

                            {/* Dot indicator */}
                            <div className="mb-3">
                                <div className="flex gap-2 mb-2">
                                    {Array.from({ length: totalPlaces }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-3 h-3 rounded-full ${i < filledPlaces
                                                    ? 'bg-gold'
                                                    : 'border border-stone bg-transparent'
                                                }`}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="font-satoshi text-stone text-[13px]">
                                    {filledPlaces} of {totalPlaces} places remaining.
                                </p>
                            </div>

                            <a
                                href="#"
                                className="btn-gold w-full justify-center mt-6 text-center"
                            >
                                Begin Your Application
                                <span className="arrow">→</span>
                            </a>

                            <p className="text-center mt-4">
                                <a
                                    href="#"
                                    className="font-satoshi text-light-sage text-[13px] hover:underline transition-all"
                                >
                                    Not ready yet? Join the waitlist.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
