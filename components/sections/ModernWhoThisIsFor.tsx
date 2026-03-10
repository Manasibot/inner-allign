'use client';

import { motion } from 'framer-motion';

export default function ModernWhoThisIsFor() {
    const readiness = [
        {
            title: "She Is Ready If She…",
            symbol: "✓",
            items: [
                "Leads a team, a company, or a movement and wants to do it with more clarity and less noise",
                "Has built a strong outer career but senses a misalignment between who she is publicly and who she is privately",
                "Operates across cultures and geographies and wants to understand how her presence lands in different rooms",
                "Has achieved significant milestones but struggles to articulate her own narrative with confidence",
                "Is at an inflection point — a new role, a new chapter, a next level — and wants to arrive prepared",
                "Has spent years growing others and is ready to invest in her own re-growth (renewal) with the same rigour"
            ]
        },
        {
            title: "She Is Not Yet Ready If…",
            symbol: "–",
            items: [
                "She is looking for surface-level confidence tips or presentation techniques",
                "She is not willing to engage deeply with psychometric assessment and peer-level feedback",
                "She expects to observe rather than participate fully",
                "She is not open to examining the beliefs and patterns that have shaped her leadership so far",
                "She wants quick fixes rather than a structural shift in how she leads and lives"
            ]
        }
    ];

    return (
        <section id="who" className="pt-20 md:pt-32 pb-16 md:pb-24 px-6 bg-stone relative overflow-hidden">
            {/* Architectural Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-espresso) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] border border-espresso/5 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] border border-gold/10 rounded-full translate-y-1/3 translate-x-1/4 pointer-events-none" />

            <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-espresso/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/5 to-transparent pointer-events-none" />

            <div className="max-w-content mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Selection
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Who This <br />
                            <span className="text-gradient">Experience is For.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-espresso/60 text-[20px] leading-relaxed max-w-[500px] font-light italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Selection is the ultimate form of alignment. We bring together a high-calibre circle where the baseline is mastery and the objective is expansion.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {readiness.map((card, idx) => (
                        <motion.div
                            key={card.title}
                            className={`glass-card flex flex-col items-start !bg-white/40 !p-8 border-espresso/5 shadow-sm relative group overflow-hidden`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            {/* Card Watermark - Increased visibility */}
                            <div className="absolute top-10 right-10 text-[120px] font-outfit font-bold text-gold/[0.08] leading-none pointer-events-none group-hover:text-gold/[0.15] transition-all duration-700">
                                0{idx + 1}
                            </div>

                            {/* Corner Marks */}
                            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/20" />
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/20" />

                            <h3 className="text-[24px] font-outfit font-semibold text-espresso mb-6 uppercase tracking-tight relative z-10">
                                {card.title}
                            </h3>
                            <div className="w-12 h-[2px] bg-gold/40 mb-6 relative z-10" />

                            <ul className="space-y-6 relative z-10">
                                {card.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex gap-4 group/item">
                                        <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-sm border border-gold/10 text-[10px] font-bold transition-all duration-300 group-hover/item:border-gold/40 ${idx === 0 ? 'text-gold bg-gold/5' : 'text-espresso/40 bg-espresso/5'}`}>
                                            {card.symbol}
                                        </span>
                                        <p className="text-espresso/70 text-[14px] leading-relaxed font-light">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Section 3 Quote - Integrated below the grid */}
                <motion.div
                    className="max-w-[1000px] mx-auto text-center mb-0"
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
                        &ldquo;An intensive curated for the specific psychological density of elite women leaders. This is not for those seeking growth, but for those architecting expansion.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
