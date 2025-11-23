import * as React from 'react';

interface SectionProps {
  id: string;                // ID is required for our scrolling logic
  title?: string;            // Title is optional
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {title} <span className="text-blue-400">.</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}