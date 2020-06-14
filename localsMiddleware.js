import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "WeTube";
  // res.locals.user = req.user;
  res.locals.user = {
    isAthenticated: true,
    id: 4432,
  };
  next();
};
