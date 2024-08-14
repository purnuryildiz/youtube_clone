import Feed from "./pages/Feed";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import SearchResults from "./pages/SearchResults";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
