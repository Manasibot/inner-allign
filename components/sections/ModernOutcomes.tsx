'use client';

import { motion } from 'framer-motion';
import { Waypoints, Leaf, Target, Trees, Share2, Calendar, Microscope, Compass } from 'lucide-react';

export default function ModernOutcomes() {
  const outcomes = [
    {
      icon: <Waypoints className="w-6 h-6" />,
      // title: "Root Map",
      title: "A Complete Root Map",

      // desc: "A Complete Root Map",
      iconAnimation: {
        animate: { rotate: [0, 360, 360, 0], scale: [1, 1.2, 1.2, 1] },
        transition: { duration: 2, ease: "easeInOut", times: [0, 0.3, 0.7, 1], repeat: Infinity, repeatDelay: 3 }
      }
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "A Personal Leadership Mandate",
      // title: "Leadership Mandate",
      // desc: "A Personal Leadership Mandate",
      iconAnimation: {
        animate: { y: [0, -8, 4, 0], rotate: [0, -5, 5, 0] },
        transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }
      }
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "A Stronger Impactful Presence",
      // title: "Presence & Authority",

      // desc: "A Stronger Impactful Presence",
      iconAnimation: {
        animate: { scale: [1, 1.3, 1.3, 1], opacity: [1, 0.8, 1, 1] },
        transition: { duration: 1.5, ease: "easeOut", repeat: Infinity, repeatDelay: 2.5 }
      }
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: "A Personal Brand Architecture",
      // title: "Personal Brand",

      // desc: "A Personal Brand Architecture",
      iconAnimation: {
        animate: { y: [0, -10, 5, 0], scale: [1, 1.1, 1.05, 1] },
        transition: { duration: 2.5, ease: "anticipate", repeat: Infinity, repeatDelay: 2 }
      }
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "A Peer Intelligence Network",
      // title: "Peer Network",

      // desc: "A Peer Intelligence Network",
      iconAnimation: {
        animate: { rotate: [0, 360], scale: [1, 1.2, 1] },
        transition: { duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 2 }
      }
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "A 90-Day Growing Season Plan",
      // title: "90-Day Plan",

      // desc: "A 90-Day Growing Season Plan",
      iconAnimation: {
        animate: { x: [0, 5, -5, 5, 0], rotateY: [0, 180, 180, 0] },
        transition: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }
      }
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      // title: "Psychometric Reports",
      title: "Your Personal Assessment Reports",

      // desc: "Your Personal Assessment Reports",
      iconAnimation: {
        animate: { scale: [1, 1.2, 1.2, 0.9, 1], rotate: [0, 10, -10, 5, 0] },
        transition: { duration: 3.5, ease: "circInOut", repeat: Infinity, repeatDelay: 2 }
      }
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "One Private Coaching Session",
      // title: "One Coaching Session",

      // desc: "One Private Coaching Session",
      iconAnimation: {
        animate: { rotate: [0, 180, 360], scale: [1, 1.1, 1] },
        transition: { duration: 4, ease: "backInOut", repeat: Infinity, repeatDelay: 2 }
      }
    }
  ];


  return (
    <section id="outcomes" className="pt-20 md:pt-22 pb-20 md:pb-32 px-6 bg-[#D1E0D1] relative overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-15">
          <motion.span
            className="section-label-elegant text-[#2e3b2a] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Yield
          </motion.span>
          <motion.h2
            className="headline-standard mb-10 text-[#7aa65c]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            What You <br />
            <span className="text-[#7aa65c]">Leave With.</span>
          </motion.h2>

        </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {outcomes.map((outcome, idx) => (
    <motion.div
      key={outcome.title}
      className="relative glass-card !p-10 transition-all border border-[#A7D477]/30 flex flex-col items-center text-center group rounded-3xl"
      style={{
        background: "linear-gradient(135deg, #D1E0D1 0%, #A7D477 140%)",
        filter: "drop-shadow(0 20px 40px rgba(167,212,119,0.25))"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
    >

      {/* Outer Glow */}
      <div className="absolute inset-0 bg-[#A7D477]/25 blur-3xl rounded-3xl opacity-60 group-hover:opacity-90 transition" />

      {/* Inner Glow */}
      <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_35px_rgba(167,212,119,0.35)]" />

      <motion.div
        className="relative text-[#7aa65c] mb-8 p-3 bg-white/40 rounded-full"
        animate={outcome.iconAnimation.animate}
        transition={outcome.iconAnimation.transition}
      >
        {outcome.icon}
      </motion.div>

      <h3 className="relative text-[20px] font-outfit font-semibold text-[#2e3b2a] mb-4">
        {outcome.title}
      </h3>

      <p className="relative text-[#5d6d55] text-[14px] leading-relaxed font-normal">
        {outcome.desc}
      </p>

    </motion.div>
  ))}
</div>


      </div>
    </section>
  );
}