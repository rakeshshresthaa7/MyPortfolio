"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Trophy, Award, Target, Zap } from "lucide-react";
import { useRef } from "react";

export default function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.9, 1, 1, 0.9]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [70, 0, 0, -70]
  );

  const achievements = [
    {
      title: "RelayHack x Tumlet",
      award: "1st Runner-up",
      project: "Game Design",
      icon: <Trophy size={48} />,
      description:
        "Led UI/UX for game concept with interactive Figma prototypes",
      color: "bg-[#FF006B]",
      shine: true,
    },
    {
      title: "RelayHack x Aqore",
      award: "1st Runner-up",
      project: "HR Management System",
      icon: <Trophy size={48} />,
      description: "Designed core HR workflows and high-fidelity UI for demo",
      color: "bg-[#00F0FF]",
      shine: true,
    },
    {
      title: "3 Hackathons",
      award: "Participated",
      project: "Team Collaboration",
      icon: <Zap size={48} />,
      description:
        "Prototyped solutions under tight deadlines with cross-functional teams",
      color: "bg-[#FFE500]",
      shine: false,
    },
  ];

  const stats = [
    { number: "3+", label: "Real Projects", icon: <Target /> },
    { number: "2X", label: "Runner-up", icon: <Award /> },
    { number: "100%", label: "Dedication", icon: <Zap /> },
  ];

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="py-32 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, #FF006B 25%, transparent 25%, transparent 75%, #FF006B 75%, #FF006B)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl uppercase mb-6 inline-block bg-black text-white px-8 py-4 border-8 border-black shadow-[12px_12px_0_0_rgba(255,229,0,1)]">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
            Winning through collaboration, learning through challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white border-6 border-black p-8 text-center shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <motion.p
                className="text-6xl uppercase mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.2 + 0.3,
                  type: "spring",
                  bounce: 0.6,
                }}
              >
                {stat.number}
              </motion.p>
              <p className="text-lg uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`${achievement.color} border-6 border-black p-8 shadow-[10px_10px_0_0_rgba(0,0,0,1)] relative overflow-hidden group`}
            >
              {achievement.shine && (
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="bg-black border-4 border-black p-4 inline-flex mb-6 shadow-[6px_6px_0_0_rgba(255,255,255,1)]"
                >
                  <div className="text-[#FFE500]">{achievement.icon}</div>
                </motion.div>

                <h3 className="text-2xl uppercase mb-2">{achievement.title}</h3>
                <p className="text-lg mb-4">{achievement.project}</p>

                <div className="bg-black text-white border-4 border-black px-6 py-3 inline-block mb-4 shadow-[4px_4px_0_0_rgba(255,255,255,1)] uppercase">
                  {achievement.award}
                </div>

                <p className="text-sm leading-relaxed opacity-90">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-[#B4FF00] border-8 border-black p-12 shadow-[16px_16px_0_0_rgba(0,0,0,1)]"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl uppercase mb-6">Currently Learning</h3>
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] inline-block">
              <p className="text-3xl uppercase mb-2">
                Bachelor of Information Technology
              </p>
              <p className="text-xl mb-4">Asia Pacific University (APU)</p>
              <p className="text-lg opacity-70">2024 – Present</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
