"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Lightbulb, Heart } from "lucide-react";

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [50, 0, 0, -50]);

  const journeySteps = [
    { icon: <Heart />, title: "The Spark", description: "Fell in love with design thinking and user-centered problem solving", color: "bg-[#FF006B]", year: "Beginning" },
    { icon: <Lightbulb />, title: "Learning & Growing", description: "Mastered Figma, Canva, and frontend technologies to bring designs to life", color: "bg-[#FFE500]", year: "Journey" },
    { icon: <Briefcase />, title: "Real Impact", description: "Contributed to real-world projects solving problems for local government and businesses", color: "bg-[#00F0FF]", year: "Today" },
    { icon: <GraduationCap />, title: "Continuous Growth", description: "Pursuing BIT at APU while staying curious about edtech and design systems", color: "bg-[#B4FF00]", year: "Future" },
  ];

  return (
    <section id="journey" ref={containerRef} className="py-12 md:py-20 lg:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <motion.div style={{ y }} className="absolute right-0 top-20 w-32 h-32 md:w-64 md:h-64 bg-[#FFE500]/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div style={{ opacity, scale, y: contentY }} className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-14 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl uppercase mb-3 md:mb-6 inline-block bg-black text-white px-4 py-2 md:px-8 md:py-4 border-4 md:border-8 border-black shadow-[6px_6px_0_0_rgba(255,0,107,1)] md:shadow-[12px_12px_0_0_rgba(255,0,107,1)]">
            My Journey
          </h2>
          <p className="text-sm md:text-xl text-gray-600 mt-3 md:mt-8 max-w-2xl mx-auto px-2">
            From curiosity to creation — here&apos;s how I became a designer who loves solving problems
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black hidden md:block" />

          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`mb-4 md:mb-10 lg:mb-16 flex flex-col md:flex-row items-center gap-3 md:gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${step.color} border-4 md:border-6 border-black p-4 md:p-6 lg:p-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:shadow-[10px_10px_0_0_rgba(0,0,0,1)] w-full md:inline-block md:max-w-md ${idx % 2 === 0 ? "md:ml-auto" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-black border-2 md:border-4 border-black p-2 md:p-3 flex-shrink-0">
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1 opacity-70">{step.year}</p>
                      <h3 className="text-lg md:text-2xl lg:text-3xl uppercase mb-1 md:mb-3">{step.title}</h3>
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.3 }}
                className="w-6 h-6 md:w-8 md:h-8 bg-black border-4 border-black rounded-full shadow-[4px_4px_0_0_rgba(255,0,107,1)] flex-shrink-0 z-10 hidden md:block"
              />
              <div className="hidden md:block md:flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
