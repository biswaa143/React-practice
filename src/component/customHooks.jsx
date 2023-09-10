import React from "react";
import useCounter from "./useCounter";

function CustomHooks() {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <h2>CustomHooks</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CustomHooks;
