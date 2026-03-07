import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Forest.css';

gsap.registerPlugin(ScrollTrigger);

const Forest = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const pRef = useRef(null);
    const linesRef = useRef([]);

    useEffect(() => {
        // Parallax subtle text reveal
        gsap.fromTo(textRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 2, ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );

        gsap.fromTo(pRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                }
            }
        );

        // Elegant gold line drawing
        linesRef.current.forEach((line) => {
            const length = line.getTotalLength();
            gsap.fromTo(line,
                { strokeDasharray: length, strokeDashoffset: length },
                {
                    strokeDashoffset: 0,
                    duration: 3,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 40%",
                        scrub: 1,
                    }
                }
            );
        });

    }, []);

    return (
        <section className="forest-section" ref={containerRef}>

            {/* Absolute minimalist abstract gold lines */}
            <div className="forest-abstract-bg">
                <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="luxury-lines">
                    <path ref={el => linesRef.current[0] = el}
                        d="M0,100 C200,300 400,100 600,400 S800,200 1000,500"
                        fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4"
                    />
                    <path ref={el => linesRef.current[1] = el}
                        d="M0,500 C300,200 500,600 700,100 S900,400 1000,100"
                        fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" opacity="0.2"
                    />
                    <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8F6B29" />
                            <stop offset="50%" stopColor="#F4E3A6" />
                            <stop offset="100%" stopColor="#CBA153" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="forest-content">
                <h2 className="forest-headline" ref={textRef}>
                    True growth begins <br />
                    <span className="serif-italic gold-text">beneath the surface.</span>
                </h2>
                <div className="forest-text" ref={pRef}>
                    <p>
                        Before a tree rises tall, its roots draw nourishment from the soil around it. Leadership follows the same pattern. We help women understand their foundations, strengthen their direction, and grow into a presence that influences the world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Forest;
