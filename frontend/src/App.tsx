import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/about/about";
import BootScreen from "./components/boot/BootScreen";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import EngineeringStack from "./components/stack/EngineeringStack";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Project";
import Terminal from "./components/terminal/Terminal";
import AILab from "./components/ai-lab/AILab";
import Contact from "./components/contact/Contact";

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!bootComplete && (
          <BootScreen
            onComplete={() => setBootComplete(true)}
          />
        )}
      </AnimatePresence>

      {bootComplete && (
        <main>
          <Navbar />
          <Hero />
          <About />
          <EngineeringStack />
          <Experience />
          <Projects />
          <Terminal />
          <AILab />
          <Contact />
        </main>
      )}
    </>
  );
}

export default App;