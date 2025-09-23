"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchWithSuggestions from "./SearchWithSuggestions";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Discover
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">the Future of</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Tools
            </span>
          </h1>

          <div className="flex justify-center mb-8">
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Unlock the power of artificial intelligence with our curated collection of
          <span className="text-cyan-400 font-semibold"> cutting-edge tools</span> designed for the next generation
        </p>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-16 relative z-50">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-gray-300 dark:border-purple-500/30 rounded-2xl p-2">
              <SearchWithSuggestions placeholder="Search for AI tools, categories, or features..." />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            {
              icon: "🚀",
              gradientFrom: "from-orange-400",
              gradientTo: "to-red-600",
              title: "Latest AI Tools",
              description: "Discover cutting-edge AI innovations as they emerge",
              highlight: "New tools added daily"
            },
            {
              icon: "⚡",
              gradientFrom: "from-yellow-400",
              gradientTo: "to-orange-500",
              title: "Smart Comparison",
              description: "AI-powered tool comparison to find your perfect match",
              highlight: "Compare up to 3 tools"
            },
            {
              icon: "🎯",
              gradientFrom: "from-emerald-400",
              gradientTo: "to-cyan-600",
              title: "Curated Selection",
              description: "Handpicked tools verified by AI experts and community",
              highlight: "Expert reviewed"
            }
          ].map((feature, index) => (
            <div key={index} className="relative group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-2xl transform scale-110"></div>

              {/* Card Content */}
              <div className="relative bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-300/50 dark:border-purple-500/30 rounded-2xl p-8 group-hover:border-cyan-400/60 dark:group-hover:border-purple-400/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 dark:group-hover:shadow-purple-500/20 h-full flex flex-col">

                {/* Icon with Enhanced Styling */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-purple-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 dark:border-purple-500/20">
                    ✨ {feature.highlight}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}