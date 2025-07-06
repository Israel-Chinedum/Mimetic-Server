import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Database connected!"))
    .catch((error) => console.log(`Unable to connect to database!, ${error}`));
};

const apiSchema = mongoose.Schema(
  {
    key: { type: String, required: true },
    Data: { type: String, required: true },
    createdAt: { type: Date, required: true },
  },
  { collection: "APIData" }
);
export const apiModel = mongoose.model("APIData", apiSchema);

const emailSchema = mongoose.Schema({
  email: { type: String, required: true },
});
export const emailModel = mongoose.model("emails", emailSchema);
