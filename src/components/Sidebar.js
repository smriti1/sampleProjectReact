import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return;
  return !isMenuOpen ? null : (
    <div className="shadow-lg w-48 p-2">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Line</li>
      </ul>
      <h1 className="font-bold pt-5"> Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5"> Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};
