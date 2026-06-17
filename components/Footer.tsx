"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-bold font-mono text-gray-900 dark:text-white text-base">
              Edwin Winarto
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Aspiring Full Stack Developer
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <span>© {year} Edwin Winarto. Made with</span>
            <Heart size={11} className="text-red-500 fill-red-500" />
          
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/edwinwinarto", icon: <Github size={16} />, label: "GitHub" },
              { href: "https://linkedin.com/in/edwin-winarto", icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: "mailto:edwin.winarto@binus.ac.id", icon: <Mail size={16} />, label: "Email" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
