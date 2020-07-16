import express from "express";
import routes from "../routes";
import {
  getEditProfile,
  postEditProfile,
  changePassword,
  userDetail,
} from "../controllers/userController";
import { onlyPrivate, uploadImage } from "../localsMiddleware";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("User index"));

userRouter.get(routes.editProfile(), onlyPrivate, getEditProfile);
userRouter.post(
  routes.editProfile(),
  onlyPrivate,
  uploadImage,
  postEditProfile
);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
