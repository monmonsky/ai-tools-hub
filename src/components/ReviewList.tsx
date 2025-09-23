"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";
import { formatReviewDate, type Review } from "@/lib/reviews";

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No reviews yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Be the first to review this tool and help others make informed decisions.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card
          key={review.id}
          className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20 hover:border-gray-400 dark:hover:border-purple-500/40 transition-all duration-300"
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div>
                  {/* Reviewer Name */}
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h4>

                  {/* Rating and Date */}
                  <div className="flex items-center space-x-2 mt-1">
                    <StarRating rating={review.rating} size="sm" showHalf={false} />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      •
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatReviewDate(review.createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <Badge
                variant="secondary"
                className={`${
                  review.rating >= 4
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : review.rating >= 3
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {review.rating}/5
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            {/* Review Comment */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {review.comment}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}