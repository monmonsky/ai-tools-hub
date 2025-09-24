"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoadingTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateLoading = () => {
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    let currentProgress = 0;
    const progressTimer = setInterval(() => {
      currentProgress += Math.random() * 10 + 5; // 5-15% increments
      if (currentProgress >= 90) {
        clearInterval(progressTimer);
        setProgress(90);

        // Complete loading
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
            setProgress(0);
          }, 300);
        }, 500);
        return;
      }
      setProgress(currentProgress);
    }, 100);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={simulateLoading}
        disabled={isLoading}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold shadow-lg"
      >
        {isLoading ? 'Loading...' : 'Test Loading'}
      </Button>

      {/* Loading Bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-1 bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-200 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse opacity-75"></div>
              <div
                className="absolute right-0 top-0 w-20 h-full opacity-60"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  animation: 'moveGlow 1s ease-in-out infinite'
                }}
              ></div>
            </div>
          </div>
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