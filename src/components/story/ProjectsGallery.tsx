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
    { title: "Gunasho (e Suchana)", category: "Gov-Tech Platform", type: "Web + Mobile", icon: <Smartphone size={18} />, tagline: "Empowering citizens to report local issues", description: "Redesigned a digital grievance platform for local government, creating intuitive user flows for complaint submission and tracking.", impact: ["Mobile-first design", "Clear navigation", "Real-time tracking"], color: "bg-[#FFE500]", status: "Deployed", links: { app: "https://play.google.com/store/apps/details?id=com.mspsolution.new_gunaso_app&pcampaignid=web_share", web: "https://gulmikaligandaki.gunasho.com/" } },
    { title: "BigAI Portfolio", category: "Corporate Website", type: "Web", icon: <Monitor size={18} />, tagline: "Showcasing AI innovation through design", description: "Designed a complete company portfolio site with emphasis on services, case studies, and brand identity.", impact: ["Consistent design system", "Responsive layouts", "Developer-friendly handoff"], color: "bg-[#FF006B]", status: "In Development", links: undefined },
    { title: "E Library System", category: "Education Platform", type: "Web App", icon: <Globe size={18} />, tagline: "Making library management effortless", description: "End-to-end UX design for book management, borrowing workflows, and admin dashboards.", impact: ["Interactive prototypes", "Admin dashboards", "User-tested flows"], color: "bg-[#00F0FF]", status: "In Development", links: undefined },
  ];

  const practiceProjects = [
    { name: "Food Ordering Platform", description: "Group UI/UX project with clickable prototypes", link: "https://www.figma.com/design/Zk8LqxH6GCROx7vgHNLclv/UIUX-advance-project?node-id=0-1&t=DaDSqyzBUYz6RXTD-1", color: "bg-[#B4FF00]" },
    { name: "AAC Bricks Website", description: "Company website with improved information architecture", link: "https://www.figma.com/design/MkjBV1DBvF9ynoBkzNOjr3/AAC-Bricks?node-id=0-1&t=36Qx4bHNTK4RTGoi-1", color: "bg-[#FFE500]" },
  ];

  return (
    <section id="projects" ref={containerRef} className="py-20 px-4 md:px-8 bg-white relative">
      <motion.div style={{ opacity, scale, y }} className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl uppercase mb-4 inline-block bg-black text-white px-6 py-3 border-8 border-black shadow-[8px_8px_0_0_rgba(0,240,255,1)]">
            Featured Work
          </h2>
          <p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">Real projects solving real problems for real users</p>
        </motion.div>

        <div className="space-y-8 mb-14">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className={`${project.color} border-8 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] cursor-pointer group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="bg-black border-4 border-black p-2.5 flex-shrink-0">
                      <div className="text-white">{project.icon}</div>
                    </motion.div>
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-70 mb-0.5">{project.category}</p>
                      <h3 className="text-2xl md:text-3xl uppercase leading-tight">{project.title}</h3>
                      <p className="text-sm mt-1 opacity-90 italic">&quot;{project.tagline}&quot;</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.impact.map((item, i) => (
                      <motion.span key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-black px-3 py-1 text-xs uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                        ✓ {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white border-4 border-black p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      <p className="text-xs uppercase opacity-60 mb-1">Type</p>
                      <p className="text-xs uppercase font-bold leading-tight">{project.type}</p>
                    </div>
                    {project.status && (
                      <div className="bg-black text-white border-4 border-black p-3 shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                        <p className="text-xs uppercase opacity-60 mb-1">Status</p>
                        <p className="text-xs uppercase font-bold leading-tight">{project.status}</p>
                      </div>
                    )}
                  </div>
                  {project.links && (
                    <div className="flex flex-col gap-2 mt-1">
                      {project.links.web && (
                        <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="bg-black text-white border-4 border-black px-4 py-3 shadow-[4px_4px_0_0_rgba(255,255,255,1)] flex items-center justify-between hover:bg-gray-900 transition-colors group/link">
                          <div className="flex items-center gap-2">
                            <Globe size={14} />
                            <span className="text-xs uppercase font-bold">View Web App</span>
                          </div>
                          <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      {project.links.app && (
                        <a href={project.links.app} target="_blank" rel="noopener noreferrer" className="bg-white border-4 border-black px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-between hover:bg-gray-100 transition-colors group/link">
                          <div className="flex items-center gap-2">
                            <Smartphone size={14} />
                            <span className="text-xs uppercase font-bold">Play Store</span>
                          </div>
                          <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl uppercase mb-6 text-center">
            Practice Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                className={`${project.color} border-4 border-black p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] block group`}
              >
                <h4 className="text-xl uppercase mb-2">{project.name}</h4>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-2 uppercase text-xs group-hover:gap-3 transition-all">
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
