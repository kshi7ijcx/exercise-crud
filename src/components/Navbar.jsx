import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="px-10 py-5"> 
            <Link to='/'>
                <h1 className="text-5xl font-bold">Workout Buddy</h1>
            </Link>
        </div>
    )
}
export default Navbar