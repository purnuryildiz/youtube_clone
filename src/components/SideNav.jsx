import React, { useContext } from "react";
import { categories } from "../utils/constants";
import { YoutubeContext } from "../context/youtubeContext";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideNav = () => {
  const { selectedCategory, setSelectedCategory, isSideNavOpen, toggleSideNav } =
    useContext(YoutubeContext);

  return (
    <nav
      className={`fixed top-0 left-0 h-full bg-[#181818] text-gray-200 overflow-y-auto transition-transform duration-300 ${
        isSideNavOpen ? "transform translate-x-0" : "transform -translate-x-72"
      } w-72`}
    >
      {/* YouTube Logo and Menu Icon */}
      <div className="flex items-center p-4 border-b border-gray-600">
        <AiOutlineMenu
          className="text-2xl cursor-pointer mr-4"
          onClick={toggleSideNav} // Menu iconu tıklanabilir hale getirilmiş
        />
        <Link to="/" className="flex items-center">
          <img
            className="w-10" // Logo boyutları Header ile uyumlu hale getirildi
            src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
            alt="YouTube Logo"
          />
          <h1 className="text-2xl font-sans tracking-tighter text-white ml-2">YouTube</h1>{" "}
          {/* Header ile aynı başlık */}
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-1 mt-4">
        {categories.map((item) => (
          <React.Fragment key={item.name}>
            <div
              onClick={() => {
                setSelectedCategory(item.name);
                toggleSideNav(); // Kategori seçildiğinde sidebar'ı kapat
              }}
              className={`flex items-center gap-4 p-3 cursor-pointer hover:bg-[#313131] ${
                selectedCategory === item.name ? "bg-[#313131]" : ""
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-base">{item.name}</span>
            </div>
            {item.divider && <hr className="border-gray-600 my-2 mx-4" />}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
