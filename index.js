import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => res.send("Home1"));

function handleListening() {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
