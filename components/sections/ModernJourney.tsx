'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ModernJourney() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const days = [
        {
            day: "01",
            title: "Knowing Yourself, Choosing Your Direction",
            tags: ["A", "L"],
            desc: "The most important day of the program. Before any tree can grow, it must understand the terrain it is growing in. Today, each woman receives the most precise map of herself she has ever held — and makes her most important decision: which direction is up.",
            align: "left"
        },
        {
            day: "02",
            title: "Showing Up & Standing Tall",
            tags: ["I", "G"],
            desc: "The transition from interior to exterior. The roots are mapped, the direction is chosen. Now we examine the signal — how does this woman's inner world translate into outer presence?",
            align: "right"
        },
        {
            day: "03",
            title: "Owning Your Story, Growing Your Canopy",
            tags: ["N", "Integration"],
            desc: "The roots are mapped. The foundation is solid. Day 3 is where it all becomes visible.\n\nYou will learn how to show up in the world as exactly who you are — clearly, consistently, and in a way that attracts the right people, rooms, and opportunities to you.",
            align: "left"
        }
    ];

    return (
        <section id="journey" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 bg-stone relative overflow-hidden">
            <div className="max-w-content mx-auto" ref={containerRef}>
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Sequence
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            The <br />
                            <span className="text-gradient">Three-Day Journey.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-espresso/60 text-[20px] leading-relaxed max-w-[500px] font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Three Days. Five Pillars. <br />
                        One Clear Path Forward.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Vertical Timeline SVG */}
                    <div className="absolute left-center md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <line
                                x1="50%" y1="0%" x2="50%" y2="100%"
                                stroke="var(--color-espresso)"
                                strokeWidth="1"
                                strokeOpacity="0.05"
                            />
                            <motion.line
                                x1="50%" y1="0%" x2="50%" y2="100%"
                                stroke="var(--color-gold)"
                                strokeWidth="2"
                                style={{ pathLength }}
                            />
                        </svg>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        {days.map((day, idx) => (
                            <div key={day.day} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 relative ${day.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Block */}
                                <motion.div
                                    className="w-full md:w-[45%]"
                                    initial={{ opacity: 0, x: day.align === 'left' ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <div className={`glass-card !bg-white/60 border-espresso/5 !p-8 md:!p-12 relative ${day.align === 'right' ? 'md:text-left' : 'text-left'}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-gold font-outfit font-bold text-[27px] md:text-[35px] leading-none opacity-40 whitespace-nowrap">
                                                Day {day.day}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {day.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-gold/5 border border-gold/10 rounded-full text-gold font-bold text-[9px] md:text-[10px] uppercase tracking-wider">
                                                        {tag === 'A' ? 'Awareness' :
                                                            tag === 'L' ? 'Leadership Intent' :
                                                                tag === 'I' ? 'Impact' :
                                                                    tag === 'G' ? 'Gravitas' :
                                                                        tag === 'N' ? 'Narrative' : tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="text-[24px] md:text-[28px] font-outfit font-semibold text-espresso mb-6 leading-tight">
                                            {day.title}
                                        </h3>
                                        <div className="w-12 h-[2px] bg-gold/40 mb-6" />

                                        <p className="text-espresso/60 text-[15px] md:text-[16px] leading-relaxed font-light">
                                            {day.desc}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Center Node Marker */}
                                <motion.div
                                    className="relative z-20 flex-shrink-0"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                >
                                    <div className="w-12 h-12 bg-stone border border-gold/30 rounded-full flex items-center justify-center shadow-sm relative group overflow-hidden">
                                        <div className="absolute inset-0 bg-gold/5 transition-colors duration-500 group-hover:bg-gold/10" />
                                        <span className="relative z-10 text-gold font-outfit font-bold text-[18px]">
                                            {idx + 1}
                                        </span>
                                    </div>
                                </motion.div>

                                <div className="hidden md:block w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Ghost Link */}
                <motion.div
                    className="max-w-[1000px] mx-auto text-center mt-24 md:mt-32"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="w-full h-[1px] bg-espresso/5 mb-12" />

                    <a
                        href="#apply"
                        className="text-[12px] uppercase tracking-[0.3em] font-bold text-espresso/30 hover:text-gold transition-colors duration-500 inline-flex items-center gap-2"
                    >
                        The full agenda is shared during the application process
                        <span className="text-[16px] leading-none">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
