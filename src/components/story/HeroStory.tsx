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
      className="min-h-screen flex items-center justify-center relative overflow-x-hidden pt-24 pb-12 lg:pt-0 lg:pb-0"
    >
      <motion.div
        className="absolute top-20 right-0 w-8 h-8 lg:right-20 lg:w-20 lg:h-20 bg-[#FFE500] border-4 border-black pointer-events-none"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-0 w-6 h-6 lg:left-20 lg:w-16 lg:h-16 bg-[#FF006B] border-4 border-black rounded-full pointer-events-none"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-6xl w-full mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
      >
        {/* Left: text */}
        <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#FFE500] border-4 border-black px-3 py-1.5 lg:px-5 lg:py-2 mb-3 lg:mb-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={14} />
              <span className="uppercase text-xs tracking-wide">UI/UX Designer</span>
            </motion.div>

            {/* Heading — full name in h1 for SEO, visually shows "Hi, I'm RAKESH" */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-3 lg:mb-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Screen-reader & SEO full name — visually hidden */}
              <span className="sr-only">Rakesh Shrestha — UI/UX Designer</span>
              <span aria-hidden="true" className="block">Hi, I&apos;m</span>
              <span aria-hidden="true" className="block bg-black text-white px-3 py-1 lg:px-4 lg:py-2 inline-block border-4 lg:border-8 border-black shadow-[6px_6px_0_0_rgba(255,0,107,1)] lg:shadow-[10px_10px_0_0_rgba(255,0,107,1)] mt-2 lg:mt-3">
                RAKESH
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm lg:text-base xl:text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A{" "}
              <span className="bg-[#00F0FF] px-1 border-2 border-black">curious designer</span>{" "}
              crafting{" "}
              <span className="bg-[#B4FF00] px-1 border-2 border-black">user-centered experiences</span>{" "}
              that solve real problems. From hackathon wins to real-world projects, I turn ideas into{" "}
              <span className="bg-[#FF006B] text-white px-1 border-2 border-black">delightful interfaces</span>.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-2 lg:gap-3 items-center lg:items-start justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-black text-white px-5 py-2.5 lg:px-6 lg:py-3 uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(255,0,107,1)] hover:shadow-[6px_6px_0_0_rgba(255,0,107,1)] transition-all text-center text-xs lg:text-sm"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white px-5 py-2.5 lg:px-6 lg:py-3 uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all text-center text-xs lg:text-sm"
            >
              Let&apos;s Talk
            </motion.a>
            <motion.a
              href="/RAKESH_SHRESTHA_CV.pdf"
              download="Rakesh_Shrestha_CV.pdf"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#B4FF00] px-5 py-2.5 lg:px-6 lg:py-3 uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 text-xs lg:text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          className="relative flex justify-center mt-4 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Mobile */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:hidden">
            <div className="w-full h-full border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] overflow-hidden bg-gradient-to-br from-[#FFE500] to-[#FF006B] relative">
              <Image src="/profile.png" alt="Rakesh Shrestha - UI/UX Designer and Product Designer from Kathmandu Nepal" fill className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" priority />
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

          {/* Desktop */}
          <div className="hidden lg:block w-full">
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-sm mx-auto aspect-square border-8 border-black shadow-[16px_16px_0_0_rgba(0,0,0,1)] overflow-hidden bg-gradient-to-br from-[#FFE500] to-[#FF006B] relative">
                <Image src="/profile.png" alt="Rakesh Shrestha - UI/UX Designer and Product Designer from Kathmandu Nepal" fill className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" priority />
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-6 -right-6 bg-white border-4 border-black px-4 py-3 shadow-[5px_5px_0_0_rgba(180,255,0,1)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-3xl uppercase">3+</p>
              <p className="text-xs">Projects</p>
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-black text-white border-4 border-black px-4 py-3 shadow-[5px_5px_0_0_rgba(0,240,255,1)]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <p className="text-3xl uppercase">2X</p>
              <p className="text-xs">Runner-up</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#journey"
        className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="bg-black border-4 border-black p-2.5 shadow-[4px_4px_0_0_rgba(255,229,0,1)]">
          <ArrowDown className="text-white" size={18} />
        </div>
      </motion.a>
    </section>
  );
}
