import { useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Studio IX transformed our brand identity completely. Their attention to detail and strategic thinking elevated us from a startup to a market leader in under six months.",
    name: "Sarah Chen",
    role: "CEO, Nova Ventures",
    initials: "SC",
    color: '#C8F04A',
  },
  {
    quote: "The team's creative process is unlike anything I've experienced. They don't just execute briefs — they challenge your thinking and deliver something extraordinary.",
    name: "Marcus Rivera",
    role: "Founder, Horizon Tech",
    initials: "MR",
    color: '#a8c8f0',
  },
  {
    quote: "Every touchpoint of our rebrand exceeded expectations. The Pulse campaign generated a 340% increase in engagement. These people are artists and strategists in one.",
    name: "Aiko Tanaka",
    role: "CMO, Pulse Movement",
    initials: "AT",
    color: '#f0c8a8',
  },
  {
    quote: "From packaging to digital, the Verde Collection project was handled with such care and sophistication. Our retail sales doubled in the first quarter post-launch.",
    name: "Luca Ferrero",
    role: "Creative Director, Verde",
    initials: "LF",
    color: '#b4f0a8',
  },
  {
    quote: "The Flow Series motion work is breathtaking. Studio IX has an innate ability to translate complex ideas into visual narratives that resonate deeply with audiences.",
    name: "Priya Mehta",
    role: "Art Director, Flow Studio",
    initials: "PM",
    color: '#d4a8f0',
  },
];

export default function Testimonials() {
  const sectionRef = useReveal();
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[i];
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setActive(i);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    Array.from(container.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      if (Math.abs(childCenter - center) < Math.abs(container.children[closest].offsetLeft + container.children[closest].offsetWidth / 2 - center)) {
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials-header reveal">
        <span className="eyebrow-label">WHAT CLIENTS SAY</span>
        <h2 className="testimonials-title">Kind Words</h2>
      </div>

      <div className="testimonials-track" ref={scrollRef} onScroll={handleScroll}>
        {testimonials.map((t, i) => (
          <article key={i} className="testimonial-card">
            <span className="quote-mark" aria-hidden="true" style={{ color: t.color }}>"</span>
            <p className="quote-text">{t.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: t.color }} aria-hidden="true">
                {t.initials}
              </div>
              <div>
                <p className="author-name">{t.name}</p>
                <p className="author-role">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? 'active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Testimonial ${i + 1}`}
            role="tab"
            aria-selected={i === active}
          />
        ))}
      </div>
    </section>
  );
}
