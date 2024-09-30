import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Taskbar from './components/Taskbar';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import ResearchSection from './components/ResearchSection';
import SkillsSection from './components/SkillsSection';

import { MenuIcon } from 'lucide-react'; // Import an icon for the toggle button

const App = () => {
  // Refs for each project
  const constructifyRef = useRef(null);
  const realEstateRef = useRef(null);
  const amazonRef = useRef(null);
  const mediaRef = useRef(null);

  // Get the state from Redux
  const glowPageBorder = useSelector((state) => state.glow.glowPageBorder);

  // State to manage the visibility of the SkillsSection on small screens
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  // Pass refs as an object to the components
  const projectRefs = {
    constructifyRef,
    realEstateRef,
    amazonRef,
    mediaRef,
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 pt-12 px-4 sm:px-6 lg:px-8 font-sans transition-all duration-500 ${
        glowPageBorder ? 'page-outline-glow' : ''
      }`}
    >
      <Taskbar />
      <SkillsSection
        projectRefs={projectRefs}
        isOpen={isSkillsOpen}
        onClose={() => setIsSkillsOpen(false)}
      />
      {/* Toggle Button for smaller screens */}
      <button
        className="lg:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsSkillsOpen(true)}
      >
        <MenuIcon size={24} />
      </button>
      <div className="max-w-3xl mx-auto mt-16">
        <Header />
        <main className="space-y-12">
          <AboutMeSection />
          <ProjectsSection projectRefs={projectRefs} />
          <ResearchSection />
          {/* Removed SkillsSection from here */}
        </main>
      </div>
    </div>
  );
};

export default App;