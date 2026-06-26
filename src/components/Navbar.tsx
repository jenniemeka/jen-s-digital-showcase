import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" aria-label="Jennifer Omojo, home" className="group flex items-center gap-2.5">
          <span className="relative inline-flex h-9 w-9 items-center justify-center">
            <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="jo-stroke" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="hsl(25 95% 60%)" />
                  <stop offset="100%" stopColor="hsl(40 95% 65%)" />
                </linearGradient>
                <linearGradient id="jo-fill" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="hsl(25 95% 60%)" />
                  <stop offset="100%" stopColor="hsl(15 90% 55%)" />
                </linearGradient>
              </defs>
              {/* O ring */}
              <circle cx="20" cy="20" r="16" stroke="url(#jo-stroke)" strokeWidth="2.5" />
              {/* J inside */}
              <path
                d="M24 10 V23 a5 5 0 0 1 -10 0"
                stroke="url(#jo-fill)"
                strokeWidth="2.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* J top serif accent */}
              <circle cx="24" cy="10" r="1.8" fill="url(#jo-fill)" />
            </svg>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 group-hover:opacity-70 transition-opacity" />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-tight text-foreground">Jennifer Omojo</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">AI Product Engineer</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
