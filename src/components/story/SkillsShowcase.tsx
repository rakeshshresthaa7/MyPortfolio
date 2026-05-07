"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Layers, Code, Palette, Users } from "lucide-react";

export default function SkillsShowcase() {
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
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [60, 0, 0, -60]
  );

  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Design Craft",
      icon: <Palette size={32} />,
      color: "bg-[#FFE500]",
      skills: [
        "User Flows",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Information Architecture",
        "Design Systems",
        "Mobile-first Design",
      ],
      description: "Creating intuitive experiences that users love",
    },
    {
      title: "Tools & Tech",
      icon: <Layers size={32} />,
      color: "bg-[#00F0FF]",
      skills: [
        "Figma (Advanced)",
        "Canva (Advanced)",
        "Auto Layout",
        "Components & Variants",
        "Google Workspace",
        "Notion",
        "GitHub",
      ],
      description: "Mastering the tools that bring ideas to life",
    },
    {
      title: "Development",
      icon: <Code size={32} />,
      color: "bg-[#B4FF00]",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      description: "Bridging design and code for seamless implementation",
    },
    {
      title: "Soft Skills",
      icon: <Users size={32} />,
      color: "bg-[#FF006B]",
      skills: [
        "Communication",
        "Collaboration",
        "Problem-solving",
        "Attention to detail",
        "Adaptability",
      ],
      description: "Working with teams to deliver impact",
    },
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative"
    >
      <motion.div style={{ opacity, scale, y: contentY }} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl uppercase mb-6 inline-block bg-black text-white px-8 py-4 border-8 border-black shadow-[12px_12px_0_0_rgba(180,255,0,1)]">
            What I Bring
          </h2>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
            A blend of design thinking, technical skills, and collaborative
            spirit
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-4 border-4 border-black uppercase flex items-center gap-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all ${
                activeCategory === idx ? category.color : "bg-white"
              }`}
            >
              {category.icon}
              <span className="hidden md:inline">{category.title}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`${skillCategories[activeCategory].color} border-8 border-black p-12 shadow-[16px_16px_0_0_rgba(0,0,0,1)]`}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-6xl uppercase mb-4">
              {skillCategories[activeCategory].title}
            </h3>
            <p className="text-xl mb-8 opacity-80">
              {skillCategories[activeCategory].description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white border-4 border-black p-4 text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer"
                >
                  <p className="uppercase text-sm md:text-base">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
