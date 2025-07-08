import express from "express";
import cors from "cors";
import { dbConnection } from "../Model/models.js";
import { endpoints } from "./endpoints.js";

dbConnection();
const app = express();

app.listen(PORT, () => console.log(`Port ${PORT} is now active!`));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, "https://mimeticapi.onrender.com");
      }
      callback(null, "https://mimeticapi.onrender.com");
    },
    credentials: true,
  })
);

app.options("*", cors());
const PORT = process.env.PORT || 2400;

app.use(express.json());

endpoints(app);
