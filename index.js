import express from "express";

const app = express();
const PORT = 4000;

const hanldeListening = (req, res) =>
  console.log(`✅ Listening on http://localhost:${PORT}`);

const middleware = (req, res, next) => {
  console.log("Between");
  next();
};

// app.use(middleware);
app.get("/", middleware, (req, res) => res.send("Branch 3"));

app.listen(PORT, hanldeListening);
