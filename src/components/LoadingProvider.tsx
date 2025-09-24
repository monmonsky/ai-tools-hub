"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  startLoading: () => void;
  stopLoading: () => void;
  setProgress: (progress: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgressState] = useState(0);

  const startLoading = () => {
    setIsLoading(true);
    setProgressState(0);
  };

  const stopLoading = () => {
    setProgressState(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgressState(0);
    }, 300);
  };

  const setProgress = (newProgress: number) => {
    setProgressState(Math.min(Math.max(newProgress, 0), 100));
  };

  return (
    <LoadingContext.Provider value={{
      isLoading,
      progress,
      startLoading,
      stopLoading,
      setProgress
    }}>
      {children}
      {/* Global Loading Bar */}
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
          <style jsx>{`
            @keyframes moveGlow {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
          `}</style>
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}