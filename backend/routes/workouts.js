import express from "express";
import {getAllWorkouts,getOneWorkout,createWorkout,delelteWorkout,updateWorkout}  from "../controllers/workoutController.js";
const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:id", getOneWorkout);

router.post("/", createWorkout);

router.delete("/:id", delelteWorkout);

router.patch("/:id", updateWorkout);

export default router;
