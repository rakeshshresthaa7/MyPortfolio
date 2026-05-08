"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function HeroStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -100]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0"
    >
      {/* Background shapes — hidden on small/medium, visible on lg+ */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-[#FFE500] border-8 border-black pointer-events-none hidden lg:block"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-[#FF006B] border-8 border-black rounded-full pointer-events-none hidden lg:block"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main grid */}
      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-7xl w-full mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
      >
        {/* ── Left: text ── */}
        <div className="space-y-4 lg:space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#FFE500] border-4 border-black px-3 py-1.5 lg:px-6 lg:py-3 mb-3 lg:mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] lg:shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={14} />
              <span className="uppercase text-xs lg:text-sm tracking-wide">UI/UX Designer</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-8xl uppercase leading-none mb-3 lg:mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Hi, I&apos;m</span>
              <span className="block bg-black text-white px-3 py-1 lg:px-4 lg:py-2 inline-block border-4 lg:border-8 border-black shadow-[6px_6px_0_0_rgba(255,0,107,1)] lg:shadow-[12px_12px_0_0_rgba(255,0,107,1)] mt-2 lg:mt-4">
                RAKESH
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-xl xl:text-2xl leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A <span className="bg-[#00F0FF] px-1 lg:px-2 border-2 border-black">curious designer</span>{" "}
              crafting <span className="bg-[#B4FF00] px-1 lg:px-2 border-2 border-black">user-centered experiences</span>{" "}
              that solve real problems. From hackathon wins to real-world projects, I turn ideas into{" "}
              <span className="bg-[#FF006B] text-white px-1 lg:px-2 border-2 border-black">delightful interfaces</span>.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-row flex-wrap gap-2 lg:gap-4 items-center justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-4 py-2 lg:px-8 lg:py-4 uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(255,0,107,1)] lg:shadow-[6px_6px_0_0_rgba(255,0,107,1)] hover:shadow-[6px_6px_0_0_rgba(255,0,107,1)] transition-all text-xs lg:text-base"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-4 py-2 lg:px-8 lg:py-4 uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] lg:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all text-xs lg:text-base"
            >
              Let&apos;s Talk
            </motion.a>
            <motion.a
              href="/RAKESH_SHRESTHA_CV.pdf"
              download="Rakesh_Shrestha_CV.pdf"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B4FF00] px-4 py-2 lg:px-8 lg:py-4 uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] lg:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 text-xs lg:text-base"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="lg:hidden">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden lg:block">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* ── Right: photo ── */}
        <motion.div
          className="relative flex justify-center mt-2 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Mobile/tablet: fixed size wrapper so badges never overflow */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:hidden">
            <div className="w-full h-full border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden bg-gradient-to-br from-[#FFE500] to-[#FF006B] relative">
              <Image src="/profile.png" alt="Rakesh Shrestha" fill className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" priority />
            </div>
            <motion.div
              className="absolute -top-3 -right-3 bg-white border-4 border-black px-2 py-1 shadow-[3px_3px_0_0_rgba(180,255,0,1)] z-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-base uppercase font-bold leading-none">3+</p>
              <p className="text-xs">Projects</p>
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -left-3 bg-black text-white border-4 border-black px-2 py-1 shadow-[3px_3px_0_0_rgba(0,240,255,1)] z-10"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <p className="text-base uppercase font-bold leading-none">2X</p>
              <p className="text-xs">Runner-up</p>
            </motion.div>
          </div>

          {/* Desktop: original layout */}
          <div className="hidden lg:block w-full">
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-md mx-auto aspect-square border-8 border-black shadow-[20px_20px_0_0_rgba(0,0,0,1)] overflow-hidden bg-gradient-to-br from-[#FFE500] to-[#FF006B] relative">
                <Image src="/profile.png" alt="Rakesh Shrestha" fill className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" priority />
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-8 -right-8 bg-white border-4 border-black px-6 py-4 shadow-[6px_6px_0_0_rgba(180,255,0,1)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-4xl uppercase">3+</p>
              <p className="text-sm">Projects</p>
            </motion.div>
            <motion.div
              className="absolute -bottom-8 -left-8 bg-black text-white border-4 border-black px-6 py-4 shadow-[6px_6px_0_0_rgba(0,240,255,1)]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <p className="text-4xl uppercase">2X</p>
              <p className="text-sm">Runner-up</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <motion.a
        href="#journey"
        className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="bg-black border-4 border-black p-2 lg:p-4 shadow-[4px_4px_0_0_rgba(255,229,0,1)]">
          <ArrowDown className="text-white" size={18} />
        </div>
      </motion.a>
    </section>
  );
}
