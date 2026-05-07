"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -150 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
            : "bg-white/95 backdrop-blur-md border-b-4 border-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl md:text-2xl uppercase tracking-tight cursor-pointer"
            >
              <span className="bg-black text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_rgba(255,0,107,1)]">
                RS
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-base uppercase tracking-wide transition-colors relative group ${
                    item.name === "Contact"
                      ? "bg-[#FF006B] text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                      : "text-black hover:text-[#FF006B]"
                  }`}
                >
                  {item.name}
                  {item.name !== "Contact" && (
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FF006B] group-hover:w-full transition-all duration-300"></span>
                  )}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden bg-black border-4 border-black p-3 shadow-[4px_4px_0_0_rgba(255,0,107,1)]"
            >
              {isMenuOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white border-l-6 border-black z-50 md:hidden"
            >
              <motion.div
                className="p-6 border-b-4 border-black flex justify-between items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-2xl uppercase">Menu</span>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black border-4 border-black p-2 shadow-[3px_3px_0_0_rgba(255,0,107,1)]"
                >
                  <X className="text-white" size={20} />
                </motion.button>
              </motion.div>

              <div className="p-6 space-y-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: idx * 0.1 + 0.15, type: "spring" }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-2xl uppercase py-3 border-b-3 border-black hover:text-[#FF006B] transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
