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

  return (
    <>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>{`Counter: ${count}`}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <DisplayDate count={count} />
    </>
  );
}

function DisplayDate({ count }) {
  const date = new Date(
    Date.now() + count * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <div>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} day${count === 1 ? "" : "s"} from now is `
          : `${count * -1} day${count === -1 ? "" : "s"} ago was `}
        {date}
        {/* // {count} days from today is {date} */}
      </p>
    </div>
  );
}
