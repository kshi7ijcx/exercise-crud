import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-tr from-black to-blue-500 text-white  font-mono'>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}
export default App