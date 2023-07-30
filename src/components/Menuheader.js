import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/menu.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Online Menu</h1>
        <br></br>
        <h2> Little Lemon</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="Hero-button">
          <Link to="/booking">Reserve a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          style={{width: '500px', height: '300px'}}
          src={Food}
          alt="our cook holding a tablet with delicoues baguettes"
          className="Header_img"
        />
      </div>
    </header>
  );
};

export default Header;
