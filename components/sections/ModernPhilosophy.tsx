'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Leaf } from "lucide-react";

export default function PhilosophyRoots() {
    const [activeIndex, setActiveIndex] = useState(0);

    const philosophyItems = [
        {
            number: "01",
            title: "Strong Roots Come First",
            subtitle: "The oldest trees did not grow fast. They grew deep.",
            content: "Most high-achieving women have spent their careers building the visible parts — the title, the track record, the reputation. This experience turns the light downward. To the values and beliefs running underneath everything you have built, mostly without your awareness.",
            content2:"When you understand your roots, you stop managing your presence. You simply grow."
        },
        {
            number: "02",
            title: "You Are Not Broken",
            subtitle: "This experience is not for women who are struggling.",
            content: "It is for women who are succeeding — and honest enough to notice that success and fulfilment are not always the same thing. Somewhere in building your career, a version of you got left behind. The one who knew exactly what she believed and how she wanted to lead. This is how you find her again."
        },
        {
            number: "03",
            title: "Three Days to Know Yourself Completely",
            subtitle: "Most leaders operate from assumptions formed years ago",
            content: "About how they come across, where their strengths are, and what others actually experience when they are in the room. That gap between assumption and reality is where influence gets lost. Over three days, you will build something rare: a complete, honest picture of who you are as a leader. Not someone else's version of you."
        }
    ];

    return (
        <section className="relative min-h-[80dvh] flex items-center px-6 bg-[#D1E0D1] overflow-hidden pt-5">
            {/* Floating Leaves Across Entire Section */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden ">

                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-[#7aa65c]"
                        initial={{
                            x: Math.random() * 1200,
                            y: Math.random() * 700,
                            opacity: 0.15,
                            scale: 0.7
                        }}
                        animate={{
                            x: [
                                Math.random() * 1200,
                                Math.random() * 1200,
                                Math.random() * 1200
                            ],
                            y: [
                                Math.random() * 700,
                                Math.random() * 700,
                                Math.random() * 700
                            ],
                            opacity: [0.1, 0.5, 0.1],
                            rotate: [0, 120, 240, 360],
                            scale: [0.7, 1, 0.7]
                        }}
                        transition={{
                            duration: 20 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            filter: "blur(1px)"
                        }}
                    >
                        <Leaf size={32} />
                    </motion.div>
                ))}

            </div>

            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <motion.div
                    className="mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[#7aa65c] text-sm tracking-[0.3em] uppercase mb-4">The Philosophy</p>
                    <h2 className="text-[28px] md:text-[48px] font-light text-[#2e3b2a] leading-[1.1]">
                        The Mastery of <br />
                        <span className="text-[#7aa65c] font-medium">Internal Structure.</span>
                    </h2>
                    <p className="text-[#5d6d55] text-xl max-w-2xl mt-2">
                        True power is not exercised; it is held. We facilitate the transition from effortful leadership to effortless authority.
                    </p>
                </motion.div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-7 lg:gap-25">

                    {/* Left Column - Navigation */}
                    <div className="lg:w-5/12 space-y-4">
                        {philosophyItems.map((item, index) => (
                            <motion.button
                                key={item.number}
                                onClick={() => setActiveIndex(index)}
                                className={`w-full text-left p-5 rounded-2xl transition-all duration-500 relative group cursor-pointer
                                    ${activeIndex === index
                                        ? 'bg-[#A7D477]/20'
                                        : 'hover:bg-[#A7D477]/10'
                                    }`}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 }}
                            >
                                {/* Glow effect when active */}
                                {activeIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-[#A7D477]/40 blur-2xl -z-10"
                                        layoutId="activeGlow"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                                    />
                                )}

                                <div className="relative z-10">
                                    <span className="text-[#7aa65c] text-1xl font-light block mb-3">{item.number}</span>
                                    <h3 className="text-[#2e3b2a] text-2xl font-medium mb-3">{item.title}</h3>
                                    <p className="text-[#5d6d55] text-lg">{item.subtitle}</p>
                                </div>

                                {/* Subtle hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-[#A7D477]/0 group-hover:bg-[#A7D477]/5 transition-colors duration-300" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Column - Leaf-shaped Content */}
                    {/* Right Column - Glow Content */}
                    <div className="lg:w-7/12 relative min-h-[600px] flex items-start justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                className="relative w-full max-w-[520px]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            >

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-[#A7D477]/30 blur-3xl rounded-full scale-110 animate-pulse" />
                                <div className="absolute inset-0 bg-[#A7D477]/20 blur-2xl rounded-full scale-105" />

                                {/* Main Card */}
                                <div
                                    className="relative bg-[#D1E0D1] p-12 rounded-3xl shadow-2xl"
                                    style={{
                                        background: "linear-gradient(135deg, #D1E0D1 0%, #A7D477 150%)",
                                        minHeight: "480px",
                                        filter: "drop-shadow(0 20px 40px rgba(167, 212, 119, 0.3))"
                                    }}
                                >
                                    {/* Inner glow */}
                                    <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(167,212,119,0.35)]" />

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-center space-y-6 text-[#2e3b2a]">

                                        <span className="text-[#7aa65c] text-sm tracking-[0.2em] uppercase">
                                            {philosophyItems[activeIndex].number}
                                        </span>

                                        <h4 className="text-3xl font-medium leading-tight">
                                            {philosophyItems[activeIndex].title}
                                        </h4>

                                        <p className="text-[#5d6d55] text-lg leading-relaxed">
                                            {philosophyItems[activeIndex].content}
                                        </p>

                                    </div>
                                </div>

                                {/* Floating glow particles */}
                                <div className="absolute -inset-10 pointer-events-none">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 bg-[#A7D477] rounded-full"
                                            initial={{
                                                x: Math.random() * 200 - 100,
                                                y: Math.random() * 200 - 100,
                                                opacity: 0.3
                                            }}
                                            animate={{
                                                x: Math.random() * 200 - 100,
                                                y: Math.random() * 200 - 100,
                                                opacity: [0.2, 0.5, 0.2]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.5
                                            }}
                                            style={{ filter: "blur(2px)" }}
                                        />
                                    ))}
                                </div>

                            </motion.div>
                        </AnimatePresence>

                    </div>

                </div>
            </div>
        </section>
    );
}