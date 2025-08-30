import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  const [view, setView] = useState<"home" | "about" | "projects">("home");

  // Scroll to services section in Home page
  const handleServicesClick = () => {
    setView("home");
    setTimeout(() => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div>
      <header className="navbar">
        <nav className="navbar-nav">
          <button
            className="navbar-btn"
            onClick={() => {
              setView("home");
              setTimeout(() => {
                const landingSection = document.querySelector("h1");
                if (landingSection) {
                  landingSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            Home
          </button>
          <button className="navbar-btn" onClick={handleServicesClick}>
            Services
          </button>
          <button className="navbar-btn" onClick={() => setView("projects")}>
            Projects
          </button>
          <button className="navbar-btn" onClick={() => setView("about")}>
            About
          </button>
        </nav>
      </header>
      <main style={{ paddingTop: 80 }}>
        {view === "home" && <Home />}
        {view === "about" && <About />}
        {view === "projects" && <Projects />}
      </main>
    </div>
  );
}

export default App;
