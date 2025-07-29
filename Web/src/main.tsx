import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import Home from './home.tsx'
import Project from './project.tsx'
import RoutesAvailable from './components/RouteAvailable.tsx'
import Resume from './Resume.tsx'

function App() {
  const [showRoutes, setShowRoutes] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">
        <h2 className="ml-3 text-2xl font-bold text-white tracking-wide drop-shadow">
          Portfolio
        </h2>
        <nav>
          <button
            onClick={() => setShowRoutes(prev => !prev)}
            className="rounded-full p-2 bg-white hover:bg-blue-100 transition-colors shadow focus:outline-none mr-2"
            aria-label="Show routes"
          >
            {/* Home Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="#2563eb"
            >
              <rect x="5" y="7" width="15" height="2" rx="1" />
              <rect x="5" y="12" width="15" height="2" rx="1" />
              <rect x="5" y="17" width="15" height="2" rx="1" />
            </svg>
          </button>
        </nav>
      </div>
      {showRoutes && <RoutesAvailable setShowRoutes={setShowRoutes} />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/index" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
createRoot(document.getElementById('root')!).render(<App />)
