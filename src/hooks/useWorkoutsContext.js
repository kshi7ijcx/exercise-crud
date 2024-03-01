import { WorkoutContext } from "../context/workoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw Error("useWorkoutContext must be used inside an WorkoutsContextProvider")
    }
    // context = null if used outside the context provider
    return context
}