import React from 'react';
import { GithubIcon } from 'lucide-react';

const ProjectCard = React.forwardRef(({ project, highlightedProject }, ref) => (
  <div
    ref={ref}
    className={`bg-gray-50 p-4 rounded-lg relative transition-all duration-500 ${
      highlightedProject === ref ? 'ring-4 ring-blue-500 shadow-xl' : ''
    }`}
  >
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
      {project.githubLink && (
        <a
          href={project.githubLink}
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <GithubIcon size={20} />
        </a>
      )}
    </div>
    <p className="text-gray-700">{project.description}</p>
  </div>
));

export default ProjectCard;