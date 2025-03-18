const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5001;

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

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
