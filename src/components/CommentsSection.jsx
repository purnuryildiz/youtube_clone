import React, { useEffect, useState } from "react";
import axios from "axios";
import { options } from "../utils/constants";
import CommentCard from "./CommentCard";

const CommentsSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous error state

        const response = await axios.get(
          `https://youtube138.p.rapidapi.com/video/comments/?id=${videoId}`,
          options
        );

        // Konsol çıktısını kontrol edin ve comments verisini doğru işlediğinizden emin olun
        console.log("Yorum yanıtı:", response.data);

        const commentsData = response.data.comments || []; // `comments` dizisini kontrol et
        setComments(commentsData);
      } catch (error) {
        setError("Comments could not be fetched. Please try again later.");
        console.error("Yorumları alırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [videoId]);

  if (loading) return <p>Loading comments...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        comments.map((comment, index) => {
          const snippet = comment.snippet || {}; // `snippet` varsa kullan
          return (
            snippet.authorDisplayName &&
            snippet.textOriginal && (
              <CommentCard
                key={index}
                authorDisplayName={snippet.authorDisplayName}
                textOriginal={snippet.textOriginal}
              />
            )
          );
        })
      )}
    </div>
  );
};

export default CommentsSection;
