import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="main navigation bar">
      <ul className={menuOpen ? "show" : ""}>
        <li>
          <img src={logo} alt="little icon logo" />
        </li>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>
        </li>
        <li>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>
            Reservations
          </Link>
        </li>
        <li>
          <a href="#order" onClick={() => setMenuOpen(false)}>
            Order Online
          </a>
        </li>
        <li>
          <a href="#login" onClick={() => setMenuOpen(false)}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
