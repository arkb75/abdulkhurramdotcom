import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon } from 'lucide-react';

const Header = () => (
  <header className="text-center mb-6">
    <div className="mb-4 inline-block">
      <img
        src="/profile-photo.png"
        alt="Abdul Rafay Khurram"
        className="rounded-full shadow-lg w-32 h-32"
      />
    </div>
    <h1 className="text-5xl font-bold text-gray-900 mb-2">Abdul Rafay Khurram</h1>
    <p className="text-xl text-gray-600">
      UBC Computer Science Student & Aspiring Software Engineer
    </p>
    <div className="flex justify-center space-x-6 mt-4">
      <a
        href="https://github.com/arkb75"
        title="Github"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        <GithubIcon size={28} />
      </a>
      <a
        href="https://linkedin.com/in/abdulkhurram"
        title="LinkedIn"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        <LinkedinIcon size={28} />
      </a>
      <a
        href="mailto:rafay@abdulkhurram.com"
        title="Email"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        <MailIcon size={28} />
      </a>
      <a
        href="/Resume.pdf"
        title="Resume"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FileTextIcon size={28} />
      </a>
    </div>
  </header>
);

export default Header;