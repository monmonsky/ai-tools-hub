"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, Check, X } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getToolBySlug } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { use } from "react";

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ToolPage({ params }: ToolPageProps) {
  const resolvedParams = use(params);
  const tool = getToolBySlug(resolvedParams.slug);

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tool Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              The AI tool you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link
                href="/tools"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Tools</span>
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-gray-300 dark:text-gray-600" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300 dark:text-gray-600" />
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Back to Tools */}
        <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/tools"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Tools</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">

              {/* Logo and Basic Info */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-4xl">
                    {tool.name.charAt(0)}
                  </span>
                </div>

                {/* Pricing Badge */}
                <Badge variant="secondary" className={getPricingColor(tool.pricing)}>
                  {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                </Badge>
              </div>

              {/* Tool Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                      {tool.name}
                    </h1>

                    <div className="flex items-center space-x-4 mb-6">
                      <Badge variant="outline">
                        {tool.category}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(tool.rating)}
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {tool.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      {tool.fullDescription}
                    </p>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex-shrink-0">
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Pricing
                </h2>
                <div className="space-y-4">
                  {tool.pricingDetails.free && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">Free Tier</h3>
                      <p className="text-green-700 dark:text-green-300">{tool.pricingDetails.free}</p>
                    </div>
                  )}
                  {tool.pricingDetails.paid && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Paid Plan</h3>
                      <p className="text-blue-700 dark:text-blue-300">{tool.pricingDetails.paid}</p>
                    </div>
                  )}
                  {tool.pricingDetails.enterprise && (
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">Enterprise</h3>
                      <p className="text-purple-700 dark:text-purple-300">{tool.pricingDetails.enterprise}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Pros */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Pros
                </h2>
                <div className="space-y-4">
                  {tool.pros.map((pro, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Cons
                </h2>
                <div className="space-y-4">
                  {tool.cons.map((con, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}