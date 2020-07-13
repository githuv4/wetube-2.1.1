import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  userDetail,
} from "../controllers/userController";
import { onlyPrivate } from "../localsMiddleware";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("User index"));
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
