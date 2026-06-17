"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Layers, Zap } from "lucide-react";

// const highlights = [
//   {
//     icon: <Code2 size={20} />,
//     title: "Clean Code",
//     desc: "Writing readable, maintainable, and scalable code is at the core of everything I build.",
//   },
//   {
//     icon: <Globe size={20} />,
//     title: "Full Stack",
//     desc: "From pixel-perfect UIs to robust APIs and databases — I handle the full product lifecycle.",
//   },
//   {
//     icon: <Layers size={20} />,
//     title: "Modern Stack",
//     desc: "Next.js, TypeScript, Laravel, and cloud-native tools form my primary development toolkit.",
//   },
//   {
//     icon: <Zap size={20} />,
//     title: "Performance",
//     desc: "I optimize for fast load times, smooth interactions, and efficient backend processing.",
//   },
// ];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50/50 dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid gap-12 lg:gap-16 items-center justify-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 mx-auto max-w-2xl text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              Hello! I'm a Computer Science student passionate about web development and software engineering. During my studies, I have worked on various academic and personal projects that helped me understand both frontend and backend development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              I enjoy learning new technologies and applying them to solve practical problems. My projects include event management systems, payment gateway integration, company profile websites, AI-powered applications, and entertainment platforms.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              Currently, I am looking for an internship opportunity where I can gain industry experience, collaborate with professional developers, and continue improving my skills as a Full Stack Developer.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-2 mx-auto max-w-max">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Highlights grid
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
