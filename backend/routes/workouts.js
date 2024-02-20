import express from "express";

import Workout from "../models/workout.model.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "get single workout" });
});

router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "delete workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "update workout" });
});

export default router;
