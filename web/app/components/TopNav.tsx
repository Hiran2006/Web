"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActivePath, setIsActivePath] = useState<string | null>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active path
  useEffect(() => {
    const isActive = (path: string) => {
      if (path === "/") return pathname === path;
      return pathname.startsWith(path);
    };
    const activePath =
      navItems.find((item) => isActive(item.href))?.href || null;
    setIsActivePath(activePath);
  }, [pathname]);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const NavLink = ({ item }: { item: (typeof navItems)[0] }) => (
    <a
      href={item.href}
      className={`relative px-3 py-2 md:px-4 md:py-2 font-medium group overflow-hidden block
        ${
          isActivePath === item.href
            ? "text-green-400"
            : "text-gray-400 hover:text-green-300"
        } transition-colors`}
      aria-current={isActivePath === item.href ? "page" : undefined}
    >
      <span className="relative z-10">{item.label}</span>
      <span
        className={`absolute inset-0 bg-green-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out ${
          isActivePath === item.href ? "scale-100" : ""
        }`}
      ></span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform ${
          isActivePath === item.href
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
        } transition-transform duration-300 ease-in-out`}
      ></span>
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-green-400 text-2xl font-bold hover:text-green-300 transition-colors"
            aria-label="Home"
          >
            Hiran
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink item={item} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-green-400 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "64px" }}
      >
        <nav className="h-full overflow-y-auto">
          <ul className="flex flex-col items-center justify-center h-full space-y-8 p-4">
            {navItems.map((item) => (
              <li key={item.label} className="w-full text-center">
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
