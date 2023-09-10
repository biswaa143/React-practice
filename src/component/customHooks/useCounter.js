import { useState } from "react";

const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount, value);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
