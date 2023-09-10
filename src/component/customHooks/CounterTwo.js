import React from "react";
import useCounter from "./useCounter";

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(0, 10);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default CounterTwo;
