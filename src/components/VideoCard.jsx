import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import millify from "millify";
import { Link } from "react-router-dom";
import StringArea from "../components/StringArea";

const VideoCard = ({ videoInfo, isSearchResult }) => {
  const video = videoInfo?.video;

  if (!video) {
    return null; // video bilgisi yoksa bileşeni render etmeyin
  }

  return (
    <Link
      className={`${
        isSearchResult ? "flex w-full justify-center" : "flex flex-col"
      } flex`}
      to={`/watch/${video.videoId}`}
    >
      <div
        className={`cursor-pointer ${
          isSearchResult
            ? "box-border flex items-start justify-between w-[1117px] h-[281px]"
            : "flex flex-col" // Ana sayfa için uygun düzen
        }`}
      >
        <div>
          {/* Videonun resmini göster */}
          <img
            className={`${
              isSearchResult ? "min-w-[580px] min-h-[281px] rounded-md" : "w-full"
            } rounded my-5 mb-3`}
            src={video.thumbnails[0]?.url}
            alt={video.title}
          />
        </div>

        <div
          className={`${
            isSearchResult
              ? "ml-4 min-w-[540px] min-h-[281px] h-56 flex flex-col"
              : "block" // Ana sayfa için uygun düzen
          }`}
        >
          {/* Başlık */}
          <p
            className={`${
              isSearchResult ? "text-[1.2rem] mt-3 leading-[2rem]" : "text-base"
            } mb-2`}
            title={video.descriptionSnippet || "No description"}
          >
            {video.title}
          </p>

          {isSearchResult ? (
            <div className="flex flex-col">
              <div className="flex gap-3 mb-2">
                {/* Görüntüleme Sayısı */}
                <p title={video.stats?.views || "No views"}>
                  {video.stats ? millify(video.stats.views) : "N/A"}
                </p>
                {/* Yayınlanma Zamanı */}
                <p>{video.publishedTimeText || "Unknown"}</p>
              </div>
              {/* Kanal Bilgisi ve Avatar */}
              <div className="flex items-center mt-3 mb-3">
                <img
                  className="w-[36px] h-[36px] rounded-full mr-2"
                  src={video.author?.avatar[0]?.url || "default-avatar.png"}
                  alt=""
                />
                <span>{video.author?.title || "Unknown"}</span>
                {video.author?.badges[0]?.text === "Verified" && (
                  <FaCheckCircle className="mx-2 text-gray-400" />
                )}
              </div>
              {/* Açıklama */}
              <StringArea text={video.descriptionSnippet || ""} max={400} />
            </div>
          ) : (
            <div className="block mt-2">
              {/* Kanal Bilgileri ve Avatar */}
              <div className="flex items-center gap-3">
                <div>
                  <img
                    className="w-[36px] h-[36px] rounded-full"
                    src={video.author?.avatar[0]?.url || "default-avatar.png"}
                    alt=""
                  />
                </div>
                <div className="items-center">
                  <div className="flex">
                    <span>{video.author?.title || "Unknown"}</span>
                    {video.author?.badges[0]?.text === "Verified" && (
                      <FaCheckCircle className="mx-2 text-gray-400" />
                    )}
                  </div>
                  <div className="flex gap-3 mt-2">
                    <p title={video.stats?.views || "No views"}>
                      {video.stats ? millify(video.stats.views) : "N/A"}
                    </p>
                    <p>{video.publishedTimeText || "Unknown"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
