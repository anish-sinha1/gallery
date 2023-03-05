import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import About from "./components/About";
import CV from "./components/CV";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
