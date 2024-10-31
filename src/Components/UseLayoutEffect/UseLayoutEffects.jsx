import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffects() {
  useEffect(() => {
    console.log("This is use effect");
  }, []);

  useLayoutEffect(() => {
    console.log("This is use layout effect");
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        {Array(4000)
          .fill()
          .map((_, index) => (
            <li key={index}>{Math.pow(Math.random(), 10)}</li>
          ))}
      </div>
    </div>
  );
}

export default UseLayoutEffects;
