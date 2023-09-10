import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const onSubmit = (e) => {
    // console.log("Clicked!!!");
    setName(e.target.value);
  };

  const displayName = () => {
    setFullName(name);
  }
  return (
    <div>
      <h1>Hello {fullName}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={onSubmit}
      />
      <button onClick={displayName}>Submit</button>
    </div>
  );
};

export default Form;
