"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface LoadingSkeletonProps {
  count?: number;
  type?: "card" | "list" | "detail";
}

export default function LoadingSkeleton({ count = 6, type = "card" }: LoadingSkeletonProps) {
  if (type === "detail") {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Navigation Skeleton */}
        <div className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-48 rounded"></div>
              <div className="flex space-x-4">
                <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-16 rounded"></div>
                <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-16 rounded"></div>
                <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-20 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 pt-20">
          {/* Hero Section Skeleton */}
          <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="flex-shrink-0">
                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 w-32 h-32 rounded-2xl mb-6"></div>
                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded"></div>
                </div>
                <div className="flex-1">
                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-12 w-3/4 rounded mb-4"></div>
                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-6 w-1/2 rounded mb-6"></div>
                  <div className="space-y-2 mb-8">
                    <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-full rounded"></div>
                    <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-5/6 rounded"></div>
                    <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-4/5 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Skeleton */}
          <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-1/3 rounded mb-8"></div>
                    <div className="space-y-4">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-full rounded"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (type === "list") {
    return (
      <div className="space-y-4">
        {[...Array(count)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-300 dark:bg-gray-600 w-12 h-12 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="bg-gray-300 dark:bg-gray-600 h-4 w-1/4 rounded"></div>
                  <div className="bg-gray-300 dark:bg-gray-600 h-3 w-1/2 rounded"></div>
                </div>
                <div className="bg-gray-300 dark:bg-gray-600 h-6 w-16 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Default card skeleton
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, i) => (
        <Card key={i} className="animate-pulse h-full flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="bg-gray-300 dark:bg-gray-600 w-12 h-12 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="bg-gray-300 dark:bg-gray-600 h-4 w-3/4 rounded"></div>
                  <div className="bg-gray-300 dark:bg-gray-600 h-3 w-1/2 rounded"></div>
                </div>
              </div>
              <div className="bg-gray-300 dark:bg-gray-600 w-5 h-5 rounded"></div>
            </div>
            <div className="bg-gray-300 dark:bg-gray-600 h-6 w-20 rounded-full mt-2"></div>
          </CardHeader>

          <CardContent className="pb-3 flex-1">
            <div className="space-y-2 mb-4">
              <div className="bg-gray-300 dark:bg-gray-600 h-3 w-full rounded"></div>
              <div className="bg-gray-300 dark:bg-gray-600 h-3 w-5/6 rounded"></div>
              <div className="bg-gray-300 dark:bg-gray-600 h-3 w-4/5 rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="bg-gray-300 dark:bg-gray-600 w-4 h-4 rounded"></div>
                ))}
              </div>
              <div className="bg-gray-300 dark:bg-gray-600 h-4 w-8 rounded"></div>
            </div>
          </CardContent>

          <CardFooter className="pt-3">
            <div className="bg-gray-300 dark:bg-gray-600 h-10 w-full rounded-lg"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <Card className="animate-pulse h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="bg-gray-300 dark:bg-gray-600 w-12 h-12 rounded-lg"></div>
            <div className="flex-1 space-y-2">
              <div className="bg-gray-300 dark:bg-gray-600 h-4 w-3/4 rounded"></div>
              <div className="bg-gray-300 dark:bg-gray-600 h-3 w-1/2 rounded"></div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          <div className="bg-gray-300 dark:bg-gray-600 h-3 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-600 h-3 w-5/6 rounded"></div>
        </div>
      </CardContent>
    </Card>
  );
}