'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const readyItems = [
    'Leads a team, a company, or a movement and wants to do it with more clarity and less noise',
    'Has built a strong outer career but senses a misalignment between who she is publicly and who she is privately',
    'Operates across cultures and geographies and wants to understand how her presence lands in different rooms',
    'Has achieved significant milestones but struggles to articulate her own narrative with confidence',
    'Is at an inflection point — a new role, a new chapter, a next level — and wants to arrive prepared',
    'Has spent years growing others and is ready to invest in her own growth with the same rigour',
];

const notReadyItems = [
    'She is looking for surface-level confidence tips or presentation techniques',
    'She is not willing to engage deeply with psychometric assessment and peer-level feedback',
    'She expects to observe rather than participate fully',
    'She is not open to examining the beliefs and patterns that have shaped her leadership so far',
    'She wants quick fixes rather than a structural shift in how she leads and lives',
];

export default function WhoThisIsFor() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            gsap.from('.who-intro', {
                y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: '.who-intro', start: 'top 85%', once: true },
            });

            gsap.from('.who-card-left', {
                x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: '.who-card-left', start: 'top 85%', once: true },
            });

            gsap.from('.who-card-right', {
                x: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: '.who-card-right', start: 'top 85%', once: true },
            });

            gsap.utils.toArray<HTMLElement>('.who-item').forEach((el, i) => {
                gsap.from(el, {
                    y: 20, opacity: 0, duration: 0.6, ease: 'power3.out',
                    delay: i * 0.08,
                    scrollTrigger: { trigger: el.closest('.who-card-left, .who-card-right'), start: 'top 75%', once: true },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-warm-white py-[100px] md:py-[170px]"
            aria-label="Who this experience is for"
        >
            <div className="max-w-content mx-auto px-6 md:px-12">
                <span className="section-label block mb-4 text-center">THE PARTICIPANTS</span>
                <h2 className="text-h1 text-deep-purple text-center mb-6">The Women of This Room</h2>
                <p className="who-intro text-body-lg text-charcoal text-center max-w-[620px] mx-auto mb-16">
                    This experience is designed for a specific kind of woman. She is accomplished. She is international. She is, by
                    most measures, already successful. And yet — she knows there is a version of herself that she has not yet fully
                    inhabited.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Ready Card */}
                    <div className="who-card-left bg-pale-sage border border-stone p-8 md:p-12">
                        <h3 className="font-canela text-deep-purple text-[28px] md:text-[32px] mb-8">
                            She Is Ready If She…
                        </h3>
                        <ul className="space-y-5">
                            {readyItems.map((item, i) => (
                                <li key={i} className="who-item flex items-start gap-3">
                                    <span className="text-gold text-[18px] mt-0.5 flex-shrink-0">✓</span>
                                    <span className="text-body text-charcoal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not Ready Card */}
                    <div className="who-card-right bg-light-purple border border-stone p-8 md:p-12">
                        <h3 className="font-canela text-charcoal text-[28px] md:text-[32px] mb-8">
                            She Is Not Yet Ready If…
                        </h3>
                        <ul className="space-y-5">
                            {notReadyItems.map((item, i) => (
                                <li key={i} className="who-item flex items-start gap-3">
                                    <span className="text-terracotta text-[18px] mt-0.5 flex-shrink-0">–</span>
                                    <span className="text-body text-charcoal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
