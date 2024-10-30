import React, { useState } from "react";

function UseState() {
  let [color, setColor] = useState("Red");

  const changeColor = () => {
    setColor("Blue");
    console.log(color);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h2>Color: {color} </h2>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </div>
  );
}

export default UseState;
