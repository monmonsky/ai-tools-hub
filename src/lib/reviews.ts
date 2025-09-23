export interface Review {
  id: string;
  toolSlug: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

// Get reviews for a specific tool
export const getReviews = (toolSlug: string): Review[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(`reviews-${toolSlug}`);
    if (!stored) return [];

    const reviews = JSON.parse(stored) as Review[];
    // Sort by newest first
    return reviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error('Error parsing reviews:', error);
    return [];
  }
};

// Add a new review
export const addReview = (review: Omit<Review, 'id' | 'createdAt'>): Review => {
  const newReview: Review = {
    ...review,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };

  const existing = getReviews(review.toolSlug);
  const updated = [newReview, ...existing];

  localStorage.setItem(`reviews-${review.toolSlug}`, JSON.stringify(updated));
  return newReview;
};

// Calculate review statistics
export const getReviewStats = (toolSlug: string): ReviewStats => {
  const reviews = getReviews(toolSlug);

  if (reviews.length === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    };
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  reviews.forEach(review => {
    ratingDistribution[review.rating as keyof typeof ratingDistribution]++;
  });

  return {
    averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
    totalReviews: reviews.length,
    ratingDistribution,
  };
};

// Get all reviews across all tools (for potential future use)
export const getAllReviews = (): Review[] => {
  if (typeof window === 'undefined') return [];

  const allReviews: Review[] = [];

  // Iterate through localStorage to find all review keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('reviews-')) {
      try {
        const reviews = JSON.parse(localStorage.getItem(key) || '[]') as Review[];
        allReviews.push(...reviews);
      } catch (error) {
        console.error(`Error parsing reviews for key ${key}:`, error);
      }
    }
  }

  return allReviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

// Delete a review (optional functionality)
export const deleteReview = (toolSlug: string, reviewId: string): boolean => {
  try {
    const reviews = getReviews(toolSlug);
    const filtered = reviews.filter(review => review.id !== reviewId);

    if (filtered.length === reviews.length) {
      return false; // Review not found
    }

    localStorage.setItem(`reviews-${toolSlug}`, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting review:', error);
    return false;
  }
};

// Generate a simple unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Format review date for display
export const formatReviewDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};