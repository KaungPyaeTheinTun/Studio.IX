import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const sectionRef = useReveal();

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-inner">
        <span className="eyebrow-label reveal">GET IN TOUCH</span>
        <h2 className="contact-headline reveal">
          WORK<br />WITH US
        </h2>
        <div className="contact-details reveal">
          <a href="mailto:hello@studio-ix.com" className="contact-info">hello@studio-ix.com</a>
          <span className="contact-sep" aria-hidden="true">·</span>
          <a href="tel:+15551234567" className="contact-info">+1 555 123 4567</a>
        </div>
        <a href="mailto:hello@studio-ix.com" className="contact-cta reveal">
          Let's talk →
        </a>
      </div>
    </section>
  );
}
