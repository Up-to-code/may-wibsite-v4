import React from 'react';

type SkillProps = {
  sk: string;
};

function Skill({ sk }: SkillProps) {
  return (
    <div className="group relative">
       <button 
        className="relative px-6 py-4 bg-gray-800 rounded-lg flex items-center shadow-lg transition-transform transform group-hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
        aria-label={`Skill: ${sk}`} // Accessibility improvement
      >
        <span className="flex items-center space-x-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white group-hover:text-teal-300 transition duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M13 10V3L4 14h7v7l9-11h-7z" 
            />
          </svg>
          <span className="text-white font-semibold group-hover:text-teal-300 transition duration-200">
            {sk}
          </span>
        </span>
      </button>
    </div>
  );
}

export default Skill;
