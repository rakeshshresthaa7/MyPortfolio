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
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.85, 1, 1, 0.85]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [50, 0, 0, -50]
  );

  const journeySteps = [
    {
      icon: <Heart />,
      title: "The Spark",
      description:
        "Fell in love with design thinking and user-centered problem solving",
      color: "bg-[#FF006B]",
      year: "Beginning",
    },
    {
      icon: <Lightbulb />,
      title: "Learning & Growing",
      description:
        "Mastered Figma, Canva, and frontend technologies to bring designs to life",
      color: "bg-[#FFE500]",
      year: "Journey",
    },
    {
      icon: <Briefcase />,
      title: "Real Impact",
      description:
        "Contributed to real-world projects solving problems for local government and businesses",
      color: "bg-[#00F0FF]",
      year: "Today",
    },
    {
      icon: <GraduationCap />,
      title: "Continuous Growth",
      description:
        "Pursuing BIT at APU while staying curious about edtech and design systems",
      color: "bg-[#B4FF00]",
      year: "Future",
    },
  ];

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-32 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute right-0 top-20 w-64 h-64 bg-[#FFE500]/20 rounded-full blur-3xl"
      />

      <motion.div style={{ opacity, scale, y: contentY }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl uppercase mb-6 inline-block bg-black text-white px-8 py-4 border-8 border-black shadow-[12px_12px_0_0_rgba(255,0,107,1)]">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
            From curiosity to creation — here&apos;s how I became a designer
            who loves solving problems
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black hidden md:block" />

          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`mb-16 flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className="flex-1 md:text-right"
                style={{ textAlign: idx % 2 === 0 ? "right" : "left" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`${step.color} border-6 border-black p-8 shadow-[10px_10px_0_0_rgba(0,0,0,1)] inline-block max-w-md`}
                >
                  <div
                    className="flex items-start gap-4"
                    style={{
                      flexDirection: idx % 2 === 0 ? "row-reverse" : "row",
                    }}
                  >
                    <div className="bg-black border-4 border-black p-4 flex-shrink-0">
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-2 opacity-70">
                        {step.year}
                      </p>
                      <h3 className="text-3xl uppercase mb-3">{step.title}</h3>
                      <p className="text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.3 }}
                className="w-8 h-8 bg-black border-4 border-black rounded-full shadow-[4px_4px_0_0_rgba(255,0,107,1)] flex-shrink-0 z-10 hidden md:block"
              />

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
