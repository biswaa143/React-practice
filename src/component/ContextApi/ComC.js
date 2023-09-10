import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";

export const DataContext = createContext();

const ComC = () => {
  const [data, setData] = useState("Hello from Component C");

  console.log("Data in ComC:", data);

  return (
    <DataContext.Provider value={data}>
      <div>
        <h2>Component C</h2>
        <Link to={"/ComD"}>Fly To Component D</Link>
      </div>
    </DataContext.Provider>
  );
};

export default ComC;
