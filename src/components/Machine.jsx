import React, { useState } from "react";
import Screen from "./Screen.jsx";
import { items } from "../helpers/items.js";
import { handleStop, handlePlay } from "../helpers/handles.js";
const Machine = ({ game, setGame, result, setResult }) => {
  const [count, setCount] = useState(0);
  const [control, setControl] = useState({
    play: false,
    stop: false,
    velocity: 100,
  });

  return (
    <>
      <div className="machine">
        <div className="head">
          <h2 style={{ color: "white" }}>Game Machine!</h2>
          <div
            style={{
              margin: "auto",
              marginTop: "5px",
              backgroundColor: "white",
              width: "50%",
            }}
          >
            {result === "win" && <h2 style={{ color: "green" }}>You Win!</h2>}
            {result === "lose" && <h2 style={{ color: "red" }}>You Lost!</h2>}
          </div>
        </div>
        <div className="machine__front">
          <div className="machine__front__bezel">
            <Screen
              items={items}
              control={control}
              game={game}
              count={count}
              setCount={setCount}
            />
          </div>
        </div>
        <div className="back">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
            }}
          >
            <label htmlFor="">Velocity</label>
            <select
              name="velocity"
              id="velocity"
              defaultValue={control.velocity}
              onChange={(e) =>
                setControl({ ...control, velocity: e.target.value })
              }
              disabled={control.play}
            >
              <option value={200}>Easy</option>
              <option value={100}>Normal</option>
              <option value={50}>Hard</option>
            </select>
          </div>
          <input
            className="back__play"
            type="button"
            value="Play"
            onClick={() =>
              handlePlay(setControl, control, setGame, game, setResult)
            }
            disabled={control.play}
          />
          <input
            className="back__stop"
            type="button"
            value="Stop"
            onClick={() =>
              handleStop(game, setGame, control, setControl, count, setResult)
            }
            disabled={!control.play}
          />
        </div>
        <div className="bottom">
          {" "}
          <p>
            Develop By{" "}
            <a
              href="https://www.linkedin.com/in/gonzalo-javier-hurtado-1bba76284/"
              target="_blank"
              style={{ color: "black" }}
            >
              Goncal Hurtado
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Machine;
