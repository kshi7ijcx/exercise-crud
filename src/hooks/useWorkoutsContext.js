import { WorkoutContext } from "../context/workoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }
    // context = null if used outside the context provider
    return context
}