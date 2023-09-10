import React, { useEffect, useState } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(0);
  useEffect(() => {
    // alert("Button Clicked!!!");
    console.log("Increment Successfully");
  }, [count]);

  return (
    <div>
      <h1>UseEffect Example</h1>
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
      <button onClick={() => setMinus(minus - 1)}>Click Me {minus}</button>
    </div>
  );
};

export default EffectExample;
