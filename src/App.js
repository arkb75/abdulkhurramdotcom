import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

const App = () => {
  // Refs for each project
  const constructifyRef = useRef(null);
  const realEstateRef = useRef(null);
  const amazonRef = useRef(null);
  const mediaRef = useRef(null);

  // Get the state from Redux
  const glowPageBorder = useSelector((state) => state.glow.glowPageBorder);

  // Pass refs as an object to the components
  const projectRefs = {
    constructifyRef,
    realEstateRef,
    amazonRef,
    mediaRef,
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans transition-all duration-500 ${
        glowPageBorder ? 'page-outline-glow' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="space-y-12">
          <AboutMeSection />
          <ProjectsSection projectRefs={projectRefs} />
          <SkillsSection projectRefs={projectRefs} />
        </main>
      </div>
    </div>
  );
};

export default App;