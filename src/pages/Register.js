import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!guestName || !email || !phone || !roomType || !checkInDate || !checkOutDate) {
      setMessage("⚠️ Please fill out all fields.");
      return;
    }

    const guestData = {
      guestName,
      email,
      phone,
      roomType,
      checkInDate,
      checkOutDate,
    };

    fetch("http://localhost:8080/api/v1/hotel/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(guestData),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("✅ Registration successful!");
          setGuestName("");
          setEmail("");
          setPhone("");
          setRoomType("");
          setCheckInDate("");
          setCheckOutDate("");
          setTimeout(() => navigate("/home"), 1500); // redirect to home after registration
        } else {
          setMessage("❌ Failed to register guest.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("⚠️ Something went wrong. Please try again.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          padding: "3rem",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1
          style={{
            marginBottom: "0.5rem",
            color: "#243b55",
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          The Elara
        </h1>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "#4a4a4a",
            fontStyle: "italic",
            fontSize: "0.95rem",
          }}
        >
          “Begin your journey into luxury and comfort.”
        </p>

        {message && (
          <p
            style={{
              backgroundColor: "#f0f4ff",
              borderRadius: "6px",
              padding: "10px",
              marginBottom: "1rem",
              color: "#243b55",
              fontWeight: "500",
            }}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          <FormField label="Full Name:" value={guestName} onChange={setGuestName} type="text" placeholder="Enter full name" />
          <FormField label="Email:" value={email} onChange={setEmail} type="email" placeholder="Enter email" />
          <FormField label="Phone:" value={phone} onChange={setPhone} type="tel" placeholder="Enter phone number" />

          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "500" }}>Room Type:</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">Select room type</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
              <option value="Ocean View">Ocean View</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>

          <FormField label="Check-in Date:" value={checkInDate} onChange={setCheckInDate} type="date" />
          <FormField label="Check-out Date:" value={checkOutDate} onChange={setCheckOutDate} type="date" />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 20px",
              background: "linear-gradient(135deg, #243b55, #141e30)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "1rem",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #141e30, #243b55)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #243b55, #141e30)")
            }
          >
            Register Now
          </button>
        </form>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          Already a guest?{" "}
          <span
            style={{
              color: "#243b55",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

function FormField({ label, value, onChange, type, placeholder }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ fontWeight: "500" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  marginTop: "5px",
  transition: "0.3s",
  fontSize: "0.95rem",
};
