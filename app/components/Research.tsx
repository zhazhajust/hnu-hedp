import React from "react";
import { RESEARCH_AREAS } from "../config/lab";
import SectionTitle from "./SectionTitle";

const Research: React.FC = () => (
  <section id="research" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle
        title="研究方向"
        subtitle="我们专注于人工智能的前沿领域，致力于解决具有挑战性的科学问题。"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {RESEARCH_AREAS.map((area, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {area.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {area.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Research;

