import Workout from "../models/workout.model.js";
import mongoose from "mongoose";

const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const oneWorkout = await Workout.findById(id);
  if (!oneWorkout) {
    return res.send(400).json({ error: "ID does not exist" });
  }
  res.status(200).json(oneWorkout);
};

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const delelteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const deleted = await Workout.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(400).json({ error: "workout does not exist" });
  }
  res.status(200).json(deleted);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const updated = await Workout.findByIdAndUpdate(id, { ...req.body });
  if (!updated) {
    return res.status(400).json({ error: "Workout does not exist" });
  }
  res.status(200).json(updated);
};

export {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  delelteWorkout,
  updateWorkout,
};
