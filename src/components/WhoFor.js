import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './WhoFor.css';

const WhoFor = () => {
    const whoRef = useRef(null);

    useEffect(() => {
        gsap.to(".who-item-anim", {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: whoRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <section className="section who-section" ref={whoRef}>
            <div className="hero-content">
                <h2 className="headline">Who This Is For</h2>

                <div className="who-grid">
                    <div className="who-item who-item-anim">
                        <span className="check-icon">✔</span>
                        <span>Leaders building teams</span>
                    </div>
                    <div className="who-item who-item-anim">
                        <span className="check-icon">✔</span>
                        <span>Women entering their next chapter</span>
                    </div>
                    <div className="who-item who-item-anim">
                        <span className="check-icon">✔</span>
                        <span>Global professionals</span>
                    </div>
                    <div className="who-item who-item-anim">
                        <span className="check-icon">✔</span>
                        <span>Women ready for deeper clarity</span>
                    </div>
                    <div className="who-item who-item-anim">
                        <span className="check-icon">✔</span>
                        <span>High achievers seeking alignment</span>
                    </div>
                </div>

                <div className="leaf-msg-container">
                    <p className="leaf-msg">🌸 Small leaves appearing</p>
                </div>
            </div>
        </section>
    );
};

export default WhoFor;
