import express from "express";
import cors from "cors";
import { dbConnection } from "../Model/models.js";
import { endpoints } from "./endpoints.js";

dbConnection();
const app = express();
const PORT = process.env.PORT || 2400;
app.listen(PORT, () => console.log(`Port ${PORT} is now active!`));

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin);
    },
    credentials: true,
  })
);

endpoints(app);
