import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      requird: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Workout", schema);
export default model;
