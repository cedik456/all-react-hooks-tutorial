import React from "react";
import useLocalStorage from "./useLocalStorage";

function CustomHookApp() {
  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("Id", "");
  return (
    <div className="container">
      <div className="wrapper">
        <input
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={id}
          type="text"
          placeholder="Enter your id"
          onChange={(e) => setId(e.target.value)}
        />
        <p>Hello, {name}</p>
        <p>User Id: {id}</p>
      </div>
    </div>
  );
}

export default CustomHookApp;
