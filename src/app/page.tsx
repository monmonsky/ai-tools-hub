import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import ToolCard from "@/components/ToolCard";
import { tools, categories } from "@/lib/data";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />

        {/* Categories Section */}
        <section id="categories" className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Explore by
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ml-2">
                  Category
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Find the perfect AI tools for your specific needs across different categories
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                // Get the icon component from lucide-react
                const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Folder;

                return (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <Card className="group relative bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 hover:border-gray-400 dark:hover:border-purple-500/40 transition-all duration-300 h-full cursor-pointer">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4 mb-3">
                          {/* Category Icon */}
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>

                          {/* Category Name */}
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300">
                            {category.name}
                          </h3>
                        </div>
                      </CardHeader>

                      <CardContent>
                        {/* Category Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {category.description}
                        </p>

                        {/* Tools Count */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {tools.filter(tool => tool.category === category.name).length} tools
                          </span>
                          <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
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

        {/* Featured Tools Section */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Featured AI Tools
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover the most popular and powerful AI tools that are transforming industries and workflows
              </p>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-16">
              <Button asChild>
                <Link
                  href="/tools"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black shadow-lg"
                >
                  View All Tools
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
