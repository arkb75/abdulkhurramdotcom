import React from 'react';
import { GithubIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { highlightProject, setActiveSkills } from '../redux/actions';
import useMediaQuery from '../hooks/useMediaQuery';

const ProjectCard = ({ project, highlightedProject, setIsSkillsOpen }) => {
  const dispatch = useDispatch();
  const isHighlighted = highlightedProject === project.title;

  // Detect if the screen width is less than 1280px (xl breakpoint)
  const isSmallScreen = useMediaQuery('(max-width: 1279px)');

  const handleInteraction = () => {
    dispatch(setActiveSkills(project.skills));
    dispatch(highlightProject(project.title));

    if (isSmallScreen) {
      setIsSkillsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    dispatch(setActiveSkills([]));
    dispatch(highlightProject(null));
  };

  return (
    <div
      id={project.title.replace(/\s+/g, '-')}
      data-title={project.title}
      className={`project-card bg-gray-50 p-6 rounded-lg relative transition-all duration-300 transform hover:scale-105 ${
        isHighlighted ? 'ring-4 ring-blue-500 shadow-xl' : 'shadow-md'
      }`}
      onMouseEnter={!isSmallScreen ? handleInteraction : undefined}
      onMouseLeave={!isSmallScreen ? handleMouseLeave : undefined}
      onClick={isSmallScreen ? handleInteraction : undefined}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900">
          {project.title}
        </h3>
        {project.githubLink && (
          <a
            href={project.githubLink}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={20} />
          </a>
        )}
      </div>
      <p className="text-gray-700 mt-4 text-sm">{project.description}</p>
    </div>
  );
};

export default ProjectCard;