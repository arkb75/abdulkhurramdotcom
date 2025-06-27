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
          title: 'SoloPilot - AI Freelancer Pipeline',
          githubLink: null,
          description:
              'Created a cost-efficient multi-agent platform that plans, codes, tests, deploys, and markets new services in <4 hours while keeping infra spend below $50 / month. Added a provider agnostic LLM layer with unified cost and latency logging, enabling one-line model swaps. Integrated real time quality gates (ruff, mypy, bandit, eslint) and SonarCloud checks during code generation. Integrate Notion MCP as a living roadmap—agents read / write tasks and milestones, giving the LLMs long-term memory that keeps multi-day plans grounded and on track.',
          skills: ['Python', 'LangChain', 'ChromaDB', 'API Integration', 'AI/ML', 'DevOps'],
      },
      {
          title: 'InsightUBC - Dataset Manager',
          githubLink: 'https://github.com/arkb75/InsightUBC',
          description:
              'Developed a full-stack web application for managing and analyzing academic datasets, enabling users to upload, query, and visualize data through an intuitive React.js interface. Built interactive visualizations with Chart.js to highlight trends in course performance and student outcomes. Designed a modular REST API backend using Node.js and JSZip for efficient dataset handling. Implemented Mocha and Chai for rigorous backend testing, ensuring reliability and robustness.',
          skills: ['Typescript', 'React.js', 'Node.js', 'JavaScript', 'API Integration'],
      },
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
        {
          title: 'Smart Mirror (Grade 10 Personal Project)',
          githubLink: 'https://github.com/arkb75/SmartMirror',
          description:
              'Designed and built an interactive smart mirror leveraging a Raspberry Pi 3 (Model B) and MagicMirror² software to display real-time information, including weather, time, and news updates. Developed the system on a Raspbian OS with a fully-customized user interface using HTML/CSS and JavaScript. Integrated API calls to dynamically fetch and display data, optimizing performance through Node.js and Python scripts. Engineered a secure and efficient hardware solution with a 3D-printed Raspberry Pi mount for a streamlined assembly. Reduced boot-up time by 30% through system optimizations and automated service start via systemd. Enhanced user interaction by deploying custom modules and designing a polished, minimalist UI.',
          skills: [
            'Python',
            'JavaScript',
            'Node.js',
            'HTML/CSS',
            'Git',
            'Raspberry Pi',
            'API Integration',
            'Hardware Design',
            '3D Printing',
            'Linux',
            'System Administration',
            'UI/UX Design',
          ],
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