"use client";

import { motion } from "framer-motion";
import journeyData, { JourneyItem } from "@/data/journey";
import { FiBookOpen, FiCode, FiAward } from "react-icons/fi";

const getTimelineIcon = (id: string) => {
  switch (id) {
    case "learning-web-dev":
      return <FiBookOpen className="w-5 h-5 text-emerald-500 dark:text-cyan-400" />;
    case "building-projects":
      return <FiCode className="w-5 h-5 text-emerald-500 dark:text-cyan-400" />;
    default:
      return <FiAward className="w-5 h-5 text-emerald-500 dark:text-cyan-400" />;
  }
};

const JourneyCard = ({ item, isEven }: { item: JourneyItem; isEven: boolean }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`glass-panel border border-gray-200/50 dark:border-gray-800/80 bg-white/70 dark:bg-[#07070a]/75 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-400 relative group overflow-hidden ${
      isEven ? "md:text-right" : "md:text-left"
    }`}
  >
    {/* Glow card backdrop light */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 dark:bg-cyan-500/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
    
    <span className="inline-block px-4 py-1.5 bg-emerald-500/10 dark:bg-cyan-500/10 text-emerald-600 dark:text-cyan-400 rounded-xl text-xs font-black tracking-widest uppercase mb-4 border border-emerald-500/20 dark:border-cyan-500/20">
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
      {/* Central Line with glowing gradient */}
      <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-[3px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/50 to-cyan-500/10 dark:from-cyan-500/10 dark:via-cyan-500/40 dark:to-emerald-500/10 transform md:-translate-x-1/2 rounded-full pointer-events-none"></div>

      {journeyData.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mb-16 relative flex w-full ${
              isEven ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Mobile Icon Center */}
            <div className="absolute -left-[2.5rem] top-6 w-10 h-10 rounded-2xl bg-white dark:bg-[#07070a] border border-gray-200 dark:border-gray-800 flex items-center justify-center z-10 md:hidden shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-4 ring-white dark:ring-black">
              {getTimelineIcon(item.id)}
            </div>

            {/* Desktop Center Icon */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-[#07070a] border border-gray-200 dark:border-gray-800 items-center justify-center z-10 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-4 ring-white dark:ring-black">
              {getTimelineIcon(item.id)}
            </div>

            <div className="w-full md:w-[45%]">
              <JourneyCard item={item} isEven={isEven} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
