"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#030303] border-t border-gray-100 dark:border-gray-900/60 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-gray-100 dark:border-gray-900/50">
          {/* Logo & Info */}
          <div className="text-center md:text-left space-y-2.5">
            <Link
              href="/"
              className="text-2xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-wider"
            >
              HIRAN.
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Web Application & Game Developer
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold tracking-wide">
            <Link href="/" className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social connections */}
          <div className="flex justify-center md:justify-end gap-3.5">
            <Link
              href="https://github.com/Hiran2006"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="http://linkedin.com/in/hirans2006/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </Link>
            <Link
              href="mailto:hirans2006@gmail.com"
              className="w-10 h-10 rounded-xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </Link>
          </div>
        </div>

        {/* Copy text */}
        <div className="mt-8 text-center flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 dark:text-gray-500 gap-4">
          <p>© {currentYear} Hiran. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-default">Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
