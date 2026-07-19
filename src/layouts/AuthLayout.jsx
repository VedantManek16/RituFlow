import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body-md overflow-x-hidden login-bg-grid">
      {/* Decorative Top Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary fixed top-0 left-0 z-50"></div>
      
      <main className="flex-grow flex items-center justify-center px-gutter py-xl relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-fixed opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-fixed opacity-20 rounded-full blur-3xl"></div>
        
        {children}
      </main>
    </div>
  );
}
