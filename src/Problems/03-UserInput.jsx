// Show user input

import { useState } from "react";

const UserInput = ({}) => {
  const [input, setInput] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />

      <h2>User Input: {input} </h2>
    </>
  );
};

export default UserInput;
