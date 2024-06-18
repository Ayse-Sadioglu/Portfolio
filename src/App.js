import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  const [init, setInit] = useState(false);
  const [introLoaded, setIntroLoaded] = useState(false);

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

  const handleIntroLoaded = () => {
    setIntroLoaded(true);
  };

  return (
    <div className="App">
      {init && <Particles options={particlesOptions} />}
      <header className="App-header"></header>
      <ResponsiveAppBar />
      <Intro/>
      <About/>
      
    </div>
  );
}

export default App;
//Note:Mounting is done right to left, so to speak. You should visualize a DOM tree. 
//The deepest element is done mounting first, then its parent, and then its parent parent.
//A component can not be done mounting if its children are not mounted.