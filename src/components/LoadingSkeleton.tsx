"use client";

interface LoadingSkeletonProps {
  type?: 'card' | 'list' | 'text' | 'avatar' | 'button' | 'custom';
  count?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSkeleton({
  type = 'card',
  count = 1,
  className = '',
  children
}: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-pulse ${className}`}>
            <div className="flex items-start space-x-4">
              {/* Avatar/Icon */}
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>

              <div className="flex-1 space-y-3">
                {/* Title */}
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>

                {/* Description lines */}
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'list':
        return (
          <div className={`space-y-3 ${className}`}>
            <div className="flex items-center space-x-3 p-3 animate-pulse">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="flex-1 space-y-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className={`space-y-3 animate-pulse ${className}`}>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        );

      case 'avatar':
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          </div>
        );

      case 'button':
        return (
          <div className={`h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse ${className}`}></div>
        );

      case 'custom':
        return children || (
          <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}></div>
        );

      default:
        return (
          <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}></div>
        );
    }
  };

  if (count === 1) {
    return renderSkeleton();
  }

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}

// Specialized loading components
export function ToolCardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border border-gray-200 dark:border-purple-500/20 rounded-xl p-6 animate-pulse">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            </div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CategoryCardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border border-gray-200 dark:border-purple-500/20 rounded-xl p-6 animate-pulse">
          <div className="flex items-center space-x-4 mb-3">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div className="text-center mb-16 animate-pulse">
      <div className="inline-block w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mb-8"></div>
      <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto mb-6"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
    </div>
  );
}