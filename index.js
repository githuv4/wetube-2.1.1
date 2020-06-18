import express from "express";
const app = express();

const PORT = 3000;

function handleListener() {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
}

app.get("/", (req, res) => res.send("home1"));

app.listen(PORT, handleListener);
