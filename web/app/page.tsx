import { WhoAmI, SkillsServices, ProjectCon, JourneyTimeline, CTASection } from "./components/index";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-[#030303] min-h-screen">
      {/* 1. Hero Section */}
      <WhoAmI />

      {/* 2. What I Do / Services Section */}
      <SkillsServices />

      {/* 3. Featured Projects */}
      <ProjectCon />

      {/* 4. Journey Timeline Section */}
      <section className="relative py-24 bg-white dark:bg-[#030303] border-t border-gray-200/50 dark:border-gray-900/50 transition-colors duration-300">
        {/* Background mesh grid details */}
        <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
        <div className="absolute top-[30%] right-[-10%] w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4 tracking-tight">
              My Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <JourneyTimeline />
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <CTASection />
    </main>
  );
}

