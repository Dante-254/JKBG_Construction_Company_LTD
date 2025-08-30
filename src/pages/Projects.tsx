import React, { useState } from "react";

export const initialProjects = [
  {
    id: 1,
    title: "Modern Apartment Complex",
    description: "A luxury apartment complex in Nairobi.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Office Tower",
    description: "A state-of-the-art office tower in the CBD.",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Luxury Villas",
    description: "Exclusive villas with private gardens.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Shopping Mall",
    description: "A modern shopping mall with entertainment facilities.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Beach Resort",
    description: "A beautiful resort on the Kenyan coast.",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Golf Course Estate",
    description: "Premium estate with golf course views.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Tech Park",
    description: "A hub for technology companies.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a0d9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Hospital Complex",
    description: "State-of-the-art medical facilities.",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "School Campus",
    description: "Modern school campus for all ages.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "Conference Center",
    description: "Large conference and event center.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "Warehouse Facility",
    description: "Secure warehouse for logistics.",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    title: "Residential Estate",
    description: "Family-friendly residential estate.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    title: "Business Center",
    description: "Offices and meeting rooms for businesses.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    title: "Sports Complex",
    description: "Facilities for multiple sports.",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a0d9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    title: "Retirement Village",
    description: "Comfortable living for seniors.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    title: "Eco Homes",
    description: "Sustainable eco-friendly homes.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    title: "City Hotel",
    description: "Luxury hotel in the city center.",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    title: "Lakeview Apartments",
    description: "Apartments with stunning lake views.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 19,
    title: "Mountain Retreat",
    description: "Peaceful retreat in the mountains.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 20,
    title: "Urban Lofts",
    description: "Trendy loft apartments in the city.",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  },
];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Available",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProjects([...projects, { id: Date.now(), ...form }]);
    setForm({ title: "", description: "", status: "Available", image: "" });
    setShowForm(false);
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
          projects.map((project) => (
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
