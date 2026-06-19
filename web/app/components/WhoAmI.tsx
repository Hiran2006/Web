"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import skillsData from "@/data/skill";
import { FiArrowRight, FiBriefcase } from "react-icons/fi";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const techItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.08,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  }),
};

export default function WhoAmI() {
  const techStack = skillsData.techStack;

  return (
    <section
      id="about"
      className="relative min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white pt-24 pb-12 flex items-center transition-colors duration-300 overflow-hidden"
    >
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Futuristic Radial Glowing Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* Photo Section - Futuristic Visual Wrapper */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={item}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Spinning tech border */}
              <motion.div 
                className="absolute inset-[-15px] border-2 border-dashed border-emerald-500/30 dark:border-cyan-500/20 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-[-5px] border border-double border-emerald-500/40 dark:border-cyan-500/30 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing circles */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 dark:opacity-15 pointer-events-none animate-pulse" />

              {/* Outer border glass container */}
              <div className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-emerald-500/20 via-transparent to-cyan-500/20 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900/5 dark:bg-slate-900/40 relative">
                  <Image
                    src="/hiran_pic.png"
                    alt="Hiran"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover mix-blend-normal hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Overlay shadow to integrate avatar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Orbiting badges */}
              <motion.div 
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 glass-panel px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-emerald-500/20 dark:border-cyan-500/20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide">Developer</span>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 glass-panel px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-cyan-500/20 dark:border-emerald-500/20"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <FiBriefcase className="text-emerald-500 dark:text-cyan-400" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide">Ready to Build</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
              variants={item}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance & Full-time roles</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
              variants={item}
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent font-black">Hiran</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-xl leading-relaxed mb-8"
              variants={item}
            >
              A developer focused on creating immersive experiences in{" "}
              <span className="text-emerald-500 dark:text-cyan-400 font-semibold underline decoration-2 decoration-emerald-500/30 underline-offset-4">game development</span>{" "}
              and building modern, high-performance{" "}
              <span className="text-emerald-500 dark:text-cyan-400 font-semibold underline decoration-2 decoration-cyan-500/30 underline-offset-4">web applications</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
              variants={item}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-cyan-500/15 transition-all duration-300 flex items-center justify-center gap-2 group border border-emerald-500/10"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/contact"
                className="px-8 py-4 glass-panel border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 text-center shadow-lg shadow-black/5"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Tech Stack section */}
            <motion.div className="mt-12 w-full" variants={item}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center lg:text-left">
                Main Technologies
              </p>
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    custom={index}
                    variants={techItem}
                    className="inline-flex items-center px-4 py-2 rounded-2xl text-sm font-semibold glass-panel text-gray-700 dark:text-gray-200 border border-gray-200/60 dark:border-gray-800/80 shadow-sm transition-all duration-300"
                    whileHover={{
                      y: -2,
                      borderColor: "rgba(16, 185, 129, 0.4)",
                      color: "#10b981",
                      boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.1)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-cyan-400 mr-2.5" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
