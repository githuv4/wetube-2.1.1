import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Wetube";
  res.locals.routes = routes;
  next();
};
