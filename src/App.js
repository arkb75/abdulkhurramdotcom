import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">John Doe</h1>
          <p className="text-xl text-gray-600">Computer Science Student</p>
        </header>

        <main>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700">
              I'm a third-year computer science student passionate about software development and problem-solving. 
              I'm seeking internship opportunities to apply my skills and gain real-world experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript (React)</li>
              <li>C++</li>
              <li>SQL</li>
              <li>Git</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900">Project 1</h3>
                <p className="text-gray-700">Brief description of your first project.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900">Project 2</h3>
                <p className="text-gray-700">Brief description of your second project.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center">
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
            <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
              <MailIcon size={24} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;