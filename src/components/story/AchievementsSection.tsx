"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Trophy, Award, Target, Zap } from "lucide-react";
import { useRef } from "react";

export default function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [70, 0, 0, -70]);

  const achievements = [
    { title: "RelayHack x Tumlet", award: "1st Runner-up", project: "Game Design", icon: <Trophy size={32} />, description: "Led UI/UX for game concept with interactive Figma prototypes", color: "bg-[#FF006B]", shine: true },
    { title: "RelayHack x Aqore", award: "1st Runner-up", project: "HR Management System", icon: <Trophy size={32} />, description: "Designed core HR workflows and high-fidelity UI for demo", color: "bg-[#00F0FF]", shine: true },
    { title: "3 Hackathons", award: "Participated", project: "Team Collaboration", icon: <Zap size={32} />, description: "Prototyped solutions under tight deadlines with cross-functional teams", color: "bg-[#FFE500]", shine: false },
  ];

  const stats = [
    { number: "3+", label: "Real Projects", icon: <Target size={18} /> },
    { number: "2X", label: "Runner-up", icon: <Award size={18} /> },
    { number: "100%", label: "Dedication", icon: <Zap size={18} /> },
  ];

  return (
    <section id="achievements" ref={containerRef} className="py-12 md:py-20 lg:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundImage: "linear-gradient(45deg, #FF006B 25%, transparent 25%, transparent 75%, #FF006B 75%, #FF006B)", backgroundSize: "40px 40px" }}
      />

      <motion.div style={{ opacity, scale, y }} className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-14 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl uppercase mb-3 md:mb-6 inline-block bg-black text-white px-4 py-2 md:px-8 md:py-4 border-4 md:border-8 border-black shadow-[6px_6px_0_0_rgba(255,229,0,1)] md:shadow-[12px_12px_0_0_rgba(255,229,0,1)]">
            Achievements
          </h2>
          <p className="text-sm md:text-xl text-gray-600 mt-3 md:mt-8 max-w-2xl mx-auto">
            Winning through collaboration, learning through challenges
          </p>
        </motion.div>

        {/* Stats — always 3 columns */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 mb-6 md:mb-12 lg:mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring" }}
              whileHover={{ scale: 1.06, rotate: 2 }}
              className="bg-white border-4 border-black p-3 md:p-8 text-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <div className="flex justify-center mb-1 md:mb-4">{stat.icon}</div>
              <p className="text-2xl md:text-6xl uppercase mb-0.5 md:mb-2">{stat.number}</p>
              <p className="text-xs md:text-lg uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`${achievement.color} border-4 border-black p-4 md:p-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:shadow-[10px_10px_0_0_rgba(0,0,0,1)] relative overflow-hidden`}
            >
              {achievement.shine && (
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-white/30 rounded-full blur-2xl pointer-events-none"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              <div className="relative z-10">
                <div className="bg-black border-4 border-black p-2 md:p-4 inline-flex mb-3 md:mb-6 shadow-[3px_3px_0_0_rgba(255,255,255,1)] md:shadow-[6px_6px_0_0_rgba(255,255,255,1)]">
                  <div className="text-[#FFE500]">{achievement.icon}</div>
                </div>
                <h3 className="text-base md:text-2xl uppercase mb-1 md:mb-2">{achievement.title}</h3>
                <p className="text-sm md:text-lg mb-2 md:mb-4">{achievement.project}</p>
                <div className="bg-black text-white border-4 border-black px-3 py-1 md:px-6 md:py-3 inline-block mb-2 md:mb-4 uppercase text-xs md:text-base shadow-[2px_2px_0_0_rgba(255,255,255,1)] md:shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                  {achievement.award}
                </div>
                <p className="text-xs md:text-sm leading-relaxed opacity-90">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:mt-14 lg:mt-20 bg-[#B4FF00] border-4 md:border-8 border-black p-5 md:p-10 lg:p-12 shadow-[6px_6px_0_0_rgba(0,0,0,1)] md:shadow-[16px_16px_0_0_rgba(0,0,0,1)]"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-4xl lg:text-5xl uppercase mb-3 md:mb-6">Currently Learning</h3>
            <div className="bg-white border-4 border-black p-4 md:p-8 shadow-[3px_3px_0_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_0_rgba(0,0,0,1)] inline-block w-full md:w-auto">
              <p className="text-base md:text-2xl lg:text-3xl uppercase mb-1 md:mb-2">Bachelor of Information Technology</p>
              <p className="text-sm md:text-xl mb-1 md:mb-4">Asia Pacific University (APU)</p>
              <p className="text-xs md:text-lg opacity-70">2024 – Present</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
