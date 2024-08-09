import React, { useContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import Avatar from "react-avatar";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import profile_1 from "../../public/profile_1.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { YoutubeContext } from "../context/youtubeContext";

const Header = () => {
  const navigate = useNavigate();
  const { toggleSideNav } = useContext(YoutubeContext); // Sidebar'ı kontrol eden fonksiyon
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="flex mt-4 justify-between items-center p-1 sticky bg-[#181818]">
      <Link to={"/"}>
        <div className="flex items-center ml-8 space-x-6">
          <AiOutlineMenu
            className="text-4xl cursor-pointer"
            onClick={toggleSideNav} // Menu iconu tıklanabilir hale getirilmiş
          />
          <div className="flex items-center">
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
              alt="YouTube Logo"
            />
            <h1 className="text-2xl font-sans tracking-tighter text-white ml-2">
              YouTube
            </h1>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-black border border-gray-700 rounded-full"
        >
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 text-white bg-black rounded-l-full outline-none flex-grow"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button
            type="submit"
            className="flex items-center justify-center w-12 h-12 bg-customGray text-white rounded-r-full border-l border-customGray"
          >
            <FiSearch className="text-xl" />
          </button>
        </form>
        <button className="ml-4 p-2 rounded-full bg-customGray">
          <IoMdMic className="text-gray-300 text-2xl cursor-pointer" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 mr-9">
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <FaRegBell className="text-2xl cursor-pointer" />
        <Avatar
          src={profile_1}
          className="w-8 h-8 cursor-pointer"
          size="32"
          round={true}
        />
      </div>
    </header>
  );
};

export default Header;
