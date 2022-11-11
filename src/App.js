import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro></Intro>
      <About></About>
      <Contact></Contact>
     
    </div>
  );
}

export default App;
