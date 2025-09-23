"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black">
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <section className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            {/* 404 Animation */}
            <div className="mb-8 relative">
              <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text animate-pulse mb-4">
                404
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-8 -right-8 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center animate-bounce delay-300">
                <span className="text-white text-xs">AI</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full flex items-center justify-center animate-bounce delay-700">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Oops! Page Not Found
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                The AI tool you're looking for seems to have vanished into the digital void.
                Don't worry, our other amazing tools are still here waiting for you!
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <Card className="group relative bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 hover:border-cyan-400/50 dark:hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <CardContent className="relative p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Go Home
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Return to our homepage and explore featured AI tools
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2" />
                      Homepage
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 hover:border-cyan-400/50 dark:hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <CardContent className="relative p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Browse Tools
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Discover all AI tools in our comprehensive directory
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/tools">
                      <Search className="w-4 h-4 mr-2" />
                      All Tools
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 hover:border-cyan-400/50 dark:hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <CardContent className="relative p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">#</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Categories
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Explore tools organized by category and use case
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/categories">
                      <span className="w-4 h-4 mr-2">#</span>
                      Categories
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <Link href="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Take Me Home
                </Link>
              </Button>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Or use the search bar above to find what you're looking for
              </p>
            </div>

            {/* Fun Fact */}
            <Card className="mt-12 max-w-2xl mx-auto bg-white/50 dark:bg-black/20 backdrop-blur-lg border-gray-300 dark:border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Did you know?
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Our AI Tools Hub features over {Math.floor(Math.random() * 50) + 100} carefully curated tools across {Math.floor(Math.random() * 10) + 15} categories,
                      helping thousands of users discover the perfect AI solutions for their needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}