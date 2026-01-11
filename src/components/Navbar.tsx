"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-blue-50 dark:bg-blue-950/30 pb-6">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a className="flex items-center group" href="#">
            <div className="relative flex items-center justify-center w-8 h-8 mr-1">
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-sm opacity-60"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-sm opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary rounded-sm opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary rounded-sm"></div>
              <div className="absolute inset-0 m-auto w-4 h-4 bg-primary rounded-sm"></div>
            </div>
            <span className="text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              Khan <span className="text-primary">IT</span>
            </span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-600 dark:text-gray-300">
          <a className="text-primary font-semibold" href="#">
            Home
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            About
          </a>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
            Services
            <span className="material-symbols-rounded text-[20px]">expand_more</span>
          </div>
          <a className="hover:text-primary transition-colors" href="#">
            SEO Case study
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Contact Us
          </a>
        </div>

        <div className="hidden lg:block">
          <a
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2"
            href="tel:+8801404282727"
          >
            <span className="material-symbols-rounded text-[20px]">call</span>
            +8801404282727
          </a>
        </div>

        <div className="lg:hidden">
          <button
            className="text-gray-600 dark:text-gray-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-rounded text-3xl">menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex flex-col gap-4 font-medium text-gray-600 dark:text-gray-300">
            <a className="text-primary font-semibold" href="#">
              Home
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              About
            </a>
            <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              Services
              <span className="material-symbols-rounded text-[20px]">expand_more</span>
            </div>
            <a className="hover:text-primary transition-colors" href="#">
              SEO Case study
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Contact Us
            </a>
            <a
              className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 mt-2"
              href="tel:+8801404282727"
            >
              <span className="material-symbols-rounded text-[20px]">call</span>
              +8801404282727
            </a>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
}
