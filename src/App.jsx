import { useState } from "react";
import "./App.css";
import Machine from "./components/Machine";

function App() {
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

  return (
    <>
      <Machine game={game} setGame={setGame} />
    </>
  );
}

export default App;
