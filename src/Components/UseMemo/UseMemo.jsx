import React, { useMemo, useState } from "react";
import "./UseMemo.css";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cube(num) {
    console.log("Calculation Complete!");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cube(number), [number]);

  return (
    <div className="container">
      <div className="wrapper">
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p>Cube: {result}</p>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <h1>Counter: {counter}</h1>
      </div>
    </div>
  );
}

export default UseMemo;
