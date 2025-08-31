import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());
app.use(express.json());

const db = await mysql.createPool({
  host: "localhost",
  user: "manoti",
  password: "your_password",
  database: "jkbgccl",
});

// Get all projects
app.get("/api/projects", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM projects");
  res.json(rows);
});

// Create superuser
app.post("/api/superusers", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }
  // For demo: store password as plain text (use bcrypt in production)
  try {
    const [result] = await db.query(
      "INSERT INTO superusers (username, password) VALUES (?, ?)",
      [username, password]
    );
    res.json({ id: result.insertId, username });
  } catch (err) {
    res.status(400).json({ error: "Username already exists" });
  }
});

// Authenticate superuser
app.post("/api/superusers/login", async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.query(
    "SELECT * FROM superusers WHERE username = ? AND password = ?",
    [username, password]
  );
  if (rows.length === 1) {
    res.json({ success: true, user: rows[0] });
  } else {
    res.status(401).json({ success: false, error: "Invalid credentials" });
  }
});

// Add a new project
app.post("/api/projects", async (req, res) => {
  const { title, description, status, image, username } = req.body;
  if (!username) {
    return res.status(401).json({ error: "Authentication required" });
  }
  const [userRows] = await db.query(
    "SELECT * FROM superusers WHERE username = ?",
    [username]
  );
  if (userRows.length !== 1) {
    return res.status(403).json({ error: "Not authorized" });
  }
  const [result] = await db.query(
    "INSERT INTO projects (title, description, status, image) VALUES (?, ?, ?, ?)",
    [title, description, status, image]
  );
  res.json({ id: result.insertId, title, description, status, image });
});

// TODO: Add endpoints for editing/deleting projects and super user management

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
