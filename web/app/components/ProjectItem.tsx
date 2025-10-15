"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (index = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 0.8,
      delay: 0.2 * index,
      duration: 0.8,
    },
  }),
} as const;

const imageHoverVariants: Variants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

const overlayVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.1,
    },
  },
} as const;

const buttonVariants: Variants = {
  initial: { y: 10, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 12,
      mass: 0.5,
      delay: 0.15,
    },
  },
} as const;

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      type: "spring" as const,
      stiffness: 150,
      damping: 12,
      mass: 0.5,
    },
  }),
} as const;

function Tag({ tag, index }: { tag: string; index: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <span className="inline-block whitespace-nowrap rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400">
        {tag}
      </span>
    );
  }

  return (
    <motion.span
      custom={index}
      variants={tagVariants}
      className="inline-block whitespace-nowrap rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400"
      whileHover={{
        scale: 1.05,
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
  index = 0,
}: ProjectItemProps) {
  const [imageErr, setImageErr] = useState(false);

  // Remove isMounted check and always render the same structure
  return (
    <motion.div
      className={`group relative w-full max-w-md h-full flex flex-col overflow-hidden rounded-xl border border-green-500/20 bg-black/50 backdrop-blur-sm transition-all duration-300 ${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      custom={index}
      whileHover={{
        boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
        borderColor: "rgba(16, 185, 129, 0.5)",
      }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      {/* Image with hover overlay */}
      <div className="relative w-full aspect-video overflow-hidden">
        <motion.div className="w-full h-full" variants={imageHoverVariants}>
          {imageErr ? (
            <div className="w-full h-full object-cover bg-green-950"></div>
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
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          variants={overlayVariants}
          initial="initial"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <motion.div
          className="flex-1"
          variants={{
            initial: { opacity: 0, y: 10 },
            onscreen: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.3,
              },
            },
          }}
        >
          <motion.h3
            className="text-xl font-bold text-green-400 line-clamp-1 mb-3"
            variants={{
              initial: { opacity: 0, y: 5 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 },
              },
            }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-300 line-clamp-3 mb-4 min-h-[4.5rem]"
            variants={{
              initial: { opacity: 0, y: 5 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.25 },
              },
            }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex gap-3 mb-4"
          variants={{
            initial: { opacity: 0, y: 10 },
            onscreen: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3 },
            },
          }}
        >
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-green-500/10 px-4 py-2.5 text-sm font-medium text-green-400 hover:bg-green-500/20 transition-colors"
              aria-label="View on GitHub"
            >
              <GitHubIcon className="h-4 w-4 flex-shrink-0" />
              <span>View Code</span>
            </Link>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-green-500/90 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-500 transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLinkIcon className="h-4 w-4 flex-shrink-0" />
              <span>Live Demo</span>
            </a>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div
          className="mt-auto pt-4 border-t border-gray-800"
          variants={{
            onscreen: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Tag key={tag} tag={tag} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
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
