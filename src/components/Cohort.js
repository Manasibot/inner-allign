import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cohort.css';

gsap.registerPlugin(ScrollTrigger);

const Cohort = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const boxRef = useRef(null);
    const pathsRef = useRef([]);
    const dotsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Fade up container
            gsap.from(boxRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            });

            // Animated gold mycelium paths
            pathsRef.current.forEach((path, index) => {
                const length = path.getTotalLength();
                gsap.fromTo(path,
                    {
                        strokeDasharray: length,
                        strokeDashoffset: length,
                        opacity: 0
                    },
                    {
                        strokeDashoffset: 0,
                        opacity: 0.8,
                        duration: 3,
                        delay: index * 0.4,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%",
                            end: "bottom 30%",
                            scrub: 1,
                        },
                        ease: "power2.inOut"
                    }
                );
            });

            // Pulsating luxury nodes
            dotsRef.current.forEach((dot, index) => {
                gsap.to(dot, {
                    scale: 1.4,
                    opacity: 1,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.3
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="cohort-section" ref={sectionRef}>
            <div className="cohort-container">

                <div className="cohort-card" ref={boxRef}>
                    <div className="card-content">

                        <div className="cohort-text" ref={textRef}>
                            <h2 className="cohort-headline">
                                An unseen network of <br />
                                <span className="gold-text">powerful women.</span>
                            </h2>
                            <p className="cohort-description">
                                A curated cohort. Unmatched support. Shared wisdom shaping the global landscape.
                            </p>
                        </div>

                        <div className="luxury-network-visual">
                            <svg
                                viewBox="0 0 600 200"
                                width="100%"
                                height="100%"
                                className="network-svg"
                            >
                                {/* Gold Glow Filter */}
                                <defs>
                                    <filter id="gold-glow">
                                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Abstract Network Paths */}
                                <path
                                    ref={el => pathsRef.current[0] = el}
                                    d="M50,100 C150,50 250,150 400,100 S550,150 600,80"
                                    fill="none"
                                    stroke="var(--accent-gold)"
                                    strokeWidth="1.5"
                                    filter="url(#gold-glow)"
                                />

                                <path
                                    ref={el => pathsRef.current[1] = el}
                                    d="M100,150 C200,80 300,180 450,120 S550,80 600,140"
                                    fill="none"
                                    stroke="var(--accent-gold-light)"
                                    strokeWidth="1"
                                    opacity="0.6"
                                />

                                {/* Connection Nodes */}
                                {[
                                    { cx: 50, cy: 100, r: 4 },
                                    { cx: 150, cy: 50, r: 3 },
                                    { cx: 250, cy: 150, r: 5 },
                                    { cx: 400, cy: 100, r: 4 },
                                    { cx: 600, cy: 80, r: 5 },
                                    { cx: 100, cy: 150, r: 3 },
                                    { cx: 300, cy: 180, r: 4 },
                                    { cx: 450, cy: 120, r: 3 }
                                ].map((dot, i) => (
                                    <circle
                                        key={i}
                                        ref={el => dotsRef.current[i] = el}
                                        cx={dot.cx}
                                        cy={dot.cy}
                                        r={dot.r}
                                        fill="var(--accent-gold-light)"
                                        filter="url(#gold-glow)"
                                    />
                                ))}
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cohort;