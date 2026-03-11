'use client';

import { motion } from 'framer-motion';
import { Waypoints, Leaf, Target, Trees, Share2, Calendar, Microscope, Compass } from 'lucide-react';

export default function ModernOutcomes() {
    const outcomes = [
        {
            icon: <Waypoints className="w-6 h-6" />,
            title: "A Complete Root Map",
            desc: "The clearest, most honest picture of yourself you have ever had. Who you are, what drives you, what holds you back, and where your real strengths live."
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "A Personal Leadership Mandate",
            desc: "A formal, one-page written declaration of who you are as a leader, what you stand for, and the specific impact you are committing to"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Somatic & Cultural Authority",
            desc: "Embodied practices that create consistent executive presence across cultural geographies — London, Lagos, Singapore"
        },
        {
            icon: <Trees className="w-6 h-6" />,
            title: "A Personal Brand Architecture",
            desc: "Three to four precise qualities that define your professional presence, and a visibility strategy for every platform"
        },
        {
            icon: <Share2 className="w-6 h-6" />,
            title: "A Peer Intelligence Network",
            desc: "Entry into a lifelong cohort of equally accomplished, equally committed women"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "A 90-Day Growing Season Plan",
            desc: "A personalised post-workshop roadmap with built-in accountability and community support"
        },
        {
            icon: <Microscope className="w-6 h-6" />,
            title: "Your Personal Assessment Reports",
            desc: "Every insight uncovered during the experience is documented and yours to keep. A complete set of personalised reports from every assessment used — yours to revisit."
        },
        {
            icon: <Compass className="w-6 h-6" />,
            title: "One Private Coaching Session",
            desc: "A complimentary individual session with the lead facilitator, within 90 days of the program"
        }
    ];

    return (
        <section id="outcomes" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 bg-petal relative overflow-hidden">
            {/* Architectural Background Elements (Matched with Section 3) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-plum) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] border border-plum/5 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] border border-rose-gold/10 rounded-full translate-y-1/3 translate-x-1/4 pointer-events-none" />

            <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-plum/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/5 to-transparent pointer-events-none" />

            <div className="max-w-content mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
                    <div>
                        <motion.span
                            className="section-label-elegant"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            Eight Outcomes. Each One Precise. None Aspirational.
                        </motion.span>
                        <motion.h2
                            className="headline-standard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            What You <br />
                            <span className="text-gradient">Leave With.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-plum/60 text-[20px] leading-relaxed max-w-[500px] font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        These are the specific, documented results that the structure of this program is designed to produce.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((outcome, idx) => (
                        <motion.div
                            key={outcome.title}
                            className="glass-card !p-8 !bg-white/50 hover:!bg-white/80 transition-all border-plum/5 flex flex-col items-center text-center h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="text-sage mb-6 p-4 bg-sage/5 rounded-full shrink-0">
                                {outcome.icon}
                            </div>
                            <h3 className="text-[18px] font-garamond font-medium text-plum mb-3 leading-snug">
                                {outcome.title}
                            </h3>
                            <p className="text-plum/60 text-[14px] leading-relaxed font-light mt-auto">
                                {outcome.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Transformational Quote - Synchronized with Standard */}
                <motion.div
                    className="max-w-[1000px] mx-auto text-center mt-20 md:mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <div className="w-full h-[1px] bg-plum/5 mb-10 md:mb-12" />
                    <p
                        className="italic leading-snug"
                        style={{
                            fontFamily: 'var(--font-garamond)',
                            fontSize: '26px',
                            color: 'var(--color-plum)'
                        }}
                    >
                        &ldquo;These are not promises. They are the documented results of the structure you are about to enter.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
