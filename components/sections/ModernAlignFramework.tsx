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
            video: '/roots.mp4',
            desc: 'This is where you map your DNA before you grow. '
        },
        {
            letter: 'L',
            pillar: 'Leadership Intent',
            part: 'The Stem',
            subtitle: 'Growth Direction',
            video: '/stem.mp4',
            desc: 'You must choose a direction (Up) to channel your energy.'
        },
        {
            letter: 'I',
            pillar: 'Impact',
            part: 'The Bud',
            subtitle: 'First Visible Signal',
            video: '/bud.mp4',
            desc: 'The first visible sign of your new self entering the world.'
        },
        {
            letter: 'G',
            pillar: 'Gravitas',
            part: 'The Trunk & Bark',
            subtitle: 'Bark Intelligence',
            video: '/trunk.mp4',
            desc: ' Developing the thickness (Lignin) to hold weight and survive storms.'
        },
        {
            letter: 'N',
            pillar: 'Narrative',
            part: 'The Canopy',
            subtitle: 'The Canopy Economy',
            video: '/canopy.mp4',
            desc: ' The part that feeds others and attracts the world to you.'
        },
    ];

    return (
        <section
            id="method"
            className="pt-5 md:pt-5 pb-16 md:pb-24 px-6 relative bg-[#D1E0D1] overflow-hidden"
        >

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-content mx-auto relative z-10">

                <div className="grid lg:grid-cols-2 gap-20 items-end mb-10">
                    <div>
                        <motion.h2
                            className="headline-standard flex flex-wrap gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            {/* Animate 'The' */}
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                The
                            </motion.span>

                            {/* Animate 'ALIGN' with gradient */}
                            <motion.span
                                className="bg-gradient-to-r from-[#7B5CFF] to-[#F472B6] bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.6, type: 'spring', stiffness: 120 }}
                            >
                                ALIGN
                            </motion.span>

                            {/* Animate 'Framework' */}
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                Framework
                            </motion.span>
                        </motion.h2>
                           <div className="w-50 h-[2px] bg-gradient-to-r from-[#7B5CFF] to-[#F472B6] mb-5 mt-5" />
                    </div>
                     {/* <div className="w-50 h-[2px] bg-gradient-to-r from-[#7B5CFF] to-[#8FCF9A] mb-5" /> */}


                    {/* <motion.p
                        className="text-[20px] leading-relaxed max-w-[500px]"
                        style={{ color: '#7B5CFF' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Success is not a sprint toward the finish line; it is a deepening of your structural integrity.
                    </motion.p> */}

                </div>


                {/* GRID */}

                <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-6 md:gap-4 snap-x snap-mandatory no-scrollbar items-start mb-5">

                    {pillars.map((p, idx) => (

                        <motion.div
      key={p.pillar}
      className={`flex-shrink-0 w-[85vw] md:w-full snap-center glass-card flex flex-col items-center text-center group border-primary/5 shadow-sm relative overflow-hidden transition-all duration-500 cursor-pointer
        min-h-[120px] 
        ${expandedIndex === idx
          ? 'bg-white/90 border-primary/20 ring-1 ring-primary/10 h-auto'
          : 'hover:bg-white/80'
        }`}
      onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
    >

                            {/* VIDEO BACKGROUND (ONLY WHEN COLLAPSED) */}

                            <AnimatePresence>
                                {expandedIndex !== idx && (
                                    <motion.video
                                        key={p.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
                                        initial={{ opacity: 0.7 }}
                                        animate={{ opacity: 0.7 }}
                                        exit={{ opacity: 0.7 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <source src={p.video} type="video/mp4" />
                                    </motion.video>
                                )}
                            </AnimatePresence>


                            {/* <div className="absolute inset-0 bg-white/0 z-0" /> */}


                            {/* CONTENT */}

                            <div className="relative z-10 flex flex-col items-center text-center w-full
    bg-white/20 backdrop-blur-sm rounded-lg p-4">

                                <span className={`text-[64px] font-outfit font-bold transition-all duration-500 block leading-none mb-6 
    ${expandedIndex === idx
                                        ? 'text-primary'
                                        : 'text-primary/100 group-hover:text-primary/100'
                                    }`}>
                                    {p.letter}
                                </span>

                                <div className={`absolute top-4 left-4 w-4 h-4 border-t border-l transition-colors duration-500 
    ${expandedIndex === idx ? 'border-primary/40' : 'border-primary/20'}`} />

                                <div className="mb-6 w-full text-center">
                                    <h1 className={`font-bold text-[10px] uppercase tracking-[0.3em] mb-3 transition-colors duration-500 
        ${expandedIndex === idx ? 'text-primary' : 'text-primary/100'}`}>
                                        {p.pillar}
                                    </h1>

                                    <h3 className="text-neutral-heading font-semibold text-[22px] leading-tight">
                                        {p.part}
                                    </h3>
                                </div>

                                <div className={`w-12 h-[2px] transition-all duration-500 mb-6 
    ${expandedIndex === idx
                                        ? 'bg-gradient-to-r from-primary to-secondary'
                                        : 'bg-primary/20'
                                    }`} />

                                <AnimatePresence>
                                    {expandedIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="overflow-hidden mb-6"
                                        >
                                            <p className="text-neutral-heading font-bold text-[13px] uppercase tracking-wider mb-4 opacity-80">
                                                {p.subtitle}
                                            </p>

                                            <p className="text-neutral-subheading/70 text-[15px] leading-relaxed">
                                                {p.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Interaction */}
                                <div className="mt-auto pt-6 border-t border-espresso/5 w-full flex flex-col items-center gap-3">

                                    <motion.div
                                        animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 shadow-sm
            ${expandedIndex === idx
                                                ? 'border-primary bg-primary text-white'
                                                : 'border-primary/30 text-primary'
                                            }`}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </motion.div>

                                    <AnimatePresence>
                                        {expandedIndex !== idx && (
                                            <motion.span
                                                initial={{ opacity: 12, y: -5 }}
                                                animate={{ opacity: 12, y: 0 }}
                                                exit={{ opacity: 12, y: -5 }}
                                                className="text-[11px] uppercase tracking-[0.2em] text-primary/100 font-bold"
                                            >
                                                Click to Expand
                                            </motion.span>
                                        )}
                                    </AnimatePresence>

                                </div>

                            </div>


                        </motion.div>

                    ))}

                </div>


                {/* Quote */}

                <motion.div
                    className="max-w-[1000px] mx-auto text-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="w-full h-[1px] bg-primary-light/20 mb-6" />

                    <p
                        className="italic leading-snug"
                        style={{
                            fontFamily: 'var(--font-canela)',
                            fontSize: '26px',
                            color: 'var(--color-primary-dark)'
                        }}
                    >
                        “Five parts of the tree. Five pillars of your transformation. Each phase follows the same biological sequence that produces the world's most enduring trees.”
                    </p>

                </motion.div>

            </div>

        </section>
    );
}
