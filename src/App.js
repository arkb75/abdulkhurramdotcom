import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Taskbar from './components/Taskbar';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import ResearchSection from './components/ResearchSection';
import SkillsSection from './components/SkillsSection';
import ResumeSelector from './components/ResumeSelector'; // Import the new component

import { Code } from 'lucide-react';

const App = () => {
  // Get the state from Redux
  const glowPageBorder = useSelector((state) => state.glow.glowPageBorder);

  // State to manage the visibility of the SkillsSection on small screens
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  return (
    <Router>
      <div
        className={`min-h-screen bg-gray-50 pt-12 px-4 sm:px-6 lg:px-8 font-sans transition-all duration-500 ${
          glowPageBorder ? 'page-outline-glow' : ''
        }`}
      >
        <Taskbar />
        <SkillsSection
          isOpen={isSkillsOpen}
          onClose={() => setIsSkillsOpen(false)}
        />
        {/* Toggle Button for smaller screens */}
        {!isSkillsOpen && (
          <button
            className="lg:hidden fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-lg z-50 hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsSkillsOpen(true)}
            aria-label="Open Skills"
          >
            <Code size={24} />
          </button>
        )}
        <div className="max-w-3xl mx-auto mt-16">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main className="space-y-12">
                  <AboutMeSection />
                  <ProjectsSection />
                  <ResearchSection />
                </main>
              }
            />
            <Route path="/resume" element={<ResumeSelector />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;