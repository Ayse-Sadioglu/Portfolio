import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./styles/Global.css";
import Particles from "./components/Particles";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

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
          
          <Experience />
        </div>

        <div class="grid-item2">
        </div>

        <div class="grid-item2">
          <h3 class="text">Designed and developed by Ayse</h3>
        </div>
        <div class="grid-item2">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
