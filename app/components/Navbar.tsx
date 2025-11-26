"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LAB_INFO } from "../config/lab";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "首页", href: "#home" },
    { name: "研究方向", href: "#research" },
    { name: "团队成员", href: "#team" },
    { name: "科研成果", href: "#publications" },
    { name: "招生信息", href: "#join", highlight: true },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              Lab
            </div>
            <span
              className={`font-bold text-xl ${
                scrolled ? "text-gray-900" : "text-gray-900 lg:text-white"
              }`}
            >
              {LAB_INFO.englishName}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  link.highlight
                    ? "px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    : `hover:text-blue-500 transition ${
                        scrolled ? "text-gray-700" : "text-gray-100"
                      }`
                } font-medium`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={
                scrolled ? "text-gray-900" : "text-gray-900 lg:text-white"
              }
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.highlight
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

