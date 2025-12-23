import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Backend is running ✅");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
