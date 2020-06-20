import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User Index"));
userRouter.get("/edit", (req, res) => res.send("User Edit"));
userRouter.get("/password", (req, res) => res.send("User Password"));
userRouter.get("/profile", (req, res) => res.send("User Profile"));

export default userRouter;
