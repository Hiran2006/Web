import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import Home from './home.tsx';
import Project from './project.tsx';

function App() {
  const [showRoutes, setShowRoutes] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">
        <h2 className="ml-3 text-2xl font-bold text-white tracking-wide drop-shadow">
          Portfolio
        </h2>
        <nav>
          <button
            onClick={() => setShowRoutes(prev => !prev)}
            className="rounded-full p-2 bg-white hover:bg-blue-100 transition-colors shadow focus:outline-none"
            aria-label="Show routes"
          >
            {/* Home Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="#2563eb"
            >
              <path
                d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938
               C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 
               2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 
               45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 
               48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 
               L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 
               10.730469 L 41 5 L 35 5 z"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
      {showRoutes && <RoutesAvailable setShowRoutes={setShowRoutes} />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const RoutesAvailable = ({ setShowRoutes }: { setShowRoutes: Function }) => {
  const routes = [
    { name: 'Home', path: '/' },
    {
      name: 'Project',
      path: '/project',
    },
  ];

  return (
    <div className="fixed top-16 right-6 z-50 p-4 bg-white/95 shadow-2xl rounded-lg border border-blue-200 animate-fade-in">
      <ul className="space-y-2">
        {routes.map(route => (
          <li key={route.path}>
            <Link
              to={route.path}
              onClick={() => setShowRoutes(false)}
              className="block px-4 py-2 rounded text-blue-700 hover:bg-blue-100 font-medium transition"
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
