"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-[#FF006B] origin-left z-[100] border-b-4 border-black"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
