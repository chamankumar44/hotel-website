import { useState } from "react";

export default function UpdateUser() {
    const [userData, setUserData] = useState(null);

    const fetchUpdateUser = () => {
        fetch("http://192.168.1.33:8080/api/v1/hotel/update-user")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setUserData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
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
            }}
        >
            <div
                style={{
                    backgroundColor: "#ffffff",
                    padding: "40px 60px",
                    borderRadius: "20px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    width: "400px",
                }}
            >
                <h1 style={{ color: "#2c3e50", marginBottom: "20px" }}>Update User</h1>

                <button
                    onClick={fetchUpdateUser}
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
                    Fetch Updated Data
                </button>

                {userData && (
                    <div
                        style={{
                            backgroundColor: "#f8f9fa",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)",
                        }}
                    >
                        <h3 style={{ color: "#34495e" }}>User Details</h3>
                        <p>
                            <strong>User ID:</strong> {userData.id}
                        </p>
                        <p>
                            <strong>User Name:</strong> {userData.userName}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
