import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const ExerciseCard = ({workout}) => {
  const {dispatch} = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:8000/api/workouts/${workout._id}`,{
      method: 'DELETE'
    })
    const json = await response.json();
    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT',payload: json})
    }
  }
  return (
    <div className='bg-blue-400/30 backdrop-blur-3xl rounded-3xl px-3 py-2 min-w-36 shadow-2xl h-fit'>
      <div>
        <h2 className="text-xl font-bold">{workout.title}</h2>
      </div>
      <div>
        <p>Load: {workout.load}</p>
      </div>
      <div>
        <p>Reps: {workout.reps}</p>
      </div>
      <div onClick={handleDelete} className='cursor-pointer'><h1 className='text-black/70 font-bold'>Delete</h1></div>
    </div>
  )
}
export default ExerciseCard