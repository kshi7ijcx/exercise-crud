import { useState } from "react"
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login,error,isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email,password);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-black/30 backdrop-blur-xl shadow-2xl h-fit rounded-3xl">
            <label>Email:</label>
            <input className="text-black" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password:</label>
            <input className="text-black" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button disabled={isLoading} className="mt-4 ">Login</button>
            {error && <div>{error}</div>}
        </form>
    )
}
export default Login