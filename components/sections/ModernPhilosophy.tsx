'use client';

import { motion } from 'framer-motion';

export default function ModernPhilosophy() {
    const pillars = [
        {
            title: "Intelligent Foundations",
            paragraphs: [
                "The most powerful trees in the world did not grow by accident. Beneath every towering oak, every ancient cedar, every fruit-bearing canopy — there is a root system as complex and intelligent as the tree itself.",
                "It mapped its terrain before it grew. It survived storms by developing density, not rigidity. It feeds an entire ecosystem simply by becoming fully itself."
            ],
        },
        {
            title: "Innate Influence",
            paragraphs: [
                "This experience is not about fixing what is missing. It is designed for women who are already accomplished — and who recognise that there is still more of their potential, clarity, and influence ready to be expressed.",
                "More depth. More reach. More of themselves waiting to be expressed."
            ],
        },
        {
            title: "Inner Cartography",
            paragraphs: [
                "Over three transformational days, using the precision of The ALIGN Framework™ and the wisdom of the Ancient Forest, you will complete the most important cartography of your life."
            ]
        }
    ];

    return (
        <section id="philosophy" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 relative bg-alabaster/50">
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
                            The Philosophy
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            The Mastery of <br />
                            <span className="text-gradient">Internal Structure.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-espresso/60 text-[20px] leading-relaxed max-w-[500px] font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        True power is not exercised; it is held. We facilitate the transition from effortful leadership to effortless authority.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            className="glass-card group !bg-white/90 h-full flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                        >
                            <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-10 group-hover:bg-gold group-hover:text-white transition-all duration-500 shrink-0">
                                <span className="text-gold group-hover:text-white font-outfit text-[12px] font-bold">0{idx + 1}</span>
                            </div>

                            <h3 className="text-[24px] font-outfit font-semibold text-espresso mb-6 shrink-0">{pillar.title}</h3>
                            <div className="w-12 h-[2px] bg-gold/40 mb-6" />

                            <div className="space-y-4 flex-grow">
                                {pillar.paragraphs.map((para, pIdx) => (
                                    <p key={pIdx} className="text-espresso/70 leading-relaxed text-[15px] font-light">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legacy Map Callout - Integrated below the grid */}
                <motion.div
                    className="max-w-[1000px] mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="w-full h-[1px] bg-espresso/5 mb-12" />
                    <p
                        className="italic leading-snug"
                        style={{
                            fontFamily: 'var(--font-garamond)',
                            fontSize: '26px',
                            color: 'var(--color-deep-purple)'
                        }}
                    >
                        &ldquo;A complete map of your inner architecture, your leadership ecosystem, and the legacy canopy you were designed to grow.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
