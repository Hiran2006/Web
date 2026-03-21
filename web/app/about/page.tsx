import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import skillsData from "@/data/skill";
import GithubActivity from "../components/GithubActivity";
import JourneyTimeline from "../components/JourneyTimeline";

export const metadata: Metadata = {
  title: "About | Hiran",
  description: "Learn more about Hiran - Web Developer",
};

const skills = skillsData.skills;

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-4 transition-colors">
            About Me
          </h1>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-full transform rotate-12"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-green-500/30">
              <Image
                src="/hiran_pic.png"
                alt="Hiran"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-800 dark:text-white transition-colors transition-colors">
              Hi, I&apos;m Hiran
            </h2>
            <p className="text-gray-700 dark:text-gray-700 dark:text-gray-300 transition-colors leading-relaxed transition-colors">
              I&apos;m a passionate web developer with a love for creating
              beautiful, responsive, and user-friendly websites. With a strong
              foundation in modern web technologies, I enjoy turning ideas into
              reality through clean and efficient code.
            </p>
            <p className="text-gray-700 dark:text-gray-700 dark:text-gray-300 transition-colors leading-relaxed transition-colors">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying
              the great outdoors.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3 transition-colors">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 pt-2">
              <Link
                href="https://github.com/Hiran2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="http://linkedin.com/in/hirans2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="mailto:hirans2006@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-16 transition-colors drop-shadow-sm">
            My Journey
          </h2>
          <JourneyTimeline />
        </div>

        <GithubActivity />
      </div>
    </main>
  );
}
