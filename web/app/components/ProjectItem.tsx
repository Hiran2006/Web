"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData | string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
  index?: number;
}

const cardVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.95,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
} as const;

const imageHoverVariants: Variants = {
  hover: {
    scale: 1.05,
    rotate: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

const overlayVariants: Variants = {
  initialOverlay: { opacity: 0 },
  hoverOverlay: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
} as const;

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  },
} as const;

function Tag({ tag }: { tag: string }) {
  return (
    <motion.span
      variants={tagVariants}
      className="inline-block whitespace-nowrap rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-700 dark:text-green-400 transition-colors"
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(16, 185, 129, 0.2)",
      }}
    >
      {tag}
    </motion.span>
  );
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
      className={`group relative w-full h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] transition-all duration-500 shadow-sm ${className}`}
      variants={cardVariants}
      whileHover="hoverOverlay"
      // Re-assign whileHover for the card container specifically using an object form, 
      // or rely on variants. But let's just do it cleanly via direct props for the card lifting:
      onHoverStart={(e) => {}}
      animate={{ y: 0 }} // Just filler, handled by stagger
    >
      {/* Dynamic Hover Lift */}
      <motion.div 
        className="w-full h-full flex flex-col"
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)",
          borderColor: "rgba(16, 185, 129, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Image Hub */}
        <div className="relative w-full aspect-video overflow-hidden">
          <motion.div className="w-full h-full" variants={imageHoverVariants}>
            {imageErr ? (
              <div className="w-full h-full object-cover bg-green-950/20"></div>
            ) : (
              <Image
                src={image}
                alt={title}
                width={448}
                height={252}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImageErr(true)}
              />
            )}
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none"
            variants={overlayVariants}
            initial="initialOverlay"
          />
        </div>

        {/* Content Box */}
        <div className="flex-1 flex flex-col p-6 sm:p-8 z-10 bg-white dark:bg-[#0a0a0a]">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 min-h-[4.5rem] text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300"
                aria-label="View on GitHub"
              >
                <GitHubIcon className="h-4 w-4 flex-shrink-0" />
                <span>Code</span>
              </Link>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-green-500/20 hover:bg-green-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                aria-label="View Live Demo"
              >
                <ExternalLinkIcon className="h-4 w-4 flex-shrink-0" />
                <span>Demo</span>
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/60">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Icons
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
