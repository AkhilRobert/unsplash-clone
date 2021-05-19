import express from "express";

import "./db";
import imageRoute from "./routes/image_routes";

const app = express();
const PORT = 5000 || process.env.PORT;

// Middlewares
app.use(express.json());

// Routes
app.use("/api", imageRoute);

app.listen(PORT, () => {
  console.log(`Server started at the port ${PORT}`);
});
