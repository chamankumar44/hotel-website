import { useState } from "react";

export default function UpdateBooking() {
    const [bookingData, setBookingData] = useState(null);

    const fetchUpdateBooking = () => {
        fetch("http://192.168.1.33:8080/api/v1/hotel/update")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setBookingData(data);
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
                <h1 style={{ color: "#2c3e50", marginBottom: "20px" }}>Update Booking</h1>

                <button
                    onClick={fetchUpdateBooking}
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
                    Fetch Updated Booking
                </button>

                {bookingData && (
                    <div
                        style={{
                            backgroundColor: "#f8f9fa",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)",
                        }}
                    >
                        <h3 style={{ color: "#34495e" }}>Booking Details</h3>
                        <p>
                            <strong>Booking ID:</strong> {bookingData.id}
                        </p>
                        <p>
                            <strong>Feedback:</strong> {bookingData.feedback}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
