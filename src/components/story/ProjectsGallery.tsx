"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Smartphone, Monitor, Globe } from "lucide-react";
import { useRef } from "react";

export default function ProjectsGallery() {
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
    [80, 0, 0, -80]
  );

  const projects = [
    {
      title: "Gunasho (e Suchana)",
      category: "Gov-Tech Platform",
      type: "Web + Mobile",
      icon: <Smartphone />,
      tagline: "Empowering citizens to report local issues",
      description:
        "Redesigned a digital grievance platform for local government, creating intuitive user flows for complaint submission and tracking.",
      impact: ["Mobile-first design", "Clear navigation", "Real-time tracking"],
      color: "bg-[#FFE500]",
      status: "In Development",
    },
    {
      title: "BigAI Portfolio",
      category: "Corporate Website",
      type: "Web",
      icon: <Monitor />,
      tagline: "Showcasing AI innovation through design",
      description:
        "Designed a complete company portfolio site with emphasis on services, case studies, and brand identity.",
      impact: [
        "Consistent design system",
        "Responsive layouts",
        "Developer-friendly handoff",
      ],
      color: "bg-[#FF006B]",
      status: "In Development",
    },
    {
      title: "E Library System",
      category: "Education Platform",
      type: "Web App",
      icon: <Globe />,
      tagline: "Making library management effortless",
      description:
        "End-to-end UX design for book management, borrowing workflows, and admin dashboards.",
      impact: [
        "Interactive prototypes",
        "Admin dashboards",
        "User-tested flows",
      ],
      color: "bg-[#00F0FF]",
      status: "In Development",
    },
  ];

  const practiceProjects = [
    {
      name: "Food Ordering Platform",
      description: "Group UI/UX project with clickable prototypes",
      link: "https://www.figma.com/design/Zk8LqxH6GCROx7vgHNLclv/UIUX-advance-project?node-id=0-1&t=DaDSqyzBUYz6RXTD-1",
      color: "bg-[#B4FF00]",
    },
    {
      name: "AAC Bricks Website",
      description: "Company website with improved information architecture",
      link: "https://www.figma.com/design/MkjBV1DBvF9ynoBkzNOjr3/AAC-Bricks?node-id=0-1&t=36Qx4bHNTK4RTGoi-1",
      color: "bg-[#FFE500]",
    },
  ];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-32 px-4 md:px-8 bg-white relative"
    >
      <motion.div style={{ opacity, scale, y }} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl uppercase mb-6 inline-block bg-black text-white px-8 py-4 border-8 border-black shadow-[12px_12px_0_0_rgba(0,240,255,1)]">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
            Real projects solving real problems for real users
          </p>
        </motion.div>

        <div className="space-y-12 mb-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`${project.color} border-8 border-black p-8 md:p-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] cursor-pointer group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-black border-4 border-black p-4"
                    >
                      <div className="text-white">{project.icon}</div>
                    </motion.div>
                    <div>
                      <p className="text-sm uppercase tracking-wide opacity-70 mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-4xl md:text-5xl uppercase">
                        {project.title}
                      </h3>
                      <p className="text-xl mt-2 opacity-90 italic">
                        &quot;{project.tagline}&quot;
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.impact.map((item, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border-3 border-black px-4 py-2 text-sm uppercase shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
                      >
                        ✓ {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] mb-4">
                    <p className="text-sm uppercase mb-2">Type</p>
                    <p className="text-2xl uppercase">{project.type}</p>
                  </div>
                  <div className="bg-black text-white border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(255,255,255,1)]">
                    <p className="text-sm uppercase mb-2 opacity-70">Status</p>
                    <p className="text-xl uppercase">{project.status}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl uppercase mb-8 text-center"
          >
            Practice Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceProjects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`${project.color} border-6 border-black p-8 shadow-[10px_10px_0_0_rgba(0,0,0,1)] block group`}
              >
                <h4 className="text-3xl uppercase mb-4">{project.name}</h4>
                <p className="text-lg mb-6">{project.description}</p>
                <div className="flex items-center gap-2 uppercase text-sm group-hover:gap-4 transition-all">
                  View on Figma
                  <ExternalLink size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
