// const express = require("express");
// const app = express();
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// let tasks = []; // memory me store

// // Home
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // Get all tasks
// app.get("/tasks", (req, res) => {
//   res.json(tasks);
// });

// // Add task
// app.post("/add", (req, res) => {
//   const { task } = req.body;
//   if (!task) return res.redirect("/");

//   tasks.push({ id: Date.now(), text: task });
//   res.redirect("/");
// });

// // Delete task
// app.get("/delete/:id", (req, res) => {
//   const id = Number(req.params.id);
//   tasks = tasks.filter(t => t.id !== id);
//   res.redirect("/");
// });

// // Update task
// app.post("/update", (req, res) => {
//   const { id, task } = req.body;
//   tasks = tasks.map(t =>
//     t.id == id ? { ...t, text: task } : t
//   );
//   res.redirect("/");
// });

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });




const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [];

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Get tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add task
app.post("/add", (req, res) => {
  const { title, description } = req.body;

  if (!title) return res.redirect("/");

  tasks.push({
    id: Date.now(),
    title,
    description,
    taskTime: new Date().toLocaleString()
  });

  res.redirect("/");
});

// Delete
app.get("/delete/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.redirect("/");
});

// Update
app.post("/update", (req, res) => {
  const { id, title, description } = req.body;

  tasks = tasks.map(t =>
    t.id == id ? { ...t, title, description } : t
  );

  res.redirect("/");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
