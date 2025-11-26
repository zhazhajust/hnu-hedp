import React from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { PUBLICATIONS } from "../config/lab";
import SectionTitle from "./SectionTitle";

const Publications: React.FC = () => (
  <section id="publications" className="py-24 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <SectionTitle title="精选论文" subtitle="Recent Representative Publications" />

      <div className="space-y-6">
        {PUBLICATIONS.map((pub, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-blue-600 flex flex-col sm:flex-row justify-between items-start gap-4"
          >
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {pub.title}
              </h4>
              <p className="text-gray-600 mb-2">{pub.authors}</p>
              <div className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-bold">
                {pub.venue}
              </div>
            </div>
            <a
              href={pub.link}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-sm whitespace-nowrap mt-2 sm:mt-0"
            >
              <BookOpen size={16} /> PDF
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-flex items-center text-gray-500 hover:text-blue-600 font-medium transition"
        >
          查看全部论文列表 <ChevronRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

export default Publications;

