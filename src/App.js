import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Navbar from "./components/Navbar"; 
import Intro from "./components/Intro";
import About from "./components/About";
import Credits from "./components/Credits";
import Home from "./components/Home";
import Interests from "./components/Interests";
import Projects from "./components/Projects";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        {init && <Particles id="tsparticles" options={particlesOptions} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/projects" element={<Projects />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
