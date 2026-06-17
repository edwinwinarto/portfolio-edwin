"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Github, Linkedin, ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 text-xs font-mono font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
            >
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Edwin Winarto
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-3 text-xl sm:text-2xl font-small text-gray-500 dark:text-gray-400 font-mono"
            >
              Computer Science Student | Aspiring Full Stack Developer
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.5)}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <motion.a
                href="/assets/cv.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                <Download size={16} />
                Download CV
              </motion.a>

              <motion.a
                href="https://github.com/edwinwinarto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-white text-white dark:text-gray-900 text-sm font-semibold transition-all duration-200"
              >
                <Github size={16} />
                GitHub
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/edwin-winarto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 text-sm font-semibold transition-all duration-200"
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 blur-xl opacity-30 animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full border-4 border-white/20 dark:border-gray-800/50 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-gray-900">
                <Image
                  src="/assets/profile.jpg"
                  alt="Your Name"
                  fill
                  priority
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 hover:text-blue-500 transition-colors group"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
