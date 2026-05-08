"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { useRef } from "react";

export default function ContactStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.85, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);

  return (
    <section id="contact" ref={containerRef} className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#FFE500] via-[#FF006B] to-[#00F0FF] relative overflow-hidden">
      <motion.div className="absolute inset-0 opacity-20 pointer-events-none" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      <motion.div style={{ opacity, scale, y }} className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-10">
          <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block mb-4">
            <MessageCircle size={48} className="text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl uppercase mb-3 text-white leading-tight">
            Let&apos;s Create Together
          </h2>
          <p className="text-sm text-white/90 max-w-xl mx-auto">
            Have a project in mind? Looking for a designer who cares about users? Let&apos;s talk!
          </p>
        </motion.div>

        {/* White card */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white border-8 border-black p-6 md:p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <motion.a href="mailto:rakesh.shresthaa7@gmail.com" whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="bg-[#FF006B] border-4 border-black p-4 flex items-center gap-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="bg-black p-2 border-2 border-black flex-shrink-0">
                <Mail className="text-white" size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase mb-0.5 text-white/80">Email Me</p>
                <p className="text-white text-xs break-all">rakesh.shresthaa7@gmail.com</p>
              </div>
            </motion.a>

            <motion.a href="tel:+9779863664362" whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="bg-[#B4FF00] border-4 border-black p-4 flex items-center gap-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="bg-black p-2 border-2 border-black flex-shrink-0">
                <Phone className="text-white" size={16} />
              </div>
              <div>
                <p className="text-xs uppercase mb-0.5 opacity-80">Call Me</p>
                <p className="text-black text-xs">+977-9863664362</p>
              </div>
            </motion.a>

            <motion.div whileHover={{ scale: 1.03, y: -3 }} className="bg-[#00F0FF] border-4 border-black p-4 flex items-center gap-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="bg-black p-2 border-2 border-black flex-shrink-0">
                <MapPin className="text-white" size={16} />
              </div>
              <div>
                <p className="text-xs uppercase mb-0.5 opacity-80">Location</p>
                <p className="text-black text-xs">Kathmandu, Nepal</p>
              </div>
            </motion.div>

            <div className="bg-black border-4 border-black p-4 flex flex-col gap-3">
              <p className="text-white uppercase text-xs">Connect With Me</p>
              <div className="flex gap-3">
                <motion.a href="https://www.linkedin.com/in/rakesh-shrestha-2b9b34286" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, rotate: 8 }} whileTap={{ scale: 0.9 }} className="bg-[#0077B5] border-4 border-white p-2.5 flex-1 flex items-center justify-center shadow-[3px_3px_0_0_rgba(255,255,255,1)]">
                  <Linkedin className="text-white" size={18} />
                </motion.a>
                <motion.a href="https://github.com/rakeshshresthaa" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, rotate: -8 }} whileTap={{ scale: 0.9 }} className="bg-white border-4 border-white p-2.5 flex-1 flex items-center justify-center shadow-[3px_3px_0_0_rgba(255,255,255,1)]">
                  <Github className="text-black" size={18} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-black text-white border-4 border-black p-5 text-center shadow-[5px_5px_0_0_rgba(255,0,107,1)]">
              <Send className="mx-auto mb-2" size={28} />
              <p className="text-base uppercase mb-1">Available for Opportunities</p>
              <p className="text-xs opacity-80">UI/UX Design • Product Design • Freelance</p>
            </motion.div>

            <motion.a href="/RAKESH_SHRESTHA_CV.pdf" download="Rakesh_Shrestha_CV.pdf" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="bg-[#FFE500] border-4 border-black p-5 text-center shadow-[5px_5px_0_0_rgba(0,0,0,1)] cursor-pointer group">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <svg className="mx-auto mb-2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.div>
              <p className="text-base uppercase mb-1 group-hover:text-[#FF006B] transition-colors">Download My CV</p>
              <p className="text-xs opacity-80">Full Resume & Portfolio Details</p>
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-8 text-center text-white">
          <p className="text-xs">© 2026 Rakesh Shrestha. Designed with ❤️ and lots of coffee</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
