import express from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`server port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
