import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ setIsSkillsOpen }) => {
  const highlightedProject = useSelector(
    (state) => state.highlight.highlightedProject
  );

  const projects = useMemo(
    () => [
      {
        title: 'Workbase',
        githubLink: 'https://github.com/arkb75/Workbase',
        description:
          'A full-stack platform for turning technical work into reviewed career content. Imports GitHub repositories through OAuth, organizes repository evidence into work themes, and generates resume and profile artifacts from approved, non-sensitive claims. Built with Next.js, TypeScript, Prisma, and PostgreSQL, with bounded AI workflows and credential redaction.',
        skills: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Prisma', 'GitHub OAuth', 'AI Workflows'],
      },
      {
        title: 'Backer',
        githubLink: 'https://github.com/arkb75/Backer',
        description:
          'Built at Hack The Coast 2026. A Next.js platform for startup discovery with a DynamoDB data layer spanning 10+ tables, transactional writes for feed and messaging workflows, and an XGBoost ranker trained on behavioral and similarity features.',
        skills: ['TypeScript', 'Next.js', 'React', 'AWS', 'DynamoDB', 'S3', 'SES', 'NextAuth', 'XGBoost', 'Python'],
      },
      {
        title: 'SoloPilot — Client Ops Studio',
        githubLink: 'https://github.com/arkb75/SoloPilot',
        description:
          'A client-ops workspace for solo freelancers, bringing intake, proposals, review, and delivery into one flow. Includes an email intake console, versioned proposal PDFs with annotations, and an evaluation and revision loop for proposal drafts.',
        skills: ['Python', 'TypeScript', 'Next.js', 'React', 'LangChain', 'AWS', 'S3', 'SQS', 'CloudWatch', 'CI/CD'],
      },
      {
        title: 'InsightUBC - Dataset Manager',
        githubLink: 'https://github.com/arkb75/InsightUBC',
        description:
          'A full-stack academic dataset manager with a React interface for uploading, querying, and visualizing course data, backed by a Node.js API.',
        skills: ['Typescript', 'React.js', 'Node.js', 'JavaScript', 'API Integration'],
      },
    ],
    []
  );

  return (
    <section
      id="projects"
      className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-5xl mx-auto transform hover:scale-105 transition-transform duration-300 text-lg leading-relaxed"
    >
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            highlightedProject={highlightedProject}
            setIsSkillsOpen={setIsSkillsOpen}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
