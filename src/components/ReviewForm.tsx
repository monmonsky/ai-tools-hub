"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";
import { addReview, type Review } from "@/lib/reviews";

interface ReviewFormProps {
  toolSlug: string;
  onReviewAdded: (review: Review) => void;
}

export default function ReviewForm({ toolSlug, onReviewAdded }: ReviewFormProps) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || rating === 0 || !comment.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const newReview = addReview({
        toolSlug,
        name: name.trim(),
        rating,
        comment: comment.trim(),
      });

      onReviewAdded(newReview);

      // Reset form
      setName("");
      setRating(0);
      setComment("");
      setIsExpanded(false);
    } catch (error) {
      console.error("Error adding review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = name.trim() && rating > 0 && comment.trim();

  if (!isExpanded) {
    return (
      <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20">
        <CardContent className="pt-6">
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700"
          >
            Write a Review
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-300 dark:border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
          Write a Review
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full"
              maxLength={50}
            />
          </div>

          {/* Rating Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rating
            </label>
            <div className="flex items-center space-x-3">
              <StarRating
                rating={rating}
                interactive={true}
                onRatingChange={setRating}
                size="lg"
                showHalf={false}
              />
              {rating > 0 && (
                <Badge variant="outline" className="ml-2">
                  {rating} star{rating !== 1 ? 's' : ''}
                </Badge>
              )}
            </div>
          </div>

          {/* Comment Input */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Review
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience with this tool..."
              className="w-full min-h-[100px] p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical"
              maxLength={500}
            />
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {comment.length}/500 characters
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsExpanded(false)}
              className="px-6"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}