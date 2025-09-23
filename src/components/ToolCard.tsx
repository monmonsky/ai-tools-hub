"use client";

import { Star, ExternalLink, Plus, Minus, MessageSquare, Bot, Image as ImageIcon, Palette, Github, Code, PenTool, Mic, Video, Search, Monitor, Zap, Brain, Sparkles, Camera, FileText, Volume2, Play, Globe } from "lucide-react";
import { Tool } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getReviewStats } from "@/lib/reviews";
import StarRating from "./StarRating";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const router = useRouter();

  // Review stats state
  const [reviewStats, setReviewStats] = useState({ averageRating: 0, totalReviews: 0, ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } });
  const [compareList, setCompareList] = useState<string[]>([]);

  // Load review stats on mount
  useEffect(() => {
    const stats = getReviewStats(tool.slug);
    setReviewStats(stats);
  }, [tool.slug]);

  // Load and listen for compare list changes
  useEffect(() => {
    const loadCompareList = () => {
      const stored = localStorage.getItem('compareList');
      if (stored) {
        try {
          setCompareList(JSON.parse(stored));
        } catch {
          setCompareList([]);
        }
      } else {
        setCompareList([]);
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

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click

    const isCurrentlyInComparison = compareList.includes(tool.slug);
    let newCompareList: string[];

    if (isCurrentlyInComparison) {
      // Remove from comparison
      newCompareList = compareList.filter(id => id !== tool.slug);
    } else {
      // Add to comparison (max 3 tools)
      if (compareList.length >= 3) {
        alert('Maksimal 3 tools dapat dibandingkan sekaligus');
        return;
      }
      newCompareList = [...compareList, tool.slug];
    }

    setCompareList(newCompareList);
    localStorage.setItem('compareList', JSON.stringify(newCompareList));

    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('compareListUpdated'));
  };

  const isInComparison = () => {
    return compareList.includes(tool.slug);
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

  const getToolIcon = (toolName: string) => {
    const size = "w-6 h-6";

    switch (toolName.toLowerCase()) {
      case 'chatgpt':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.529 2.9 5.973 5.973 0 0 0 4.258 1.786A5.975 5.975 0 0 0 16.282 22a5.962 5.962 0 0 0 4.27-1.746 5.979 5.979 0 0 0 1.73-4.233Zm-9.022 6.442a9.184 9.184 0 0 1-2.68-.398l-2.007 1.061a.538.538 0 0 1-.168.025.533.533 0 0 1-.379-.16.535.535 0 0 1-.124-.708l1.06-2.006a9.265 9.265 0 0 1-2.557-6.086c0-5.14 4.198-9.337 9.338-9.337 5.14 0 9.337 4.198 9.337 9.337-.001 5.14-4.198 9.272-9.337 9.272Z" fill="currentColor"/>
          </svg>
        );
      case 'claude':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L2 5.5V18.5L12 24l10-5.5V5.5L12 0zm0 2.3l8 4.4v10.6l-8 4.4-8-4.4V6.7l8-4.4zM8 8l8 4-8 4V8zm2 2.5v3l4-1.5-4-1.5z"/>
          </svg>
        );
      case 'midjourney':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        );
      case 'dall-e':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
            <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        );
      case 'github copilot':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'cursor':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
      case 'jasper':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'elevenlabs':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <polygon points="11 5,6 9,2 9,2 15,6 15,11 19,11 5" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
      case 'runway':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <polygon points="5 3,19 12,5 21,5 3" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
          </svg>
        );
      case 'perplexity':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return <Code className={size} />;
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
    <div className="group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Enhanced shadow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-2xl transform scale-110"></div>

      {/* Card */}
      <Card
        className="relative bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 group-hover:border-cyan-400/50 dark:group-hover:border-purple-400/60 transition-all duration-300 h-full flex flex-col cursor-pointer group-hover:shadow-2xl group-hover:shadow-cyan-500/10 dark:group-hover:shadow-purple-500/20"
        onClick={handleCardClick}
      >
        <CardHeader className="pb-3">
          {/* Header with logo and badges */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {/* Tool icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {getToolIcon(tool.name)}
                </div>
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
            <StarRating
              rating={reviewStats.totalReviews > 0 ? reviewStats.averageRating : tool.rating}
              size="sm"
            />
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {reviewStats.totalReviews > 0 ? reviewStats.averageRating : tool.rating}
              {reviewStats.totalReviews > 0 && (
                <span className="ml-1">({reviewStats.totalReviews})</span>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-3">
          {/* Compare Toggle Button */}
          <Button
            onClick={handleCompareToggle}
            variant={isInComparison() ? "secondary" : "outline"}
            className={`w-full ${
              isInComparison()
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-900/50'
            }`}
          >
            {isInComparison() ? (
              <Minus className="w-4 h-4 mr-2" />
            ) : (
              <Plus className="w-4 h-4 mr-2" />
            )}
            {isInComparison() ? 'Hapus dari Perbandingan' : 'Bandingkan'}
          </Button>
        </CardFooter>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
      </Card>
    </div>
  );
}