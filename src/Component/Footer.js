// Footer.js
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgba(30, 60, 114, 0.9)",
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
        © {new Date().getFullYear()} Grand Haven. All rights reserved.
      </p>
    </footer>
  );
}
