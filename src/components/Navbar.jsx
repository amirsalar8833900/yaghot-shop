import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <Link to="/"> یاقوت</Link>
      </div>
      <div className="search-nav">
        <SearchBar />
      </div>
      <div className="right">
        <NavLink to="/accessiroes"> اکسسوری</NavLink>
        <NavLink to="/beauty"> لوازم آرایشی</NavLink>
        <NavLink to="/jewrely"> بدایجات</NavLink>
        <NavLink to="/parfum"> ادکلن</NavLink>
      </div>
    </div>
  );
}
