import React from "react";

import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-name" onClick={() => navigate("/")}>
        Anish Sinha
      </div>
      <div className="navbar-about" onClick={() => navigate("/about")}>
        About
      </div>
      <div className="navbar-resume" onClick={() => navigate("/cv")}>
        Résumé
      </div>
    </div>
  );
};
export default Navbar;
