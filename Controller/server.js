import express from "express";
import cors from "cors";
import { dbConnection } from "../Model/models.js";
import { endpoints } from "./endpoints.js";

const PORT = process.env.PORT || 2400;

const app = express();

// Render Health check route
app.get("/health", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin for health checks
  res.sendStatus(200);
});

// Manually set headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Authorization");
  next();
});

// CORS setup
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow only your frontend
      const allowed = origin;
      callback(null, allowed); // same for both cases
    },
    credentials: true,
  })
);

// JSON body parser
app.use(express.json());

// Your API routes
endpoints(app);

// Start the server **AFTER everything is ready**
const startServer = async () => {
  await dbConnection();
  app.listen(PORT, () => console.log(`Port ${PORT} is now active!`));
};

startServer().catch((error) => console.log(error));
