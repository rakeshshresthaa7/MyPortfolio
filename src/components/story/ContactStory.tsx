"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";
import { useRef } from "react";

export default function ContactStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.85, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 px-4 md:px-8 bg-gradient-to-br from-[#FFE500] via-[#FF006B] to-[#00F0FF] relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <MessageCircle size={80} className="text-white" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl uppercase mb-6 text-white">
            Let&apos;s Create Together
          </h2>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto">
            Have a project in mind? Looking for a designer who cares about
            users? Let&apos;s talk!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_rgba(0,0,0,1)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="mailto:rakesh.shresthaa7@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF006B] border-4 border-black p-6 flex items-center gap-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-black p-4 border-4 border-black"
              >
                <Mail className="text-white" size={32} />
              </motion.div>
              <div>
                <p className="text-sm uppercase mb-1 text-white/80">Email Me</p>
                <p className="text-white break-all">
                  rakesh.shresthaa7@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+9779863664362"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B4FF00] border-4 border-black p-6 flex items-center gap-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-black p-4 border-4 border-black"
              >
                <Phone className="text-white" size={32} />
              </motion.div>
              <div>
                <p className="text-sm uppercase mb-1 opacity-80">Call Me</p>
                <p className="text-black">+977-9863664362</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#00F0FF] border-4 border-black p-6 flex items-center gap-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
            >
              <div className="bg-black p-4 border-4 border-black">
                <MapPin className="text-white" size={32} />
              </div>
              <div>
                <p className="text-sm uppercase mb-1 opacity-80">Location</p>
                <p className="text-black">Kathmandu, Nepal</p>
              </div>
            </motion.div>

            <div className="bg-black border-4 border-black p-6 flex flex-col gap-4">
              <p className="text-white uppercase text-sm mb-2">
                Connect With Me
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/rakesh-shrestha-2b9b34286"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#0077B5] border-4 border-white p-4 flex-1 flex items-center justify-center shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
                >
                  <Linkedin className="text-white" size={32} />
                </motion.a>
                <motion.a
                  href="https://github.com/rakeshshresthaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white border-4 border-white p-4 flex-1 flex items-center justify-center shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
                >
                  <Github className="text-black" size={32} />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black text-white border-4 border-black p-8 text-center shadow-[8px_8px_0_0_rgba(255,0,107,1)]"
            >
              <Send className="mx-auto mb-4" size={48} />
              <p className="text-3xl uppercase mb-2">
                Available for Opportunities
              </p>
              <p className="text-xl opacity-80">
                UI/UX Design • Product Design • Freelance Projects
              </p>
            </motion.div>

            <motion.a
              href="/RAKESH_SHRESTHA_CV.pdf"
              download="Rakesh_Shrestha_CV.pdf"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFE500] border-4 border-black p-8 text-center shadow-[8px_8px_0_0_rgba(0,0,0,1)] cursor-pointer group"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg
                  className="mx-auto mb-4"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.div>
              <p className="text-3xl uppercase mb-2 group-hover:text-[#FF006B] transition-colors">
                Download My CV
              </p>
              <p className="text-xl opacity-80">
                Full Resume & Portfolio Details
              </p>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-white"
        >
          <p className="text-lg">
            © 2026 Rakesh Shrestha. Designed with ❤️ and lots of coffee
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
