import * as React from 'react';

interface SectionProps {
  id: string;                // ID is required for our scrolling logic
  title?: string;            // Title is optional
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-28 md:py-40 px-6 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
            {title} <span className="text-sky-400">.</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}