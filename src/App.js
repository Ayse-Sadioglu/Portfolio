import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Intro from "./components/Intro";

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
    <div className="App">
      {init && <Particles options={particlesOptions} />}
      <header className="App-header"></header>
      <ResponsiveAppBar />
      <Intro />
      
    </div>
  );
}

export default App;
