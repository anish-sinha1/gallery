import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import About from "./components/About";
import CV from "./components/CV";
import GalleryItem from "./components/GalleryItem";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/gallery/:id" element={<GalleryItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
