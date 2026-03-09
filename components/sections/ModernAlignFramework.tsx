'use client';

import { motion } from 'framer-motion';

export default function ModernAlignFramework() {
    const pillars = [
        { letter: 'A', name: 'Analysis', desc: 'Quantitative interior mapping.' },
        { letter: 'L', name: 'Levers', desc: 'Strategic psychological pressure points.' },
        { letter: 'I', name: 'Identity', desc: 'Architecting the sovereign self.' },
        { letter: 'G', name: 'Gravity', desc: 'Developing effortless presence.' },
        { letter: 'N', name: 'Network', desc: 'Sustained collective intelligence.' },
    ];

    return (
        <section id="method" className="py-20 md:py-32 px-6 bg-stone-dark/30">
            <div className="max-w-content mx-auto">
                <div className="text-center mb-16">
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

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
                    {pillars.map((p, idx) => (
                        <motion.div
                            key={p.name}
                            className="glass-card !p-8 flex flex-col items-center text-center group bg-white/60 border-espresso/5"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                        >
                            <span className="text-[64px] font-outfit font-bold text-gold/20 group-hover:text-gold transition-colors block leading-none mb-6">
                                {p.letter}
                            </span>
                            <h4 className="text-espresso font-semibold text-[18px] mb-4 uppercase tracking-wider">{p.name}</h4>
                            <p className="text-espresso/40 text-[13px] leading-relaxed uppercase tracking-widest font-bold">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
