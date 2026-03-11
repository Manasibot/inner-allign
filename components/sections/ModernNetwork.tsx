'use client';

import { motion } from 'framer-motion';

export default function ModernNetwork() {
    const stats = [
        { label: "Women Maximum", value: "20" },
        { label: "Alumni Network", value: "Lifelong" },
        { label: "Active Community", value: "Private" },
        { label: "Presence", value: "Global" }
    ];

    return (
        <section id="network" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 relative bg-blush/30">
            {/* Architectural Grid Underlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-plum) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

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
                            <span className="text-gradient">Curated Network.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-plum/60 text-[20px] leading-relaxed max-w-[500px] font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        The experience does not end after 72 hours. You enter a lifelong network of women operating at the same psychological density. No networking—only deep architectural resonance.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-[28px] md:text-[32px] font-garamond font-medium text-plum mb-6 leading-tight">No Tree Grows Alone.</h3>
                        <div className="w-12 h-[1px] bg-rose-gold/40 mb-8" />

                        <div className="space-y-6 text-plum/70 text-[15px] leading-relaxed font-light">
                            <p>
                                Modern forest science has revealed one of nature&apos;s most extraordinary discoveries: trees do not grow alone. Beneath every ancient forest runs an invisible web of fungal networks — the mycelium — through which trees share nutrients, send chemical signals, and support each other&apos;s survival during periods of stress.
                            </p>
                            <p>
                                The women in this room are not an audience. They are nodes in a rare, high-calibre ecosystem that forms once and lasts a lifetime. The most transformative moments will not come from the facilitator — they will come from the structured peer intelligence and the unguarded exchanges that happen when equally accomplished women are finally given permission to be fully honest with each other.
                            </p>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            className="glass-card !bg-white/70 border-plum/5 !p-12 relative z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-[28px] md:text-[32px] font-garamond font-medium text-plum mb-6 leading-tight">The Invisible Network</h3>
                            <div className="w-12 h-[1px] bg-rose-gold/40 mb-8" />
                            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <span className="text-rose-gold font-garamond font-bold text-[32px] block mb-2">{stat.value}</span>
                                        <span className="text-plum/40 text-[11px] uppercase tracking-widest font-bold font-outfit">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Background Geometric Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-plum/5 rounded-full pointer-events-none" />
                    </div>
                </div>

                {/* Transformational Quote - Synchronized with Standard */}
                <motion.div
                    className="max-w-[1000px] mx-auto text-center mt-24 md:mt-32"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="w-full h-[1px] bg-plum/5 mb-12" />
                    <p
                        className="italic leading-snug"
                        style={{
                            fontFamily: 'var(--font-garamond)',
                            fontSize: '26px',
                            color: 'var(--color-plum)'
                        }}
                    >
                        &ldquo;The most important question is not what you will learn. It is who you will learn it with.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
