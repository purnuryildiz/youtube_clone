import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SideNav from "../components/SideNav";
import VideoCard from "../components/VideoCard";
import loading from "../assets/loading_2.gif";
import ConstNav from "../components/ConstNav";

const API_KEY = "402d5936a9msh3f57a10b0ad9b9fp111bd9jsn0f082230bc57"; // Anahtar burada

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://youtube138.p.rapidapi.com/search/?q=${encodeURIComponent(
            query
          )} ${encodeURIComponent(selectedCategory)}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
            },
          }
        );
        console.log(response.data); // API yanıtını kontrol edin
        setVideos(response.data.contents || []);
      } catch (error) {
        console.error("Video sonuçları yüklenirken hata oluştu:", error);
        setVideos([]); // Hata durumunda boş bir dizi döndürün
      }
    };

    fetchData();
  }, [query, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <SideNav onCategoryClick={handleCategoryClick} />
      <ConstNav onCategoryClick={handleCategoryClick} />
      <div className="flex justify-center p-5 gap-20 w-full">
        {videos.length === 0 ? (
          <img
            className="m-auto mt-[100px] mb-[300px] ml-[350px]"
            src={loading}
            alt="Loading"
          />
        ) : (
          <div className="flex flex-col gap-20 max-w-[500px]">
            {videos.map((content, i) => {
              if (content.type !== "video") return null;
              return <VideoCard key={i} videoInfo={content} isSearchResult={true} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
