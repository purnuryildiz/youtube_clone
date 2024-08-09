import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constants";
import ReactPlayer from "react-player";
import loading from "../assets/loading_2.gif";
import { AiFillLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import millify from "millify";
import VideoCard from "../components/VideoCard";
import StringArea from "../components/StringArea";

const VideoDetail = () => {
  const { videoId } = useParams();
  const [details, setDetails] = useState(null);
  const [relatedContent, setRelatedContent] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoadingState(true);
        const detailsResponse = await axios.get(
          `https://youtube138.p.rapidapi.com/video/details/?id=${videoId}`,
          options
        );
        setDetails(detailsResponse.data);

        const relatedContentResponse = await axios.get(
          `https://youtube138.p.rapidapi.com/video/related-contents/?id=${videoId}`,
          options
        );
        setRelatedContent(relatedContentResponse.data.contents);
      } catch (error) {
        console.error("Error fetching video details:", error);
      } finally {
        setLoadingState(false);
      }
    };

    fetchDetails();
  }, [videoId]);

  return (
    <div>
      {loadingState && <img className="m-auto mt-[150px]" src={loading} alt="Loading" />}
      {details && (
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-5 p-3 sm:p-5 md:p-12 ">
          {/* Main Content */}
          <div className="flex flex-col items-center lg:max-w-[1000px]">
            <ReactPlayer
              width={"100%"}
              url={`https://www.youtube.com/watch?v=${details.videoId}`}
              controls
              playing={true}
            />
            <div className="flex flex-col gap-5 mt-5">
              <h2>{details.title}</h2>
              <div className="flex justify-between">
                {/* Kanal hakkında bilgiler */}
                <div className="flex gap-3 items-center">
                  <img
                    className="w-[48px] h-[48px] rounded-full"
                    src={details?.author?.avatar?.[0]?.url || "default-avatar.png"}
                    alt="Channel Avatar"
                  />
                  <div>
                    <p>{details?.author?.title}</p>
                    <p>{details?.author?.stats?.subscribersText}</p>
                  </div>
                  <button className="bg-customGray rounded-2xl p-3 pr-6 pl-6 hover:bg-hoverGray">
                    Subscribed
                  </button>
                </div>
                {/* video hakkında bilgiler */}
                <div className="flex gap-5">
                  <div className="flex items-center gap-3 bg-customGray rounded-2xl p-3 pr-6 pl-6 hover:bg-hoverGray">
                    <AiFillLike />
                    <span>{millify(details?.stats?.likes)}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-customGray rounded-2xl p-3 pr-6 pl-6 hover:bg-hoverGray">
                    <RiShareForwardLine />
                    <span>Share</span>
                  </div>
                </div>
              </div>
              {/* Hakkında Alanı */}
              <div className="bg-customGray rounded-2xl p-3 pr-6 pl-6 hover:bg-hoverGray">
                <p className="flex gap-5 mb-3">
                  <span>{millify(details?.stats?.views)} views</span>
                  <span>{details?.publishedDate}</span>
                </p>
                <p>
                  <StringArea text={details.description} max={400} />
                </p>
              </div>
            </div>
          </div>
          {/* Related Content */}
          <div className="flex flex-col gap-3 related lg:max-w-[300px]">
            {!relatedContent && <p>Loading..</p>}
            {relatedContent &&
              relatedContent.map((video, i) => {
                if (video.type !== "video") return null;
                return <VideoCard key={i} videoInfo={video} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
