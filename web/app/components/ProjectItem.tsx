import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData | string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export default function ProjectItem({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  className = '',
}: ProjectItemProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-green-500/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/5 ${className}`}>
      {/* Image with hover overlay */}
      <div className="relative aspect-video overflow-hidden">
        {typeof image === 'string' ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500/10 to-transparent">
            <span className="text-gray-500">Project Image</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-sm text-white backdrop-blur-sm hover:bg-green-500 hover:text-black"
                aria-label="View on GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-sm text-white backdrop-blur-sm hover:bg-green-500 hover:text-black"
                aria-label="View Live Demo"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-green-400 line-clamp-1">
          {title}
        </h3>
        <p className="mb-4 text-gray-300 line-clamp-3">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="whitespace-nowrap rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
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