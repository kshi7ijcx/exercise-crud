import { useState } from "react"

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 

    const handleSubmit = async(e) => {
        e.preventDefault();
        
    }

    return (    
        <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-black/30 backdrop-blur-xl shadow-2xl h-fit rounded-3xl">
            <label>Email:</label>
            <input className="text-black" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            <label>Password:</label>
            <input className="text-black" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <button className="mt-4 ">Login</button>
        </form> 
    )
}
export default Login