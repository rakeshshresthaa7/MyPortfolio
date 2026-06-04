"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Lightbulb, Heart, type LucideProps } from "lucide-react";

type IconKey = "heart" | "lightbulb" | "briefcase" | "graduation";

function StepIcon({ iconKey, ...props }: { iconKey: IconKey } & LucideProps) {
  switch (iconKey) {
    case "heart":       return <Heart {...props} />;
    case "lightbulb":  return <Lightbulb {...props} />;
    case "briefcase":  return <Briefcase {...props} />;
    case "graduation": return <GraduationCap {...props} />;
  }
}

const journeySteps: { iconKey: IconKey; title: string; description: string; color: string; year: string }[] = [
  { iconKey: "heart",      title: "The Spark",               description: "Fell in love with design thinking and user-centered problem solving",                                                                                           color: "bg-[#FF006B]", year: "Beginning"    },
  { iconKey: "lightbulb",  title: "Figma Basics",            description: "Completed Figma fundamentals in 1st semester — mastered frames, components, and basic prototyping to start building real designs",                              color: "bg-[#FFE500]", year: "1st Semester" },
  { iconKey: "lightbulb",  title: "Advanced Design",         description: "Levelled up in 2nd semester with advanced Figma — design systems, auto layout, complex prototypes, and UX research methods",                                   color: "bg-[#00F0FF]", year: "2nd Semester" },
  { iconKey: "briefcase",  title: "Internship @ MSP Solution", description: "Joined MSP Solution in 3rd semester as a UI/UX design intern — contributed to real products including the e-Suchana grievance platform",                   color: "bg-[#B4FF00]", year: "3rd Semester" },
  { iconKey: "graduation", title: "Continuous Growth",       description: "Pursuing BIT at APU while staying curious about edtech and design systems",                                                                                    color: "bg-[#FF006B]", year: "Future"       },
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y        = useTransform(scrollYProgress, [0, 1],              [100, -100]);
  const opacity  = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale    = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [50, 0, 0, -50]);

  return (
    <section id="journey" ref={containerRef} className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
      <motion.div style={{ y }} className="absolute right-0 top-20 w-48 h-48 bg-[#FFE500]/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div style={{ opacity, scale, y: contentY }} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl uppercase mb-4 inline-block bg-black text-white px-6 py-3 border-8 border-black shadow-[8px_8px_0_0_rgba(255,0,107,1)]">
            My Journey
          </h2>
          <p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">
            From curiosity to creation — here&apos;s how I became a designer who loves solving problems
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black hidden md:block" />

          {journeySteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`mb-10 flex flex-col items-center gap-6 md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`${step.color} border-4 border-black p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] inline-block max-w-sm`}
                  >
                    <div className={`flex items-start gap-3 ${isEven ? "flex-row-reverse" : "flex-row"}`}>
                      <div className="bg-black border-2 border-black p-2.5 flex-shrink-0">
                        <StepIcon iconKey={step.iconKey} size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide mb-1 opacity-70">{step.year}</p>
                        <h3 className="text-xl uppercase mb-2">{step.title}</h3>
                        <p className="text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="w-5 h-5 bg-black border-4 border-black rounded-full shadow-[3px_3px_0_0_rgba(255,0,107,1)] flex-shrink-0 z-10 hidden md:block"
                />

                <div className="hidden md:block md:flex-1" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
