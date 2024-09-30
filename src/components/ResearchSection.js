import React from 'react';
import ResearchCard from './ResearchCard';

const ResearchSection = () => {
  const researchPapers = [
    {
      title: 'Comparing Entropies of True and Pseudo-Random Generators',
      pdfLink: '/EEABDULKM2021COMPSCI.pdf',
      description:
        'This is a research project I completed in high school, where I explored the entropies of integers produced by true-random generators compared to pseudo-random generators. The project examines the mathematical foundations and their applications in cryptography and data security.',
    },
    // Add more research papers here in the future
  ];

  return (
    <section
      id="research"
      className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research</h2>
      <div className="space-y-4">
        {researchPapers.map((paper) => (
          <ResearchCard key={paper.title} research={paper} />
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;