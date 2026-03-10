'use client';

import { motion } from 'framer-motion';
import { Waypoints, Leaf, Target, Trees, Share2, Calendar, Microscope, Compass } from 'lucide-react';

export default function ModernOutcomes() {
 const outcomes = [
  {
    icon: <Waypoints className="w-6 h-6" />,
    title: "Root Map",
    desc: "A clear picture of your strengths, values, and tendencies.",
    iconAnimation: {
      animate: { rotate: [0, 360, 360, 0], scale: [1, 1.2, 1.2, 1] },
      transition: { duration: 2, ease: "easeInOut", times: [0, 0.3, 0.7, 1], repeat: Infinity, repeatDelay: 3 }
    }
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Leadership Mandate",
    desc: "A one-page statement of your leadership purpose and impact.",
    iconAnimation: {
      animate: { y: [0, -8, 4, 0], rotate: [0, -5, 5, 0] },
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }
    }
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Presence & Authority",
    desc: "How you show confidence and adapt to different cultures.",
    iconAnimation: {
      animate: { scale: [1, 1.3, 1.3, 1], opacity: [1, 0.8, 1, 1] },
      transition: { duration: 1.5, ease: "easeOut", repeat: Infinity, repeatDelay: 2.5 }
    }
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: "Personal Brand",
    desc: "Your top qualities and a clear visibility plan.",
    iconAnimation: {
      animate: { y: [0, -10, 5, 0], scale: [1, 1.1, 1.05, 1] },
      transition: { duration: 2.5, ease: "anticipate", repeat: Infinity, repeatDelay: 2 }
    }
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Peer Network",
    desc: "Join a community of committed, high-achieving women.",
    iconAnimation: {
      animate: { rotate: [0, 360], scale: [1, 1.2, 1] },
      transition: { duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 2 }
    }
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "90-Day Plan",
    desc: "A clear roadmap with support and accountability.",
    iconAnimation: {
      animate: { x: [0, 5, -5, 5, 0], rotateY: [0, 180, 180, 0] },
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }
    }
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Psychometric Reports",
    desc: "Personalized reports from leadership and personality assessments.",
    iconAnimation: {
      animate: { scale: [1, 1.2, 1.2, 0.9, 1], rotate: [0, 10, -10, 5, 0] },
      transition: { duration: 3.5, ease: "circInOut", repeat: Infinity, repeatDelay: 2 }
    }
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "One Coaching Session",
    desc: "A private session with the lead facilitator within 90 days.",
    iconAnimation: {
      animate: { rotate: [0, 180, 360], scale: [1, 1.1, 1] },
      transition: { duration: 4, ease: "backInOut", repeat: Infinity, repeatDelay: 2 }
    }
  }
];


  return (
    <section id="outcomes" className="pt-20 md:pt-32 pb-20 md:pb-32 px-6 bg-neutral-background2/50 relative overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-24">
          <motion.span
            className="section-label-elegant"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Yield
          </motion.span>
          <motion.h2
            className="headline-standard mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Elite <br />
            <span className="text-gradient">Outcomes.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.title}
              className="glass-card !p-10 !bg-white/90 hover:!bg-white transition-all border-primary/5 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div 
                className="text-primary mb-8 p-3 bg-primary/5 rounded-full"
                animate={outcome.iconAnimation.animate}
                transition={outcome.iconAnimation.transition}
              >
                {outcome.icon}
              </motion.div>
              <h3 className="text-[20px] font-outfit font-semibold text-neutral-heading mb-4">
                {outcome.title}
              </h3>
              <p className="text-neutral-subheading/70 text-[14px] leading-relaxed font-normal">
                {outcome.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}