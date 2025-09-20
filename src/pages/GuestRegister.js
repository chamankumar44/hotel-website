import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function GuestRegister() {


    const [guestName, setGuestName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [idProof, setIdProof] = useState("");
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        // Simple registration logic (in a real app, save to a database)
        alert(`Guest ${guestName} registered successfully!`);
        setGuestName("");
        setContactNumber("");
        setEmail("");
        setAddress("");
        setIdProof("");
        navigate("/bookingdetails");
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <h2 style={{ textAlign: 'center' }}>Guest Registration</h2>
                <input
                    type="text"
                    placeholder="Guest Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />
                <input
                    type="text"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
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
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />
                <input
                    type="text"
                    placeholder="ID Proof"
                    value={idProof}
                    onChange={(e) => setIdProof(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Register</button>
            </form>
        </div>
    );






}