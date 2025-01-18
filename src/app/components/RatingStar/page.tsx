import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function RatingStar({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) {
  const stars = Array.from({ length: maxStars }, (_, index) => index < rating);

  return (
    <div className="flex space-x-1">
      {stars.map((isFilled, index) => (
        <span
          key={index}
          className={`text-xs ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          {isFilled ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </div>
  );
}

export default RatingStar;