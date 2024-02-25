import { useState, useEffect } from "react"
import ExerciseCard from "../components/ExerciseCard";

function Home() {

    const [allWorkouts, setAllWorkouts] = useState(null);

    useEffect(() => {
        const fetchAllWorkouts = async () => {
            const response = await fetch('http://localhost:8000/api/workouts/');
            const json = await response.json();
            if (response.ok) {
                setAllWorkouts(json);
            }
        }
        fetchAllWorkouts();
    }, [])

    return (
        <div>
            <div className="flex">
                {
                    allWorkouts && allWorkouts.map((workout) => (
                        <ExerciseCard key={workout._id} title={workout.title} reps={workout.reps} load={workout.load} />
                    ))
                }
            </div>
        </div>
    )
}
export default Home