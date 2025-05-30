import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
const RoutesAvailable = ({
  setShowRoutes,
}: {
  setShowRoutes: Dispatch<SetStateAction<boolean>>;
}) => {
  const routes = [
    { name: 'Home', path: '/' },
    {
      name: 'Project',
      path: '/project',
    },
    { name: 'Resume', path: '/resume' },
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

export default RoutesAvailable;
