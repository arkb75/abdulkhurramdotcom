import React from 'react';
import { FileTextIcon } from 'lucide-react';

const ResearchCard = ({ research }) => (
  <div className="bg-gray-50 p-4 rounded-lg relative transition-all duration-500">
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-medium text-gray-900">{research.title}</h3>
      {research.pdfLink && (
        <a
          href={research.pdfLink}
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileTextIcon size={20} />
        </a>
      )}
    </div>
    <p className="text-gray-700">{research.description}</p>
  </div>
);

export default ResearchCard;