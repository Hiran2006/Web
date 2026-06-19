"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
  index?: number;
}

export default function ProjectItem({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  className = "",
}: ProjectItemProps) {
  const [imageErr, setImageErr] = useState(false);

  return (
    <motion.div
      className={`glass-panel rounded-3xl border border-gray-200/50 dark:border-gray-800/80 bg-white/70 dark:bg-[#07070a]/75 flex flex-col overflow-hidden w-full h-full shadow-lg transition-all duration-300 relative group/card ${className}`}
      whileHover={{
        y: -6,
        borderColor: "rgba(16, 185, 129, 0.25)",
        boxShadow: "0 30px 50px -15px rgba(16, 185, 129, 0.12)",
      }}
    >
      {/* Top hover accent glow line */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20" />
      
      {/* Top glowing card light blob */}
      <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-emerald-500/5 dark:bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover/card:scale-125 transition-transform duration-500" />

      {/* Image container with gradient cover */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-gray-100 dark:border-gray-900 bg-gray-950/5 dark:bg-gray-950/20">
        {!imageErr ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={() => setImageErr(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 flex items-center justify-center">
            <span className="text-xs text-gray-400 font-medium">No preview image available</span>
          </div>
        )}
        
        {/* Subtle shadow overlay inside image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        <div className="flex-1">
          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2.5 tracking-tight group-hover/card:text-emerald-500 dark:group-hover/card:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-5">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gray-100 dark:bg-gray-900/60 border border-gray-200/40 dark:border-gray-800/80 px-4 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-cyan-400 transition-all duration-300"
              aria-label="View Github Repository"
            >
              <FiGithub className="w-4 h-4" />
              <span>Source</span>
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md shadow-emerald-500/10 dark:shadow-cyan-500/5 px-4 py-2.5 text-sm font-bold hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="View Live Demo"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </Link>
          )}
        </div>

        {/* Tech tags footer */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-900/70">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-800/80 px-2.5 py-1 text-xs font-bold text-gray-600 dark:text-gray-400 hover:border-emerald-500/20 dark:hover:border-cyan-500/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
