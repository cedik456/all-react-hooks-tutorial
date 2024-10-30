import React, { useState } from "react";

function UseStateObject() {
  const [car, setCar] = useState({
    brand: "Supra",
    color: "Red",
    model: "Toyota",
    year: 2023,
  });

  const changeModel = () => {
    setCar((prev) => ({ ...prev, model: "Geely" }));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>My {car.model}</h1>
        <h2>Color : {car.color}</h2>
        <h2>Model : {car.model}</h2>
        <h2>Year : {car.year}</h2>
        <button onClick={changeModel}>Click</button>
      </div>
    </div>
  );
}

export default UseStateObject;
