import { useState, useEffect } from 'react';

const Github = () => {
  const [repos, setRepos] = useState<string[]>([]);
  useEffect(() => {
    fetch('https://api.github.com/users/Hiran2006/repos')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.map((repo: any) => repo.name));
        }
      });
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center justify-center text-center m-10">
        <h1 className="text-blue-900 text-4xl font-extrabold">
          GitHub Repositories
        </h1>
        <p className="text-blue-700 text-lg font-medium">by Hiran S</p>
      </div>
      <div className="bg-blue-400/90 rounded-3xl shadow-2xl px-10 py-10 min-w-[340px] max-w-[440px] w-full">
        <ul className="grid gap-4">
          {repos.map(name => (
            <li
              key={name}
              className="bg-white hover:bg-blue-50 text-blue-900 my-1 py-4 px-5 rounded-xl font-semibold shadow transition-all duration-200 border border-blue-100 flex items-center gap-3"
            >
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              {formatRepoName(name)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

function formatRepoName(name: string) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default Github;
