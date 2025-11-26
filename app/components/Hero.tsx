import React from "react";
import { ChevronRight } from "lucide-react";
import { LAB_INFO } from "../config/lab";

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-20"
  >
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm backdrop-blur-sm">
        👋 欢迎来到 {LAB_INFO.university}
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        {LAB_INFO.name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
        {LAB_INFO.slogan}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#join"
          className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition hover:shadow-lg flex items-center justify-center gap-2"
        >
          加入我们 <ChevronRight size={20} />
        </a>
        <a
          href="#research"
          className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center"
        >
          了解研究
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

