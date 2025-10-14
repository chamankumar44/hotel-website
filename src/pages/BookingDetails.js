import { useState } from "react";
import Footer from "../Component/Footer";

export default function BookingDetails() {
  const [bookingId, setBookingId] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingData, setBookingData] = useState(null);
  const [bookingsByDate, setBookingsByDate] = useState([]);

  const handleFetch = () => {
    if (bookingId) {
      // 🔹 Fetch by Booking ID
      fetch(`http://192.168.1.33:8080/api/v1/hotel/getbooking?id=${bookingId}`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch booking by ID");
          return response.json();
        })
        .then((data) => {
          setBookingData(data);
          setBookingsByDate([]);
        })
        .catch((error) => {
          console.error(error);
          alert("Error fetching booking by ID");
        });
    } else if (bookingDate) {
      // 🔹 Fetch by Date
      fetch(
        `http://192.168.1.33:8080/api/v1/hotel/getbookingbydate?date=${bookingDate}`
      )
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch bookings by date");
          return response.json();
        })
        .then((data) => {
          setBookingsByDate(data);
          setBookingData(null);
        })
        .catch((error) => {
          console.error(error);
          alert("Error fetching bookings by date");
        });
    } else {
      alert("Please enter a Booking ID or select a Date to search");
    }
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
          width: "500px",
        }}
      >
        <h1 style={{ color: "#2c3e50", marginBottom: "25px" }}>
          Booking Details
        </h1>

        {/* Unified Input Section */}
        <div style={{ marginBottom: "25px" }}>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            🔍 You can search by <strong>Booking ID</strong> or <strong>Date</strong>.
          </p>

          {/* Booking ID Input */}
          <input
            type="number"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            placeholder="Enter Booking ID"
            style={{
              padding: "8px",
              width: "80%",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />

          {/* OR separator */}
          <div
            style={{
              margin: "10px 0",
              fontWeight: "bold",
              color: "#444",
              fontSize: "16px",
            }}
          >
            — OR —
          </div>

          {/* Booking Date Input */}
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            style={{
              padding: "8px",
              width: "80%",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />

          <br />

          {/* Fetch Button */}
          <button
            onClick={handleFetch}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Fetch Booking
          </button>
        </div>

        {/* Show Single Booking Result */}
        {bookingData && (
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(0,123,255,0.85), rgba(0,82,204,0.85))",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              color: "#f1f6ff",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                color: "#e1eaff",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Booking Info
            </h3>
            <p>
              <strong>Booking ID:</strong> {bookingData.id}
            </p>
            <p>
              <strong>Room ID:</strong> {bookingData.roomId}
            </p>
            <p>
              <strong>Room Number:</strong> {bookingData.roomNo}
            </p>
            <p>
              <strong>Feedback:</strong> {bookingData.feedback}
            </p>
            <p>
              <strong>Check-in:</strong> {bookingData.checkIn}
            </p>
            <p>
              <strong>Check-out:</strong> {bookingData.checkOut}
            </p>
          </div>
        )}

        {/* Show Multiple Bookings by Date */}
        {bookingsByDate.length > 0 && (
          <div
            style={{
              marginTop: "20px",
              background:
                "linear-gradient(135deg, rgba(40,167,69,0.85), rgba(25,135,84,0.85))",
              borderRadius: "12px",
              padding: "20px",
              color: "#f1f6ff",
              textAlign: "left",
            }}
          >
            <h3 style={{ textAlign: "center", color: "#e1eaff" }}>
              Bookings on {bookingDate}
            </h3>
            {bookingsByDate.map((b, index) => (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Booking ID:</strong> {b.id}
                </p>
                <p>
                  <strong>Room No:</strong> {b.roomNo}
                </p>
                <p>
                  <strong>Check-in:</strong> {b.checkIn}
                </p>
                <p>
                  <strong>Check-out:</strong> {b.checkOut}
                </p>
                <p>
                  <strong>Feedback:</strong> {b.feedback}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
