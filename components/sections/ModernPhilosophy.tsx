'use client';

import { motion } from 'framer-motion';

export default function ModernPhilosophy() {
    const pillars = [
        {
            title: "Strong Roots Come First",
            paragraphs: [
                "The oldest trees did not grow fast. They grew deep.",
                "Most high-achieving women have spent their careers building the visible parts — the title, the track record, the reputation. This experience turns the light downward. To the values and beliefs running underneath everything you have built, mostly without your awareness.",
                "When you understand your roots, you stop managing your presence. You simply grow."
            ],
        },
        {
            title: "You Are Not Broken",
            paragraphs: [
                "This experience is not for women who are struggling. It is for women who are succeeding — and honest enough to notice that success and fulfilment are not always the same thing.",
                "Somewhere in building your career, a version of you got left behind. The one who knew exactly what she believed and how she wanted to lead.",
                "This is how you find her again."
            ],
        },
        {
            title: "Three Days to Know Yourself Completely",
            paragraphs: [
                "Most leaders operate from assumptions formed years ago — about how they come across, where their strengths are, and what others actually experience when they are in the room.",
                "That gap between assumption and reality is where influence gets lost.",
                "Over three days, you will build something rare: a complete, honest picture of who you are as a leader. Not someone else's version of you. Yours."
            ]
        }
    ];

    return (
        <section id="philosophy" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 relative bg-blush/30">
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
                        className="text-plum/60 text-[20px] leading-relaxed max-w-[500px] font-light"
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
                            className="glass-card group !bg-white/80 h-full flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                        >
                            <div className="w-10 h-10 border border-sage/30 rounded-full flex items-center justify-center mb-10 group-hover:bg-sage group-hover:text-white transition-all duration-500 shrink-0">
                                <span className="text-sage group-hover:text-white font-outfit text-[12px] font-bold">0{idx + 1}</span>
                            </div>

                            <h3 className="text-[24px] font-garamond font-medium text-plum mb-6 shrink-0">{pillar.title}</h3>
                            <div className="w-12 h-[1px] bg-rose-gold/40 mb-6" />

                            <div className="space-y-4 flex-grow">
                                {pillar.paragraphs.map((para, pIdx) => (
                                    <p key={pIdx} className="text-plum/70 leading-relaxed text-[15px] font-light">
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
                    <div className="w-full h-[1px] bg-plum/5 mb-12" />
                    <p
                        className="italic leading-snug"
                        style={{
                            fontFamily: 'var(--font-garamond)',
                            fontSize: '26px',
                            color: 'var(--color-plum)'
                        }}
                    >
                        &ldquo;A clear picture of where you are rooted, where you are growing, and how far your influence can reach.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
