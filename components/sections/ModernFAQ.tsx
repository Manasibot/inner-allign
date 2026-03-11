'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ModernFAQ() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleFaq = (idx: number) => {
        setExpandedId(prev => prev === idx ? null : idx);
    };

    const faqs = [
        {
            question: "Who exactly is this experience designed for?",
            answer: "This experience is designed for women between 28 and 45 who are already operating at a high professional level — founders, executives, board members, senior leaders, and women at a significant inflection point in their careers. The common thread is not industry or title. It is this: she has built something substantial, and she senses that the version of herself who built it is no longer the version she needs to become. If you are looking for foundational confidence skills or introductory leadership tools, this is not the right room. If you are looking for the most precise, rigorous examination of your leadership identity you have ever experienced, it is."
        },
        {
            question: "I have done leadership programs before. How is this different?",
            answer: "Most leadership programs deliver content. This one delivers cartography. The distinction matters. You will not leave with a notebook full of frameworks someone else designed. You will leave with a complete, scientifically grounded map of your own — your identity architecture, your leadership wiring, the gap between how you perceive yourself and how your ecosystem actually experiences you, and a personal mandate written in your own words. The ALIGN Framework™ is not a curriculum. It is a precision instrument applied specifically to you."
        },
        {
            question: "I am a private person. How much am I expected to share with the group?",
            answer: "As much as you choose. The experience is designed for depth, and the cohort is deliberately small — 20 women maximum — precisely so that trust forms quickly and the conditions for genuine honesty exist. But no one is asked to perform vulnerability or share beyond their comfort. What we have found, consistently, is that by the end of Day 1, the question of how much to share has answered itself. The room earns it. That said, the experience rewards those who engage fully, and the pre-work is designed to help you arrive already knowing what you most need from the three days."
        },
        {
            question: "What is the cohort size and how are participants selected?",
            answer: "The cohort is capped at 20 participants. This is not a marketing decision — it is a structural one. The mycelium dynamic that makes this experience transformative requires a room small enough for genuine intimacy and large enough for meaningful diversity of perspective. Applications are reviewed individually. We are looking for professional accomplishment, readiness for deep engagement, and complementarity within the cohort as a whole. We occasionally decline applications from women who are highly accomplished but not yet ready for the particular depth this experience requires — and we will tell you honestly if that is the case."
        },
        {
            question: "Where does the experience take place and what is included?",
            answer: "The experience takes place in a curated private venue — not a hotel conference room. Location and venue details are shared with confirmed participants during onboarding. The program fee covers all sessions, your full psychometric assessment suite and personalised reports, all materials, catering across the three days, the two evening experiences (the Root Table dinner and the Fireside Conversation), and your 90-day post-program architecture. Travel and accommodation are arranged independently by participants. We provide venue-specific accommodation recommendations upon confirmation."
        },
        {
            question: "How much time should I set aside and what should I expect physically and mentally?",
            answer: "Expect to be fully present for three complete days — mornings from 8:30am, closing each evening after the structured evening experience. This is not a passive experience. You will be thinking deeply, engaging with peer dialogue, receiving substantive psychometric feedback, and doing written work across all three days. Most participants describe Day 2 as the most demanding — emotionally and intellectually. They also describe it as the most valuable. We ask that you protect these three days with the same rigour you would protect a board meeting. Partial attendance is not possible."
        },
        {
            question: "What is the investment and is there a payment plan?",
            answer: "The full program investment, including all psychometric instruments, three days of facilitation, the 90-day post-program architecture, and Alumni Network access, is shared during the application process. We do not publish the fee on the landing page — not because it is a secret, but because we prefer to share it in the context of a conversation about fit. If the investment is the primary factor in your decision before fit has been assessed, this is likely not the right moment for this experience. Payment plans are available and can be discussed during the exploratory conversation."
        },
        {
            question: "I am interested but not sure I am ready. What should I do?",
            answer: "Apply anyway, and say exactly that in your application. \"Not sure I am ready\" is almost always the sign of someone who is precisely ready — and who has the self-awareness to know that what is coming will require something of her. The exploratory conversation exists partly for this reason: it is not an interview. It is a mutual assessment of whether this is the right moment, the right room, and the right investment of your time and energy. If it is not — we will tell you, and we will tell you what we think would make it so."
        }
    ];

    const leftColumn = faqs.slice(0, 4);
    const rightColumn = faqs.slice(4);

    return (
        <section id="faq" className="pt-12 md:pt-20 pb-12 md:pb-20 px-6 relative bg-blush/30 overflow-hidden">
            {/* Architectural Grid Underlay (Matching Section 2) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--color-plum) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            {/* Subtle background flourishes */}
            <div className="absolute top-1/4 right-0 w-64 h-64 border border-plum/5 rounded-full translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 border border-rose-gold/10 rounded-full -translate-x-1/2 pointer-events-none" />

            <div className="max-w-content mx-auto relative z-10">
                <div className="mb-10 md:mb-16">
                    <motion.span
                        className="section-label-elegant"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Inquiry
                    </motion.span>
                    <motion.h2
                        className="headline-standard"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Frequently Asked <br />
                        <span className="text-gradient">Questions.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {leftColumn.map((faq, idx) => {
                            const isExpanded = expandedId === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    className="glass-card group !bg-white/70 border-rose-gold/10 hover:border-rose-gold/30 transition-all duration-500"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <h3 className="text-[18px] md:text-[20px] font-garamond font-medium text-plum pr-8 transition-colors group-hover:text-rose-gold leading-tight">
                                            {faq.question}
                                        </h3>
                                        <div className="shrink-0 mt-1 text-rose-gold/50 group-hover:text-rose-gold transition-colors">
                                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="w-12 h-[1px] bg-rose-gold/30 mt-6 mb-6" />
                                                <p className="text-plum/70 leading-relaxed text-[15px] md:text-[16px] font-light">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {rightColumn.map((faq, idx) => {
                            const faqIdx = idx + 4;
                            const isExpanded = expandedId === faqIdx;
                            return (
                                <motion.div
                                    key={faqIdx}
                                    className="glass-card group !bg-white/70 border-rose-gold/10 hover:border-rose-gold/30 transition-all duration-500"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: faqIdx * 0.1, duration: 0.8 }}
                                >
                                    <button
                                        onClick={() => toggleFaq(faqIdx)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <h3 className="text-[18px] md:text-[20px] font-garamond font-medium text-plum pr-8 transition-colors group-hover:text-rose-gold leading-tight">
                                            {faq.question}
                                        </h3>
                                        <div className="shrink-0 mt-1 text-rose-gold/50 group-hover:text-rose-gold transition-colors">
                                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="w-12 h-[1px] bg-rose-gold/30 mt-6 mb-6" />
                                                <p className="text-plum/70 leading-relaxed text-[15px] md:text-[16px] font-light">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
