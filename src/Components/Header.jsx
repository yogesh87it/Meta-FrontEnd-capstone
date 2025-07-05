import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <header>
      {/*- <Logo /> -*/}
      <Nav />
    </header>
  );
}

/*
function Logo() {
  return (
    <div>
      <img src={logo} alt="little icon logo" />
    </div>
  );
}
  */

function Nav() {
  return (
    <nav aria-label="main navigation bar">
      <ul>
        <li>
          <img src={logo} alt="little icon logo" />
        </li>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Menu</a>
        </li>

        <li>
          <a href="#">Reservations</a>
        </li>

        <li>
          <a href="#">Order Online</a>
        </li>

        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
}
