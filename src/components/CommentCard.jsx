import React from "react";

const CommentCard = ({ authorDisplayName, textOriginal, avatarUrl }) => {
  return (
    <div className="comment-card p-3 rounded-lg mb-3">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src={avatarUrl} // Dummy avatar
          alt="Avatar"
        />
        <p className="font-semibold">{authorDisplayName}</p>
      </div>
      <p>{textOriginal}</p>
    </div>
  );
};

export default CommentCard;
