import { apiRoute } from "./api_route.js";
import { emailRoute } from "./emailRoute.js";
import { mimeticapiRoute } from "./mimeticapi_route.js";
export const endpoints = (app) => {
  // =====POST ROUTES=====
  app.post("/mimeticapi", mimeticapiRoute);
  app.post("/email", emailRoute);

  // =====GET ROUTES=====
  app.get("/api/:key", apiRoute);
};
