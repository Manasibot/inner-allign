'use client';

import { motion } from 'framer-motion';

export default function ModernNetwork() {
    const stats = [
        { label: "Collective AUM", value: "$12B+" },
        { label: "Countries Represented", value: "18" },
        { label: "Retention Rate", value: "98%" },
        { label: "Annual Cohorts", value: "2" }
    ];

    return (
        <section id="network" className="py-20 md:py-32 px-6 bg-stone-dark/10">
            <div className="max-w-content mx-auto">
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
                            <span className="text-gradient">Curated Network.</span>
                        </motion.h2>
                        <motion.p
                            className="text-espresso/60 text-[18px] leading-relaxed mb-12 font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            The experience does not end after 72 hours. You enter a lifelong network of women operating at the same psychological density. No networking—only deep architectural resonance.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <span className="text-gold font-outfit font-bold text-[32px] block mb-2">{stat.value}</span>
                                    <span className="text-espresso/40 text-[11px] uppercase tracking-widest font-bold font-outfit">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            className="glass-card !bg-white/80 border-espresso/5 !p-12 relative z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h4 className="text-espresso font-semibold text-[22px] mb-8 font-outfit">The Vetting Architecture</h4>
                            <ul className="space-y-6">
                                {[
                                    "Psychometric Compatibility Analysis",
                                    "Values-Grounded Density Testing",
                                    "Non-Transactional Admission Policy",
                                    "Lifelong Digital Council Access"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-espresso/60 text-[15px]">
                                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-gold w-full mt-10 !text-[12px]">View Alumni Network</button>
                        </motion.div>

                        {/* Background Geometric Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-espresso/5 rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
