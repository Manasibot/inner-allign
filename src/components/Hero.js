import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Hero = () => {

    const heroRef = useRef(null);
    const seedRef = useRef(null);
    const sproutRef = useRef(null);
    const soilRef = useRef(null);
    const leafRef = useRef(null);

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // seed falling
        tl.from(seedRef.current, {
            y: -300,
            opacity: 0,
            scale: 0.3,
            duration: 2,
            ease: "power3.in"
        })

            // soil impact
            .to(soilRef.current, {
                scaleY: 0.8,
                transformOrigin: "center",
                duration: 0.2
            })

            .to(soilRef.current, {
                scaleY: 1,
                duration: 0.4
            })

            // seed disappears
            .to(seedRef.current, {
                opacity: 0,
                scale: 0,
                duration: 0.5
            })

            // sprout drawing
            .from(sproutRef.current, {
                drawSVG: "0%",
                duration: 2,
                ease: "power1.out"
            })

            // leaves drawing
            .from(leafRef.current, {
                drawSVG: "0%",
                duration: 1.5
            });

    }, []);

    return (
        <section className="hero" ref={heroRef}>

            <svg className="hero-bg" viewBox="0 0 800 600">

                {/* soil */}
                <ellipse
                    ref={soilRef}
                    cx="400"
                    cy="480"
                    rx="250"
                    ry="60"
                    fill="#3b2a1a"
                />

                {/* seed */}
                <ellipse
                    ref={seedRef}
                    cx="400"
                    cy="150"
                    rx="10"
                    ry="14"
                    fill="#7a5a3a"
                />

                {/* stem */}
                <path
                    ref={sproutRef}
                    d="M400 480 C390 430 410 380 400 340"
                    stroke="#6ea44e"
                    strokeWidth="6"
                    fill="none"
                />

                {/* leaves */}
                <path
                    ref={leafRef}
                    d="M400 360 C440 330 460 300 420 300"
                    stroke="#6ea44e"
                    strokeWidth="5"
                    fill="none"
                />

                <path
                    ref={leafRef}
                    d="M400 360 C360 330 340 300 380 300"
                    stroke="#6ea44e"
                    strokeWidth="5"
                    fill="none"
                />

            </svg>

            <div className="hero-content">
                <h1>Clarity • Confidence • Influence</h1>
            </div>

        </section>
    );
};

export default Hero;
