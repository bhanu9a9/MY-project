const express = require("express");
const app = express();

app.use(express.json());

// GET /hello
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

// POST /sum
app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

// Run server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
