"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tools, categories } from "@/lib/data";
import { useRouter } from "next/navigation";

interface SearchWithSuggestionsProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

interface SearchSuggestion {
  type: "tool" | "category" | "recent" | "trending";
  id: string;
  title: string;
  subtitle?: string;
  path: string;
}

export default function SearchWithSuggestions({
  onSearch,
  placeholder = "Search for AI tools, categories, or features...",
  className = "",
}: SearchWithSuggestionsProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("recent-searches");
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch {
        setRecentSearches([]);
      }
    }
  }, []);

  // Generate suggestions based on query
  useEffect(() => {
    if (!query.trim()) {
      // Show recent searches and trending when no query
      const recentSuggestions: SearchSuggestion[] = recentSearches.slice(0, 3).map((search) => ({
        type: "recent",
        id: `recent-${search}`,
        title: search,
        path: `/tools?search=${encodeURIComponent(search)}`,
      }));

      const trendingSuggestions: SearchSuggestion[] = [
        { type: "trending", id: "trending-chatgpt", title: "ChatGPT", subtitle: "AI Assistant", path: "/tools/chatgpt" },
        { type: "trending", id: "trending-midjourney", title: "Midjourney", subtitle: "Image Generation", path: "/tools/midjourney" },
        { type: "trending", id: "trending-github-copilot", title: "GitHub Copilot", subtitle: "Code", path: "/tools/github-copilot" },
      ];

      setSuggestions([...recentSuggestions, ...trendingSuggestions]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const newSuggestions: SearchSuggestion[] = [];

    // Tool suggestions
    tools
      .filter((tool) =>
        tool.name.toLowerCase().includes(lowercaseQuery) ||
        tool.description.toLowerCase().includes(lowercaseQuery) ||
        tool.category.toLowerCase().includes(lowercaseQuery)
      )
      .slice(0, 5)
      .forEach((tool) => {
        newSuggestions.push({
          type: "tool",
          id: tool.id,
          title: tool.name,
          subtitle: tool.category,
          path: `/tools/${tool.slug}`,
        });
      });

    // Category suggestions
    categories
      .filter((category) =>
        category.name.toLowerCase().includes(lowercaseQuery) ||
        category.description.toLowerCase().includes(lowercaseQuery)
      )
      .slice(0, 3)
      .forEach((category) => {
        newSuggestions.push({
          type: "category",
          id: category.id,
          title: category.name,
          subtitle: category.description,
          path: `/category/${category.slug}`,
        });
      });

    setSuggestions(newSuggestions.slice(0, 8));
  }, [query, recentSearches]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < suggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
            handleSuggestionClick(suggestions[highlightedIndex]);
          } else {
            handleSearch();
          }
          break;
        case "Escape":
          setIsOpen(false);
          setHighlightedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, suggestions, highlightedIndex, query]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;

    // Save to recent searches
    const updatedRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 10);
    setRecentSearches(updatedRecent);
    localStorage.setItem("recent-searches", JSON.stringify(updatedRecent));

    // Execute search
    if (onSearch) {
      onSearch(query);
    } else {
      router.push(`/tools?search=${encodeURIComponent(query)}`);
    }

    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    if (suggestion.type === "tool" || suggestion.type === "category") {
      // Save to recent searches for tools and categories
      const searchTerm = suggestion.title;
      const updatedRecent = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 10);
      setRecentSearches(updatedRecent);
      localStorage.setItem("recent-searches", JSON.stringify(updatedRecent));
    }

    router.push(suggestion.path);
    setIsOpen(false);
    setQuery("");
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case "recent":
        return <Clock className="w-4 h-4 text-gray-400" />;
      case "trending":
        return <TrendingUp className="w-4 h-4 text-orange-500" />;
      case "category":
        return <span className="w-4 h-4 text-purple-500 text-sm">#</span>;
      default:
        return <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded text-xs flex items-center justify-center text-white font-bold">
          {type === "tool" ? "T" : "?"}
        </div>;
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 dark:text-gray-400" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          className="w-full pl-14 pr-6 py-6 text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none border-none"
        />
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-[9999] max-h-96 overflow-y-auto">
          {suggestions.length > 0 ? (
            <div className="py-2">
              {query.trim() && (
                <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                  Search Results
                </div>
              )}

              {!query.trim() && recentSearches.length > 0 && (
                <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Recent Searches
                </div>
              )}

              {/* Recent searches */}
              {!query.trim() && suggestions.filter(s => s.type === "recent").map((suggestion, index) => (
                <button
                  key={`recent-${index}-${suggestion.title}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left ${
                    index === highlightedIndex ? "bg-gray-50 dark:bg-gray-700" : ""
                  }`}
                >
                  {getSuggestionIcon(suggestion.type)}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white truncate">
                      {suggestion.title}
                    </div>
                    {suggestion.subtitle && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {suggestion.subtitle}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}

              {/* Search results when typing */}
              {query.trim() && suggestions.map((suggestion, index) => (
                <button
                  key={`${suggestion.type}-${suggestion.id}-${index}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left ${
                    index === highlightedIndex ? "bg-gray-50 dark:bg-gray-700" : ""
                  }`}
                >
                  {getSuggestionIcon(suggestion.type)}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 dark:text-white truncate">
                      {suggestion.title}
                    </div>
                    {suggestion.subtitle && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {suggestion.subtitle}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {suggestion.type === "trending" && (
                      <Badge variant="outline" className="text-xs">Trending</Badge>
                    )}
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
              ))}

              {/* Trending section when not typing */}
              {!query.trim() && suggestions.some(s => s.type === "trending") && (
                <>
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-t border-gray-100 dark:border-gray-700 mt-2">
                    Trending
                  </div>
                  {suggestions.filter(s => s.type === "trending").map((suggestion, index) => (
                    <button
                      key={`trending-${suggestion.id}-${index}`}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                    >
                      {getSuggestionIcon(suggestion.type)}
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">
                          {suggestion.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {suggestion.subtitle}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">Trending</Badge>
                    </button>
                  ))}
                </>
              )}
            </div>
          ) : query.trim() ? (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{query}"</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSearch}
                className="mt-2"
              >
                Search anyway
              </Button>
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Start typing to search for AI tools...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}