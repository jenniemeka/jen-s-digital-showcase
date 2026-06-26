import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import LofiBackground from "@/components/LofiBackground";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollManager = () => {
  const { pathname, key } = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
  const positions = useRef<Map<string, number>>(new Map());
  const lastKey = useRef<string>(key);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Save scroll position before leaving the current entry
  useEffect(() => {
    const saveCurrent = () => {
      positions.current.set(lastKey.current, window.scrollY);
    };
    window.addEventListener("beforeunload", saveCurrent);
    return () => {
      saveCurrent();
      window.removeEventListener("beforeunload", saveCurrent);
    };
  }, [pathname, key]);

  useLayoutEffect(() => {
    lastKey.current = key;
    if (navType === "POP") {
      // Back/forward: restore saved position (or top if unknown)
      const saved = positions.current.get(key) ?? 0;
      requestAnimationFrame(() => {
        window.scrollTo({ top: saved, left: 0, behavior: "instant" as ScrollBehavior });
      });
    } else {
      // New navigation: always top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
    }
  }, [pathname, key, navType]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <LofiBackground />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
