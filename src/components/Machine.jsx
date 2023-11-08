import React, { useState } from "react";
import Screen from "./Screen.jsx";

const Machine = () => {
  const [items, setItems] = useState([
    "🍎",
    "🍐",
    "🍉",
    "🥝",
    "🍇",
    "🥑",
    "🍊",
    "🍆",
    "🍍",
    "🍅",
    "🍌",
  ]);

  const [stop, setStop] = useState(false);
  const [play, setPlay] = useState(false);

  const handleStop = () => {
    setStop(!stop);
    setPlay(false);
  };
  const handlePlay = () => {
    setPlay(true);
  };

  return (
    <div className="machine">
      <div className="head">
        <h1>Timba</h1>
      </div>
      <div className="machine__front">
        <div className="machine__front__bezel">
          <Screen items={items} play={play} />
        </div>
      </div>
      <div className="back">
        <input
          className="back__play"
          type="button"
          value="Play"
          onClick={handlePlay}
        />
        <input
          className="back__stop"
          type="button"
          value="Stop"
          onClick={handleStop}
        />
      </div>
    </div>
  );
};

export default Machine;
