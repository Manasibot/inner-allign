import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Experience.css';

const Experience = () => {
    const expRef = useRef(null);

    useEffect(() => {
        gsap.to(".exp-item", {
            opacity: 1,
            x: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: expRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            }
        });
    }, []);

    return (
        <section className="section experience-section" ref={expRef}>
            <div className="hero-content">
                <span className="subtitle">The Experience</span>
                <h2 className="headline">3 Days of Transformation</h2>

                <div className="timeline">
                    <div className="timeline-day exp-item">
                        <span className="day-number">DAY 1</span>
                        <h3 className="day-title">Know Yourself</h3>
                    </div>
                    <div className="timeline-day exp-item">
                        <span className="day-number">DAY 2</span>
                        <h3 className="day-title">Show Up Powerfully</h3>
                    </div>
                    <div className="timeline-day exp-item">
                        <span className="day-number">DAY 3</span>
                        <h3 className="day-title">Own Your Story</h3>
                    </div>
                </div>

                <div className="tree-msg">
                    <p>🌿 Tree growing taller</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
