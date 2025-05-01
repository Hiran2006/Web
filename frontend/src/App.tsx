import { useLocation, Link, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
function App() {
  const location = useLocation();
  const navItem = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#about' },
    { name: 'Project', link: '/projects' },
    { name: 'Contact', link: '#contact' },
  ];
  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 text-white">
        <h2 className="text-3xl p-4">Portfolio</h2>
        <nav className="w-4/10 ">
          <ul className="flex justify-between items-center p-2">
            {navItem.map((item, i) => (
              <NavList
                name={item.name}
                link={item.link}
                active={location.pathname === item.link}
                key={i}
              />
            ))}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

function NavList({
  name,
  link,
  active,
}: {
  name: string;
  link: string;
  active?: boolean;
}) {
  return (
    <li
      className={
        active
          ? 'p-4 bg-gray-700 rounded-md transition duration-300 ease-in-out cursor-default select-none'
          : 'p-4 hover:bg-gray-700 rounded-md transition duration-300 ease-in-out select-none'
      }
    >
      {active ? <p>{name}</p> : <Link to={link}>{name}</Link>}
    </li>
  );
}

export default App;
