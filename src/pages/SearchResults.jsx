import axios from "axios";
import React, { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import SideNav from "../components/SideNav";
import VideoCard from "../components/VideoCard";
import loading from "../assets/loading_2.gif";

const SearchResults = () => {
  const [videos, setVideos] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    //Her aramanın başında videolara null değeri atandı,  aşağıdaki sorgu sayesinde null olduğu durumda loading basıldı:
    setVideos(null);
    //arama terimiyle related videoları çekme
    axios
      .get(
        `https://youtube138.p.rapidapi.com/search/?q=${encodeURIComponent(query)}`,
        options
      )
      .then((res) => setVideos(res.data.contents));
  }, [query]);

  return (
    <div className="flex">
      <SideNav />
      <div className="flex justify-center p-5 gap-20 w-full">
        {!videos && (
          <img
            className="m-auto mt-[150px] mb-[200px] ml-[300px]"
            src={loading}
            alt="Loading"
          />
        )}
        <div className="flex flex-col gap-20 max-w-[500px]">
          {videos?.map((content, i) => {
            if (content.type !== "video") return null;
            return <VideoCard key={i} videoInfo={content} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
