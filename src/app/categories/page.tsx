"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { categories, tools } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">All </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Explore AI tools organized by category to find exactly what you need
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                // Get the icon component from lucide-react
                const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[category.icon] || LucideIcons.Folder;
                const toolCount = tools.filter(tool => tool.category === category.name).length;

                return (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <Card className="group relative bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 hover:border-gray-400 dark:hover:border-purple-500/40 transition-all duration-300 h-full cursor-pointer">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4 mb-3">
                          {/* Category Icon */}
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>

                          <div className="flex-1">
                            {/* Category Name */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300">
                              {category.name}
                            </h3>

                            {/* Tools Count */}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {toolCount} tool{toolCount !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        {/* Category Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {category.description}
                        </p>

                        {/* Arrow indicator */}
                        <div className="flex items-center justify-end">
                          <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}