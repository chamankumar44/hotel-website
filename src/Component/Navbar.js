import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, #141e30, #243b55)",
          padding: "10px 15px 10px 30px", // 🔹 reduced right padding more
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "0 0 8px 8px",
          margin: 0,
          width: "100%",
          fontFamily: "'Poppins', sans-serif",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        {/* 🌙 Site Name */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "white",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          The Elara
        </div>

        {/* 🔗 Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginRight: "60px", // 🔹 shifted links a bit more left
          }}
        >
          {[
            { name: "Home", path: "/home" },
            { name: "Booking Details", path: "/bookingdetails" },
            { name: "All User Data", path: "/alluserdata" },
            { name: "Update Booking", path: "/updatebooking" },
            { name: "Update User", path: "/updateuser" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "15px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#ffe066";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "white";
                e.target.style.transform = "scale(1)";
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Space below fixed navbar */}
      <div style={{ paddingTop: "70px" }} />
    </>
  );
}
