import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Component/Navbar";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [bgImage] = useState(
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
  );

  // Footer component
  const Footer = () => (
    <footer
      style={{
        backgroundColor: "rgba(20, 30, 48, 0.9)",
        color: "white",
        textAlign: "center",
        padding: "15px 20px",
        marginTop: "auto",
        width: "100%",
        backdropFilter: "blur(5px)",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} The Elara. All rights reserved.
      </p>
    </footer>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          padding: "40px 20px",
        }}
      >
        {/* ✨ Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(20,30,48,0.7), rgba(36,59,85,0.7))",
            zIndex: 1,
          }}
        ></div>

        {/* ✨ Main Content */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.15))",
            padding: "2.5rem 3rem",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            maxWidth: "650px",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#ffffff",
              textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
              marginBottom: "1rem",
              letterSpacing: "1px",
            }}
          >
            The Elara
          </h1>

          <hr
            style={{
              width: "80px",
              height: "3px",
              background: "white",
              border: "none",
              margin: "0 auto 1.2rem auto",
              borderRadius: "5px",
            }}
          />

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#f1f6ff",
              marginBottom: "1.2rem",
              fontStyle: "italic",
            }}
          >
            “Begin your journey into luxury and comfort — where elegance meets
            the ocean breeze.”
            <br /> Experience timeless serenity at The Elara.
          </p>

          {location.state && location.state.margin && (
            <p
              style={{
                fontSize: "0.9rem",
                marginTop: "10px",
                color: "#dbe8ff",
              }}
            >
              Navigation state margin: {location.state.margin}
            </p>
          )}

          {/* 🔷 Register Button */}
          <button
            style={{
              marginTop: "20px",
              padding: "0.9rem 1.8rem",
              border: "none",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #243b55, #141e30)",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              zIndex: 10,
              transition: "0.3s",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              letterSpacing: "0.5px",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #141e30, #243b55)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #243b55, #141e30)")
            }
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
