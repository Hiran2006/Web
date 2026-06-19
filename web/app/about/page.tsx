import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import skillsData from "@/data/skill";
import GithubActivity from "../components/GithubActivity";
import JourneyTimeline from "../components/JourneyTimeline";

export const metadata: Metadata = {
  title: "About | Hiran",
  description: "Learn more about Hiran - Web Developer & Game Developer",
};

const skills = skillsData.skills;

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030303] text-black dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[25rem] h-[25rem] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4 tracking-tight">
            About Me
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Profile info section */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center mb-24">
          {/* Avatar Box */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Outer decorative borders */}
              <div className="absolute inset-[-12px] border border-dashed border-emerald-500/20 rounded-3xl pointer-events-none animate-spin-slow" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-15 pointer-events-none" />
              
              <div className="w-full h-full rounded-3xl p-1.5 bg-gradient-to-tr from-emerald-500/20 via-transparent to-cyan-500/20 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900/5 dark:bg-slate-900/40 relative">
                  <Image
                    src="/hiran_pic.png"
                    alt="Hiran"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Biography Box */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Hi, I&apos;m <span className="text-emerald-500 dark:text-cyan-400">Hiran</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a software engineering enthusiast currently pursuing my B.Tech degree. My passion lies at the intersection of game development and modern web applications. I love building highly interactive, beautiful, and fluid digital experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I focus heavily on clean architecture, smooth user interaction, and premium design aesthetics. By exploring advanced concepts in front-end engineering and Shader programming, I constantly strive to push the limits of what is possible on the web.
            </p>

            {/* Social Icons list */}
            <div className="flex flex-wrap gap-3.5 pt-4">
              <Link
                href="https://github.com/Hiran2006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="http://linkedin.com/in/hirans2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="mailto:hirans2006@gmail.com"
                className="w-11 h-11 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="glass-panel rounded-3xl p-8 border border-gray-200/60 dark:border-gray-800/80 bg-white/50 dark:bg-[#07070a]/50 shadow-2xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
            <span className="w-2.5 h-6 rounded-full bg-gradient-to-b from-emerald-500 to-cyan-500" />
            Skills & Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-4 py-2.5 rounded-2xl text-sm font-bold glass-panel text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-800/80 shadow-sm hover:border-emerald-500/20 dark:hover:border-cyan-500/20 transition-colors duration-300 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-cyan-400 mr-2.5" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-16 md:mt-24 mb-24">
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent text-center mb-16 tracking-tight">
            My Journey
          </h2>
          <JourneyTimeline />
        </div>

        {/* Github Statistics */}
        <div className="mt-16">
          <GithubActivity />
        </div>
      </div>
    </main>
  );
}
