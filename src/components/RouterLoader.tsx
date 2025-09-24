"use client";

import { useState, useEffect } from "react";

export default function RouterLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Listen for Next.js router events via global navigation events
    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);

      // Simulate progress
      let currentProgress = 0;
      const progressTimer = setInterval(() => {
        currentProgress += Math.random() * 8 + 3; // 3-11% increments
        if (currentProgress >= 85) {
          clearInterval(progressTimer);
          setProgress(85);
          return;
        }
        setProgress(currentProgress);
      }, 80);

      // Complete loading
      const completeTimer = setTimeout(() => {
        clearInterval(progressTimer);
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
        }, 200);
      }, Math.random() * 600 + 400); // 400-1000ms

      // Store timers for cleanup
      (window as any).__routeLoadingTimers = { progressTimer, completeTimer };
    };

    const handleComplete = () => {
      const timers = (window as any).__routeLoadingTimers;
      if (timers) {
        clearInterval(timers.progressTimer);
        clearTimeout(timers.completeTimer);
      }

      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    };

    // Override Link component clicks
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Only show loading for internal navigation to different pages
        if (url.origin === currentUrl.origin &&
            url.pathname !== currentUrl.pathname) {
          handleStart();
        }
      }
    };

    // Listen for click events on the document
    document.addEventListener('click', handleLinkClick);

    // Listen for browser navigation
    window.addEventListener('popstate', handleStart);

    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('popstate', handleStart);

      const timers = (window as any).__routeLoadingTimers;
      if (timers) {
        clearInterval(timers.progressTimer);
        clearTimeout(timers.completeTimer);
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Progress Bar */}
      <div className="h-1 bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out relative"
          style={{
            width: `${progress}%`,
            transition: progress === 100 ? 'width 200ms ease-out' : 'width 150ms ease-out'
          }}
        >
          {/* Animated shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse opacity-75"></div>

          {/* Moving glow effect */}
          <div
            className="absolute right-0 top-0 w-20 h-full opacity-60"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              animation: 'moveGlow 1s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Loading indicator for slower connections */}
      {progress > 0 && progress < 100 && (
        <div className="absolute top-2 right-4 flex items-center space-x-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
          <span>Loading...</span>
        </div>
      )}

      <style jsx>{`
        @keyframes moveGlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}