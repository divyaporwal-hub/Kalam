import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Write",
    to: "/write",
  },
  {
    label: "Get Started",
    to: "/get-started",
  },
  {
    label: "Profile",
    to: "/profile",
  },
];
const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="navbarContainer">
        {data.map((item, key) => (
          <li key={key} className="menuItem">
            <Link className="itemLink" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
