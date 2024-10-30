import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [value, setValue] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  return (
    <div className="container">
      <div className="wrapper">
        <h1>{value}</h1>
        <div className="btn-container">
          <button onClick={() => setValue((prev) => prev + 1)}>Add</button>
          <button onClick={() => setValue((prev) => prev - 1)}>Subtract</button>
        </div>
        <p>Render Count: {countRef.current}</p>
      </div>
    </div>
  );
}

export default UseRef;
