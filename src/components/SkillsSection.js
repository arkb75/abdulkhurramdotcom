import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { highlightProject, glowPageBorder } from '../redux/actions';

const SkillsSection = ({ projectRefs }) => {
  const [selectedCategory, setSelectedCategory] = useState('Languages');
  const dispatch = useDispatch();

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

  const categories = Object.keys(skills);

  // Mapping of skills to projects
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
    Unit: [projectRefs.amazonRef],
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
    <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category
                ? 'bg-gray-700 text-white'
                : 'bg-gray-200 text-gray-700'
            } hover:bg-gray-300 transition-colors duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {skills[selectedCategory].map((skill) => (
          <button
            key={skill}
            onClick={() => handleSkillClick(skill)}
            className="bg-gray-100 rounded-full px-4 py-2 m-1 text-gray-700 hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;