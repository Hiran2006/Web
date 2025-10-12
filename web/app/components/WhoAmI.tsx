import Image from "next/image";

export default function WhoAmI() {
  const techStack = ["NextJS", "React", "Express", "Unity C#"];
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] bg-black text-white pt-4 pb-8 md:py-16 flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
          {/* Photo Section - Blended with background */}
          <div className="w-full lg:w-1/2 xl:w-2/5 mt-4 sm:mt-8 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-full -z-10 animate-pulse"></div>
                {/* Replace with your actual image */}
                <div className="w-full h-full rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-black/30 flex items-center justify-center">
                    <Image
                      src="/your-photo.jpg"
                      alt="Hiran"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/5 to-transparent mix-blend-overlay pointer-events-none"></div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/5 rounded-full -z-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-500/5 rounded-full -z-20"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-3/5">
            <div className="relative max-w-2xl mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl -z-10 blur-lg"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-green-400 drop-shadow-lg">
                Hi, I&apos;m <span className="text-white">Hiran</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300/90 leading-relaxed mb-6 sm:mb-8">
                A passionate Full-Stack Developer with expertise in modern web
                technologies. I specialize in building responsive, performant,
                and user-centric applications that deliver exceptional digital
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
                <a
                  href="#projects"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-green-500/20 text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-green-500/10 text-center"
                >
                  Contact Me
                </a>
              </div>

              {/* Tech Stack Icons */}
              <div className="mt-10 sm:mt-12">
                <p className="text-sm font-medium text-gray-400 mb-3">
                  TECH STACK
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gray-900/50 text-gray-200 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
