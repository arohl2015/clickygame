import React from "react";
import "./style.css";

// Component for the Navbar

function Navbar(props) {
    return (
        <div className="row">
            <nav className="nav">
                <a href="/" className="nav-item"> 30 Rock Clicky Game</a>
                <h3 className="nav-item">Click an image to begin...just don't click the same one twice!</h3>
                <h2 className="nav-item">Score: {props.score} | High Score: {props.highScore}</h2>
            </nav>
        </div>
    );
};

export default Navbar;