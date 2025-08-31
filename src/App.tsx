import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  const [view, setView] = useState<"home" | "about" | "projects">("home");
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [ownerPassword, setOwnerPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [createUserError, setCreateUserError] = useState("");

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
        <nav
          className="navbar-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
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
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {!isOwner ? (
              <>
                <button
                  style={{
                    fontWeight: 600,
                    background: "#e0e7ff",
                    border: "none",
                    borderRadius: 4,
                    padding: "6px 16px",
                    cursor: "pointer",
                    color: "#222",
                  }}
                  onClick={() => setShowLogin(true)}
                >
                  Owner Login
                </button>
                <button
                  style={{
                    fontWeight: 600,
                    background: "#d1fae5",
                    border: "none",
                    borderRadius: 4,
                    padding: "6px 16px",
                    cursor: "pointer",
                    color: "#065f46",
                  }}
                  onClick={() => setShowCreateUser(true)}
                >
                  Create Super User
                </button>
              </>
            ) : (
              <>
                <span
                  style={{ fontWeight: 600, color: "#065f46", marginRight: 8 }}
                >
                  {ownerName ? `Logged in as: ${ownerName}` : "Super User"}
                </span>
                <button
                  style={{
                    fontWeight: 600,
                    background: "#fee2e2",
                    border: "none",
                    borderRadius: 4,
                    padding: "6px 16px",
                    cursor: "pointer",
                    color: "#991b1b",
                  }}
                  onClick={() => {
                    setIsOwner(false);
                    setOwnerPassword("");
                    setOwnerName("");
                  }}
                >
                  Logout Owner
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
      <main style={{ paddingTop: 80 }}>
        {showLogin && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (ownerPassword === "jkbgowner2025") {
                  setIsOwner(true);
                  setShowLogin(false);
                  setLoginError("");
                  setOwnerName("Super User");
                } else {
                  setLoginError("Incorrect password. Try again.");
                }
              }}
              style={{
                background: "#fff",
                padding: 32,
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                minWidth: 320,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ marginBottom: 18, color: "#222" }}>Owner Login</h3>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Enter username"
                style={{
                  padding: 8,
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                  marginBottom: 12,
                  width: "100%",
                }}
              />
              <input
                type="password"
                value={ownerPassword}
                onChange={(e) => setOwnerPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  padding: 8,
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                  marginBottom: 12,
                  width: "100%",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "8px 16px",
                  fontWeight: 600,
                  background: "#61dafb",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  color: "#222",
                  marginBottom: 8,
                }}
              >
                Login
              </button>
              <button
                type="button"
                style={{
                  padding: "6px 16px",
                  background: "#e0e7ff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  color: "#222",
                }}
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </button>
              {loginError && (
                <div style={{ color: "#991b1b", marginTop: 8 }}>
                  {loginError}
                </div>
              )}
            </form>
          </div>
        )}
        {showCreateUser && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!newUserName || !newUserPassword) {
                  setCreateUserError("Username and password required.");
                  return;
                }
                setShowCreateUser(false);
                setCreateUserError("");
                setNewUserName("");
                setNewUserPassword("");
              }}
              style={{
                background: "#fff",
                padding: 32,
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                minWidth: 320,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ marginBottom: 18, color: "#222" }}>
                Create Super User
              </h3>
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="Username"
                style={{
                  padding: 8,
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                  marginBottom: 12,
                  width: "100%",
                }}
              />
              <input
                type="password"
                value={newUserPassword}
                onChange={(e) => setNewUserPassword(e.target.value)}
                placeholder="Password"
                style={{
                  padding: 8,
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                  marginBottom: 12,
                  width: "100%",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "8px 16px",
                  fontWeight: 600,
                  background: "#d1fae5",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  color: "#065f46",
                  marginBottom: 8,
                }}
              >
                Create User
              </button>
              <button
                type="button"
                style={{
                  padding: "6px 16px",
                  background: "#e0e7ff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  color: "#222",
                }}
                onClick={() => setShowCreateUser(false)}
              >
                Cancel
              </button>
              {createUserError && (
                <div style={{ color: "#991b1b", marginTop: 8 }}>
                  {createUserError}
                </div>
              )}
            </form>
          </div>
        )}
        {view === "home" && <Home />}
        {view === "about" && <About />}
        {view === "projects" && <Projects /*isOwner={isOwner}*/ />}
      </main>
    </div>
  );
}

export default App;
