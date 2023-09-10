// ChildComponent.js

import React from "react";

function ChildComponent({ message, onClick }) {
  return (
    <div>
      <h2>{message}</h2>

      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
