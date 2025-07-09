import logo from "../assets/logo.svg";
import meta from "../assets/meta.svg";
import insta from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <FooterLinks />
        <Contact />
        <SocialMediaLink />
      </div>
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
    <nav aria-label="footer-navigation">
      <ul>
        <li className="footer-heading">
          <span>Links</span>
        </li>
        <li>
          <Link to="/">Home</Link> {/*<a href="#">Home</a>*/}
        </li>

        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Menu</a>
        </li>

        <li>
          <Link to="/booking">Reservations</Link>
          {/*<a href="#">Reservations</a>*/}
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
        <li className="footer-heading">Address</li>
        <li>24th, Bay Street, Chicago</li>
        <li className="footer-heading">Phone No.</li>
        <li>(012)-124-356-987</li>
        <li className="footer-heading">Email</li>
        <li>little-lemon@hotmail.com</li>
      </ul>
    </address>
  );
}

function SocialMediaLink() {
  return (
    <ul className="social-media">
      <li className="footer-heading">Follow us on</li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="instagram logo" />
          {/*Instagram*/}
        </a>
      </li>
      <li>
        <a
          href="https://www.meta.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={meta} alt="meta logo" />
          {/*Meta*/}
        </a>
      </li>
      <li>
        <a
          href="https://in.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkden logo" />
          {/*Linkedin*/}
        </a>
      </li>
    </ul>
  );
}
