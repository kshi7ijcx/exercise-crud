import express from "express";
import {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  delelteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";
import { requireAuth } from "../middleware/requireAuth.js";
const router = express.Router();

router.use(requireAuth);

router.get("/", getAllWorkouts);

router.get("/:id", getOneWorkout);

router.post("/", createWorkout);

router.delete("/:id", delelteWorkout);

router.patch("/:id", updateWorkout);

export default router;
