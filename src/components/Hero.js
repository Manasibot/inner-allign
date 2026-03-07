import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import "./Hero.css";

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const headlineRef = useRef(null);
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    // Split text for individual letter animations
    const headlineSplit = new SplitText(headlineRef.current, {
      type: "chars",
      charsClass: "headline-char"
    });
    const titleSplit = new SplitText(titleRef.current, {
      type: "chars",
      charsClass: "title-char"
    });
    const subtitleSplit = new SplitText(subtitleRef.current, {
      type: "chars",
      charsClass: "subtitle-char"
    });

    const chars = headlineSplit.chars;
    const titleChars = titleSplit.chars;
    const subtitleChars = subtitleSplit.chars;

    // Set initial positions - all elements start BELOW the view
    gsap.set(titleChars, {
      y: 200,  // Start far below
      opacity: 0,
      rotationX: -45,
      transformOrigin: "50% 50% -30px"
    });

    gsap.set(chars, {
      y: 300,  // Start far below
      opacity: 0,
      rotationX: -90,
      transformOrigin: "50% 50% -50px"
    });

    gsap.set(subtitleChars, {
      y: 150,  // Start below
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)"
    });

    gsap.set(quoteRef.current, {
      y: 100,  // Start below
      opacity: 0
    });

    gsap.set(gradientRef.current, {
      opacity: 0,
      scale: 0.8
    });

    // Main timeline - elements rise from below and align
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: () => {
        // Clean up SplitText instances
        headlineSplit.revert();
        titleSplit.revert();
        subtitleSplit.revert();
      }
    });

    // Animate title letters - rising from below and aligning
    tl.to(titleChars, {
      y: 0,  // Rise to final position
      opacity: 1,
      rotationX: 0,
      duration: 2,
      stagger: {
        amount: 1.2,
        from: "start",
        grid: "auto",
        ease: "power3.out"
      }
    })
      // Animate headline letters - rising from below with more drama
      .to(chars, {
        y: 0,  // Rise to final position
        opacity: 1,
        rotationX: 0,
        duration: 2.2,
        stagger: {
          amount: 1.5,
          from: "edges",
          grid: "auto",
          ease: "back.out(1.5)"
        }
      }, "-=0.8")
      // Animate subtitle - rising and aligning
      .to(subtitleChars, {
        y: 0,  // Rise to final position
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.8,
        stagger: {
          amount: 1,
          from: "center",
          grid: "auto",
          ease: "power3.out"
        }
      }, "-=1")
      // Animate quote - rising last
      .to(quoteRef.current, {
        y: 0,  // Rise to final position
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.8")
      // Animate gradient glow
      .to(gradientRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2.5
      }, "-=2");

    // Particle Animation on Canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Particle class with rising animation
    class Particle {
      constructor(index) {
        this.index = index;
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200; // Start below canvas
        this.targetY = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = 0.5 + Math.random() * 1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.riseProgress = 0;
      }

      update() {
        // Rise from bottom to top
        if (this.y > this.targetY) {
          this.y -= this.speed;
        } else {
          // Reset to bottom when reaching top
          if (Math.random() < 0.005) {
            this.y = canvas.height + Math.random() * 200;
            this.targetY = Math.random() * canvas.height;
          }
        }

        // Add slight horizontal movement
        this.x += Math.sin(this.y * 0.01) * 0.1;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(i));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      headlineSplit.revert();
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, []);

  return (
    <section className="hero" ref={containerRef}>
      {/* Canvas for particle animation */}
      <canvas ref={canvasRef} className="hero-canvas"></canvas>

      {/* Animated gradient overlays */}
      <div className="hero-gradient-layer"></div>
      <div className="hero-gradient-layer-2"></div>

      {/* Luxury Gradient Glow behind text */}
      <div className="hero-glow" ref={gradientRef}></div>

      <div className="hero-content">
        <h2 className="hero-title" ref={titleRef}>
          THE INNER ALIGNMENT
        </h2>

        <h1 className="hero-headline" ref={headlineRef}>
          EXPERIENCE
        </h1>

        <h3 className="hero-subtitle" ref={subtitleRef}>
          Clarity  •  Confidence  •  Influence
        </h3>

        <div className="hero-quote" ref={quoteRef}>
          <p>
            “When clarity within grows, influence naturally follows.”
          </p>
        </div>
      </div>

      {/* Rising particles indicator */}
      <div className="rising-indicator">
        <div className="rising-line"></div>
        <div className="rising-dot"></div>
      </div>

      {/* Decorative elements */}
      <div className="hero-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-line"></div>
        <div className="decoration-circle"></div>
      </div>
    </section>
  );
};

export default Hero;