import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://fastarfavour:cof9ymwYj73TzZGH@mockapi.7klafem.mongodb.net/MockAPI?retryWrites=true&w=majority&appName=MockAPI"
    )
    .then(() => console.log("Database connected!"))
    .catch((error) => console.log("Unable to connect to database!"));
};

const apiSchema = mongoose.Schema(
  {
    key: { type: String, required: true },
    Data: { type: String, required: true },
  },
  { collection: "APIData" }
);
export const apiModel = mongoose.model("APIData", apiSchema);

const emailSchema = mongoose.Schema({
  email: { type: String, required: true },
});
export const emailModel = mongoose.model("emails", emailSchema);
