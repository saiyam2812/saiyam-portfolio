import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/about/about";
import BootScreen from "./components/boot/BootScreen";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import EngineeringStack from "./components/stack/EngineeringStack";
import Experience from "./components/experience/Experience";
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





          <section id="projects" className="placeholder-section">
            PROJECTS
          </section>

          <section id="ai-lab" className="placeholder-section">
            AI LAB
          </section>

          <section id="contact" className="placeholder-section">
            CONTACT
          </section>
        </main>
      )}
    </>
  );
}

export default App;