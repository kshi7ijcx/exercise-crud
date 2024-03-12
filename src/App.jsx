import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from './pages/Signup'
import Navbar from "./components/Navbar"
import Login from "./pages/Login"

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-black to-blue-500 text-white font-mono'>
      <Navbar />
      <div  className="flex justify-center mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}
export default App