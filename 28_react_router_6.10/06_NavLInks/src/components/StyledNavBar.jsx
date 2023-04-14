import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "red" : "grey" })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>

      <NavLink to="/products">Products</NavLink>
    </nav>
  );
}
