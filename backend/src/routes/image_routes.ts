import { Router } from "express";
import imageModel from "../db/model/imageModel";

const route = Router();

route.post("/", async (req, res) => {
  const { label, imageURL } = req.body;

  try {
    const data = await imageModel.create({
      label,
      imageURL,
      uploadedOn: Date.now(),
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "An error occurred please check the fields" });
  }
});

route.get("/", async (_req, res) => {
  const data = await imageModel.find();
  res.send(data);
});

export default route;
