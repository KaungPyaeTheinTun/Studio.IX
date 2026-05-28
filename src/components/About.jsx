import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';
import './About.css';

function Stat({ target, suffix, label }) {
  const { ref, display } = useCountUp(target, 1800, suffix);
  return (
    <div className="stat reveal" ref={ref}>
      <span className="stat-number">{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  const sectionRef = useReveal();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-left">
          <span className="eyebrow reveal">ABOUT THE STUDIO</span>
          <div className="stats">
            <Stat target={9} suffix="+" label="Years of Excellence" />
            <Stat target={90} suffix="%" label="Client Satisfaction" />
            <Stat target={275} suffix="K" label="Projects Delivered" />
          </div>
        </div>

        <div className="about-right">
          <div
            className="about-portrait reveal"
            role="img"
            aria-label="Studio portrait"
            aria-hidden="true"
          />
          <p className="about-text reveal">
            We are a creative studio obsessed with the intersection of strategy and aesthetics.
            Every pixel we push, every brand we build, and every story we tell is rooted in
            a singular belief — that great design changes how people feel.
          </p>
          <p className="about-text reveal">
            From emerging startups to established enterprises, we partner with brands
            that dare to be different. Our process is rigorous, our craft is meticulous,
            and our commitment to your vision is absolute.
          </p>
          <a href="#contact" className="about-cta reveal">
            Start a Project <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
