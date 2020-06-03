import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User index"));
userRouter.get("/profile", (req, res) => res.send("Profile"));
userRouter.get("/edit", (req, res) => res.send("Edit user Profile"));
userRouter.get("/password", (req, res) => res.send("User Password"));

export default userRouter;
