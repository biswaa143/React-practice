import React, { useMemo, useState } from "react";

const Memo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };

  const IncrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    console.warn("......");
    let i = 0;
    while (i < 100000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

//   const isEven = () => {
//     console.warn("......");
//     let i = 0;
//     while (i < 100000000) i++;
//     return countOne % 2 === 0;
//   };

  return (
    <div>
      <h2>useMemo</h2>
      <div style={{ display: "flex" }}>
        <button onClick={IncrementOne}>Increment: {countOne}</button>
        <br />
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <button onClick={IncrementTwo}>Increment: {countTwo}</button>
    </div>
  );
};

export default Memo;
