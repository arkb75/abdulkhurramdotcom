import React, { useState, useEffect } from 'react';

const formatVersionName = (name) => {
  return name
    .replace(/^resume-/, '')  // Remove "resume-" prefix
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ResumeSelector = () => {
  const [selectedResume, setSelectedResume] = useState('');
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/resume-versions.json')
      .then(res => res.json())
      .then(data => {
        setVersions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setSelectedResume(e.target.value);
  };

  const handleViewResume = () => {
    if (selectedResume) {
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
          disabled={loading}
        >
          <option value="" disabled>
            {loading ? 'Loading versions...' : '-- Please choose an option --'}
          </option>
          {versions.map(version => (
            <option key={version} value={`/${version}`}>
              {formatVersionName(version)}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleViewResume}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
        disabled={loading}
      >
        View Resume
      </button>
    </div>
  );
};

export default ResumeSelector;