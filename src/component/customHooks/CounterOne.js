import React from "react";
import useCounter from "./useCounter";

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default CounterOne;
