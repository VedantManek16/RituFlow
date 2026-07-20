import React from 'react';

export default function RiskGauge({ score = 82, size = 'medium' }) {
  // Calculate SVG arc values
  // R=60, center=80,80
  // Arc path goes from (20,80) to (140,80) which is 180 degrees
  const radius = 60;
  const circumference = Math.PI * radius; // 188.49
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-48 h-28 relative overflow-visible flex items-center justify-center">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 160 95">
          <defs>
            <linearGradient id="risk-gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ba1a1a" />      {/* Red (High Risk) */}
              <stop offset="50%" stopColor="#ff9800" />     {/* Orange (Med Risk) */}
              <stop offset="100%" stopColor="#1b6d24" />    {/* Green (Low Risk/High score) */}
            </linearGradient>
          </defs>

          {/* Background Track */}
          <path 
            d="M 20 80 A 60 60 0 0 1 140 80" 
            fill="none" 
            stroke="#e5e7eb" 
            strokeWidth="12" 
            strokeLinecap="round"
          />

          {/* Value Indicator Arc */}
          <path 
            d="M 20 80 A 60 60 0 0 1 140 80" 
            fill="none" 
            stroke="url(#risk-gauge-gradient)" 
            strokeWidth="12" 
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />

          {/* Center Point - removed to avoid overlapping with text */}
        </svg>

        {/* Text readout */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
          <span className="font-headline-lg text-headline-lg text-on-surface select-none">
            {score}
          </span>
          <p className="text-label-sm text-on-surface-variant select-none">Risk Score</p>
        </div>
      </div>
    </div>
  );
}
