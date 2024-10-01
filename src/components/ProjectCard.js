import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ project, highlightedProject }) => {
  const isHighlighted = highlightedProject === project.title;

  return (
    <div
      id={project.title.replace(/\s+/g, '-')}
      data-title={project.title}
      className={`project-card bg-gray-50 p-6 rounded-lg relative transition-all duration-500 ${
        isHighlighted ? 'ring-4 ring-blue-500 shadow-xl' : ''
      }`}
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
            <Github size={20} />
          </a>
        )}
      </div>
      <p className="text-gray-700 mt-4">{project.description}</p>
    </div>
  );
};

export default ProjectCard;