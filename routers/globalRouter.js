import express from "express";
import routes from "../routes";
import { Join, Login, Logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, Join);
globalRouter.get(routes.login, Login);
globalRouter.get(routes.logout, Logout);
globalRouter.get(routes.search, search);

export default globalRouter;
