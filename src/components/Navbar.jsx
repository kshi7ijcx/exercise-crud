import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

function Navbar() {

    const {logout} = useLogout();
    const handleLogout = () => {
        logout();
    }

    return (
        <div className="flex justify-between px-10 py-5">
            <Link to='/'>
                <h1 className="text-5xl font-bold">Workout Buddy</h1>
            </Link>
            <div className="flex gap-5">
                <Link className="text-xl font-bold" to="/login">Login</Link>
                <Link className="text-xl font-bold" to="/signup">Signup</Link>
                <button className="bg-black/50 rounded-lg px-2 h-9" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Navbar