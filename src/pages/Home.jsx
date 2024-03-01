import { useEffect } from "react"
import ExerciseCard from "../components/ExerciseCard";
import AddWorkout from "../components/AddWorkout";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function Home() {

    const { allWorkouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchAllWorkouts = async () => {
            const response = await fetch('http://localhost:8000/api/workouts/');
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: json });
            }
            console.log(json)
            console.log(allWorkouts)
        }
        fetchAllWorkouts();
    }, []);

    return (
        <div className="flex justify-center mt-10 gap-x-20">
            <div className="flex flex-wrap gap-x-7 gap-y-1 px-10 max-w-xl ">
                {
                    allWorkouts && allWorkouts.map((workout) => (
                        <ExerciseCard key={workout._id} title={workout.title} reps={workout.reps} load={workout.load} />
                    ))
                }
            </div>
            <AddWorkout />
        </div>
    )
}
export default Home