"use client";

import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ToolCard from "@/components/ToolCard";
import CompareButton from "@/components/CompareButton";
import { tools, categories, Tool } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Combined search and filter logic
  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">All AI </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Tools
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of AI tools across all categories
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-gray-300 dark:border-purple-500/30 rounded-2xl p-2">
                  <div className="flex items-center">
                    <Search className="absolute left-6 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search AI tools by name, description, or category..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-14 pr-6 py-4 text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none border-none"
                    />
                    {(searchQuery || selectedCategory !== "All") && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                onClick={() => handleCategoryChange("All")}
                variant={selectedCategory === "All" ? "default" : "outline"}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === "All"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white/50 dark:bg-black/30 border border-gray-300 dark:border-purple-500/20 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-purple-500/40"
                }`}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.name)}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-white/50 dark:bg-black/30 border border-gray-300 dark:border-purple-500/20 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-purple-500/40"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {filteredTools.length === 0 ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>No tools found matching your criteria</span>
                  </span>
                ) : (
                  <>
                    Showing <span className="font-semibold text-cyan-600 dark:text-cyan-400">{filteredTools.length}</span> tool{filteredTools.length !== 1 ? 's' : ''}
                    {selectedCategory !== "All" && (
                      <span className="ml-2">
                        in <span className="font-semibold text-purple-600 dark:text-purple-400">{selectedCategory}</span>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="ml-2">
                        for <span className="font-semibold text-purple-600 dark:text-purple-400">"{searchQuery}"</span>
                      </span>
                    )}
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    No tools found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try adjusting your search terms or category filters to find what you're looking for.
                  </p>
                  <Button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <CompareButton />
    </div>
  );
}