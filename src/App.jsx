import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Home from './pages/home';
import About from './pages/about';
import Insights from './pages/insights';
import './App.css';
import ExploreMore from './pages/more';
import ContactPopup from "./components/contactForm";
import MyWork from './pages/my-work';
import Sidebar from './components/Sidebar';
import Experience from './pages/experience';

const routeOrder = ["/", "/about", "/my-work", "/experience", "/insights", "/more"];

function AnimatedRoutes() {
  const location = useLocation();
  const [hasMounted, setHasMounted] = useState(false);
  const previousPathRef = useRef(location.pathname);
  const previousIndex = routeOrder.indexOf(previousPathRef.current);
  const currentIndex = routeOrder.indexOf(location.pathname);
  const direction = currentIndex >= previousIndex ? 1 : -1;

  previousPathRef.current = location.pathname;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const pageMotion = {
    initial: hasMounted ? { opacity: 0, x: direction * 64 } : { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction * -64 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`${location.pathname}${location.search}`}
        initial={pageMotion.initial}
        animate={pageMotion.animate}
        exit={pageMotion.exit}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/more" element={<ExploreMore />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="app-container min-h-screen flex flex-col overflow-x-hidden bg-graphite text-graphite-ink">
        <Sidebar />
        <main id="main-content" className="flex-1 overflow-x-hidden pl-0 md:pl-[72px] lg:pl-[88px]">
          <AnimatedRoutes />
        </main>
        <Footer onContactClick={() => setContactOpen(true)} />
        <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
