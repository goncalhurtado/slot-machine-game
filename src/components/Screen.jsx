import React, { useState, useEffect, useRef } from "react";

const Screen = ({ items, play, game, setGame, count, setCount }) => {
  const [intId, setIntId] = useState(null);
  const countRef = useRef(count);

  const prevItem = count === 0 ? items[10] : items[count - 1];
  const currentItem = items[count];
  const nextItem = count === 10 ? items[0] : items[count + 1];

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
        }, 100)
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
      <div className="ironTop"></div>
      <div className="ironBotom"></div>
      <div className="screen__col">
        <div className="screen__col__item">
          {!game.col1.move ? game.col1.prev : prevItem}
        </div>
        <div className="screen__col__item">
          {!game.col1.move ? game.col1.item : currentItem}
        </div>
        <div className="screen__col__item">
          {!game.col1.move ? game.col1.next : nextItem}
        </div>
      </div>
      <div className="screen__col">
        <div className="screen__col__item">
          {!game.col2.move ? game.col2.prev : prevItem}
        </div>
        <div className="screen__col__item">
          {!game.col2.move ? game.col2.item : currentItem}
        </div>
        <div className="screen__col__item">
          {!game.col2.move ? game.col2.next : nextItem}
        </div>
      </div>
      <div className="screen__col">
        <div className="screen__col__item">
          {!game.col3.move ? game.col3.prev : prevItem}
        </div>
        <div className="screen__col__item">
          {!game.col3.move ? game.col3.item : currentItem}
        </div>
        <div className="screen__col__item">
          {!game.col3.move ? game.col3.next : nextItem}
        </div>
      </div>
    </div>
  );
};

export default Screen;
