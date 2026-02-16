"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// Move variants inside component to avoid SSR issues
const getVariants = () => ({
  container: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  },
  menu: {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
  },
});

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
    <motion.a
      href={item.href}
      className={`relative px-3 py-2 md:px-4 md:py-2 font-medium group overflow-hidden block
        ${
          isActivePath === item.href
            ? "text-green-400"
            : "text-gray-400 hover:text-green-300"
        } transition-colors`}
      aria-current={isActivePath === item.href ? "page" : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{item.label}</span>
      <motion.span
        className={`absolute inset-0 bg-green-500/10 rounded-lg`}
        initial={{ scale: 0 }}
        animate={{
          scale: isActivePath === item.href || isMenuOpen ? 1 : 0,
          opacity: isMenuOpen ? 0.5 : 1,
        }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 origin-left"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isActivePath === item.href ? 1 : 0,
          opacity: isMenuOpen ? 0 : 1,
        }}
        whileHover={{
          scaleX: isMenuOpen ? 0 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.a>
  );

  // Get variants inside component to avoid SSR issues
  const variants = getVariants();

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="text-green-400 text-2xl font-bold hover:text-green-300 transition-colors"
              aria-label="Home"
            >
              Hiran
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex space-x-2"
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

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-gray-400 hover:text-green-400 focus:outline-none"
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
                >
                  <FiX className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FiMenu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg md:hidden pt-16 z-40 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants.menu}
          >
            <motion.div
              className="container mx-auto px-4 py-8 flex flex-col space-y-4"
              variants={variants.container}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={variants.item}
                  custom={index}
                  className="border-b border-gray-800 last:border-0"
                >
                  <NavLink item={item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
