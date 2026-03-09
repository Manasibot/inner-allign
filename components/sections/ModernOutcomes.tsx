'use client';

import { motion } from 'framer-motion';
import { Target, Compass, Zap, Shield } from 'lucide-react';

export default function ModernOutcomes() {
    const outcomes = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Definitive Clarity",
            desc: "Remove the fog of 'options' to visualize the single most architectural path forward."
        },
        {
            icon: <Compass className="w-6 h-6" />,
            title: "Sovereign Authority",
            desc: "Communicate from the gut, leading with an unconditional presence that requires no effort."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Group Intelligence",
            desc: "Access a brain trust of 14 peers operating at the same frequency and stakes."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Structural Integrity",
            desc: "Build a physical and psychological nervous system that thrives under global pressure."
        }
    ];

    return (
        <section id="outcomes" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 bg-stone-dark/20 relative overflow-hidden">
            <div className="max-w-content mx-auto">
                <div className="text-center mb-24">
                    <motion.span
                        className="section-label-elegant"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        The Yield
                    </motion.span>
                    <motion.h2
                        className="headline-standard mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Elite <br />
                        <span className="text-gradient">Outcomes.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((outcome, idx) => (
                        <motion.div
                            key={outcome.title}
                            className="glass-card !p-10 !bg-white/40 hover:!bg-white/80 transition-all border-espresso/5 flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="text-gold mb-8 p-3 bg-gold-soft rounded-full">
                                {outcome.icon}
                            </div>
                            <h3 className="text-[20px] font-outfit font-semibold text-espresso mb-4">
                                {outcome.title}
                            </h3>
                            <p className="text-espresso/60 text-[14px] leading-relaxed font-light">
                                {outcome.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
