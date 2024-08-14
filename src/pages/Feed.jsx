import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../components/VideoCard";
import ConstNav from "../components/ConstNav";

const Feed = () => {
  const { searchResult, fetchHomePageData, setSelectedCategory } =
    useContext(YoutubeContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchHomePageData();
  }, [location]);

  const handleCategoryClick = (name) => {
    setSelectedCategory(name);
    fetchCategory(name);
    navigate(`/results?search_query=${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex">
      <SideNav />
      <ConstNav onCategoryClick={handleCategoryClick} />
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
