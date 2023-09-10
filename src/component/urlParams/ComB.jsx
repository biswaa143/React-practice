import React from "react";
import { useParams } from "react-router-dom";

const ComB = () => {
  const { data } = useParams();

  return (
    <div>
      <h2>Component B</h2>
      <p>Data received: {data}</p>
    </div>
  );
};

export default ComB;
