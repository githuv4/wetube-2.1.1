import express from "express";
import routes from "../routes";
import {
  home,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.login, postLogin);

export default globalRouter;
