import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FinalCTA.css';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(elementsRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section className="final-cta-section" ref={containerRef}>
            {/* Background Gold Accent */}
            <div className="cta-glow"></div>

            <div className="final-container">
                <h2 className="final-headline" ref={el => elementsRef.current[0] = el}>
                    Step into your <span className="serif-italic gold-text">highest self.</span>
                </h2>

                <p className="final-description" ref={el => elementsRef.current[1] = el}>
                    The Inner Alignment Experience is strictly limited to 12 women per cohort to ensure deep, transformative connection.
                </p>

                <div className="cta-group" ref={el => elementsRef.current[2] = el}>
                    <button className="btn-primary">Apply for Consideration</button>
                </div>

                <div className="cta-secondary-link" ref={el => elementsRef.current[3] = el}>
                    <button className="btn-text">Download the Private Brochure</button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
