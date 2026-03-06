import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Forest.css';

const Forest = () => {
    const forestRef = useRef(null);
    const rootsRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(rootsRef.current,
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            {
                strokeDashoffset: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: forestRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            }
        );
    }, []);

    return (
        <section className="section forest-section" ref={forestRef}>
            <div className="hero-content">
                <h2 className="headline forest-headline">
                    The most powerful trees in the world did not grow by accident.
                </h2>
                <p className="description forest-desc">
                    Beneath every great leader lies a root system of values, <br />
                    beliefs, and experiences shaping how she grows.
                </p>

                <div className="animation-container forest-anim-container">
                    <svg viewBox="0 0 400 100" width="100%" height="100%">
                        <path
                            ref={rootsRef}
                            d="M200,0 Q210,50 250,60 M200,0 Q190,40 150,70 M200,0 Q205,30 220,80 M200,0 Q195,60 180,90"
                            fill="none"
                            stroke="var(--accent-gold)"
                            strokeWidth="2"
                        />
                    </svg>
                    <p className="root-label">🌿 Roots spreading underground</p>
                </div>
            </div>
        </section>
    );
};

export default Forest;
