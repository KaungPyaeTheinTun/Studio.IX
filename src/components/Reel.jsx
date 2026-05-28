import { useReveal } from '../hooks/useReveal';
import './Reel.css';

export default function Reel() {
  const sectionRef = useReveal();

  return (
    <section className="reel" ref={sectionRef}>
      <div className="reel-bg" aria-hidden="true" />
      <div className="reel-content">
        <p className="reel-text reveal">
          TOGETHER, WE WALK ON A<br />CREATIVE JOURNEY
        </p>
        <a href="#contact" className="reel-cta reveal">Work with us →</a>
      </div>
    </section>
  );
}
