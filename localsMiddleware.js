import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Wetube";
  res.locals.user = {
    isAuthenticated: 1,
    id: 343555,
  };
  next();
};
