"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Smartphone, Monitor, Globe } from "lucide-react";
import { useRef } from "react";

export default function ProjectsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [80, 0, 0, -80]);

  const projects = [
    {
      title: "Gunasho (e Suchana)", category: "Gov-Tech Platform", type: "Web + Mobile",
      icon: <Smartphone size={18} />,
      tagline: "Empowering citizens to report local issues",
      description: "Redesigned a digital grievance platform for local government, creating intuitive user flows for complaint submission and tracking.",
      impact: ["Mobile-first design", "Clear navigation", "Real-time tracking"],
      color: "bg-[#FFE500]", status: "In Development",
    },
    {
      title: "BigAI Portfolio", category: "Corporate Website", type: "Web",
      icon: <Monitor size={18} />,
      tagline: "Showcasing AI innovation through design",
      description: "Designed a complete company portfolio site with emphasis on services, case studies, and brand identity.",
      impact: ["Consistent design system", "Responsive layouts", "Developer-friendly handoff"],
      color: "bg-[#FF006B]", status: "In Development",
    },
    {
      title: "E Library System", category: "Education Platform", type: "Web App",
      icon: <Globe size={18} />,
      tagline: "Making library management effortless",
      description: "End-to-end UX design for book management, borrowing workflows, and admin dashboards.",
      impact: ["Interactive prototypes", "Admin dashboards", "User-tested flows"],
      color: "bg-[#00F0FF]", status: "In Development",
    },
  ];

  const practiceProjects = [
    { name: "Food Ordering Platform", description: "Group UI/UX project with clickable prototypes", link: "https://www.figma.com/design/Zk8LqxH6GCROx7vgHNLclv/UIUX-advance-project?node-id=0-1&t=DaDSqyzBUYz6RXTD-1", color: "bg-[#B4FF00]" },
    { name: "AAC Bricks Website", description: "Company website with improved information architecture", link: "https://www.figma.com/design/MkjBV1DBvF9ynoBkzNOjr3/AAC-Bricks?node-id=0-1&t=36Qx4bHNTK4RTGoi-1", color: "bg-[#FFE500]" },
  ];

  return (
    <section id="projects" ref={containerRef} className="py-12 md:py-20 lg:py-32 px-4 md:px-8 bg-white relative">
      <motion.div style={{ opacity, scale, y }} className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-14 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl uppercase mb-3 md:mb-6 inline-block bg-black text-white px-4 py-2 md:px-8 md:py-4 border-4 md:border-8 border-black shadow-[6px_6px_0_0_rgba(0,240,255,1)] md:shadow-[12px_12px_0_0_rgba(0,240,255,1)]">
            Featured Work
          </h2>
          <p className="text-sm md:text-xl text-gray-600 mt-3 md:mt-8 max-w-2xl mx-auto">
            Real projects solving real problems for real users
          </p>
        </motion.div>

        {/* Main projects */}
        <div className="space-y-5 md:space-y-10 lg:space-y-12 mb-10 md:mb-16 lg:mb-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className={`${project.color} border-4 md:border-8 border-black p-4 md:p-8 lg:p-12 shadow-[6px_6px_0_0_rgba(0,0,0,1)] md:shadow-[12px_12px_0_0_rgba(0,0,0,1)]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-black border-2 md:border-4 border-black p-2 md:p-4 flex-shrink-0">
                      <div className="text-white">{project.icon}</div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide opacity-70 mb-0.5">{project.category}</p>
                      <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase leading-tight">{project.title}</h3>
                      <p className="text-xs md:text-xl mt-1 opacity-90 italic">&quot;{project.tagline}&quot;</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-lg leading-relaxed mb-3 md:mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-3">
                    {project.impact.map((item, i) => (
                      <span key={i} className="bg-white border-2 border-black px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row lg:flex-col gap-2 md:gap-4 lg:justify-between mt-2 lg:mt-0">
                  <div className="flex-1 bg-white border-4 border-black p-3 md:p-6 shadow-[3px_3px_0_0_rgba(0,0,0,1)] md:shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <p className="text-xs uppercase mb-1">Type</p>
                    <p className="text-sm md:text-2xl uppercase">{project.type}</p>
                  </div>
                  <div className="flex-1 bg-black text-white border-4 border-black p-3 md:p-6 shadow-[3px_3px_0_0_rgba(255,255,255,1)] md:shadow-[6px_6px_0_0_rgba(255,255,255,1)]">
                    <p className="text-xs uppercase mb-1 opacity-70">Status</p>
                    <p className="text-sm md:text-xl uppercase">{project.status}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practice projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl uppercase mb-5 md:mb-8 text-center"
          >
            Practice Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {practiceProjects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className={`${project.color} border-4 md:border-6 border-black p-5 md:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] md:shadow-[10px_10px_0_0_rgba(0,0,0,1)] block group`}
              >
                <h4 className="text-lg md:text-3xl uppercase mb-2 md:mb-4">{project.name}</h4>
                <p className="text-xs md:text-lg mb-3 md:mb-6">{project.description}</p>
                <div className="flex items-center gap-2 uppercase text-xs md:text-sm group-hover:gap-4 transition-all">
                  View on Figma <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
