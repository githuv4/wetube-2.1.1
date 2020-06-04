import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("User index"));
userRouter.get(routes.userDetail, (req, res) => res.send("Profile"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit user Profile"));
userRouter.get(routes.changePassword, (req, res) => res.send("User Password"));

export default userRouter;
