import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 80, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            }
        );
    }, []);

    return (
        <section className="exp-section" ref={sectionRef}>
            <div className="exp-container">

                <div className="exp-grid">
                    {[
                        { tag: "01", title: "Deeper Understanding", desc: "Of your personal leadership style." },
                        { tag: "02", title: "Greater Clarity", desc: "About your future direction." },
                        { tag: "03", title: "Stronger Confidence", desc: "In your presence and voice." }
                    ].map((item, index) => (
                        <div className="exp-card" key={index} ref={el => cardsRef.current[index] = el}>
                            <div className="exp-card-number">{item.tag}</div>
                            <div className="exp-card-content">
                                <h3 className="exp-card-title">{item.title}</h3>
                                <p className="exp-card-desc">{item.desc}</p>
                                <div className="exp-card-line"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
