import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cohort.css';

const Cohort = () => {
    const cohortRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(".mycelium-path",
            { strokeDasharray: 500, strokeDashoffset: 500 },
            {
                strokeDashoffset: 0,
                opacity: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: cohortRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            }
        );
    }, []);

    return (
        <section className="section" ref={cohortRef}>
            <div className="hero-content">
                <h2 className="headline">The Cohort</h2>
                <div className="cohort-box">
                    <p className="description cohort-description">
                        Like trees in a forest, powerful women grow through connection. <br />
                        <br />
                        Your cohort becomes the invisible network that supports your growth.
                    </p>

                    <div className="mycelium-container">
                        <svg viewBox="0 0 400 100" width="100%" height="100%">
                            <path className="mycelium-path" d="M50,50 Q100,20 150,50 T250,50 T350,50" fill="none" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.3" />
                            <path className="mycelium-path" d="M50,60 Q120,80 180,40 T300,60" fill="none" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.3" />
                            <path className="mycelium-path" d="M100,20 Q150,50 200,80" fill="none" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.3" />
                        </svg>
                        <p className="cohort-label">✨ Roots connecting underground</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cohort;
