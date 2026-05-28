import "./Footer.css";

const navLinks = ["About", "Projects", "Service", "Contact"];
const socials = [
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "Twitter / X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    href: "#",
  },
  {
    label: "Dribbble",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.323c-.348-.152-3.355-1.344-6.754-.741 1.408 3.864 1.982 6.974 2.086 7.48 2.802-1.637 4.542-4.57 4.668-6.739zm-1.752 8.016c-.147-.64-.78-3.92-2.274-7.851-.044.013-.087.03-.134.043-3.91 1.252-5.26 4.966-5.41 5.402 1.343.468 2.784.713 4.25.713 1.252 0 2.454-.176 3.568-.32zm-11.455-.916c.176-.475 1.742-4.502 5.662-5.694-.216-.484-.448-.973-.697-1.456-3.834 1.127-7.65 1.055-8.145 1.037.47 2.453 1.776 4.582 3.58 6.113zM2.086 12c0 .248.014.493.033.738.163-.004 3.424-.047 7.291-1.01-.24-.492-.49-.993-.746-1.488C4.54 11.442 2.215 11.966 2.086 12zm.734-2.242c.117-.23 2.505-.724 6.27-2.128-.853-1.517-1.77-3.08-2.528-4.237-2.003 1.454-3.38 3.733-3.742 6.365zm7.393-7.22c.795 1.182 1.737 2.793 2.59 4.341 3.518-1.342 4.98-3.418 5.143-3.66A9.92 9.92 0 0 0 12 2.54c-.615 0-1.21.055-1.787.142z" />
      </svg>
    ),
    href: "#",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left Side: Photo reference newsletter box */}
        <div className="footer-newsletter">
          <h2>Sign up for our newsletter today.</h2>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              required
              aria-label="Email address for newsletter"
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="subscribe-disclaimer">No spam, Just valued update.</p>
        </div>

        {/* Right Side: Consolidated grid using only your 2 original navigational dimensions */}
        <div className="footer-links-grid">
          <nav className="footer-col" aria-label="Navigation Links">
            <h3>Navigation</h3>
            <ul role="list">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}>{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="footer-col social-col"
            aria-label="Social Media Connections"
          >
            <h3>Social Media</h3>
            <ul role="list" className="social-icons-list">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label}>
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Aligned 3-column structural bottom matching image_bb031f.png */}
      <div className="footer-bottom">
        <a href="#" className="bottom-legal-link">
          Privacy policy
        </a>

        <p className="footer-copyright">
          © Copyright {year} | Design & Developed By{" "}
          <span className="highlight-text">Studio IX</span>. All rights
          reserved.
        </p>

        <a href="#" className="bottom-legal-link">
          Terms of Use
        </a>
      </div>

      {/* Stylistic visual typography reference tracking on the baseline backdrop */}
      <div className="footer-watermark" aria-hidden="true">
        STUDIO.IX
      </div>
    </footer>
  );
}
