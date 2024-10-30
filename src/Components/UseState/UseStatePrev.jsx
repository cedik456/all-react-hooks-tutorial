import React, { useState } from "react";

function UseStatePrev() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 2);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <p>Count : {count}</p>
        <div className="btn-container">
          <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default UseStatePrev;
