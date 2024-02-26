import { useState } from "react"

const AddWorkout = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

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
        const json = response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('workout created', json)
        }
    }

    return (
        <form className="flex flex-col gap-5 bg-blue-400/30 backdrop-blur-3xl rounded-2xl px-6 py-4 shadow-2xl h-fit" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Add a New Workout</h1>
            <div>
                <label>Exercise Title: </label>
                <input className="bg-black/30 shadow-sm px-2 py-0.5 rounded-lg w-32" type="text" onChange={e => setTitle(e.target.value)} value={title} />
            </div>
            <div>
                <label>Load (in kg): </label>
                <input className="ml-[18px] bg-black/30 shadow-sm px-2 py-0.5 rounded-lg w-32" type="text" onChange={e => setLoad(e.target.value)} value={load} />
            </div>
            <div>
                <label>Reps: </label>
                <input className='ml-[88px] bg-black/30 shadow-sm px-2 py-0.5 rounded-lg w-32' type="text" onChange={e => setReps(e.target.value)} value={reps} />
            </div>
            <button className='bg-black/30 w-fit self-center px-6 py-1 rounded-xl hover:ring-1 ring-black shadow-xl'>Save</button>
        </form>
    )
}
export default AddWorkout