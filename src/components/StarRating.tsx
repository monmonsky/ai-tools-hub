"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  showHalf?: boolean;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  onRatingChange,
  showHalf = true,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const starSize = sizeClasses[size];

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = showHalf && rating % 1 !== 0;

    for (let i = 1; i <= maxRating; i++) {
      const isFilled = i <= fullStars;
      const isHalf = i === fullStars + 1 && hasHalfStar;

      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => handleStarClick(i)}
          disabled={!interactive}
          className={`${
            interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
          } transition-transform duration-200 ${!interactive ? "pointer-events-none" : ""}`}
        >
          {isHalf ? (
            <div className="relative">
              <Star className={`${starSize} text-gray-300 dark:text-gray-600`} />
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className={`${starSize} fill-yellow-400 text-yellow-400`} />
              </div>
            </div>
          ) : (
            <Star
              className={`${starSize} ${
                isFilled
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
              } ${
                interactive
                  ? "hover:fill-yellow-300 hover:text-yellow-300"
                  : ""
              }`}
            />
          )}
        </button>
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center space-x-1">
      {renderStars()}
    </div>
  );
}