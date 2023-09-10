import React, { useContext } from "react";
import { DataContext } from "./ComC";

const ComD = () => {
  const data = useContext(DataContext);

  console.log("Data in ComD:", data);
  return (
    <div>
      <h2>Component D</h2>
      <p>Data Received: {data}</p>
    </div>
  );
};

export default ComD;
