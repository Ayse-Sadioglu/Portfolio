import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./styles/Global.css";
import Particles from "./components/Particles";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Particles />
      <Navbar />
      <div class="grid-container">
        <div class="grid-item">
          <Intro />
        </div>
        <div class="grid-item">
          <img src={require("./assets/obiwan.gif")} alt="obiwan" />
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <About />
        </div>
        <div class="grid-item">
          <img src={require("./assets/computercat2.gif")} alt="obiwan" />
        </div>
        <div class="grid-item"></div>
        <div class="grid-item2">
        <h1 class="text">Designed and developed by Ayse</h1>

         
        </div>
        <div class="grid-item2">
        
        <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
