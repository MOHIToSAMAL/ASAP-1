// src/components/BookCard.jsx

import React from "react";
import "./ContentcardCard.css"; // Import the CSS for styling

const ContentCard = ({ content }) => {
  const { title, author, description, coverImage } = content;

  return (
    <div className="content-card">
      <img src={coverImage} alt={`${title} cover`} className="content-cover" />

      <div className="content-details">
        <h2 className="content-title">{title}</h2>
        <h3 className="content-author">by {author}</h3>
        <p className="content-description">{description}</p>
      </div>
      
    </div>
  );
};

export default ContentCard;
