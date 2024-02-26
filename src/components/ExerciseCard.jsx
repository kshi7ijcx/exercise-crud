const ExerciseCard = ({title,reps,load}) => {
  return (
    <div className='bg-blue-400/30 backdrop-blur-3xl rounded-3xl px-3 py-2 min-w-36 shadow-2xl h-fit'>
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