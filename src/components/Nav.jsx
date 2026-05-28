import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Nav.css";

const links = ["ABOUT", "PROJECTS", "SERVICE", "CONTACT"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`nav ${scrolled ? "scrolled" : ""}`}
        aria-label="Main navigation"
      >
        {/* Changed to Link to route smoothly back to the top of home view */}
        <Link to="/" className="nav-logo">
          STUDIO.IX
        </Link>

        <ul className="nav-links" role="list">
          {links.map((l) => (
            <li key={l}>
              {/* Using native anchor styles but appending root '/' path so it works from anywhere */}
              <a href={`/#${l.toLowerCase()}`} className="nav-link">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* This takes the user directly to your dedicated contact page form layout */}
        <Link to="/contact" className="nav-cta">
          Let's Talk
        </Link>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {links.map((l, i) => (
            <li key={l} style={{ "--i": i }}>
              {/* Appending root slash for mobile menu links as well */}
              <a
                href={`/#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu CTA routes directly to the dedicated form page */}
        <Link
          to="/contact"
          className="mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk →
        </Link>
      </div>
    </>
  );
}
