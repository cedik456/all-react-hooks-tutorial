import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function UseContextContact() {
  const phone = useContext(AppContext);
  return (
    <div>
      <div>
        <p>Contact</p>
        <p>Phone: {phone} </p>
      </div>
    </div>
  );
}

export default UseContextContact;
