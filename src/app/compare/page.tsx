"use client";

import { useState, useEffect } from "react";
import { tools, Tool } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ComparePage() {
  const [compareList, setCompareList] = useState<string[]>([]);
  const [compareTools, setCompareTools] = useState<Tool[]>([]);

  // Load compare list from localStorage
  useEffect(() => {
    const loadCompareList = () => {
      const stored = localStorage.getItem('compareList');
      if (stored) {
        try {
          const toolIds = JSON.parse(stored);
          setCompareList(toolIds);

          // Get full tool objects
          const selectedTools = toolIds.map((id: string) =>
            tools.find(tool => tool.slug === id)
          ).filter(Boolean);
          setCompareTools(selectedTools);
        } catch {
          setCompareList([]);
          setCompareTools([]);
        }
      }
    };

    // Load initially
    loadCompareList();

    // Listen for storage changes
    const handleStorageChange = () => {
      loadCompareList();
    };

    const handleCustomStorageChange = () => {
      loadCompareList();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('compareListUpdated', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('compareListUpdated', handleCustomStorageChange);
    };
  }, []);

  const clearComparison = () => {
    setCompareList([]);
    setCompareTools([]);
    localStorage.removeItem('compareList');
    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('compareListUpdated'));
  };

  const removeTool = (toolSlug: string) => {
    const newCompareList = compareList.filter(id => id !== toolSlug);
    const newCompareTools = compareTools.filter(tool => tool.slug !== toolSlug);

    setCompareList(newCompareList);
    setCompareTools(newCompareTools);
    localStorage.setItem('compareList', JSON.stringify(newCompareList));

    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('compareListUpdated'));
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

  if (compareTools.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black">
            <div className="container mx-auto px-4 py-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Link href="/" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                  </Link>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Bandingkan AI Tools
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bandingkan fitur, harga, dan rating secara berdampingan
                  </p>
                </div>
              </div>

              <Card className="max-w-2xl mx-auto">
                <CardContent className="py-16 text-center">
                  <div className="mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">📊</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Belum Ada Tools yang Dipilih
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Pilih tools dari beranda untuk mulai membandingkan fitur, harga, dan rating mereka.
                    </p>
                    <Link href="/">
                      <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                        Jelajahi AI Tools
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Link href="/" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Beranda
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Bandingkan AI Tools
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Membandingkan {compareTools.length} tool{compareTools.length > 1 ? 's' : ''}
                </p>
              </div>
              <Button
                onClick={clearComparison}
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Hapus Semua
              </Button>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <Card>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left p-6 font-bold text-gray-900 dark:text-white">Fitur</th>
                        {compareTools.map((tool) => (
                          <th key={tool.slug} className="text-left p-6 min-w-[250px]">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">{tool.name}</h3>
                                <Badge variant="outline" className="mt-1">
                                  {tool.category}
                                </Badge>
                              </div>
                              <Button
                                onClick={() => removeTool(tool.slug)}
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Description */}
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-6 font-medium text-gray-900 dark:text-white">Deskripsi</td>
                        {compareTools.map((tool) => (
                          <td key={tool.slug} className="p-6 text-sm text-gray-600 dark:text-gray-300">
                            {tool.description}
                          </td>
                        ))}
                      </tr>

                      {/* Pricing */}
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-6 font-medium text-gray-900 dark:text-white">Harga</td>
                        {compareTools.map((tool) => (
                          <td key={tool.slug} className="p-6">
                            <Badge className={getPricingColor(tool.pricing)}>
                              {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                            </Badge>
                            {tool.pricingDetails.free && (
                              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                Gratis: {tool.pricingDetails.free}
                              </div>
                            )}
                            {tool.pricingDetails.paid && (
                              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                Berbayar: {tool.pricingDetails.paid}
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>

                      {/* Rating */}
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-6 font-medium text-gray-900 dark:text-white">Rating</td>
                        {compareTools.map((tool) => (
                          <td key={tool.slug} className="p-6">
                            <div className="flex items-center space-x-2">
                              <StarRating rating={tool.rating} size="sm" />
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {tool.rating}
                              </span>
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Features */}
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-6 font-medium text-gray-900 dark:text-white">Fitur Utama</td>
                        {compareTools.map((tool) => (
                          <td key={tool.slug} className="p-6">
                            <ul className="space-y-2">
                              {tool.features.slice(0, 5).map((feature, index) => (
                                <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                  <span className="text-green-500 mr-2">✓</span>
                                  {feature}
                                </li>
                              ))}
                              {tool.features.length > 5 && (
                                <li className="text-sm text-gray-500 dark:text-gray-400">
                                  +{tool.features.length - 5} fitur lainnya
                                </li>
                              )}
                            </ul>
                          </td>
                        ))}
                      </tr>

                      {/* Website */}
                      <tr>
                        <td className="p-6 font-medium text-gray-900 dark:text-white">Website</td>
                        {compareTools.map((tool) => (
                          <td key={tool.slug} className="p-6">
                            <a
                              href={tool.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 text-sm underline"
                            >
                              Kunjungi Website
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}