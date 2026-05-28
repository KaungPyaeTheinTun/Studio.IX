import './Footer.css';

const navLinks = ['About', 'Projects', 'Service', 'Contact'];
const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">STUDIO.IX</a>
          <p className="footer-tagline">Design that moves culture forward.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-nav-label">NAVIGATION</p>
          <ul role="list">
            {navLinks.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-social" aria-label="Social links">
          <p className="footer-nav-label">SOCIAL</p>
          <ul role="list">
            {socials.map(s => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p className="footer-legal">© {year} Studio IX. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
