import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhoFor.css';

gsap.registerPlugin(ScrollTrigger);

const WhoFor = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightItemsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(leftRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0, opacity: 1, duration: 1.5, ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            }
        );

        gsap.fromTo(rightItemsRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                }
            }
        );
    }, []);

    return (
        <section className="whofor-section" ref={sectionRef}>
            <div className="whofor-container">
                <div className="whofor-left" ref={leftRef}>
                    <h2 className="whofor-subtitle">Curated For</h2>
                    <h3 className="whofor-headline">
                        Women entering their <br />
                        <span className="serif-italic gold-text">next chapter.</span>
                    </h3>
                </div>

                <div className="whofor-right">
                    {[
                        { tag: "01", text: "Leaders building visionary teams" },
                        { tag: "02", text: "Global professionals seeking exact clarity" },
                        { tag: "03", text: "High achievers requiring inner alignment" },
                        { tag: "04", text: "Changemakers ready for the next level" }
                    ].map((item, index) => (
                        <div
                            className="whofor-item"
                            key={index}
                            ref={el => rightItemsRef.current[index] = el}
                        >
                            <div className="whofor-tag">{item.tag}</div>
                            <span>{item.text}</span>
                            <div className="whofor-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoFor;
