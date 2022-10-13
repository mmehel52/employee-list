import "./Cards.css";
import React from "react";

const Cards = (data) => {
  const { name, number, photo, position } = data;
  return (
    <div className="cards">
      <div className="img-left">
        <img src={photo} alt="" />
      </div>
      <div className="right">
        <h5>{name}</h5>
        <p>{position}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Cards;
