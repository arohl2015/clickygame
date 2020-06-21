import React from "react";
import "./style.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
      <a className="navbar-brand" href="/">
      </a>
      <div className="text-center">
        <h1>Click a character to begin</h1>
      </div>
      <div className="nav navbar-nav ml-auto">
        <p className="currentScore">Score: {props.currentScore}</p>
        <div class="vl"></div>
        <p className="topScore"> Highest Score: {props.highestScore}</p>
      </div>
    </nav>
  );
};

export default Navbar;