const ExerciseCard = ({title,reps,load}) => {
  return (
    <div className='bg-white/15 backdrop-blur-3xl rounded-3xl px-3 py-2 shadow-2xl'>
        <div>
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div>
            <p>Load: {load}</p>
        </div>
        <div>
            <p>Reps: {reps}</p>
        </div>
    </div>
  )
}
export default ExerciseCard