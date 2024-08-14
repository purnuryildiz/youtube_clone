import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { options } from "../utils/constants";

// Context oluşturma
export const YoutubeContext = createContext();

// Context sağlayıcısı
export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [searchResult, setSearchResult] = useState(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false); // Sidebar'ın açılıp kapanma durumu

  useEffect(() => {
    setSearchResult(null); // Kategori değiştiğinde sonuçları temizle
    fetchCategory(selectedCategory);
    setIsSideNavOpen(false); // Kategori değiştiğinde sidebar'ı kapat
  }, [selectedCategory]);

  const fetchCategory = (category) => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setSearchResult(res.data.contents))
      .catch((error) => console.error("Error fetching category:", error));
  };

  //Ana sayfa verilerini çekme fonksiyonu
  const fetchHomePageData = () => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=New`, options)
      .then((res) => setSearchResult(res.data.contents))
      .catch((error) => console.error("Error fetching home page data:", error));
  };

  // Sidebar'ı açıp kapama fonksiyonu
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <YoutubeContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchResult,
        isSideNavOpen,
        toggleSideNav,
        fetchHomePageData,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
