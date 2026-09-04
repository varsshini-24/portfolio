import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Certifications />

        <Resume />

        <Contact />
      </main>
    </div>
  );
}

export default App;