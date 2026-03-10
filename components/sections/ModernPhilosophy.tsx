'use client';

import { motion } from "framer-motion";

export default function PhilosophyRoots() {

    const pillars = [
        {
            title: "Intelligent Foundations",
            text: "Powerful systems grow from invisible structure."
        },
        {
            title: "Innate Influence",
            text: "Leadership expands when identity aligns."
        },
        {
            title: "Inner Cartography",
            text: "Your inner architecture determines your external impact."
        }
    ];

    return (

        <section className="relative py-50 px-6 bg-[#D1E0D1] overflow-hidden">

            <div className="max-w-[1100px] mx-auto text-center relative">

                {/* Headline */}

                <motion.h2
                    className="text-[48px] md:text-[60px] font-light text-[#2e3b2a] mb-32"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    Inner Structure <br />

                    <span className="text-[#7aa65c]">
                        Creates Outer Power
                    </span>

                </motion.h2>


                {/* ROOTS SVG */}

                <svg
                    className="absolute left-0 right-0 mx-auto top-[140px] w-full h-[220px]"
                    viewBox="0 0 1000 220"
                    fill="none"
                >

                    {/* root 1 */}

                    <motion.path
                        d="M500 0 C400 80 320 120 200 200"
                        stroke="#A7D477"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                        style={{
                            filter: "drop-shadow(0px 0px 6px #A7D477)"
                        }}
                    />

                    {/* root 2 */}

                    <motion.path
                        d="M500 0 C500 100 500 140 500 200"
                        stroke="#A7D477"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        style={{
                            filter: "drop-shadow(0px 0px 6px #A7D477)"
                        }}
                    />

                    {/* root 3 */}

                    <motion.path
                        d="M500 0 C600 80 720 120 820 200"
                        stroke="#A7D477"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.6 }}
                        style={{
                            filter: "drop-shadow(0px 0px 6px #A7D477)"
                        }}
                    />

                </svg>


                {/* Pillars */}

                <div className="grid md:grid-cols-3 gap-10 relative mt-20">

                    {pillars.map((pillar, index) => (

                        <motion.div
                            key={pillar.title}
                            className="relative text-center px-6 py-10"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >

                            {/* glow */}

                            <div className="absolute inset-0 rounded-2xl bg-[#A7D477]/50 blur-2xl opacity-100" />

                            <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-[#A7D477]/100">

                                <h3 className="text-[20px] font-semibold text-[#4f6b42] mb-4">
                                    {pillar.title}
                                </h3>

                                <p className="text-[#5d6d55] leading-relaxed text-[16px]">
                                    {pillar.text}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}
