import React from "react";
import "./FeatureCard.css"; // ✅ Import the CSS file

const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
