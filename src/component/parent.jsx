// ParentComponent.js

import React from "react";

import ChildComponent from "./child";

function ParentComponent() {
  const message = "Hello from Parent";

  const handleButtonClick = () => {
    console.log("Button clicked in Parent");
  };

  return (
    <div>
      <ChildComponent message={message} onClick={handleButtonClick} />
    </div>
  );
}

export default ParentComponent;
