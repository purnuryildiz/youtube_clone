//Constant'ta tuttuğumuz verilerin değişmeme kuralı olduğunu unutma!
import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";

// Kategoriler
export const categories = [
  {
    name: "Home",
    icon: <GoHome />,
  },
  {
    name: "Shorts",
    icon: <SiYoutubeshorts />,
  },
  {
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions />,
    divider: true,
  },
  {
    name: "Your Channel",
    icon: <PiUserSquareThin />,
  },
  {
    name: "History",
    icon: <MdHistory />,
  },
  {
    name: "Playlists",
    icon: <MdOutlineSubscriptions />,
  },
  {
    name: "Your Videos",
    icon: <BiVideo />,
  },
  {
    name: "Watch later",
    icon: <MdOutlineWatchLater />,
  },
  {
    name: "Liked videos",
    icon: <AiOutlineLike />,
    divider: true,
  },
  {
    name: "Trending",
    icon: <SiTrendmicro />,
  },
  {
    name: "Shopping",
    icon: <HiOutlineShoppingBag />,
  },
  {
    name: "Music",
    icon: <SiYoutubemusic />,
  },
  {
    name: "Films",
    icon: <PiFilmSlateLight />,
  },
  {
    name: "Live",
    icon: <CgMediaLive />,
  },
  {
    name: "Gaming",
    icon: <IoGameControllerOutline />,
  },
  {
    name: "News",
    icon: <FaRegNewspaper />,
  },
  {
    name: "Sport",
    icon: <TfiCup />,
  },
  {
    name: "Courses",
    icon: <SiStylelint />,
  },
  {
    name: "Fashion & beauty",
    icon: <PiLightbulbLight />,
  },
  {
    name: "Padcasts",
    icon: <MdPodcasts />,
  },
  {
    name: "Youtube Premium",
    icon: <FaYoutube />,
  },
  {
    name: "Youtube Studio",
    icon: <SiYoutubestudio />,
  },
  {
    name: "Youtube Music",
    icon: <SiYoutubemusic />,
  },
  {
    name: "Youtube Kids",
    icon: <SiYoutubekids />,
  },
];

// API'a istek atarken gerekli olan veriler

export const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": "ae5debceddmshb207f255af2e9d3p178e46jsn98a28038ac05",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};
