import React, { useState, useEffect, useRef } from "react";

const Screen = ({ items, play }) => {
  const [count, setCount] = useState(0);
  const [intId, setIntId] = useState(null);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    if (play) {
      setIntId(
        setInterval(() => {
          if (countRef.current < 10) {
            setCount((prevCount) => prevCount + 1);
          } else if (countRef.current >= 10) {
            setCount(0);
          }
        }, 1000)
      );
    } else if (intId) {
      clearInterval(intId);
      setIntId(null);
    }

    return () => {
      if (intId) {
        clearInterval(intId);
      }
    };
  }, [play]);

  return (
    <div className="screen">
      <div className="ironTop">{play ? "play es true" : "play es false"}</div>
      <div className="ironBotom">{count}</div>
      <div className="screen__col">
        <div className="screen__col__item">
          {count === 0 ? items[10] : items[count - 1]}
        </div>
        <div className="screen__col__item">{items[count]}</div>
        <div className="screen__col__item">
          {count === 10 ? items[0] : items[count + 1]}
        </div>
      </div>
      <div className="screen__col">
        <div className="screen__col__item">b</div>
        <div className="screen__col__item">b</div>
        <div className="screen__col__item">b</div>
      </div>
      <div className="screen__col">
        <div className="screen__col__item">b</div>
        <div className="screen__col__item">b</div>
        <div className="screen__col__item">b</div>
      </div>
    </div>
  );
};

export default Screen;
