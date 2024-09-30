// SkillsSection.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { highlightProject, glowPageBorder } from '../redux/actions';
import { XIcon } from 'lucide-react'; // Import close icon

const SkillsSection = ({ projectRefs, isOpen, onClose }) => {
  const dispatch = useDispatch();

  // Get the active skills from Redux
  const activeSkills = useSelector((state) => state.skills.activeSkills);

  // Skill categories and their respective skills
  const skills = {
    Languages: [
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'C/C++',
      'C#',
      'SQL',
      'HTML/CSS',
      'Node.js',
    ],
    Frameworks: ['React.js', 'Redux', 'Vue.js', 'Express.js', 'Django'],
    Tools: ['Git', 'OracleDB', 'MySQL', 'JUnit', 'RDBMS'],
    Testing: ['Unit', 'Integration', 'End-to-End', 'Smoke', 'A/B'],
  };

// Mapping of skills to projects (for click functionality)
const skillToProjects = {
    Java: [projectRefs.amazonRef],
    Python: [projectRefs.constructifyRef],
    JavaScript: [projectRefs.constructifyRef, projectRefs.realEstateRef],
    TypeScript: [],
    'C/C++': [],
    'C#': [],
    SQL: [projectRefs.realEstateRef, projectRefs.amazonRef],
    'HTML/CSS': [projectRefs.constructifyRef, projectRefs.realEstateRef],
    'Node.js': [projectRefs.realEstateRef],
    'React.js': [], // Relevant to the site itself
    Redux: [], // Relevant to the site itself
    'Vue.js': [projectRefs.constructifyRef],
    'Express.js': [projectRefs.realEstateRef],
    Django: [projectRefs.constructifyRef],
    Git: [
      projectRefs.constructifyRef,
      projectRefs.realEstateRef,
      projectRefs.amazonRef,
      projectRefs.mediaRef,
    ],
    OracleDB: [projectRefs.realEstateRef],
    MySQL: [],
    JUnit: [],
    RDBMS: [projectRefs.realEstateRef],
    Unit: [],
    Integration: [],
    'End-to-End': [],
    Smoke: [],
    'A/B': [],
  };

  // Skills that should trigger the page outline glow
  const pageGlowSkills = ['React.js', 'Redux'];

  const handleSkillClick = (skill) => {
    const projectRefsArray = skillToProjects[skill];
    if (projectRefsArray && projectRefsArray.length > 0) {
      // Scroll to the first relevant project
      const projectRef = projectRefsArray[0];
      if (projectRef.current) {
        projectRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });

        // Highlight the project using Redux
        dispatch(highlightProject(projectRef));

        // Remove highlight after 3 seconds
        setTimeout(() => {
          dispatch(highlightProject(null));
        }, 3000);
      }
    }

    // Check if the skill should trigger the page outline glow
    if (pageGlowSkills.includes(skill)) {
      // Trigger the page outline glow
      dispatch(glowPageBorder(true));

      // Remove the glow after a set duration
      setTimeout(() => {
        dispatch(glowPageBorder(false));
      }, 3000);
    }
  };

  return (
    <>
      {/* For large screens, show the fixed SkillsSection */}
      <div
        className="hidden lg:block fixed top-20 right-4 w-64 bg-white rounded-2xl shadow-lg p-4
        transform transition-transform duration-300 overflow-y-auto max-h-screen"
        >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
        {Object.entries(skills).map(([category, skillsInCategory]) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">{category}</h3>
            <div className="flex flex-wrap">
              {skillsInCategory.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillClick(skill)}
                  className={`bg-gray-100 rounded-full px-3 py-1 m-1 text-gray-700 hover:bg-gray-200 hover:scale-105 transition-all duration-300 ${
                    activeSkills.includes(skill) ? 'bg-blue-200' : ''
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* For small screens, show the overlay when isOpen is true */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4 overflow-y-auto">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={onClose}
            >
              <XIcon size={24} />
            </button>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
            {Object.entries(skills).map(([category, skillsInCategory]) => (
              <div key={category} className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap">
                  {skillsInCategory.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => {
                        handleSkillClick(skill);
                        onClose(); // Close the SkillsSection after clicking
                      }}
                      className={`bg-gray-100 rounded-full px-3 py-1 m-1 text-gray-700 hover:bg-gray-200 hover:scale-105 transition-all duration-300 ${
                        activeSkills.includes(skill) ? 'bg-blue-200' : ''
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsSection;