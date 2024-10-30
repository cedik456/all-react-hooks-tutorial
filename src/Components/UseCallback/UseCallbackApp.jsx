import React, { useCallback, useState } from "react";
import "./UseCallback.css";
import UseCallbackHeader from "./UseCallbackHeader";

function UseCallbackApp() {
  const [count, setCount] = useState(0);

  const newFunction = useCallback((count) => {}, [count]);

  return (
    <div className="container">
      <div className="wrapper">
        <UseCallbackHeader newFunction={newFunction} />
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      </div>
    </div>
  );
}

export default UseCallbackApp;
