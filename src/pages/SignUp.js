import { useState } from "react";
import Footer from "../Component/Footer"; // Adjust path as needed

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const payload = { userName, email, password };

    try {
      const response = await fetch(
        "http://192.168.1.33:8080/api/v1/hotel/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          credentials: "include",
        }
      );

      const text = await response.text(); // parse as text

      if (!response.ok) {
        throw new Error(`Signup failed: ${text}`);
      }

      alert(`Success: ${text}`);

      // Reset form
      setUserName("");
      setPassword("");
      setEmail("");
    } catch (error) {
      console.error("Signup error:", error);
      alert(`Error: ${error.message}`);
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
        backgroundImage: "url(https://www.istockphoto.com/photos/hotel-entrance)", // added url(...)
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Intro Section */}
      <div
        style={{
          marginBottom: "30px",
          maxWidth: "600px",
          backgroundColor: "rgba(0, 123, 255, 0.7)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "10px", color: "#ffffff" }}>
          Welcome to the Hotel Management System
        </h1>
        <p style={{ fontSize: "17px", color: "#f1f6ff" }}>
          Effortlessly manage your hotel bookings, users, and operations.
          Create your account below and start your journey with us.
        </p>
      </div>

      {/* Sign-Up Form Card */}
      <form
        onSubmit={handleSignUp}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "320px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
          color: "#333",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          style={{
            marginBottom: "10px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            marginBottom: "10px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            marginBottom: "15px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Sign Up
        </button>
      </form>

      <Footer />
    </div>
  );
}
