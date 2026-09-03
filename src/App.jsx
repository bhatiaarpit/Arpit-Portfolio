import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
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

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="app-container min-h-screen flex flex-col bg-graphite text-graphite-ink">
        <Sidebar />
        <main id="main-content" className="flex-1 pl-0 md:pl-[72px] lg:pl-[88px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/more" element={<ExploreMore />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer onContactClick={() => setContactOpen(true)} />
        <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
