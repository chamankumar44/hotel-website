import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginBox, setShowLoginBox] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "password") {
      navigate("/register");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        fontFamily: "'Poppins', sans-serif",
        transition: "all 0.6s ease-in-out",
      }}
    >
      {/* Left Section (The Elara Image + Text) */}
      <div
        style={{
          flex: showLoginBox ? 0.6 : 1,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
          overflow: "hidden",
          transition: "flex 0.6s ease-in-out",
        }}
      >
        {/* Soft overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(20,30,48,0.7), rgba(36,59,85,0.7))",
            zIndex: 1,
          }}
        ></div>

        {/* Top Right Login Button */}
        <button
          onClick={() => setShowLoginBox(!showLoginBox)}
          style={{
            position: "absolute",
            top: "20px",
            right: "30px",
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #243b55, #141e30)",
            color: "white",
            fontWeight: "500",
            cursor: "pointer",
            zIndex: 3,
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
          {showLoginBox ? "Close" : "Login"}
        </button>

        {/* The Elara Title + Tagline */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            transform: showLoginBox ? "scale(0.9)" : "scale(1)",
            opacity: showLoginBox ? 0.9 : 1,
            transition: "all 0.6s ease-in-out",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
              letterSpacing: "2px",
            }}
          >
            The Elara
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              opacity: 0.85,
              color: "#f1f1f1",
              letterSpacing: "0.5px",
            }}
          >
            “Where the sea whispers serenity and the stars remember your name.”
          </p>
        </div>
      </div>

      {/* Right Section (Login Box) */}
      <div
        style={{
          flex: showLoginBox ? 0.4 : 0,
          background: "linear-gradient(to right, #f8faff, #ffffff)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          transition: "all 0.6s ease-in-out",
        }}
      >
        {showLoginBox && (
          <form
            onSubmit={handleLogin}
            style={{
              backgroundColor: "white",
              padding: "3rem",
              borderRadius: "1.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: "360px",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              transform: showLoginBox ? "translateX(0)" : "translateX(100%)",
              opacity: showLoginBox ? 1 : 0,
              transition: "all 0.6s ease-in-out",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#243b55",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Sign In
            </h2>

            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              style={{
                padding: "0.8rem 1rem",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #243b55")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: "0.8rem 1rem",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #243b55")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />

            <button
              type="submit"
              style={{
                padding: "0.8rem",
                fontSize: "1rem",
                background: "linear-gradient(135deg, #243b55, #141e30)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
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
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
