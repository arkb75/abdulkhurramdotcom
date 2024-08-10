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
            <a href="https://github.com/arkb75" title="Github" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <GithubIcon size={28} />
            </a>
            <a href="https://linkedin.com/in/abdulkhurram" title="Linkedin" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <LinkedinIcon size={28} />
            </a>
            <a href="mailto:rafay@abdulkhurram.com" title="Email" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <MailIcon size={28} />
            </a>
            <a href="/CV.pdf" title="CV/Resume" className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FileTextIcon size={28} />
            </a>
          </div>
        </header>

        <main className="space-y-12">
          <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700">
              As a Computer Science student at the University of British Columbia, I am passionate about leveraging my technical skills to solve real-world problems. With a strong foundation in software development and hands-on experience in various projects, I am eager to contribute to innovative teams and learn from industry professionals. I am actively seeking internship opportunities where I can apply my knowledge in software engineering and grow my expertise in developing efficient, scalable solutions.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-gray-900">Constructify (W.I.P)</h3>
                  <a href="https://github.com/arkb75/Constructify" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-gray-700">
                  Developed a home-building platform using Vue.js and Vite for fast, responsive frontend development. Designed an intuitive UI/UX guiding users through planning, budgeting, and project management. Created detailed cost breakdowns and structured workflows to enhance transparency. Integrated project tracking for real-time updates and accountability. Collaborated with vetted service providers for competitive pricing and reliability. Implemented efficient dispute resolution mechanisms for smooth user interactions.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-gray-900">Real Estate Management Platform</h3>
                  <a href="https://github.com/arkb75/RealEstate" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-gray-700">
                  Developed a real estate management application using HTML, CSS, JavaScript, Express.js, and Node.js. Designed and implemented a SQL database with OracleDB to model users, properties, and transactions. Created and managed API endpoints to efficiently handle user requests and data interactions. Applied ISA relationships in OracleDB to specialize property types like Houses and Condos. Optimized the platform with asynchronous processing for seamless multi-user interactions.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-gray-900">Amazon Marketplace Analytic Software</h3>
                  <a href="https://github.com/arkb75/Amazon-Marketplace-Analytic-Software" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-gray-700">
                  Engineered an Amazon Marketplace tool, enhancing seller operational efficiency by 35%. Implemented an algorithm predicting ASIN trends, leading to a 50% reduction in overstock. Enabled multi-format data integration, including SQL and JSON, improving data retrieval times by 40%.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Java</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">C</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">C++</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Python</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Swift</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">R</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">JavaScript (React.js, Vue.js)</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">SQL</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">HTML</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">CSS</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Node.js</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Express.js</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">OracleDB</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Git</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">JUnit</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">unRAID</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Swing</li>
              <li className="bg-gray-100 rounded-full px-4 py-2 text-center">Responsive Design</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;