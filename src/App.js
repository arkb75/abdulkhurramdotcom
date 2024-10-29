import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Taskbar from './components/Taskbar';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import ResearchSection from './components/ResearchSection';
import SkillsSection from './components/SkillsSection';
import ResumeSelector from './components/ResumeSelector';

import { Code } from 'lucide-react';

const App = () => {
  const glowPageBorder = useSelector((state) => state.glow.glowPageBorder);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  return (
    <Router>
      <div
        className={`min-h-screen bg-gray-50 pt-12 px-4 sm:px-6 font-sans transition-all duration-500 ${
          glowPageBorder ? 'page-outline-glow' : ''
        }`}
      >
        <Taskbar />

        {/* Toggle Button for smaller screens */}
        {!isSkillsOpen && (
          <button
            className="xl:hidden fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-lg z-50 hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsSkillsOpen(true)}
            aria-label="Open Skills"
          >
            <Code size={24} />
          </button>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] max-w-7xl mx-auto mt-16">
          {/* Main Content */}
          <div className="main-content max-w-3xl mx-auto">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <main className="space-y-12">
                    <AboutMeSection />
                    <ProjectsSection setIsSkillsOpen={setIsSkillsOpen} />
                    <ResearchSection />
                  </main>
                }
              />
              <Route path="/resume" element={<ResumeSelector />} />
            </Routes>
          </div>

          {/* Skills Section */}
          <SkillsSection
            isOpen={isSkillsOpen}
            onClose={() => setIsSkillsOpen(false)}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;