import React, { useContext } from "react";
import UseContextContact from "./UseContextContact";
import { AppContext } from "./AppContext";

function UseContextProfile() {
  const { name } = useContext(AppContext);
  return (
    <div>
      <div>
        <p>Profile</p>
        <UseContextContact />
        <p>I am {name}</p>
      </div>
    </div>
  );
}

export default UseContextProfile;
