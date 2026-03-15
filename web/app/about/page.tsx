import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import skillsData from "@/data/skills.json";

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
          <h2 className="text-2xl font-bold text-center text-green-600 dark:text-green-400 mb-10 transition-colors">
            My Journey
          </h2>
          <div className="relative pl-6 md:pl-0">
            <div className="absolute left-0 md:left-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2 transition-colors"></div>

            <div className="mb-10 md:mb-8 relative">
              <div className="absolute -left-[1.8rem] top-1.5 w-4 h-4 bg-green-500 rounded-full z-10 md:hidden"></div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 mb-2 md:mb-0 text-left md:text-right">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
                    Started Learning Web Development
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 transition-colors">2020</p>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full z-10 mb-2 md:mb-0 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0">
                  <p className="text-gray-700 dark:text-gray-300 transition-colors">
                    Began my journey into web development with HTML, CSS, and
                    JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10 md:mb-8 relative">
              <div className="absolute -left-[1.8rem] top-1.5 w-4 h-4 bg-green-500 rounded-full z-10 md:hidden"></div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 mb-2 md:mb-0 text-left md:text-right order-2 md:order-1">
                  <p className="text-gray-700 dark:text-gray-300 transition-colors">
                    Worked on various projects to hone my skills in modern web
                    technologies.
                  </p>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full z-10 order-1 md:order-2 mb-2 md:mb-0 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0 order-1 md:order-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
                    Building Projects
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 transition-colors">2021 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
