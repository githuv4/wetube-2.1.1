import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Wetube";
  res.locals.user = {
    isAthenticated: true,
    id: 343555,
  };
  next();
};
