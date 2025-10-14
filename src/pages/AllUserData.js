import { useState } from "react";

export default function AllUserData() {
    const [users, setUsers] = useState([]);

    const fetchAllUsers = () => {
        fetch("http://192.168.1.33:8080/api/v1/hotel/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
                alert("Fetch failed");
            });
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f4f6f9",
                fontFamily: "Arial, sans-serif",
                padding: "20px",
            }}
        >
            <div
                style={{
                    backgroundColor: "#ffffff",
                    padding: "40px 60px",
                    borderRadius: "20px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    width: "500px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                }}
            >
                <h1 style={{ color: "#2c3e50", marginBottom: "20px" }}>All Users</h1>

                <button
                    onClick={fetchAllUsers}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        marginBottom: "20px",
                    }}
                >
                    Fetch All Users
                </button>

                {users.length > 0 && (
                    <div style={{ textAlign: "left" }}>
                        {users.map((user, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "linear-gradient(135deg, rgba(0,123,255,0.85), rgba(0,82,204,0.85))", // blue theme
                                    borderRadius: "12px",
                                    padding: "15px 20px",
                                    marginBottom: "15px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                    color: "#f1f6ff",
                                }}
                            >
                                <p style={{ margin: "5px 0" }}>
                                    <strong>Email:</strong> {user.email}
                                </p>
                                <p style={{ margin: "5px 0" }}>
                                    <strong>Username:</strong> {user.userName}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

