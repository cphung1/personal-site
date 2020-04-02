import React from "react";
import "./Toolbar.css";
import SideBarToggleButton from "../SideBar/SideBarToggleButton"

export default function Toolbar(props) {
  return (
    <header className="header">
      <nav className="header_navigation">
        <div><SideBarToggleButton click={props.sideBarClickHandler}/></div>
        <div className="header_logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="spacer"></div>
        <div className="side_nav_items">
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>

  );
};