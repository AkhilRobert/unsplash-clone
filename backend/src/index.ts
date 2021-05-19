import express from "express";
import cors from "cors";

import "./db";
import imageRoute from "./routes/imageRoute";

const app = express();
const PORT = 5000 || process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", imageRoute);

app.listen(PORT, () => {
  console.log(`Server started at the port ${PORT}`);
});
