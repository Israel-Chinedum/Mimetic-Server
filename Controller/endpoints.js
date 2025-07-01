import { mockapiRoute } from "./mockapi_route.js";
import { apiRoute } from "./api_route.js";
import { emailRoute } from "./emailRoute.js";
export const endpoints = (app) => {
  // =====POST ROUTES=====
  app.post("/mockapi", mockapiRoute);
  app.post("/email", emailRoute);

  // =====GET ROUTES=====
  app.get("/api/:key", apiRoute);
};
