import React, { useEffect, useState } from "react";
import "./UseEffect.css";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <p>I've rendered {count} times</p>
    </div>
  );
}

export default UseEffect;
