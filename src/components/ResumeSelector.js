import React, { useState, useEffect } from 'react';

const GITHUB_REPO = 'arkb75/Resume';
const BRANCHES_API = `https://api.github.com/repos/${GITHUB_REPO}/branches`;

const formatVersionName = (branchName) => {
  // Convert "resume/ai-platform" -> "AI Platform"
  return branchName
    .replace(/^resume\//, '')  // Remove "resume/" prefix
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getResumeUrl = (branchName) => {
  // Use Google Docs Viewer to display PDF in-browser (raw GitHub URLs trigger download)
  const rawUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/${branchName}/main.pdf`;
  return `https://docs.google.com/viewer?url=${encodeURIComponent(rawUrl)}&embedded=true`;
};

const ResumeSelector = () => {
  const [selectedResume, setSelectedResume] = useState('');
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(BRANCHES_API)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch branches');
        return res.json();
      })
      .then(data => {
        // Filter to only include resume/* branches
        const resumeBranches = data
          .map(b => b.name)
          .filter(name => name.startsWith('resume/'));
        setBranches(resumeBranches);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedResume(e.target.value);
  };

  const handleViewResume = () => {
    if (selectedResume) {
      window.open(getResumeUrl(selectedResume), '_blank');
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
            {loading ? 'Loading versions...' : error ? 'Error loading versions' : '-- Please choose an option --'}
          </option>
          {branches.map(branch => (
            <option key={branch} value={branch}>
              {formatVersionName(branch)}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleViewResume}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
        disabled={loading || !!error}
      >
        View Resume
      </button>
    </div>
  );
};

export default ResumeSelector;