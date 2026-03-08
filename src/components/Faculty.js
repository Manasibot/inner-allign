import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Faculty.css';

gsap.registerPlugin(ScrollTrigger);

const Faculty = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            gsap.from(".faculty-text-content > *", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="faculty-section" ref={sectionRef}>
            <div className="faculty-container">
                <div className="faculty-layout">
                    <div className="faculty-image-container" ref={imageRef}>
                        <div className="faculty-image-placeholder">
                            {/* This would be an image of the faculty member */}
                            <div className="image-overlay"></div>
                        </div>
                        <div className="image-accent-frame"></div>
                    </div>

                    <div className="faculty-text-content" ref={contentRef}>
                        <span className="faculty-subtitle">Guided By</span>
                        <h2 className="faculty-name">Dr. Serena <span className="serif-italic">Vance</span></h2>
                        <h3 className="faculty-title">Lead Facilitator & Presence Architect</h3>

                        <div className="faculty-bio">
                            <p>
                                With over two decades of experience in human behavior and executive presence, Dr. Serena Vance has dedicated her life to helping leaders align their internal clarity with their external influence.
                            </p>
                            <p>
                                Her approach combines ancient wisdom with modern psychological frameworks, creating a unique experience that transcends traditional coaching. She believes that true leadership is an "inside-out" process.
                            </p>
                        </div>

                        <div className="faculty-stats">
                            <div className="stat-item">
                                <span className="stat-value">15+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">500+</span>
                                <span className="stat-label">Women Led</span>
                            </div>
                        </div>

                        <button className="btn-secondary faculty-btn">Read Full Story</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faculty;
