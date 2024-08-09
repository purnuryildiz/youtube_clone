import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../components/VideoCard";

import { categories } from "../utils/constants";

const Feed = () => {
  const { searchResult } = useContext(YoutubeContext);
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    console.log(`${name} kategorisine tıklandı`);
    // navigate("/"); // İsteğe bağlı olarak yönlendirme ekleyebilirsiniz
  };

  return (
    <div className="flex">
      <SideNav />
      <div className="p-4">
        {categories.slice(0, 5).map((category, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer mb-4"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="mb-4 ml-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <div className="text-xs mt-1">{category.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="videos">
        {!searchResult ? (
          <p>Loading...</p>
        ) : (
          searchResult.map((video) => {
            if (video.type !== "video") return null;
            return <VideoCard key={video.id} videoInfo={video} />;
          })
        )}
      </div>
    </div>
  );
};

export default Feed;
