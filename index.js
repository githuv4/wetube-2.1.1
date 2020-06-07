import express from "express";

const app = express();
const PORT = 4000;

const hanldeListening = (req, res) =>
  console.log(`✅ Listening on http://localhost:${PORT}`);

app.get("/", (req, res) => res.send("Branch 3"));

app.listen(PORT, hanldeListening);
