"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
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
      delay: 0.5 + i * 0.1,
      type: "spring" as const,
      stiffness: 100,
    },
  }),
};

export default function WhoAmI() {
  const techStack = ["NextJS", "React", "Express", "Unity C#"];

  return (
    <motion.section
      id="about"
      className="min-h-[calc(100vh-4rem)] bg-black text-white pt-4 pb-8 md:py-16 flex items-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
          {/* Photo Section - Blended with background */}
          <motion.div
            className="w-full lg:w-1/2 xl:w-2/5 mt-4 sm:mt-8 lg:mt-0"
            variants={item}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-full -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                }}
              />
              <div className="w-full h-full rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-black/30 flex items-center justify-center">
                  <Image
                    src="/hiran_pic.png"
                    alt="Hiran"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                    priority
                  />
                </div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/5 to-transparent mix-blend-overlay pointer-events-none"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/5 rounded-full -z-20"
                animate={{
                  y: [0, -10, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 bg-green-500/5 rounded-full -z-20"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 xl:w-3/5">
            <motion.div
              className="relative max-w-2xl mx-auto lg:mx-0"
              variants={item}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl -z-10 blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.5, duration: 1 }}
              />

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-green-400 drop-shadow-lg"
                variants={item}
              >
                Hi, I&apos;m <span className="text-white">Hiran</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300/90 leading-relaxed mb-6 sm:mb-8"
                variants={item}
              >
                a developer focused on the fun side of coding: game development
                and modern web development.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10"
                variants={item}
              >
                <motion.a
                  href="#projects"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/20 text-center"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 20px -5px rgba(16, 185, 129, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-300 shadow-lg shadow-green-500/10 text-center"
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    boxShadow: "0 10px 20px -5px rgba(16, 185, 129, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>

              {/* Tech Stack Icons */}
              <motion.div className="mt-10 sm:mt-12" variants={item}>
                <motion.p
                  className="text-sm font-medium text-gray-400 mb-3"
                  variants={item}
                >
                  TECH STACK
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-3 sm:gap-4"
                  variants={container}
                >
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      custom={index}
                      variants={techItem}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gray-900/50 text-gray-200 border border-gray-800"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        borderColor: "rgba(16, 185, 129, 0.5)",
                        color: "#10b981",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
