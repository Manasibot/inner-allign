'use client';

import { motion } from 'framer-motion';

export default function ModernJourney() {
    const steps = [
        {
            phase: "Phase I",
            title: "Archetypal Analysis",
            desc: "A high-fidelity mapping of your current interior architecture and psychological levers.",
            align: "left"
        },
        {
            phase: "Phase II",
            title: "Structural Re-alignment",
            desc: "Deconstructing shadow patterns and architecting a new baseline of sovereign authority.",
            align: "right"
        },
        {
            phase: "Phase III",
            title: "Massive Integration",
            desc: "Developing the effortless presence required to command global systems of scale.",
            align: "left"
        }
    ];

    return (
        <section id="journey" className="py-20 md:py-32 px-6 bg-stone overflow-hidden">
            <div className="max-w-content mx-auto">
                <div className="mb-32">
                    <motion.span
                        className="section-label-elegant"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        The Sequence
                    </motion.span>
                    <motion.h2
                        className="headline-standard"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        The <br />
                        <span className="text-gradient">Three-Day Journey.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Vertical Path Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-espresso/5" />

                    <div className="space-y-24 md:space-y-48">
                        {steps.map((step, idx) => (
                            <div key={step.title} className={`flex flex-col md:flex-row items-center gap-12 ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                <motion.div
                                    className="w-full md:w-1/2"
                                    initial={{ opacity: 0, x: step.align === 'left' ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={`glass-card !bg-white/60 border-espresso/5 !p-12 ${step.align === 'right' ? 'text-right' : 'text-left'}`}>
                                        <span className="text-gold font-outfit font-bold text-[14px] uppercase tracking-widest block mb-4">
                                            {step.phase}
                                        </span>
                                        <h3 className="text-[28px] font-outfit font-semibold text-espresso mb-6 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-espresso/60 text-[16px] leading-relaxed font-light">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Center Node */}
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-alabaster border border-gold/40 rounded-full flex items-center justify-center shadow-lg">
                                        <div className="w-2 h-2 bg-gold rounded-full" />
                                    </div>
                                </div>

                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
