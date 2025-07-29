function Home() {
  return (
    <>
      <div className="max-w-sm m-3 p-6 rounded-xl shadow-2xl bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400">
        <div className="flex items-center mb-4">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJTCMSpHumb6Oe6XxLNNDX8-B6NrKMcEX2qsKQDhdbdsV9cUG8=s360-c-no"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400 shadow-lg"
          />
          <div>
            <h2 className="text-xl font-semibold m-0 text-white">Hiran S</h2>
            <p className="text-blue-200 m-0">Web Developer | Game Developer</p>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://github.com/Hiran2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 text-white hover:text-blue-200 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.23 9.23 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/hiran2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 text-white hover:text-blue-200 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/your_twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 text-white hover:text-blue-200 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.16-10.126-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.015-.636A10.025 10.025 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="mailto:hiransomeemail@example.com" aria-label="Email">
            <svg
              className="w-6 h-6 text-white hover:text-blue-200 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065l-11.99-8.065v18h23.98v-18zm11.99-11.065h-23.98l11.99 8.065z" />
            </svg>
          </a>
        </div>
        <blockquote className="italic text-blue-100 border-l-4 border-blue-900 pl-3 bg-blue-600 bg-opacity-40 rounded-md py-2 px-3 shadow-md">
          "The best way to get started is to quit talking and begin doing."
        </blockquote>
      </div>
      {/* Featured Projects Section */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Featured Projects
        </h2>
        {/* Project Card Example */}
        <div className="bg-white rounded-2xl shadow-lg p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-2xl mx-auto">
          {/* Project Image/Logo */}
          <img
            src="https://via.placeholder.com/80x80?text=Logo"
            alt="Project Logo"
            className="w-20 h-20 rounded-xl object-cover border border-blue-100"
          />
          {/* Project Details */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Portfolio Website
            </h3>
            <p className="text-gray-700 mb-2">
              A modern, responsive portfolio website to showcase my projects,
              skills, and experience. Built with React, TypeScript, and Tailwind
              CSS. Includes GitHub integration and a beautiful UI.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                React
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                TypeScript
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Tailwind CSS
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/Hiran2006/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                GitHub
              </a>
              <a
                href="https://yourportfolio.demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
