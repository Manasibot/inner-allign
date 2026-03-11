'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

const HERO_IMAGES = [
    {
        src: "/leadership_portrait.png",
        alt: "Female Leader Portrait"
    },
    {
        src: "/leadership_collaboration.png",
        alt: "Executive Collaboration"
    },
    {
        src: "/leadership_circle.png",
        alt: "Leadership Circle Networking"
    }
];

// Helper to generate a random sequence for the pixel dissolve
const generateSequence = (count: number) => {
    return Array.from({ length: count }, (_, i) => i)
        .sort(() => Math.random() - 0.5);
};

export default function ModernHero() {
    const [currentImage, setCurrentImage] = useState(0);
    const GRID_SIZE = 8; // 8x8 grid for a sophisticated pixelated look
    const totalCells = GRID_SIZE * GRID_SIZE;

    // Stable random sequence for the grid reveal
    const sequence = useMemo(() => generateSequence(totalCells), [totalCells]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000); // 6s interval for a balanced slow pace
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[100dvh] flex flex-col px-6 pt-20 md:pt-24 gap-6 md:gap-10 overflow-hidden bg-transparent">
            {/* Subtle Architectural Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-content mx-auto relative z-10 w-full flex-grow flex flex-col lg:grid lg:grid-cols-12 lg:items-center gap-4 lg:gap-12 py-0 min-h-0">
                {/* Left Column - Content (7 units) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="lg:col-span-7 flex flex-col gap-4 md:gap-8 justify-center"
                >
                    <div>
                        <span className="section-label-elegant mb-2 md:mb-4 block">A LEADERSHIP EXPERIENCE FOR WOMEN</span>

                        <h1 className="headline-standard max-w-[800px]">
                            The Inner Alignment Experience:<br />
                            <span className="text-gradient">Clarity · Confidence · Influence</span>
                        </h1>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="max-w-[540px]">
                            <p className="text-plum text-[clamp(18px,min(1.5vw,2vh),20px)] leading-snug font-medium mb-3 italic">
                                When clarity within grows, influence naturally follows.
                            </p>
                            <div className="w-16 md:w-20 h-[1px] bg-rose-gold mb-3 md:mb-5" />
                            <p className="text-plum/60 text-[clamp(14px,min(0.9vw,1.5vh),16px)] leading-relaxed font-light">
                                You are good at what you do. Possibly excellent. And still — there are moments when the gap between who you are in a room and who you know yourself to be feels wider than it should.
                                <br />
                                That gap has a name, It has a structure, And it can be closed, This is the work.
                                <br />
                                Not a workshop. Not a course. A complete map of your inner architecture — and a clear path forward.
                            </p>
                            <div className="w-full h-[1px] bg-plum/5 mt-8 mb-4" />
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a href="#apply" className="btn-rose group flex items-center justify-center gap-3 min-w-[180px] md:min-w-[220px] py-2 md:py-3 cursor-pointer relative z-20">
                                Reserve Your Seat
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex flex-col justify-center px-1">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-plum/40 block">Location</span>
                                <span className="text-plum font-semibold text-base md:text-lg">Dubai</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Image Slideshow (5 units) - Integrated & Blended */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="lg:col-span-5 relative hidden lg:flex items-center justify-center h-full max-h-[65vh]"
                >
                    <div className="relative w-full max-w-[480px] h-full flex items-center justify-center translate-y-4 md:translate-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImage}
                                className="relative flex items-center justify-center w-full h-full"
                                style={{
                                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
                                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
                                }}
                            >
                                {/* The Image with Blend Modes */}
                                <motion.img
                                    key={`img-${currentImage}`}
                                    src={HERO_IMAGES[currentImage].src}
                                    alt={HERO_IMAGES[currentImage].alt}
                                    className="max-w-full max-h-[65vh] w-auto h-auto rounded-sm mix-blend-multiply opacity-80 grayscale-[5%] brightness-110 contrast-105 sepia-[0.2] object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2 }} // Slow 2-second crossfade
                                />

                                {/* Pixel Dissolve Mask Overlay */}
                                <div
                                    className="absolute inset-0 grid pointer-events-none"
                                    style={{
                                        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                                        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                                    }}
                                >
                                    {Array.from({ length: totalCells }).map((_, i) => (
                                        <motion.div
                                            key={`pixel-${currentImage}-${i}`}
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: 0 }}
                                            transition={{
                                                duration: 2, // Slow 2-second pixel fade
                                                delay: (sequence[i] / totalCells) * 1.5, // Spread transition reveal over 1.5s
                                                ease: [0.22, 1, 0.36, 1] // Calm architectural easing
                                            }}
                                            className="bg-petal" // Matches the petal background to "dissolve" into it
                                        />
                                    ))}
                                </div>

                                {/* Advanced architectural vignette */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(253,249,248,0.7)_100%)] pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Deep Architectural Glow */}
                        <div className="absolute -inset-24 bg-[radial-gradient(circle,rgba(212,163,115,0.12)_0%,transparent_75%)] blur-3xl z-0 pointer-events-none h-[130%]" />
                    </div>
                </motion.div>
            </div>

            {/* Hero Stats bar */}
            <motion.div
                className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-plum/5 pt-4 pb-4 md:pb-8 max-w-content mx-auto w-full mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="flex gap-10 md:gap-20 mb-4 md:mb-0">
                    <div>
                        <span className="text-rose-gold font-outfit font-bold text-[20px] md:text-[24px] block leading-none">May &lsquo;26</span>
                        <span className="text-plum/40 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mt-1 md:mt-2 block">Next Cohort</span>
                    </div>
                    <div>
                        <span className="text-rose-gold font-outfit font-bold text-[20px] md:text-[24px] block leading-none">20</span>
                        <span className="text-plum/40 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mt-1 md:mt-2 block">Available Seats</span>
                    </div>
                </div>
                <div className="max-w-[340px] md:text-right">
                    <p className="text-plum/40 text-[10px] md:text-[11px] leading-relaxed uppercase tracking-widest font-bold">
                        Curated for transformational insight among a high-calibre circle of women leaders.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
