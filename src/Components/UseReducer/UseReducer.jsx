import React, { useState } from "react";
import { useReducer } from "react";

const initialState = { count: 0 }; // initial state

const reducer = (state, action) => {
  // function
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "addFive":
      return { count: state.count + 5 };
    case "input":
      return { count: action.payLoad };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer hook

  return (
    <div className="container">
      <div className="wrapper">
        <p>{state.count}</p>
        <div className="btn-container">
          <button onClick={() => dispatch({ type: "increase" })}>
            Increase
          </button>
          <button onClick={() => dispatch({ type: "decrease" })}>
            Decrease
          </button>
          <button onClick={() => dispatch({ type: "addFive" })}>+ 5</button>
        </div>
        <input
          value={state.count}
          onChange={(e) =>
            dispatch({ type: "input", payLoad: Number(e.target.value) })
          }
          type="number"
        />
      </div>
    </div>
  );
}

export default UseReducer;
