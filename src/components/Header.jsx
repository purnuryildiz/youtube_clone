import React, { useContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import Avatar from "react-avatar";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
    <header className="flex mt-4 justify-between items-center p-1 sticky ">
      <div className="flex items-center ml-8 space-x-6">
        <div
          className="flex items-center justify-center w-14 h-14 rounded-full hover:bg-[#313131] cursor-pointer transition-colors duration-300 overflow-hidden"
          onClick={toggleSideNav}
        >
          <AiOutlineMenu
            className="text-3xl text-white"
            onClick={toggleSideNav} // Menu iconu tıklanabilir hale getirilmiş
          />
        </div>
        <Link to="/" className="flex items-center">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
            alt="YouTube Logo"
          />
          <h1 className="text-2xl font-sans tracking-tighter text-white ml-2">YouTube</h1>
        </Link>
      </div>

      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="relative flex items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-black border border-gray-700 rounded-full"
        >
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 text-white bg-black rounded-l-full outline-none flex-grow"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          {query && (
            <AiOutlineClose
              onClick={() => setQuery("")}
              className="absolute right-14 text-2xl hover:scale-90 text-white cursor-pointer"
            />
          )}
          <button
            type="submit"
            className="flex items-center justify-center w-14 h-12 bg-customGray text-white rounded-r-full border-l border-customGray"
          >
            <FiSearch className="text-xl" />
          </button>
        </form>
        <button className=" ml-3 relative flex items-center justify-center w-12 h-12 rounded-full bg-customGray hover:bg-[#313131] transition-colors duration-300">
          <IoMdMic className="text-gray-300 text-2xl cursor-pointer" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-5 mr-9 ">
        <div className="flex gap-5">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full  hover:bg-[#313131] transition-colors duration-300 cursor-pointer">
            <RiVideoAddLine className="text-white text-2xl" />
          </div>
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full  hover:bg-[#313131] transition-colors duration-300 cursor-pointer">
            <FaRegBell className="text-white text-2xl" />
          </div>
        </div>

        <Avatar
          src={profile_1}
          className="w-12 h-12 cursor-pointer"
          size="32"
          round={true}
        />
      </div>
    </header>
  );
};

export default Header;
