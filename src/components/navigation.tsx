"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Aikita
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className="relative px-6 py-3 text-gray-900 dark:text-white font-medium transition-all duration-300 hover:text-cyan-400 group"
              >
                <span className="relative z-10">Beranda</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/tools"
                className="relative px-6 py-3 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-cyan-400 group"
              >
                <span className="relative z-10">Tools</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/compare"
                className="relative px-6 py-3 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-cyan-400 group"
              >
                <span className="relative z-10">Bandingkan</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/categories"
                className="relative px-6 py-3 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-cyan-400 group"
              >
                <span className="relative z-10">Kategori</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-900 dark:text-white font-medium hover:text-cyan-400 transition-colors">
                Beranda
              </Link>
              <Link href="/tools" className="block px-3 py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-cyan-400 transition-colors">
                Tools
              </Link>
              <Link href="/compare" className="block px-3 py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-cyan-400 transition-colors">
                Bandingkan
              </Link>
              <Link href="/categories" className="block px-3 py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-cyan-400 transition-colors">
                Kategori
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}