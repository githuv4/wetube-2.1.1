import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Hello from Homm"));
globalRouter.get("/join", (req, res) => res.send("Join"));

export default globalRouter;
