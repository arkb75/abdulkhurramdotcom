import React, { useEffect, useState } from 'react';

const Taskbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll to show/hide the taskbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsVisible(offset > 200); // Adjust offset as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust based on the taskbar height
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ height: '60px' }} // Adjust the height as needed
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center h-full">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('research')}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Research
        </button>
        {/* Removed Skills button */}
      </div>
    </nav>
  );
};

export default Taskbar;