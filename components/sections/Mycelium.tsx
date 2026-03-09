'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Seeded pseudo-random for deterministic output (avoids hydration mismatch)
function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Generate mycelium network nodes deterministically
const myceliumNodes: { x: number; y: number; r: number }[] = [];
for (let i = 0; i < 40; i++) {
    myceliumNodes.push({
        x: seededRandom(i * 3 + 1) * 100,
        y: seededRandom(i * 3 + 2) * 100,
        r: 0.4 + seededRandom(i * 3 + 3) * 0.3,
    });
}

// Pre-compute connections deterministically
const myceliumConnections: { x1: number; y1: number; x2: number; y2: number; cx: number; cy: number }[] = [];
for (let i = 0; i < myceliumNodes.length; i++) {
    for (let j = i + 1; j < myceliumNodes.length; j++) {
        const dx = myceliumNodes[i].x - myceliumNodes[j].x;
        const dy = myceliumNodes[i].y - myceliumNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 25) {
            myceliumConnections.push({
                x1: myceliumNodes[i].x,
                y1: myceliumNodes[i].y,
                x2: myceliumNodes[j].x,
                y2: myceliumNodes[j].y,
                cx: (myceliumNodes[i].x + myceliumNodes[j].x) / 2 + (seededRandom(i * 100 + j) - 0.5) * 5,
                cy: (myceliumNodes[i].y + myceliumNodes[j].y) / 2 + (seededRandom(j * 100 + i) - 0.5) * 5,
            });
        }
    }
}

export default function Mycelium() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = gsap.context(() => {
            // Pulse animation on nodes
            gsap.utils.toArray<HTMLElement>('.mycelium-node').forEach((el, i) => {
                gsap.to(el, {
                    scale: 1.04,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: i * 0.1,
                });
            });

            // Thread opacity oscillation
            gsap.utils.toArray<HTMLElement>('.mycelium-thread').forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0.08 },
                    {
                        opacity: 0.12,
                        duration: 4,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        delay: i * 0.15,
                    }
                );
            });

            // Text fade in
            gsap.utils.toArray<HTMLElement>('.myc-text').forEach((el, i) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    delay: i * 0.12,
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-deep-forest py-[100px] md:py-[140px] relative overflow-hidden"
            aria-label="The Mycelium network"
        >
            {/* Mycelium background SVG */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {myceliumConnections.map((c, i) => (
                    <path
                        key={`t-${i}`}
                        className="mycelium-thread"
                        d={`M${c.x1} ${c.y1} Q${c.cx} ${c.cy} ${c.x2} ${c.y2}`}
                        stroke="#FAF8F5"
                        strokeWidth="0.15"
                        fill="none"
                    />
                ))}
                {myceliumNodes.map((n, i) => (
                    <circle
                        key={`n-${i}`}
                        className="mycelium-node"
                        cx={n.x}
                        cy={n.y}
                        r={n.r}
                        fill="#FAF8F5"
                    />
                ))}
            </svg>

            <div className="relative z-10 max-w-mid mx-auto px-6 md:px-12">
                <span className="myc-text section-label block mb-4">THE INVISIBLE NETWORK</span>
                <h2 className="myc-text font-canela text-warm-white text-[52px] md:text-[80px] leading-none tracking-tight mb-10">
                    No Tree Grows Alone.
                </h2>

                <p className="myc-text text-body-lg text-stone mb-8">
                    Modern forest science has revealed one of nature&apos;s most extraordinary discoveries: trees do not grow alone.
                    Beneath every ancient forest runs an invisible web of fungal networks — the mycelium — through which trees share
                    nutrients, send chemical signals, and support each other&apos;s survival during periods of stress.
                </p>

                <p className="myc-text text-body-lg text-stone mb-14">
                    The women in this room are not an audience. They are nodes in a rare, high-calibre ecosystem that forms once and
                    lasts a lifetime. The most transformative moments will not come from the facilitator — they will come from the
                    structured peer intelligence and the unguarded exchanges that happen when equally accomplished women are finally
                    given permission to be fully honest with each other.
                </p>

                {/* Stats */}
                <div className="myc-text grid grid-cols-3 gap-8 mb-14">
                    {[
                        { val: '14', label: 'Women Maximum' },
                        { val: 'Lifelong', label: 'Alumni Network' },
                        { val: '90-Day', label: 'Active Community' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <span className="font-canela text-warm-white text-[36px] md:text-[52px] leading-none block">
                                {stat.val}
                            </span>
                            <span className="text-label text-sage block mt-2 text-[11px] md:text-[12px]">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <p className="myc-text font-cormorant italic text-light-sage text-[20px] md:text-[24px] leading-relaxed">
                    The most important question is not what you will learn. It is who you will learn it with.
                </p>
            </div>
        </section>
    );
}
