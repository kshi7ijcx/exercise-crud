import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="flex justify-between px-10 py-5">
            <Link to='/'>
                <h1 className="text-5xl font-bold">Workout Buddy</h1>
            </Link>
            <div className="flex gap-5">
                <Link className="text-xl font-bold" to="/login">Login</Link>
                <Link className="text-xl font-bold" to="/signup">Signup</Link>
            </div>
        </div>
    )
}
export default Navbar