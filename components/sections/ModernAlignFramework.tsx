'use client';

import { motion } from 'framer-motion';

export default function ModernAlignFramework() {
    const framework = [
        {
            renew: {
                letter: 'R',
                phase: 'Rooting',
                stage: 'Root Stage',
                season: 'Winter Season',
                note: 'Mapping the terrain before the first shoot appears.',
                desc: 'The winter season of deep preparation — mapping the terrain before the first shoot appears.'
            },
            align: {
                letter: 'A',
                pillar: 'Awareness',
                part: 'The Root System',
                desc: 'Scientific mapping of your identity architecture before you grow.'
            }
        },
        {
            renew: {
                letter: 'E',
                phase: 'Emerging',
                stage: 'Establish Stage',
                season: 'Spring Shoot',
                note: 'The first irreversible commitment to direction.',
                desc: 'The spring shoot breaking ground — the first irreversible commitment to direction.'
            },
            align: {
                letter: 'L',
                pillar: 'Leadership Intent',
                part: 'The Stem',
                desc: 'Choosing which direction is up and channelling all energy toward it.'
            }
        },
        {
            renew: {
                letter: 'N',
                phase: 'Nourishing',
                stage: 'New Growth Stage',
                season: 'Nourishing Phase',
                note: 'Protection, precision, and the right conditions.',
                desc: 'The tender sprout requiring protection, precision, and the right conditions to survive.'
            },
            align: {
                letter: 'I',
                pillar: 'Impact',
                part: 'The Bud',
                desc: 'The first visible signal of your renewed self entering the ecosystem.'
            }
        },
        {
            renew: {
                letter: 'E',
                phase: 'Expanding',
                stage: 'Endure Stage',
                season: 'Hardening Wood',
                note: 'Structural density to hold weight and survive storms.',
                desc: 'The hardening of the wood — developing structural density to hold weight and survive storms.'
            },
            align: {
                letter: 'G',
                pillar: 'Gravitas',
                part: 'The Trunk & Bark',
                desc: 'Somatic authority, cultural intelligence, and unshakeable presence.'
            }
        },
        {
            renew: {
                letter: 'W',
                phase: 'Witnessing',
                stage: 'Wealth Stage',
                season: 'Canopy Economy',
                note: 'Production of fruit and attracting your ecosystem.',
                desc: 'The production of fruit — the canopy economy where you feed others and attract your ecosystem.'
            },
            align: {
                letter: 'N',
                pillar: 'Narrative',
                part: 'The Canopy',
                desc: 'Personal brand, authentic visibility, and the story that draws the world to you.'
            }
        }
    ];

    return (
        <section id="method" className="pt-20 md:pt-32 pb-16 md:pb-24 px-6 relative bg-blush/20 overflow-hidden font-outfit">
            {/* Architectural Grid Underlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-plum) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="max-w-content mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Dual Framework
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            The <span className="text-gradient">ALIGN × R.E.N.E.W.</span> <br />
                            Experience
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-plum/60 text-[20px] leading-relaxed max-w-[500px] font-light italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Five biological phases of growth, mapped precisely to five pillars of executive leadership.
                    </motion.p>
                </div>

                {/* Architecture Matrix */}
                <div className="space-y-12">
                    {/* Header Row */}
                    <div className="hidden md:grid md:grid-cols-[1fr_100px_1fr] gap-12 border-b border-plum/10 pb-6">
                        <div className="text-left font-bold text-[10px] uppercase tracking-[0.3em] text-rose-gold/60">
                            Internal Architecture (R.E.N.E.W.)
                        </div>
                        <div className="flex justify-center" />
                        <div className="text-right font-bold text-[10px] uppercase tracking-[0.3em] text-rose-gold/60">
                            External Influence (ALIGN Framework™)
                        </div>
                    </div>

                    {framework.map((item, idx) => (
                        <div key={idx} className="relative group/row">
                            {/* Mobile Label */}
                            <div className="md:hidden flex justify-between mb-4 border-b border-plum/5 pb-2">
                                <span className="text-[9px] uppercase tracking-widest text-rose-gold/60 font-bold">Internal</span>
                                <span className="text-[9px] uppercase tracking-widest text-rose-gold/60 font-bold">External</span>
                            </div>

                            <div className="grid md:grid-cols-[1fr_100px_1fr] gap-8 md:gap-12 items-stretch">
                                {/* RENEW LANE (Left) */}
                                <motion.div
                                    className="text-left glass-card !bg-white/60 border-plum/5 p-8 relative overflow-hidden group/lane-r transition-all duration-500 hover:!bg-white/90 hover:border-rose-gold/20"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Animated Background Accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-gold/[0.03] -mr-12 -mt-12 rounded-full blur-2xl group-hover/lane-r:bg-rose-gold/5 transition-all duration-700" />

                                    <div className="flex flex-col gap-1 mb-4 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[36px] font-garamond font-bold text-rose-gold">{item.renew.letter}</span>
                                            <h4 className="text-[18px] font-garamond font-semibold text-plum uppercase tracking-tight">{item.renew.phase}</h4>
                                        </div>
                                        <p className="text-sage font-bold text-[10px] uppercase tracking-widest">{item.renew.stage}</p>
                                    </div>
                                    <p className="text-plum/70 text-[14px] leading-relaxed font-light max-w-[400px] relative z-10">
                                        {item.renew.desc}
                                    </p>
                                </motion.div>

                                {/* CONNECTOR (Middle) */}
                                <div className="flex flex-col items-center justify-center relative h-12 md:h-auto py-4">
                                    <div className="w-[1px] h-full bg-plum/5 absolute hidden md:block" />
                                    <div className="w-10 h-10 rounded-full border border-rose-gold/40 flex items-center justify-center bg-petal z-10 text-rose-gold text-[12px] font-bold group-hover/row:bg-rose-gold group-hover/row:text-white group-hover/row:scale-110 transition-all duration-500 shadow-sm">
                                        0{idx + 1}
                                    </div>
                                </div>

                                {/* ALIGN LANE (Right) */}
                                <motion.div
                                    className="md:text-right flex flex-col items-start md:items-end glass-card !bg-white/60 border-plum/5 p-8 relative overflow-hidden group/lane-a transition-all duration-500 hover:!bg-white/90 hover:border-rose-gold/20"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Animated Background Accent */}
                                    <div className="absolute top-0 left-0 w-24 h-24 bg-rose-gold/[0.03] -ml-12 -mt-12 rounded-full blur-2xl group-hover/lane-a:bg-rose-gold/5 transition-all duration-700" />

                                    <div className="flex flex-col gap-1 mb-4 md:items-end relative z-10">
                                        <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
                                            <h4 className="text-[18px] font-garamond font-semibold text-plum uppercase tracking-tight">{item.align.pillar}</h4>
                                            <span className="text-[36px] font-garamond font-bold text-rose-gold">{item.align.letter}</span>
                                        </div>
                                        <p className="text-sage font-bold text-[10px] uppercase tracking-widest">{item.align.part}</p>
                                    </div>
                                    <p className="text-plum/70 text-[14px] leading-relaxed font-light max-w-[400px] md:text-right relative z-10">
                                        {item.align.desc}
                                    </p>
                                </motion.div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Transformational Quote */}
                <motion.div
                    className="max-w-[1000px] mx-auto text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="w-full h-[1px] bg-plum/5 mb-8" />
                    <p
                        className="italic leading-relaxed"
                        style={{
                            fontFamily: 'var(--font-garamond)',
                            fontSize: '26px',
                            color: 'var(--color-plum)'
                        }}
                    >
                        &ldquo;This is not just a framework. It is a biological mapping of your leadership ecosystem.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
