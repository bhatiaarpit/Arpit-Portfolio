import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Navbar from './components/navbarSection';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import CustomCursor from "./components/customCursor";
import Insights from './pages/insights';
import './App.css';
import './index.css';
import ExploreMore from './pages/more';
import ContactPopup from "./components/contactForm";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      <div className="app-container flex bg-gray-900 text-gray-300">

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar onBookCall={() => setContactOpen(true)} />

          {/* Page Content */}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/more" element={<ExploreMore />} />
            </Routes>
          </div>
          <CustomCursor/>
          <Footer onStartProject={() => setContactOpen(true)} />
          <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
        </div>
      </div>
    </Router>
  );
}

export default App;
