import { apiModel } from "../Model/models.js";

export const apiRoute = async (req, res) => {
  const { key } = req.params;

  const apiData = await apiModel.find({ key: key });

  console.log(apiData);
  console.log(key);

  if (apiData.length !== 0) {
    const data = JSON.parse(apiData[0]["Data"]);
    res.json(data);
  } else {
    res.status(400).json({ error: "Invalid route key!" });
  }
};
