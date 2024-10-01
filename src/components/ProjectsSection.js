import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectCard from './ProjectCard';
import { setActiveSkills } from '../redux/actions';

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const highlightedProject = useSelector(
    (state) => state.highlight.highlightedProject
  );

  const projects = useMemo(
    () => [
      {
        title: 'Constructify (W.I.P)',
        githubLink: 'https://github.com/arkb75/Constructify',
        description:
          'Built an A-Z home-building platform with transparent project tracking and a service provider marketplace, targeting aspiring homeowners and construction firms. Developed a responsive frontend using Vue.js and Vite, optimizing load times and performance. Plans to use Django for the backend to handle scalable data management. Designed an intuitive UI/UX through targeted user research and iterative testing, leading to a 25% reduction in user onboarding time.',
        skills: ['Python', 'JavaScript', 'Vue.js', 'HTML/CSS', 'Git', 'Django'],
      },
      {
        title: 'Real Estate Management Platform',
        githubLink: 'https://github.com/arkb75/RealEstate',
        description:
          'Developed a platform for seamless real estate transactions and property management, integrating service providers like inspectors and contractors. Designed and implemented a SQL database with OracleDB to model classes, utilizing ISA relationships for efficient querying and data manipulation. Created and managed API endpoints with Express.js, ensuring asynchronous processing to handle multi-user requests and streamline property listing management.',
        skills: [
          'JavaScript',
          'Node.js',
          'Express.js',
          'SQL',
          'OracleDB',
          'HTML/CSS',
          'Git',
        ],
      },
      {
        title: 'Amazon Marketplace Analytic Software',
        githubLink:
          'https://github.com/arkb75/Amazon-Marketplace-Analytic-Software',
        description:
          'Engineered an Amazon Marketplace tool using Java, enhancing seller operational efficiency by 35%. Implemented an algorithm predicting ASIN trends, leading to a 50% reduction in overstock. Enabled multi-format data integration, including SQL and JSON, improving data retrieval times by 40%.',
        skills: ['Java', 'SQL', 'Git'],
      },
      {
        title: 'High-Performance Media Distribution Platform',
        githubLink: null,
        description:
          'Orchestrated an Ombi-integrated media server, automating over 1,000 weekly metadata-rich downloads using advanced scripting. Leveraged DHT protocols to index 10,000+ peer-to-peer assets, facilitating Radarr and Sonarr for automated content retrieval. Administered a robust NGINX server architecture, seamlessly streaming a 50 TB digital Blu-ray archive to 150+ users. Engineered multi-user profile management for 200+ accounts, ensuring optimal user engagement and platform reliability. Enhanced system resilience with SSH-powered Raspberry Pi commands, reducing downtime by 90% through proactive network management.',
        skills: ['Git'],
      },
    ],
    []
  );

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const projectTitle = entry.target.getAttribute('data-title');
        const project = projects.find((p) => p.title === projectTitle);
        if (entry.isIntersecting && project) {
          dispatch(setActiveSkills(project.skills));
        }
      });
    }, options);

    const projectElements = document.querySelectorAll('.project-card');

    projectElements.forEach((element) => observer.observe(element));

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [dispatch, projects]);

  return (
    <section
      id="projects"
      className="bg-white rounded-2xl shadow-lg p-8 mb-8"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            highlightedProject={highlightedProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;