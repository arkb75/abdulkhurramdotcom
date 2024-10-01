import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { highlightProject, glowPageBorder } from '../redux/actions';
import { X } from 'lucide-react';

const SkillsSection = ({ isOpen, onClose }) => {
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

  // Mapping of skills to project titles
  const skillToProjects = {
    Java: ['Amazon Marketplace Analytic Software'],
    Python: ['Constructify (W.I.P)'],
    JavaScript: ['Constructify (W.I.P)', 'Real Estate Management Platform'],
    TypeScript: [],
    'C/C++': [],
    'C#': [],
    SQL: ['Real Estate Management Platform', 'Amazon Marketplace Analytic Software'],
    'HTML/CSS': ['Constructify (W.I.P)', 'Real Estate Management Platform'],
    'Node.js': ['Real Estate Management Platform'],
    'React.js': [], // Relevant to the site itself
    Redux: [], // Relevant to the site itself
    'Vue.js': ['Constructify (W.I.P)'],
    'Express.js': ['Real Estate Management Platform'],
    Django: ['Constructify (W.I.P)'],
    Git: [
      'Constructify (W.I.P)',
      'Real Estate Management Platform',
      'Amazon Marketplace Analytic Software',
      'High-Performance Media Distribution Platform',
    ],
    OracleDB: ['Real Estate Management Platform'],
    MySQL: [],
    JUnit: [],
    RDBMS: ['Real Estate Management Platform'],
    Unit: [],
    Integration: [],
    'End-to-End': [],
    Smoke: [],
    'A/B': [],
  };

  const pageGlowSkills = ['React.js', 'Redux'];

  const handleSkillClick = (skill) => {
    const projectsArray = skillToProjects[skill];
    if (projectsArray && projectsArray.length > 0) {
      const title = projectsArray[0];
      const projectId = title.replace(/\s+/g, '-');
      const projectElement = document.getElementById(projectId);
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Highlight the project
        dispatch(highlightProject(title));

        // Remove highlight after 3 seconds
        setTimeout(() => {
          dispatch(highlightProject(null));
        }, 3000);
      }
    }

    // Check if the skill should trigger the page outline glow
    if (pageGlowSkills.includes(skill)) {
      dispatch(glowPageBorder(true));

      // Remove the glow after a set duration
      setTimeout(() => {
        dispatch(glowPageBorder(false));
      }, 3000);
    }

    // Close the SkillsSection on small screens after clicking a skill
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* For large screens, show the fixed SkillsSection */}
      <div
        className="hidden lg:block fixed top-20 right-4 w-64 bg-white rounded-2xl shadow-lg p-4 z-40"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
        <div
          className="skills-list"
          style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}
        >
          {Object.entries(skills).map(([category, skillsInCategory]) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">{category}</h3>
              <div className="flex flex-wrap">
                {skillsInCategory.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    className={`px-3 py-1 m-1 text-gray-700 rounded-full transition-colors duration-300 ${
                      activeSkills.includes(skill)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
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

      {/* For small screens, show the overlay when isOpen is true */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex items-center justify-center"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <div className="relative bg-white rounded-2xl p-6 shadow-lg w-11/12 max-h-[80vh] overflow-y-auto">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
            {Object.entries(skills).map(([category, skillsInCategory]) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2 text-center">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center">
                  {skillsInCategory.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className={`px-3 py-1 m-1 text-gray-700 rounded-full transition-colors duration-300 ${
                        activeSkills.includes(skill)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
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