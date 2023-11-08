import React, { useState } from "react";
import Screen from "./Screen.jsx";

const Machine = () => {
  const items = [
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
  ];

  const [game, setGame] = useState({
    col1: {
      prev: "🍌",
      item: "🍎",
      next: "🍐",
      selected: false,
      move: false,
    },
    col2: {
      prev: "🍌",
      item: "🍎",
      next: "🍐",
      selected: false,
      move: false,
    },
    col3: {
      prev: "🍌",
      item: "🍎",
      next: "🍐",
      selected: false,
      move: false,
    },
  });

  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);
  const [play, setPlay] = useState(false);

  const handleStop = () => {
    if (!game.col1.selected) {
      setGame({
        ...game,
        col1: {
          prev: count === 0 ? items[10] : items[count - 1],
          item: items[count],
          next: count === 10 ? items[0] : items[count + 1],
          selected: true,
          move: false,
        },
      });

      setStop(!stop);
      //   setPlay(false);

      return;
    }

    if (!game.col2.selected) {
      setGame({
        ...game,
        col2: {
          prev: count === 0 ? items[10] : items[count - 1],
          item: items[count],
          next: count === 10 ? items[0] : items[count + 1],
          selected: true,
          move: false,
        },
      });
      setStop(!stop);

      return;
    }
    if (!game.col3.selected) {
      setGame({
        ...game,
        col3: {
          prev: count === 0 ? items[10] : items[count - 1],
          item: items[count],
          next: count === 10 ? items[0] : items[count + 1],
          selected: true,
          move: false,
        },
      });
      setStop(!stop);
      setPlay(false);

      return;
    }
    setStop(!stop);
    setPlay(false);
  };

  // PLAY

  const handlePlay = () => {
    setPlay(true);
    setGame({
      ...game,
      col1: {
        move: true,
      },
      col2: {
        move: true,
      },
      col3: {
        move: true,
      },
    });
  };

  return (
    <div className="machine">
      <div className="head">
        <h2 style={{ color: "white" }}>Que quiere Timba?</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>{game.col1.selected && game.col1.item}</h4>
          <h4>{game.col2.selected && game.col2.item}</h4>
          <h4>{game.col3.selected && game.col3.item}</h4>
        </div>
      </div>
      <div className="machine__front">
        <div className="machine__front__bezel">
          <Screen
            items={items}
            play={play}
            game={game}
            count={count}
            setCount={setCount}
          />
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
