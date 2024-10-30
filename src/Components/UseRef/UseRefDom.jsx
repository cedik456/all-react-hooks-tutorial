import React, { useRef } from "react";

function UseRefDom() {
  const inputRef = useRef(null);

  const handleInput = () => {
    console.log(inputRef.current);
    inputRef.current.value = "";
    // inputRef.current.style.background = "blue";
  };

  return (
    <div className="container">
      <div className="wrapper">
        <input type="text" ref={inputRef} />
        <button onClick={handleInput}>Click</button>
      </div>
    </div>
  );
}

export default UseRefDom;
