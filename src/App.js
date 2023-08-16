import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>{step}</span>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          size={10}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <DisplayDate count={count} />

      {(count !== 0 || step !== 1) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

function DisplayDate({ count }) {
  const date = new Date(
    Date.now() + count * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <div>
      <p
        style={
          count > 0 ? { color: "green" } : count < 0 ? { color: "red" } : {}
        }
      >
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} day${count === 1 ? "" : "s"} from now is `
          : `${count * -1} day${count === -1 ? "" : "s"} ago was `}
        {date}
      </p>
    </div>
  );
}
