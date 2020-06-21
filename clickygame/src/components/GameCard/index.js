import React from "react";
import "./style.css";

const GameCard = props => {
  return (
    <div className="picture" onClick={() => props.onImgClick(props.id)}>
      <div className="picture-img">
        <img
          alt={props.name + " Image"}
          src={props.image}
          className="picture"
        ></img>
      </div>
    </div>
  );
};

export default GameCard;