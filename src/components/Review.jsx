import React, { useState, useEffect, useRef } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const containerRef = useRef(null);

  // Simulate fetching reviews from an API
  const fetchReviews = () => {
    // Generate a larger set of reviews for continuous horizontal scroll
    const initialReviews = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      author: `User ${i}`,
      content: `This is a review from user ${i}. It's a great product/service!`,
    }));
    setReviews(initialReviews);
  };

  // Effect to fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-gray-100" // Tailwind classes for whole page styling
      style={{
        overflowX: 'hidden', // Hide horizontal scrollbar
        boxSizing: 'border-box',
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          whiteSpace: 'nowrap', // Keep reviews in a single line
          animation: 'scroll-horizontal 60s linear infinite', // Apply animation
        }}
      >
        {
          reviews.map((review) => (
            <div
              key={review.id}
              style={{
                flex: '0 0 auto', // Prevent reviews from shrinking
                width: '300px', // Fixed width for each review card
                border: '1px solid #eee',
                padding: '15px',
                marginRight: '20px',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                display: 'inline-block',
              }}
            >
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))
        }
        {/* Duplicate reviews to create seamless loop */}
        {
          reviews.map((review) => (
            <div
              key={`duplicate-${review.id}`} // Unique key for duplicated items
              style={{
                flex: '0 0 auto',
                width: '300px',
                border: '1px solid #eee',
                padding: '15px',
                marginRight: '20px',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                display: 'inline-block',
              }}
            >
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))
        }
      </div>
      {/* Add global style for keyframes */}
      <style>
        {`
          @keyframes scroll-horizontal {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%); /* Move half the width of the duplicated content */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Review;