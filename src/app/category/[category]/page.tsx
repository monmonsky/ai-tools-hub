"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ToolCard from "@/components/ToolCard";
import { getCategoryBySlug, getToolsByCategory } from "@/lib/data";
import { use } from "react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(resolvedParams.category);

  // Get the icon component from lucide-react
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Folder;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link
                href="/#categories"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Categories
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 dark:text-white font-medium">
                {category.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Category Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Category Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">{category.name} </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Tools
                </span>
              </h1>

              {/* Category Description */}
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                {category.description}
              </p>

              {/* Tools Count */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-gray-300 dark:border-purple-500/20 rounded-full">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {tools.length} tool{tools.length !== 1 ? 's' : ''} available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {tools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    No tools found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We&apos;re constantly adding new {category.name.toLowerCase()} tools. Check back soon!
                  </p>
                  <Link
                    href="/tools"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <span>Browse All Tools</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}