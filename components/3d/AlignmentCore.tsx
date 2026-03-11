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

    // Sphere opacity is still useful to keep it out of the Hero section
    const sphereOpacity = useTransform(
        smoothScroll,
        [0, 0.05, 0.12],
        [0, 0, 1]
    );

    return (
        <div className="canvas-container overflow-hidden bg-petal flex items-center justify-center pt-20 md:pt-24 fixed inset-0 pointer-events-none">
            {/* 
                Legacy Portrait (woman.png)
                Set to static position with high-quality rendering.
                Using contrast and brightness filters to "pop" the quality.
            */}
            <motion.div
                className="relative w-[70vmin] h-[70vmin] flex items-center justify-center"
                style={{
                    opacity: sphereOpacity,
                }}
            >
                <img
                    src="/woman.png"
                    alt="Legacy Portrait"
                    className="w-full h-full object-contain origin-center mix-blend-multiply opacity-90 contrast-[1.08] brightness-[1.02] saturate-[1.05]"
                    style={{
                        imageRendering: 'crisp-edges'
                    }}
                />
            </motion.div>

            {/* Subtle atmospheric glow to integrate the structure into the site theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-full h-full opacity-[0.1] bg-[radial-gradient(circle_at_center,_var(--color-rose-gold-soft)_0%,_transparent_70%)]" />
            </div>

            {/* Soft architectural fades to bridge sections */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-petal via-transparent to-petal opacity-40" />
        </div>
    );
}
