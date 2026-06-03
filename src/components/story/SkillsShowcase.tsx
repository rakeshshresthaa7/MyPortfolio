"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Layers, Code, Palette, Users } from "lucide-react";

export default function SkillsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -60]);
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    { title: "Design Craft", icon: <Palette size={20} />, color: "bg-[#FFE500]", skills: ["User Flows", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture", "Design Systems", "Mobile-first Design"], description: "Creating intuitive experiences that users love" },
    { title: "Tools & Tech", icon: <Layers size={20} />, color: "bg-[#00F0FF]", skills: ["Figma (Advanced)", "Canva (Advanced)", "Auto Layout", "Components & Variants", "Google Workspace", "Notion", "GitHub"], description: "Mastering the tools that bring ideas to life" },
    { title: "Development", icon: <Code size={20} />, color: "bg-[#B4FF00]", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"], description: "Bridging design and code for seamless implementation" },
    { title: "Soft Skills", icon: <Users size={20} />, color: "bg-[#FF006B]", skills: ["Communication", "Collaboration", "Problem-solving", "Attention to detail", "Adaptability"], description: "Working with teams to deliver impact" },
  ];

  return (
    <section id="skills" ref={containerRef} className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative">
      <motion.div style={{ opacity, scale, y: contentY }} className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl uppercase mb-4 inline-block bg-black text-white px-6 py-3 border-8 border-black shadow-[8px_8px_0_0_rgba(180,255,0,1)]">
            What I Bring
          </h2>
          <p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">
            A blend of design thinking, technical skills, and collaborative spirit
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {skillCategories.map((category, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2.5 border-4 border-black uppercase flex flex-col sm:flex-row items-center justify-center gap-1.5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all text-xs ${activeCategory === idx ? category.color : "bg-white"}`}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${skillCategories[activeCategory].color} border-8 border-black p-6 md:p-8 shadow-[10px_10px_0_0_rgba(0,0,0,1)]`}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl uppercase mb-2">{skillCategories[activeCategory].title}</h3>
            <p className="text-sm mb-5 opacity-80">{skillCategories[activeCategory].description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.07, type: "spring" }}
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="bg-white border-4 border-black p-2.5 text-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] cursor-pointer"
                >
                  <p className="uppercase text-xs">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
