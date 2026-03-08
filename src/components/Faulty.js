import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Faulty.css';

gsap.registerPlugin(ScrollTrigger);

const faultyData = [
  {
    id: 1,
    title: "Disconnected Breath",
    description: "Living in shallow, anxious rhythms that never reach the core, leaving you depleted and reactive.",
    tag: "Energy"
  },
  {
    id: 2,
    title: "Racing Mind",
    description: "A constant internal noise that drowns out intuition, making clarity an impossible luxury.",
    tag: "Mental"
  },
  {
    id: 3,
    title: "Emotional Suppression",
    description: "Building walls where there should be bridges, leading to a profound sense of isolation and internal friction.",
    tag: "Social"
  },
  {
    id: 4,
    title: "Physical Tension",
    description: "Shoulders carrying the weight of unsaid words, creating a barrier between your presence and your power.",
    tag: "Physical"
  }
];

const Faulty = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faulty-header", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="faulty-section" ref={sectionRef}>
      <div className="faulty-container">
        <div className="faulty-header">
          <span className="faulty-subtitle">The Cost of Misalignment</span>
          <h2 className="faulty-title">Recognizing the <span className="serif-italic">Faulty Patterns</span></h2>
          <p className="faulty-intro">
            Before we can align, we must identify where the friction lies. These common distortions prevent you from accessing your true influence.
          </p>
        </div>

        <div className="faulty-grid">
          {faultyData.map((item, index) => (
            <div 
              key={item.id} 
              className="faulty-card"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="card-accent"></div>
              <span className="card-tag">{item.tag}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faulty;
