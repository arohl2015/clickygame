import React from "react";
import "./style.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
      <a className="navbar-brand" href="/">
      </a>
      <div className="text-center">
        <h2>30 Rock Memory Game</h2>
      </div>
      <div className="nav navbar-nav ml-auto">
        <p className="currentScore">Score: {props.currentScore}</p>
        <div class="nav"></div>
        <p className="topScore"> Highest Score: {props.highestScore}</p>
      </div>
    </nav>
  );
};

export default Navbar;