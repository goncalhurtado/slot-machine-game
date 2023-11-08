import React from "react";
import Screen from "./Screen.jsx";

const Machine = () => {
  return (
    <div className="machine">
      <div className="head">
        <h1>Timba</h1>
      </div>
      <div className="machine__front">
        <div className="machine__front__bezel">
          <Screen />
        </div>
      </div>
      <div className="back">
        <input className="back__play" type="button" value="Play" />
        <input className="back__stop" type="button" value="Stop" />
      </div>
    </div>
  );
};

export default Machine;
