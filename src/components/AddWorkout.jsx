import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const AddWorkout = () => {

    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, load, reps }
        const response = await fetch('http://localhost:8000/api/workouts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setError(null)
            setEmptyFields([])
            setTitle('')
            setLoad('')
            setReps('')
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }

    return (
        <form className="flex flex-col gap-5 min-w-fit bg-blue-400/30 backdrop-blur-3xl rounded-2xl px-6 py-4 shadow-2xl h-fit" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Add a New Workout</h1>
            <div className='grid grid-cols-2 grid-rows-3 gap-5'>
                <label>Exercise Title: </label>
                <input className={`bg-black/30 shadow-sm px-2 py-0.5 rounded-lg w-32 ${(emptyFields.includes('title')?'ring-2 ring-red-600':'')}`} type="text" onChange={e => setTitle(e.target.value)} value={title} />
                
                <label>Load (in kg): </label>
                <input className={`bg-black/30 shadow-sm px-2 py-0.5 rounded-lg w-32 ${(emptyFields.includes('load')?'ring-2 ring-red-600':'')}`} type="text" onChange={e => setLoad(e.target.value)} value={load} />
                
                <label>Reps: </label>
                <input className={`bg-black/30 shadow-sm px-2 py-0.5 rounded-lg w-32 ${(emptyFields.includes('reps')?'ring-2 ring-red-600':'')}`} type="text" onChange={e => setReps(e.target.value)} value={reps} />
            </div>
            <button className='bg-black/30 w-fit self-center px-6 py-1 rounded-xl hover:ring-1 ring-black shadow-xl'>Save</button>
            <div><h1 className='text-red-600 font-lg font-bold'>{error}</h1></div>
        </form >
    )
}
export default AddWorkout