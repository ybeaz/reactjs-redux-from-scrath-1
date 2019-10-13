import React, { useState } from "react";

export const Hello = props => {
  const [input, setInput] = useState("");
  // console.log('Hello', { props })

  const { children, handleActions, addition1, addition2 } = props;

  const additionNext = props => {
    const { addition0, val } = props;
    return addition0 !== val && val.length < 5 ? addition0 : val;
  };

  const handleEvents = value => {
    setInput(value);
    handleActions(value);
  };

  return (
    <div>
      <h3>{children}!</h3>
      <div style={{ fontSize: "14px", fontWeight: "500" }}>
        {additionNext(props)}
        <br />
        {addition1}
        <br />
        {addition2}
      </div>
      <br />
      <input
        onChange={e => handleEvents(e.target.value)}
        value={input}
        type="text"
      />
      <br />
      <br />
      <div>{input}</div>
    </div>
  );
};
