'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModernAlignFramework() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const pillars = [
        {
            letter: 'A',
            pillar: 'Awareness',
            part: 'The Root System',
            subtitle: 'Root Architecture',
            desc: 'Identity, values, self-perception — mapped with scientific precision using EQ-i 2.0 and Hogan Assessments'
        },
        {
            letter: 'L',
            pillar: 'Leadership Intent',
            part: 'The Stem',
            subtitle: 'Growth Direction',
            desc: 'The irreversible decision: which direction is up. Role, ambition, influence goals'
        },
        {
            letter: 'I',
            pillar: 'Impact',
            part: 'The Bud',
            subtitle: 'First Visible Signal',
            desc: 'How the world outside you reads the world inside you'
        },
        {
            letter: 'G',
            pillar: 'Gravitas',
            part: 'The Trunk & Bark',
            subtitle: 'Bark Intelligence',
            desc: 'Somatic authority, cultural climate adaptability, executive presence'
        },
        {
            letter: 'N',
            pillar: 'Narrative',
            part: 'The Canopy',
            subtitle: 'The Canopy Economy',
            desc: 'Personal brand, authentic visibility — the part that feeds others and attracts the world'
        },
    ];

    return (
        <section id="method" className="pt-20 md:pt-32 pb-16 md:pb-24 px-6 relative bg-alabaster/50 overflow-hidden">
            {/* Architectural Grid Underlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-espresso) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-content mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The ALIGN Framework
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            The <span className="text-gradient">ALIGN</span> Framework™
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-espresso/60 text-[20px] leading-relaxed max-w-[500px] font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Success is not a sprint toward the finish line; it is a deepening of your structural integrity.
                    </motion.p>
                </div>

                {/* Desktop Grid / Mobile Scroll */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-6 md:gap-4 pb-0 md:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar items-start mb-12">
                    {pillars.map((p, idx) => (
                        <motion.div
                            key={p.pillar}
                            className={`flex-shrink-0 w-[85vw] md:w-full snap-center glass-card !p-8 flex flex-col items-center text-center group bg-white/60 border-espresso/5 shadow-sm relative overflow-hidden transition-all duration-500 cursor-pointer ${expandedIndex === idx ? 'bg-white/90 border-gold/20 ring-1 ring-gold/10' : 'hover:bg-white/80'}`}
                            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                        >
                            {/* Standard Alphabet Style */}
                            <span className={`text-[64px] font-outfit font-bold transition-all duration-500 block leading-none mb-6 ${expandedIndex === idx ? 'text-gold' : 'text-gold/30 group-hover:text-gold/60'}`}>
                                {p.letter}
                            </span>

                            {/* Corner Marks */}
                            <div className={`absolute top-4 left-4 w-4 h-4 border-t border-l transition-colors duration-500 ${expandedIndex === idx ? 'border-gold/40' : 'border-gold/20'}`} />

                            <div className="mb-6 relative z-10 w-full text-center">
                                <h4 className={`font-bold text-[10px] uppercase tracking-[0.3em] mb-3 transition-colors duration-500 ${expandedIndex === idx ? 'text-gold' : 'text-gold/60'}`}>{p.pillar}</h4>
                                <h3 className="text-espresso font-semibold text-[22px] leading-tight flex items-center justify-center">
                                    {p.part}
                                </h3>
                            </div>

                            <div className={`w-12 h-[2px] transition-all duration-500 mb-6 relative z-10 ${expandedIndex === idx ? 'bg-gold/40' : 'bg-gold/20'}`} />

                            <AnimatePresence>
                                {expandedIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                        className="relative z-10 overflow-hidden mb-6"
                                    >
                                        <p className="text-espresso font-bold text-[13px] uppercase tracking-wider mb-4 opacity-80">
                                            {p.subtitle}
                                        </p>
                                        <p className="text-espresso/60 text-[15px] leading-relaxed font-light">
                                            {p.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Interaction Indicator - Static Arrow in Circle + Label */}
                            <div className="mt-auto pt-6 border-t border-espresso/5 w-full flex flex-col items-center gap-3">
                                <motion.div
                                    animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 shadow-sm ${expandedIndex === idx ? 'border-gold bg-gold text-white shadow-gold/20' : 'border-gold/30 text-gold group-hover:border-gold/60 group-hover:bg-gold/5'}`}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </motion.div>

                                <AnimatePresence>
                                    {expandedIndex !== idx && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-[9px] uppercase tracking-[0.2em] text-gold/60 font-bold"
                                        >
                                            Click to Expand
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Transformational Quote - Integrated below the grid */}
                <motion.div
                    className="max-w-[1000px] mx-auto text-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="w-full h-[1px] bg-espresso/5 mb-6" />
                    <p
                        className="italic leading-snug"
                        style={{
                            fontFamily: 'var(--font-garamond)',
                            fontSize: '26px',
                            color: 'var(--color-deep-purple)'
                        }}
                    >
                        &ldquo;Five parts of the tree. Five pillars of your transformation. Each phase follows the same biological sequence that produces the world's most enduring trees.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
