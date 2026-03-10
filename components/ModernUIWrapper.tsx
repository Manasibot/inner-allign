'use client';

import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AlignmentCore from './3d/AlignmentCore';

gsap.registerPlugin(ScrollTrigger);

export default function ModernUIWrapper({ children }: { children: React.ReactNode }) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Track scroll progress for the 3D scene
        const st = ScrollTrigger.create({
            start: 0,
            end: 'bottom bottom',
            onUpdate: (self) => {
                setScrollProgress(self.progress);
            }
        });

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            st.kill();
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-neutral-offwhite overflow-x-hidden">
            {/* Fixed 3D Layer */}
            <AlignmentCore scrollProgress={scrollProgress} />

            {/* Grain Overlay for Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
