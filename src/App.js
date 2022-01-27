import logo from "./logo.svg";
import "./App.css";
// importing React and useState from react
import React, { useState } from "react";

function App() {
  // setting counter, changeCounter, and useState
  let [counter, changeCounter] = useState(1);
  // making changeCounter a global variable so we can invoke changeCounter in devtools
  window.changeCounter = changeCounter;
  // returning h1 and h4 tag with the counter
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
