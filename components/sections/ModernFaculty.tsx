'use client';

import { motion } from 'framer-motion';

export default function ModernFaculty() {
    return (
        <section id="faculty" className="py-20 md:py-32 px-6 relative overflow-hidden">
            <div className="max-w-content mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-16">
                    <div className="relative">
                        <motion.div
                            className="aspect-[4/5] glass-card overflow-hidden relative group border-espresso/5 !bg-stone"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-stone via-transparent to-transparent z-10" />
                            <div className="absolute inset-0 bg-espresso/5 flex items-center justify-center">
                                <span className="text-espresso opacity-5 font-outfit text-[12vw] font-bold italic">IAE</span>
                            </div>

                            <motion.div
                                className="absolute bottom-6 left-6 right-6 z-20 glass-card !p-6 border-gold/20 !bg-white/90"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex flex-wrap gap-2">
                                    {['MSc Architecture', 'Narrative Psychology', 'Systemic Focus'].map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-gold border border-gold/20 px-3 py-1.5 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Architectural Grid behind portrait */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 border border-espresso/5 rounded-full" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-gold/10 rounded-full" />
                    </div>

                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Faculty
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            The <br />
                            <span className="text-gradient">Core Faculty.</span>
                        </motion.h2>
                        <motion.p
                            className="text-espresso/60 text-[18px] leading-relaxed mb-12 italic border-l-2 border-gold/20 pl-8 font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            &quot;The sophisticated leader does not just manage outcomes; they architect the interior terrain that makes those outcomes inevitable.&quot;
                        </motion.p>

                        <div className="space-y-6">
                            <h4 className="text-espresso font-semibold text-[24px]">Elena Vance — Lead Curator</h4>
                            <p className="text-espresso/60 text-[16px] leading-relaxed max-w-[500px] font-light">
                                Elena is an architect and psychometrician known for her work in high-stakes human performance and architectural narrative. Her method focuses on the structural integrity of leadership.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
