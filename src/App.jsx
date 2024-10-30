import React from "react";
import UseContextProfile from "./Components/UseContext/UseContextProfile";
import UseContextFooter from "./Components/UseContext/UseContextFooter";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <UseContextProfile />
          <UseContextFooter />
        </div>
      </div>
    </>
  );
}

export default App;
