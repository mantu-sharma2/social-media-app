import React from "react";
import PostCard from "./PostCard";
import "./CSS/Header.css";
const Body = () => {
  return (
    <div className="Body">
      <div className="left">
        <div className="xxx">
          <PostCard />
        </div>
        <div className="xxx">
          <PostCard />
        </div>
      </div>
      <div className="right">
        <li>Ram</li>
        <li>Shyam</li>
        <li>Mohan</li>
      </div>
    </div>
  );
};

export default Body;
