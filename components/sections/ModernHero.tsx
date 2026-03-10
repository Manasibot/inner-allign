'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
    { src: "/banner1.jpg", alt: "Leadership Banner 1" },
    { src: "/banner2.jpg", alt: "Leadership Banner 2" },
    { src: "/banner3.jpg", alt: "Leadership Banner 3" }
];

export default function ModernHero() {

    const [currentImage, setCurrentImage] = useState(0);

    const { scrollY } = useScroll();

    const parallaxY = useTransform(scrollY, [0, 600], [0, 120]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    return (

        <section className="relative h-[100dvh] flex flex-col px-6 pt-20 md:pt-24 gap-6 md:gap-10 overflow-hidden">

            {/* BACKGROUND SLIDESHOW */}

            {/* BACKGROUND SLIDESHOW */}

            <div className="absolute inset-0 w-full h-full">

                {HERO_IMAGES.map((image, index) => (

                    <motion.img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={false}
                        animate={{
                            opacity: currentImage === index ? 1 : 0,
                            scale: currentImage === index ? 1 : 1.05
                        }}
                        transition={{
                            opacity: { duration: 2 },
                            scale: { duration: 8, ease: "easeOut" }
                        }}
                    />

                ))}

                {/* Purple + Sage overlay */}

                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(123,92,255,0.45),rgba(143,207,154,0.35))]" />

                {/* Light rays */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

                {/* Readability layer */}

                <div className="absolute inset-0 bg-black/35" />

            </div>



            {/* Grain Texture */}

            <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: "url('/grain.png')",
                    backgroundSize: "300px"
                }}
            />


            {/* Content */}

            <div className="max-w-content mx-auto relative z-10 w-full flex-grow flex flex-col lg:grid lg:grid-cols-12 lg:items-center gap-4 lg:gap-12 py-0 min-h-0">

                {/* Left Column */}

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-8 flex flex-col gap-4 md:gap-8 justify-center"
                >

                    <div>

                        {/* <span className="section-label-elegant mb-2 md:mb-4 block text-white/90">
                            AN ELITE LEADERSHIP EXPERIENCE FOR WOMEN
                        </span> */}

                        <h1 className="headline-standard max-w-[800px] text-white">

                            The Inner Alignment Experience:<br />

                            <span className="shine-text">
                                Clarity · Confidence · Influence
                            </span>



                        </h1>

                    </div>


                    <div className="flex flex-col gap-5">

                        <div className="max-w-[540px]">

                            <div className="w-50 h-[2px] bg-gradient-to-r from-[#7B5CFF] to-[#8FCF9A] mb-5" />

                            <p className="text-white text-[20px] leading-snug font-semibold mb-3">
                                When clarity within grows, influence naturally follows.
                            </p>

                            <p className="text-white/80 text-[16px] leading-relaxed">
                                This is not a program for women who are broken. This is a program for women who are already powerful — and who sense, with absolute clarity, that there is more.
                            </p>

                        </div>


                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

                            <motion.button
                                className="bg-gradient-to-r from-[#7B5CFF] to-[#F472B6] text-white px-8 py-3 rounded-full flex items-center gap-3"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{
                                    duration: 1,    // duration of one heartbeat
                                    repeat: Infinity, // repeat forever
                                    repeatDelay: 1,  // wait 1s between beats
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                Reserve Your Seat
                                <ArrowRight size={18} />
                            </motion.button>


                            <div className="flex flex-col justify-center px-1">

                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 block">
                                    Location
                                </span>

                                <span className="text-white font-semibold text-lg">
                                    Dubai
                                </span>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>


            {/* Bottom Stats */}

            <motion.div
                className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-6 pb-6 max-w-content mx-auto w-full mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >

                <div className="flex gap-16 mb-4 md:mb-0">

                    <div>

                        <span className="text-[#8FCF9A] font-bold text-[26px] block">
                            May ‘25
                        </span>

                        <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold mt-2 block">
                            Next Cohort
                        </span>

                    </div>

                    <div>

                        <span className="text-[#F472B6] font-bold text-[26px] block">
                            20
                        </span>

                        <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold mt-2 block">
                            Available Seats
                        </span>

                    </div>

                </div>


                   <div className="relative w-50 flex justify-end">
                    <div className="absolute -rotate-11.25 right-4 -top-7 bg-gradient-to-r from-[#7B5CFF]/80 to-[#F472B6]/80 px-6 py-2 shadow-lg">
                        <p className="text-white/90 text-[11px] leading-relaxed uppercase tracking-widest font-bold whitespace-nowrap">
                            Curated for transformational insight among a high-calibre circle of women leaders.
                        </p>
                    </div>
                </div>

            </motion.div>

        </section>

    );

}
