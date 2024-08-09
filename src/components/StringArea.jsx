import React, { useState, useSyncExternalStore } from "react";

const StringArea = ({ text, max }) => {
  const [showFullText, setShowFullText] = useState(false);
  //Eğer  ...  tıklanırsa tam halini göster:
  const handleClick = () => {
    setShowFullText(!showFullText);
  };
  //Eğer yazının uzunluğu max değerinden uzun ise yazının max'e kadar olan değerini al ve sonuna ... koy:
  //Değilse olduğu gibi kalsın:
  let shortText = text;
  if (text.length > max && !showFullText) {
    shortText = text.substring(0, max) + "...";
  }

  return <p onClick={handleClick}>{shortText}</p>;
};

export default StringArea;
