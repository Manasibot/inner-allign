'use client';

import { motion } from 'framer-motion';
import { Linkedin, Globe, Instagram } from 'lucide-react';

export default function ModernFaculty() {
    return (
        <section id="faculty" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 bg-petal relative overflow-hidden">
            {/* Architectural Background Elements (Matched with Section 3) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-plum) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] border border-plum/5 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] border border-rose-gold/10 rounded-full translate-y-1/3 translate-x-1/4 pointer-events-none" />

            <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-plum/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/5 to-transparent pointer-events-none" />

            <div className="max-w-content mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* LEFT COLUMN — Portrait + Name */}
                    <div className="relative">
                        <motion.div
                            className="aspect-[4/5] glass-card overflow-hidden relative group border-plum/5 !bg-petal"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            {/* Faculty Image */}
                            <img
                                src="/Ramona Rodrigues.png"
                                alt="Ramona Faria Rodrigues"
                                className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blush/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-petal via-transparent to-transparent z-10" />

                            {/* Credential strip inside image */}
                            <motion.div
                                className="absolute bottom-6 left-6 right-6 z-20 glass-card !p-5 border-rose-gold/20 !bg-white/95"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <p className="text-rose-gold text-[12px] font-garamond tracking-wide text-center italic flex items-center justify-center gap-2">
                                    <span>Certified Psychometric Analyst</span>
                                    <span className="text-plum text-[20px] not-italic leading-none flex items-center">·</span>
                                    <span>Behavioural Trainer</span>
                                    <span className="text-plum text-[20px] not-italic leading-none flex items-center">·</span>
                                    <span>NLP Practitioner</span>
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Architectural Grid behind portrait */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 border border-plum/5 rounded-full" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-rose-gold/10 rounded-full" />
                    </div>

                    {/* RIGHT COLUMN — Content */}
                    <div>
                        {/* 1. Section Label */}
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            The Faculty
                        </motion.span>

                        {/* 2. Pre-heading */}
                        <motion.p
                            className="text-rose-gold text-[14px] uppercase tracking-[0.2em] font-bold mb-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Guiding the Experience
                        </motion.p>

                        {/* 3. Name */}
                        <motion.h2
                            className="headline-standard mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Ramona <br />
                            <span className="text-gradient">Faria Rodrigues</span>
                        </motion.h2>

                        {/* Social Links — Premium Architectural Style */}
                        <div className="flex items-center gap-5 mb-10">
                            {[
                                { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramona-rodrigues-58700811/' },
                                { icon: <Globe size={18} />, label: 'Website', href: 'https://itshalftime.in/' },
                                { icon: <Instagram size={18} />, label: 'Instagram', href: 'https://www.instagram.com/itshalftime4life/#' }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-rose-gold/30 bg-white/5 text-rose-gold hover:text-white hover:bg-rose-gold hover:border-rose-gold transition-all duration-300 relative group shadow-sm shadow-rose-gold/5"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    aria-label={social.label}
                                >
                                    <div className="absolute inset-0 rounded-full bg-rose-gold/20 scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl opacity-0 group-hover:opacity-60" />
                                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                        {social.icon}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* 4. Credential Bar */}
                        <motion.div
                            className="flex items-center gap-4 py-3 px-5 bg-rose-gold/5 border border-rose-gold/20 rounded-full mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-rose-gold text-[12px] uppercase tracking-widest font-bold">
                                Certified Psychometric Analyst  ·  NLP Practitioner  ·  Behavioural Trainer
                            </span>
                        </motion.div>

                        {/* 5. Philosophy Paragraph */}
                        <motion.p
                            className="text-plum/60 text-[14px] leading-[1.8] mb-8 italic border-l-2 border-rose-gold/20 pl-6 font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            &ldquo;I do not believe in transformational experiences that leave women inspired but unequipped. Inspiration without architecture produces nothing that lasts. Every element of The Inner Alignment Experience is designed the way I design a root system: precisely, with the end structure in mind, in full knowledge of the climate the tree will eventually need to survive.&rdquo;
                        </motion.p>

                        {/* 6. Career Paragraph */}
                        <motion.p
                            className="text-plum/60 text-[16px] leading-[1.7] mb-10 font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Ramona Faria Rodrigues is a Learning & Development professional and an Experience Design Consultant who excels in creating Learning Solutions, Content and Training Delivery. She is a Certified Psychometric Analyst, a Behavioural Trainer, an NLP Practitioner, a Certified Talent Measurement Assessor, and an Image Consultant.
                        </motion.p>

                        {/* 7. Credential Tags */}
                        <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            {[
                                'Learning Solutions',
                                'NLP Practitioner',
                                'Psychometric Analyst',
                                'Behavioural Trainer',
                                'Image Consultant',
                                'Talent Measurement Assessor',
                                'Experience Design Consultant'
                            ].map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-rose-gold border border-rose-gold/20 px-3 py-1.5 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}
