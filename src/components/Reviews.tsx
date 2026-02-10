"use client";

import { useRef } from "react";

const reviews = [
  {
    text: "Sushi is where this place shines, with most rolls offering 8-10 pieces. Great value for all-you-can-eat.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "Everything is made to order including the hibachi. Now my favorite Japanese restaurant.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "The waitress is efficient, restrooms are clean and well designed, and there is hibachi prepared right in front of you.",
    author: "Google Reviewer",
    rating: 4,
  },
  {
    text: "Incredible variety and the quality never drops. We ordered 15 different rolls and every single one was fresh and delicious.",
    author: "Yelp Reviewer",
    rating: 5,
  },
  {
    text: "Best AYCE sushi in Tampa Bay, hands down. The hibachi is an added bonus that sets them apart.",
    author: "Google Reviewer",
    rating: 5,
  },
];

function StarRating({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={star <= rating ? "var(--accent)" : "var(--surface-light)"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--surface)" }}
      aria-label="Customer Reviews"
    >
      <div className="max-w-6xl mx-auto">
        {/* Rating Header */}
        <div className="text-center mb-12">
          <div
            className="text-7xl sm:text-8xl font-bold mb-4"
            style={{ color: "var(--accent)" }}
          >
            4.2
          </div>
          <div className="flex justify-center mb-4">
            <StarRating rating={4} size={28} />
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            3,450+ Reviews & Counting
          </h2>

          {/* Platform Ratings */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
              <div
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                Google
              </div>
              <StarRating rating={4} size={16} />
              <span
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                4.2/5 (2,800 reviews)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                Yelp
              </div>
              <StarRating rating={3} size={16} />
              <span
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                3.4/5 (650 reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Review Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hidden lg:flex cursor-pointer"
            style={{
              backgroundColor: "var(--surface-light)",
              color: "var(--text-primary)",
            }}
            aria-label="Scroll reviews left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="review-scroll flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "thin" }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] sm:w-[360px] p-6 rounded-xl snap-start"
                style={{ backgroundColor: "var(--surface-light)" }}
              >
                <div className="mb-4">
                  <StarRating rating={review.rating} size={16} />
                </div>
                <blockquote
                  className="text-base leading-relaxed mb-4 italic"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <cite
                  className="text-sm not-italic"
                  style={{ color: "var(--text-secondary)" }}
                >
                  &mdash; {review.author}
                </cite>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hidden lg:flex cursor-pointer"
            style={{
              backgroundColor: "var(--surface-light)",
              color: "var(--text-primary)",
            }}
            aria-label="Scroll reviews right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
