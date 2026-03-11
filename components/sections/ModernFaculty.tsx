'use client';

import { motion } from 'framer-motion';

export default function ModernFaculty() {
    return (
        <section id="faculty" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 relative overflow-hidden">
            <div className="max-w-content mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-14">
                    <div className="relative">
                        <motion.div
                            className="aspect-[4/5] glass-card overflow-hidden relative group border-primary/5 !bg-neutral-offwhite"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/r_r.png"
                                alt="Ramona Faria Rodrigues"
                                className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blush/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-petal via-transparent to-transparent z-10" />

                            <motion.div
                                className="absolute bottom-6 left-6 right-6 z-20 glass-card !p-6 border-primary/20 !bg-white/90"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex flex-wrap gap-2">
                                    {['Certified Psychometric Analyst', 'Life Coach', 'Image Consultant'].map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-primary border border-primary/20 px-3 py-1.5 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Architectural Grid behind portrait */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/5 rounded-full" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-secondary/10 rounded-full" />
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
                        <motion.h5
                            className="text-[24px] font-bold bg-gradient-to-r from-[#7B5CFF] to-[#F472B6] bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Guiding <br />
                            <span>the Experience</span>
                        </motion.h5>

                        <motion.p
                            className="text-neutral-subheading text-[16px] leading-relaxed mb-12 italic border-l-2 border-primary/20 pl-8 font-normal"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            &quot;Executive presence is not performance—it’s alignment. I help leaders build presence that is confident, credible, and authentic..&quot;
                        </motion.p>

                        <div className="space-y-6">
                            <h4 className="text-neutral-heading font-semibold text-[24px]">Ramona Faria Rodrigues</h4>
                            <p className="text-neutral-subheading/70 text-[14px] leading-relaxed max-w-[500px] font-normal">
                                Ramona Faria Rodrigues excels in creating Transformative Behavioral Learning Solutions. She is a Certified Psychometric Analyst, a Behavioural Trainer, a Life Coach, an Experience Design Consultant, a NLP Practitioner, a Certified Talent Measurement Assessor, and an Image Consultant.                            </p>
                            <p className="text-neutral-subheading/70 text-[14px] leading-relaxed max-w-[500px] font-normal">
                                Her work spans across leading International & Indian Retail brands in diverse lifestyle product domains and has led functions in Fashion Styling, Visual Merchandising, Design and Retail Operations. She is known for her identity-led personal development programs for leaders, cultivating Confidence, Visibility & Influence. She believes in working through an experimental style inspiring people with a blend of creativity, reflective exercises, energetic gamified experiences and clear communication.                            </p>
                            <p className="text-neutral-subheading/70 text-[14px] leading-relaxed max-w-[500px] font-normal">
                                Ramona believes in the R.E.N.E.W. x ALIGN Program as a complete transformational event that leaves women enriched and equipped. Inspiration without architecture produces nothing that lasts. Every element of The Inner Alignment Experience is designed as a deep rooted system: Precisely, with a strong structure, in full knowledge of the climate the tree will eventually need to survive.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
