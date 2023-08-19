import React from 'react';

const TruncateText = ({ text, maxWords = 30 }) => {
  const words = text.split(' ');

  if (words.length <= maxWords) {
    return <p>{text}</p>;
  }

  const truncatedText = words.slice(0, maxWords).join(' ');

  return (
    <div>
      <p>{truncatedText}...</p>
      <p className="text-gray-500 mt-1">Read more</p>
    </div>
  );
};

export default TruncateText;
