"use client";

import { motion } from "framer-motion";
import { FiMonitor, FiDatabase } from "react-icons/fi";
import { FaGamepad } from "react-icons/fa";

const services = [
  {
    icon: <FiMonitor className="w-8 h-8 text-emerald-500 dark:text-cyan-400" />,
    title: "Web Application Development",
    description: "Building responsive, modern, and high-performance frontends using Next.js, React, and TypeScript. Focused on premium aesthetics, SEO optimization, and smooth user interactions.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <FaGamepad className="w-8 h-8 text-emerald-500 dark:text-cyan-400" />,
    title: "Game & Graphics Development",
    description: "Replicating complex game mechanics and shaders in Unity using C#. Experienced in structural rendering pipelines, ShaderLab, and optimising game performance.",
    techs: ["Unity", "C#", "ShaderLab", "Math / Physics"]
  },
  {
    icon: <FiDatabase className="w-8 h-8 text-emerald-500 dark:text-cyan-400" />,
    title: "Backend & System Integration",
    description: "Designing RESTful APIs and secure server-side applications using Express and Node.js. Integrating databases like PostgreSQL and MongoDB with JWT or Session authentication.",
    techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15
    }
  }
};

export default function SkillsServices() {
  return (
    <section className="relative py-24 bg-white dark:bg-[#030303] transition-colors duration-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              What I Do
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Combining design precision with architectural programming to build fluid web systems and gaming mechanics.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="glass-panel rounded-3xl border border-gray-200/50 dark:border-gray-800/80 bg-white/70 dark:bg-[#07070a]/75 p-8 flex flex-col h-full shadow-lg relative group/card"
              whileHover={{
                y: -6,
                borderColor: "rgba(16, 185, 129, 0.25)",
                boxShadow: "0 30px 50px -15px rgba(16, 185, 129, 0.12)",
              }}
            >
              {/* Card top gradient indicator */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20" />

              {/* Service Icon Container */}
              <div className="w-14 h-14 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/10 dark:border-cyan-500/10 mb-6 flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover/card:text-emerald-500 dark:group-hover/card:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-900/60">
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-xl bg-gray-100 dark:bg-gray-950/80 border border-gray-200/40 dark:border-gray-800/80 px-2.5 py-1 text-xs font-bold text-gray-500 dark:text-gray-400 hover:border-emerald-500/20 dark:hover:border-cyan-500/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
