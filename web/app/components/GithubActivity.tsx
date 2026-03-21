"use client";

import { GitHubContributions } from "@msh-01/react-github-activity";
export default function GithubActivity() {
  return (
    <div className="github-activity-wrapper w-full max-w-4xl mx-auto my-12 p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">
        GitHub Activity & Statistics
      </h3>
      <div className="flex justify-center overflow-x-auto pb-4">
        <GitHubContributions
          username="Hiran2006"
          token={process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}
          showStats={true}
          showLabels={true}
        />
      </div>
    </div>
  );
}
