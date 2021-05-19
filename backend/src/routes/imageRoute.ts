import { Router } from "express";
import imageModel from "../db/model/imageModel";

const imageRoute = Router();

imageRoute.post("/", async (req, res) => {
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

imageRoute.get("/", async (_req, res) => {
  const data = await imageModel.find();
  res.send(data);
});

imageRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await imageModel.findByIdAndDelete(id);
    res.send({ message: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Image not found" });
  }
});

export default imageRoute;
