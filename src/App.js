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
      {" "}
      <Particles />
      <Navbar />
      <div class="obiwan">
        <img src={require("./assets/obiwan.gif")} alt="obiwan" />
      </div>
      <Intro />
      <About />
      <Contact />
    </div>
  );
}

export default App;
