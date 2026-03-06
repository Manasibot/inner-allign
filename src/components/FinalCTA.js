import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './FinalCTA.css';

const FinalCTA = () => {
    const finalRef = useRef(null);

    useEffect(() => {
        gsap.to(".canopy-anim", {
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: finalRef.current,
                start: "top 60%",
            }
        });
    }, []);

    return (
        <section className="section final-cta-section" ref={finalRef}>
            <div className="hero-content">
                <h2 className="headline">Your growth season starts here.</h2>

                <div className="cta-group">
                    <button className="btn-primary">Apply Now</button>
                    <button className="btn-secondary">Download Full Program</button>
                </div>

                <div className="final-tree-container">
                    <svg viewBox="0 0 200 200" width="100%" height="100%">
                        <rect x="95" y="100" width="10" height="60" fill="#3d2b1f" />
                        <circle className="tree-canopy canopy-anim" cx="100" cy="80" r="50" fill="#1a2e1a" />
                        <circle className="tree-canopy canopy-anim" cx="70" cy="90" r="40" fill="#2d452d" />
                        <circle className="tree-canopy canopy-anim" cx="130" cy="90" r="40" fill="#2d452d" />
                        <circle className="tree-canopy canopy-anim" cx="100" cy="60" r="35" fill="#3a5a3a" />
                    </svg>
                    <p className="final-label">🌳 Tree fully grown with canopy</p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
