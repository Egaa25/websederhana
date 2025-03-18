const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Halaman utama
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Halaman form
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { nama, email } = req.body;
  console.log(`Nama: ${nama}, Email: ${email}`);
  res.redirect("/"); // Redirect ke halaman utama setelah submit
});

// Start Server - listen on all interfaces
const PORT = process.env.PORT || 3000;
app
  .listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port ${PORT}");
  })
  .on("error", (err) => {
    console.error("Failed to start server:", err);
  });
