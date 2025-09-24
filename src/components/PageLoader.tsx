"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);

      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 30;
        });
      }, 100);

      // Complete loading after navigation
      const completeTimer = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
        }, 300);
      }, 500);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(completeTimer);
      };
    };

    // Trigger loading on pathname change
    const cleanup = handleStart();

    return cleanup;
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 ease-out shadow-lg"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
        </div>
      </div>

      {/* Full Screen Loader */}
      <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center">
        <div className="text-center space-y-8">
          {/* Aikita Logo with Animation */}
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto animate-pulse relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-xl opacity-40 animate-ping"></div>

              {/* Logo Icon */}
              <svg className="w-10 h-10 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Aikita
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 animate-pulse">
              Memuat halaman...
            </p>
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></div>
          </div>

          {/* Progress Circle */}
          <div className="relative w-16 h-16 mx-auto">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              {/* Background Circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-gray-200 dark:text-gray-700"
              />
              {/* Progress Circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="url(#gradient)"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Progress Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}