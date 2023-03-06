import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <h1>This page doesn't exist!</h1>
      <button className="backhome" onClick={() => navigate("/")}>
        Back To Gallery
      </button>
    </div>
  );
};

export default NotFound;
