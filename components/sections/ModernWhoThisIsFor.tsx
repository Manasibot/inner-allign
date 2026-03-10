'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function ModernWhoThisIsFor() {
    const readiness = [
        {
            title: "She Is Ready If She…",
            symbol: "✓",
            items: [
                "Leads a team, company, or movement and wants clarity and alignment",
                "Has strong external success but seeks inner alignment",
                "Operates across cultures and wants presence to land effectively"
            ]
        },
        {
            title: "She Is Not Yet Ready If…",
            symbol: "–",
            items: [
                "Seeks surface-level tips rather than deep growth",
                "Prefers observation over active engagement",
                "Wants quick fixes instead of structural change"
            ]
        }
    ];

    return (
        <section id="who" className="pt-7 md:pt-7 pb-16 md:pb-24 px-6 bg-neutral-background2 relative overflow-hidden">
            {/* Architectural Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="w-[70%] mx-auto relative z-10">
                <div className="text-center mb-6 mt-6">
                    <motion.span
                        className="section-label-elegant mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        The Selection
                    </motion.span>
                    <motion.h2
                        className="headline-standard text-transparent bg-clip-text bg-gradient-to-r from-[#7B5CFF] to-[#F472B6]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Who is This <br />
                        Experience For.
                    </motion.h2>

                    <motion.p
                        className="italic leading-snug mt-6"
                        style={{
                            fontFamily: 'var(--font-canela)',
                            fontSize: '20px',
                            color: '#7B5CFF'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Selection is about alignment and growth—connecting leaders with clarity, confidence, and presence.
                    </motion.p>
                </div>

                {/* Tree / Roots Layout */}
                <div className="relative flex justify-center items-start gap-20 md:gap-32">
                    {/* Trunk */}
                    <div className="absolute top-0 left-1/2 w-[4px] h-full bg-gradient-to-b from-primary to-secondary -translate-x-1/2 pointer-events-none rounded" />

                    {/* Left side nodes */}
                    <div className="flex flex-col items-end gap-12 w-[50%]">
                        {/* Left title */}
                        <motion.h3
                            className="text-[#7B5CFF] text-[22px] font-bold mb-6 text-right"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            {readiness[0].title}
                        </motion.h3>

                        {readiness[0].items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-3 relative z-10"
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                            >
                                <div className="w-6 h-6 flex items-center justify-center text-white bg-[#7B5CFF] rounded-full">
                                    <Leaf className="w-4 h-4" />
                                </div>

                                <p className="text-[#7B5CFF] text-[18px] max-w-[220px] text-right">{item}</p>

                                {/* Root connecting line */}
                                <span className="absolute right-[-80px] top-2 w-[80px] h-[2px] bg-[#7B5CFF]/30 rounded-full" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side nodes */}
                    <div className="flex flex-col items-start gap-12 w-[50%]">
                        {/* Right title */}
                        <motion.h3
                            className="text-[#F472B6] text-[22px] font-bold mb-6 text-left"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            {readiness[1].title}
                        </motion.h3>

                        {readiness[1].items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-3 relative z-10"
                                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                            >
                                {/* Root connecting line */}
                                <span className="absolute left-[-80px] top-2 w-[80px] h-[2px] bg-[#F472B6]/30 rounded-full" />

                                <p className="text-[#F472B6] text-[18px] max-w-[220px] text-left">{item}</p>

                                <div className="w-6 h-6 flex items-center justify-center text-white bg-[#F472B6] rounded-full">
                                    <Leaf className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
