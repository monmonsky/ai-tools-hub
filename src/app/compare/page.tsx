"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Star, Check, X, ExternalLink, Plus } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { tools, Tool } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ComparePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTools, setSelectedTools] = useState<(Tool | null)[]>([null, null, null]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  // Initialize from URL params
  useEffect(() => {
    const toolsParam = searchParams.get('tools');
    if (toolsParam) {
      const toolSlugs = toolsParam.split(',').slice(0, 3);
      const initialTools: (Tool | null)[] = [null, null, null];

      toolSlugs.forEach((slug, index) => {
        const tool = tools.find(t => t.slug === slug);
        if (tool && index < 3) {
          initialTools[index] = tool;
        }
      });

      setSelectedTools(initialTools);
    }
  }, [searchParams]);

  // Update URL when tools change
  const updateURL = (newTools: (Tool | null)[]) => {
    const validTools = newTools.filter(tool => tool !== null) as Tool[];
    if (validTools.length > 0) {
      const toolSlugs = validTools.map(tool => tool.slug).join(',');
      router.push(`/compare?tools=${toolSlugs}`, { scroll: false });
    } else {
      router.push('/compare', { scroll: false });
    }
  };

  const handleToolSelect = (index: number, tool: Tool) => {
    const newTools = [...selectedTools];
    newTools[index] = tool;
    setSelectedTools(newTools);
    updateURL(newTools);
    setDropdownOpen(null);
  };

  const handleRemoveTool = (index: number) => {
    const newTools = [...selectedTools];
    newTools[index] = null;
    setSelectedTools(newTools);
    updateURL(newTools);
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'freemium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'paid':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300 dark:text-gray-600" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
      );
    }

    return stars;
  };

  const getAvailableTools = (currentIndex: number) => {
    const selectedSlugs = selectedTools
      .filter((tool, index) => tool !== null && index !== currentIndex)
      .map(tool => tool!.slug);

    return tools.filter(tool => !selectedSlugs.includes(tool.slug));
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
                <span className="text-gray-900 dark:text-white">Compare AI </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Tools
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Compare features, pricing, and capabilities of different AI tools side by side
              </p>
            </div>

            {/* Tool Selection Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {selectedTools.map((selectedTool, index) => (
                <div key={index} className="relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl blur-xl"></div>
                    <div className="relative bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-gray-300 dark:border-purple-500/30 rounded-xl p-1">

                      {selectedTool ? (
                        // Selected Tool Display
                        <div className="p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-lg">
                                {selectedTool.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 dark:text-white truncate">
                                {selectedTool.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {selectedTool.category}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                              className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                            >
                              Change Tool
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveTool(index)}
                              className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ) : (
                        // Empty Slot
                        <Button
                          variant="ghost"
                          onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                          className="w-full p-8 flex flex-col items-center justify-center space-y-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl h-auto"
                        >
                          <Plus className="w-8 h-8 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-400 font-medium">
                            Select Tool {index + 1}
                          </span>
                        </Button>
                      )}

                      {/* Dropdown */}
                      {dropdownOpen === index && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
                          {getAvailableTools(index).map((tool) => (
                            <Button
                              key={tool.id}
                              variant="ghost"
                              onClick={() => handleToolSelect(index, tool)}
                              className="w-full p-3 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-xl last:rounded-b-xl h-auto justify-start"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-md flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-sm">
                                  {tool.name.charAt(0)}
                                </span>
                              </div>
                              <div className="flex-1 text-left">
                                <div className="font-medium text-gray-900 dark:text-white">
                                  {tool.name}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {tool.category}
                                </div>
                              </div>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        {selectedTools.some(tool => tool !== null) && (
          <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Comparison Table
              </h2>

              <div className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border border-gray-300 dark:border-purple-500/20 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Feature
                        </th>
                        {selectedTools.map((tool, index) => (
                          tool && (
                            <th key={index} className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {tool.name}
                            </th>
                          )
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                      {/* Category Row */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          Category
                        </td>
                        {selectedTools.map((tool, index) => (
                          tool && (
                            <td key={index} className="px-6 py-4 text-center">
                              <Badge variant="outline">
                                {tool.category}
                              </Badge>
                            </td>
                          )
                        ))}
                      </tr>

                      {/* Pricing Row */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          Pricing
                        </td>
                        {selectedTools.map((tool, index) => (
                          tool && (
                            <td key={index} className="px-6 py-4 text-center">
                              <Badge variant="secondary" className={getPricingColor(tool.pricing)}>
                                {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                              </Badge>
                            </td>
                          )
                        ))}
                      </tr>

                      {/* Rating Row */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          Rating
                        </td>
                        {selectedTools.map((tool, index) => (
                          tool && (
                            <td key={index} className="px-6 py-4">
                              <div className="flex items-center justify-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  {renderStars(tool.rating)}
                                </div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  {tool.rating}
                                </span>
                              </div>
                            </td>
                          )
                        ))}
                      </tr>

                      {/* Features Rows */}
                      {selectedTools.some(tool => tool?.features.length) && (
                        <>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                              Key Features
                            </td>
                            {selectedTools.map((tool, index) => (
                              tool && (
                                <td key={index} className="px-6 py-4">
                                  <div className="space-y-2">
                                    {tool.features.slice(0, 4).map((feature, featureIndex) => (
                                      <div key={featureIndex} className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">
                                          {feature}
                                        </span>
                                      </div>
                                    ))}
                                    {tool.features.length > 4 && (
                                      <div className="text-sm text-gray-500 dark:text-gray-400">
                                        +{tool.features.length - 4} more features
                                      </div>
                                    )}
                                  </div>
                                </td>
                              )
                            ))}
                          </tr>
                        </>
                      )}

                      {/* Website Row */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          Website
                        </td>
                        {selectedTools.map((tool, index) => (
                          tool && (
                            <td key={index} className="px-6 py-4 text-center">
                              <a
                                href={tool.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                              >
                                <span className="text-sm">Visit Site</span>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </td>
                          )
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Empty State */}
        {!selectedTools.some(tool => tool !== null) && (
          <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Select Tools to Compare
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose 2-3 AI tools from the dropdowns above to see a detailed side-by-side comparison.
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Click outside to close dropdowns */}
      {dropdownOpen !== null && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setDropdownOpen(null)}
        />
      )}
    </div>
  );
}