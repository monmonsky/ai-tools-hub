"use client";

import { Star, ExternalLink, Plus } from "lucide-react";
import { Tool } from "@/lib/data";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click

    const currentTools = searchParams.get('tools');
    const toolsArray = currentTools ? currentTools.split(',') : [];

    // Check if tool is already in comparison
    if (toolsArray.includes(tool.slug)) {
      // If already included, navigate to compare page
      router.push(`/compare?tools=${currentTools}`);
      return;
    }

    // Add tool to comparison (max 3 tools)
    if (toolsArray.length < 3) {
      toolsArray.push(tool.slug);
    } else {
      // Replace the last tool if already 3 tools
      toolsArray[2] = tool.slug;
    }

    router.push(`/compare?tools=${toolsArray.join(',')}`);
  };

  const isInComparison = () => {
    const currentTools = searchParams.get('tools');
    return currentTools ? currentTools.split(',').includes(tool.slug) : false;
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
        <Star
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
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
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 dark:text-gray-600"
        />
      );
    }

    return stars;
  };

  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on buttons or links
    if ((e.target as HTMLElement).closest('button, a')) {
      return;
    }
    router.push(`/tools/${tool.slug}`);
  };

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      {/* Card */}
      <Card
        className="relative bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 group-hover:border-gray-400 dark:group-hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col cursor-pointer"
        onClick={handleCardClick}
      >
        <CardHeader className="pb-3">
          {/* Header with logo and badges */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo placeholder */}
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {tool.name.charAt(0)}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 truncate">
                  {tool.name}
                </h3>
                <Badge variant="secondary" className={getPricingColor(tool.pricing)}>
                  {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                </Badge>
              </div>
            </div>

            {/* External link icon */}
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500 dark:text-gray-400 hover:text-cyan-400"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Category badge */}
          <Badge variant="outline" className="w-fit mt-2">
            {tool.category}
          </Badge>
        </CardHeader>

        <CardContent className="pb-3 flex-1">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {truncateDescription(tool.description)}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-1">
              {renderStars(tool.rating)}
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {tool.rating}
            </span>
          </div>
        </CardContent>

        <CardFooter className="pt-3">
          {/* Add to Compare Button */}
          <Button
            onClick={handleAddToCompare}
            variant={isInComparison() ? "secondary" : "outline"}
            className={`w-full ${
              isInComparison()
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-900/50'
            }`}
          >
            <Plus className="w-4 h-4 mr-2" />
            {isInComparison() ? 'In Comparison' : 'Add to Compare'}
          </Button>
        </CardFooter>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
      </Card>
    </div>
  );
}