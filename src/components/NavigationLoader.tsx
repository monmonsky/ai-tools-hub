"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavigationLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;
    let completeTimer: NodeJS.Timeout;

    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);

      // Simulate loading progress with realistic increments
      progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 85) {
            clearInterval(progressTimer);
            return 85;
          }
          // Slower at start, faster in middle, slower at end
          const increment = prev < 20 ? Math.random() * 5 + 2 :
                          prev < 70 ? Math.random() * 15 + 5 :
                          Math.random() * 3 + 1;
          return Math.min(prev + increment, 85);
        });
      }, 100);
    };

    const handleComplete = () => {
      clearInterval(progressTimer);
      setProgress(100);
      completeTimer = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    };

    // Override Next.js router for intercepting navigation
    const originalPush = useRouter().push;
    const originalReplace = useRouter().replace;

    // Listen for browser navigation
    const handlePopState = () => {
      handleStart();
      setTimeout(handleComplete, 600);
    };

    // Override Link clicks (handled by pathname change in parent)
    window.addEventListener('popstate', handlePopState);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(completeTimer);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 z-50 overflow-hidden">
      {/* Main progress bar */}
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-200 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>

        {/* Moving highlight */}
        <div
          className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/40 to-transparent"
          style={{
            animation: progress > 0 ? 'shimmer 1s ease-in-out infinite' : 'none'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}