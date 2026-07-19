import React from 'react';

export default function LineChart({ data }) {
  // Renders the exact responsive line path from the Stitch dashboard
  return (
    <div className="h-40 w-full relative flex items-center">
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
        <path 
          d="M0 80 Q 50 20, 100 60 T 200 40 T 300 10 T 400 50" 
          fill="none" 
          stroke="#005db7" 
          strokeLinecap="round" 
          strokeWidth="3"
        />
        <circle cx="0" cy="80" fill="#005db7" r="4" />
        <circle cx="100" cy="60" fill="#005db7" r="4" />
        <circle cx="200" cy="40" fill="#005db7" r="4" />
        <circle cx="300" cy="10" fill="#005db7" r="4" />
        <circle cx="400" cy="50" fill="#005db7" r="4" />
      </svg>
    </div>
  );
}
