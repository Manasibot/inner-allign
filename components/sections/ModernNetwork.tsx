'use client';

import { motion } from 'framer-motion';
import { Globe } from "lucide-react";

export default function ModernNetwork() {
    const stats = [
        { label: "Collective AUM", value: "$12B+" },
        { label: "Countries Represented", value: "18" },
        { label: "Retention Rate", value: "98%" },
        { label: "Annual Cohorts", value: "2" }
    ];

    // Generate random positions that cover the entire section
    const globePositions = [...Array(12)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 20,
        duration: 25 + Math.random() * 25,
        delay: Math.random() * 5
    }));

    return (
        <section id="network" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 bg-neutral-background3/30 relative overflow-hidden">
            {/* Floating Globes - Now properly distributed */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {globePositions.map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-[var(--color-primary-dark)]"
                        style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            x: "-50%",
                            y: "-50%",
                        }}
                        initial={{
                            opacity: 0.1,
                            scale: 0.5,
                            rotate: 0
                        }}
                        animate={{
                            x: [
                                "-50%", 
                                `calc(-50% + ${Math.random() * 100 - 50}px)`, 
                                `calc(-50% + ${Math.random() * 100 - 50}px)`, 
                                "-50%"
                            ],
                            y: [
                                "-50%", 
                                `calc(-50% + ${Math.random() * 100 - 50}px)`, 
                                `calc(-50% + ${Math.random() * 100 - 50}px)`, 
                                "-50%"
                            ],
                            opacity: [0.1, 0.3, 0.2, 0.1],
                            rotate: [0, 180, 360],
                            scale: [0.5, 1, 0.8, 0.5]
                        }}
                        transition={{
                            duration: pos.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: pos.delay,
                            times: [0, 0.3, 0.7, 1]
                        }}
                    >
                        <Globe size={pos.size} />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-content mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Collective
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            The <br />
                            <span className="text-secondary font-outfit font-bold text-[62px]">Curated Network.</span>
                        </motion.h2>
                        <motion.p
                            className="text-neutral-subheading text-[18px] leading-relaxed mb-12 font-normal"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            The experience does not end after 72 hours. You enter a lifelong network of women operating at the same psychological density. No networking—only deep architectural resonance.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-8">
                            <motion.span
                                className="section-label-elegant font-bold"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                No Tree Grows Alone.
                            </motion.span>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            className="glass-card !bg-white/90 border-primary/5 !p-12 relative z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h4 className="text-neutral-heading font-semibold text-[22px] mb-8 font-outfit">
                                The Invisible Network
                            </h4>

                            <ul className="space-y-6">
                                {[
                                    "Ascend Higher Alumni Network",
                                    "Private Active Community",
                                    "Global Presence",
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-4 text-neutral-subheading/70 text-[15px] font-normal"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                    >
                                        <motion.div
                                            className="w-2 h-2 bg-secondary rounded-full relative"
                                            animate={{
                                                scale: [1, 1.4, 1],
                                                opacity: [0.6, 1, 0.6]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.3
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-secondary rounded-full blur-sm opacity-60" />
                                        </motion.div>

                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Quote Section */}
                        <motion.div
                            className="max-w-[1000px] mx-auto text-center mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <div className="w-full h-[1px] bg-primary-light/20 mb-6" />

                            <p
                                className="italic leading-snug"
                                style={{
                                    fontFamily: "var(--font-canela)",
                                    fontSize: "26px",
                                    color: "var(--color-primary-dark)",
                                }}
                            >
                                “The most important question is not what you will learn. It is who you will learn it with.”
                            </p>
                        </motion.div>

                        {/* Background Geometric Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}