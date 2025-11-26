import React from "react";
import { Globe, Mail, MapPin } from "lucide-react";
import { LAB_INFO } from "../config/lab";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-white text-xl font-bold mb-4">{LAB_INFO.name}</h2>
        <p className="text-sm leading-relaxed max-w-sm mb-6">
          {LAB_INFO.description}
        </p>
        <div className="flex space-x-4">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
            <Globe size={16} />
          </div>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
            <Mail size={16} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold mb-4">快速链接</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              首页
            </a>
          </li>
          <li>
            <a href="#research" className="hover:text-blue-500 transition">
              研究方向
            </a>
          </li>
          <li>
            <a href="#publications" className="hover:text-blue-500 transition">
              发表论文
            </a>
          </li>
          <li>
            <a href="#join" className="hover:text-blue-500 transition">
              加入我们
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-4">联系我们</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <MapPin size={16} /> {LAB_INFO.address}
          </li>
          <li className="flex items-center gap-2">
            <Mail size={16} /> {LAB_INFO.contactEmail}
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-xs text-center">
      &copy; {new Date().getFullYear()} {LAB_INFO.englishName}. All rights reserved.
    </div>
  </footer>
);

export default Footer;

