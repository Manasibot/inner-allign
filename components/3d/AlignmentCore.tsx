'use client';

import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function AlignmentCore({ scrollProgress = 0 }: { scrollProgress?: number }) {
    // Stable MotionValue for prop-based scroll
    const scrollMV = useMotionValue(scrollProgress);

    // Sync prop to MotionValue
    useEffect(() => {
        scrollMV.set(scrollProgress);
    }, [scrollProgress, scrollMV]);

    // Spring-smoothed scroll for visual fluidity
    const smoothScroll = useSpring(scrollMV, { stiffness: 100, damping: 30 });

    // Enhanced Parallax effect based on scroll progress
    const yTransform = useTransform(
        smoothScroll,
        [0, 1],
        ['0%', '-20%']
    );

    // Subtle blur on scroll
    const blurAmount = useTransform(
        smoothScroll,
        [0, 1],
        ['blur(0.5px)', 'blur(2px)']
    );

    // Subtle scale expansion on scroll
    const zScale = useTransform(
        smoothScroll,
        [0, 1],
        [1, 1.1]
    );

    // Fade in the sphere after the Hero section (to keep it "removed" from Hero)
    // We start fading in at 5% and reach full opacity by 12% scroll
    const sphereOpacity = useTransform(
        smoothScroll,
        [0, 0.05, 0.12],
        [0, 0, 1]
    );

    return (
        <div className="canvas-container overflow-hidden bg-[#F7F4F0] flex items-center justify-center pt-20 md:pt-24">
            {/* 
                The Radiant Compass (The "Flower" / "Sphere") 
                Using multiply blend mode on a pure white background asset for perfect transparency.
                Opacity set to fade in after the Hero section.
            */}
            <motion.div
                className="relative w-[85vmin] h-[85vmin] flex items-center justify-center pointer-events-none"
                style={{
                    y: yTransform,
                    scale: zScale,
                    filter: blurAmount,
                    opacity: sphereOpacity,
                }}
            >
                <div className="absolute w-[70%] h-[70%] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-[#7B5CFF] via-[#C084FC] to-[#F472B6]" />
                <motion.img
                    src="/tree_goddess.png"
                    alt="The Radiant Compass"
                    className="w-full h-full object-contain origin-center"
                    style={{ opacity: 0.4 }}

                    // Smoother, slower heartbeat pulse
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Subtle depth breathing */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* Subtle atmospheric glow to integrate the structure into the site theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-full h-full opacity-10 animate-pulse bg-[radial-gradient(circle_at_center,_rgba(123,92,255,0.18)
_0%,_transparent_60%)]" />
            </div>

            {/* Soft architectural fades */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#F7F4F0] via-transparent to-[#F7F4F0] opacity-30" />
        </div>
    );
}
