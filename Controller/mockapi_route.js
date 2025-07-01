import crypto from "crypto";
import dotenv from "dotenv";
import { apiModel } from "../Model/models.js";

dotenv.config();

export const mockapiRoute = async (req, res) => {
  const { data } = req.body;
  try {
    const jsonData = JSON.stringify(data);
    let diff = false;
    let key;
    do {
      key = crypto.randomBytes(8).toString("hex");
      const apiData = await apiModel.find({ key: key });
      console.log("ARR: ", apiData);
      if (apiData.length === 0) {
        diff = true;
      }
    } while (diff === false);

    await apiModel({
      key,
      Data: jsonData,
    }).save();
    res.json({ endpoint: `${process.env.BASE_URL}/${key}` });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json("An error occured!");
  }
};
