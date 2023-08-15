import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <Counter counter={step} setCounter={setStep} increment={1} text="Step" />
      <Counter
        counter={count}
        setCounter={setCount}
        increment={step}
        text="Count"
      />
      <DisplayDate step={step} count={count} />
    </div>
  );
}

function Counter({ counter, setCounter, increment, text }) {
  return (
    <div>
      <button onClick={() => setCounter((c) => c - increment)}>-</button>
      <span>{`${text}: ${counter}`}</span>
      <button onClick={() => setCounter((c) => c + increment)}>+</button>
    </div>
  );
}

function DisplayDate({ count }) {
  const adjustedDate = new Date(
    Date.now() + count * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <div>
      <p>
        {count} days from today is {adjustedDate}
      </p>
    </div>
  );
}
