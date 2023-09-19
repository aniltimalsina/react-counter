import "./counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="container">
        <button onClick={increment} className="sign">
          Increment
        </button>
        <h1>Counter: {count}</h1>

        <button onClick={decrement} className="sign">
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
