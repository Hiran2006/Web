"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-white dark:bg-[#030303] transition-colors duration-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel border border-gray-200/60 dark:border-gray-800/80 bg-white/60 dark:bg-[#07070a]/65 p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden text-center"
          >
            {/* Glowing top line accent */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-emerald-500 to-cyan-500" />
            
            {/* Ambient inner glows */}
            <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Message icon bubble */}
              <div className="w-14 h-14 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/10 dark:border-cyan-500/10 mb-6 text-emerald-500 dark:text-cyan-400">
                <FiMessageSquare size={24} />
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight">
                Let&apos;s Build Something Exceptional Together
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
                I am currently looking for freelance opportunities and full-time engineering roles. Whether you have a project idea, a position to fill, or simply want to connect, feel free to drop a message!
              </p>

              {/* Button link to contact */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-cyan-500/15 transition-all duration-300 flex items-center gap-2.5 border border-emerald-500/10 group"
                >
                  <span>Get in Touch</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
