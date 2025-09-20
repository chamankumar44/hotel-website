import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {

 const [userName, setUserName] = useState("");
 const [password, setPassword] = useState("");
    const navigate = useNavigate();


    
    const handleLogin = (e) => {
        e.preventDefault();
        // Simple validation (in a real app, validate against a database)
        if (userName === "admin" && password === "password") {
            navigate("/home");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Login</button>
            </form>
        </div>
    );

}