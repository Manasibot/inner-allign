'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const ruleRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const treeRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            // Tree SVG draw
            const paths = treeRef.current?.querySelectorAll('.tree-path');
            if (paths) {
                paths.forEach((path) => {
                    const el = path as SVGPathElement;
                    const length = el.getTotalLength();
                    gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
                    gsap.to(el, { strokeDashoffset: 0, duration: 3.5, ease: 'power2.out', delay: 0 });
                });
            }

            // Text sequence
            gsap.from(labelRef.current, { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.6 });
            gsap.from(headingRef.current, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.75 });
            gsap.from(taglineRef.current, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.9 });
            gsap.fromTo(ruleRef.current, { width: 0 }, { width: 80, duration: 0.6, ease: 'power3.out', delay: 1.0 });
            gsap.from(bodyRef.current, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 1.1 });
            gsap.from(ctaRef.current, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 1.3 });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center bg-deep-forest overflow-hidden"
            aria-label="Hero section"
        >
            {/* Bark texture overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden="true">
                <pattern id="bark" width="100" height="8" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="4" x2="100" y2="4" stroke="#FAF8F5" strokeWidth="0.5" />
                    <line x1="20" y1="2" x2="80" y2="2" stroke="#FAF8F5" strokeWidth="0.3" />
                    <line x1="10" y1="6" x2="90" y2="6.5" stroke="#FAF8F5" strokeWidth="0.4" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#bark)" />
            </svg>

            <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 py-24 md:py-0 flex flex-col md:flex-row items-center">
                {/* Left Column — Text */}
                <div className="w-full md:w-[55%] relative z-10">
                    <span ref={labelRef} className="section-label block mb-6">
                        AN ELITE LEADERSHIP EXPERIENCE FOR WOMEN
                    </span>

                    <h1 ref={headingRef} className="text-display text-warm-white mb-6">
                        The Inner Alignment<br />Experience
                    </h1>

                    <p ref={taglineRef} className="font-cormorant italic text-light-sage text-[24px] md:text-[28px] mb-8">
                        Clarity · Confidence · Influence
                    </p>

                    <div
                        ref={ruleRef}
                        className="h-[1px] bg-gold mb-13"
                        style={{ width: '100%' }}
                    />



                    <p ref={bodyRef} className="text-body-lg text-stone max-w-[520px] mb-10">
                        This is not a program for women who are broken. This is a program for women who are already
                        powerful — and who sense, with absolute clarity, that there is more.
                    </p>

                    <div ref={ctaRef}>
                        <a href="#apply" className="btn-gold">
                            Begin Your Application
                            <span className="arrow">→</span>
                        </a>
                    </div>
                </div>

                {/* Right Column — Botanical Tree SVG */}
                <div className="hidden md:block w-[45%] relative">
                    <svg
                        ref={treeRef}
                        viewBox="0 0 500 800"
                        fill="none"
                        className="w-full h-auto max-h-[90vh] ml-auto"
                        role="img"
                        aria-label="Botanical illustration of an ancient oak tree"
                    >
                        {/* Roots */}
                        <path className="tree-path" d="M250 700 C200 720 140 730 80 750" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                        <path className="tree-path" d="M250 700 C180 710 150 740 100 780" stroke="#FAF8F5" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
                        <path className="tree-path" d="M250 700 C300 720 360 730 420 750" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                        <path className="tree-path" d="M250 700 C320 710 350 740 400 780" stroke="#FAF8F5" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
                        <path className="tree-path" d="M250 700 C240 730 220 760 190 800" stroke="#FAF8F5" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
                        <path className="tree-path" d="M250 700 C260 730 280 760 310 800" stroke="#FAF8F5" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />

                        {/* Trunk */}
                        <path className="tree-path" d="M250 700 C248 600 245 500 250 400 C252 350 248 300 250 250" stroke="#FAF8F5" strokeWidth="3" strokeOpacity="0.6" strokeLinecap="round" />
                        <path className="tree-path" d="M240 680 C238 580 235 480 238 380 C240 330 236 280 238 240" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
                        <path className="tree-path" d="M260 680 C262 580 265 480 262 380 C260 330 264 280 262 240" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />

                        {/* Main branches */}
                        <path className="tree-path" d="M250 350 C200 300 150 280 100 250" stroke="#FAF8F5" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
                        <path className="tree-path" d="M250 350 C300 300 350 280 400 250" stroke="#FAF8F5" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
                        <path className="tree-path" d="M250 300 C220 260 180 230 140 180" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
                        <path className="tree-path" d="M250 300 C280 260 320 230 360 180" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />

                        {/* Upper branches */}
                        <path className="tree-path" d="M250 280 C230 220 200 160 170 100" stroke="#FAF8F5" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
                        <path className="tree-path" d="M250 280 C270 220 300 160 330 100" stroke="#FAF8F5" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
                        <path className="tree-path" d="M250 260 C250 200 250 140 250 60" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />

                        {/* Canopy detail branches */}
                        <path className="tree-path" d="M100 250 C80 230 60 200 40 170" stroke="#FAF8F5" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
                        <path className="tree-path" d="M400 250 C420 230 440 200 460 170" stroke="#FAF8F5" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
                        <path className="tree-path" d="M140 180 C120 150 100 120 80 80" stroke="#FAF8F5" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
                        <path className="tree-path" d="M360 180 C380 150 400 120 420 80" stroke="#FAF8F5" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
                        <path className="tree-path" d="M170 100 C150 60 130 30 110 0" stroke="#FAF8F5" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" />
                        <path className="tree-path" d="M330 100 C350 60 370 30 390 0" stroke="#FAF8F5" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" />

                        {/* Fine detail twigs */}
                        <path className="tree-path" d="M200 300 C180 290 160 260 130 240" stroke="#FAF8F5" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" />
                        <path className="tree-path" d="M300 300 C320 290 340 260 370 240" stroke="#FAF8F5" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" />
                        <path className="tree-path" d="M230 260 C210 230 190 200 160 150" stroke="#FAF8F5" strokeWidth="0.6" strokeOpacity="0.2" strokeLinecap="round" />
                        <path className="tree-path" d="M270 260 C290 230 310 200 340 150" stroke="#FAF8F5" strokeWidth="0.6" strokeOpacity="0.2" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Mobile tree background */}
                <svg
                    viewBox="0 0 500 800"
                    fill="none"
                    className="absolute inset-0 w-full h-full md:hidden opacity-20 pointer-events-none"
                    role="img"
                    aria-label="Botanical tree background"
                >
                    <path d="M250 700 C200 720 140 730 80 750" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.6" />
                    <path d="M250 700 C300 720 360 730 420 750" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.6" />
                    <path d="M250 700 C248 600 245 500 250 400 C252 350 248 300 250 250" stroke="#FAF8F5" strokeWidth="3" strokeOpacity="0.6" />
                    <path d="M250 350 C200 300 150 280 100 250" stroke="#FAF8F5" strokeWidth="2" strokeOpacity="0.6" />
                    <path d="M250 350 C300 300 350 280 400 250" stroke="#FAF8F5" strokeWidth="2" strokeOpacity="0.6" />
                    <path d="M250 300 C220 260 180 230 140 180" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" />
                    <path d="M250 300 C280 260 320 230 360 180" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" />
                    <path d="M250 280 C250 200 250 140 250 60" stroke="#FAF8F5" strokeWidth="1.5" strokeOpacity="0.5" />
                </svg>
            </div>
        </section>
    );
}
