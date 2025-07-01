import { emailModel } from "../Model/models.js";
export const emailRoute = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  await emailModel({ email: data.email }).save();
  res.json("Succesfully subscribed!");
};
