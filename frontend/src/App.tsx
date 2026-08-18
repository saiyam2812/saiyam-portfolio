import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import BootScreen from "./components/boot/BootScreen";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";

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

          <section id="about" className="placeholder-section">
            ABOUT
          </section>

          <section id="stack" className="placeholder-section">
            ENGINEERING STACK
          </section>

          <section id="experience" className="placeholder-section">
            EXPERIENCE
          </section>

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