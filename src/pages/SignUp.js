import { useState } from "react";

export default function SignUp() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
        const handleSignUp = (e) => {
            e.preventDefault();
            // Simple sign-up logic (in a real app, save to a database)
            alert(`User ${userName} signed up successfully!`);
            setUserName("");
            setPassword("");
            setEmail("");
        }
    
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                    <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Sign Up</button>
                </form>
            </div>
        );
}