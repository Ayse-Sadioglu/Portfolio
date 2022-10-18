import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";

import "./App.css";
import "./styles/Global.css";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro></Intro>
    </div>
  );
}

export default App;
