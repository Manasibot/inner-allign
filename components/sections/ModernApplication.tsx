'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ModernApplication() {
    const steps = [
        { number: "01", title: "Intake Form", desc: "A brief psychological and professional mapping." },
        { number: "02", title: "Diagnostic Call", desc: "A 20-minute resonance check with the curator." },
        { number: "03", title: "Peer Density Audit", desc: "Compatibility check with the current cohort." }
    ];

    return (
        <section id="apply" className="py-20 md:py-32 px-6 bg-stone-dark/30 relative">
            <div className="max-w-content mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Intake
                        </motion.span>
                        <motion.h2
                            className="headline-standard mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Seal Your <br />
                            <span className="text-gradient">Authority.</span>
                        </motion.h2>
                        <motion.p
                            className="text-espresso/60 text-[18px] leading-relaxed mb-12 font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            We do not accept applications based on status alone. We curate for psychological depth, group compatibility, and the willingness to engage in high-fidelity growth.
                        </motion.p>

                        <button className="btn-gold group flex items-center gap-3">
                            Begin Admission Process
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                className="glass-card !p-8 !bg-white/60 border-espresso/5 flex items-center gap-8 group hover:!bg-white"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <span className="text-[32px] font-outfit font-bold text-gold/20 group-hover:text-gold transition-colors">
                                    {step.number}
                                </span>
                                <div>
                                    <h4 className="text-espresso font-semibold text-[18px] mb-1">{step.title}</h4>
                                    <p className="text-espresso/40 text-[14px] uppercase tracking-widest font-bold">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
