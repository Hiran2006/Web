import { useState, useEffect } from 'react'

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C#': '#00ff00',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Shell: '#89e051',
  Ruby: '#701516',
  Rust: '#dea584',
  Dart: '#00B4AB',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
}

import { useRef } from 'react'

const Github = () => {
  const [repos, setRepos] = useState<Array<{ name: string; language: string }>>(
    []
  )
  const [isLoading, setIsLoading] = useState(true)
  const [tooltipRepo, setTooltipRepo] = useState<string | null>(null)
  const tooltipTimeout = useRef<number | null>(null)

  // Handlers for tap/long-press
  const handleTouchStart = (repoName: string) => {
    tooltipTimeout.current = setTimeout(() => setTooltipRepo(repoName), 500)
  }
  const handleTouchEnd = () => {
    if (tooltipTimeout.current) {
      clearTimeout(tooltipTimeout.current)
      tooltipTimeout.current = null
    }
    setTimeout(() => setTooltipRepo(null), 1200)
  }

  // Handler for hover
  const handleMouseEnter = (repoName: string) => setTooltipRepo(repoName)
  const handleMouseLeave = () => setTooltipRepo(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://api.github.com/users/Hiran2006/repos')
      .then(res => res.json())
      .then((data: Array<{ name: string; language: string }>) => {
        if (Array.isArray(data)) {
          setRepos(
            data.map(repo => ({
              name: repo.name,
              language: repo.language,
            }))
          )
        }
      })
      .catch(error => {
        console.error('Error fetching repositories:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-blue-700 font-medium">
          Loading repositories...
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center m-10">
        <h1 className="text-blue-900 text-4xl font-extrabold">
          GitHub Repositories
        </h1>
        <p className="text-blue-700 text-lg font-medium">by Hiran S</p>
      </div>
      <div className="bg-blue-400/90 rounded-3xl shadow-2xl px-4 py-6 sm:px-8 sm:py-10 min-w-[90vw] max-w-[98vw] sm:min-w-[340px] sm:max-w-[460px] w-full overflow-x-auto">
        <ul className="grid gap-3 sm:gap-4">
          {repos.map(repo => (
            <li
              key={repo.name}
              className="bg-white hover:bg-blue-50 text-blue-900 my-1 py-3 px-3 sm:py-4 sm:px-5 rounded-xl font-semibold shadow transition-all duration-200 border border-blue-100 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="inline-block w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: repo.language
                      ? LANGUAGE_COLORS[repo.language] || '#586069'
                      : '#586069',
                  }}
                  title={repo.language || 'Unknown'}
                />
                <div className="relative">
                  <a
                    href={`https://github.com/Hiran2006/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline truncate max-w-[60vw] sm:max-w-[220px]"
                    title={formatRepoName(repo.name)}
                    onMouseEnter={() => handleMouseEnter(repo.name)}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={() => handleTouchStart(repo.name)}
                    onTouchEnd={handleTouchEnd}
                  >
                    {formatRepoName(repo.name)}
                  </a>
                  {tooltipRepo === repo.name && (
                    <div className="absolute left-1/2 -translate-x-1/2 -top-9 z-50 bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none">
                      {repo.name}
                    </div>
                  )}
                </div>
              </div>
              {repo.language && (
                <span
                  className="text-xs sm:text-sm text-gray-600 font-normal ml-0 sm:ml-2 truncate max-w-[50vw] sm:max-w-[100px]"
                  title={repo.language}
                >
                  {repo.language}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function formatRepoName(name: string) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default Github
