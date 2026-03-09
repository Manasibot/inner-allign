'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
    'Learning Solutions',
    'NLP Practitioner',
    'Psychometric Analyst',
    'Behavioural Trainer',
    'Image Consultant',
    'Talent Measurement Assessor',
    'Experience Design Consultant',
];

const bottomStats = [
    { value: '--', label: 'Senior Leaders Coached', suffix: '+' },
    { value: '--', label: 'Countries', suffix: '' },
    { value: '--', label: 'Years Practice', suffix: '+' },
    { value: '4', label: 'Premium Instruments', suffix: '' },
];

export default function Faculty() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            // Portrait slide in
            gsap.from('.faculty-portrait', {
                x: -40,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.faculty-portrait', start: 'top 80%', once: true },
            });

            // Right column stagger
            gsap.utils.toArray<HTMLElement>('.faculty-item').forEach((el, i) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    delay: i * 0.12,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
                });
            });

            // Philosophy quote extra delay
            gsap.from('.faculty-philosophy', {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: 0.4,
                scrollTrigger: { trigger: '.faculty-philosophy', start: 'top 85%', once: true },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-warm-white py-[80px] md:py-[120px]"
            aria-label="The Faculty"
        >
            <div className="max-w-content mx-auto px-6 md:px-12">
                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-0">
                    {/* Left — Portrait */}
                    <div className="faculty-portrait md:w-[42%] md:pr-10 md:border-r-2 border-divider">
                        {/* Portrait placeholder */}
                        <div
                            className="relative w-full max-w-[480px] mx-auto md:mx-0 aspect-[3/4] bg-pale-sage overflow-hidden"
                        >
                            <img
                                src="/Ramona Rodrigues.png"
                                alt="Ramona Faria Rodrigues"
                                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Overlay for warm tone */}
                            <div
                                className="absolute inset-0 bg-pale-sage/10 pointer-events-none"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </div>
                        {/* <!-- Replace with editorial portrait: natural light, 3:4 ratio, non-performative --> */}
                        <div className="mt-4 max-w-[480px] mx-auto md:mx-0">
                            <p className="font-canela text-deep-purple text-[22px]">Ramona Faria Rodrigues</p>
                            <p className="font-satoshi text-gray text-[13px] tracking-[0.04em]">
                                Certified Psychometric Analyst · Behavioural Trainer · NLP Practitioner
                            </p>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="md:w-[58%] md:pl-10 lg:pl-16">
                        <span className="faculty-item section-label block mb-3">THE FACULTY</span>
                        <p className="faculty-item font-satoshi text-sage text-[14px] mb-2">
                            The Botanist Behind the Framework
                        </p>
                        <h2 className="faculty-item font-canela text-deep-purple text-[44px] md:text-[64px] tracking-tight mb-4">
                            Ramona <br />
                            Faria Rodrigues
                        </h2>

                        {/* Gold Credential Bar */}
                        <div className="faculty-item bg-light-gold px-5 py-3 mb-8">
                            <span className="font-satoshi font-bold text-gold text-[11px] md:text-[12px] uppercase tracking-[0.1em]">
                                Certified Psychometric Analyst · NLP Practitioner · Behavioural Trainer
                            </span>
                        </div>

                        {/* Philosophy Quote */}
                        <div className="faculty-philosophy border-l-[3px] border-l-gold pl-6 mb-8">
                            <p className="font-cormorant italic text-deep-purple text-[16px] md:text-[18px] leading-relaxed">
                                &ldquo;I do not believe in transformational experiences that leave women inspired but unequipped.
                                Inspiration without architecture produces nothing that lasts. Every element of The Inner Alignment
                                Experience is designed the way I design a root system: precisely, with the end structure in mind, in full
                                knowledge of the climate the tree will eventually need to survive.&rdquo;
                            </p>
                        </div>

                        {/* Career Paragraph */}
                        <p className="faculty-item font-satoshi text-charcoal text-[15px] md:text-[16px] leading-[1.7] mb-6">
                            Ramona Faria Rodrigues is a Learning & Development professional and an Experience Design Consultant who excels in creating Learning Solutions, Content and Training Delivery. She is a Certified Psychometric Analyst, a Behavioural Trainer, an NLP Practitioner, a Certified Talent Measurement Assessor, and an Image Consultant.
                        </p>

                        {/* Methodology Note */}
                        <div className="faculty-item border-t border-divider pt-6 mb-8">
                            <p className="font-satoshi text-charcoal text-[15px] md:text-[16px] leading-[1.7]">
                                The ALIGN Framework™ was developed over [N] years of working with high-performing women at professional
                                inflection points. It is not a coaching model. It is a precision instrument — designed to map what is
                                already there, not to install what is not.
                            </p>
                        </div>

                        {/* Credential Tags */}
                        <div className="faculty-item flex flex-wrap gap-2">
                            {credentials.map((cred, i) => (
                                <span key={i} className="pill-tag">{cred}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Numbers Strip */}
            <div className="bg-pale-sage border-t border-b border-stone py-10 mt-20">
                <div className="max-w-content mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {bottomStats.map((stat, i) => (
                            <div
                                key={i}
                                className={`text-center py-2 ${i < bottomStats.length - 1 ? 'md:border-r border-stone' : ''
                                    }`}
                            >
                                <span className="font-canela text-deep-purple text-[36px] md:text-[44px] leading-none block">
                                    {stat.value}{stat.suffix}
                                </span>
                                <span className="text-label text-gray block mt-2 text-[11px] md:text-[12px] tracking-[0.12em]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
