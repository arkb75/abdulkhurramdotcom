import React from 'react';
import { GithubIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { highlightProject, setActiveSkills } from '../redux/actions';

const ProjectCard = ({ project, highlightedProject }) => {
  const dispatch = useDispatch();
  const isHighlighted = highlightedProject === project.title;

  const handleMouseEnter = () => {
    // Set active skills to this project's skills
    dispatch(setActiveSkills(project.skills));
    // Optionally, highlight this project
    dispatch(highlightProject(project.title));
  };

  const handleMouseLeave = () => {
    // Reset active skills
    dispatch(setActiveSkills([]));
    // Remove project highlight
    dispatch(highlightProject(null));
  };

  return (
    <div
      id={project.title.replace(/\s+/g, '-')}
      data-title={project.title}
      className={`project-card bg-gray-50 p-6 rounded-lg relative transition-all duration-300 transform hover:scale-105 ${
        isHighlighted ? 'ring-4 ring-blue-500 shadow-xl' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      <p className="text-gray-700 mt-4">{project.description}</p>
    </div>
  );
};

export default ProjectCard;