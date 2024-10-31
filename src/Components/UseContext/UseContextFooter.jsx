import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function UseContextFooter() {
  const { phone } = useContext(AppContext);
  return (
    <div>
      <p>Footer</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default UseContextFooter;
