import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import millify from "millify";
import { Link } from "react-router-dom";
const VideoCard = ({ videoInfo }) => {
  const { video } = videoInfo;
  console.log(video);
  return (
    //Kullanıcı karta basarsa onu detay sayfasına yönlendirir:
    //parametre olarak linke videonun id'si konuldu:
    <Link className="w-full" to={`/watch/${video.videoId}`}>
      <div className="cursor-pointer">
        <img className="w-full rounded my-5" src={video.thumbnails[0].url} />
        {/*Kanal ile ilgili bilgiler: */}
        <div className="flex gap-3">
          <img
            className="rounded-full w-[50px] h-[50px]"
            src={video.author.avatar[0].url}
          />
          <div>
            <p title={video.descriptionSnippet}>{video.title} </p>
            <p className="flex items-center">
              <span>{video.author.title}</span>
              {video?.author?.badges[0]?.text === "Verified" && (
                <FaCircleCheck className="mx-2 text-gray-400" />
              )}
            </p>
            <div className="flex gap-3">
              <p title={video.stats.views}>{millify(video.stats.views)} </p>
              <p>{video.publishedTimeText} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
