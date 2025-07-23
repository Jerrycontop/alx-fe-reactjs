import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: "10px 20px",
      }}
    >
      <h2>My Company</h2>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "15px" }}>About</Link>
      <Link to="/services" style={{ color: "white", marginRight: "15px" }}>Services</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
