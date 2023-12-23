import { useState } from "react";
import "./App.css";
import Machine from "./components/Machine";

function App() {
  const [result, setResult] = useState("");
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
      <Machine
        game={game}
        setGame={setGame}
        result={result}
        setResult={setResult}
      />
    </>
  );
}

export default App;
