"use client";

import { motion } from "framer-motion";
import journeyData, { JourneyItem } from "@/data/journey";

const JourneyCard = ({ item, isEven }: { item: JourneyItem; isEven: boolean }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 relative group overflow-hidden ${
      isEven ? "md:text-right" : "md:text-left"
    }`}
  >
    {/* Background Glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-transparent transition-all duration-500"></div>

    <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-green-500/20">
      {item.date}
    </span>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
      {item.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
      {item.description}
    </p>
  </motion.div>
);

export default function JourneyTimeline() {
  return (
    <div className="relative pl-8 md:pl-0 max-w-5xl mx-auto py-8">
      {/* Central Line */}
      <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-green-500/0 via-green-500/50 to-green-500/0 transform md:-translate-x-1/2 rounded-full"></div>

      {journeyData.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mb-12 relative flex w-full ${
              isEven ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Mobile Dot */}
            <div className="absolute -left-[2.05rem] sm:-left-[2.1rem] top-8 w-4 h-4 bg-green-500 rounded-full z-10 md:hidden ring-4 ring-white dark:ring-black shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

            {/* Desktop Center Dot */}
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full z-10 ring-4 ring-white dark:ring-black shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

            <div className="w-full md:w-[45%]">
              <JourneyCard item={item} isEven={isEven} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
