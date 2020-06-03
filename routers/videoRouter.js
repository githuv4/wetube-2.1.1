import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("Hello from Homm"));
videoRouter.get("/edit", (req, res) => res.send("Edit video"));

export default videoRouter;
