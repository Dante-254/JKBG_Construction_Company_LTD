import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  const [view, setView] = useState<"home" | "about">("home");

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
          <button className="navbar-btn" onClick={() => setView("home")}>
            <button className="navbar-btn" onClick={() => {
              setView("home");
              setTimeout(() => {
                const landingSection = document.querySelector("h1");
                if (landingSection) {
                  landingSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}>Home</button>
          </button>
          <button className="navbar-btn" onClick={handleServicesClick}>
            Services
          </button>
          <button className="navbar-btn" onClick={() => setView("about")}>
            About
          </button>
        </nav>
      </header>
      <main style={{ paddingTop: 80 }}>
        {view === "home" && <Home />}
        {view === "about" && <About />}
      </main>
    </div>
  );
}

export default App;
