"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const getVariants = () => ({
  container: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 },
    },
  },
  menu: {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 25 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  },
});

export default function TopNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActivePath =
    navItems.find((item) => {
      if (item.href === "/") return pathname === item.href;
      return pathname.startsWith(item.href);
    })?.href || null;

  // Add scroll handler to detect scrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const NavLink = ({ item }: { item: (typeof navItems)[0] }) => {
    const active = isActivePath === item.href;
    return (
      <Link
        href={item.href}
        className={`relative px-4 py-2 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 block
          ${active
            ? "text-emerald-500 dark:text-cyan-400 font-bold"
            : "text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-cyan-400"
          }`}
        aria-current={active ? "page" : undefined}
      >
        <span className="relative z-10">{item.label}</span>
        {active && (
          <motion.span
            layoutId="activeNavBackground"
            className="absolute inset-0 bg-emerald-500/10 dark:bg-cyan-500/10 rounded-xl"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  const variants = getVariants();

  return (
    <motion.header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 px-4 sm:px-6 lg:px-8" 
          : "top-0 px-0"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div 
        className={`mx-auto transition-all duration-500 ${
          isScrolled 
            ? "max-w-6xl glass-panel rounded-2xl border border-gray-200/50 dark:border-gray-800/80 shadow-2xl px-6 md:px-8 py-2.5" 
            : "max-w-full bg-transparent px-4 sm:px-8 py-4 border-b border-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-2xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-wider"
              aria-label="Home"
            >
              HIRAN.
            </Link>
          </motion.div>

          {/* Desktop Navigation & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.nav
              className="flex space-x-1"
              initial="hidden"
              animate="visible"
              variants={variants.container}
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={variants.item}>
                  <NavLink item={item} />
                </motion.div>
              ))}
            </motion.nav>
            
            <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800" />
            
            <ThemeSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeSwitcher />
            <motion.button
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/80 text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-cyan-400 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FiX className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FiMenu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-x-4 top-24 max-w-lg mx-auto bg-white/95 dark:bg-[#030303]/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/80 rounded-2xl shadow-2xl p-6 z-40 overflow-y-auto md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants.menu}
          >
            <motion.div
              className="flex flex-col space-y-3"
              variants={variants.container}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={variants.item}
                  custom={index}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-3 text-base font-semibold rounded-xl block transition-all duration-300
                      ${isActivePath === item.href
                        ? "bg-emerald-500/10 dark:bg-cyan-500/10 text-emerald-600 dark:text-cyan-400 font-bold"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
