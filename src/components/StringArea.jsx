import React, { useState } from "react";

const StringArea = ({ text, max }) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  let displayText = text;
  if (text.length > max && !showFullText) {
    displayText = text.substring(0, max) + "...";
  }

  return (
    <div>
      <p onClick={handleClick} style={{ cursor: "pointer" }}>
        {displayText}
      </p>
      {text.length > max && (
        <button
          onClick={handleClick}
          style={{ border: "none", background: "none", color: "blue", cursor: "pointer" }}
        ></button>
      )}
    </div>
  );
};

export default StringArea;
