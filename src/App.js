import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6">
          <div className="mb-4 inline-block">
            <img src="/profile-photo.png" alt="Abdul Rafay Khurram" className="rounded-full shadow-lg" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Abdul Rafay Khurram</h1>
          <p className="text-xl text-gray-600">UBC Computer Science Student & Aspiring Software Engineer</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/arkb75" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <GithubIcon size={28} />
            </a>
            <a href="https://linkedin.com/in/arkb" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <LinkedinIcon size={28} />
            </a>
            <a href="mailto:rafaykhurram@live.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <MailIcon size={28} />
            </a>
            <a href="/CV.pdf" className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FileTextIcon size={28} />
            </a>
          </div>
        </header>

        <main className="space-y-12">
          <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700">
              As a Computer Science student at the University of British Columbia, I’m fueling my passion for technology through both academic rigor and hands-on experience. Driven by curiosity and a knack for problem-solving, I am actively seeking internship opportunities where I can contribute and further hone my skills in software development and fintech innovation.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-gray-900">Amazon Marketplace Analytic Software</h3>
                  <a href="https://github.com/arkb75/Amazon-Marketplace-Analytic-Software" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-gray-700">Engineered an Amazon Marketplace tool, enhancing seller operational efficiency by 35%. Implemented an algorithm predicting ASIN trends, leading to a 50% reduction in overstock. Enabled multi-format data integration, including SQL and JSON, improving data retrieval times by 40%.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900">High-Performance Media Distribution Platform</h3>
                <p className="text-gray-700">Orchestrated an Ombi-integrated media server, automating over 1,000 weekly metadata-rich downloads using advanced scripting. Leveraged DHT protocols to index 10,000+ peer-to-peer assets, facilitating Radarr and Sonarr for automated content retrieval. Administered a robust NGINX server architecture, seamlessly streaming a 50 TB digital Blu-ray archive to 150+ users. Engineered multi-user profile management for 200+ accounts, ensuring optimal user engagement and platform reliability. Enhanced system resilience with SSH-powered Raspberry Pi commands, slashing downtime by 90% through proactive network management.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Java</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Python</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">JavaScript (React)</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">C++</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">SQL</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Git</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">HTML</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">CSS</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;