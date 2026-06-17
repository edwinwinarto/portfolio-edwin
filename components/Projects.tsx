"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eventra",
    description:
      "A modern event management platform where users can browse events, purchase tickets, and manage registrations. Built with responsive UI and efficient dashboard management.",
    tech: ["Flutter", "JavaScript", "MySQL"],
    image: "/assets/eventra.jpg",
    github: "https://github.com/selineee-ce/eventra",
    featured: false,
  },
  {
    title: "PT Mitra Setia Teknik",
    description:
      "A corporate website for PT Mitra Setia Teknik, showcasing their services, projects, and company information. The site features a clean design and smooth navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/assets/mst.png",
    demo: "https://mitrasetiateknik.netlify.app/",
  },
  {
    title: "Gacha Love Letter",
    description:
      "A web application that allows users to create and send personalized love letters in a fun and interactive way. Users can customize the letter's design, add personal messages, and share it with their loved ones and payment functionality is implemented using Midtrans API, allowing users to make secure online payments for premium features or services within the application.",
    tech: ["HTML", "JavaScript", "CSS", "Midtrans"],
    image: "/assets/gll.png",
    github: "",
    demo: "https://www.gachaloveletter.my.id/",
  },
  {
    title: "Wuthering Wares",
    description:
      "A mobile e-commerce application for a fictional store, featuring product listings, shopping cart, and checkout functionality. Integrated with Google Login for user authentication and manual payment for transactions. Admin can checks payment status and manage products with real-time updates.",
    tech: ["Flutter", "JavaScript", "MySQL"],
    image: "/assets/ww.png",
    github: "https://github.com/edwinwinarto/Wuthering-Wares",
    demo: "",
  },
  {
    title: "PLAScan AI",
    description:
      "A web application that utilizes Teachable Machine to classify images of plastic waste. Users can upload images, and the AI model will predict the type of plastic and provide recycling information. The app aims to promote environmental awareness and proper waste management.",
    tech: ["Teachable Machine", "JavaScript", "HTML", "CSS"],
    image: "/assets/ai.png",
    demo: "https://plascans.netlify.app/",
  },
];

const techColors: Record<string, string> = {
  "Next.js": "bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200",
  Flutter: "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300",
  MySQL: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
  Java: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300",
  Midtrans: "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300",
  Bootstrap: "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300",
  HTML: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300",
  CSS: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
  JavaScript: "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-30,0",
  Dart: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300",
};

function getTechColor(tech: string) {
  return techColors[tech] || "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400";
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-bold text-gray-900 dark:text-white text-base">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${getTechColor(t)}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-1">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-white text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-gray-900 text-xs font-medium transition-all duration-200"
            >
              <Github size={13} />
              GitHub
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-all duration-200"
            >
              <ExternalLink size={13} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-gray-50/50 dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-600 mx-auto" />
          <p className="mt-6 text-gray-500 dark:text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            A selection of projects I&apos;ve worked on — from SaaS platforms to
            corporate websites and AI integrations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
