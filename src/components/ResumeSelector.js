import React, { useState } from 'react';

const ResumeSelector = () => {
  const [selectedResume, setSelectedResume] = useState('');

  const handleChange = (e) => {
    setSelectedResume(e.target.value);
  };

  const handleViewResume = () => {
    if (selectedResume) {
      // Open the selected resume in a new tab
      window.open(`${selectedResume}/Resume.pdf`, '_blank');
    } else {
      alert('Please select a resume version.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Select Resume Version
      </h2>
      <div className="mb-6">
        <label htmlFor="resumeVersion" className="block text-gray-700 mb-2">
          Select Version:
        </label>
        <select
          id="resumeVersion"
          value={selectedResume}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="" disabled>
            -- Please choose an option --
          </option>
          <option value="/Software Engineering & Systems Design">
            Software Engineering & Systems Design
          </option>
          <option value="/Full-Stack & Web Development">
            Full-Stack & Web Development
          </option>
          <option value="/Embedded Systems & IoT Development">
            Embedded Systems & IoT Development
          </option>
        </select>
      </div>
      <button
        onClick={handleViewResume}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
      >
        View Resume
      </button>
    </div>
  );
};

export default ResumeSelector;