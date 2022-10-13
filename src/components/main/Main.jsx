import "./Main.css";
import React from "react";
import data from "../../helper/data.js";
import Cards from "../cards/Cards";
import { useState } from "react";

const Main = () => {
  const [countStart, setCountStart] = useState(0);
  const [countEnd, setCountEnd] = useState(5);
  const handleNext = () => {
    setCountStart(countStart == data.length - 5 ? 0 : countStart + 5);
    setCountEnd(countEnd == data.length ? 5 : countEnd + 5);
  };
  const handlePrev = () => {
    setCountStart(countStart <= 0 ? 20 : countStart - 5);
    setCountEnd(countEnd == 5 ? 25 : countEnd - 5);
  };
  return (
    <div className="main-container">
      <h1>Fenerbahçe Team List</h1>
      <h3>
        (Player {countStart + 1} to {countEnd})
      </h3>
      {data.slice(countStart, countEnd).map((item) => (
        <Cards {...item} />
      ))}
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Main;
