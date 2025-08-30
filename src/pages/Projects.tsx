import React, { useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  status: string;
  image: string;
};

type ProjectsProps = {
  isOwner?: boolean;
};

function Projects({ isOwner = false }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Available",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [superUser, setSuperUser] = useState<string>("");
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  // Fetch projects from backend API
  useEffect(() => {
    fetch("http://localhost:4000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setForm((prev) => ({ ...prev, image: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Superuser login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/superusers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });
    const data = await res.json();
    if (data.success) {
      setSuperUser(loginForm.username);
      setLoginForm({ username: "", password: "" });
    } else {
      setLoginError(data.error || "Login failed");
    }
  };

  // Superuser registration
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    const res = await fetch("/api/superusers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerForm),
    });
    const data = await res.json();
    if (res.ok && data.id) {
      setRegisterSuccess("Superuser profile created! You can now log in.");
      setRegisterForm({ username: "", password: "" });
    } else {
      setRegisterError(data.error || "Registration failed");
    }
  };

  // Add project (only if superUser is set)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!superUser) return;
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, username: superUser }),
    });
    if (res.ok) {
      const newProject = await res.json();
      setProjects([...projects, newProject]);
      setForm({ title: "", description: "", status: "Available", image: "" });
      setShowForm(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: "32px 16px",
        background: "#fff",
        borderRadius: 12,
      }}
    >
      <h2 style={{ color: "#111", marginBottom: 18, fontWeight: 700 }}>
        Projects
      </h2>
      {!superUser ? (
        <>
          {showRegister ? (
            <form onSubmit={handleRegister} style={{ marginBottom: 24 }}>
              <input
                name="username"
                value={registerForm.username}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    username: e.target.value,
                  })
                }
                placeholder="Choose a username"
                required
                style={{
                  display: "block",
                  marginBottom: 10,
                  padding: 8,
                  width: "100%",
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                }}
              />
              <input
                name="password"
                type="password"
                value={registerForm.password}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  })
                }
                placeholder="Choose a password"
                required
                style={{
                  display: "block",
                  marginBottom: 10,
                  padding: 8,
                  width: "100%",
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
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
                }}
              >
                Create Superuser Profile
              </button>
              <button
                type="button"
                style={{
                  marginLeft: 8,
                  padding: "6px 16px",
                  background: "#e0e7ff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  color: "#222",
                }}
                onClick={() => setShowRegister(false)}
              >
                Cancel
              </button>
              {registerError && (
                <div style={{ color: "#991b1b", marginTop: 8 }}>
                  {registerError}
                </div>
              )}
              {registerSuccess && (
                <div style={{ color: "#065f46", marginTop: 8 }}>
                  {registerSuccess}
                </div>
              )}
            </form>
          ) : (
            <>
              <form onSubmit={handleLogin} style={{ marginBottom: 24 }}>
                <input
                  name="username"
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                  placeholder="Superuser Username"
                  required
                  style={{
                    display: "block",
                    marginBottom: 10,
                    padding: 8,
                    width: "100%",
                    borderRadius: 4,
                    border: "1px solid #d1d5db",
                  }}
                />
                <input
                  name="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  placeholder="Password"
                  required
                  style={{
                    display: "block",
                    marginBottom: 10,
                    padding: 8,
                    width: "100%",
                    borderRadius: 4,
                    border: "1px solid #d1d5db",
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
                  }}
                >
                  Login as Superuser
                </button>
                <button
                  type="button"
                  style={{
                    marginLeft: 8,
                    padding: "6px 16px",
                    background: "#e0e7ff",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    color: "#222",
                  }}
                  onClick={() => setShowRegister(true)}
                >
                  Create Profile
                </button>
                {loginError && (
                  <div style={{ color: "#991b1b", marginTop: 8 }}>{loginError}</div>
                )}
              </form>
            </>
          )}
        </>
      ) : (
        <>
          <div
            style={{
              marginBottom: 12,
              fontWeight: 600,
              color: "#065f46",
            }}
          >
            Logged in as: {superUser}
          </div>
          <button
            onClick={() => setSuperUser("")}
            style={{
              marginBottom: 20,
              padding: "6px 16px",
              background: "#fee2e2",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              color: "#991b1b",
            }}
          >
            Logout
          </button>
          <button
            style={{
              marginBottom: 20,
              padding: "8px 16px",
              fontWeight: 600,
              background: "#e0e7ff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              color: "#222",
            }}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Add New Project"}
          </button>
          {showForm && (
            <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project Title"
                required
                style={{
                  display: "block",
                  marginBottom: 10,
                  padding: 8,
                  width: "100%",
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                }}
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Project Description"
                required
                style={{
                  display: "block",
                  marginBottom: 10,
                  padding: 8,
                  width: "100%",
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                }}
              />
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                style={{
                  display: "block",
                  marginBottom: 10,
                  padding: 8,
                  width: "100%",
                  borderRadius: 4,
                  border: "1px solid #d1d5db",
                }}
              >
                <option value="Available">Available</option>
                <option value="Sold">Sold</option>
              </select>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "block", marginBottom: 10 }}
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
                }}
              >
                Post Project
              </button>
            </form>
          )}
        </>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.length === 0 ? (
          <p>No projects posted yet.</p>
        ) : (
          projects.map((project: Project) => (
            <div
              key={project.id}
              style={{
                padding: 16,
                borderRadius: 8,
                background: "#f7f7fa",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    maxHeight: 180,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                />
              )}
              <h3
                style={{
                  margin: "8px 0 0 0",
                  color: "#222",
                  textAlign: "center",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{ margin: "8px 0", color: "#444", textAlign: "center" }}
              >
                {project.description}
              </p>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 12,
                  background:
                    project.status === "Available" ? "#d1fae5" : "#fee2e2",
                  color: project.status === "Available" ? "#065f46" : "#991b1b",
                  fontWeight: 600,
                  marginTop: 8,
                }}
              >
                {project.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Projects;
