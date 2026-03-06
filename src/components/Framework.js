import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Framework.css';

const Framework = () => {
    const alignRef = useRef(null);

    useEffect(() => {
        gsap.to(".align-item", {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: alignRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            }
        });
    }, []);

    return (
        <section className="section" ref={alignRef}>
            <div className="hero-content">
                <span className="subtitle">The ALIGN Framework</span>
                <h2 className="headline">Rooted in Purpose, Branching into Impact</h2>

                <div className="framework-list">
                    <div className="framework-item align-item">
                        <span className="framework-label">ROOTS</span>
                        <span className="framework-arrow">→</span>
                        <span className="framework-value">Awareness</span>
                    </div>
                    <div className="framework-item align-item">
                        <span className="framework-label">STEM</span>
                        <span className="framework-arrow">→</span>
                        <span className="framework-value">Leadership Intent</span>
                    </div>
                    <div className="framework-item align-item">
                        <span className="framework-label">BUD</span>
                        <span className="framework-arrow">→</span>
                        <span className="framework-value">Impact</span>
                    </div>
                    <div className="framework-item align-item">
                        <span className="framework-label">TRUNK</span>
                        <span className="framework-arrow">→</span>
                        <span className="framework-value">Gravitas</span>
                    </div>
                    <div className="framework-item align-item">
                        <span className="framework-label">CANOPY</span>
                        <span className="framework-arrow">→</span>
                        <span className="framework-value">Narrative</span>
                    </div>
                </div>

                <div className="animation-container framework-anim-container">
                    <p className="framework-msg">🌳 Tree slowly growing as user scrolls</p>
                </div>
            </div>
        </section>
    );
};

export default Framework;
