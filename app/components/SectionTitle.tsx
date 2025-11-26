import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      {title}
    </h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
    {subtitle && (
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;

