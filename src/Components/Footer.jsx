import logo from "../assets/Logo.svg";
export default function Footer() {
  return (
    <footer>
      <Logo />
      <FooterLinks />
      <Contact />
      <SocialMediaLink />
    </footer>
  );
}

function Logo() {
  return (
    <div>
      <img src={logo} alt="little lemon logo" />
    </div>
  );
}

function FooterLinks() {
  return (
    <nav aria-label="footer navigation">
      <ul>
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

function Contact() {
  return (
    <address>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
    </address>
  );
}

function SocialMediaLink() {
  return (
    <ul>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="insta-logo" alt="instagram logo" />
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://www.meta.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="meta-logo" alt="meta logo" />
          Meta
        </a>
      </li>
      <li>
        <a
          href="https://in.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkden-logo" alt="linkden logo" />
          Linkedin
        </a>
      </li>
    </ul>
  );
}
